import { createContext, useState } from "react";
import { getRecentActivity } from "../services/api";

export const RecentActivityContext = createContext();
export const RecentActivityProvider = ({ children }) => {
  const [recentActivity, setRecentActivity] = useState([]);

  const getRecentActivities = async () => {
    try {
      const { data } = await getRecentActivity();
      setRecentActivity(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <RecentActivityContext.Provider value={{recentActivity, getRecentActivities}}>
        {children}
    </RecentActivityContext.Provider>
  )
};
