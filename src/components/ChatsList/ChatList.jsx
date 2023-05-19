/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useLayoutEffect, useRef } from "react";
import ChatItem from "./ChatItem";
import { useScroll, motion } from "framer-motion";
import { AppContext } from "../../main";

const ChatList = () => {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: listRef });
  const context = useContext(AppContext);
  const { direction, setDirection } = context.direction;

  useLayoutEffect(() => {
    // 1 is down 0 is up
    let scrollPosition = scrollYProgress.get();

    scrollYProgress.on("change", (v) => {
      if (v <= 0.9) setDirection(Number(v > scrollPosition));
      scrollPosition = v;
    });
  }, []);

  return (
    <motion.ul
      className="flex flex-col min-w-full h-[600px] rounded-b-lg"
      style={{ overflow: "overlay" }}
      initial={{ paddingTop: 114 }}
      animate={{
        paddingTop: direction ? 0 : 114,
        willChange: "scroll-position, padding",
      }}
      transition={{ type: "tween" }}
      ref={listRef}
    >
      {[...Array(12)].map((_, index) => (
        <ChatItem key={index} />
      ))}
    </motion.ul>
  );
};

export default ChatList;
