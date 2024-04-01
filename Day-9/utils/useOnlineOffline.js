import { useState, useEffect } from "react";

const useOnlineOffline = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    const Online = () => {
      setOnlineStatus(true);
    };
    const Offline = () => {
        setOnlineStatus(false);
      };


    window.addEventListener("online", Online);
    window.addEventListener("offline", Offline);

    return () => {
      window.removeEventListener("online", Online);
      window.removeEventListener("offline", Offline);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineOffline;
