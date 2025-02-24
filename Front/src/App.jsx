import "./App.css";
import { useEffect, useState } from "react";
import MyModal from "./Components/Modals/MyModal";
// import VibeMeter from "./Pages/VibeMeter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyFavrouites from "./Pages/MyFavrouites";
import DashBoard from "./Pages/DashBoard";
import Footer from "./Components/Footer/Footer";
import ProfilePage from "./Pages/ProfilePage";
import Header from "../src/Components/Header/Header";
import UpComming from "./Pages/UpComming";
import FeedBackPage from "./Pages/FeedBackPage";
import SettingsPage from "./Pages/SettingsPage";
import DetailedPage from "./Pages/DetailedPage";
import CommonPage from "./Components/CommonPage/CommonPage";
import VibeMeter from "./Components/Modals/VibeMeter";
import ReschedulePage from "./Pages/ReschedulePage";
import LoginPage from "./Pages/LoginPage";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  function loginHandle() {
    window.location.href = "http://localhost:5000/auth/google";
  }

  useEffect(() => {
    async function checkAuth() {
      const res = await fetch("http://localhost:5000/auth/user", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setIsAuth(data.authenticated);
    }
    checkAuth();
  }, []);

  return (
    <div
      style={{ background: "#F9F7F2 0% 0% no-repeat padding-box" }}
      className="overflow-x-hidden"
    >
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route
              index
              element={
                isAuth === false ? (
                  <LoginPage loginHandle={loginHandle} />
                ) : (
                  <DashBoard />
                )
              }
            />
            <Route path="dashboard" element={<DashBoard />}>
              <Route path="modal" element={<MyModal />} />
            </Route>
            <Route path="favourites" element={<MyFavrouites />} />
            <Route path="modal" element={<MyModal />} />
            <Route path="edit-profile" element={<ProfilePage />} />
            <Route path="events" element={<UpComming />} />
            <Route path="feedback" element={<FeedBackPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="details" element={<DetailedPage />} />
            <Route path="details2" element={<CommonPage />} />
            <Route path="vibe" element={<VibeMeter />} />
            <Route path="schedule" element={<ReschedulePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
