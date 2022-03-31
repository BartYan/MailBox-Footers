import React from 'react';

function Input({className, type, name, value, placeholder, handleChange, id, label }) {
    return (
        <div className='form-inputs'>
            <label className='form-label'>{label}</label>
            <input
                className={className}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                id={id}
            />
        </div>
    );
}

export default Input;