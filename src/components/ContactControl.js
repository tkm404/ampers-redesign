import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Contact from '../pages/Contact';
import ContactForm from './ContactForm';
import Banner from './Banner';
import PropTypes from 'prop-types';
import { db } from './../firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import ContactSuccess from './ContactSuccess.js';
import ContactError from './ContactError.js'


function ContactControl() {

  const [formVisibleOnPage, setFormVisibleOnPage ] = useState(true);
  const [thankYouSubmit, setThankYouSubmit] = useState(false)
  const [error, setError] = useState(null);

  const handleAddingClientSubmission = async (newClientMessage) => {
    const collectionRef = collection(db, "TestEmails");
    await addDoc(collectionRef, newClientMessage);
    setFormVisibleOnPage(false)
    if (!error) {
      setThankYouSubmit(true)
    } else {
      setError(error)
    }
  }

    let currentlyVisible = null;  

  if (formVisibleOnPage) {
  return (
    <React.Fragment>
      <Stack gap={2} className="p-4 col-md-8 mx-auto">
        <Contact />
      </Stack>
      <Banner />
      
      <ContactForm
      onClientSubmission={handleAddingClientSubmission}/>
    </React.Fragment>
  )    
  } else if (thankYouSubmit) {
    return (
      <React.Fragment>
        <Stack gap={2} className="p-4 col-md-8 mx-auto">
          <Contact />
        </Stack>
        <Banner />
        <ContactSuccess/>
      </React.Fragment>
    )    
  } else {
    return (
      <React.Fragment>
        <Stack gap={2} className="p-4 col-md-8 mx-auto">
          <Contact />
        </Stack>
        <Banner />
        <ContactError/>
      </React.Fragment>
    )
  }

}

ContactControl.propTypes = {
  onClientSubmission: PropTypes.func
}

export default ContactControl