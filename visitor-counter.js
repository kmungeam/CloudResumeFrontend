function visitorCounter(){
    fetch("https://oy5h1b3o98.execute-api.us-east-1.amazonaws.com/visitorCounter")
    .then(response => response.text())
    .then((body) => {
        document.getElementById("visitor-counter").innerHTML=body
    })
}