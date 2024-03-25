import React from 'react';

import '../styles/switch.scss';

interface SwitchProperties {
    id: string;
    label: string;
    isChecked: boolean;
    description?: string;
    "data-on"?: string;
    "data-off"?: string;
    onChange: (isChecked: boolean) => void; 
}

const ToggleSwitch: React.FC<SwitchProperties> = props => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(event.target.checked);
    };

    const labelId = `label-${props.id}`;
    const descriptionId = `description-${props.id}`;

    const labelBy = labelId + ' ' + descriptionId;
    
    return (
        <label htmlFor={props.id} className="switch">
            <input
                id={props.id}
                type="checkbox"
                role="switch"
                data-on={props['data-on']}
                checked={props.isChecked}
                data-off={props['data-off']}
                onChange={onChange}
                aria-checked={props.isChecked}
                aria-labelledby={labelBy}
            />
            <div className="switch-labels">
                <span id={labelId}>{props.label}</span>
                {props.description &&
                    <p id={descriptionId}>{props.description}</p>
                }
            </div>
        </label>
    );
}

ToggleSwitch.defaultProps = {
    "data-on": 'ON',
    "data-off": 'OFF'
}

export default ToggleSwitch;