import Header from "./Components/Header/header";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { useState } from "react";
import MyModal from "./Pages/MyModal";
import VibeMeter from "./Pages/VibeMeter";

export default function App() {
  const [modal, setModal] = useState(false);

  const [vibe, setVibe] = useState(false);

  function closeModalVibe() {
    setModal(!modal);
    setVibe(!vibe);
  }

  function handleViboMeter() {
    setVibe(!vibe);
  }

  // setTimeout(() => {
  //   handleViboMeter();
  // }, 3000);

  function handleClickReview() {
    setModal(!modal);
  }
  function closeModal() {
    setModal(!modal);
  }
  return (
    <div className="app">
      <Header />
      <HomePage handleClickReview={handleClickReview} />
      {modal && (
        <MyModal handleViboMeter={handleViboMeter} closeModal={closeModal} />
      )}
      {vibe && <VibeMeter closeModalVibe={closeModalVibe} />}
    </div>
  );
}
