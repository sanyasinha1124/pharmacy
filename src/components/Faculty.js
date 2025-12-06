import React from 'react';

const facultyData = [
  {
    name: "Prof. Rahul Vilas Jodh",
    documentImageUrl: "/Faculty Profile RVJ.jpg",
    details: [
      { label: "Designation", value: "Principal" }
    ]
  },
  {
    name: "Ms.Gayatri Motiram Polakhare",
    documentImageUrl: "/Faculty Profile- Gayatri (1).jpg",
    details: [
      { label: "Designation", value: "Lecturer" }
    ]
  },
  {
    name: "Ms.Reshma Dnyaneshwar Chaudhari",
    documentImageUrl: "/Faculty Profile Reshma.jpg",
    details: [
      { label: "Designation", value: "Lecturer" }
    ]
  },
  {
    name: "Mr. Sangam S. Nimkar",
    documentImageUrl: "/Faculty Profile SSN.jpg",
    details: [
      { label: "Designation", value: "Lecturer" }
    ]
  },
  {
    name: "Mr.Tejas S. Deshmukh",
    documentImageUrl: "/Faculty Profile TSD.jpg",
    details: [
      { label: "Designation", value: "Lecturer" }
    ]
  },
  {
    name: "Ms. Bhumika A. Bidwaik",
    documentImageUrl: "/Faculty Profile BAB.jpg",
    details: [
      { label: "Designation", value: "Lecturer" }
    ]
  },
];

const Faculty = () => {
  return (
    <>
      {/* ==================== INLINE STYLES ==================== */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        :root {
          --primary: #0a1a42;         /* Navy Blue */
          --primary-light: #132b63;
          --accent: #c49a6c;         /* Soft Gold */
          --background: #f4f6fa;      
          --white: #ffffff;
          --text-dark: #1b1b1b;
          --text-light: #6d6d6d;
          --border: #e2e2e2;
          --shadow: 0 4px 15px rgba(0,0,0,0.1);
          --radius: 12px;
        }

        body {
          margin: 0;
          padding: 0;
          background: var(--background);
          font-family: 'Poppins', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 40px auto;
          padding: 30px;
          background: var(--white);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
        }

        .page-title {
          text-align: center;
          color: var(--primary);
          font-size: 2.4rem;
          font-weight: 700;
          margin-bottom: 30px;
        }

        /* TABLE */
        .faculty-table-container {
          overflow-x: auto;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
        }

        .faculty-table {
          width: 100%;
          border-collapse: collapse;
          background: var(--white);
        }

        .faculty-table th {
          background: var(--primary);
          color: var(--white);
          padding: 15px;
          text-align: left;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .faculty-table td {
          padding: 14px 16px;
          border-bottom: 1px solid var(--border);
          font-size: 0.95rem;
        }

        .faculty-table tbody tr:nth-child(even) {
          background: #f8f9fc;
        }

        .faculty-table tbody tr:hover {
          background: #eef1f8;
        }

        .resume-link {
          color: var(--primary);
          font-weight: 600;
          text-decoration: none;
        }

        .resume-link:hover {
          text-decoration: underline;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .container {
            padding: 15px;
          }
          .page-title {
            font-size: 1.9rem;
          }
          .faculty-table th, 
          .faculty-table td {
            padding: 10px;
            font-size: 0.85rem;
          }
        }
      `}</style>

      {/* ==================== PAGE UI ==================== */}
      <div className="container">
        <h1 className="page-title">Faculty & Staff</h1>

        <div className="faculty-table-container">
          <table className="faculty-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Name of Faculty</th>
                <th>Designation</th>
                <th>Resume</th>
              </tr>
            </thead>

            <tbody>
              {facultyData.map((faculty, index) => {
                const designationDetail = faculty.details.find(d => d.label === "Designation");
                const designation = designationDetail ? designationDetail.value : "N/A";

                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{faculty.name}</td>
                    <td>{designation}</td>
                    <td>
                      {faculty.documentImageUrl ? (
                        <a
                          href={faculty.documentImageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resume-link"
                        >
                          View Resume
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Faculty;
