/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ReactComponent as GroupIcon } from "../assets/group-profile-users.svg";
import { motion } from "framer-motion";
import { AppContext } from "../main";

const Tabable = ({ setCurrentView }) => {
  const context = useContext(AppContext);
  const { setDirection } = context.direction;
  const { width, position } = context.indicator;

  const handleClick = (event) => {
    const element = event.currentTarget;
    const view = element.dataset.view;
    const { width: elementWidth } = element.getBoundingClientRect();
    const x = element.offsetLeft;

    width.setIndicatorWidth(elementWidth);
    position.setIndicatorPosition(x);
    setCurrentView(view);
    setDirection(0);
  };

  return (
    <div className="w-full min-h-12 bg-blue-950 flex items-center text-white sticky top-0">
      <ul className="flex w-full relative">
        <li
          className="text-lg px-4 py-3 flex justify-center items-center cursor-pointer"
          onClick={handleClick}
          data-view={0}
        >
          <GroupIcon className="w-5 h-5 fill-white" />
        </li>
        <li className="flex w-full">
          <ul className="flex w-full">
            <li
              className="text-lg py-3 flex items-center justify-center w-full cursor-pointer"
              onClick={handleClick}
              data-view={1}
            >
              Chats
            </li>
            <li
              className="text-lg py-3 flex items-center justify-center w-full cursor-pointer"
              onClick={handleClick}
              data-view={2}
            >
              Status
            </li>
            <li
              className="text-lg py-3 flex items-center justify-center w-full cursor-pointer"
              onClick={handleClick}
              data-view={3}
            >
              Calls
            </li>
          </ul>
        </li>
        <motion.li
          animate={{
            left: position.indicatorPosition,
            width: width.indicatorWidth,
          }}
          className="absolute bottom-0 left-[56px] w-[114.662px] h-1 rounded-sm bg-green-600"
        ></motion.li>
      </ul>
    </div>
  );
};

export default Tabable;
