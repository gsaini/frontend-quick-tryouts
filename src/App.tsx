import './App.css'
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

import {
    BarChart,
    Bar,
    XAxis,
    CartesianGrid,
    Tooltip,
    Rectangle,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

function App() {
    const { t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <div>
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('es')}>Español</button>
            </div>
            <h1>{t('welcome_message')}</h1>
            <h2>{t('description')}</h2>
            <ResponsiveContainer width={"100%"} height={300}>
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Bar
                        dataKey="uv"
                        fill="#B3CDAD"
                        activeBar={<Rectangle fill="pink" stroke="blue" />}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default App;
