import numpy as np
import matplotlib.pyplot as plt


# Définir les équations de mouvement
def f(t, state):
    x, y, vx, vy = state
    dxdt = vx
    dydt = vy
    return np.array([dxdt, dydt, 0, 0])


# Algorithme de Runge-Kutta de quatrième ordre
def runge_kutta(f, state, t, h):
    k1 = h * f(t, state)
    k2 = h * f(t + h / 2, state + k1 / 2)
    k3 = h * f(t + h / 2, state + k2 / 2)
    k4 = h * f(t + h, state + k3)
    return state + (k1 + 2 * k2 + 2 * k3 + k4) / 6


# Paramètres de simulation
t0 = 0
tf = 10
h = 0.1
t_values = np.arange(t0, tf, h)
initial_state = np.array([0, 0, 1, 1])  # (x0, y0, vx, vy)

# Listes pour stocker les positions
x_values = []
y_values = []

# Simulation
state = initial_state
for t in t_values:
    x_values.append(state[0])
    y_values.append(state[1])
    state = runge_kutta(f, state, t, h)

# Visualisation du mouvement
plt.plot(x_values, y_values, label="Trajectoire du véhicule")
plt.xlabel("x")
plt.ylabel("y")
plt.title("Simulation du mouvement d'un véhicule")
plt.legend()
plt.grid()
plt.show()
