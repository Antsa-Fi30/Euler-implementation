export const rungeMethod = (x0, v0, a, dt, timeSteps) => {
  const positions = [x0];
  const velocities = [v0];
  const times = [0];

  for (let i = 1; i <= timeSteps; i++) {
    const t = i * dt;

    const k1v = a(t, x0, v0);
    const k1x = v0;

    const k2v = a(t + 0.5 * dt, x0 + 0.5 * k1x * dt, v0 + 0.5 * k1v * dt);
    const k2x = v0 + 0.5 * k1v * dt;

    const k3v = a(t + 0.5 * dt, x0 + 0.5 * k2x * dt, v0 + 0.5 * k2v * dt);
    const k3x = v0 + 0.5 * k2v * dt;

    const k4v = a(t + dt, x0 + k3x * dt, v0 + k3v * dt);
    const k4x = v0 + k3v * dt;

    const deltaX = (dt / 6) * (k1x + 2 * k2x + 2 * k3x + k4x);
    const deltaV = (dt / 6) * (k1v + 2 * k2v + 2 * k3v + k4v);

    x0 += deltaX;
    v0 += deltaV;

    positions.push(x0);
    velocities.push(v0);
    times.push(t);
  }

  return { positions, velocities, times };
};
