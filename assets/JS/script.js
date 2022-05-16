var cityEL = document.getElementById("city")
var button = document.getElementById("btn")

button.onclick = function(){

  let city = JSON.stringify(cityEL.value)
  localStorage.setItem("city", city)
  JSON.parse(localStorage.getItem(cityEL))

  $.ajax({
  type:"GET",
  url:"https://api.openweathermap.org/data/2.5/forecast?q=" + JSON.parse(city) + "&units=imperial&appid=f258fa1fe74a2f63495e8301ade24835",
  async:true,
  dataType: "json",
  success: function(data) {
              console.log(data)

              $('.city-name').empty().append("Current Forecast for " + JSON.parse(city))

              var today = dayjs().format('MM/DD/YYYY')
              var tomorrow = dayjs().add(1, 'day').format('MM/DD/YYYY')
              var tomorrow2 = dayjs().add(2, 'day').format('MM/DD/YYYY')
              var tomorrow3 = dayjs().add(3, 'day').format('MM/DD/YYYY')
              var tomorrow4 = dayjs().add(4, 'day').format('MM/DD/YYYY')
              var tomorrow5 = dayjs().add(5, 'day').format('MM/DD/YYYY')
              
              $('.day-0-date').empty().append(today)
              $('.day-1-date').empty().append(tomorrow)
              $('.day-2-date').empty().append(tomorrow2)
              $('.day-3-date').empty().append(tomorrow3)
              $('.day-4-date').empty().append(tomorrow4)
              $('.day-5-date').empty().append(tomorrow5)

              $('.day-0-img').empty().attr('src', "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png")
              $('.day-1-img').empty().attr('src', "http://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + ".png")
              $('.day-2-img').empty().attr('src', "http://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + ".png")
              $('.day-3-img').empty().attr('src', "http://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png")
              $('.day-4-img').empty().attr('src', "http://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + ".png")
              $('.day-5-img').empty().attr('src', "http://openweathermap.org/img/wn/" + data.list[5].weather[0].icon + ".png")

              $('.day-0-weather').empty().append("Temp: " + data.list[0].main.temp + " F")
              $('.day-1-weather').empty().append("Temp: " + data.list[1].main.temp + " F")
              $('.day-2-weather').empty().append("Temp: " + data.list[2].main.temp + " F")
              $('.day-3-weather').empty().append("Temp: " + data.list[3].main.temp + " F")
              $('.day-4-weather').empty().append("Temp: " + data.list[4].main.temp + " F")
              $('.day-5-weather').empty().append("Temp: " + data.list[5].main.temp + " F")

              $('.day-0-wind').empty().append("Wind: " + data.list[0].wind.speed + " MPH")
              $('.day-1-wind').empty().append("Wind: " + data.list[1].wind.speed + " MPH")
              $('.day-2-wind').empty().append("Wind: " + data.list[2].wind.speed + " MPH")
              $('.day-3-wind').empty().append("Wind: " + data.list[3].wind.speed + " MPH")
              $('.day-4-wind').empty().append("Wind: " + data.list[4].wind.speed + " MPH")
              $('.day-5-wind').empty().append("Wind: " + data.list[5].wind.speed + " MPH")

              $('.day-0-wind').empty().append("Humidity: " + data.list[0].main.humidity + " %")
              $('.day-1-wind').empty().append("Humidity: " + data.list[1].main.humidity + " %")
              $('.day-2-wind').empty().append("Humidity: " + data.list[2].main.humidity + " %")
              $('.day-3-wind').empty().append("Humidity: " + data.list[3].main.humidity + " %")
              $('.day-4-wind').empty().append("Humidity: " + data.list[4].main.humidity + " %")
              $('.day-5-wind').empty().append("Humidity: " + data.list[5].main.humidity + " %")


              

              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});






}










