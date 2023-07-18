// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails

  const onEventTrigger = () => {
    onClickEvent(registrationStatus)
  }

  return (
    <li className="event-item-container">
      <button type="button" onClick={onEventTrigger}>
        <img src={imageUrl} className="event-image" alt="event" />
      </button>

      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
