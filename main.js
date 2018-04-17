
function getPhrase(){

  var xhr = new XMLHttpRequest();
  var url = "http://keras-sentiment-analysis.herokuapp.com/predict";
  xhr.open("POST", url, true);

  var setAccuracy = function(result) {
    var accuracy = document.getElementById("enter").value;
    document.getElementById('outputA').innerHTML = "Accuracy: "  + result  +"%";

};

  var setPolarity = function(result) {
      var polarity = document.getElementById("enter").value;
      document.getElementById('outputO').innerHTML = "Polarity: "  + result ;
  }

  var Phrase = document.getElementById("enter").value;
  document.getElementById('outputP').innerHTML = "Phrase: "  + Phrase;

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          var polarity = json.polarity;
          var accuracy = parseInt(json.accuracy * 100);
          setPolarity(polarity);
          setAccuracy(accuracy);

      }
  };

  var data = JSON.stringify({"phrase": Phrase});
  xhr.send(data);


}
