//wow start
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();   
  //wow end

   //Custom scrollBar start
   let progress = document.getElementById('progressbar');
   let totalHeight=document.body.scrollHeight - window.innerHeight;
   window.onscroll = function () {
       let progressHeight = (window.pageYOffset/totalHeight)*100;
       progress.style.height = progressHeight + "%";

   }
  //  custom scrollBar end
