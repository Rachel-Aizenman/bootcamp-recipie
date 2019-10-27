const express = require('express')
const request = require('request')
const app = express()
const port = 8080
const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/sanity', (req, res)=>{
    res.send("OK")
})

app.use('/recipes/:ingredient', (req, res) => {
    const ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, (request, response)=>{
        const data = JSON.parse(response.body)
        const recipes = data.results
        const recipeInfo = recipes.map(r => {return {"title": r.title, "video": r.href, "image": r.thumbnail, "ingredients": r.ingredients }})
        res.send(recipeInfo)
    })
})


//========================//
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})