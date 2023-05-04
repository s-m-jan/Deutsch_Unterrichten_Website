
// document.addEventListener("contextmenu", (e)=>{
//     e.preventDefault()
// })
  //start: Header scripts//

  let headerSearch = document.querySelector("#header-search");
  window.addEventListener("scroll", (e)=>{
    if (window.scrollY > 3) {
        headerSearch.style.height = "70px"
        headerSearch.style.transition = "height 1s"
        headerSearch.style.verticalAlign = ""
    }else{
        headerSearch.style.height = "45px"
        headerSearch.style.transition = "height 1s"
    }
    
    
  })


  
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

  //start : carousel//
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

  //end : carousel//


