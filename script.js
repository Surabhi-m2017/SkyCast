async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = "0b5c5d4dae47472da1282446261006";

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("weatherCard").style.display = "block";

        document.getElementById("cityName").innerText =
            `${data.location.name}, ${data.location.country}`;

        document.getElementById("temp").innerText =
            `${data.current.temp_c}°C`;

        document.getElementById("condition").innerText =
            data.current.condition.text;

        document.getElementById("humidity").innerText =
            `${data.current.humidity}%`;

        document.getElementById("wind").innerText =
            `${data.current.wind_kph} km/h`;

        document.getElementById("icon").src =
            "https:" + data.current.condition.icon;

    } catch (error) {
        alert("Error fetching weather data");
        console.error(error);
    }
}
