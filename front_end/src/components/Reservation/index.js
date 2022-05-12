import React from 'react';
import emailjs from 'emailjs-com';
import './style.css';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { BsDash } from 'react-icons/bs';
import { Bounce, toast } from 'react-toastify';

/**
* @author
* @function Reservation
**/

export const Reservation = (props) => {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
            'service_id',
            'template_id',
            e.target,
            'user_id'
        ).then(res => {
            console.log(res)
            toast.success('Thank you for the reservation', { position: "top-left", transition: Bounce });

        }).catch(err => {
            console.log(err)
            toast.error('Something Went Wrong, try again', { position: "top-left", transition: Bounce });
        }
        );
    }

    return (
        <>
            <div class="heading text-center" id="Reservation_head">
                <h1><span>Reservation</span><GiForkKnifeSpoon /></h1>
                <h2 className="Reservation_underline"><BsDash /></h2>
                <h6>We provide free, secure and instantly confirmed online reservation.</h6>
            </div>
            <section id="Reservation" class="container-fluid">

                <div class="row justify-content-center">
                    <form action="" class="col-md-7" onSubmit={sendEmail}>

                        <div class="textBox">
                            <div class="inputBoxR">
                                <input type="text" name="name" required placeholder='Full name' />
                                <h3>Full name</h3>
                            </div>
                            <div class="inputBoxR">
                                <input type="text" name="number" required placeholder='01962859606' />
                                <h3>Mobile number</h3>
                            </div>
                            <div class="inputBoxR">
                                <input type="text" name="email" required placeholder='mail@example.com' />
                                <h3>Your eamil</h3>
                            </div>
                        </div>

                        <div class="textBox">
                            <div class="inputBoxR">
                                <input type="date" name="date" required placeholder='Select Date' />
                                <h3>Select date</h3>
                            </div>
                            <div class="inputBoxR">
                                <input type="text" name="person" required placeholder='6 person' />
                                <h3>No of person</h3>
                            </div>
                            <div class="inputBoxR">
                                <input type="time" name="time" required placeholder='Set Time' />
                                <h3>Set time</h3>
                            </div>
                        </div>

                        <div class="textBox">
                            <div class="inputBoxR">
                                <textarea required name="message" id="" cols="30" rows="10" placeholder='message'></textarea>
                                <h3>Your message</h3>
                            </div>
                        </div>
                        <input type="submit" value="Reserve" />
                    </form>
                </div>
                <h6>You can also call: <a href="tel:01962859606">01962859606</a> to make a reservation</h6>
            </section>
        </>
    )

}