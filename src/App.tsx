import { lazy, useState } from "react";
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
  const [hideBar, setHideBar] = useState(false);

  return (
    <div className="bg-[#F8FAFC]">
      <div className="flex">
        <aside className="side-bar min-h-screen b- ">
          <NavBar hideBar={hideBar} setHideBar={setHideBar} />
        </aside>
        <div className="flex-1">
          <div
            className={`header flex-1 w-full ${hideBar ? "ml-25" : "ml-51"}`}
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
