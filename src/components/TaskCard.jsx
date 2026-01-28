import React from "react";
import "../styles/components/TaskCard.css";

const TaskCard = ({ heading, description, status, due }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch (error) {
      return 'Invalid date';
    }
  };

  const isOverdue = (dateString) => {
    if (!dateString) return false;
    try {
      const dueDate = new Date(dateString);
      return dueDate.getTime() < Date.now();
    } catch (error) {
      return false;
    }
  };

  return (
    <div className="task-card">
      <div className={`card-status ${status === "Pending" && isOverdue(due) ? "Overdue" : status}`}>
        <p>{status === "Pending" && isOverdue(due) ? "Overdue" : status}</p>
      </div>
      <p className="card-heading">{heading}</p>
      <p className="card-description">{description}</p>
      <p className="card-date">Due: {formatDate(due)}</p>
      <button className="delete">🗑️</button>
    </div>
  );
};

export default TaskCard;
