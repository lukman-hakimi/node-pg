const express = require("express");
//ROUTES
const ownerRoutes = require("./api/owners/routes");
const ratingRoutes = require("./api/ratings/routes");
const resturentRoutes = require("./api/resturents/routes");

const app = express();
const port = process.env.PORT || 5000

app.use(express.json());

//Routes

app.use("/api/owner", ownerRoutes)
app.use("/api/rating", ratingRoutes)
app.use("/api/resturent", resturentRoutes)



const start = () => {
    app.listen(5000, console.log("app is listing port: "+ port))
}

start()