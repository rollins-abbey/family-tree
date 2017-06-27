var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'data.json');
request.onreadystatechange = function() {
    if ((request.status === 200) &&
        (request.readyState === 4)) {
             
var info = JSON.parse(request.responseText);
localStorage.info = JSON.stringify(info);
    }
}

request.send();

var imagePaths = [
    "images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg"
];
var showCanvas = null;
var showCanvasCtx = null;
var img = document.createElement("img");
var currentImage = 0;

window.onload = function () {
    showCanvas = document.getElementById('showCanvas');
    showCanvasCtx = showCanvas.getContext('2d');
    
    img.setAttribute('width', '800');
    img.setAttribute('height', '550');
    switchImage();
    
    setInterval(switchImage,3000);
}

function switchImage() {
    img.setAttribute('src', imagePaths[currentImage++]);
    img.onload = function() {
        if (currentImage >= imagePaths.length)
            currentImage = 0;
        showCanvasCtx.drawImage(img,200,80,600,400);
    }
}