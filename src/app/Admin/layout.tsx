import Sidebar from "../components/sidebar";
import Topnav from "../components/Dashboard/content/topnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed overflow-hidden">
      <div className="h-16 w-full">
        <Topnav />
      </div>
      <div className="flex h-screen flex-col md:flex-row">
        <div className="sidebar flex-none">
          <Sidebar />
        </div>
        <div className="flex-grow pt-10 md:overflow-y-auto bg-[#edf1f5]">
          {children}
        </div>
      </div>
    </div>
  );
}
