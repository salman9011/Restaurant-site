import { useState, useEffect } from "react";
import { Menu_api } from "../utils/constants";
const useMenuCard = (resId) => {
  // ths is my custom hook//
  const [resinfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Menu_api + resId, {
      headers: {
        'x-cors-api-key': 'temp_1d50d0137e4f00f30e4e9f94a1c96753'
        }
    }
      );
    
    const json = await data.json();
    // console.log(json);
    setresInfo(json.data);
  };
  return resinfo;
};
export default useMenuCard;
