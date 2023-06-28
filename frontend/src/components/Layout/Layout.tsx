import "./Layout.css";
import GlassPane from "../GlassPane/GlassPane";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children?: any;
}

export default function Layout({ children = [] }: LayoutProps) {
  return (
    <div className="layout-wrapper rainbow-mesh">
      <GlassPane className="glasspane-layout-wrapper">
        <Sidebar />
        <div className="home-wrapper">{children}</div>
      </GlassPane>
      <div id="modal" />
    </div>
  );
}
