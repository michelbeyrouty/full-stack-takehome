import "./Sidebar.css";
import Card from "../Card/Card";
import logo from "../../assets/logo.svg";
import SidebarLink from "../SidebarLink/SidebarLink";
import { navOptions } from "../../constants";

const links = Object.keys(navOptions);

const styles = {
  card: {
    height: "90%",
    marginLeft: "20px",
    width: "160px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#1887fc",
  },
};

export default function Sidebar() {
  return (
    <Card style={styles.card}>
      <div className="logo-div">
        <img className="logo" src={logo} alt="logo" />
      </div>
      {links.map((link) => (
        <SidebarLink key={link} link={link} />
      ))}
    </Card>
  );
}
