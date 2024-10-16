import './AC.scss';
import PropTypes from 'prop-types';

const AC = ({acON}) => {
    return <div className={`ac${acON ? ' blue' : ''}`}></div>
}

AC.propTypes = {
    acON: PropTypes.bool.isRequired
}

export default AC;