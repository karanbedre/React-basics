import React from 'react';
import './cards.styles.css';

export const Cards = props => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.userList.id}?set=set2?size=180*180`} alt=""/>
        <h2 className='user-name'>
            {props.userList.name}
        </h2>
        <p>{props.userList.email}</p>
    </div>
);