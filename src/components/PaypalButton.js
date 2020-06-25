import React from 'react'
import ReactDOM from 'react-dom'
import scriptLoader from 'react-async-script-loader'
import Spinner from './Spinner'

// css
import '../css/Payment.css'
// components
import NavBar from '../components/NavBar'
//context
import UserContext from './UserContext'

const CLIENT = {
  sandbox:
    'AdYp2W6P1rP48T1t_3FIoYLUvHJ27hyAL8OmWJnSelF-y9nroib6el4DNzoTtREM01LdPbe4BeZGwOEZ',
  production:
    'AZ-TgBt00z9Fq252aWs8HqmPqWV1VbGkzcUkUEGbyeSCyroTbMd6l0Y61mQ28fmycwkzahv5LFzD7Jkx',
}

const CLIENT_ID =
  process.env.NODE_ENV === 'production' ? CLIENT.production : CLIENT.sandbox

let PayPalButton = null
class PaypalButton extends React.Component {
  static contextType = UserContext
  constructor(props) {
    super(props)

    this.state = {
      showButtons: false,
      loading: true,
      paid: false,
    }

    window.React = React
    window.ReactDOM = ReactDOM
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props

    if (isScriptLoaded && isScriptLoadSucceed) {
      PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM })
      this.setState({ loading: false, showButtons: true })
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps

    const scriptJustLoaded =
      !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver('react', {
          React,
          ReactDOM,
        })
        this.setState({ loading: false, showButtons: true })
      }
    }
  }
  createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: 'Book and Full Diet Program',
          amount: {
            currency_code: 'USD',
            value: 200,
          },
        },
      ],
    })
  }

  onApprove = (data, actions) => {
    actions.order.capture().then((details) => {
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID,
      }
      console.log('Payment Approved: ', paymentData)
      this.setState({ showButtons: false, paid: true })
    })
  }

  render() {
    const { showButtons, loading, paid } = this.state

    return (
      <div>
        <NavBar blueNav={this.context} />
        <div className="main">
          <div className="container payment-container">
            <div className="row payment-list">
              <div className="col-md-12">{loading && <Spinner />}</div>
            </div>
            {showButtons && (
              <div>
                <div className="row payment-div">
                  <div className="col-md-7 payment-text">
                    <h1>Payment Info</h1>
                    <div>
                      <ul className="payment-ul">
                        <li>
                          <i class="fas fa-caret-right"></i>Includes Book and
                          Full Diet Program
                        </li>
                        <li>
                          <i class="fas fa-caret-right"></i>Get the first Five
                          Modules
                        </li>
                        <li>
                          <i class="fas fa-caret-right"></i>Unconditional money
                          back guarantee
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row payment-div">
                  <div className="col-md-3 payment-buttons">
                    <PayPalButton
                      createOrder={(data, actions) =>
                        this.createOrder(data, actions)
                      }
                      onApprove={(data, actions) =>
                        this.onApprove(data, actions)
                      }
                    />
                  </div>
                </div>
              </div>
            )}

            {paid && (
              <div className="main">
                <h2>
                  Congrats! You just succesfully paid for Book and Diet Program!
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default scriptLoader(
  `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`,
)(PaypalButton)
