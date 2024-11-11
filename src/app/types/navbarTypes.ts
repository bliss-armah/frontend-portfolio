export interface SidebarHeaderProps {
    onClose: () => void;
}

export interface SidebarLinksProps {
    onLinkClick: () => void;
}

export interface SocialIconsProps {
    icons: { href: string; icon: JSX.Element }[];
}