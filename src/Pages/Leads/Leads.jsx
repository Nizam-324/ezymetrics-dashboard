// Leads.js
import { useState } from "react";
import "./leads.css";

export const leadsData = [
    // New Leads
    { id: 1, name: "John Doe", email: "john@example.com", phone: "555-1234", company: "Acme Inc.", status: "New", lastContacted: "2024-10-01" },
    {
        id: 2,
        name: "Michael Johnson",
        email: "michael.johnson@example.com",
        phone: "555-2345",
        company: "Innovate Corp",
        status: "New",
        lastContacted: "2024-09-30",
    },
    {
        id: 3,
        name: "Laura Thompson",
        email: "laura.thompson@example.com",
        phone: "555-7891",
        company: "Bright Ideas",
        status: "New",
        lastContacted: "2024-10-18",
    },
    {
        id: 4,
        name: "Paul Adams",
        email: "paul.adams@example.com",
        phone: "555-4321",
        company: "Visionary Solutions",
        status: "New",
        lastContacted: "2024-10-17",
    },
    {
        id: 5,
        name: "Emma Clarke",
        email: "emma.clarke@example.com",
        phone: "555-8765",
        company: "Global Reach",
        status: "New",
        lastContacted: "2024-10-20",
    },

    // Contacted Leads
    {
        id: 6,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "555-5678",
        company: "Tech Solutions",
        status: "Contacted",
        lastContacted: "2024-10-15",
    },
    {
        id: 7,
        name: "Sophia Wilson",
        email: "sophia.wilson@example.com",
        phone: "555-5679",
        company: "Marketing Hub",
        status: "Contacted",
        lastContacted: "2024-10-12",
    },
    {
        id: 8,
        name: "Liam Johnson",
        email: "liam.johnson@example.com",
        phone: "555-6789",
        company: "Core Strategies",
        status: "Contacted",
        lastContacted: "2024-10-14",
    },
    {
        id: 9,
        name: "Ava Collins",
        email: "ava.collins@example.com",
        phone: "555-9012",
        company: "Media Express",
        status: "Contacted",
        lastContacted: "2024-10-16",
    },
    {
        id: 10,
        name: "Henry Moore",
        email: "henry.moore@example.com",
        phone: "555-3456",
        company: "Tech Titans",
        status: "Contacted",
        lastContacted: "2024-10-13",
    },

    // Follow-up Leads
    {
        id: 11,
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "555-3456",
        company: "Creative Solutions",
        status: "Follow-up",
        lastContacted: "2024-09-28",
    },
    {
        id: 12,
        name: "James Anderson",
        email: "james.anderson@example.com",
        phone: "555-8902",
        company: "FutureTech",
        status: "Follow-up",
        lastContacted: "2024-10-08",
    },
    {
        id: 13,
        name: "Mia Turner",
        email: "mia.turner@example.com",
        phone: "555-5670",
        company: "Alpha Strategies",
        status: "Follow-up",
        lastContacted: "2024-10-10",
    },
    {
        id: 14,
        name: "Ethan Rogers",
        email: "ethan.rogers@example.com",
        phone: "555-4322",
        company: "NextGen Dynamics",
        status: "Follow-up",
        lastContacted: "2024-10-05",
    },
    {
        id: 15,
        name: "Grace Lewis",
        email: "grace.lewis@example.com",
        phone: "555-8766",
        company: "Innovative Enterprises",
        status: "Follow-up",
        lastContacted: "2024-10-19",
    },

    // Qualified Leads
    {
        id: 16,
        name: "Chris Brown",
        email: "chris.brown@example.com",
        phone: "555-4567",
        company: "NextGen Software",
        status: "Qualified",
        lastContacted: "2024-10-10",
    },
    {
        id: 17,
        name: "Olivia White",
        email: "olivia.white@example.com",
        phone: "555-9013",
        company: "Startup Labs",
        status: "Qualified",
        lastContacted: "2024-10-14",
    },
    {
        id: 18,
        name: "Lucas Green",
        email: "lucas.green@example.com",
        phone: "555-6781",
        company: "Edge Innovations",
        status: "Qualified",
        lastContacted: "2024-10-11",
    },
    {
        id: 19,
        name: "Amelia Harris",
        email: "amelia.harris@example.com",
        phone: "555-7892",
        company: "Dynamic Solutions",
        status: "Qualified",
        lastContacted: "2024-10-13",
    },
    {
        id: 20,
        name: "Jack Robinson",
        email: "jack.robinson@example.com",
        phone: "555-5432",
        company: "Inspire Corp",
        status: "Qualified",
        lastContacted: "2024-10-09",
    },

    // Closed Leads
    {
        id: 21,
        name: "David Martinez",
        email: "david.martinez@example.com",
        phone: "555-6780",
        company: "TechGurus",
        status: "Closed",
        lastContacted: "2024-10-05",
    },
    {
        id: 22,
        name: "Noah Baker",
        email: "noah.baker@example.com",
        phone: "555-7893",
        company: "Elite Networks",
        status: "Closed",
        lastContacted: "2024-10-04",
    },
    {
        id: 23,
        name: "Isabella Wright",
        email: "isabella.wright@example.com",
        phone: "555-8767",
        company: "Omega Systems",
        status: "Closed",
        lastContacted: "2024-10-07",
    },
    {
        id: 24,
        name: "Benjamin Scott",
        email: "benjamin.scott@example.com",
        phone: "555-4323",
        company: "Prime Solutions",
        status: "Closed",
        lastContacted: "2024-10-06",
    },
    {
        id: 25,
        name: "Charlotte Hall",
        email: "charlotte.hall@example.com",
        phone: "555-5433",
        company: "VisionTech",
        status: "Closed",
        lastContacted: "2024-10-03",
    },
];

export default function Leads() {
    const [selectedLead, setSelectedLead] = useState(null);

    return (
        <div className="lead-board">
            <h2>Leads</h2>

            <div className="leads">
                {/* List for "New" leads */}
                <div className="lead-rows">
                    <h3 className="lead-head">New Leads</h3>
                    <ul className="lead-list">
                        {leadsData
                            .filter((lead) => lead.status === "New")
                            .map((lead) => (
                                <li key={lead.id} onClick={() => setSelectedLead(lead)} className="lead-item">
                                    <span className="lead-name">{lead.name}</span> <span className="lead-status">{lead.status}</span>
                                    <span style={{backgroundColor: "#28a745"}} class="lead-icon material-symbols-outlined">grade</span>
                                </li>
                            ))}
                    </ul>
                </div>

                {/* List for "Contacted" leads */}
                <div className="lead-rows">
                    <h3 className="lead-head">Contacted Leads</h3>
                    <ul className="lead-list">
                        {leadsData
                            .filter((lead) => lead.status === "Contacted")
                            .map((lead) => (
                                <li key={lead.id} onClick={() => setSelectedLead(lead)} className="lead-item">
                                    <span className="lead-name">{lead.name}</span> <span className="lead-status">{lead.status}</span>
                                    <span style={{backgroundColor: "#007bff"}}  class="lead-icon material-symbols-outlined">call</span>
                                </li>
                            ))}
                    </ul>
                </div>

                {/* List for "Follow-up" leads */}
                <div className="lead-rows">
                    <h3 className="lead-head">Follow-up Leads</h3>
                    <ul className="lead-list">
                        {leadsData
                            .filter((lead) => lead.status === "Follow-up")
                            .map((lead) => (
                                <li key={lead.id} onClick={() => setSelectedLead(lead)} className="lead-item">
                                    <span className="lead-name">{lead.name}</span> <span className="lead-status">{lead.status}</span>
                                    <span style={{backgroundColor: "#fd7e14"}}  class="lead-icon material-symbols-outlined">sync</span>
                                </li>
                            ))}
                    </ul>
                </div>

                {/* List for "Qualified" leads */}
                <div className="lead-rows">
                    <h3 className="lead-head">Qualified Leads</h3>
                    <ul className="lead-list">
                        {leadsData
                            .filter((lead) => lead.status === "Qualified")
                            .map((lead) => (
                                <li key={lead.id} onClick={() => setSelectedLead(lead)} className="lead-item">
                                    <span className="lead-name">{lead.name}</span> <span className="lead-status">{lead.status}</span>
                                    <span style={{backgroundColor: "#6f42c1"}}  class="lead-icon material-symbols-outlined">new_releases</span>
                                </li>
                            ))}
                    </ul>
                </div>

                {/* List for "Closed" leads */}
                <div className="lead-rows">
                    <h3 className="lead-head">Closed Leads</h3>
                    <ul className="lead-list">
                        {leadsData
                            .filter((lead) => lead.status === "Closed")
                            .map((lead) => (
                                <li key={lead.id} onClick={() => setSelectedLead(lead)} className="lead-item">
                                    <span className="lead-name">{lead.name}</span> <span className="lead-status">{lead.status}</span>
                                    <span style={{backgroundColor: "#dc3545"}}  class="lead-icon material-symbols-outlined">lock</span>
                                </li>
                            ))}
                    </ul>
                </div>

                {/* Modal to display lead details */}

                {selectedLead && (
                    <div className="modal">
                        <div className="modal-content">
                            <button className="close-modal" onClick={() => setSelectedLead(null)}>
                                &times;
                            </button>
                            <h3>{selectedLead.name}</h3>
                            <p>
                                <strong>Email:</strong> {selectedLead.email}
                            </p>
                            <p>
                                <strong>Phone:</strong> {selectedLead.phone}
                            </p>
                            <p>
                                <strong>Company:</strong> {selectedLead.company}
                            </p>
                            <p>
                                <strong>Status:</strong> {selectedLead.status}
                            </p>
                            <p>
                                <strong>Last Contacted:</strong> {selectedLead.lastContacted}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
