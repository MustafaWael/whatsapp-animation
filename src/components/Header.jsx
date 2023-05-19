import { ReactComponent as CameraIcon } from "../assets/camera.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as Dots } from "../assets/dots.svg";

const Header = () => {
  return (
    <div className="w-full bg-blue-950 h-16 flex justify-between items-center pl-4 py-4 text-white">
      <span className="text-xl">WhatsApp</span>
      <ul className="flex items-center">
        <li className="p-3">
          <CameraIcon className="w-6 h-6 fill-white" />
        </li>
        <li className="p-3">
          <Search className="w-4 h-4 fill-white" />
        </li>
        <li className="p-3">
          <Dots className="w-6 h-6 fill-white" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
