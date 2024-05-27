import React, { useState, useEffect } from "react";
import axios from "axios";
import ChildComponent from "./ChildComponent"; // Import your child component

function ParentComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState([]);
  const [parentData, setParentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "https://lms-k-be-3.onrender.com/api/v1/view-courses",
        ); // Replace with your parent data endpoint

        setParentData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      {parentData.length > 0 && (
        <div className="flex justify-center gap-x-32">
          {parentData.map((item, index) => (
            <div>
              <div className="flex justify-center">
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`mr-4 px-4 py-2 ${activeTab === index ? "bg-gray-500 text-white" : "bg-gray-200"}`}
                >
                  <h2>{item.title}</h2>{" "}
                </button>
              </div>
              <div
                className="block"
                key={index}
                className={`mt-10 ${activeTab === index ? "block" : "hidden"}`}
              >
                <ChildComponent parentId={item._id} />{" "}
                {/* Pass parent ID as a prop */}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ParentComponent;
