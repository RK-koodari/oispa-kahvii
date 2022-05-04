// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "./img/mehu2.png",
        "./img/mehu4.png",
        "./img/mehu8.png",
        "./img/mehu16.png",
        "./img/mehu32.png",
        "./img/mehu64.png",
        "./img/mehu128.png",
        "./img/mehu256.png",
        "./img/mehu512.png",
        "./img/mehu1024.png",
        "./img/mehu2048.png",
        "./img/super.png",
    "./img/katko.jpg",

    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }