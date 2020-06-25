import React, { Component } from 'react'
import '../css/Contact.css'

// components
import NavBar from './NavBar'
// logo
import logo from '../images/Logo v1.png'

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: '',
      status: '',
    }
    this.submitForm = this.submitForm.bind(this)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS' })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }

  render() {
    const { status } = this.state
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row contact-section">
            <div class="col-md-1 offset-md-1" />
            <div className="col-md-4">
              <img src={logo} alt="logo" className="zen-logo-contact" />
              <p>
                We have reviewed hundreds of clinical studies to build the
                highest quality programs and aim to deliver these programs at
                affordable prices
              </p>
              <ul className="contact-bullet-points">
                <li>
                  <i className="fas fa-check" />
                  Designed by healthcare professionals
                </li>
                <li>
                  <i className="fas fa-check" />
                  Used by thousands of patients
                </li>
                <li>
                  <i className="fas fa-check" />
                  Backed by our guarantee
                </li>
              </ul>
            </div>
            <div class="col-md-1 offset-md-1" />
            <div className="col-md-6 contact-form-section">
              <div className="col-md-12 contact-form">
                <h1>We Want to Hear from You, Tell Us How We Can Help</h1>
                <p>Start your journey Today</p>
                <form
                  class="contact-form-class"
                  onSubmit={this.submitForm}
                  action="https://formspree.io/xnqgvkgg"
                  method="POST"
                >
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Name"
                        style={{ color: 'white' }}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Email"
                        style={{ color: 'white' }}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <textarea
                        type="text"
                        name="message"
                        class="form-control"
                        id="inputPassword4"
                        placeholder="Your Message"
                        style={{ color: 'white' }}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12 contact-button">
                      {status === 'SUCCESS' ? (
                        <p>Thanks!</p>
                      ) : (
                        <button type="submit" className="float-right">
                          Submit
                        </button>
                      )}
                      {status === 'ERROR' && <p>Ooops! There was an error.</p>}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
