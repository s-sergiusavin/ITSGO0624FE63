import Birthdate from './Birthdate';
import './DemoComponent.scss'
import PropTypes from 'prop-types';

function DemoComponent({ name, birthday }) {
    const logInDemoComponent = () => {
        console.log('Log in demo component!');
    }

    return <div className="demo-component">
        <h2>{name}</h2>
        <Birthdate birthdate={birthday} loggerHandler={logInDemoComponent}/>
    </div>;
}

DemoComponent.propTypes = {
    name: PropTypes.string,
    birthday: PropTypes.instanceOf(Date)
}

export default DemoComponent;