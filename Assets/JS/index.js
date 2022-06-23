  //. initializing
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
    
    card.innerHTML =  html=+`
    <h2>Name: ${drinks.strDrink}</h2>
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
checkDrink();
