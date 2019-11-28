playAudio = function(file){
    var a = document.createElement('audio');
    if(!!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''))) {
  	var sound = new Audio(file);
  	sound.play();
    }
};

var egg = new Egg();

egg.addCode("up,up,down,down,left,right,left,right,b,a", function() {
    var life = jQuery('<img src="static/img/1up.png"><img>');
    life.appendTo('body').css({position: "fixed", top: "200px", right: "100px", "z-index": 99999999});
    life.animate({top: '50px', opacity: 0}, {
	duration: 1000,
	complete: function(){
            jQuery(this).remove();
	}
    });
    playAudio('static/audio/1up.wav');
});


egg.addCode("esc,esc", function() {
    /*
      var div = document.createElement('div');
      div.id = 'acidburn';
      div.innerHTML = "WOO!<br /> YOU'VE DISCOVERED AN EASTER EGG<br /> TRY KONAMI CODE";
      document.body.appendChild(div);

      window.setTimeout(function() {
      document.body.removeChild(div);
      }, 10000);
    */
    var all = document.getElementById("all").outerHTML;
    document.getElementById("all").innerHTML = "<h2>WOO!<br /><br /> YOU'VE DISCOVERED AN EASTER EGG<br /><br /> TRY KONAMI CODE<h2>";
    document.getElementById("all").style.textAlign = "center";
    window.setTimeout(function() {
	document.getElementById("all").innerHTML = all;
    }, 10000);
});

egg.listen();
