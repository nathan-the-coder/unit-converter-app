import express from "express";
import cors from "cors";
import bodyParser from "body-parser";1
import convert from "./converter.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/convert', (req, res) => {
  console.log(req.body);
  const {category, from_unit, to_unit, value} = req.body;

  if (!category || !from_unit || !to_unit || typeof value !== 'number') {
    return res.status(400).json({error: "Missing or invalid input" });
  }

  try {
    const result = convert(category, from_unit, to_unit, value) ;
    res.json({
      result,
      from_unit,
      to_unit,
      original_value: value
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
