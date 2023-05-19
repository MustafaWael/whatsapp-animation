/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useLayoutEffect, useRef, useState } from "react";
import ChatList from "./components/ChatsList/ChatList";
import Header from "./components/Header";
import Tabable from "./components/Tabable";
import { animate, motion, useMotionValue, useScroll } from "framer-motion";
import { AppContext } from "./main";

const CONTAINER_WIDTH = 400;

function App() {
  const containerRef = useRef(null);
  const [currenView, setCurrentView] = useState(1);
  const { scrollX } = useScroll({ container: containerRef });
  const context = useContext(AppContext);
  const { direction, setDirection } = context.direction;
  const mouse = useMotionValue(0);

  mouse.on("change", (v) => {
    if (v < -100) {
      setCurrentView(1);
      setDirection(0)
    }
  });

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

  const handleGesture = (e) => {
    const startPoint = e.clientX;
    let endPoint = e.clientX;
    let offset = 0;

    const handleMove = (e) => {
      offset = endPoint - startPoint;
      endPoint = e.clientX;
      animate(mouse, offset);
    };

    e.currentTarget.addEventListener("pointermove", handleMove);

    e.currentTarget.addEventListener("pointerup", (e) => {
      endPoint = e.clientX;
      e.currentTarget.removeEventListener("pointermove", handleMove);
    });

    e.currentTarget.addEventListener("pointerleave", (e) => {
      e.currentTarget.removeEventListener("pointermove", handleMove);
    });
  };

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
          onPointerDown={(e) => handleGesture(e)}
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
