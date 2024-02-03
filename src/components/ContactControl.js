import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Contact from '../pages/Contact';
import ContactForm from './ContactForm';
import Banner from './Banner';
import PropTypes from 'prop-types';
import { db } from './../firebase.js';
import { collection, addDoc } from 'firebase/firestore';


function ContactControl() {

  const handleAddingClientSubmission = async (newClientMessage) => {
    const collectionRef = collection(db, "TestEmails");
    await addDoc(collectionRef, newClientMessage);
  }

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
}

ContactControl.propTypes = {
  onClientSubmission: PropTypes.func
}

export default ContactControl