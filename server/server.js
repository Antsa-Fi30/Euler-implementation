const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const rungeKutta = (a, b, N, k) => {
  return {};
};

app.use(cors());
app.use(bodyParser.json());

app.post("/simulate", (req, res) => {
  const { T_initial, T_ambient, k, dt, time_period } = req.body;

  const result = eulerMethod(T_initial, T_ambient, k, dt, time_period);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
