class WeatherApp{
    apiKey = '3f07ca67ddmsh4f84decbe57fe58p1f09afjsne3f38c0e46d1';

    city: HTMLInputElement = document.querySelector("#inputCity");
    cityValue = this.city.value;  


    async getCity(cityValue: string){
        const weather = await this.getWeather(cityValue);

        const button = document.querySelector('#button');
        button.addEventListener('click', () => this.getWeather(cityValue));
    }

    async getWeather(cityValue: string): Promise<any>{
        const apiLink = 'http;//api.openweathermap.org/data/2.5/weather?q='+cityValue+'&APPID='+this.apiKey;
        const apiResponse = await fetch(apiLink);
        const weatherInfo = await apiResponse.json();

        return weatherInfo;
    }
}

const app = new WeatherApp();