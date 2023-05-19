/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useLayoutEffect, useRef, useState } from "react";
import ChatList from "./components/ChatsList/ChatList";
import Header from "./components/Header";
import Tabable from "./components/Tabable";
import { animate, motion, useScroll } from "framer-motion";
import { AppContext } from "./main";

const CONTAINER_WIDTH = 400;

function App() {
  const containerRef = useRef(null);
  const [currenView, setCurrentView] = useState(1);
  const { scrollX } = useScroll({ container: containerRef });
  const context = useContext(AppContext);
  const { direction } = context.direction;

  useLayoutEffect(() => {
    scrollX.set(CONTAINER_WIDTH);

    scrollX.on("change", (v) => {
      containerRef.current.scrollTo({
        left: v,
      });
    });
  }, []);

  useLayoutEffect(() => {
    animate(scrollX, currenView * CONTAINER_WIDTH);
  }, [currenView]);

  return (
    <div className="w-full min-h-screen grid place-content-center py-10 bg-slate-900">
      <div className="w-[400px] flex flex-col rounded-lg relative overflow-hidden">
        <motion.div
          className="absolute w-full"
          animate={{ top: direction ? -60 : 0 }}
        >
          <Header />
          <Tabable setCurrentView={setCurrentView} />
        </motion.div>

        <motion.div
          className="flex"
          ref={containerRef}
          style={{ overflowX: "hidden", userSelect: "none" }}
        >
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
