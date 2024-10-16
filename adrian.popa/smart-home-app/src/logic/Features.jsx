import PropTypes from "prop-types";
import Feature from "./Feature";

const Features = ({toggleAction}) => {
    const FEATURES = [
        {
            name: 'Toggle Lights',
            action: 'Turn the lights on',
            state: true,
            id: 0
        },
        {
            name: 'Toggle AC',
            action: 'Turn the AC on',
            state: false,
            id: 1
        },
        {
            name: 'Clean',
            action: 'Start vacuuming',
            state: true,
            id: 2
        },
        {
            name: 'Coffee time!',
            action: 'Make a coffee',
            state: true,
            id: 3
        }
    ];

    const toggleTheAction = (value) => {
        toggleAction(value);
    }

    return (
        <div className='container'>
            {
                FEATURES.map((feature) => {
                    return (
                        <Feature name={feature.name} action={feature.action} state={feature.state} key={feature.id} toggleAction={toggleTheAction}/>
                    )
                })
            }
        </div>
    );
}

Features.propTypes = {
    toggleAction: PropTypes.func.isRequired
}

export default Features;