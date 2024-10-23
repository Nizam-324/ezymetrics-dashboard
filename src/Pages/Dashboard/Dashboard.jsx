// Dashboard.js
import { useEffect, useState } from "react";
import "./dashboard.css";

export default function Dashboard() {
    const [widgets, setWidgets] = useState([
        { id: 1, name: "Sales", data: 1200, description: "Total sales for the current quarter", unit: "$" },
        { id: 2, name: "Conversions", data: 300, description: "Total conversions from marketing campaigns", unit: "%" },
        { id: 3, name: "User Engagement", data: 80, description: "Percentage of active users", unit: "%" },
        { id: 4, name: "Revenue", data: 50000, description: "Total revenue for the year", unit: "$" },
        { id: 5, name: "New Leads", data: 50, description: "New leads generated this month", unit: "leads" },
        { id: 6, name: "Customer Satisfaction", data: 90, description: "Overall customer satisfaction rating", unit: "%" },
        { id: 7, name: "Bounce Rate", data: 40, description: "Percentage of visitors who left after viewing one page", unit: "%" },
        { id: 8, name: "Average Session Duration", data: 5, description: "Average time spent on site per session", unit: "mins" },
        { id: 9, name: "Active Subscriptions", data: 1200, description: "Total number of active subscriptions", unit: "subs" },
        { id: 10, name: "Referral Traffic", data: 1500, description: "Number of users referred by other websites", unit: "users" },
    ]);

    useEffect(() => {
        // Simulate API call to update widget data
        const interval = setInterval(() => {
            setWidgets((prevWidgets) =>
                prevWidgets.map((widget) => ({
                    ...widget,
                    data: widget.data + Math.floor(Math.random() * 100), // Simulate new data
                }))
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const getIconForWidget = (name) => {
        switch (name) {
            case "Sales":
                return <span class="db-icon material-symbols-outlined">attach_money</span>;
            case "Conversions":
                return <span class="db-icon material-symbols-outlined">monitoring</span>;
            case "User Engagement":
                return <span class="db-icon material-symbols-outlined">person_pin_circle</span>;
            case "Revenue":
                return <span class="db-icon material-symbols-outlined">payments</span>;
            case "New Leads":
                return <span class="db-icon material-symbols-outlined">group_add</span>;
            case "Customer Satisfaction":
                return <span class="db-icon material-symbols-outlined">sentiment_satisfied</span>;
            case "Bounce Rate":
                return <span class="db-icon material-symbols-outlined">logout</span>;
            case "Average Session Duration":
                return <span class="db-icon material-symbols-outlined">schedule</span>;
            case "Active Subscriptions":
                return <span class="db-icon material-symbols-outlined">mark_email_read</span>;
            case "Referral Traffic":
                return <span class="db-icon material-symbols-outlined">pageview</span>;
            default:
                return null;
        }
    };

    return (
        <div className="dashboard">
            {widgets.map((widget) => (
                <div key={widget.id} className="widget">
                    <h3>{widget.name}</h3>
                    <p>
                        <span className="icon-data">
                            {getIconForWidget(widget.name)}{" "}
                            {widget.id === 6
                                ? Math.min(widget.data, 96)
                                : widget.id === 7
                                ? Math.min(widget.data, 31)
                                : widget.id === 5
                                ? Math.min(widget.data, 75)
                                : widget.id === 3
                                ? Math.min(widget.data, 94)
                                : widget.data}
                        </span>{" "}
                        <span className="unit">{widget.unit}</span>
                    </p>
                    <small>{widget.description}</small>
                </div>
            ))}
        </div>
    );
}
