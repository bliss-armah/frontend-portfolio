"use client"

import {useEffect, useState} from "react";
import logo from "@assets/images/Bliss Qodes.svg";
import {FaBars} from "react-icons/fa";
import Aside from "./Aside";
import {Link} from "react-scroll";
import Image from "next/image";
import {links} from "../utils/data";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const showSidebar = () => {
        setShow(!show);
    };

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector("#nav");
            if (window.pageYOffset > 80) {
                navbar?.classList.add("navbar-fixed");
            } else {
                navbar?.classList.remove("navbar-fixed");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="shows">
            <nav className="nav" id="nav">
                <div className="nav-center">
                    <div className="nav-header">
                        <a href="/">
                            <Image src={logo} alt={`nav logo`} className="nav-logo" width={230} height={230}
                                   priority={true}/>
                        </a>
                        <button className="nav-btn" id="nav-btn" onClick={showSidebar}>
                            <FaBars/>
                        </button>
                    </div>
                    <ul className="nav-links">
                        {links.map((link, index) =>
                            link.href ? (
                                <li key={index}>
                                    <a href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ) : (
                                <li key={index}>
                                    <Link
                                        to={link.to!}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        offset={-70}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </nav>

            {show && <Aside show={setShow}/>}
        </div>
    );
};

export default Navbar;
