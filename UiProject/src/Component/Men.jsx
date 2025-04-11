import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



import men1 from '../assets/men1.jpg';
import men2 from '../assets/men2.jpg';
import men3 from '../assets/men3.jpg';
import men4 from '../assets/men3.jpg';



import '../App.css';
let Men = () => {


    return (<>


        <div className="bg-top-image d-flex align-items-center text-white">
            <div className="container py-5 text-center">
                <h1 className="display-4 fw-bold">Welcome to Mens Fashion Hub</h1>
                <p className="lead">Style that defines you.</p>
            </div>
        </div>



        <div className="card" style={{ width: "18rem" }}>
            <img src={men1} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>

            </div>
        </div>



        {/* card 2 */}
        <div className="card" style={{ width: "18rem" }}>
            <img src={men2} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's contents.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>

            </div>
        </div>

        {/* card 3 */}
        <div className="card" style={{ width: "18rem" }}>
            <img src={men3} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>

            </div>

        </div>
        <div className="card" style={{ width: "18rem" }}>
            <img src={men4} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>

            </div>
        </div>

    </>);

}
export default Men;