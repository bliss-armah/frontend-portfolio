import {SocialIconsProps} from "../types/navbarTypes";

const SocialIcons = ({ icons }: SocialIconsProps) => (
    <ul className="social-icons">
        {icons.map((icon, index) => (
            <li key={index}>
                <a href={icon.href} target="_blank" rel="noopener noreferrer" className="social-icon">
                    {icon.icon}
                </a>
            </li>
        ))}
    </ul>
);

export default SocialIcons;
