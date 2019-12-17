import Matrix from 'node-matrices';

const forwardProjectionMatrixForPoints = points => {
  const deltaX1 = points[1].x - points[2].x;
  const deltaX2 = points[3].x - points[2].x;
  const sumX = points[0].x - points[1].x + points[2].x - points[3].x;
  const deltaY1 = points[1].y - points[2].y;
  const deltaY2 = points[3].y - points[2].y;
  const sumY = points[0].y - points[1].y + points[2].y - points[3].y;
  const denominator = new Matrix([deltaX1, deltaX2], [deltaY1, deltaY2]).determinant();
  const g = new Matrix([sumX, deltaX2], [sumY, deltaY2]).determinant() / denominator;
  const h = new Matrix([deltaX1, sumX], [deltaY1, sumY]).determinant() / denominator;
  const a = points[1].x - points[0].x + g * points[1].x;
  const b = points[3].x - points[0].x + h * points[3].x;
  const c = points[0].x;
  const d = points[1].y - points[0].y + g * points[1].y;
  const e = points[3].y - points[0].y + h * points[3].y;
  const f = points[0].y;

  return new Matrix(
    [a, b, c],
    [d, e, f],
    [g, h, 1],
  );
};

export default forwardProjectionMatrixForPoints;
