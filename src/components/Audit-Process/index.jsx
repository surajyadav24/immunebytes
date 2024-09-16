import React, { useState } from "react";
import audit1 from "../../assets/images/audit-process/Audit-1.svg";
import audit2 from "../../assets/images/audit-process/audit-2.svg";
import audit3 from "../../assets/images/audit-process/audit3.svg";
import audit4 from "../../assets/images/audit-process/audit-4.svg";
import audit5 from "../../assets/images/audit-process/audit-5.svg";
import audit6 from "../../assets/images/audit-process/audit-6.svg";
import audit7 from "../../assets/images/audit-process/audit7.svg";import auditdis from "../../assets/images/audit-process/audi-dis-1.svg";
import auditdis2 from "../../assets/images/audit-process/audi-dis-2.svg";
import auditdis3 from "../../assets/images/audit-process/audi-dis-3.svg";
import auditdis4 from "../../assets/images/audit-process/audi-dis-4.svg";
import auditdis5 from "../../assets/images/audit-process/audi-dis-5.svg";
import auditdis6 from "../../assets/images/audit-process/audi-dis-6.svg";
import "./style.css";

const AuditProcess = () => {
  // Data for headings and descriptions
  const data = [
    { heading: "Onboarding", description: "Kick off the process with a seamless onboarding experience tailored to your project's needs.", imgsrc:auditdis },
    { heading: "Audit Initiation", description: "Launch the audit process, including a comprehensive manual as well as automated review of your codebase." , imgsrc:auditdis2},
    { heading: "Initial Audit Report", description: "Receive an initial report outlining identified vulnerabilities, along with their severity, resolution and areas for improvement.", imgsrc:auditdis3 },
    { heading: "Final Audit Report", description: "Obtain a detailed final report confirming the resolution of vulnerabilities and the security posture of your project.",imgsrc:auditdis4 },
    { heading: "Requirement Gathering", description: "Collaborate to gather essential requirements, finalise commit, delivery date and establish a clear understanding of your objectives..",imgsrc:auditdis5 },
    { heading: "Initial Audit Report", description: "Receive an initial report outlining identified vulnerabilities, along with their severity, resolution and areas for improvement.",imgsrc:auditdis6 },

  ];

  // Initialize state with the first item's content
  const [content, setContent] = useState(data[0]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="audit-process">
            <div className="first-audit">
              {/* First item */}
              <div
                className="item"
                onMouseEnter={() => setContent(data[0])}
                onMouseLeave={() => setContent(data[0])} // Keep first item active
              >
                <img src={audit1} alt="Audit 1" />
              </div>
              {/* Second item */}
              <div
                className="item"
                onMouseEnter={() => setContent(data[1])}
                onMouseLeave={() => setContent(data[0])}
              >
                <img src={audit2} alt="Audit 2" />
              </div>
              {/* Third item */}
              <div
                className="item"
                onMouseEnter={() => setContent(data[2])}
                onMouseLeave={() => setContent(data[0])}
              >
                <img src={audit3} alt="Audit 3" />
              </div>
              {/* Fourth item */}
              
              {/* Fifth item */}
              <div
                className="item"
                onMouseEnter={() => setContent(data[4])}
                onMouseLeave={() => setContent(data[0])}
              >
                <img src={audit5} alt="Audit 5" />
              </div>
              {/* Sixth item */}
              <div
                className="item"
                onMouseEnter={() => setContent(data[5])}
                onMouseLeave={() => setContent(data[0])}
              >
                <img src={audit6} alt="Audit 6" />
              </div>
              {/* Seventh item */}
              <div
                className="item"
                onMouseEnter={() => setContent(data[3])}
                onMouseLeave={() => setContent(data[0])}
              >
                <img src={audit4} alt="Audit 4" />
              </div>
            </div>

            {/* Audit process heading and description */}
            <div className="audit-process-container">
              <h3>{content.heading}</h3>
              <p>{content.description}</p>

        <img src= {content.imgsrc} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditProcess;
