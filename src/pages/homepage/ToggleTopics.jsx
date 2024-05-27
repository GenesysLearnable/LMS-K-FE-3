import React, { useState, useEffect } from "react";

function ToggleTopics({ child, onToggleComplete }) {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const storedCompleted = localStorage.getItem(
      `child-${child._id}-completed`,
    );
    if (storedCompleted) {
      setIsCompleted(JSON.parse(storedCompleted));
    }
  }, []); // Re-run useEffect on course ID change

  const handleToggleComplete = () => {
    setIsCompleted(!isCompleted);
    localStorage.setItem(
      `child-${child._id}-completed`,
      JSON.stringify(isCompleted),
    );
    onToggleComplete(child._id, isCompleted); // Optional callback for parent handling
  };

  return (
    <div className="course-item">
      {/*<h3>{course.name}</h3>*/}
      <button
        onClick={handleToggleComplete}
        className="mt-5 mb-5 bg-transparent hover:bg-yellow-500 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
      >
        {isCompleted ? (
          <span className="text-green-600 font-bold">Completed</span>
        ) : (
          <span>Mark Complete</span>
        )}
      </button>
    </div>
  );
}

export default ToggleTopics;
