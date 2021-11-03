const titleColor = document.getElementById('header__sub-title').style;
let counter = 0;
setInterval(() => {
    counter%2 && (titleColor.color = '#f0f')
    !(counter%2) && (titleColor.color = '#000')
    console.log(counter + ' ' + counter%2);
    counter ++;
}, 800);