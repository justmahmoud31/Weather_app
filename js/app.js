const ApiKey="f5dcd49fb122c58e0f4c5cd35bb1675a";
var searchbtn=document.getElementById('srchbutton')
var ApiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=cairo`;
var city=document.getElementById('city')

searchbtn.addEventListener('click',function GetName(){
    var serch=document.getElementById('srch').value
    ApiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${serch}`; 
    console.log(ApiUrl);
    console.log(serch);
    CheckWeather()
})

async function CheckWeather(){
    const Response=await fetch(ApiUrl+`&appid=${ApiKey}`);
    var Data = await Response.json();
    console.log(Data);
    DisplayWeather(Data)
}
function DisplayWeather(WeatherData){
    document.querySelector(".city").innerHTML=WeatherData.name;
    document.querySelector(".temp").innerHTML=Math.round(WeatherData.main.temp)+" "+"℃";
    document.querySelector(".humidity").innerHTML=WeatherData.main.humidity+" %";
    document.querySelector(".wind").innerHTML=WeatherData.wind.speed+" km/h";


    var WeatherIcon=document.getElementById('weathericon');
    console.log(WeatherIcon);

    if(WeatherData.weather[0].main=="Clouds"){
        
        WeatherIcon.src="./images/clouds.png";
    }
    else if(WeatherData.weather[0].main=="Clear"){
        WeatherIcon.src="./images/clear.png";
    }
    else if(WeatherData.weather[0].main=="Rain"){
        WeatherIcon.src="./images/rain.png";
    }
    else if(WeatherData.weather[0].main=="Mist"){
        WeatherIcon.src="./images/mist.png";
    }
    else if(WeatherData.weather[0].main=="Drizzle"){
        WeatherIcon.src="./images/drizzle.png";
    }
    else if(WeatherData.weather[0].main=="Snow"){
        WeatherIcon.src="./images/snow.png";
    }
    //document.querySelector(".weather").style.display="block";
 
    }
CheckWeather()
