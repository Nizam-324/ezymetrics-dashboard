import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Sidebar from "./Pages/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Leads from "./Pages/Leads/Leads";
import Analytics from "./Pages/Analystics/Analystics";
import Reports from "./Pages/Reports/Reports";
import { useEffect, useState } from "react";

function App() {
    const [sidebar, setSidebar] = useState(true)

    useEffect(() => {
        const windowWidth = window.innerWidth < 480;
        if (windowWidth) {
            setSidebar(false);
        } else {
            setSidebar(true);
        }
    }, []);

    return (
        <Router>
            <div className="app">
                <header>
                    <h1>EzyMetrics</h1>
                    <button onClick={() => setSidebar((prev) => !prev)}><span class="material-symbols-outlined">menu</span></button>
                </header>
                <div className="content">
                    {sidebar && <Sidebar />}
                    <Routes>
                        {/* Default route redirects to /dashboard */}
                        <Route path="/" element={<Navigate to="/dashboard" />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/leads" element={<Leads />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/reports" element={<Reports />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
