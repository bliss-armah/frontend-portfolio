import { Link } from "react-scroll";
import {SidebarLinksProps} from "../types/navbarTypes";


const SidebarLinks = ({ onLinkClick }: SidebarLinksProps) => (
    <ul className="sidebar-links">
        <li>
            <a href="/" onClick={onLinkClick}>
                home
            </a>
        </li>
        <li>
            <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={onLinkClick}
            >
                about
            </Link>
        </li>
        <li>
            <Link
                to="project"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={onLinkClick}
            >
                projects
            </Link>
        </li>
        <li>
            <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={onLinkClick}
            >
                contact
            </Link>
        </li>
    </ul>
);

export default SidebarLinks;
