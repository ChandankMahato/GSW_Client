import React from 'react';
import emailjs from 'emailjs-com';
import './style.css';

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
        }).catch(err => console.log(err));
    }

    return (
        <>
            <div class="heading text-center" id="contact_head">
                <h1><span>Contact</span> Us</h1>
            </div>
            <section id="contact" class="container-fluid">

                <div class="row justify-content-center">
                    <form action="" class="col-md-7" onSubmit={sendEmail}>

                        <div class="inputBox">
                            <input type="text" name="name" required />
                            <h3>fullname</h3>
                        </div>

                        <div class="inputBox">
                            <input type="email" name="user_email" required />
                            <h3>email</h3>
                        </div>

                        <div class="inputBox">
                            <textarea required name="message" id="" cols="30" rows="10"></textarea>
                            <h3>message</h3>
                        </div>

                        <input type="submit" value="send" />

                    </form>
                </div>

            </section>
        </>
    )

}