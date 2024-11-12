import {FaTimes} from "react-icons/fa";
import {SidebarHeaderProps} from "../types/navbarTypes";

const SidebarHeader = ({onClose}: SidebarHeaderProps) => (
    <button className="close-btn" onClick={onClose}>
        <FaTimes/>
    </button>
);

export default SidebarHeader;
