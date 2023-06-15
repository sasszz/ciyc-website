import Emblem from "../../assets/CIYC-Emblem.png";

const Header = () => {
  return (
    <div className="flex w-full justify-center items-center mb-2">
      <img className="h-80" src={Emblem} alt="" />
    </div>
  );
};

export default Header;
