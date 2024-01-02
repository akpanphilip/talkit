import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Topbar from "@/components/shared/Topbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full">
      <Topbar />

      <div className="flex p-5">
        <div className="flex-none">
          <LeftSidebar />
        </div>

        <div className="grow h-full">
          <section className="flex flex-1 h-full">
            <Outlet />
          </section>
        </div>
        <div className="flex-none">
          <RightSidebar />
        </div>
      </div>

      <Bottombar />
    </div>
  );
};
export default RootLayout;
