import React from "react";
import PropTypes from 'prop-types'
import ReusableForm from "./ReusableForm";

function ContactForm(props) {

  function handleNewClientSubmission(event) {
    event.preventDefault();
    props.onClientSubmission({
      client: event.target.clientName.value,
      email: event.target.clientEmail.value,
      message: event.target.clientMessage.value
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