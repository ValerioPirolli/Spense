import hamburgerMenu from "../assets/Hamburger Menu.svg";
export const Hamburger = () => {
  return (
    <div className="flex justify-between p-7">
      <div>
        <span className="text-2xl font-bold">spense.</span>
      </div>
      <div>
        <img src={hamburgerMenu} alt="hambuger" className="h-7" />
      </div>
    </div>
  );
};
