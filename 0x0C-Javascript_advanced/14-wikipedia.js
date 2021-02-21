function createElement(data) {
    const body = document.querySelector("body");
    const paragraph = document.createElement("P");
    paragraph.innerText = data;
    body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
        callback(xmlhttp.response.query.pages["21721040"].extract);
      }
    };
    const URL =
      "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
  
    xmlhttp.open("GET", URL, true);
    xmlhttp.responseType = "json";
    xmlhttp.send();
}
  
queryWikipedia(createElement);
