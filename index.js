const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const spinner = document.getElementById('spinner')
const inputText = document.getElementById('autoComplete')
const form = document.getElementById('form')
const x = document.getElementById('x');


//Autocomplete Countries
const autoCompleteJS = new autoComplete({
    placeHolder: "Enter your Location",
    data: {

        src: [{
            name: "Abidjan, Ivory Coast"
        }, {
            name: "Abu Dhabi, United Arab Emirates"
        }, {
            name: "Abuja, Nigeria"
        }, {
            name: "Accra, Ghana"
        }, {
            name: "Addis Ababa, Ethiopia"
        }, {
            name: "Ahmedabad, India"
        }, {
            name: "Aleppo, Syria"
        }, {
            name: "Alexandria, Egypt"
        }, {
            name: "Algiers, Algeria"
        }, {
            name: "Almaty, Kazakhstan"
        }, {
            name: "Amman, Jordan"
        }, {
            name: "Amsterdam, Netherlands"
        }, {
            name: "Anchorage, United States"
        }, {
            name: "Andorra la Vella, Andorra"
        }, {
            name: "Ankara, Turkey"
        }, {
            name: "Antananarivo, Madagascar"
        }, {
            name: "Apia, Samoa"
        }, {
            name: "Arnold, United States"
        }, {
            name: "Ashgabat, Turkmenistan"
        }, {
            name: "Asmara, Eritrea"
        }, {
            name: "Asuncion, Paraguay"
        }, {
            name: "Athens, Greece"
        }, {
            name: "Auckland, New Zealand"
        }, {
            name: "Avarua, Cook Islands"
        }, {
            name: "Baghdad, Iraq"
        }, {
            name: "Baku, Azerbaijan"
        }, {
            name: "Bamako, Mali"
        }, {
            name: "Banda Aceh, Indonesia"
        }, {
            name: "Bandar Seri Begawan, Brunei"
        }, {
            name: "Bandung, Indonesia"
        }, {
            name: "Bangkok, Thailand"
        }, {
            name: "Bangui, Central African Republic"
        }, {
            name: "Banjul, Gambia"
        }, {
            name: "Barcelona, Spain"
        }, {
            name: "Barranquilla, Colombia"
        }, {
            name: "Basrah, Iraq"
        }, {
            name: "Basse-Terre, Guadeloupe"
        }, {
            name: "Basseterre, Saint Kitts and Nevis"
        }, {
            name: "Beijing, China"
        }, {
            name: "Beirut, Lebanon"
        }, {
            name: "Bekasi, Indonesia"
        }, {
            name: "Belem, Brazil"
        }, {
            name: "Belgrade, Serbia"
        }, {
            name: "Belmopan, Belize"
        }, {
            name: "Belo Horizonte, Brazil"
        }, {
            name: "Bengaluru, India"
        }, {
            name: "Berlin, Germany"
        }, {
            name: "Bern, Switzerland"
        }, {
            name: "Bishkek, Kyrgyzstan"
        }, {
            name: "Bissau, Guinea-Bissau"
        }, {
            name: "Bogota, Colombia"
        }, {
            name: "Brasilia, Brazil"
        }, {
            name: "Bratislava, Slovakia"
        }, {
            name: "Brazzaville, Republic of the Congo"
        }, {
            name: "Bridgetown, Barbados"
        }, {
            name: "Brisbane, Australia"
        }, {
            name: "Brussels, Belgium"
        }, {
            name: "Bucharest, Romania"
        }, {
            name: "Budapest, Hungary"
        }, {
            name: "Buenos Aires, Argentina"
        }, {
            name: "Bujumbura, Burundi"
        }, {
            name: "Bursa, Turkey"
        }, {
            name: "Busan, South Korea"
        }, {
            name: "Cairo, Egypt"
        }, {
            name: "Cali, Colombia"
        }, {
            name: "Caloocan, Philippines"
        }, {
            name: "Camayenne, Guinea"
        }, {
            name: "Canberra, Australia"
        }, {
            name: "Cape Town, South Africa"
        }, {
            name: "Caracas, Venezuela"
        }, {
            name: "Casablanca, Morocco"
        }, {
            name: "Castries, Saint Lucia"
        }, {
            name: "Cayenne, French Guiana"
        }, {
            name: "Charlotte Amalie, U.S. Virgin Islands"
        }, {
            name: "Chengdu, China"
        }, {
            name: "Chennai, India"
        }, {
            name: "Chicago, United States"
        }, {
            name: "Chisinau, Moldova"
        }, {
            name: "Chittagong, Bangladesh"
        }, {
            name: "Chongqing, China"
        }, {
            name: "Colombo, Sri Lanka"
        }, {
            name: "Conakry, Guinea"
        }, {
            name: "Copenhagen, Denmark"
        }, {
            name: "Cordoba, Argentina"
        }, {
            name: "Curitiba, Brazil"
        }, {
            name: "Daegu, South Korea"
        }, {
            name: "Daejeon, South Korea"
        }, {
            name: "Dakar, Senegal"
        }, {
            name: "Dallas, United States"
        }, {
            name: "Damascus, Syria"
        }, {
            name: "Dar es Salaam, Tanzania"
        }, {
            name: "Delhi, India"
        }, {
            name: "Denver, United States"
        }, {
            name: "Dhaka, Bangladesh"
        }, {
            name: "Dili, Timor Leste"
        }, {
            name: "Djibouti, Djibouti"
        }, {
            name: "Dodoma, Tanzania"
        }, {
            name: "Doha, Qatar"
        }, {
            name: "Dongguan, China"
        }, {
            name: "Douala, Cameroon"
        }, {
            name: "Douglas, Isle of Man"
        }, {
            name: "Dubai, United Arab Emirates"
        }, {
            name: "Dublin, Ireland"
        }, {
            name: "Durban, South Africa"
        }, {
            name: "Dushanbe, Tajikistan"
        }, {
            name: "Faisalabad, Pakistan"
        }, {
            name: "Fort-de-France, Martinique"
        }, {
            name: "Fortaleza, Brazil"
        }, {
            name: "Freetown, Sierra Leone"
        }, {
            name: "Fukuoka, Japan"
        }, {
            name: "Funafuti, Tuvalu"
        }, {
            name: "Gaborone, Botswana"
        }, {
            name: "George Town, Malaysia"
        }, {
            name: "Georgetown, Guyana"
        }, {
            name: "Gibraltar, Gibraltar"
        }, {
            name: "Gitega, Burundi"
        }, {
            name: "Giza, Egypt"
        }, {
            name: "Guadalajara, Mexico"
        }, {
            name: "Guangzhou, China"
        }, {
            name: "Guatemala City, Guatemala"
        }, {
            name: "Guayaquil, Ecuador"
        }, {
            name: "Gujranwala, Pakistan"
        }, {
            name: "Gustavia, Saint Barthelemy"
        }, {
            name: "Gwangju, South Korea"
        }, {
            name: "Hamburg, Germany"
        }, {
            name: "Hanoi, Vietnam"
        }, {
            name: "Harare, Zimbabwe"
        }, {
            name: "Havana, Cuba"
        }, {
            name: "Helsinki, Finland"
        }, {
            name: "Ho Chi Minh City, Vietnam"
        }, {
            name: "Hong Kong, Hong Kong"
        }, {
            name: "Honiara, Solomon Islands"
        }, {
            name: "Honolulu, United States"
        }, {
            name: "Houston, United States"
        }, {
            name: "Hyderabad, India"
        }, {
            name: "Hyderabad, Pakistan"
        }, {
            name: "Ibadan, Nigeria"
        }, {
            name: "Incheon, South Korea"
        }, {
            name: "Isfahan, Iran"
        }, {
            name: "Islamabad, Pakistan"
        }, {
            name: "Istanbul, Turkey"
        }, {
            name: "Izmir, Turkey"
        }, {
            name: "Jaipur, India"
        }, {
            name: "Jakarta, Indonesia"
        }, {
            name: "Jeddah, Saudi Arabia"
        }, {
            name: "Jerusalem, Israel"
        }, {
            name: "Johannesburg, South Africa"
        }, {
            name: "Juarez, Mexico"
        }, {
            name: "Juba, South Sudan"
        }, {
            name: "Kabul, Afghanistan"
        }, {
            name: "Kaduna, Nigeria"
        }, {
            name: "Kampala, Uganda"
        }, {
            name: "Kano, Nigeria"
        }, {
            name: "Kanpur, India"
        }, {
            name: "Kaohsiung, Taiwan"
        }, {
            name: "Karachi, Pakistan"
        }, {
            name: "Karaj, Iran"
        }, {
            name: "Kathmandu, Nepal"
        }, {
            name: "Kawasaki, Japan"
        }, {
            name: "Kharkiv, Ukraine"
        }, {
            name: "Khartoum, Sudan"
        }, {
            name: "Khulna, Bangladesh"
        }, {
            name: "Kigali, Rwanda"
        }, {
            name: "Kingsburg, United States"
        }, {
            name: "Kingston, Jamaica"
        }, {
            name: "Kingstown, Saint Vincent and the Grenadines"
        }, {
            name: "Kinshasa, Democratic Republic of the Congo"
        }, {
            name: "Kobe, Japan"
        }, {
            name: "Kolkata, India"
        }, {
            name: "Kota Bharu, Malaysia"
        }, {
            name: "Kowloon, Hong Kong"
        }, {
            name: "Kuala Lumpur, Malaysia"
        }, {
            name: "Kumasi, Ghana"
        }, {
            name: "Kuwait, Kuwait"
        }, {
            name: "Kyiv, Ukraine"
        }, {
            name: "Kyoto, Japan"
        }, {
            name: "La Paz, Bolivia"
        }, {
            name: "Lagos, Nigeria"
        }, {
            name: "Lahore, Pakistan"
        }, {
            name: "Libreville, Gabon"
        }, {
            name: "Lilongwe, Malawi"
        }, {
            name: "Lima, Peru"
        }, {
            name: "Lisbon, Portugal"
        }, {
            name: "Ljubljana, Slovenia"
        }, {
            name: "Lome, Togo"
        }, {
            name: "London, United Kingdom"
        }, {
            name: "Los Angeles, United States"
        }, {
            name: "Luanda, Angola"
        }, {
            name: "Lubumbashi, Democratic Republic of the Congo"
        }, {
            name: "Lusaka, Zambia"
        }, {
            name: "Luxembourg, Luxembourg"
        }, {
            name: "Macau, Macao"
        }, {
            name: "Madrid, Spain"
        }, {
            name: "Majuro, Marshall Islands"
        }, {
            name: "Makassar, Indonesia"
        }, {
            name: "Malabo, Equatorial Guinea"
        }, {
            name: "Male, Maldives"
        }, {
            name: "Mamoudzou, Mayotte"
        }, {
            name: "Managua, Nicaragua"
        }, {
            name: "Manama, Bahrain"
        }, {
            name: "Manaus, Brazil"
        }, {
            name: "Manila, Philippines"
        }, {
            name: "Maputo, Mozambique"
        }, {
            name: "Maracaibo, Venezuela"
        }, {
            name: "Maracay, Venezuela"
        }, {
            name: "Mariehamn, Aland Islands"
        }, {
            name: "Marigot, Saint Martin"
        }, {
            name: "Maseru, Lesotho"
        }, {
            name: "Mashhad, Iran"
        }, {
            name: "Mbabane, Eswatini"
        }, {
            name: "Mecca, Saudi Arabia"
        }, {
            name: "Medan, Indonesia"
        }, {
            name: "Medellin, Colombia"
        }, {
            name: "Medina, Saudi Arabia"
        }, {
            name: "Melbourne, Australia"
        }, {
            name: "Mexico City, Mexico"
        }, {
            name: "Miami, United States"
        }, {
            name: "Minsk, Belarus"
        }, {
            name: "Mogadishu, Somalia"
        }, {
            name: "Monaco, Monaco"
        }, {
            name: "Monrovia, Liberia"
        }, {
            name: "Montevideo, Uruguay"
        }, {
            name: "Montreal, Canada"
        }, {
            name: "Moroni, Comoros"
        }, {
            name: "Moscow, Russia"
        }, {
            name: "Mosul, Iraq"
        }, {
            name: "Multan, Pakistan"
        }, {
            name: "Mumbai, India"
        }, {
            name: "Muscat, Oman"
        }, {
            name: "N'Djamena, Chad"
        }, {
            name: "Nagoya, Japan"
        }, {
            name: "Nairobi, Kenya"
        }, {
            name: "Nanchong, China"
        }, {
            name: "Nanjing, China"
        }, {
            name: "Nassau, Bahamas"
        }, {
            name: "Nay Pyi Taw, Myanmar"
        }, {
            name: "New York, United States"
        }, {
            name: "Niamey, Niger"
        }, {
            name: "Nicosia, Cyprus"
        }, {
            name: "Nouakchott, Mauritania"
        }, {
            name: "Noumea, New Caledonia"
        }, {
            name: "Novosibirsk, Russia"
        }, {
            name: "Nuku'alofa, Tonga"
        }, {
            name: "Nur-Sultan, Kazakhstan"
        }, {
            name: "Nuuk, Greenland"
        }, {
            name: "Oranjestad, Aruba"
        }, {
            name: "Osaka, Japan"
        }, {
            name: "Oslo, Norway"
        }, {
            name: "Ottawa, Canada"
        }, {
            name: "Ouagadougou, Burkina Faso"
        }, {
            name: "Pago Pago, American Samoa"
        }, {
            name: "Palembang, Indonesia"
        }, {
            name: "Palo Alto, United States"
        }, {
            name: "Panama, Panama"
        }, {
            name: "Papeete, French Polynesia"
        }, {
            name: "Paramaribo, Suriname"
        }, {
            name: "Paris, France"
        }, {
            name: "Perth, Australia"
        }, {
            name: "Philadelphia, United States"
        }, {
            name: "Phnom Penh, Cambodia"
        }, {
            name: "Phoenix, United States"
        }, {
            name: "Podgorica, Montenegro"
        }, {
            name: "Port Louis, Mauritius"
        }, {
            name: "Port Moresby, Papua New Guinea"
        }, {
            name: "Port of Spain, Trinidad and Tobago"
        }, {
            name: "Port-Vila, Vanuatu"
        }, {
            name: "Port-au-Prince, Haiti"
        }, {
            name: "Porto Alegre, Brazil"
        }, {
            name: "Porto-Novo, Benin"
        }, {
            name: "Prague, Czechia"
        }, {
            name: "Praia, Cabo Verde"
        }, {
            name: "Pretoria, South Africa"
        }, {
            name: "Pristina, Kosovo"
        }, {
            name: "Puebla, Mexico"
        }, {
            name: "Pune, India"
        }, {
            name: "Pyongyang, North Korea"
        }, {
            name: "Quezon City, Philippines"
        }, {
            name: "Quito, Ecuador"
        }, {
            name: "Rabat, Morocco"
        }, {
            name: "Rawalpindi, Pakistan"
        }, {
            name: "Recife, Brazil"
        }, {
            name: "Reykjavik, Iceland"
        }, {
            name: "Riga, Latvia"
        }, {
            name: "Rio de Janeiro, Brazil"
        }, {
            name: "Riyadh, Saudi Arabia"
        }, {
            name: "Road Town, British Virgin Islands"
        }, {
            name: "Rome, Italy"
        }, {
            name: "Roseau, Dominica"
        }, {
            name: "Saint George's, Grenada"
        }, {
            name: "Saint Helier, Jersey"
        }, {
            name: "Saint John's, Antigua and Barbuda"
        }, {
            name: "Saint Peter Port, Guernsey"
        }, {
            name: "Saint Petersburg, Russia"
        }, {
            name: "Saint-Denis, Reunion"
        }, {
            name: "Saint-Pierre, Reunion"
        }, {
            name: "Saipan, Northern Mariana Islands"
        }, {
            name: "Salvador, Brazil"
        }, {
            name: "San Antonio, United States"
        }, {
            name: "San Diego, United States"
        }, {
            name: "San Francisco, United States"
        }, {
            name: "San Jose, United States"
        }, {
            name: "San Juan, Argentina"
        }, {
            name: "San Marino, United States"
        }, {
            name: "San Salvador, El Salvador"
        }, {
            name: "Sanaa, Yemen"
        }, {
            name: "Santa Cruz de la Sierra, Bolivia"
        }, {
            name: "Santiago, Chile"
        }, {
            name: "Santo Domingo, Dominican Republic"
        }, {
            name: "Sao Paulo, Brazil"
        }, {
            name: "Sao Tome, Sao Tome and Principe"
        }, {
            name: "Sapporo, Japan"
        }, {
            name: "Sarajevo, Bosnia and Herzegovina"
        }, {
            name: "Seattle, United States"
        }, {
            name: "Semarang, Indonesia"
        }, {
            name: "Seoul, South Korea"
        }, {
            name: "Shanghai, China"
        }, {
            name: "Sharjah, United Arab Emirates"
        }, {
            name: "Shenzhen, China"
        }, {
            name: "Singapore, Singapore"
        }, {
            name: "Skopje, North Macedonia"
        }, {
            name: "Sofia, Bulgaria"
        }, {
            name: "South Tangerang, Indonesia"
        }, {
            name: "Soweto, South Africa"
        }, {
            name: "Stockholm, Sweden"
        }, {
            name: "Sucre, Bolivia"
        }, {
            name: "Surabaya, Indonesia"
        }, {
            name: "Surat, India"
        }, {
            name: "Suva, Fiji"
        }, {
            name: "Sydney, Australia"
        }, {
            name: "Tabriz, Iran"
        }, {
            name: "Taipei, Taiwan"
        }, {
            name: "Tallinn, Estonia"
        }, {
            name: "Tangerang, Indonesia"
        }, {
            name: "Tarawa, Kiribati"
        }, {
            name: "Tashkent, Uzbekistan"
        }, {
            name: "Tbilisi, Georgia"
        }, {
            name: "Tegucigalpa, Honduras"
        }, {
            name: "Tehran, Iran"
        }, {
            name: "Tel Aviv, Israel"
        }, {
            name: "Thimphu, Bhutan"
        }, {
            name: "Tianjin, China"
        }, {
            name: "Tijuana, Mexico"
        }, {
            name: "Tirana, Albania"
        }, {
            name: "Tokyo, Japan"
        }, {
            name: "Toronto, Canada"
        }, {
            name: "Torshavn, Faroe Islands"
        }, {
            name: "Tripoli, Libya"
        }, {
            name: "Tunis, Tunisia"
        }, {
            name: "Ulan Bator, Mongolia"
        }, {
            name: "Vaduz, Liechtenstein"
        }, {
            name: "Valencia, Venezuela"
        }, {
            name: "Valletta, Malta"
        }, {
            name: "Vancouver, Canada"
        }, {
            name: "Victoria, Canada"
        }, {
            name: "Vienna, Austria"
        }, {
            name: "Vientiane, Laos"
        }, {
            name: "Vilnius, Lithuania"
        }, {
            name: "Warsaw, Poland"
        }, {
            name: "Washington, United States"
        }, {
            name: "Wellington, New Zealand"
        }, {
            name: "Willemstad, Curacao"
        }, {
            name: "Windhoek, Namibia"
        }, {
            name: "Wuhan, China"
        }, {
            name: "Xi'an, China"
        }, {
            name: "Yamoussoukro, Ivory Coast"
        }, {
            name: "Yangon, Myanmar"
        }, {
            name: "Yaounde, Cameroon"
        }, {
            name: "Yekaterinburg, Russia"
        }, {
            name: "Yerevan, Armenia"
        }, {
            name: "Yokohama, Japan"
        }, {
            name: "Zagreb, Croatia"
        }],
        // Data source 'Object' key to be searched
        keys: ["name"]
    },
    resultItem: {
        highlight: true
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection.name;
                searchLocation();

                x.style.display = "block";


            }
        }
    }
});

//Expand Searchbox When Result Found
document.querySelector("#autoComplete").addEventListener("response", function () {

    container.style.height = '260px';
    weatherBox.classList.remove('fadeIn');
    weatherDetails.classList.remove('fadeIn');

});


//Search Button onClick -> SearchLocation()

function searchLocation() {

    const APIKey = 'a05643bc79f88f80b3e2f0bf432deab2';
    const city = document.querySelector('.search-box input').value;

    //Empty Input Do Nothing

    if (city === '')
        return;

    else {

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
                    console.warn('Location Not Found!')
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
}

// Clear Search Button

function clearSearch() {



    inputText.value = ""
    container.style.height = '100px';


    //Small Delay Before Resetting Search


    setTimeout(() => {
        weatherBox.classList.remove('fadeIn');
        weatherDetails.classList.remove('fadeIn');
        error404.classList.remove('fadeIn');
        x.style.display = "none";
        console.log('Cleared Search');
    }
        , 500)




}