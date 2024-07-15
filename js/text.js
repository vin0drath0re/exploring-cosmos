var controller2 = new ScrollMagic.Controller();

//heading

const headingEntryTween = new TimelineLite();
const headingExitTween = new TimelineLite();


headingEntryTween.add(
    TweenLite.to('#heading', 1, {
        opacity: 1,
        
        ease: Power1.easeInOut
    })
)
headingExitTween.add(
    TweenLite.to('#heading', 1, {
        opacity: 0,
        ease: Power1.easeInOut
    })
)



const headingEntry = new ScrollMagic.Scene({

    triggerElement: '#heading' ,
    duration: 400,
    triggerHook: 0.9
    


})


.setTween(headingEntryTween)
.addTo(controller2);

const headingExit = new ScrollMagic.Scene({

    

    triggerElement: 'heading' ,
    duration: 200,
    triggerHook: 0.1
    


})


.setTween(headingExitTween)
.addTo(controller2);

//quote1


const quote1EntryTween = new TimelineLite();
const quote1ExitTween = new TimelineLite();


quote1EntryTween.add(
    TweenLite.to('#quote1', 1, {
        opacity: 1,
        
        ease: Power1.easeInOut
    })
)
quote1ExitTween.add(
    TweenLite.to('#quote1', 1, {
        opacity: 0,
        ease: Power1.easeInOut
    })
)



const quote1Entry = new ScrollMagic.Scene({

    triggerElement: '#quote1' ,
    duration: 400,
    triggerHook: 0.9
    


})


.setTween(quote1EntryTween)
.addTo(controller2);

const quote1Exit = new ScrollMagic.Scene({

    

    triggerElement: '#quote1' ,
    duration: 150,
    triggerHook: 0.2
    


})


.setTween(quote1ExitTween)
.addTo(controller2);




//quote2


const quote2EntryTween = new TimelineLite();
const quote2ExitTween = new TimelineLite();


quote2EntryTween.add(
    TweenLite.to('#quote2', 1, {
        opacity: 1,
        
        ease: Power1.easeInOut
    })
)
quote2ExitTween.add(
    TweenLite.to('#quote2', 1, {
        opacity: 0,
        ease: Power1.easeInOut
    })
)



const quote2Entry = new ScrollMagic.Scene({

    triggerElement: '#quote2' ,
    duration: 400,
    triggerHook: 0.9
    


})


.setTween(quote2EntryTween)
.addTo(controller2);

const quote2Exit = new ScrollMagic.Scene({

    

    triggerElement: '#quote2' ,
    duration: 150,
    triggerHook: 0.2
    


})


.setTween(quote2ExitTween)
.addTo(controller2);


//quote3


const quote3EntryTween = new TimelineLite();
const quote3ExitTween = new TimelineLite();


quote3EntryTween.add(
    TweenLite.to('#quote3', 1, {
        opacity: 1,
        
        ease: Power1.easeInOut
    })
)
quote3ExitTween.add(
    TweenLite.to('#quote3', 1, {
        opacity: 0,
        ease: Power1.easeInOut
    })
)



const quote3Entry = new ScrollMagic.Scene({

    triggerElement: '#quote3' ,
    duration: 400,
    triggerHook: 0.9
    


})


.setTween(quote3EntryTween)
.addTo(controller2);

const quote3Exit = new ScrollMagic.Scene({

    

    triggerElement: '#quote3' ,
    duration: 150,
    triggerHook: 0.2
    


})


.setTween(quote3ExitTween)
.addTo(controller2);












//quotefinal


const quoteFinalEntryTween = new TimelineLite();
const quoteFinalExitTween = new TimelineLite();


quoteFinalEntryTween.add(
    TweenLite.to('#lastQuote', 1, {
        opacity: 1,
        
        ease: Power1.easeInOut
    })
)


const quoteFinalEntry = new ScrollMagic.Scene({

    triggerElement: '#lastQuote' ,
    duration: 5000,
    triggerHook: 0.4
    


})


.setTween(quoteFinalEntryTween)
.setPin('#lastQuote')
.addTo(controller2);









