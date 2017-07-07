// Data for the "HTML Audio" Page

var audio = {
    controls: true,
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function(){
  var audioContainer = document.querySelector('#audio');
  var audioString = "<audio controls=" + '"' + audio.controls + '">';
  this.audio.source.map((src)=>{
    audioString += "<source src=" + '"' + src.src + '"' +
                    "typr=" + '"' + src.type + '">';
  });
  audioString += "</audio>";
  audioContainer.innerHTML = audioString; 
}
