  //. initializing
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
        <h3>${value.strDrink}</h3>
        <p> ${value.idDrink}</p>
      </div>
    `
      });
      document.getElementById("drink").innerHTML = data1;

    }).catch((Error) => {
      console.log(Error)
    })
    // search button