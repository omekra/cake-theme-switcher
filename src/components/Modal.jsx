import PropTypes from "prop-types";
import ToggleSwitch from "./ToggleSwitch";

function Modal(props) {
  const { toggleModal, modalStep, nextStep, toggleDarkMode, darkMode } = props;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
        {modalStep === 1 ? (
          <>
            <h3 className="text-lg font-semibold dark:text-white">
              Hello, I am a modal - Step 1
            </h3>
            <p className="text-sm dark:text-neutral-300">
              By clicking switch, you will toggle the mood
            </p>
            <button
              onClick={nextStep}
              className="mt-4 text-white bg-customBlue font-medium rounded-lg text-sm px-5 py-2.5 self-end"
            >
              Switch
            </button>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold dark:text-white">
              Hello, I am a modal - Step 2
            </h3>
            <p className="text-sm dark:text-neutral-300">
              Toggle the dark/light mode below.
            </p>
            <ToggleSwitch isChecked={darkMode} onToggle={toggleDarkMode} />
            <button
              onClick={toggleModal}
              className="mt-4 text-white bg-customBlue font-medium rounded-lg text-sm px-5 py-2.5 self-end"
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  modalStep: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Modal;
