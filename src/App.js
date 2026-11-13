import { NavLink, Routes, Route } from "react-router-dom";

import StudList from "./components/StudList";
import FavStudList from "./components/FavStudList";
import StudProvider from "./providers/StudProvider";
import logo from "./assets/logo.jpg";
function App() {
  return (
    <StudProvider>
      <nav className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-5 h-20 flex items-center justify-between">
          <img
            src={logo}
            alt="StudentHub"
            className="h-16 w-auto object-contain"
          />

          <div className="flex items-center gap-3">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                }`
              }
            >
              Student List
            </NavLink>

            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                }`
              }
            >
              Favourite Students
            </NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<StudList />} />

        <Route path="/favourites" element={<FavStudList />} />
      </Routes>
    </StudProvider>
  );
}

export default App;
