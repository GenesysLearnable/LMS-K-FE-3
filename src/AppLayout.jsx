import { Outlet, useNavigation } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";

import Loader from "./Loader";
import HeaderNav from "./components/HeaderNav";

function AppLayout() {
  const navigate = useNavigation();
  // const isLoading = navigate.state === "loading";

  return (
    <div className="grid grid-cols-[15.75rem_1fr] ">
      <AppNavbar />
      <main className="font-quicksand bg-[#F8F8F9] h-screen overflow-hidden overflow-y-scroll">
        <Loader className="text-amber-500" />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
// grid-cols-[200px_minmax(900px,_1fr)_100px]
