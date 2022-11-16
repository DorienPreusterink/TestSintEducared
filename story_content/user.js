function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6jIhewmZ8OS":
        Script1();
        break;
      case "6r423IpXNbB":
        Script2();
        break;
      case "5XwVBDvZ4BV":
        Script3();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script2()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwcKyP9fkULXQvqgHR2BIa6q7ix4ryzE89-UEFuJTmjRF7ole3EkzSYc-YxqSKwNoD0zw/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
"Naam" : player.GetVar("Naam"),
"Mail" : player.GetVar("Mail"),
"Organisatie" : player.GetVar("Organisatie"),
"Tijd" : player.GetVar("Tijd")
}
}

function Script3()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

