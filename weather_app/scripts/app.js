//DOM Manipulation
const cityForm = document.querySelector('form'); 
const updateUI= (data) => {
    const card = document.querySelector('.card');
    const details = document.querySelector('.details');
    const time = document.querySelector('img.time'); //image with class of time
    const icon = document.querySelector('.icon img'); //class icon with image
    console.log(data);
    //destructure properties
    // const cityDet = data.cityDet;
    // const cityWeather = data.weather;
    //destructuring data
    const {cityDet, weather} = data;
    //console.log(data);
    //console.log(cityDet);
    //console.log(weather);
    details.innerHTML =   //pass in the data from returned object the
    `
        <h5 class="my-3">${cityDet.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="dipslay-4 my-4">
        <span>${data.weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        </div>
    `;
    //update image
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
    let imgSrc = weather.IsDayTime ? "./img/day.svg" : "./img/night.svg";
    time.setAttribute('src', imgSrc);
    //update icon
    let iconSrc = `./img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);
}
const updateCity = async (city) =>{
    const cityDet = await getCity(city);
    //console.log(cityDet); 
    const weather = await getWeather(cityDet.Key);
    return { cityDet, weather}
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    //update the UI with the new city
    updateCity(city).then((data) => {
        //console.log(data),
        updateUI(data)
    }).catch(err => console.log(err));
    //store the city into localStorage
    localStorage.setItem('city', city);
    console.log(localStorage);
})
if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city')).then( data =>{
        updateUI(data);
    }).catch(err=>console.log(err));
}