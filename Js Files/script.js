

  //start: Header scripts//
  let image = document.querySelector('#nav-image')
  let i = 0;
  setInterval(() => {
      let srcs = ["../images/DeutschlandFlag.png", "../images/Deutschstunde.png", "../images/turm.jpeg", "../images/Deutsch-lernen.jpg"]
          image.src = srcs[i];
          i++
          if(i===4){
              i = 0
          }
  }, 4000);
  
  let welcomeMessage = document.querySelector(".welcome-messages-item")
  let welcomeMessages = [
   "تیم آموزشی اقبال تا اخذ مدرک بین المللی زبان آلمانی در کنارتان خواهد بود",
    "آموزش آلمانی با جدیدترین فنون و متدهای روز دنیا",
    "به وبسایت شخصی استاد فریبا اقبال خوش آمدید"
  ];
  let j = 0;
  setInterval(() => {
      welcomeMessage.innerText = welcomeMessages[j]
      j++
      if(j=== 3){
          j=0
      }
  }, 7000);
  //end: Header scripts//


