# Description
Map canvas image quad to another using bilinear interpolation or 3D perspective transformation

This package is Shaun Lebron's article adaptation for NPM
https://observablehq.com/@shaunlebron/texture-drawing-for-html-canvas

# Usage example
Node.js environment
```js
import { createCanvas, loadImage } from 'canvas';
import { drawArbitraryQuadImage, FILL_METHOD } from 'canvas-arbitrary-quads';

const canvas = createCanvas(256, 256);
const ctx = canvas.getContext('2d');

const srcPoints = [
  { x: 0, y: 0 },
  { x: 0, y: 255 },
  { x: 255, y: 255 },
  { x: 255, y: 0 },
];

const dstPoints = [
  { x: 128, y: 64 },
  { x: 255, y: 128 },
  { x: 128, y: 192 },
  { x: 0, y: 128 },
];

loadImage('PATH_TO_IMAGE').then(image => {
  drawArbitraryQuadImage(ctx, image, srcPoints, dstPoints, FILL_METHOD.BILINEAR);

  console.log(canvas.toDataURL());
});
```
