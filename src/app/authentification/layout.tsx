import Authlinks from "./authlink";
import Banners from "./banners";

export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <div className="grid h-screen flex-col md:flex-row">
        <div>
          <Banners />
        </div>
        <div className="flex justify-between w-[80%] md:w-2/5 mx-auto my-5">
          <Authlinks />
        </div>
        <div className="flex-grow w-4/5 mx-auto overflow-y-auto ">{children}</div>
      </div>
    </div>
  );
}
