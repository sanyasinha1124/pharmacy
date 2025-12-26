import React, { useEffect, useState } from "react";
import axios from "axios";

const FacultyDashboard = () => {
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("facultyToken");

        const res = await axios.get(
          "http://localhost:5000/api/faculty/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setFaculty(res.data);
      } catch (err) {
        console.error(err);
        window.location.href = "/faculty-auth";
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div>
      <h1>Faculty Dashboard</h1>
      {faculty ? (
        <p>Welcome Faculty ID: {faculty.facultyId}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FacultyDashboard;
