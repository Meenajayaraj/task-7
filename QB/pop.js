fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // using the Filter function
    const pop = data.filter((country) => country.population < 200000);
    console.log("Population of country less than 2lakh:", pop);
  });
