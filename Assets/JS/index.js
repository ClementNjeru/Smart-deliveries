  //. initializing
  const getCocktails = async () => {
    const response = await fetch("http://localhost:3000/drinks");
    const data = await response.json();
    console.log(data);
    const results = data.results;
  };
  
  getCocktails();

//   elements


