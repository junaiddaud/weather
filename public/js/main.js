const cityName=document.getElementById('cityName');
const city_name= document.getElementById('city_name');
const submitBtn=document.getElementById("submission");
const temp_status=document.getElementById("temp_status");
const temp=document.getElementById("temp_val");
const dataHide=document.querySelector('.middle_layer');
const day=document.querySelector('.day')
const date=document.querySelector('.today_date')

window.onload=async()=>{
  console.log("hello");
  const date_api='http://worldclockapi.com/api/json/est/now';
  const date_data=await fetch(date_api)
  .then((response) => {
    return response.json();
  })
  const arr_date=[date_data];
console.log(arr_date);
day.innerText=arr_date[0].dayOfTheWeek;
const slice_date=arr_date[0].currentDateTime;
date.innerText=slice_date.slice(0,10);


}


const getInfo=async(event)=>{
 event.preventDefault();
 const cityVal=cityName.value;
 dataHide.classList.remove('data_hide');
 if(cityVal===""){
   city_name.innerText=`PLease write city name`;
   dataHide.classList.add('data_hide');
  
 }

 else{
 
   try{
let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=022d7fbaeffb59f7449e037713a07ac0`;
 const response=await fetch(url);
 const data= await response.json();
 const str_data=[data];
 console.log(str_data);
city_name.innerText=str_data[0].name;
temp.innerText=str_data[0].main.temp;
const tempMood=str_data[0].weather.main;
if(tempMood=="Clear"){
  temp_status.innerHTML=`
  <i class='fas fa-sun' style='color: #eccc68;'></i>
  `
}
else if(tempMood=="Clouds"){
  temp_status.innerHTML=`
  <i class='fas fa-cloud' style='color: #eccc68;'></i>
  `

}
else if(tempMood=="Rain"){
  temp_status.innerHTML=`
  <i class='fas fa-rain' style='color: #eccc68;'></i>
  `

}
else{
  temp_status.innerHTML=`
  <i class='fas fa-sun' style='color: #eccc68;'></i>
  `

}


   }
 catch{
  city_name.innerText=`PLease write city name correctly`;
  dataHide.classList.add('data_hide');

 }
}
 
}
submitBtn.addEventListener('click',getInfo);