import SidebarHeader from "./SidebarHeader";
import SidebarLinks from "./SidebarLinks";
import SocialIcons from "./SocialIcons";
import {socialIcons} from "../utils/data";
import {AsideProps} from "../types/navbarTypes";



const Aside = ({show}: AsideProps) => {
    const closeSidebar = () => show(false);

    return (
        <aside className="sidebar show-sidebar" id="sidebar">
            <SidebarHeader onClose={closeSidebar}/>
            <SidebarLinks onLinkClick={closeSidebar}/>
            <SocialIcons icons={socialIcons}/>
        </aside>
    );
};

export default Aside;
