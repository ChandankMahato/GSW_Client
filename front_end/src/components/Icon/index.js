import React from 'react';
import './style.css';
import { GiChefToque, GiCampCookingPot } from 'react-icons/gi';
import {MdOutlineFamilyRestroom} from 'react-icons/md';
import {FaAward} from 'react-icons/fa';
/**
* @author
* @function Icon
**/

{/* <i><FontAwesomeIcon icon={faConciergeBell} /></i> */ }
{/* <i><GiChefToque/></i> */ }

export const Icon = (props) => {
    return (
        <section className="icons-container">

            <div className="icons">
                <i><MdOutlineFamilyRestroom /></i>
                <h3>100</h3>
                <p>DAILY CUSTOMERS</p>
            </div>

            <div className="icons">
                <i><GiCampCookingPot /></i>
                <h3>120</h3>
                <p>BEST FOOD</p>
            </div>

            <div className="icons">
                <i><GiChefToque /></i>
                <h3>3</h3>
                <p>MASTER CHEFS</p>
            </div>

            <div className="icons">
                <i><FaAward/></i>
                <h3>1000</h3>
                <p>OUR EXPERIENCE</p>
            </div>

        </section>
    )

}