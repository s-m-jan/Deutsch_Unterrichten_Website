//start: Header scripts//
let image = document.querySelector('#nav-image')
let i = 0;
setInterval(() => {
    let srcs = ["../images/DeutschlandFlag.png", "../images/Deutschstunde.png", "../images/Brandenburger.jpg", "../images/Deutsch-lernen.jpg"]
        image.src = srcs[i];
        i++
        if(i===4){
            i = 0
        }
}, 4000);



