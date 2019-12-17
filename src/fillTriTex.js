import fillTexPath from './fillTexPath';

const fillTriTex = (ctx, src, dst) => {
  ctx.beginPath();
  for (let i = 0, len = dst.length; i < len; ++i) {
    ctx.lineTo(dst[i].x, dst[i].y);
  }
  ctx.closePath();

  const [
    [x0, y0],
    [x1, y1],
    [x2, y2],
  ] = dst.map(({ x, y }) => [x, y]);

  const [
    [u0, v0],
    [u1, v1],
    [u2, v2],
  ] = src.map(({ x, y }) => [x, y]);

  fillTexPath(ctx, x0, y0, x1, y1, x2, y2, u0, v0, u1, v1, u2, v2);
};

export default fillTriTex;
