import { Route, Routes, Link, Navigate, useLocation } from "react-router-dom";
import { Soda, Chips, Sardines, Candy, Cookies, Food } from "./RoutesList";
import './VendingMachine.css'

function VendingMachine() {
    const location = useLocation();

    return (
        <div className="VendingMachine">
            <nav>
                {location.pathname !== '/' && <Link to='/'>Home</Link>}
                {location.pathname !== '/soda' && <Link to='/soda'>Soda</Link>}
                {location.pathname !== '/chips' && <Link to='/chips'>Chips</Link>}
                {location.pathname !== '/sardines' && <Link to='/sardines'>Sardines</Link>}
                {location.pathname !== '/candy' && <Link to='/candy'>Candy</Link>}
                {location.pathname !== '/cookies' && <Link to='/cookies'>Cookies</Link>}
            </nav>
            {location.pathname === '/' &&
                <h1>Choose a snack</h1>}
            <Routes>
                <Route path='/:name' element={<Food />} />
            </Routes>
        </div>
    );
}

export default VendingMachine;