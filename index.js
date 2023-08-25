const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const form = document.getElementById('form')
const spinner = document.getElementById('spinner')
const inputText = document.getElementById('inputText')


//Search Button onClick -> SearchLocation()

function searchLocation() {

    const APIKey = 'a05643bc79f88f80b3e2f0bf432deab2';
    const city = document.querySelector('.search-box input').value;

    //Empty Input

    if (city === '')
        return;


    // Spinner ON
    spinner.style.opacity = '1'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {


            // Spinner off
            spinner.style.opacity = '0'

            // Location Not Found

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');   

            //Location Found

            console.log('Location Found!')

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');


            //Weather PNG

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;

                case 'Rain':
                    image.src = 'images/rain.png';
                    break;

                case 'Snow':
                    image.src = 'images/snow.png';
                    break;

                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;

                case 'Haze':
                    image.src = 'images/mist.png';
                    break;

                default:
                    image.src = '';
            }

            //API Info

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '600px';


        });

}

// Enter key -> Search

form.addEventListener('submit', (e) => {

    e.preventDefault()

    searchLocation()
})

// Clear Search Button

function clearSearch(){
    
    inputText.value = ""
    container.style.height = '100px';
    

    //Small Delay Before Resetting Search


    setTimeout(() => {
        weatherBox.classList.remove('fadeIn');
        weatherDetails.classList.remove('fadeIn');
        error404.classList.remove('fadeIn');
        console.log('Cleared Search');}
    ,1000)
    
    

    
}