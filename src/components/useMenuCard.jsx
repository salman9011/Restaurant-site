import { useState, useEffect } from "react";
import { Menu_api } from "../utils/constants";

const useMenuCard = (resId) => {
  const [resinfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          `https://proxy.cors.sh/${Menu_api}/${resId}`, {
            headers: {
              'x-cors-api-key': 'temp_1d50d0137e4f00f30e4e9f94a1c96753'
            }
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch menu');
        }

        const json = await response.json();
        setResInfo(json.data);
      } catch (error) {
        console.error('Error fetching menu:', error);
        // Handle error state if needed
      }
    };

    fetchMenu();
  }, [resId]);

  return resinfo;
};

export default useMenuCard;
