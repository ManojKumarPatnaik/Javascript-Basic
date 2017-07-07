// Data for the "HTML Video" Page

var video = {
    controls: true,
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.ogg", type: "video/ogg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.webm", type: "video/webm"}
    ]
};

window.onload = function(){
    var videoContainer = document.querySelector('#video');
    var videoString = "<video width=" + '"' + video.width + '"' +
                      "height=" + '"' + video.height + '"' + "controls=" +
                      video.controls + ">";
    this.video.source.map((src)=>{
        videoString += "<source src=" + '"' + src.src + '"' + "type=" + '"' +
                        src.type + '">';
    })
    videoString += "</video>";
    videoContainer.innerHTML = videoString;
}
