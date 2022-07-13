window.addEventListener("scroll", function() {
  const distance = window.scrollY;
  document.querySelector(".Introduction").style.transform = `translateY(${distance *0.2}px)`;
  
  document.querySelector("#mouseTip").style.transform = `translateY(${distance *-2.5}px)`;

  if (distance>2000) {
    document.querySelector("#aboutMeText").style.transform = `translateY(${(distance-2700)*0.3}px)`;
  }
  });
