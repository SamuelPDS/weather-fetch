
const divTag = document.querySelector('.container__content')

const url = 'https://api.weatherapi.com/v1/current.json?key=ea460dbe70f64fa1a70210336243101&q=Belo Horizonte'

fetch(url).then((res) => res.json())
.then((data) => {
    const icon = data.current.condition.icon
     const locationName = data.location.name;
     const lastUptaded = data.current.last_updated;
     const feelsLike = data.current.feelslike_c;
     const temp = data.current.temp_c
    // console.log(data) 
      divTag.innerHTML = `
         <p class="container__paragraph">Atualizado em ${lastUptaded}</p>
         <p class="container__paragraph">Cidade: ${locationName}</p>
         <div class="container__weather">
            <img src=${icon}>
         <p class="container__paragraph-temp">${temp}°C</p>
         </div>
         <p class="container__paragraph-temp-feesLike">Sensação Térmica: ${feelsLike}</p>
         
     `    
})
.catch((error) => {
    console.error('Error', error)
});
