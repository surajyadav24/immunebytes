import React, { useState } from "react";
import audit1 from "../../assets/images/audit-process/Audit-1.svg";
import audit2 from "../../assets/images/audit-process/audit-2.svg";
import audit3 from "../../assets/images/audit-process/audit3.svg";
import audit4 from "../../assets/images/audit-process/audit-4.svg";
import audit5 from "../../assets/images/audit-process/audit-5.svg";
import audit6 from "../../assets/images/audit-process/audit-6.svg";
import audit7 from "../../assets/images/audit-process/audit7.svg";
import "./style.css";

const AuditProcess = () => {
  // Data for headings and descriptions
  const data = [
    { heading: "Onboarding", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard " },
    { heading: "Audit Process 2", description: "Description for Audit 2" },
    { heading: "Audit Process 3", description: "Description for Audit 3" },
    { heading: "Audit Process 4", description: "Description for Audit 4" },
    { heading: "Audit Process 5", description: "Description for Audit 5" },
    { heading: "Audit Process 6", description: "Description for Audit 6" },
    { heading: "Audit Process 7", description: "Description for Audit 7" },
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
              <div
                className="item"
                onMouseEnter={() => setContent(data[3])}
                onMouseLeave={() => setContent(data[0])}
              >
                <img src={audit4} alt="Audit 4" />
              </div>
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
                onMouseEnter={() => setContent(data[6])}
                onMouseLeave={() => setContent(data[0])}
              >
                <img src={audit7} alt="Audit 7" />
              </div>
            </div>

            {/* Audit process heading and description */}
            <div className="audit-process-container">
              <h3>{content.heading}</h3>
              <p>{content.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditProcess;
