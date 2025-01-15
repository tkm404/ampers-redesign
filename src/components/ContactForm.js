import React from "react";
import PropTypes from 'prop-types'
import ReusableForm from "./ReusableForm";

function ContactForm(props) {

  function handleNewClientSubmission(event) {
    event.preventDefault();
    props.onClientSubmission({
      to: 'workorders@amperspdx.com',
      bcc: 'scottmcdowellpdx@gmail.com',
      message: {
      subject: 'Firebase Mail Form - ' + event.target.clientName.value,
      text: 'Client Message from ' + event.target.clientEmail.value + ': ' + event.target.clientMessage.value     
      }
    });
  }

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