import {gsap} from "gsap";

export const animationNavbar = () => {
    const bannerOne = document.querySelector(".banner1");
    const bannerTwo = document.querySelector(".banner2");
    const bannerThree = document.querySelector(".banner3");
    const bannerFour = document.querySelector(".banner4");

    if (bannerOne && bannerTwo && bannerThree && bannerFour) {
        const tl = gsap.timeline();

        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 0,
        }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 100,
            stagger: {
                each:0.3,
            },
            duration: 1,    
            delay: 0.5,
            ease: "power3.out"
        })
    }
    
}


