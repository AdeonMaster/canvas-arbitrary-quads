/*
  Original author: Shaun Lebron
  Original article: https://observablehq.com/@shaunlebron/texture-drawing-for-html-canvas
  Description: This package is Shaun Lebron's article adaptation for NPM
*/

import fillQuadTex from './utils/fillQuadTex';
import { tesselation, FILL_METHOD } from './constants';

export {
  FILL_METHOD,
};

export const drawArbitraryQuadImage = (ctx, texture, src, dst, method = FILL_METHOD.BILINEAR) => {
  const pattern = ctx.createPattern(texture, 'no-repeat');

  ctx.fillStyle = pattern;

  fillQuadTex(ctx, src, dst, {
    tiles: tesselation,
    method,
  });
};
