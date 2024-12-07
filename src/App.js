import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState(1);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    setModalStep(1);
  };

  const nextStep = () => {
    setModalStep(2);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="flex min-h-screen flex-col dark:bg-neutral-900">
        <nav
          className="flex justify-center border-b-2 p-3"
          style={{ borderColor: "#F6F8F9" }}
        >
          <h1 className="text-customDarkGray text-xl font-semibold dark:text-white">
            cake.
          </h1>
        </nav>
        <section className="w-[50%] max-w-3xl mx-auto mt-14 flex flex-col gap-8">
          <h2 className="text-customDarkBlue dark:text-neutral-300 text-base font-semibold text-center">
            Welcome
          </h2>
          <div>
            <h5 className="text-customDarkBlue dark:text-neutral-300 text-sm mb-3">
              Change the Mood
            </h5>
            <p className="text-customGrayBlue dark:text-neutral-300 text-sm mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              mi eu massa imperdiet aliquam.
            </p>
            <ToggleSwitch isChecked={darkMode} onToggle={toggleDarkMode} />
          </div>
          <button
            onClick={toggleModal}
            className="w-48 text-white bg-customBlue font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="button"
          >
            Toggle modal
          </button>
        </section>
      </main>
      {showModal && (
        <Modal
          toggleModal={toggleModal}
          modalStep={modalStep}
          nextStep={nextStep}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}

export default App;
