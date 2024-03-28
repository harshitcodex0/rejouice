function cursorEffect(){
    var page1content = document.querySelector("#page1-content");
    var cursor = document.querySelector("#cursor");

    page1content.addEventListener("mousemove", function (dets) {
      gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
      });
    });

    page1content.addEventListener("mouseenter", function () {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
      });
    });
    page1content.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        scale: 0,
        opacity: 1,
      });
    });
}
cursorEffect();

function page2Animation (){
    gsap.from(".elem h1", {
      y: 120,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 47%",
        end: "top 46%",
        markers: true,
        scrub: 2
      },
    });
    
}