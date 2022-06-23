// document.getElementById('search').addEventListener('click', getCocktails)

// function getCocktails() {
//     // const search = document.getElementById ('search')
//     fetch(`http://localhost:3000/drinks`)
//         .then(resp => resp.json())
//         .then(data => {
//             console.log(data)
//             let html = "";
//             data.forEach(drink => {
//                 // output =+
//                 //     // output +
//              html += `
//         <div class="drinks" id = "drink">
//         <img src="${data.strDrinkThumb}"alt="drink">
//         <h3>${data.strDrink}</h3>
//     </div>  
//     `
//             });
//         })
// }
// getCocktails()
  
  //2. initializing
  const getCocktails = async () => {
    const response = await fetch("http://localhost:3000/drinks");
    const data = await response.json();
    console.log(data);
    const results = data.results;
  
    results.map((drinks) => getCocktails(drinks));
    console.log(results);
  };
  
  getCocktails();

//   elements
const checkDrink = (drinks) => {
    let card = document.createElement("li");
    card.className = "drinks";
    card.innerHTML = `
    <h2>Name: ${drinks.name}</h2>
    <div class = "dname">
        <p>strDrink: ${drinks.strDrink}<p/>
        <p>strDrinkThumb: ${drinks.strDrinkThumb}<p/>
    <div/>
    `
    document.getElementById("drinks").appendChild(card);
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".content").forEach((item) => {
          item.classList.toggle("hidden");
          console.log("clicked");
        });
      });
    });

}
