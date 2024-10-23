// Sidebar.js
import { Link } from "react-router-dom";
import "./sidebar.css";
import { useState } from "react";
export default function Sidebar() {

    const [active, setActive] = useState(null)

    return (
        <nav className="sidebar">
            <ul>
                <div className="logo">
                    <h1>EM</h1>
                </div>
                <li onClick={() => setActive("dashboard")} className={active ===  "dashboard" ? "active" : ""}>
                    <Link to="/dashboard">
                        <i className="material-symbols-outlined">dashboard</i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li onClick={() => setActive("leads")} className={active ===  "leads" ? "active" : ""}>
                    <Link to="/leads">
                        <i className="material-symbols-outlined">group</i>
                        <span>Leads</span>
                    </Link>
                </li>
                <li onClick={() => setActive("analytics")} className={active ===  "analytics" ? "active" : ""}>
                    <Link to="/analytics">
                        <i className="material-symbols-outlined">bar_chart</i>
                        <span>Analytics</span>
                    </Link>
                </li>
                <li onClick={() => setActive("reports")} className={active ===  "reports" ? "active" : ""}>
                    <Link to="/reports">
                        <i className="material-symbols-outlined">lab_profile</i>
                        <span>Reports</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
