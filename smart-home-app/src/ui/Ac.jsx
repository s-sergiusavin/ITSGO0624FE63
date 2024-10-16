import './Ac.scss';
import PropTypes from 'prop-types';

const Ac = ({acOn}) => {
    return <div className={`ac${acOn ? ' blue' : ''}`}></div>
}

Ac.propTypes = {
    acOn: PropTypes.bool.isRequired
}

export default Ac;