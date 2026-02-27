import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Outlet } from 'react-router';

const DashboardMain = () => {
    return (
        <div>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default DashboardMain;