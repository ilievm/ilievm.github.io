var init = function(){
  var isMobile = navigator.userAgent &&
    navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
  var isSmall = window.innerWidth < 1000;
  
  var ps = new ParticleSlider({
    ptlGap: isMobile || isSmall ? 3 : 0,
    ptlSize: isMobile || isSmall ? 3 : 1,
    width: 1e9,
    height: 1e9
  });
    
  var gui = new dat.GUI();
  gui.add(ps, 'ptlGap').min(0).max(5).step(1).onChange(function(){
    ps.init(true);
  });
  gui.add(ps, 'ptlSize').min(1).max(5).step(1).onChange(function(){
    ps.init(true);
  });
  gui.add(ps, 'restless');
  gui.addColor(ps, 'color').onChange(function(value){
    ps.monochrome = true;
    ps.setColor(value);
	  ps.init(true);
  });
  
  
  (window.addEventListener
   ? window.addEventListener('click', function(){ps.init(true)}, false)
   : window.onclick = function(){ps.init(true)});
}

var initParticleSlider = function(){
  var psScript = document.createElement('script');
  (psScript.addEventListener
    ? psScript.addEventListener('load', init, false)
    : psScript.onload = init);
  psScript.src = './liquidTextJsS.js';
  psScript.setAttribute('type', 'text/javascript');
  document.querySelector('#particle-slider').appendChild(psScript);
  setTimeout(() => {
    try {
      document.querySelector('.dg').remove()
    } catch (error) {
    }
  }, 30);
  setTimeout(() => {
    try {
      document.querySelector('.dg').remove()
    } catch (error) {
    }
  }, 350);
  setTimeout(() => {
    try {
      document.querySelector('.dg').remove()
    } catch (error) {
    }
  }, 650);
  setTimeout(() => {
    try {
      document.querySelector('.dg').remove()
    } catch (error) {
    }
  }, 1200);
  setTimeout(() => {
    try {
      document.querySelector('.dg').remove()
    } catch (error) {
    }
  }, 2200);
  setTimeout(() => {
    try {
      document.querySelector('.dg').remove()
    } catch (error) {
    }
  }, 5100);
  setTimeout(() => {
    try {
      document.querySelector('.dg').remove()
    } catch (error) {
    }
  }, 3500);
  setTimeout(() => {
    try {
      document.querySelector('.dg').remove()
    } catch (error) {
    }
  }, 11000);
  
  setTimeout(() => {
    document.querySelector('#particle-slider').click()
  }, 1500);
}
    
(window.addEventListener
  ? window.addEventListener('load', initParticleSlider, false)
  : window.onload = initParticleSlider);
