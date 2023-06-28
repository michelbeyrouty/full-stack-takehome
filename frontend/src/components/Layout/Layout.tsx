import "./Layout.css";
import GlassPane from "../GlassPane/GlassPane";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children?: any;
}

const styles = {
  glassPane: {
    width: "80%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "5% 5% 5% 5%",
  },
};

export default function Layout({ children = [] }: LayoutProps) {
  return (
    <div className="layout-wrapper rainbow-mesh">
      <GlassPane style={styles.glassPane}>
        <Sidebar />
        {children}
      </GlassPane>
      <div id="modal" />
    </div>
  );
}
