import PropTypes from "prop-types";

function ToggleSwitch(props) {
  const { isChecked, onToggle } = props;

  return (
    <label className="flex items-center cursor-pointer">
      <div className="mr-3 dark:text-white text-customGray text-sm">Light</div>
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onToggle}
          className="checkbox hidden"
        />
        <div className="block border-[1px] border-customBlue w-10 h-6 rounded-full"></div>
        <div className="dot absolute left-1 top-1 bg-customBlue w-4 h-4 rounded-full transition"></div>
      </div>
      <div className="ml-3 dark:text-white text-customGray text-sm">Dark</div>
    </label>
  );
}

ToggleSwitch.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ToggleSwitch;
