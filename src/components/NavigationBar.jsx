import logo from '../assets/images/ca-logo.png'
import '../App.scss'
import { useState } from 'react'
import ListIcon from './ListIcon'
import Dropdown from 'react-bootstrap/Dropdown';

function ServicesOptions() {
    return (
        <div className='services-options'>
            <p>Income Tax</p>
            <p>GST</p>
            <p>Corporate Services</p>
            <p>Audit</p>
            <p>Coporate Finance</p>
            <p>Services for Non-Residents</p>
            <p>Accounting Services</p>
            <p>Payroll</p>
            <p>Benefits of Outsourcing</p>
            <p>TDS</p>
            <p>Coporate Governance</p>
        </div>
    )
}

function NavigationBar({selected}) {

    const [isServices, setIsServices] = useState(false);

    return (
        <nav>
            <img src={logo} alt="" />
            <div className='nav-dropdown'>
                <Dropdown>
                    <Dropdown.Toggle 
                    variant="Secondary" 
                    id="dropdown-basic" 
                    style={{display:"flex", alignItems:"center", justifyContent:"center"}}
                    >
                        <ListIcon />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/">Home</Dropdown.Item>
                        <Dropdown.Item href="#">Services</Dropdown.Item>
                        <Dropdown.Item href="/team">Team</Dropdown.Item>
                        <Dropdown.Item href="/blogs">Blogs</Dropdown.Item>
                        <Dropdown.Item href="/about">About us</Dropdown.Item>
                        <Dropdown.Item href="/contact">Contact us</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
            <div className='nav-links'>
                <a href="/">Home</a>
                <a href="#" onClick={() => setIsServices(!isServices)}>
                    Services
                    {
                        isServices ? <ServicesOptions /> : <></>
                    }
                </a>
                <a href="/team">Team</a>
                <a href="/blogs">Blogs</a>
                <a href="/about">About us</a>
                <a href="/contact">Contact us</a>
            </div>
        </nav>
    )
}

export default NavigationBar