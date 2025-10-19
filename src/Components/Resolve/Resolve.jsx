import React from 'react';

const Resolve = ({solve}) => {
    return (
        <div className='bg-white rounded-[5px] p-3 flex flex-col gap-4 mt-4'>
            <h1 className='font-medium text-[18px] text-[#001931] '>{solve.title}</h1>
        </div>
    );
};

export default Resolve;