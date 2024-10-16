import './Air.scss';
import PropTypes from 'prop-types';

const Air = ({airOn}) => {
    return <div className={`air${airOn ? ' blue' : ''}`}></div>
}

Air.propTypes = {
    airOn: PropTypes.bool.isRequired
}

export default Air;