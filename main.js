function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.to(".animate-this", { duration: 1, y: 0, opacity: 1, stagger: 0.4, delay: 0 });
}

function contentFade(){
    var tl = gsap.timeline();
    tl.to(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
    barba.init({
        sync: true,
        transitions: [{
            name: 'opacity-transition',
            leave(data) {
              return gsap.to('.load-container', {
                duration: 1,
                width: '100%'
              });
            },
            enter(data) {
              return gsap.to('.load-container', {
                duration: 1,
                left:'100%'
              });
              
            },
            beforeLeave(){
                contentFade();
            },
            beforeEnter() {
                gsap.set(".animate-this", { y: 50, opacity: 0, duration: 0.2});
            
            },
            afterEnter(){
                contentAnimation();
                gsap.set(".load-container", {  left:0,width: 0 });
            }
          }]
    });
});
