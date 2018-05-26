
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 1250) {
      $("nav").css("background" , "#ED5D57");
	  }

	  else{
		  $("nav").css("background" , "transparent");  	
	  }
  })
})


// dual image slider
document.addEventListener('DOMContentLoaded', function(){
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;
  
    if(wrapper.className.indexOf('skewed') != -1){
      skew = 1000;
    }
    
    wrapper.addEventListener('mousemove touchmove', function(e){
      delta = (e.clientX - window.innerWidth / 2) * 0.5;
    
      handle.style.left = e.clientX + delta + 'px';
  
      topLayer.style.width= e.clientX + skew + delta + 'px';
    });
  });


  const submit = document.querySelector('#submit');
  submit.addEventListener('click', function(){
    alert("This website is only UI no backend sorry :(");
  })