import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Recharts = ({ ratings }) => {
    return (
 <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ratings} layout="vertical">
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis type="number" /> 
                    <YAxis dataKey="name" type="category" reversed/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#FF8811" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Recharts ;