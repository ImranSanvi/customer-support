import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black w-full px-[40px] md:px-[80px] py-[20px] md:py-[40px] flex flex-col md:flex-row gap-25'>
            <div className='w-[25%]'>
                <h1 className='font-bold text-[24px] text-white'>CS — Ticket System</h1>
                <p className='font-normal text-[16px] text-[#A1A1AA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className='space-y-2 md:space-y-4'>
                <h1 className='font-medium text-[20px] text-[#FFFFFF]'>Company</h1>
                <p className='font-normal text-[16px] text-[#A1A1AA]'>About Us</p>
                <p className='font-normal text-[16px] text-[#A1A1AA]'>Our Mission</p>
                <p className='font-normal text-[16px] text-[#A1A1AA]'>Contact Saled</p>
            </div>

            <div className='space-y-2 md:space-y-4'>
                <h1 className='font-medium text-[20px] text-[#FFFFFF]'>Services</h1>
                <p className='font-normal text-[16px] text-[#A1A1AA]'>Products & Services</p>
                <p className='font-normal text-[16px] text-[#A1A1AA]'>Customer Stories</p>
                <p className='font-normal text-[16px] text-[#A1A1AA]'>Download Apps</p>
            </div>

            <div className='space-y-2 md:space-y-4'>
                <h1 className='font-medium text-[20px] text-[#FFFFFF]'>Information</h1>
                <p className='font-normal text-[16px] text-[#A1A1AA]'>Privacy Policy</p>
                <p className='font-normal text-[16px] text-[#A1A1AA]'>Terms & Conditions</p>
                <p className='font-normal text-[16px] text-[#A1A1AA]'>Join Us</p>
            </div>

            <div className='space-y-2 md:space-y-4'>
                <h1 className='font-medium text-[20px] text-[#FFFFFF] flex items-center gap-3'>Social Links</h1>
                <p className='font-normal text-[16px] text-[#A1A1AA]'><i class="fa-brands fa-x-twitter flex items-center gap-3"></i>@CS — Ticket System</p>
                <p className='font-normal text-[16px] text-[#A1A1AA]'><i class="fa-brands fa-linkedin-in flex items-center gap-3"></i>@CS — Ticket System</p>
                <p className='font-normal text-[16px] text-[#A1A1AA]'><i class="fa-brands fa-facebook"></i>@CS — Ticket System</p>
                <p className='font-normal text-[16px] text-[#A1A1AA] flex items-center gap-3'><i class="fa-solid fa-envelope"></i>support@cst.com</p>
            </div>
        </div>
    );
};

export default Footer;