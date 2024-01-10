import React, {useState} from "react";
import Button from 'react-bootstrap/Button'

function ContactForm() {

  return (
      <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email Address: </label>
          <input type="email" className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message: </label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <Button type="submit">Submit</Button>
      </form>
  )
}

export default ContactForm