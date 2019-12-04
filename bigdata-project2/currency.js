const fs = require('fs');

const getCurrency = function() {
    let myFile = "currency.json";
    let fileRead = fs.readFileSync(myFile);
    return parseFile = JSON.parse(fileRead);
}

var a = getCurrency();

    let wrapp = document.getElementById('menu');
    for ( var i = 0; i < a.length; i++ ) {
        let div = "<a class='item'>";
        div +=  `<i>${a[i].name}</i>`;
        div += "</a>" + "</br>";
        console.log(div);
        wrapp.innerHTML += div;
    }
