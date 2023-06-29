import "./Layout.css";
import GlassPane from "../GlassPane/GlassPane";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children?: any;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout rainbow-mesh">
      <GlassPane className="layout-glasspane">
        <Sidebar />
        <div className="layout-body">{children}</div>
      </GlassPane>
      {/* <div id="modal" /> TODO*/}
    </div>
  );
}
