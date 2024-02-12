const form=document.querySelector("form");
const input= document.querySelector("input");
const img=document.querySelector("img");
const h1=document.querySelector("h1");
const h2=document.querySelector("h2");
const p=document.querySelector("p");
const card = document.querySelector("#cart");


const getWeather=  async (e)=>{
    e.preventDefault();
    try {
        const response= await fetch(`https://api.weatherapi.com/v1/current.json?key=5f17dfb18e5f405eb53174323232912&q=${input.value}&aqi=yes`);
        const data= await response.json();
         h2.innerText = data.location.name;
         h1.innerText = data.current.temp_c;
           p.innerText = data.current.condition.text;
         img.setAttribute("src",data.current.condition.icon);
         card.className = "card shadow-lg my-5 p-5 bg-transparent";

        
         form.reset();
        // console.log(data);

        



    } catch (error) {
        console.log("error");

              
    }
}

form.addEventListener("submit",getWeather);





