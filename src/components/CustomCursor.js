import React, { useEffect, useRef } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorPointerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorPointer = cursorPointerRef.current;

    if (!cursor || !cursorPointer) return;

    const handleMouseMove = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      cursorPointer.style.transform = `translate3d(${e.clientX - 15}px, ${e.clientY - 15}px, 0)`;
    };

    const handleMouseDown = () => {
      cursor.classList.add("click");
      cursorPointer.classList.add("click");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("click");
      cursorPointer.classList.remove("click");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-pointer" ref={cursorPointerRef} />
    </>
  );
}

export default CustomCursor;