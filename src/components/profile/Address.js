import React from 'react';
const home = {
    Street: 'Rue Taher Ben Achour',
    Number: '13'
};

const Adress =()=>{
return (
    <div>
        <h2>{home.Street}</h2>
        <h2>{home.Number}</h2>
    </div>
)

}

export default Adress;