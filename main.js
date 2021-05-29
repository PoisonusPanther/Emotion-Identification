

Webcam.set({
    width: 250,
    height: 250,
    image_format: "png",
    png_quality: 90
});
Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src='+data_uri+'>';
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wfmDVVbLi/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model loaded!");
}

function mySpeechSynthesis(){
    var synth = window.speechSynthesis;
    speak_data_one = "The first prediction is hkafhsiuaehfkj";
    speak_data_two = "the second prediction is";
    var utter_this = new SpeechSynthesisUtterance(speak_data_one + speak_data_two);
    synth.speak(utter_this);
}
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, identify);
}
function identify(error, result){
    if (error){
        console.error(error);
    }
    else{
        console.log(classifier);
        prediction_one = result[0].label;
        prediction_two = result[1].label;
        document.getElementById("ename1").innerHTML = prediction_one;
        document.getElementById("ename2").innerHTML = prediction_two;
    }

    if (prediction_one == "Happy"){
        document.getElementById("emoji1").innerHTML = "&#128522;";
    }
    if (prediction_one == "Sad"){
        document.getElementById("emoji1").innerHTML = "&#128532;";
    }
    if (prediction_one == "Angry"){
        document.getElementById("emoji1").innerHTML = "&#128546;";
    }


    if (prediction_two == "Happy"){
        document.getElementById("emoji2").innerHTML = "&#128522;";
    }
    if (prediction_two == "Sad"){
        document.getElementById("emoji2").innerHTML = "&#128532;";
    }
    if (prediction_two == "Angry"){
        document.getElementById("emoji2").innerHTML = "&#128546;";
    }
}

