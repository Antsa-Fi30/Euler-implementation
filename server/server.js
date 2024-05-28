const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/simulate", (req, res) => {
  const { T_initial, T_ambient, k, dt, time_period } = req.body;

  const eulerMethod = (T_initial, T_ambient, k, dt, time_period) => {
    let T = T_initial;
    let times = [0];
    let temperatures = [T_initial];

    for (let t = 1; t <= time_period / dt; t++) {
      T = T - k * (T - T_ambient) * dt;
      times.push(t * dt);
      temperatures.push(T);
    }

    return { times, temperatures };
  };

  const result = eulerMethod(T_initial, T_ambient, k, dt, time_period);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
