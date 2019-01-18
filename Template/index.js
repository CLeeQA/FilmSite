let requestURL = 'http://192.168.1.254:8080/api/films';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json'
request.send();

function randFilm() {
    let requestData = request.response;
    for(let j = 0; j < requestData.length; j ++) { 
        let randInt = Math.floor((Math.random() * requestData.length) + 1);
        let names = requestData[j].title;
        if(names.includes("ACADEMY DINOSAUR")) { 
            document.getElementById("div1").innerHTML += names + "<br>";
        }
    }
}

function randFilm() {
    let requestData = request.response;
    let randInt = Math.floor((Math.random() * requestData.length) + 1);
    for (let i = 0; i < requestData.length; i++) {
        let idFound = requestData[i].fid;
        if (randInt == idFound) {
            let names = requestData[i].title;
            let para = document.createElement("P");
            para.innerHTML = names;
            document.getElementById("div1").appendChild(para);
        }
    }
}
