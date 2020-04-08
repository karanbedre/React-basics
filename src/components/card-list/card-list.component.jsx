import React from 'react';
import './card-list.styles.css';
import { Cards } from '../cards/cards.component';


export const CardList = (props) => {
    return <div className='card-list'>
        {
            props.users.map(userList => (
                <Cards key={userList.id} userList={userList} />
            ))
        }
    </div>

}