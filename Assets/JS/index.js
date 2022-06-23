  //. initializing
  fetch('http://localhost:3000/drinks')
    .then((data) => {
      return data.json();
    })
    .then((completeddata) => {
      let data1 = "";
      completeddata.map((value) => {
        data1 += `
      <div id="drinks">
        <h3>${value.strDrink}</h3>
        <img src=${value.strDrinkThumb} alt="img" class ="images">
        <p> ${value.idDrink}</p>
      </div>
    `
      });
      document.getElementById("drink").innerHTML = data1;

    }).catch((Error) => {
      console.log(Error)
    })
  //   elements