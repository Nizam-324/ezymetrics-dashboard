import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register the required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const analyticsData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            label: "Sales",
            data: [65, 59, 80, 81, 85, 90],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: false,
        },
        {
            label: "Conversions",
            data: [28, 48, 40, 19, 96, 27],
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: false,
        },
        {
            label: "User Engagement",
            data: [50, 60, 70, 90, 85, 78],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            fill: false,
        },
        {
            label: "Revenue",
            data: [100, 120, 130, 150, 170, 190],
            borderColor: "rgba(153, 102, 255, 1)",
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            fill: false,
        },
    ],
};

const windowWidth = window.innerWidth < 825;
const windowWidthMOB = window.innerWidth < 480;

export default function Analytics() {
    return (
        <div className="analytics" style={{width: windowWidthMOB ? "98%":  windowWidth ? "85%"  : "70%"}}>
            <h2>Performance Analytics</h2>
            <Line data={analyticsData} />
        </div>
    );
}
