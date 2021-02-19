
let weather={
  apikay:"59c77fd233deac6dafa70c4be7b636ff",
  fetchWeather: function(city){
    fetch("http://api.openweathermap.org/data/2.5/weather?q="
    +city
    +"&units=metric&appid="
    +this.apikay )

    .then(res=>res.json())
    .then(data=>this.displayWeather(data))
  },
 displayWeather:function(data){
    const {name}=data;
    const {icon,description}=data.weather[0];
    const {temp, humidity}= data.main;
    const {speed}=data.wind;
    document.querySelector(".city").innerHTML="Weather in " + name
    document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
    document.querySelector(".description").innerHTML=description;
    document.querySelector(".temp").innerHTML=temp + "℃"
    document.querySelector(".humidity").innerHTML="Humidity: " + humidity+"%";
    document.querySelector(".wind").innerHTML="Wind speed: " + speed + "km/h";
    document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + name + "')";
   },
   search:function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
}

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
document.querySelector(".search-bar")
.addEventListener("keyup", (event)=>{
  if(event.key=="Enter"){
    weather.search();
  }
})
weather.fetchWeather("Denver");