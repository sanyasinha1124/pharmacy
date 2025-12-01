import React from 'react';
// import { User } from 'lucide-react';

const facultyData = [
  // ... (your facultyData remains unchanged)
  {
    name: "Prof. Rahul Vilas Jodh",
    documentImageUrl: "/Faculty Profile RVJ.jpg",
    details: [
      { label: "Qualifications", value: "M. Pharm " },
      { label: "Specialization", value: "Pharmacology " },
      { label: "Department", value: "Pharmacy" },
      { label: "Designation", value: "Principal" },
      {
        label: "Experience",
        value: {
          industry: "06 years",
          teaching: "06 years"
        }
      },
      { label: "Publication", value: "30" },
      { label: "Award/Recognition", value: " " },
      { label: "Membership", value: "APTI, MSPC " },
      { label: "Email", value: "jodhrahul@gmail.com" },
    ]
  },
  {
    name: "Ms.Gayatri Motiram Polakhare",
    documentImageUrl: "/Faculty Profile- Gayatri (1).jpg",
    details: [
      { label: "Qualifications", value: "B. Pharm" },
      { label: "Specialization", value: "Pharmacology" },
      { label: "Department", value: "Pharmacy" },
      { label: "Designation", value: "Lecturer" },
      {
        label: "Experience",
        value: {
          industry: "00",
          teaching: "04 years"
        }
      },
      { label: "Publication", value: "Research 2, Review 2, Patent 1" },
      { label: "Award/Recognition", value: "NA" },
      { label: "Membership", value: "NA" },
      { label: "Email", value: "gayatripolakhare2830@gmail.com" },
    ]
  },
  {
    name: "Ms.Reshma Dnyaneshwar Chaudhari",
    documentImageUrl: "/Faculty Profile Reshma.jpg",
    details: [
      { label: "Qualifications", value: "M. Pharm " },
      { label: "Specialization", value: "Pharmaceutics" },
      { label: "Department", value: "Pharmaceutics" },
      { label: "Designation", value: "Lecturer" },
      {
        label: "Experience",
        value: {
          industry: "0",
          teaching: "6 months"
        }
      },
      { label: "Publication", value: "3" },
      { label: "Award/Recognition", value: "NA" },
      { label: "Membership", value: "NA" },
      { label: "Email", value: "reshmachaudhari914@gmail.com" },
    ]
  },
  {
    name: "Mr. Sangam S. Nimkar",
    documentImageUrl: "/Faculty Profile SSN.jpg",
    details: [
      { label: "Qualifications", value: "M. Pharm " },
      { label: "Specialization", value: "Pharmaceutics" },
      { label: "Department", value: "Pharmacy " },
      { label: "Designation", value: "Lecturer" },
      {
        label: "Experience",
        value: {
          industry: "00",
          teaching: "01 years"
        }
      },
      { label: "Publication", value: "0" },
      { label: "Award/Recognition", value: " " },
      { label: "Membership", value: "MPSC" },
      { label: "Email", value: "sangamnimkar@gmail.com" },
    ]
  },
  {
    name: "Mr.Tejas S. Deshmukh",
    documentImageUrl: "/Faculty Profile TSD.jpg",
    details: [
      { label: "Qualifications", value: "B. Pharm" },
      { label: "Specialization", value: " " },
      { label: "Department", value: "Pharmacy" },
      { label: "Designation", value: "Lecturer" },
      {
        label: "Experience",
        value: {
          industry: "03 years",
          teaching: "05 months"
        }
      },
      { label: "Publication", value: "0" },
      { label: "Award/Recognition", value: "-" },
      { label: "Membership", value: "MPSC" },
      { label: "Email", value: "tejasdeshmukh45@gmail.com" },
    ]
  },
  {
    name: "Ms. Bhumika A. Bidwaik",
    documentImageUrl: "/Faculty Profile BAB.jpg",
    details: [
      { label: "Qualifications", value: "M. Pharm " },
      { label: "Specialization", value: "Industrial Pharmacy" },
      { label: "Department", value: "Pharmacy" },
      {
        label: "Designation", value: "Lecturer"
      },
      {
        label: "Experience",
        value: {
          industry: "0 years",
          teaching: "0 years"
        }
      },
      { label: "Publication", value: "0" },
      { label: "Award/Recognition", value: "-" },
      { label: "Membership", value: "MPSC" },
      { label: "Email", value: "shivanibidwaik06@gmail.com" },
    ]
  },
];

const Faculty = () => {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

        :root {
          /* Colors */
          --primary-color: #343a40; /* Deep Charcoal Gray */
          --secondary-color: #CD7F32; /* Bronze */
          --accent-color: #CD7F32;
          --bg-color-light: #F8F9FA; /* Soft Off-White */
          --text-color-dark: #212529; /* Even deeper charcoal for body text */
          --text-color-light: #6c757d; /* Muted gray for secondary text */
          --text-color-white: #ffffff;
          --link-hover-color: #a7692c; /* Darker bronze for hover states */
          --nav-green-color: #004d40; /* Dark Green for Navigation */
          --table-header-bg: #004d40; /* Dark green for table header */
          --table-header-text: #ffffff; /* White text for table header */
          --table-border-color: #e0e0e0; /* Light gray for table borders */
          --table-row-even-bg: #f9f9f9; /* Slightly off-white for even rows */
          --table-row-hover-bg: #e6f7f5; /* Light green on row hover */


          /* Fonts */
          --font-family-poppins: 'Poppins', sans-serif;
          --font-family-sans: Arial, sans-serif;

          /* Spacing & Sizing */
          --spacing-sm: 1rem;
          --spacing-md: 2rem;
          --spacing-lg: 3rem;
          --container-max-width: 1200px;
          
          /* Components */
          --box-shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.1);
          --box-shadow-md: 0 4px 15px rgba(0, 0, 0, 0.1);
          --box-shadow-lg: 0 8px 25px rgba(0, 0, 0, 0.2);
          --border-radius: 12px;
        }

        body {
          font-family: var(--font-family-poppins);
          margin: 0;
          padding: 0;
          background-color: var(--bg-color-light);
          color: var(--text-color-dark);
        }

        .container {
          max-width: var(--container-max-width);
          margin: var(--spacing-md) auto;
          padding: var(--spacing-lg);
          background-color: var(--text-color-white);
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow-md);
          line-height: 1.8;
        }

        .page-title {
          /* --- CHANGE IS HERE --- */
          color: #004d40; /* Applied the requested dark green color directly */
          /* --- END CHANGE --- */
          font-size: clamp(2rem, 5vw, 2.5rem);
          margin-bottom: var(--spacing-md);
          text-align: center;
        }

        /* --- New Table Styles for Faculty List --- */
        .faculty-table-container {
            overflow-x: auto; /* Ensures table is scrollable on small screens */
            margin-top: var(--spacing-md);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow-md);
            background-color: var(--text-color-white);
        }

        .faculty-table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
        }

        .faculty-table th,
        .faculty-table td {
            padding: 15px 20px;
            border: 1px solid var(--table-border-color);
        }

        .faculty-table th {
            background-color: var(--table-header-bg);
            color: var(--table-header-text);
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.9rem;
            letter-spacing: 0.05em;
        }

        .faculty-table tbody tr:nth-child(even) {
            background-color: var(--table-row-even-bg);
        }

        .faculty-table tbody tr:hover {
            background-color: var(--table-row-hover-bg);
        }

        .faculty-table .resume-link {
            color: var(--nav-green-color);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease;
        }

        .faculty-table .resume-link:hover {
            color: var(--link-hover-color);
            text-decoration: underline;
        }

        .faculty-table .faculty-name-cell {
            color: var(--text-color-dark);
            font-weight: 500;
        }


        /* --- Faculty Details Page Styles (Hidden) --- */
        .faculty-details-container {
            display: none;
        }

        .back-button {
            display: none;
        }

        /* Keyframes for the pulse animation */
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.02);
            }
            100% {
                transform: scale(1);
            }
        }

        /* ==========================================================================
           Responsive Design for smaller screens
           ========================================================================== */
        @media (max-width: 768px) {
            .container {
                padding: var(--spacing-sm);
            }
            .page-title {
                font-size: 2rem;
                margin-bottom: var(--spacing-md);
            }
            .faculty-table th, .faculty-table td {
                padding: 10px 15px;
                font-size: 0.85rem;
            }
            .faculty-table th:nth-child(1), .faculty-table td:nth-child(1) { width: 10%; }
            .faculty-table th:nth-child(2), .faculty-table td:nth-child(2) { width: 40%; }
            .faculty-table th:nth-child(3), .faculty-table td:nth-child(3) { width: 30%; }
            .faculty-table th:nth-child(4), .faculty-table td:nth-child(4) { width: 20%; }
        }
      `}</style>
      <div className="container">
        <>
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
                    <tr key={faculty.name + index}>
                      <td>{index + 1}</td>
                      <td className="faculty-name-cell">
                        {faculty.name}
                      </td>
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
        </>
      </div>
    </>
  );
};

export default Faculty;