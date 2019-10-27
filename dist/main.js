const fetchRecipe = function(){
    const input = $('input').val()
    $.get(`/recipes/${input}`,function(data){
        const newRenderer = new Renderer
        newRenderer.render(data)
    })
    $('input').val("")
}


const fetchIngredient = function(){ 
    const allIngredients = $(this).closest("#template").find(".ingredients").text() 
    const ingredients = allIngredients.split(',') 
    const firstIngedient = ingredients[0] 
    console.log(firstIngedient)
 }