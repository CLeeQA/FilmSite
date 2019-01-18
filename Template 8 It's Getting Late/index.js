let requestURL = 'http://192.168.1.122:8080/api/films';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json'
request.send();
request.onload = function() {
    let requestData = request.response;
    //console.log(request.response);
    let randInt = Math.floor((Math.random() * requestData.length) + 1);
    for (let i = 0; i < requestData.length; i++) {
        let idFound = requestData[i].fid;
        if (randInt == idFound) {
            let names = requestData[i].title;
            let para = document.createElement("P");
            let rating = requestData[i].rating;
            let para2 = document.createElement("P");
            para2.innerHTML = names + " - " + rating;
            document.getElementById("div1").appendChild(para2);

            let desc = requestData[i].description;
            let para3 = document.createElement("P");
            para3.innerHTML = desc;
            document.getElementById("div2").appendChild(para3);
            
            let actors = requestData[i].actors;
            let para4 = document.createElement("P");
            para4.innerHTML = actors;
            document.getElementById("div3").appendChild(para4);
            
            let genre = requestData[i].category;
            let para5 = document.createElement("P");
            para5.innerHTML = "Genre: " + genre;
            document.getElementById("div4").appendChild(para5);
            
        }
    }
}
