import React from 'react';
import Navber from './Navber';
import { Outlet } from 'react-router';
import Footer from './Footer';

const RootLayOut = () => {
    return (
        <div>
            <div>
                <Navber></Navber>
            </div>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default RootLayOut;