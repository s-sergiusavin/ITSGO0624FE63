import PropTypes from 'prop-types';
import './Room.scss'

const Room = ({status}) => {
    return <div className='room' style={{opacity: status}}></div>
}

Room.propTypes = {
    status: PropTypes.number.isRequired
}
export default Room;