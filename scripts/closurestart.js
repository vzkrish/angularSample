var app= {};

app.show = function(heading){
    return function(){
        var majHead = document.getElementById('majHeading');
        majHead.innerHTML = heading;
        console.log('Hello World- Show Called')
    }
}

app.noit = function(){
    var greatBtn = document.getElementById('greet');
    greatBtn.addEventListener('click',app.show('Hey Jaffaaa'));
}

app.noit();