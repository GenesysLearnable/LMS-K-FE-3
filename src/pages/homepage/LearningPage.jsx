import React, { useState, useEffect } from "react";
import axios from "axios"; // Replace with fetch API if preferred
import { Link, Outlet, useLocation } from "react-router-dom";
import ChildComponent from "./ChildComponent";
import ImageComponent from "./ImageComponent";
import HeaderNav from "../../components/HeaderNav";
import HomeProfile from "./HomeProfile";

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
      <HeaderNav />
      <HomeProfile />
      {isLoading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      {parentData.length > 0 && (
        <div className="p-8">
          <div className="flex justify-center gap-x-32">
            {parentData.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => setActiveTab(index)}
                  className={`mr-4 px-4 py-2 rounded-full  shadow-lg ${activeTab === index ? "bg-[#FF9B54] text-white" : "bg-white"}`}
                >
                  <ImageComponent imageName={item.title} />
                </button>
                <p
                  className={`mt-3 text-center font-2xl font-bubble rounded-full py-2 ${activeTab === index ? "bg-[#FF9B54] text-[#130E5D]" : "bg-transparent"}`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            {parentData.map((item, index) => (
              <div
                className={`mt-4 ${activeTab === index ? "block" : "hidden"}`}
              >
                <ChildComponent parentId={item._id} />{" "}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ParentComponent;
