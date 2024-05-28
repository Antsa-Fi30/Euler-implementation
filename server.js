const PythonShell = require("python-shell");

// Créez une nouvelle instance de PythonShell
const python = new PythonShell("python", {
  mode: "text",
  pythonPath:
    "C:/Users/asus/Euler-implementation/AppData/Local/Programs/Python/Python312/Scripts",
  globals: { REACT_ROOT_DIR: "C:/Users/asus/Euler-implementation" },
});
python.on("message", function (channel, args) {
  if (args[0] === "start_server") {
    require("./server.py");
  }
});
python.send("start_server");
