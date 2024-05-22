class Graph:
    def __init__(self, vertices):
        self.graph = {i: [] for i in range(vertices)}
        self.V = vertices

    def add_edge(self, u, v):
        self.graph[u].append(v)
        self.graph[v].append(u)

    def is_eulerian(self):
        # Check if all vertices with non-zero degree are connected
        if not self.is_connected():
            return 0

        # Count vertices with odd degree
        odd = 0
        for i in range(self.V):
            if len(self.graph[i]) % 2 != 0:
                odd += 1

        # If odd count is 2, semi-eulerian, if odd count is 0, eulerian
        if odd == 0:
            return 2
        elif odd == 2:
            return 1
        else:
            return 0

    def is_connected(self):
        visited = [False] * self.V
        # Find a vertex with non-zero degree
        for i in range(self.V):
            if len(self.graph[i]) > 0:
                break

        # If there are no edges in the graph, return true
        if i == self.V - 1:
            return True

        # Start DFS from a vertex with non-zero degree
        self.DFS(i, visited)

        # Check if all non-zero degree vertices are visited
        for i in range(self.V):
            if visited[i] == False and len(self.graph[i]) > 0:
                return False

        return True

    def DFS(self, v, visited):
        visited[v] = True
        for i in self.graph[v]:
            if visited[i] == False:
                self.DFS(i, visited)

    def print_eulerian_path_or_cycle(self):
        res = self.is_eulerian()
        if res == 0:
            print("Graph is not Eulerian")
        elif res == 1:
            print("Graph has an Eulerian Path")
            self.print_eulerian_util()
        else:
            print("Graph has an Eulerian Circuit")
            self.print_eulerian_util()

    def print_eulerian_util(self):
        stack = []
        path = []
        current = 0

        stack.append(current)
        while stack:
            if self.graph[current]:
                stack.append(current)
                next_vertex = self.graph[current].pop()
                self.graph[next_vertex].remove(current)
                current = next_vertex
            else:
                path.append(current)
                current = stack.pop()

        print("Eulerian Path/Circuit: ", path)


# Example usage
g = Graph(5)
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 2)
g.add_edge(2, 3)
g.add_edge(3, 4)
g.add_edge(4, 0)

g.print_eulerian_path_or_cycle()
