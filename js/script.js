function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.opacity = visible ? '1' : '0';
  }
  
  onReady(function() {
    setVisible('.page', true);
    setVisible('#loading', false);
  });



const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

window.onresize = function(){ location.reload(); }


const flightpath ={
    curviness: 2,
    autoRotate: true,
    values: [
        {x:100, y: -20},
        {x:300, y: 10},
        {x:500, y: 100},
        {x:750, y: -100},
        {x:350, y: -50},
        {x:600, y: 100},
        {x:800, y: 100},
        {x:window.innerWidth, y: -250}
        
    ]
};


const tween = new TimelineLite();

tween.add(
    TweenLite.to('.rocket', 1,{
        duration: 10,
        bezier: flightpath,
        ease: Power2.inOut


    })
);


var controller =  new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animationWrapper',
    duration: 7000, 
    triggerHook: 0.51
})
.setTween(tween)

.addTo(controller)


const svg = document.getElementById('layer1');
const compStyles = window.getComputedStyle(svg);
const height = parseFloat(compStyles.getPropertyValue("height"));

var controller1 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: height}});


let tweenList = [];
let el;

for (let index = 1; index < 16; index++) {

    el = TweenLite.to("#layer"+index, 1, {y: -100 * index + "px", ease: Linear.easeNone})
    tweenList.push(el);
}




var tween1 = new TimelineLite ()
.add(
    tweenList
);
// build scene
var bgScene = new ScrollMagic.Scene({
   
    

})

.setTween(tween1)
.setPin(".parallax-container")

.addTo(controller1);




