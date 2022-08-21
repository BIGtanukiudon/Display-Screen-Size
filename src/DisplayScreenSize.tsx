import { useState, useEffect } from "react";

const DisplayScreenSize = () => {
  const [innerHeightState, setInnerHeightState] = useState<number>(0);
  const [innerWidthState, setInnerWidthState] = useState<number>(0);
  const [clientWidthState, setClientWidthState] = useState<number>(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.contentBoxSize) {
          setInnerHeightState(window.innerHeight);
          setInnerWidthState(window.innerWidth);

          const bodyElement = document.body;
          setClientWidthState(bodyElement.clientWidth);
        }
      });
    });

    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      id="inner-screen-size"
      style={{
        position: "fixed",
        right: 10,
        top: 10,
        textAlign: "center",
        backgroundColor: "white",
        padding: 5,
        zIndex: 2147483647,
        border: "solid red",
        color: "black",
      }}
    >
      <div>
        <div>window.innerWidth ✕ window.innerHeight</div>
        <div>
          {innerWidthState}px ✕ {innerHeightState}px
        </div>
      </div>
      <div>
        <div>document.body.clientWidth</div>
        <div>{clientWidthState}px</div>
      </div>
    </div>
  );
};

export default DisplayScreenSize;
