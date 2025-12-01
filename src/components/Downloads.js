import React from 'react';

const Downloads = () => {
    const downloadItems = [
        { 
            id: 1, 
            title: "Assignments", 
            documents: [
                { name: "Pharmaceutics_Assign", file: "/1. 1. Pharmaceutics_Assign & FV_V1.pdf" },
                { name: "P'Chemistry_Assign", file: "/1. 2. P'Chemistry_Assign_V1.pdf" },
                { name: "P'Cognosy_Assign", file: "/1. 3. P'Cognosy_Assign. & FV_V1.pdf" },
                { name: "Social Pharmacy_Assign", file: "/1. 5. Social Pharmacy_Assign. & FV_V1.pdf" },
                { name: "Pharmacology_Assign", file: "/2. 1. Pharmacology_Assign_V1.pdf" },
                { name: "Community P & M_Assign", file: "/2. 2. Community P & M_Assign. & FV_V1.pdf" },
                { name: "Biochemistry & CP_Assign", file: "/2. 3. Biochemistry & CP_Assign_V1.pdf" },
                { name: "Hospital & CP_Assign", file: "/2. 5. Hospital & CP_Assign. & FV_V1.pdf" },
                { name: "Pharmacy Law & Ethics_Assign", file: "/2.6. Pharmacy Law & Ethics_Assign._V1.pdf" }
            ]
        },
        { 
            id: 2, 
            title: "Practical Manual", 
            documents: [
                { name: "Pharmaceutics Lab Manual", file: "/Pharmaceutics Lab Manual.pdf" },
                { name: "Pharmaceutical Chemistry", file: "/Pharmaceutical Chemistry.pdf" },
                { name: "Pharmacognosy Lab Manual", file: "/Pharmacognosy Lab Manual.pdf" },
                { name: "Human Anatomy and Physiology manual", file: "/Human Anatomy and Physiology manual.pdf" },
                { name: "Social Pharmacy Lab Manual", file: "/Social Pharmacy Lab Manual.pdf" },
                { name: "Pharmacology manual", file: "/Pharmacology manual.pdf" },
                { name: "Community Pharmacy & Management manual", file: "/Community Pharmacy & Management manual.pdf" },
                { name: "Biochemistry & Clinical Pathology manual", file: "/Biochemistry & Clinical Pathology manual.pdf" },
                { name: "Pharmacotherapeutics manual", file: "/Pharmacotherapeutics manual.pdf" },
                { name: "Hospital & Clinical Pharmacy manual", file: "/Hospital & Clinical Pharmacy manual.pdf" },
                { name: "Report on Practical Training manual", file: "/Report on Practical Training manual.pdf" },
            ]
        },
        { 
            id: 3, 
            title: "Documents for license", 
            documents: [
                { name: "SD_PPP_Lost", file: "/SD_PPP_Lost.pdf" },
                { name: "DuplicateCopy_RP_Affidavit", file: "/DuplicateCopy_RP_Affidavit.pdf" },
                { name: "Affidavit_ExitExam", file: "/Affidavit_ExitExam.pdf" },
                { name: "MSPC_Undertaking", file: "/MSPC_Undertaking_NewRegV0025.pdf" },
                { name: "MSPC_IdentitySlip", file: "/MSPC_IdentitySlip.pdf" },
                { name: "STAACC", file: "/STAACC_NEW.pdf" },
            ]
        },
        { 
            id: 4, 
            title: "miscellaneous", 
            documents: [
                { name: " Bonafide Certificate Form", file: "/Application for Bonafide Certificate_V1.pdf" },
                { name: "Leave Application for Student", file: "/Leave Application for Student_V1.pdf" },
                { name: "Bonafide Certficate", file: "/Bonafide Certficate_V1.pdf" },
                { name: "Academic Calendar_2024-25", file: "/Academic Calendar_2024-25_V1.pdf" },
                { name: "Academic Calendar_2025-26", file: "/Academic Calendar_2025-26_V1.pdf" },
                { name: "Syllabus_D. Pharmacy", file: "/ER_20 _Syllabus_D. Pharmacy_V1.pdf" },
                { name: "Time-Table_DPH_II_2025-26", file: "/Time-Table_DPH_II_2025-26_V1.pdf" },
                { name: "Training Format Certificate", file: "/Training Format Certificate_V1.docx" },
                { name: "Time-Table_DPH-I", file: "/Time-Table_DPH-I_2024-25_V1.pdf" }
            ]
        }
    ];

    return (
        <div className="flex justify-center items-center min-h-screen p-4 bg-gray-100">
            <style>
                {`
                .downloads-page-container {
                    max-width: 960px;
                    margin: 2rem auto;
                    padding: 2rem;
                    background-color: #ffffff;
                    border-radius: 1rem;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                }
                
                .table-container {
                    border: 1px solid #e5e7eb;
                    border-radius: 0.5rem;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    padding: 1rem 1.5rem;
                    text-align: left;
                    border-bottom: 1px solid #e5e7eb;
                }
                th {
                    background-color: #f9fafb;
                    font-weight: 600;
                    color: #4b5563;
                    text-transform: uppercase;
                    font-size: 0.875rem;
                }
                tr:hover {
                    background-color: #f3f4f6;
                }
                .document-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                a.download-link {
                    color: #3b82f6;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.2s ease;
                }
                a.download-link:hover {
                    color: #2563eb;
                    text-decoration: underline;
                }
                .fa-download {
                    margin-left: 0.5rem;
                }
                `}
            </style>
            <div className="downloads-page-container">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Important Downloads</h2>
                    <p className="text-gray-600">
                        Find important documents, forms, and resources for students, faculty, and staff in the table below.
                    </p>
                </div>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Document Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {downloadItems.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <div className="document-list">
                                            {item.documents.map((doc, docIndex) => (
                                                <a 
                                                    key={docIndex} 
                                                    href={doc.file} 
                                                    download 
                                                    className="download-link"
                                                >
                                                    {doc.name}
                                                    <i className="fas fa-download ml-2"></i>
                                                </a>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    );
};

export default Downloads;