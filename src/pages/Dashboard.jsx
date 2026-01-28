import { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext.jsx";
import { RecentActivityContext } from "../context/RecentActivityContext.jsx";
import {formatDistanceToNow} from "date-fns";
import "../styles/pages/Dashboard.css";

import completeIcon from "../assets/dashboard/complete.png";
import icon1 from "../assets/dashboard/icon1.svg";

const Dashboard = () => {
  const { tasks, fetchTasks } = useContext(TaskContext);
  const { recentActivity, getRecentActivities } = useContext(
    RecentActivityContext,
  );

  useEffect(() => {
    fetchTasks();
    getRecentActivities();
  }, []);

  console.log("Recent Activity:", recentActivity);

  return (
    <div className="dashboard-container">
      {/* Total tasks */}
      <div className="total-task card">
        <div className="top">
          <h2 className="heading">Total Tasks</h2>
          <p className="tasks-number">{tasks.length}</p>
          <p className="text">Across all projects</p>
        </div>
        <div className="bottom">
          <h2 className="heading">Recent Activity</h2>
          <p className="activity">
            <img src={icon1} style={{width: "16px"}} alt="" />
            {recentActivity.length > 0
              ? `${recentActivity[0].message} - ${formatDistanceToNow(new Date(recentActivity[0].createdAt), { addSuffix: true })}`
              : "No recent activity"}
          </p>
        </div>
      </div>

      {/* Completed Task */}
      <div className="completed-task card">
        <h2 className="heading">Completed</h2>
        <p className="tasks-number">
          <img src={completeIcon} style={{ width: "32px" }} alt="" />{" "}
          {tasks.filter((t) => t.status === "Completed").length}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
