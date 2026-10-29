
function wdisplay()
{
    var city = document.getElementById("SBar")
    var cityname=city.value
    const apiKey="6e53963f4ba885799e43ceaf41277a90"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apiKey}`
   
    fetch(url)
         .then(function(response){
            return response.json();
         })
         .then(function(data){
            var CName=data.name
            var temp = data.main.temp
            var desc = data.weather[0].description
            var wspeed =data.wind.speed
            var wspk=(wspeed*3.6).toFixed(2)
            document.getElementById("Cname").textContent = CName
            document.getElementById("temp").textContent= "Temperature: "+temp+"° C"
            var wicon=document.getElementById("wIcon")
            if(desc.includes("clear"))
            {
                wicon.src="clearsky.jpg"

            }
            else if (desc.includes("rain")||desc.includes("drizzle")) {
                wicon.src="rainysky.jpg"
            }
            else if(desc.includes("wind")){
                wicon.src="windysky.jpg"
            }
            else if(desc.includes("cloud")){
                wicon.src="cloudysky.jpg"
            }
            else{
                wicon.src="sunnysky.jpg"
            }
            document.getElementById("desc").textContent=desc
            document.getElementById("wspeed").textContent=wspk+" Km/h"


         })
         .catch(function(error){
            document.getElementById("Cname").textContent="City Not found"
            document.getElementById("temp").textContent=""
            document.getElementById("desc").textContent=""
            document.getElementById("wspeed").textContent=""
            })
    
}