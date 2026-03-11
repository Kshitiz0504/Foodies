import React, { useRef } from "react";
import Lottie from "lottie-react";
import foodies from "../../assets/lottie.json";

const ControlledLottie = () => {
  const lottieRef = useRef();

  return (
    <div>
      <Lottie
        lottieRef={lottieRef}
        animationData={foodies}
        loop={true}
      />
      <button onClick={() => lottieRef.current.pause()}>Pause</button>
      <button onClick={() => lottieRef.current.play()}>Play</button>
    </div>
  );
};

export default ControlledLottie;
