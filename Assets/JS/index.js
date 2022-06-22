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


const renderPerson = (person) => {
    let card = document.createElement("li");
    card.className = "card";
    card.innerHTML = `
    <h2>Name: ${person.name}</h2>
      <div class="content hidden">
          <p>Mass: ${person.mass}Kgs</p>
          <p>Hair Color: ${person.hair_color}</p>
          <p>Skin Color: ${person.skin_color}</p>
      </div>
      <button class="btn">More Info</button>`;
    document.getElementById("container").appendChild(card);
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".content").forEach((item) => {
          item.classList.toggle("hidden");
          console.log("clicked");
        });
      });
    });
  };
  
  //2. Async Await
  const getCocktails = async () => {
    const response = await fetch("http://localhost:3000/drinks");
    const data = await response.json();
    console.log(data);
    const results = data.results;
  
    results.map((drinks) => getCocktails(drinks));
    console.log(results);
  };
  
  getCocktails();
