import "./contact.scss";

///  GSAP FADE TRANSITION
import { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";

export default function Contact() {

    ///CARD FIVE
    const sectionRef = useRef(null);
    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "-60px",
        threshold: 0.95
    });
    const fadeOut = (element) => {
        gsap.to("#root > section > div.contact-container-mobile > div.cards.five > a.content-details-phone-five > h3", 0.2, {
            opacity: 0,
            // y: -1,
            ease: 'power4.out',
        });
    };
    const fadeIn = (element) => {
        gsap.to("#root > section > div.contact-container-mobile > div.cards.five > a.content-details-phone-five > h3", 0.2, {
            opacity: 1,
            // y: -1,
            ease: 'power4.out',
            stagger: {
                amount: 0.3
            }
        });
    };
    intersection && intersection.intersectionRatio < 0.95 ? fadeOut("#root > section > div.contact-container-mobile > div.cards.five > a.content-details-phone-five > h3") : fadeIn("#root > section > div.contact-container-mobile > div.cards.five > a.content-details-phone-five > h3");

    ///CARD TWO
    const sectionRef2 = useRef(null);
    const intersection2 = useIntersection(sectionRef2, {
        root: null,
        rootMargin: "-80px",
        threshold: 0.95
    });
    const fadeIn2 = (element) => {
        gsap.to("#root > section > div.contact-container-mobile > div.cards.two > a.content-details-phone-two > h3", 0.2, {
            opacity: 1,
            // y: -1,
            ease: 'power4.out',
            stagger: {
                amount: 0.3
            }
        });
    };
    const fadeOut2 = (element) => {
        gsap.to("#root > section > div.contact-container-mobile > div.cards.two > a.content-details-phone-two > h3", 0.2, {
            opacity: 0,
            // y: -1,
            ease: 'power4.out',
        });
    };
    intersection2 && intersection2.intersectionRatio < 0.95 ? fadeOut2("#root > section > div.contact-container-mobile > div.cards.two > a.content-details-phone-two > h3") : fadeIn2("#root > section > div.contact-container-mobile > div.cards.two > a.content-details-phone-two > h3");

    ///CARD ONE
    const sectionRef3 = useRef(null);
    const intersection3 = useIntersection(sectionRef3, {
        root: null,
        rootMargin: "-80px",
        threshold: 0.95
    });
    const fadeIn3 = (element) => {
        gsap.to("#root > section > div.contact-container-mobile > div.cards.one > a.content-details-phone > h3", 0.2, {
            opacity: 1,
            // y: -1,
            ease: 'power4.out',
            stagger: {
                amount: 0.3
            }
        });
    };
    const fadeOut3 = (element) => {
        gsap.to("#root > section > div.contact-container-mobile > div.cards.one > a.content-details-phone > h3", 0.2, {
            opacity: 0,
            // y: -1,
            ease: 'power4.out',
        });
    };
    intersection3 && intersection3.intersectionRatio < 0.95 ? fadeOut3("#root > section > div.contact-container-mobile > div.cards.one > a.content-details-phone > h3") : fadeIn3("#root > section > div.contact-container-mobile > div.cards.one > a.content-details-phone > h3");

    return (
        <section className="topsection-container">
            <div className="contact-container-desktop">
                <div className="cards five">
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

            <div className="contact-container-mobile" style={{
                backgroundImage: "url(images/background-black.jpg)"
            }}>
                <div className="cards five">
                    <h1>HQ Tebbernekkel</h1>
                    <a href="https://g.page/tebbernekkel?share" target="_blank" rel="noreferrer">
                        <h3>Weteringschans 79, 1017RX A'dam</h3>
                    </a>
                    <a href='mailto:info@tebbernekkel.com' target="_blank" rel="noreferrer">
                        <h3>info@tebbernekkel.com</h3>
                    </a>
                    <a href='tel:0631973485' target="_blank" rel="noreferrer" className="content-details-phone-five" ref={sectionRef}>
                        <h3 style={{ backgroundColor: '#f5a1a3', WebkitBackgroundClip: 'text' }}>+31 (0)6 31 97 34 85</h3>
                    </a>
                </div>

                <div className="cards two">
                    <h1>Production</h1>
                    <h3>Emily Barendse</h3>
                    <a href='mailto:emily@tebbernekkel.com' target="_blank" rel="noreferrer">
                        <h3>emily@tebbernekkel.com</h3>
                    </a>
                    <a href='tel:0683811543' target="_blank" rel="noreferrer" className="content-details-phone-two" ref={sectionRef2}>
                        <h3 style={{ backgroundColor: '#f5a1a3', WebkitBackgroundClip: 'text' }}>+31 (0)6 83 81 15 43</h3>
                    </a>
                </div>

                <div className="cards one">
                    <h1>Managing director</h1>
                    <h3>Quintin Baker</h3>
                    <a href='mailto:quintin@tebbernekkel.com' target="_blank" rel="noreferrer">
                        <h3>quintin@tebbernekkel.com</h3>
                    </a>
                    <a href='tel:0631973485' target="_blank" rel="noreferrer" className="content-details-phone" ref={sectionRef3}>
                        <h3 style={{ backgroundColor: '#f5a1a3', WebkitBackgroundClip: 'text' }}>+31 (0)6 31 97 34 85</h3>
                    </a>
                </div>

                <div className="cards four">
                    <h1>Finance</h1>
                    <h3>Lauren Visser</h3>
                    <a href='mailto:invoices@tebbernekkel.com' target="_blank" rel="noreferrer">
                        <h3>invoices@tebbernekkel.com</h3>
                    </a>
                    <a href='tel:0645727687' target="_blank" rel="noreferrer" className="content-details-phone-four">
                        <h3 style={{ backgroundColor: '#f5a1a3', WebkitBackgroundClip: 'text' }}>+31 (0)6 45 72 76 87</h3>
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