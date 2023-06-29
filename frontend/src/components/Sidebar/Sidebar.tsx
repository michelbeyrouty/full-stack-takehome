import "./Sidebar.css";
import Card from "../Card/Card";
import logo from "../../assets/logo.svg";
import SidebarLink from "../SidebarLink/SidebarLink";
import { navOptions } from "../../constants";

const links = Object.keys(navOptions);

const styles = {
  height: "90%",
  marginLeft: "20px",
  width: "160px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  backgroundColor: "#1887fc",
}; // TODO?

export default function Sidebar() {
  return (
    <Card style={styles}>
      <div className="sidebar-logo-div">
        <img className="sidebar-logo" src={logo} alt="logo" />
      </div>
      {links.map((link) => (
        <SidebarLink key={link} link={link} />
      ))}
    </Card>
  );
}
