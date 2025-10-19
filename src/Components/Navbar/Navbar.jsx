
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-[78px] p-[80px]'>
            <h1 className='font-bold text-[24px]'>CS — Ticket System</h1>
            <div className='flex justify-between items-center gap-5'>
                <a className='font-normal text-[16px]' href="">Home</a>
                <a className='font-normal text-[16px]' href="">FAQ</a>
                <a className='font-normal text-[16px]' href="">Changelog</a>
                <a className='font-normal text-[16px]' href="">Blog</a>
                <a className='font-normal text-[16px]' href="">Download</a>
                <a className='font-normal text-[16px]' href="">Contact</a>
                <div className='flex justify-between items-center gap-2 bg-[#422AD5] p-2 text-white rounded-[5px] '>
                    <h1 className='font-semibold text-[16px]'>+</h1>
                    <button className='font-semibold text-[16px]'> New Ticket</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;