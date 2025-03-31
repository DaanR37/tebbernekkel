import "./contact.scss";
import Header from "../Header/Header";

export default function Contact() {

  return (
    <section className="contact topsection-container">
      <>
        <Header />
      </>
      <div className="contact-container">
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
          <h3>José Naaktgeboren</h3>
          <a href='mailto:invoices@tebbernekkel.com' target="_blank" rel="noreferrer">
            <h3>invoices@tebbernekkel.com</h3>
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