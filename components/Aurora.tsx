'use client';

import { useEffect, useRef } from 'react';
import './Aurora.css';

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \
  int index = 0;                                            \
  for (int i = 0; i < 2; i++) {                               \
     ColorStop currentColor = colors[i];                    \
     bool isInBetween = currentColor.position <= factor;    \
     index = int(mix(float(index), float(i), float(isInBetween))); \
  }                                                         \
  ColorStop currentColor = colors[index];                   \
  ColorStop nextColor = colors[index + 1];                  \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

// Minimal OGL-like classes
class Color {
  r: number;
  g: number;
  b: number;

  constructor(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    this.r = result ? parseInt(result[1], 16) / 255 : 0;
    this.g = result ? parseInt(result[2], 16) / 255 : 0;
    this.b = result ? parseInt(result[3], 16) / 255 : 0;
  }
}

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  speed?: number;
  time?: number;
}

export default function Aurora(props: AuroraProps) {
  const { colorStops = ['#5227FF', '#7cff67', '#5227FF'], amplitude = 1.0, blend = 0.5, speed = 0.5 } = props;
  const propsRef = useRef(props);
  propsRef.current = props;

  const ctnDom = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glRef = useRef<WebGL2RenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const uniformsRef = useRef<any>({});

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    const canvas = document.createElement('canvas');
    canvasRef.current = canvas;
    const gl = canvas.getContext('webgl2', {
      alpha: true,
      premultipliedAlpha: true,
      antialias: true
    });

    if (!gl) {
      console.error('WebGL2 not supported');
      return;
    }

    glRef.current = gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    canvas.style.backgroundColor = 'transparent';

    function resize() {
      if (!ctn || !canvas || !gl) return;
      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      if (uniformsRef.current.uResolution) {
        gl.uniform2f(uniformsRef.current.uResolution, width, height);
      }
    }

    // Compile shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    
    if (!vertexShader || !fragmentShader) return;

    gl.shaderSource(vertexShader, VERT);
    gl.compileShader(vertexShader);
    
    gl.shaderSource(fragmentShader, FRAG);
    gl.compileShader(fragmentShader);

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    programRef.current = program;

    // Setup geometry (fullscreen triangle)
    const positions = new Float32Array([-1, -1, 3, -1, -1, 3]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    uniformsRef.current = {
      uTime: gl.getUniformLocation(program, 'uTime'),
      uAmplitude: gl.getUniformLocation(program, 'uAmplitude'),
      uColorStops: gl.getUniformLocation(program, 'uColorStops'),
      uResolution: gl.getUniformLocation(program, 'uResolution'),
      uBlend: gl.getUniformLocation(program, 'uBlend')
    };

    // Set initial uniforms
    const colorStopsArray = colorStops.map(hex => {
      const c = new Color(hex);
      return [c.r, c.g, c.b];
    }).flat();

    gl.uniform1f(uniformsRef.current.uAmplitude, amplitude);
    gl.uniform3fv(uniformsRef.current.uColorStops, colorStopsArray);
    gl.uniform1f(uniformsRef.current.uBlend, blend);

    ctn.appendChild(canvas);

    let animateId = 0;
    let startTime = performance.now();

    const update = (t: number) => {
      animateId = requestAnimationFrame(update);
      if (!gl || !programRef.current) return;

      const elapsed = (t - startTime) * 0.001;
      const currentSpeed = propsRef.current.speed ?? speed;
      
      gl.uniform1f(uniformsRef.current.uTime, elapsed * currentSpeed);
      gl.uniform1f(uniformsRef.current.uAmplitude, propsRef.current.amplitude ?? amplitude);
      gl.uniform1f(uniformsRef.current.uBlend, propsRef.current.blend ?? blend);
      
      const stops = propsRef.current.colorStops ?? colorStops;
      const colorArray = stops.map(hex => {
        const c = new Color(hex);
        return [c.r, c.g, c.b];
      }).flat();
      gl.uniform3fv(uniformsRef.current.uColorStops, colorArray);

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    resize();
    window.addEventListener('resize', resize);
    animateId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener('resize', resize);
      if (ctn && canvas.parentNode === ctn) {
        ctn.removeChild(canvas);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, []);

  return <div ref={ctnDom} className="aurora-container" />;
}
