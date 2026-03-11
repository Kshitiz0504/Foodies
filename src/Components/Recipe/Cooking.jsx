import React, { useRef } from "react";
import Lottie from "lottie-react";
import cooking from "../../assets/cooking.json"

const ControlledLottie = () => {
  const lottieRef = useRef();

  return (
    <div>
      <Lottie
        lottieRef={lottieRef}
        animationData={cooking}
        loop={true}
      />
      <button onClick={() => lottieRef.current.pause()}>Pause</button>
      <button onClick={() => lottieRef.current.play()}>Play</button>
    </div>
  );
};

export default ControlledLottie;
