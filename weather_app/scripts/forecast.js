const key = 'JdmuPUG0x8hz8udtp3LNcFlSwsGrW0Wa';
//get city information
const getCity = async(city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base+query);
    const data = await response.json();
    return data[0];
}
//get weather information
const getWeather = async (id)=>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base+query);
    const data = await response.json();
    //console.log(data[0]);
    return data[0];
}
// //chaining the function
// getCity('manchester').then(data => {
//     console.log(data.Key)
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// }).catch(error=> console.log(error));   