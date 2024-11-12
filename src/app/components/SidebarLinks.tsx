import { Link } from "react-scroll";
import {SidebarLinksProps} from "../types/navbarTypes";
import {links} from "../utils/data";


const SidebarLinks = ({ onLinkClick }: SidebarLinksProps) => (
    <ul className="sidebar-links">
        {links.map((link, index) =>
            link.href ? (
                <li key={index}>
                    <a href={link.href} onClick={onLinkClick}>
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
                        onClick={onLinkClick}
                    >
                        {link.label}
                    </Link>
                </li>
            )
        )}
    </ul>
);

export default SidebarLinks;