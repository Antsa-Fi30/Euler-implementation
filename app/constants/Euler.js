export const eulerMethod = (T0, T_env, k, dt, time_period) => {
  const N = Math.floor(time_period / dt);
  const T_values = new Array(N + 1).fill(0);
  const t_values = Array.from({ length: N + 1 }, (_, i) => i * dt);

  T_values[0] = T0;

  for (let i = 0; i < N; i++) {
    T_values[i + 1] = T_values[i] - dt * k * (T_values[i] - T_env);
  }

  return { t_values, T_values };
};
