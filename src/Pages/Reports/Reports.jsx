import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './reports.css';
import { leadsData } from '../Leads/Leads'; // Import leads data
import { analyticsData } from '../Analystics/Analystics'; // Import analytics data
import { useState } from 'react';

export default function Reports() {
  const [selectedData, setSelectedData] = useState('leads'); // Default to "leads"

  const generatePDF = () => {
    const doc = new jsPDF();

    if (selectedData === 'leads') {
      doc.text("Leads Report", 10, 10);

      // Table for Leads Data
      doc.autoTable({
        head: [['ID', 'Name', 'Email', 'Status']],
        body: leadsData.map((lead) => [lead.id, lead.name, lead.email, lead.status]),
        startY: 20, // Start the table below the title
      });

    } else if (selectedData === 'analytics') {
      doc.text("Analytics Report", 10, 10);

      // Table for Analytics Data
      analyticsData.datasets.forEach((dataset, index) => {
        doc.text(dataset.label, 10, 20 + index * 63.5); // Add dataset label as a header
        doc.autoTable({
          head: [['Month', 'Data']],
          body: dataset.data.map((dataPoint, dataIndex) => [analyticsData.labels[dataIndex], dataPoint]),
          startY: 20 + index * 65, // Ensure tables are spaced correctly
        });
      });
    }

    doc.save(`${selectedData}_report.pdf`);
  };

  const generateCSV = () => {
    const csvRows = [];

    if (selectedData === 'leads') {
      csvRows.push('ID,Name,Email,Status');
      leadsData.forEach(lead => {
        csvRows.push(`${lead.id},${lead.name},${lead.email},${lead.status}`);
      });
    } else if (selectedData === 'analytics') {
      csvRows.push('Metric,Month,Data');
      analyticsData.datasets.forEach((dataset) => {
        dataset.data.forEach((dataPoint, dataIndex) => {
          csvRows.push(`${dataset.label},${analyticsData.labels[dataIndex]},${dataPoint}`);
        });
      });
    }

    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedData}_report.csv`;
    link.click();
  };

  return (
    <div className="reports">
      <div className="reports-card">
        <h2>Generate Reports</h2>
        <p>Select the type of data and format to download:</p>

        {/* Dropdown to select data type */}
        <div className="dropdown">
          <label htmlFor="data-type">Choose data:</label>
          <select
            id="data-type"
            value={selectedData}
            onChange={(e) => setSelectedData(e.target.value)}
          >
            <option value="leads">Leads Data</option>
            <option value="analytics">Analytics Data</option>
          </select>
        </div>

        <div className="button-group">
          <button className="btn btn-pdf" onClick={generatePDF}>Generate PDF</button>
          <button className="btn btn-csv" onClick={generateCSV}>Download as CSV</button>
        </div>
      </div>
    </div>
  );
}
