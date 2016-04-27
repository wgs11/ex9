var table = {};
function getStuff(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            var x = xhttp.responseXML;
            console.log(x);
            var y = x.getElementsByTagName("value");
            var word = y[0].textContent;
            if (!(word in table)){
                table[word] = 1;
                var track = document.getElementById("table");
                var row = track.insertRow(-1);
                row.id = word;
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = word;
                cell2.innerHTML = table[word];
            }
            else{
                var track = document.getElementById(word).cells;
                track[1].innerHTML = parseInt(track[1].innerHTML)+1;
                table[word] =table[word]+1;
            }

        }
    };
    xhttp.open("GET", "getWords.php", true);
    xhttp.send();
}