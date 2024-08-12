import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AOSWrapper({ children }) {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
    });
  }, []);

  return <>{children}</>;
}
