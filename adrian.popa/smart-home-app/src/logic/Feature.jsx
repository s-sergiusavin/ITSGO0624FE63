import PropTypes from "prop-types";
import './Feature.scss'

const Feature = ({ name, action, toggleAction }) => {

    const featureButtonHandler = () => {
        toggleAction(name);
    };

    return <div className='feature'>
        <h3>{name}</h3>
        <button onClick={featureButtonHandler}>{action}</button>
    </div>
}

Feature.propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    toggleAction: PropTypes.func.isRequired
}

export default Feature;