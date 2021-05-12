const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  console.log(req.params)
res.send( `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<h1>PEOPLE</h1>

<ul>

<li> <a href='/users/1'> Allen Iverson</a> </li>

<li>  <a href='/users/2'> Alex Rodriguez</a> </li>

<li> <a href='/users/3'> Peyton Manning</a> </li>

</ul>
  
</body>
</html>`)
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});