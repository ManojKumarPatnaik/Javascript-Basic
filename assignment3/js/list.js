// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function(){
    var fruitContainer = document.querySelector("#fruit");
    var fileContainer = document.querySelector("#file");
    var fruitString = "";
    var fileString = "<ul>"
    this.fruits.map((fruit)=>{
       fruitString += "<li>" + fruit + "</li>";
    });
    this.directory.map((item)=>{
        if(item.type == "file"){
            fileString += "<li>" + item.name + "</li>";
        }
        else{
            fileString += "<li>" + item.name + "<ul style=" + '"list-style-type:circle"' + ">";
            // setTimeout(function(){


              item.files.map((file)=>{
                fileString += "<li>" + file.name + "</li>";
              })// why map() runs first?(JavaScript is single-threaded)
              fileString += "</ul>" + "</li>";

            // }, 5000)


        }
      });



    fruitContainer.innerHTML = fruitString;
    fileContainer.innerHTML = fileString;
};
