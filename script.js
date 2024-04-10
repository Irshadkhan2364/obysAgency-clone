gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();




Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  /***************Loader page*********** */
/**************** loder ko wapas hatane ke liya ***************** */
var tl=gsap.timeline();
tl.from(".line h1",{
  y:110,
  stagger:0.4,
  duration:0.6,
  delay:0.5,
});
tl.from('.line-part3 p',{
  duration:0.2,
  opacity:0,
  ease:'power4.out',
  // display:'none'
})

tl.from('.line-part1, .line h2',{
  opacity:0,
  onStart:function(){
    var h5timer =document.querySelector(".line-part1 h5");
    var grow=0;
    setInterval(function(){
      if(grow<100){
        grow++;
        h5timer.innerHTML=grow;
      }else{
        grow=100;
      }
   },35)  
  },
  });

// tl.to('#line-part1',{)
tl.to('#loader',
{
  delay:3.9,
  duration:0.5,
  opacity:0,
  // display:'none'
})

tl.from('#page1',{
  y:1000,
  duration:1.5,
  opacity:0,
  ease:'power4.out'
})
tl.to('#loader',{
  display:'none',
  duration:0.5,
  opacity:0,
})
// tl.to('.line h2',{
//   duration:0.5,
//   opacity:0,
//   display:'none'
// })