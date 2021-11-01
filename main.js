Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera")
Webcam.attach("#camera")
 function snapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML='<img  id="img" src="'+data_uri+'"/>';
     });
 }
 console.log('ml5 version' , ml5.version)
 classifier = ml5.imageCLassifier('https://teachablemachine.withgoogle.com/models/znc-rgb4S/',modelLoadded)
 function modelLoadded() {
     console.log("modelLoadded");
 }

 function speak(){
     var synth = windown.speechSythesis;
     var speak_data = "The Prediction Is "+prediction;
     var utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis);
 }
 