
import react from "react";
import reactDom from "react-dom";
import Banner from '../assets/fash1.jpg';
import Banner1 from '../assets/fash2.png';
import Banner2 from '../assets/fash3.jpg';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';


let Carozol = () => {
    return (<>
        <div id="carouselExampleControls" className="carousel slide mt-3" data-bs-ride="carousel">
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img src={Banner} className="d-block w-100" alt="Fashion Banner 1" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>New Arrivals</h5>
                        <p>Explore the latest fashion trends</p>
                    </div>
                </div>



                <div className="carousel-item">
                    <img src={Banner1} className="d-block w-100" alt="Fashion Banner 2" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Trendy Styles</h5>
                        <p>Fashion for every season</p>
                    </div>
                </div>



                <div className="carousel-item">
                    <img src={Banner2} className="d-block w-100" alt="Fashion Banner 3" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Stylish for All</h5>
                        <p>Men, Women, and Kids</p>
                    </div>
                </div>


            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>


        <div className="text-center py-5 bg-primary text-white">
            <h2 className="display-5">Shop the Latest Styles at Zudio</h2>
            <p>Affordable fashion for Men, Women, and Kids</p>
            <button className="btn btn-light mt-3">Explore Now</button>
        </div>


    </>)

}
export default Carozol;