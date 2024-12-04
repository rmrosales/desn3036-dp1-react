"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
export default function Page() {
    const [typewriterText, setTypewriterText] = useState('');
    const txt = 'Worldwide.';
    const speed = 200; // Speed in milliseconds
  
    useEffect(() => {
      let i = 0;
  
      const typeWriter = () => {
        if (i < txt.length) {
          setTypewriterText((prev) => prev + txt.charAt(i));
          i++;
          setTimeout(typeWriter, speed);
        }
      };
  
      typeWriter(); // Start the typing effect
  
      return () => {
        i = txt.length; // Cleanup to prevent issues if the component unmounts
      };
    }, [txt]);

    // useEffect(() => {
    //     var i = 0;
    //     var txt = 'Worldwide.';
    //     var speed = 200;

    //     function typeWriter() {
    //         if (i < txt.length) {
    //             setTypewriterText(typewriterText + txt.charAt(i));
    //             i++;
    //             setTimeout(typeWriter, speed);
    //         }
    //     }

    //     typeWriter();
    // }, []);

    return <>

        <Header />

        <main>
            <section className="banner-wrapper">
                <div className="banner-container">
                    <div className="banner-block">
                        <p className="highlight">Romeo Martin Rosales ⚡ Product Designer + Developer</p>
                        <h1>Designing Products <br /> That Matter. <span className="green-gradient" id="green-gradient">{typewriterText}</span>
                        </h1>
                        <p>I’m a UI/UX designer and developer based in Toronto focused on creating user-centered <br /> and
                            interactive digital experiences for partners around the globe.</p>
                        <div className="cta-set-wrapper">
                            <a className="hero-cta" href="#">Let's Work Together</a>
                            <a className="cta" id="case-studies-cta" href="#section2">Case Studies</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="banner-wrapper" id="section2">
                <div className="banner-container">
                    <div className="banner-block">
                        <p className="highlight">Another Section Title</p>
                        <h1>Case Studies.
                        </h1>
                        <p>I’m a UI/UX designer and developer based in Toronto focused on creating user-centered <br /> and
                            interactive digital experiences for partners around the globe.</p>
                        <div className="cta-set-wrapper">
                            <a className="hero-cta" href="#">Let's Work Together</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer>

        </footer>




    </>
}