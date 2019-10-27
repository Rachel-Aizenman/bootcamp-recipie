const fetchRecipe = function(){
    const input = $('input').val()
    $.get(`/recipes/${input}`,function(data){
        const newRenderer = new Renderer
        newRenderer.render(data)
    })
    $('input').val("")
}

// $("img").click(function(){
//     // const check = $(this).text()
//     // console.log(check)
//     const firstIngedient = $(this).closest(".ingredients").text()
//     console.log(firstIngedient)

// })
// const fetchIngredient = function(){
//     const allIngredients = $(".ingredients").text()
//     const ingredients = allIngredients.split(',')
//     const firstIngedient = ingredients[0]
//     console.log(firstIngedient)
// }

const fetchIngredient = function(){ 
    const allIngredients = $(this).closest("#template").find(".ingredients").text() 
    const ingredients = allIngredients.split(',') 
    const firstIngedient = ingredients[0] 
    console.log(firstIngedient)
 }