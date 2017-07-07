// set a global httpRequest object

var httpRequest;

// TODO: when the page (window) has loaded, make a
// request for page 1
window.onload = function(){
	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
			var myData = JSON.parse(httpRequest.responseText);

			 document.getElementById("data").innerHTML = "";
			 myData.data.map((ppl)=>{
				 	var row = document.createElement("tr");
	 				row.setAttribute("id",ppl.last_name);
					var col1 = document.createElement("td");
					col1.innerHTML = ppl.id;
					var col2 = document.createElement("td");
					col2.innerHTML = ppl.first_name;
					var col3 = document.createElement("td");
					col3.innerHTML = ppl.last_name;
					var col4 = document.createElement("td");
					var img = document.createElement("img");
					img.setAttribute("src", ppl.avatar);
					col4.appendChild(img);

					row.appendChild(col1);
					row.appendChild(col2);
					row.appendChild(col3);
					row.appendChild(col4);
					document.getElementById("data").appendChild(row);
			 })

    }
  };
  httpRequest.open("GET", "https://reqres.in/api/users?page=1", true);
  httpRequest.send();
}




function makeRequest(pageNum) {

    // TODO: create a variable "url" to store the request to
	// the current pageNum, ie:
	//
	// "https://reqres.in/api/users?page=1" // for page 1
	// "https://reqres.in/api/users?page=2" // for page 2
	// etc...
	var url = "https://reqres.in/api/users?page=" + pageNum;




	// make an HTTP request object

	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired

	httpRequest.onreadystatechange = showContents;

	// open a asynchronous HTTP (GET) request with the specified url

	httpRequest.open('GET', url, true);

	// send the request

	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);

			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			document.getElementById("data").innerHTML = "";
			jsData.data.map((ppl)=>{
 			 	var row = document.createElement("tr");
  				row.setAttribute("id",ppl.last_name);
 				var col1 = document.createElement("td");
 				col1.innerHTML = ppl.id;
 				var col2 = document.createElement("td");
 				col2.innerHTML = ppl.first_name;
 				var col3 = document.createElement("td");
 				col3.innerHTML = ppl.last_name;
 				var col4 = document.createElement("td");
 				var img = document.createElement("img");
 				img.setAttribute("src", ppl.avatar);
 				col4.appendChild(img);

 				row.appendChild(col1);
 				row.appendChild(col2);
 				row.appendChild(col3);
 				row.appendChild(col4);
 				document.getElementById("data").appendChild(row);
 		 })






			// TODO: remove the class "active" from all elements with the class "pgbtn"
			var active = document.querySelector(".active");
			if(active != null){
				active.classList.remove("active")
				active.classList.add("pgbtn");
			}




			// TODO: add the class "active" to the button corresponding to the active page, ie:
			//
			// if jsData.page is 1, add the class "active" to button element with id pgbtn1
			// if jsData.page is 2, add the class "active" to button element with id pgbtn2
			// etc...


			document.getElementById("pgbtn" + jsData.page).classList.add("active");









		} else {
			console.log('There was a problem with the request.');
		}
	}
}
