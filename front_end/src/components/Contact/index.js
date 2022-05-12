import React from 'react';
import emailjs from 'emailjs-com';
import './style.css';
import { BsDash } from 'react-icons/bs';
import { Bounce, toast } from 'react-toastify';

/**
* @author
* @function Contact
**/

export const Contact = (props) => {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
            'service_id',
            'template_id',
            e.target,
            'user_id'
        ).then(res => {
            console.log(res)
            toast.success('Thank you, your message received', { position: "top-left", transition: Bounce });

        }).catch(err => {
            console.log(err)
            toast.error('Something Went Wrong, try again', { position: "top-left", transition: Bounce });
        }
        );
    }

    return (
        <>
            <div class="heading text-center" id="contact_head">
                <h1><span>Contact</span> Us</h1>
                <h2 className="contact_underline"><BsDash /></h2>
            </div>
            <section id="contact" class="container-fluid">

                <div class="row justify-content-center">
                    <form action="" class="col-md-7" onSubmit={sendEmail}>

                        <div class="inputBox">
                            <input type="text" name="name" required placeholder='Full Name' />
                            <h3>Full name</h3>
                        </div>

                        <div class="inputBox">
                            <input type="email" name="user_email" required placeholder='mail@example.com' />
                            <h3>mail@example.com</h3>
                        </div>

                        <div class="inputBox">
                            <textarea required name="message" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                            <h3>Your message</h3>
                        </div>

                        <input type="submit" value="send" />

                    </form>
                </div>

            </section>
        </>
    )

}