var cityEL = document.getElementById("city")
var button = document.getElementById("btn")

button.onclick = function(){

  let city = JSON.stringify(cityEL.value)
  localStorage.setItem("city", city)
  JSON.parse(localStorage.getItem(cityEL))

  $.ajax({
  type:"GET",
  url:"https://api.openweathermap.org/data/2.5/weather?q=" + JSON.parse(city) + "&appid=f258fa1fe74a2f63495e8301ade24835",
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json)
              
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});






}










