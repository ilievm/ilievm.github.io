window.addEventListener("scroll", function() {
  const distance = window.scrollY;
  document.querySelector(".Introduction").style.transform = `translateY(${distance *0.2}px)`;
  
  document.querySelector("#mouseTip").style.transform = `translateY(${distance *-2.5}px)`;
  if (document.body.clientHeight < 9000) {
    if (distance>2400) {
      document.querySelector("#aboutMeTextPic").style.transform = `translateY(${((distance*0.80)-document.body.clientHeight/2.05)*0.32}px)`;
    }
  } else {
    if (distance>3000) {
      document.querySelector("#aboutMeTextPic").style.transform = `translateY(${((distance*0.85)-document.body.clientHeight/2.1)*0.28}px)`;
    }
  }
  });
