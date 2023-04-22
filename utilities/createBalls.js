module.exports = numBalls => {
  const balls = [];

  for (let i = 0; i < numBalls; i++) {
    const radius = 10;
    const x = Math.random() * (1374 - 2 * (radius + 200)) + (radius + 200);
    const y = Math.random() * (544 - 2 * (radius + 200)) + (radius + 200);
    const vx = Math.random() * 2 - 1;
    const vy = Math.random() * 2 - 1;
    const color = 'blue';

    balls.push({ x, y, vx, vy, radius, color });
  }

  return balls;
};
