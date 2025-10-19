import React from 'react';

const TaskStatus = ({cartTicket}) => {
    return (
        <div className='bg-white rounded-[5px] p-3 flex flex-col gap-4 mt-4'>
            <h1 className='font-medium text-[18px] text-[#001931] '>{cartTicket.title}</h1>
            <button className='font-semibold text-[16px] text-white bg-[#02A53B] p-3 rounded-[5px] '>Complete</button>
        </div>
    );
};

export default TaskStatus;