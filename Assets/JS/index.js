document.getElementById('search').addEventListener('click',getCocktails)
function getCocktails(){
    // const search = document.getElementById ('search')
fetch(`http://localhost:3000/drinks`)
.then(resp => resp.json())
.then ( data => {
    let output = "";
    data.forEach(drink => { 
        output =+ 
        // output +
        `
        <div class="cock-tails" id="${drink.idDrink}">
        <img src="${drink.strDrinkThumb}" alt="drink">
        <h3>${drink.strDrink}</h3>
    </div>
        `
        
    });
})}
getCocktails()
