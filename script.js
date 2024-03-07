
var redItem = document.querySelector('.red');
var colorPicker0 = document.createElement('input');
colorPicker0.type = 'color';
colorPicker0.style.display = 'none';
redItem.appendChild(colorPicker0);

redItem.addEventListener('click', function(event) {
    colorPicker0.style.display = 'block';
    colorPicker0.click();
    event.stopPropagation();
});

colorPicker0.addEventListener('change', function() {
    redItem.style.backgroundColor = colorPicker0.value;
    colorPicker0.style.display = 'none';
});

document.addEventListener('click', function() {
    if (colorPicker0.style.display === 'block') {
        colorPicker0.style.display = 'none';
    }
});


var white1Item = document.querySelector('.white1');
var colorPicker1 = document.createElement('input');
colorPicker1.type = 'color';
colorPicker1.style.display = 'none';
white1Item.appendChild(colorPicker1);

white1Item.addEventListener('click', function(event) {
    colorPicker1.style.display = 'block';
    colorPicker1.click();
    event.stopPropagation();
});

colorPicker1.addEventListener('change', function() {
    white1Item.style.backgroundColor = colorPicker1.value;
    colorPicker1.style.display = 'none';
});

document.addEventListener('click', function() {
    if (colorPicker1.style.display === 'block') {
        colorPicker1.style.display = 'none';
    }
});

var white2Item = document.querySelector('.white2');
var colorPicker2 = document.createElement('input');
colorPicker2.type = 'color';
colorPicker2.style.display = 'none';
white2Item.appendChild(colorPicker2);

white2Item.addEventListener('click', function(event) {
    colorPicker2.style.display = 'block';
    colorPicker2.click();
    event.stopPropagation();
});

colorPicker2.addEventListener('change', function() {
    white2Item.style.backgroundColor = colorPicker2.value;
    colorPicker2.style.display = 'none';
});

document.addEventListener('click', function() {
    if (colorPicker2.style.display === 'block') {
        colorPicker2.style.display = 'none';
    }
});

var white3Item = document.querySelector('.white3');
var colorPicker3 = document.createElement('input');
colorPicker3.type = 'color';
colorPicker3.style.display = 'none';
white3Item.appendChild(colorPicker3);

white3Item.addEventListener('click', function(event) {
    colorPicker3.style.display = 'block';
    colorPicker3.click();
    event.stopPropagation();
});

colorPicker3.addEventListener('change', function() {
    white3Item.style.backgroundColor = colorPicker3.value;
    colorPicker3.style.display = 'none';
});

document.addEventListener('click', function() {
    if (colorPicker3.style.display === 'block') {
        colorPicker3.style.display = 'none';
    }
});

var white4Item = document.querySelector('.white4');
var colorPicker4 = document.createElement('input');
colorPicker4.type = 'color';
colorPicker4.style.display = 'none';
white4Item.appendChild(colorPicker4);

white4Item.addEventListener('click', function(event) {
    colorPicker4.style.display = 'block';
    colorPicker4.click();
    event.stopPropagation();
});

colorPicker4.addEventListener('change', function() {
    white4Item.style.backgroundColor = colorPicker4.value;
    colorPicker4.style.display = 'none';
});

document.addEventListener('click', function() {
    if (colorPicker4.style.display === 'block') {
        colorPicker4.style.display = 'none';
    }
});

var white5Item = document.querySelector('.white5');
var colorPicker5 = document.createElement('input');
colorPicker5.type = 'color';
colorPicker5.style.display = 'none';
white5Item.appendChild(colorPicker5);

white5Item.addEventListener('click', function(event) {
    colorPicker5.style.display = 'block';
    colorPicker5.click();
    event.stopPropagation();
});

colorPicker5.addEventListener('change', function() {
    white5Item.style.backgroundColor = colorPicker5.value;
    colorPicker5.style.display = 'none';
});

document.addEventListener('click', function() {
    if (colorPicker5.style.display === 'block') {
        colorPicker5.style.display = 'none';
    }
});

var blueItem = document.querySelector('.blue');
var colorPicker6 = document.createElement('input');
colorPicker6.type = 'color';
colorPicker6.style.display = 'none';
blueItem.appendChild(colorPicker6);

blueItem.addEventListener('click', function(event) {
    colorPicker6.style.display = 'block';
    colorPicker6.click();
    event.stopPropagation();
});

colorPicker6.addEventListener('change', function() {
    blueItem.style.backgroundColor = colorPicker6.value;
    colorPicker6.style.display = 'none';
});

document.addEventListener('click', function() {
    if (colorPicker6.style.display === 'block') {
        colorPicker6.style.display = 'none';
    }
});

var yellowItem = document.querySelector('.yellow');
var colorPicker7 = document.createElement('input');
colorPicker7.type = 'color';
colorPicker7.style.display = 'none';
yellowItem.appendChild(colorPicker7);

yellowItem.addEventListener('click', function(event) {
    colorPicker7.style.display = 'block';
    colorPicker7.click();
    event.stopPropagation();
});

colorPicker7.addEventListener('change', function() {
    yellowItem.style.backgroundColor = colorPicker7.value;
    colorPicker7.style.display = 'none';
});

document.addEventListener('click', function() {
    if (colorPicker7.style.display === 'block') {
        colorPicker7.style.display = 'none';
    }
});

var grayItem = document.querySelector('.gray');
var colorPicker8 = document.createElement('input');
colorPicker8.type = 'color';
colorPicker8.style.display = 'none';
grayItem.appendChild(colorPicker8);

grayItem.addEventListener('click', function(event) {
    colorPicker8.style.display = 'block';
    colorPicker8.click();
    event.stopPropagation();
});

colorPicker8.addEventListener('change', function() {
    grayItem.style.backgroundColor = colorPicker8.value;
    colorPicker8.style.display = 'none';
});

document.addEventListener('click', function() {
    if (colorPicker8.style.display === 'block') {
        colorPicker8.style.display = 'none';
    }
});


