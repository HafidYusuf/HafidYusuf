const indexAnimationEnter = (container) => {

    $('nav').removeClass('invert-color')

    $(window).scrollTop(0);
    //SMOOTH SCROLL
    let lenis;

    // Function to initialize Lenis for smooth scrolling
    const initSmoothScrolling = () => {
        lenis = new Lenis({
            lerp: .1, // Lower values create a smoother scroll effect
            smoothWheel: true // Enables smooth scrolling for mouse wheel events
        });
        lenis.on('scroll', () => ScrollTrigger.update());
        const scrollFn = (time) => {
            lenis.raf(time); // Run Lenis' requestAnimationFrame method
            requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
        };
        requestAnimationFrame(scrollFn);
    };

    initSmoothScrolling();
    Splitting();

    //NAVBAR
    /*
    var nav = $('nav a, dotlottie-player');
    var burger = $(".menu-toggle");

    TweenMax.staggerFrom(nav, 2, {y:-20,autoAlpha:0,ease:Power4.easeOut,delay:2},.1);
    TweenMax.from(burger, 1, {y:-20,autoAlpha:0,ease:Power4.easeOut,delay:2.5});
    */

    //NAV FUNCTION FOR MOBILE
    $('#burger-button').click(function () {
        $('.ham-menu').addClass('visible');
    });
    $('.closeit, .mobile-menu').click(function () {
        $('.ham-menu').removeClass('visible');
    });
}
    
const cleanGSAP = () => {
	ScrollTrigger.getAll().forEach( t => t.kill(false) )
	ScrollTrigger.refresh()
	window.dispatchEvent(new Event("resize"))
}


function resourcesAnimation(container){
    function myFunction(x) {
        if (x.matches) {
            // If media query matches
            gsap.utils.toArray(".first-haft").forEach((section, i) => {
                gsap.fromTo(section,{x: 0}, {
                    scrollTrigger: {
                        trigger: section.parentElement,
                        start: 'top bottom+=100px',
                        end: 'bottom top',
                        scrub: true
                    },
                    x: -300,
                    y: 0,
                    ease: "none"
                });
            });

            gsap.utils.toArray(".second-haft").forEach((section, i) => {
                gsap.fromTo(section,{x: 0}, {
                    scrollTrigger: {
                        trigger: section.parentElement,
                        start: 'top bottom+=100px',
                        end: 'bottom top',
                        scrub: true
                    },
                    x: -250,
                    y: 0,
                    ease: "none"
                });
            });

            gsap.utils.toArray(".first-haficon, .third-haficon, .fifth-haficon").forEach((section, i) => {
                gsap.fromTo(section,{x: 0}, {
                    scrollTrigger: {
                        trigger: section.parentElement,
                        start: 'top bottom+=100px',
                        end: 'bottom top',
                        scrub: true
                    },
                    x: -200,
                    y: 0,
                    ease: "none"
                });
            });
            gsap.utils.toArray(".second-haficon, .forth-haficon").forEach((section, i) => {
                gsap.fromTo(section,{x: 0}, {
                    scrollTrigger: {
                        trigger: section.parentElement,
                        start: 'top bottom+=100px',
                        end: 'bottom top',
                        scrub: true
                    },
                    x: -150,
                    y: 0,
                    ease: "none"
                });
            });
        } else {
            // Then log this message to the console

            gsap.utils.toArray(".first-haft, .first-haficon, .third-haficon, .fifth-haficon").forEach((section, i) => {
                gsap.fromTo(section,{y: 0}, {
                    scrollTrigger: {
                        trigger: section.parentElement,
                        start: 'top bottom+=100px',
                        end: 'bottom top',
                        scrub: true
                    },
                    y: -200,
                    x: 0,
                    ease: "none"
                });
            });

            gsap.utils.toArray(".second-haficon, .forth-haficon, .second-haft").forEach((section, i) => {
                gsap.fromTo(section,{y: 0}, {
                    scrollTrigger: {
                        trigger: section.parentElement,
                        start: 'top bottom+=100px',
                        end: 'bottom top',
                        scrub: true
                    },
                    y: -150,
                    x: 0,
                    ease: "none"
                });
            });
        }
    }

    // Create a MediaQueryList object
    var x = window.matchMedia("(max-width: 1100px)")

    // Call listener function at run time
    myFunction(x);

    // Attach listener function on state changes
    x.addEventListener("change", function() {
        myFunction(x);
    });
}



function aboutAnimation(container){
    gsap.set(".client-logo", {xPercent: 0});
    gsap.to(".client-logo", {xPercent: -50, duration: 15, ease: Linear.easeNone, repeat: -1});

    //ADD PARALLAX TO DETAIL ABOUT
    gsap.utils.toArray(".hafid-picture").forEach((section, i) => {
        const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;

        gsap.fromTo(section,{y: -heightDiff}, {
            scrollTrigger: {
                trigger: section.parentElement,
                scrub: true
            },
            y: "100",
            ease: "none"
        });
    });

    gsap.utils.toArray(".small-hafid-pic-container img").forEach((section, i) => {
        const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;

        gsap.fromTo(section,{y: -heightDiff}, {
            scrollTrigger: {
                trigger: section.parentElement,
                scrub: true
            },
            y: 50,
            ease: "none"
        });
    });

    $(".picture-accessory").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(".picture-accessory");

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                start: "0% 100%",
                end: "100% 0%",
                scrub: 0
            }
        });
        tl.to(targetElement, {
            rotate: -90,
            ease: "none"
        });
    });

    function myFunction(x) {
        if (x.matches) {
            gsap.utils.toArray(".second-value").forEach((section, i) => {
                const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;

                gsap.fromTo(section,{y: -heightDiff - 150}, {
                    scrollTrigger: {
                        trigger: section.parentElement,
                        scrub: true
                    },
                    y: 60,
                    x: 0,
                    ease: "none"
                });
            });
            gsap.utils.toArray(".third-value").forEach((section, i) => {
                const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;

                gsap.fromTo(section,{y: -heightDiff}, {
                    scrollTrigger: {
                        trigger: section.parentElement,
                        scrub: true
                    },
                    y: 100,
                    x: 0,
                    ease: "none"
                });
            });
        }
    }

    // Create a MediaQueryList object
    var x = window.matchMedia("(min-width: 1100px)")

    // Call listener function at run time
    myFunction(x);

    // Attach listener function on state changes
    x.addEventListener("change", function() {
        myFunction(x);
    });

    /**
    * Magnetic Buttons
    */
    const QQ = (s, o = document) => o.querySelectorAll(s);

    QQ('.magnetic-hover').forEach(el => el.addEventListener('mousemove', function(e) {
    const pos = this.getBoundingClientRect();
    const mx = e.clientX - 100 - pos.left; 
    const my = e.clientY - 150 - pos.top;
    
    this.style.transform = 'translate('+ mx * 0.15 +'px, '+ my * 0.3 +'px) rotate(-20deg)';
    this.children[0].style.transform = 'translate('+ mx * 0.025 +'px, '+ my * 0.075 +'px)';
    }));

    QQ('.magnetic-hover').forEach(el => el.addEventListener('mouseleave', function() {
    this.style.transform = 'translate3d(0px, 0px, 0px) rotate(-20deg)';
    this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
    }));
}



/* Page Transition Cover (In & Out Animation) */
const coverAnimationLeave = () => {
    gsap.set($(".cover-transition h2 .char"), {y:10, autoAlpha:0});
    gsap.set($(".cover-transition"), {height: "0%", bottom: 0, top: "auto"});

    var tl = gsap.timeline();

    return tl
    .to($(".cover-transition"), {duration: 1, height: "100%", ease: "Expo.easeInOut",})
}
const coverAnimationEnter = () => {
    Splitting();
    gsap.set($(".cover-transition-load"), {height: "0", top: 0, autoAlpha: 0});
    gsap.set($(".cover-transition h2 .char"), {y:10, autoAlpha:0});
    gsap.set($(".cover-transition"), {height: "100%", bottom: "auto", top: 0});
    gsap.set($(".invisible-div"), {css: {"margin-bottom": "96px"}});

    var tl = gsap.timeline();

    return tl
    .staggerTo($(".cover-transition h2 .char"), .3, { y: 0, autoAlpha:1}, 0.01)
    .to($(".cover-transition h2 .char"), {y: -10, autoAlpha:0}, 1)
    .to($(".cover-transition"), {duration: 1.3, height: "0%",top: "0", ease: "Expo.easeInOut"})
    .from($(".hero"), {duration: 1.3, ease: "Expo.easeInOut", height: "250%"}, 1.5)
    .from($(".about-intro, .resources-page, .title, .tagline"), {duration: 1.3, ease: "Expo.easeInOut", css: {"padding-top": "480px"}}, 1.5)
    .to($(".invisible-div"), {duration: 1, ease: "power4.easeOut", css: {"margin-bottom": "0"}}, 3)
    .set($(".cover-transition"), {height: "0%", bottom: 0, top: "auto"})
}
/* End of Page Transition Cover */

/* Preloader Animation */
const coverAnimationLoad = () => {
    Splitting();
    gsap.set($(".cover-transition-load"), {height: "100%", top: 0});
    gsap.set($(".cover-transition-load h2 .char"), {y: 0, autoAlpha:1, opacity:1});
    gsap.set($(".invisible-div"), {css: {"margin-bottom": "96px"}});

    var tl = gsap.timeline();
    return tl
    .staggerTo($(".cover-transition-load h2 .char"), .3, { y: -10, autoAlpha:0, delay:1}, 0.01)
    .to($(".cover-transition-load"), {duration: 1.3, height: 0, ease: "Expo.easeInOut"})
    .from($(".hero"), {duration: 1.3, ease: "Expo.easeInOut", height: "250%"}, 1.5)
    .from($(".about-intro, .resources-page, .title, .tagline"), {duration: 1.3, ease: "Expo.easeInOut", css: {"padding-top": "480px"}}, 1.5)
    .to($(".invisible-div"), {duration: 1, ease: "power4.easeOut", css: {"margin-bottom": "0"}}, 3)
}
/* End of Preloader Animation */

/* Detail Work First Build Up Animation */
function detailAnimation(container) {
    var img = $('.parallax-content');
    var link = $('.client-link .char');
    var title = $('.title .word');
    var icon = $('.client-link svg');
    var detail = $('.detail-right p');
    var element = $('.detail-element-blue-bottom, .detail-element-blue');
    var tl = gsap.timeline();

    gsap.set(img, {bottom:"130%"});
    gsap.set(element, {autoAlpha:0});

    tl
    .staggerFrom(link, 1, {y:10,autoAlpha:0,ease:Power4.easeOut, delay: 2.5},.02)
    .from(icon, 1, {y:10,autoAlpha:0,ease:Power4.easeOut},"-=100%")
    .from(title, {y:10, duration: 1, autoAlpha:0, ease:Power4.easeOut, stagger: 0.05}, "-=50%")
    .from(detail, {y:10, duration: 1, autoAlpha:0, ease:Power4.easeOut, stagger: 0.08}, "-=50%")
    .to(element, 1, {autoAlpha:1,ease:Power4.easeOut},"-=100%")
    .to(img, 1.5, {bottom:"0%",ease:Power4.easeOut});

    //ADD PARALLAX TO DETAIL CONTENT
    gsap.utils.toArray(".parallax-window .parallax-content").forEach((section, i) => {
        const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;

        gsap.fromTo(section,{y: -heightDiff}, {
            scrollTrigger: {
                trigger: section.parentElement,
                start: "top bottom+=100",
                scrub: true
            },
            y: 100,
            ease: "none"
        });
    });
}
/* End of Detail Work First Build Up Animation */


/* Homepage Whole Animation */
function homeAnimation(container){
    //TweenMax.staggerFrom('.tagline .word', 1, {y:10,autoAlpha:0,ease:Power3.easeOut,delay:4},.03);
    TweenMax.from('.quote .word, .quote-caption .word', 1, {
        scrollTrigger: {
            trigger: ".quote",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "restart reverse restart reverse"
        },
        y:10,
        autoAlpha:0,
        ease:Power3.easeOut,
        stagger: 0.03,
        delay:0
    });
    gsap.to('.works', {width: '100%',
        scrollTrigger: {
            trigger: '.works',
            start: 'top bottom',
            end: 'top center',
            scrub: true
        }
    })
    //NAV CHANGE COLOR
    ScrollTrigger.create({
        trigger: "#works",
        start: "top top+=150px",
        end: "bottom top+=150px",
        toggleClass: {targets: "nav", className: "invert-color"}
    });
    //ADD PARALLAX TO DETAIL CONTENT
    gsap.utils.toArray(".work-img img").forEach((section, i) => {
        const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;

        gsap.fromTo(section,{y: -heightDiff}, {
            scrollTrigger: {
                trigger: section.parentElement,
                scrub: true
            },
            y: 20,
            ease: "none"
        });
    });
    /**
    * Magnetic Buttons
    */
    const QQ = (s, o = document) => o.querySelectorAll(s);

    QQ('.magnetic-hover').forEach(el => el.addEventListener('mousemove', function(e) {
        const pos = this.getBoundingClientRect();
        const mx = e.clientX - 100 - pos.left; 
        const my = e.clientY - 150 - pos.top;
        
        this.style.transform = 'translate('+ mx * 0.15 +'px, '+ my * 0.3 +'px) rotate(-20deg)';
        this.children[0].style.transform = 'translate('+ mx * 0.025 +'px, '+ my * 0.075 +'px)';
    }));

    QQ('.magnetic-hover').forEach(el => el.addEventListener('mouseleave', function() {
        this.style.transform = 'translate3d(0px, 0px, 0px) rotate(-20deg)';
        this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
    }));
}


/* BARBA Init */
barba.init({
    transitions: [{
        name: 'home-tansition',//HOME TRANSITION
        to: {namespace: ['home']},
        leave: ({current}) => coverAnimationLeave(current.container),
        enter({next}) {
            cleanGSAP();
            coverAnimationEnter(next.container);
            indexAnimationEnter(next.container);
            homeAnimation(next.container);
            resourcesAnimation(next.container);
        },
        once({next}) {
            coverAnimationLoad(next.container);
            indexAnimationEnter(next.container);
            resourcesAnimation(next.container);
            homeAnimation(next.container);
        }
    },
    {
        name: 'about-tansition',//ABOUT TRANSITION
        to: {namespace: ['about']},
        leave: ({current}) => coverAnimationLeave(current.container),
        enter({next}) {
            cleanGSAP();
            coverAnimationEnter(next.container);
            indexAnimationEnter(next.container);
            aboutAnimation(next.container);
        },
        once({next}) {
            coverAnimationLoad(next.container);
            indexAnimationEnter(next.container);
            aboutAnimation(next.container);
        }
    },
    {
        name: 'resources-tansition',//RESOURCES TRANSITION
        to: {namespace: ['resources']},
        leave: ({current}) => coverAnimationLeave(current.container),
        enter({next}) {
            cleanGSAP();
            coverAnimationEnter(next.container);
            indexAnimationEnter(next.container);
            resourcesAnimation(next.container);
        },
        once({next}) {
            coverAnimationLoad(next.container);
            indexAnimationEnter(next.container);
            resourcesAnimation(next.container);
        }
    },
    {
        name: 'detail-tansition',//DETAIL WORK TRANSITION
        to: {namespace: ['detail']},
        leave: ({current}) => coverAnimationLeave(current.container),
        enter({next}) {
            cleanGSAP();
            coverAnimationEnter(next.container);
            indexAnimationEnter(next.container);
            detailAnimation(next.container);
        },
        once({next}) {
            coverAnimationLoad(next.container);
            indexAnimationEnter(next.container);
            detailAnimation(next.container);
        }
    }]
});