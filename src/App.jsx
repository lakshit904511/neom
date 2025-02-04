import "./App.css";
import { useState } from "react";
import MyModal from "./Components/Modals/MyModal";
// import VibeMeter from "./Pages/VibeMeter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyFavrouites from "./Pages/MyFavrouites";
import DashBoard from "./Pages/DashBoard";

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
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<DashBoard handleClickReview={handleClickReview} />}
          />
          <Route
             path="dashboard"
            element={<DashBoard handleClickReview={handleClickReview} />}
          >
            {/* <Route index element={<HomePage handleClickReview={handleClickReview}  />} /> */}
            <Route path="modal" element={<MyModal />} />
          </Route>
          <Route path="favourites" element={<MyFavrouites />} />
          <Route path="modal" element={<MyModal />} />
          {/* <HomePage handleClickReview={handleClickReview} /> */}
          {/* {modal && (
            <MyModal
              handleViboMeter={handleViboMeter}
              closeModal={closeModal}
            />
          )}
          {vibe && <VibeMeter closeModalVibe={closeModalVibe} />} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
