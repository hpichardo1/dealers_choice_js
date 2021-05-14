const express = require("express");
const app = express();

const PORT = 3000;

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
<h1>People</h1>

<ul>

<li> <a href='/users/1'> Allen Iverson  </a> </li>
<li> <a href='/users/2'> Alex Rodriguez </a> </li>
<li> <a href='/users/3'> Peyton Manning </a> </li>

</ul>
  
</body>
</html>`)
});

app.get('/users/:id', (req, res, next) =>{

    if (req.params.id === '1'){
      res.send(
        `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
      <h1><a href = '/' >Home</a></h1>
      
      <ul>
      <li> BasketBall Player </li>
      
      <li> Point Guard </li>
      
      <li> Legend </li>
      </ul>
        
      </body>
      </html>`)
    } else if (req.params.id === '2'){
      res.send(
        `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
      <h1><a href = '/' >Home</a></h1>
      
      <ul>
      <li> Baseball Player </li>
      
      <li> Shortstop </li>
      
      <li> Yankee </li>
      </ul>
        
      </body>
      </html>`
      )
    } else if (req.params.id === '3'){
      res.send(
        `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
      <h1><a href = '/' >Home</a></h1>
      
      <ul>
      <li> Football player </li>
      
      <li> Quarterback </li>
      
      <li> Hall of Famer </li>
      </ul>
        
      </body>
      </html>`
      )
    }
})



app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});