import Matrix from 'node-matrices';

const projectPoint = (point, projectionMatrix) => {
  const pointMatrix = projectionMatrix.multiply(new Matrix([point.x], [point.y], [1]));

  return {
    x: pointMatrix.get(0, 0) / pointMatrix.get(2, 0),
    y: pointMatrix.get(1, 0) / pointMatrix.get(2, 0),
  };
};

export default projectPoint;
