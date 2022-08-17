import React, { useEffect, useRef, useState } from "react";

const Desktop = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [wallpaper, setWallpaper] = useState("assets/wallpaper.png");
  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   function updateSize() {
  //     const ctx = canvas!.getContext("2d")!;
  //     const image1 = new Image();
  //     const w = (canvas!.width = window.innerWidth);
  //     const h = (canvas!.height = window.innerHeight);
  //     image1.addEventListener(
  //       "load",
  //       () => {
  //         // ctx.clearRect(0, 0, w, h);
  //         ctx.drawImage(image1, 0, 0, w, h);
  //       },
  //       false,
  //     );
  //     image1.src = wallpaper;
  //   }
  //   if (canvas) {
  //     updateSize();
  //     window.addEventListener("resize", updateSize);
  //   }
  //   return () => window.removeEventListener("resize", updateSize);
  // }, [canvasRef]);

  return (
    <div className="desktop">
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default Desktop;
