import BarChart from "@/pages/Home/components/BarChart.jsx";
import './index.scss'
const Home = () => {
    return (
        <div className='bar-box'>
            <BarChart title={'三大框架满意度'}/>
            <BarChart title={'三大框架使用度'}/>
        </div>
    )
}

export default Home