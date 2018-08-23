var app= {};

app.show = function(){
    console.log('Hello World');
    var majHead = document.getElementById('majHeading');
    majHead.innerHTML = 'Java Script Examples';
    console.log('Hello World- Show Called')
}

app.noit = function(){
    var greatBtn = document.getElementById('greet');
    greatBtn.addEventListener('click',app.show);
}

app.noit();
