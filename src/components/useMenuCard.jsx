import { useState, useEffect } from "react";
import { Menu_api } from "../utils/constants";
const useMenuCard = (resId) => {
  // ths is my custom hook//
  const [resinfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Menu_api + resId);
    
    const json = await data.json();
    // console.log(json);
    setresInfo(json.data);
  };
  return resinfo;
};
export default useMenuCard;
