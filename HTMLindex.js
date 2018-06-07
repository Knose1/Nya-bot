//Source: https://stackoverflow.com/questions/8199760/how-to-get-the-browser-language-using-javascript
var userLang = navigator.language || navigator.userLanguage;
userLang = userLang.toLowerCase();
if (userLang != "en" && userLang != "fr")
    userLang = "en";

window.location.replace(`./${userLang}/home/`); 
