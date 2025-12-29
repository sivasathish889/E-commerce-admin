import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { NavBarSections } from "./@types/types";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Promotions from "./pages/Promotions";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

function App() {
  const [activeSection, setActiveSection] =
    useState<NavBarSections>("DASHBOARD");

  const renderItem = () => {
    switch (activeSection) {
      case "DASHBOARD":
        return <Dashboard />;
      case "ORDERS":
        return <Orders />;
      case "USER":
        return <Users />;
      case "PRODUCTS":
        return <Products />;
      case "PROMOTIONS":
        return <Promotions />;
      case "SETTINGS":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="">
      <div className="flex">
        <aside className="side-bar min-h-screen">
          <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
        </aside>
        <div className="flex-1">
          <div className="header flex-1 w-full bg-blue-400 fixed">
            <Header />
          </div>
          <main className="main bg-cyan-700 h-screen">{renderItem()}</main>
        </div>
      </div>
    </div>
  );
}

export default App;
