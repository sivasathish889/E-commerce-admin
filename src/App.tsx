import { lazy, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
const Orders = lazy(() => import("./pages/Orders"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Users = lazy(() => import("./pages/Users"));
const Promotions = lazy(() => import("./pages/Promotions"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  const [hideBar, setHideBar] = useState(() => {
    if (window.innerWidth < 768) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setHideBar(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(hideBar);
  return (
    <div className="bg-background w-full">
      <div className="flex">
        <aside className="side-bar min-h-screen b- ">
          <NavBar hideBar={hideBar} setHideBar={setHideBar} />
        </aside>
        <div className="flex-1">
          <div
            className={`header flex-1 w-full ml-28.5 sm:ml-28.5 md:ml-47 lg:ml-50.5 }`}
          >
            <Header />
          </div>
          <main className={`main  mt-16 ${hideBar ? "ml-25" : "ml-51"}`}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/users" element={<Users />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
