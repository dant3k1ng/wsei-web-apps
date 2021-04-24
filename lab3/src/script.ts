class WeatherApp{
    apiKey = '7f35b1f340e1b80480399ca9664d38bb';
    i: number = 0;

    constructor(){
        this.listenButton();
        this.searchInStorage('l');
        setInterval( () => this.searchInStorage('n'), 120000 );
    }

    listenButton() {
        const addButton = <HTMLInputElement>document.getElementById("button");
        addButton.addEventListener("click", (ev: Event) => this.getCityName());
    }

    getCityName(){
        const cityInput = <HTMLInputElement>document.querySelector('#inputCity');
        const cityName = cityInput.value;

        this.createCityCard(cityName);
    }

    async getWeather(cityValue: string):Promise<any> {
        const apiLink = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${this.apiKey}`;
        const apiResponse = await fetch(apiLink);
        const weatherInfo = await apiResponse.json();

        return weatherInfo;
    }

    async createCityCard(city: string){

        const weatherInfo = await this.getWeather(city);

        const container = document.querySelector('.container');
        const cityDiv = document.createElement('div');
        cityDiv.classList.add('cityDiv');
        cityDiv.setAttribute('id', 'cityDiv'+this.i++);
        container.appendChild(cityDiv);

        const cityInfo = weatherInfo.name;
        const weatherPhoto = `http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`;
        const tempInfo = Math.round(weatherInfo.main.temp - 273.15).toString();
        const skyInfo = weatherInfo.weather[0].main;
        const airPressure = weatherInfo.main.pressure;
        const absoluteHumidity = weatherInfo.main.humidity;
        const windSpeed = weatherInfo.wind.speed;

        const cityName = document.createElement('h1');
        const weatherImg = document.createElement('img');
        const temp = document.createElement('p');
        const sky = document.createElement('p');
        const air = document.createElement('p');
        const humiditi = document.createElement('span');
        const wind = document.createElement('p');
        
        weatherImg.src = weatherPhoto;
        cityName.innerHTML = cityInfo;
        temp.innerHTML = "<b>Temperature: </b>" + tempInfo + "&deg;C";
        sky.innerHTML = "<b> Cloudy: </b>" + skyInfo;
        air.innerHTML = "<b> Air Pressure:  </b>" + airPressure + " hPa";
        humiditi.innerHTML = "<b> Absolute humidity: </b>" + absoluteHumidity + " g/m<sup>3</sup>";
        wind.innerHTML = "<b> Wind speed: </b>" + Math.round(((windSpeed*1.60)*100)/100) + " km/h";

        cityDiv.appendChild(cityName);
        cityDiv.appendChild(weatherImg);
        cityDiv.appendChild(sky);
        cityDiv.appendChild(temp);
        cityDiv.appendChild(air);
        cityDiv.appendChild(humiditi);
        cityDiv.appendChild(wind);

        this.saveConfig(weatherInfo);
    }
    
    saveConfig(data: any){
        this.i++;
        localStorage.setItem('weatherInfo' + this.i, JSON.stringify(data));
    }

    loadConfig() {
        const data = localStorage.getItem('weatherInfo');

        if(data)
            return JSON.parse(data);
        else
            return ;
    }

    searchInStorage(loadOrNot: string){
        //this.deleteCityDivs();

        const table = localStorage.length;

        for (let i = 0; i < table; i++)
        {
            let nameOfCity;
            nameOfCity = localStorage.getItem("weatherInfo" + i);
            const parsedName = JSON.parse(nameOfCity);

            if(loadOrNot === 'l')
                this.loadConfigFromLocalStorage(parsedName, 'l');
            else
                this.loadConfigFromLocalStorage(parsedName, 'n');
        }
    }

    async loadConfigFromLocalStorage(nameOfCity: any, loadOrNot: string): Promise <any> {

        const weather = await this.getWeather(nameOfCity.name);

        const container = document.querySelector('.container');
        const cityDiv = document.createElement('div');
        cityDiv.classList.add('cityDiv');
        cityDiv.setAttribute('id', 'cityDiv'+this.i++);
        container.appendChild(cityDiv);

        const cityInfo = weather.name;
        const weatherPhoto = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        const tempInfo = Math.round(weather.main.temp - 273.15).toString();
        const skyInfo = weather.weather[0].main;
        const airPressure = weather.main.pressure;
        const absoluteHumidity = weather.main.humidity;
        const windSpeed = weather.wind.speed;

        const cityName = document.createElement('h1');
        const weatherImg = document.createElement('img');
        const temp = document.createElement('p');
        const sky = document.createElement('p');
        const air = document.createElement('p');
        const humiditi = document.createElement('span');
        const wind = document.createElement('p');
        
        weatherImg.src = weatherPhoto;
        cityName.innerHTML = cityInfo;
        temp.innerHTML = "<b>Temperature: </b>" + tempInfo + "&deg;C";
        sky.innerHTML = "<b> Cloudy: </b>" + skyInfo;
        air.innerHTML = "<b> Air Pressure:  </b>" + airPressure + " hPa";
        humiditi.innerHTML = "<b> Absolute humidity: </b>" + absoluteHumidity + " g/m<sup>3</sup>";
        wind.innerHTML = "<b> Wind speed: </b>" + Math.round(((windSpeed*1.60)*100)/100) + " km/h";

        cityDiv.appendChild(cityName);
        cityDiv.appendChild(weatherImg);
        cityDiv.appendChild(sky);
        cityDiv.appendChild(temp);
        cityDiv.appendChild(air);
        cityDiv.appendChild(humiditi);
        cityDiv.appendChild(wind);

        if(loadOrNot === "l")
            this.saveConfig(weather);
    }

    /*deleteCityDivs(){
        const container = document.querySelector(".cityDiv");

        container.innerHTML = '';
    }*/
}

const app = new WeatherApp();