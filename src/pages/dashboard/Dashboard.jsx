import { useEffect } from "react"
// import { setDashboardChart } from "../../Utility/setChart"
import Card from "./Card";
import ProductTable from "./ProductTable";

const Dashboard = () => {

    useEffect(() => {
        const labels = [
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند",
        ];
        const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];
        // setDashboardChart(labels, datapoints);
    }, []);

    return (
        <div id="dashboard_section" className="dashboard_section main_section">
            <div className="row">
                <Card
                currentValue="7"
                tittle ="سبد خرید امروز"
                subTitl="سبد های خرید مانده امروز"
                lastWeekValue="13"
                lastMonthValue ="18"
                icon="fas fa-shopping-basket"
                
                />
                <Card
                currentValue="5"
                tittle ="سفارشات مانده امروز"
                subTitl="سفارشات معلق و فاقد پرداختی"
                lastWeekValue="9"
                lastMonthValue ="6"
                icon="fas fa-dolly"
                
                />
                 <Card
                currentValue="45"
                tittle ="سفارشات امروز"
                subTitl="سفارشات کامل و دارای پرداختی"
                lastWeekValue="263"
                lastMonthValue ="1038"
                icon="fas fa-luggage-cart"
                
                /> 
                  <Card
                currentValue="1,500,000"
                tittle ="درآمد امروز"
                subTitl="جمع مبالغ پرداختی (تومان)"
                lastWeekValue="6,380,000"                
                lastMonthValue ="22,480,000"
                icon="fas fa-money-check-alt" 
                
                />  
            </div>
            <div className="row">
                <ProductTable/>

                <div className="col-12 col-lg-6">
                    <canvas id="myChart" height="195"></canvas>
                </div>

            </div>


        </div>


    );
}

export default Dashboard