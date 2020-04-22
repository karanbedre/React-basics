import React from 'react';

import './custom-button.styles.scss';

const CustomButtom = ({ children, ...otherProps }) => (
    <div>
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    </div>
)

export default CustomButtom;