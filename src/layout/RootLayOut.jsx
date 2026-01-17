import React from 'react';
import Navber from './Navber';
import { Outlet } from 'react-router';
import Footer from './Footer';

const RootLayOut = () => {
    return (
        <div className="flex flex-col min-h-screen">
                <Navber></Navber>
            <div className='flex-grow'>
                <Outlet></Outlet>
            </div>
                <Footer></Footer>
        

        </div>
    );
};

export default RootLayOut;