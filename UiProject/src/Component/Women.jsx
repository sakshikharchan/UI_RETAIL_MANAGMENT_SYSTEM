import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

<<<<<<< Updated upstream
import card1 from '../assets/women1.jpg';
import card2 from '../assets/women2.jpg';
import card3 from '../assets/women3.jpg';
import card4 from '../assets/women4.jpg';


=======

import Banner from '../Image/fash1.jpg';
import Banner1 from '../Image/fash2.jpg';
import Banner2 from '../Image/fash3.jpg';
>>>>>>> Stashed changes

import '../App.css';
let Women = () => {


    return (<>

        <div className="card" style={{ width: "18rem" }}>
            <img src={card1} className="card-img-top" alt="..." />
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
<<<<<<< Updated upstream
            <img src={card2} className="card-img-top" alt="..." />
=======
            <img src={Banner1} className="card-img-top" alt="..." />
>>>>>>> Stashed changes
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

        {/* card 3 */}
        <div className="card" style={{ width: "18rem" }}>
<<<<<<< Updated upstream
            <img src={card3} className="card-img-top" alt="..." />
=======
            <img src={Banner2} className="card-img-top" alt="..." />
>>>>>>> Stashed changes
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
            <img src={card4} className="card-img-top" alt="..." />
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
export default Women;