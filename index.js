let weather ={
    'apiKey':'281b5337f2cae88f9d1a74848710343b',
    fetchWeather: function (city) {
        fetch( "https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        +"&units=metric&appid=" 
        + this.apiKey
        )
        .then((res) => res.json())
        .then((data) => this.displayWeather(data));
        },
    

        displayWeather : function(data) {
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            document.querySelector(".city").innerText = name;
            document.querySelector(".icon img").src = `./Icons/${icon}.png`;
            document.querySelector(".temp").innerText = temp.toFixed(0) + "°C";
            document.querySelector(".description").innerText = description;
            document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
            document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
            document.querySelector(".weather").classList.remove("loading");
        },
        search: function() {
            this.fetchWeather(document.querySelector(".search-bar").value);
        }
    };
   
    document.querySelector(".search-button").addEventListener("click", function () {
      weather.search();      
    });

    document.querySelector(".search-bar").addEventListener("keyup", function (event) {
      if (event.key == "Enter"){
        weather.search();
      }    
    });
   
    weather.fetchWeather("Veliko Tarnovo");
