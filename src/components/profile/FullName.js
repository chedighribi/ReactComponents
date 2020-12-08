import React from 'react';
import '../../style.css';

const user = {
    FirstName: 'Chady',
    LastName: 'Ghribi'
};

const FullName =()=>{
return (
    <div className='name'>
        <h1>{user.FirstName}</h1>
        <h1>{user.LastName}</h1>
    </div>
)

}

export default FullName;