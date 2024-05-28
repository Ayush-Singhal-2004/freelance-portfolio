import logo from '../assets/images/ca-logo.png'
import '../App.scss'
import { useState } from 'react'

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
                <a href="about">About us</a>
                <a href="contact">Contact us</a>
            </div>
            
        </nav>
    )
}

export default NavigationBar