import React, { useState, useEffect } from "react";
import axios from "axios"; // Replace with fetch API if preferred
import ToggleTopics from "./ToggleTopics";
function ChildComponent({ parentId }) {
  const [childData, setChildData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [completed, setCompleted] = useState(false);

  // const toggleCompleted = () => {
  //   const newCompleted = !completed;
  //   setCompleted(newCompleted);
  //   localStorage.setItem("courseCompleted", JSON.stringify(newCompleted));
  // };

  // useEffect(() => {
  //   // Check local storage for completed status
  //   const isCompleted = localStorage.getItem("courseCompleted");
  //   if (isCompleted) {
  //     setCompleted(JSON.parse(isCompleted));
  //   }
  // }, []);

  const handleCourseCompletionChange = (child, isCompleted) => {
    // Optional: Implement logic to handle course completion update (e.g., API call)
    console.log(
      `Child ${child._id} marked as ${isCompleted ? "completed" : "incomplete"}`,
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!parentId) return; // Avoid unnecessary API calls if no ID

      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://lms-k-be-3.onrender.com/api/v1/course-section/${parentId}`,
        ); // Use URL parameter

        setChildData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [parentId]);

  return (
    <div className="block">
      {isLoading && <p>Loading child data...</p>}
      {error && <p>Error: {error}</p>}
      {childData.length > 0 && (
        <ul>
          {childData.map((child, index) => (
            <li>
              {/* Render child data properties */}
              <h2 className="font-bubble mt-5 text-xl">{child.title}</h2>{" "}
              <p>{child.description}</p>
              <ToggleTopics
                key={child._id}
                child={child}
                onToggleComplete={handleCourseCompletionChange}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ChildComponent;
