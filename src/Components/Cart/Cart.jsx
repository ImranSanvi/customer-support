import React from 'react';
import TaskStatus from '../TaskStatus/TaskStatus';
import Resolve from '../Resolve/Resolve';

const Cart = ({selectedTickets, setSelectedTickets, resolveTickets, setResolveTickets, countProgress, setCountProgress, countResolve, setCountResolve}) => {
    return (
        <div className='md:px-0 w-full md:w-[25%]'>
            <h1 className='font-semibold text-[24px] text-[#34485A] '>Task Status</h1>
            {
                selectedTickets.map(cartTicket => (<TaskStatus key={cartTicket.id} cartTicket={cartTicket} selectedTickets={selectedTickets} setSelectedTickets={setSelectedTickets} countProgress={countProgress} setCountProgress={setCountProgress} resolveTickets={resolveTickets} setResolveTickets={setResolveTickets} countResolve={countResolve} setCountResolve={setCountResolve}></TaskStatus>))
            }
            <h1 className='font-semibold text-[24px] text-[#34485A] mt-5 '>Resolved Task</h1>
            {
                resolveTickets.map(solve => (<Resolve key={solve.id} solve={solve}></Resolve>))
            }
        </div>
    );
};

export default Cart;