var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    var redLed = new five.Led(6);
    var blueLed = new five.Led(5);
    var yellowLed = new five.Led(4);
    var greenLed = new five.Led(3);
    var whiteLed = new five.Led(2);

    blueLed.fade(128, 6000);
    var lcd = new five.LCD({pins: [7, 8, 9, 10, 11, 12]});
    lcd.clear().print("Sad :-(");

    this.wait(3000, function() {
      blueLed.stop().off();
      redLed.blink();
      lcd.clear().print("ANGER");});

    this.wait(6000, function() {
        redLed.blink(100);
        blueLed.blink(150);
        greenLed.blink(100);
        yellowLed.blink(150)
        whiteLed.stop().off();
        lcd.clear().print("fear");
    });

    this.wait(9000, function() {
        redLed.stop().off();
        greenLed.stop().off();
        blueLed.stop().off();
        whiteLed.strobe(10);
        yellowLed.blink(80);
        lcd.clear().print("JOY");
    });

    this.wait(12000, function(){
      greenLed.strobe(10);
      yellowLed.strobe(20);
      whiteLed.stop().off();
      redLed.stop().off();
      blueLed.stop().off();
      lcd.clear().print("EWWWWW");
    });
});
  //anger disgust fear joy sadness

 /* function sadLights(){
    var blueLed = new five.Led(5);
    blueLed.fade(128, 6000);
    var lcd = new five.LCD({pins: [7, 8, 9, 10, 11, 12]});
    lcd.print("Sad :-(");
  }

  function angerLights(){
    var redLed = new five.Led(6);
    redLed.fade(128, 6000);
    var lcd = new five.LCD({pins: [7, 8, 9, 10, 11, 12]});
    lcd.print("ANGER");
  }

  function fearLights(){
    var redLed = new five.Led(6);
    redLed.blink(400);
    var greenLed = new five.Led(3);
    greenLed.blink(500);
    var yellowLed = new five.Led(4);
    yellowLed.blink(600)
    var lcd = new five.LCD({pins: [7, 8, 9, 10, 11, 12]});
    lcd.print("fear");
  }

  function joyLights(){
    var yellowLed = new five.Led(4);
    yellowLed.blink(600);
    var lcd = new five.LCD({pins: [7, 8, 9, 10, 11, 12]});
    lcd.print("JOY");
  }

  function disgustLights(){
    var greenLed = new five.Led(3);
    greenLed.strobe(50);
    var yellowLed = new five.Led(4);
    yellowLed.strobe(60);
    var lcd = new five.LCD({pins: [7, 8, 9, 10, 11, 12]});
    lcd.print("EWWWWW");
  }
  

});*/