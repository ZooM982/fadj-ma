import Sidebar from "../components/sidebar";
import Topnav from "../components/Dashboard/content/topnav";
import ClientOnly from "../ClientOnly"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClientOnly>
    <div className="  ">
      <div className="h-16 w-full">
        <Topnav />
      </div>
      <div className="flex h-auto md:h-screen flex-col md:flex-row">
        <div className="h-auto mt-[80px] md:mt-0 md:h-screen md:w-auto md:flex-none ">
          <Sidebar />
        </div>
        <div className=" md:flex-grow md:pt-10 md:overflow-y-scroll bg-[#edf1f5]">
          {children}
        </div>
      </div>
    </div>
    </ClientOnly>
  );
}
