import  express  from "express";
const app = express();

app.get("/inicio", (req,res) => {
  res.json({
    message : "Hola mundo"
  })
})

app.listen(3000)
console.log(`Server on port ${3000}`)