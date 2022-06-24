  //. initializing
  const drinks = document.getElementById('drink')
  console.log(drink)

  fetch(`http://localhost:3000/drinks`)
    .then((data) => {
      return data.json();
    })
    .then((completeddata) => {
      let data1 = "";
      completeddata.map((value) => {
        data1 += `
      <div id="drinks">
        <img src=${value.strDrinkThumb} alt="img" class ="images">
        <button onclick="myFunction()" class="bag-btn" id ="like"><i class="fa fa-heart fa-lg"></i></button>
        <h3>${value.strDrink}</h3>
        <p> ${value.idDrink}</p>
      </div>
               `
      });
      document.getElementById("drink").innerHTML = data1;

    }).catch((Error) => {
      console.log(Error)
    })
  // order button
    function myFunction() {
      alert("Successfully Added");
    }



  // function myFunction() {
  //   alert("Your Order has been received successfully!");
  // }
  const searchDrink = () => {
    
    fetch(`http://localhost:3000/drinks${input.value}`)
      .then((resp) => resp.json())
      .then(Drink => {
        data1.innerHTML = "";
        Drink.results.forEach(value => {
          completeddata(value)

        });
      })
      
  }

  let inputForm = document.querySelector('form')
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    searchDrink();
  })