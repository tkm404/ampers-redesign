import React from "react";
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function ContactForm(props) {

  function handleNewClientSubmission(event) {
    event.preventDefault();
    // console.log(event);
    // console.log(event.target[4].value)
    const captchaValue = event.target[4].value;
    // console.log(captchaValue)
    // target[4].value
    if (!captchaValue) {
      alert('Please verify the reCAPTCHA!')
      return
    } else {
      event.preventDefault();
      props.onClientSubmission({
        to: 'workorders@amperspdx.com',
        bcc: 'scottmcdowellpdx@gmail.com',
        message: {
        subject: 'Firebase Mail Form - ' + event.target.clientName.value,
        text: 'Client Message from ' + event.target.clientEmail.value + ': ' + event.target.clientMessage.value,
        },
      });
    }};

return (
  <React.Fragment>
    <ReusableForm
    formSubmissionHandler={handleNewClientSubmission}
    />
  </React.Fragment>
)
}

ContactForm.propTypes = {
  onClientSubmission: PropTypes.func
}

export default ContactForm