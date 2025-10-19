import React from 'react';
import TaskStatus from '../TaskStatus/TaskStatus';

const Cart = ({selectedTickets, setSelectedTickets}) => {
    return (
        <div className='md:px-0 w-full md:w-[25%]'>
            <h1 className='font-semibold text-[24px] text-[#34485A] '>Task Status</h1>
            {
                selectedTickets.map(cartTicket => (<TaskStatus key={cartTicket.id} cartTicket={cartTicket}></TaskStatus>))
            }
            <h1 className='font-semibold text-[24px] text-[#34485A] mt-5 '>Resolved Task</h1>
        </div>
    );
};

export default Cart;