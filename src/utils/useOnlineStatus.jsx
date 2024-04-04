import { useEffect, useState } from "react";

const useShowStatus = () => {
  const [onlineStatus, setonlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });
    window.addEventListener("online", () => {
        setonlineStatus(true);
      });
  }, []);

  return onlineStatus;
};
export default useShowStatus;
