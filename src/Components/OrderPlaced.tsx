import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ding from "./Images/ding-idea-40142.mp3";
import placed from "./Images/success-fanfare-trumpets-6185.mp3";
const OrderPlaced = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
    new Audio(ding).play();
    setTimeout(() => new Audio(placed).play(), 4000);
    setTimeout(() => navigate("/"), 8000);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <dotlottie-player
      src="https://lottie.host/8f7b692b-bf50-4b49-8984-6411222e9104/IKBs1GcNdJ.json"
      background="transparent"
      speed={1.25}
      style={{ width: "100%", height: "60%" }}
      direction={1}
      autoplay
    ></dotlottie-player>
  );
};

export default OrderPlaced;
