"use client"
import {socialIcons} from "../utils/data";
import {dateYear, footerExcludedPaths} from "../utils/utils";
import {usePathname} from 'next/navigation'

const Footer = () => {
    const pathname = usePathname()
    const shouldDisplayFooter = !footerExcludedPaths.includes(pathname);

    if (shouldDisplayFooter) {
        return (
            <div>
                <footer className="footer">
                    <ul className="social-icons">
                        {socialIcons.map((icon, index) => (
                            <li key={index}>
                                <a href={icon.href} target="_blank" className="social-icon">
                                    {icon.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p>
                        &copy; <span>{dateYear}</span> bliss code. all rights reserved
                    </p>
                </footer>
            </div>
        )
    } else null

};

export default Footer;
