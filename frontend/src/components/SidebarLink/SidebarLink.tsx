import "./SidebarLink.css";
import { Link, useLocation } from "react-router-dom";
import { navOptions } from "../../constants";

interface SidebarLinkProps {
  link: string;
}

export default function SidebarLink({ link }: SidebarLinkProps) {
  const pathname = useLocation().pathname;
  const navOption = navOptions[link];
  let isActive = false;

  if (pathname === navOption.link) {
    isActive = true;
  }

  return (
    <Link className="nav-link" to={navOption.link}>
      <img
        src={navOption.icon}
        className="nav-icon"
        alt={navOption.link}
        style={!isActive ? { filter: "opacity(50%)" } : {}}
      />
    </Link>
  );
}
