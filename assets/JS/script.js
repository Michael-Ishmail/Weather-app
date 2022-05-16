var cityEL = document.getElementById("city")
var button = document.getElementById("btn")

button.onclick = function(){

  let city = JSON.stringify(cityEL.value)
  localStorage.setItem("city", city)
  JSON.parse(localStorage.getItem(cityEL))

  $.ajax({
  type:"GET",
  url:"https://api.openweathermap.org/data/2.5/weather?q=" + JSON.parse(city) + "&units=imperial&appid=f258fa1fe74a2f63495e8301ade24835",
  async:true,
  dataType: "json",
  success: function(data) {
              console.log(data)

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
              

              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});






}










