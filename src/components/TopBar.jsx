import BURGER_ICON from "../assets/burger.svg";
export const TopBar = ( {menuActive, setMenuActive }) => {
  return (
    <div className="TOPBAR flex items-center justify-between p-4">
      <button
      className="block lg:hidden"
        onClick={() => {
          setMenuActive(!menuActive);
        }}>
        <img src={BURGER_ICON} alt="burger-icon" className="BURGER w-8 h-8" />
      </button>
      <h1 className="TITLE flex-1 text-mainBlue text-xl font-bold text-center ">
        ReactGPT
      </h1>
    </div>
  );
};

export default TopBar;
