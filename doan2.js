const firebaseConfig = {
  apiKey: "AIzaSyDSnijCeDSsrXzgTRYTi70El68oJb_0p-Q",
  authDomain: "air-minotoring.firebaseapp.com",
  databaseURL: "https://air-minotoring-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "air-minotoring",
  storageBucket: "air-minotoring.appspot.com",
  messagingSenderId: "380608023290",
  appId: "1:380608023290:web:a031b2f12a348d934e1743"
};
firebase.initializeApp(firebaseConfig)

// Sliders
var sliderngangTemp = document.getElementById("sliderngangTemp");
var sliderngangHumidity = document.getElementById("sliderngangHumidity");

var nd ;
var da;
var tvoc;
var eCO2;
var dust;
var mq135;
var thrtvoc;
firebase.database().ref("/DHT11/temp").on("value",function(snapshot){
   nd = snapshot.val();  
  document.getElementById("nhietdo").innerHTML = nd;
  console.log(nd);
});
//console.log(document.getElementById( document.getElementById("nhietdo")));
firebase.database().ref("/DHT11/hum").on("value",function(snapshot){
  da = snapshot.val();  
  document.getElementById("doam").innerHTML = da;
  console.log(da);
});
firebase.database().ref("/SGP30_SenSor/Data/TVOC").on("value",function(snapshot){
  tvoc = snapshot.val();  
  document.getElementById("TVOC").innerHTML = tvoc;
  console.log(tvoc);
});
firebase.database().ref("/SGP30_SenSor/Data/eCO2").on("value",function(snapshot){
  eCO2 = snapshot.val();  
  document.getElementById("CO2").innerHTML = eCO2;
  console.log(eCO2);
});
firebase.database().ref("/DustSenSor/Data").on("value",function(snapshot){
  dust = snapshot.val();  
  document.getElementById("Dust").innerHTML = dust;
  console.log(dust);
});
firebase.database().ref("/MQ135/Data").on("value",function(snapshot){
  mq135 = snapshot.val();  
  document.getElementById("MQ135").innerHTML = mq135;
  console.log(mq135);
});
// set ngưỡng trên web
firebase.database().ref("/SGP30_SenSor/Thresh_Hold/TVOC").on("value",function(snapshot){
  thrtvoc = snapshot.val();  
  document.getElementById("sliderngangIdTVOC").value = thrtvoc;
  console.log(thrtvoc);
  
});
var thrco2;
firebase.database().ref("/SGP30_SenSor/Thresh_Hold/eCO2").on("value",function(snapshot){
  thrco2 = snapshot.val();  
  document.getElementById("sliderngangIdeCO2").value = thrco2;
  console.log(thrco2);
});
var thrDust;
firebase.database().ref("/DustSenSor/Thresh_Hold").on("value",function(snapshot){
  thrDust = snapshot.val();  
  document.getElementById("sliderngangIdDust").value = thrDust;
  console.log(thrDust);
});
var thrmq135;
firebase.database().ref("/MQ135/Thresh_Hold").on("value",function(snapshot){
  thrmq135 = snapshot.val();  
  document.getElementById("sliderngangIdMQ135").value = thrmq135;
  console.log(thrmq135);
});


if(tvoc > thrtvoc){
  alert("Vượt ngưỡng");
}

