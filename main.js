
const divTag = document.querySelector('.container__content')

const url = 'http://api.weatherapi.com/v1/current.json?key=ea460dbe70f64fa1a70210336243101&q=Belo Horizonte'

fetch(url).then((res) => res.json())
.then((data) => {
    const icon = data.current.condition.icon
     const locationName = data.location.name;
     const lastUptaded = data.current.last_updated;
     const temp = data.current.temp_c
     console.log(data) 
      divTag.innerHTML = `
         <p class="container__paragraph">Atualizado em ${lastUptaded}</p>
         <p class="container__paragraph">Cidade: ${locationName}</p>
         <img src=${icon}>
         <p class="container__paragraph">Temperatura:<h2>${temp}°C</h2></p>
         
     `    
})
.catch((error) => {
    console.error('Error', error)
});
