import numpy
import matplotlib.pyplot as plt


def f(t, y):
    return t * y


def method_euler(f, a, b, N, y0):
    h = (b - 1) / N

    t = numpy.linspace(a, b, N + 1)
    w = numpy.zeros(N + 1)

    # w=alpha
    w[0] = y0

    for i in range(1, N):
        w[i] = w[i - 1] + h * f(t[i - 1], w[i - 1])

    return w, t


a = 0
b = 2
N = 10
y0 = 1

t, w = method_euler(f, a, b, N, y0)


print("t values:", t)
print("w values:", w)

plt.plot(t, w, label="Méthode d'Euler")
plt.xlabel("t")
plt.ylabel("y")
plt.title("Solution de l'EDO par la méthode d'Euler")
plt.legend()
plt.grid(True)
plt.show()
