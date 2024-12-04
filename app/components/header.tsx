import React from "react";
import Image from "next/image";
import Logo from "../public/images/top-logo-v2.png";
import HamburgerMenu from "./hamburger";
export default function Header() {
    return <>

        <header id="header">
            <nav className="nav-wrapper">
                <div className="nav-container">
                    {/* <img src="/images/top-logo-v2.svg" alt="Rom Studio" /> */}
                    <Image src={"/images/top-logo-v2.svg"} width={100} height={100} alt="Logo" />
                    {/* <div className="main-nav" id="mainNav">
                        <ul className="nav-menu">
                            <li><a className="nav-link" href="./index.html">Home</a></li>
                            <li><a className="nav-link" href="#section2">Case Studies</a></li>
                            <li><a className="nav-link" href="#">About</a></li>
                            <li><a className="nav-link" href="#">Resume</a></li>
                            <li><a className="hero-nav-link" href="#">Hire Me</a></li>
                        </ul>
                        <div className="hamburger">
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>

                    </div> */}
                    <HamburgerMenu />
                </div>
            </nav>
        </header>

    </>
}