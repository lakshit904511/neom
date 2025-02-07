import "./App.css";
import { useState } from "react";
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

export default function App() {
  const [modal, setModal] = useState(false);

  // function closeModalVibe() {
  //   setModal(!modal);
  //   setVibe(!vibe);
  // }

  function handleClickReview() {
    setModal(!modal);
  }

  return (
    <div
      style={{ background: "#F9F7F2 0% 0% no-repeat padding-box" }}
      className="overflow-x-hidden"
    >
      <BrowserRouter>
        <Header />
        <div className="app">
          <Routes>
            <Route
              index
              element={<DashBoard handleClickReview={handleClickReview} />}
            />
            <Route
              path="dashboard"
              element={<DashBoard handleClickReview={handleClickReview} />}
            >
              <Route path="modal" element={<MyModal />} />
            </Route>
            <Route path="favourites" element={<MyFavrouites />} />
            <Route path="modal" element={<MyModal />} />
            <Route path="edit-profile" element={<ProfilePage />} />
            <Route path="events" element={<UpComming />} />
            <Route path="feedback" element={<FeedBackPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="details" element={<DetailedPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
