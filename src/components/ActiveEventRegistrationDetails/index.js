// Write your code here
import './index.css'

const activeStatus = {
  initial: 'INITIAL',
  registered: 'REGISTERED',
  yettoberegistered: 'YET_TO_REGISTER',
  registrationclosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEvent = props => {
  const {activeEventStatus} = props

  const registeredPage = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-icon"
      />
      <h1 className="registered">You have already registered for the event</h1>
    </>
  )

  const toBeRegistered = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register"
      />
      <p className="about-to-register">
        A live performance brings so much to your relationship with dance.
        seeing dance may often fall totally in love with this beautiful art
        form.
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </>
  )

  const registrationClosed = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="registrationclose-icon"
        alt="registrations closed"
      />
      <h1 className="registration-close">Registrations are Closed Now!</h1>
      <p className="para">Stay tuned. We will reopen the registrations soon</p>
    </>
  )

  const initialView = () => (
    <p className="para">Click on an event, to view its registration details</p>
  )

  switch (activeEventStatus) {
    case activeStatus.registered:
      return registeredPage()
    case activeStatus.yettoberegistered:
      return toBeRegistered()
    case activeStatus.registrationclosed:
      return registrationClosed()
    case activeStatus.initial:
      return initialView()
    default:
      return null
  }
}

export default ActiveEvent
