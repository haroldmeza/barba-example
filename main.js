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
