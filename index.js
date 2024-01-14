import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json([
    {
      id: 1,
      name: "Suraj",
    },
    {
      id: 2,
      name: "Sukhi",
    },
    {
      id: 3,
      name: "Suman",
    },
    {
      id: 4,
      name: "Ruchitha",
    },
  ]);
});

app.listen(8080, () => {
  console.log("Listening on server 8080");
});
