import "./contact.scss";
import { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";

export default function Contact() {

    ///CARD FIVE
    const sectionRef = useRef(null);
    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "-60px", ///-60px
        threshold: 0.75
    });
    const fadeOut = (element) => {
        gsap.to(".cards.five", 0.60, {
            // duration: 8,
            opacity: 0,
            // y: -1,
            ease: 'power4.out',
        });
    };
    const fadeIn = (element) => {
        gsap.to(".cards.five", 0.60, {
            // duration: 8,
            opacity: 1,
            // y: -1,
            ease: 'power4.out',
            stagger: {
                amount: 0.3
            }
        });
    };
    intersection && intersection.intersectionRatio < 0.75 ? fadeOut(".cards.five") : fadeIn(".cards.five");

    ///CARD TWO
    // const sectionRef2 = useRef(null);
    // const intersection2 = useIntersection(sectionRef2, {
    //     root: null,
    //     rootMargin: "-60px",
    //     threshold: 1
    // });
    // const fadeIn2 = (element) => {
    //     gsap.to(".cards.two", 0.60, {
    //         // duration: 8,
    //         opacity: 1,
    //         // y: -1,
    //         ease: 'power4.out',
    //         stagger: {
    //             amount: 0.3
    //         }
    //     });
    // };
    // const fadeOut2 = (element) => {
    //     gsap.to(".cards.two", 0.60, {
    //         // duration: 8,
    //         opacity: 0,
    //         // y: -1,
    //         ease: 'power4.out',
    //     });
    // };
    // intersection2 && intersection2.intersectionRatio < 1 ? fadeOut2(".cards.two") : fadeIn2(".cards.two");

    ///CARD ONE
    // const sectionRef3 = useRef(null);
    // const intersection3 = useIntersection(sectionRef3, {
    //     root: null,
    //     rootMargin: "-60px",
    //     threshold: 1
    // });
    // const fadeIn3 = (element) => {
    //     gsap.to(".cards.one", 0.60, {
    //         // duration: 8,
    //         opacity: 1,
    //         // y: -1,
    //         ease: 'power4.out',
    //         stagger: {
    //             amount: 0.3
    //         }
    //     });
    // };
    // const fadeOut3 = (element) => {
    //     gsap.to(".cards.one", 0.60, {
    //         // duration: 8,
    //         opacity: 0,
    //         // y: -1,
    //         ease: 'power4.out',
    //     });
    // };
    // intersection3 && intersection3.intersectionRatio < 1 ? fadeOut3(".cards.one") : fadeIn3(".cards.one");

    ///CARD FOUR
    // const sectionRef4 = useRef(null);
    // const intersection4 = useIntersection(sectionRef4, {
    //     root: null,
    //     rootMargin: "-60px",
    //     threshold: 1
    // });
    // const fadeIn4 = (element) => {
    //     gsap.to(".cards.four", 0.60, {
    //         // duration: 8,
    //         opacity: 1,
    //         // y: -1,
    //         ease: 'power4.out',
    //         stagger: {
    //             amount: 0.3
    //         }
    //     });
    // };
    // const fadeOut4 = (element) => {
    //     gsap.to(".cards.four", 0.60, {
    //         // duration: 8,
    //         opacity: 0,
    //         // y: -1,
    //         ease: 'power4.out',
    //     });
    // };
    // intersection4 && intersection4.intersectionRatio < 1 ? fadeOut4(".cards.four") : fadeIn4(".cards.four");

    return (
        <section className="topsection-container">
            <div className="contact-container">
                <div ref={sectionRef} className="cards five">
                    <h1>HQ Tebbernekkel</h1>
                    <a href="https://g.page/tebbernekkel?share" target="_blank" rel="noreferrer">
                        <h3>Weteringschans 79, 1017RX A'dam</h3>
                    </a>
                    <a href='mailto:info@tebbernekkel.com' target="_blank" rel="noreferrer">
                        <h3>info@tebbernekkel.com</h3>
                    </a>
                    <a href='tel:0631973485' target="_blank" rel="noreferrer" className="content-details-phone-five">
                        <h3>+31 (0)6 31 97 34 85</h3>
                    </a>
                </div>

                <div className="cards two">
                    <h1>Production</h1>
                    <h3>Emily Barendse</h3>
                    <a href='mailto:emily@tebbernekkel.com' target="_blank" rel="noreferrer">
                        <h3>emily@tebbernekkel.com</h3>
                    </a>
                    <a href='tel:0683811543' target="_blank" rel="noreferrer" className="content-details-phone-two">
                        <h3>+31 (0)6 83 81 15 43</h3>
                    </a>
                </div>

                <div className="cards one">
                    <h1>Managing director</h1>
                    <h3>Quintin Baker</h3>
                    <a href='mailto:quintin@tebbernekkel.com' target="_blank" rel="noreferrer">
                        <h3>quintin@tebbernekkel.com</h3>
                    </a>
                    <a href='tel:0631973485' target="_blank" rel="noreferrer" className="content-details-phone">
                        <h3>+31 (0)6 31 97 34 85</h3>
                    </a>
                </div>

                <div className="cards four">
                    <h1>Finance</h1>
                    <h3>Lauren Visser</h3>
                    <a href='mailto:invoices@tebbernekkel.com' target="_blank" rel="noreferrer">
                        <h3>invoices@tebbernekkel.com</h3>
                    </a>
                    <a href='tel:0645727687' target="_blank" rel="noreferrer" className="content-details-phone-four">
                        <h3>+31 (0)6 45 72 76 87</h3>
                    </a>
                </div>

                <div className="cards three">
                    <h1>Creatives</h1>
                    <h3>Achmed Akkabi</h3>
                    <a href='mailto:achmed@tebbernekkel.com' target="_blank" rel="noreferrer">
                        <h3>achmed@tebbernekkel.com</h3>
                    </a>
                    <h3>Blue Ter Burg</h3>
                    <a href='mailto:blue@tebbernekkel.com' target="_blank" rel="noreferrer" className="content-details-mail-three-blue">
                        <h3>blue@tebbernekkel.com</h3>
                    </a>
                </div>

                <div className="cards six">
                    <h1>Socials</h1>
                    <a href='https://www.instagram.com/tebbernekkel/' target="_blank" rel="noreferrer">
                        <h3>Instagram</h3>
                    </a>
                    <a href='https://www.linkedin.com/company/tebbernekkel/?originalSubdomain=nl' target="_blank" rel="noreferrer">
                        <h3>LinkedIn</h3>
                    </a>
                    <a href='https://vimeo.com/tebbernekkel' target="_blank" rel="noreferrer">
                        <h3>Vimeo</h3>
                    </a>
                </div>
            </div>
        </section>
    )
}