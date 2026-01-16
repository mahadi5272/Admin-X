import React from 'react';
import { Link } from 'react-router';

const Navber = () => {
    const beforLogin =<>
    <li><Link to={"/home"}>Home</Link></li>
    <li><Link to={"/about"}>About</Link></li>
    <li><Link to={"/contact"}>Contact</Link></li>
    <li><Link to={"/signUp"}>Resistion</Link></li>
    </>
    return (
        <div className='flex justify-between'>
            <div>logo</div>
            <div>
                <ul className='flex gap-5'>
                    {beforLogin}
                </ul>
            </div>
            <div>
                <Link to={'/login'}>Login</Link>
            </div>
        </div>
    );
};

export default Navber;