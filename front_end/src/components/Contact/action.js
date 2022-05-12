import emailjs from 'emailjs-com';
import { Bounce, toast } from 'react-toastify';

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

export default sendEmail;