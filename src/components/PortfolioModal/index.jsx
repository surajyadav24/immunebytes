import React from 'react';
import DoughnutChart from '../Doughnutchart'; // Import the DoughnutChart component
import './style.css';

const PortfolioModal = ({ item, closeModal }) => {
  const progressData = {
    final: 25,
    resolved: 40,
    open: 10,
    acknowledged: 25
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>X</button>
        <div className="modal-left">
          <div className="company-info">
            <div className="company-logo">
              <img src={item.name} alt={item.name} />
            </div>
            <div className="company-name">{item.nameString}</div>
            <div className="platform-name">{item.platform}</div>
            {/* Integrate the DoughnutChart */}
            <DoughnutChart data={progressData} />

            <div className="developer-response">Developer Response</div>
          </div>
        </div>
        <div className="modal-right">
          <div className="company-description">
            <h3>Company Description</h3>
            <p>{item.description}</p>
          </div>
          <div className="audit-date">
            <strong>Audit Date: </strong>{item.auditDate}
          </div>

          {/* Check if item.errors is an array before using .map */}
          {Array.isArray(item.errors) && item.errors.length > 0 ? (
            <table className="error-table">
                
              <thead>
                <tr>
                  <th>Severity</th>
                  <th>Errors</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {item.errors.map((error, index) => (
                  <tr key={index}>
                    <td className={`severity ${error?.severity?.toLowerCase() || ''}`}>
                      {error?.severity || 'N/A'}
                    </td>
                    <td>{error?.errorMsg || 'No details available'}</td>
                    <td className={`status ${error?.status?.toLowerCase() || ''}`}>
                      {error?.status || 'Unknown'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No errors to display.</p> // Message when there are no errors or errors is not an array
          )}

          <div className="modal-actions">
            <button className="request-btn">Request Audit</button>
            <button className="download-btn">Download Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
