import logo from '../assets/images/ca-logo.png'
import '../App.scss'
import { useState } from 'react'

function ServicesOptions() {
    return (
        <div className='services-options'>
            <a href="#">Income Tax</a>
            <a href="#">GST</a>
            <a href="#">Corporate Services</a>
            <a href="#">Audit</a>
            <a href="#">Coporate Finance</a>
            <a href="#">Services for Non-Residents</a>
            <a href="#">Accounting Services</a>
            <a href="#">Payroll</a>
            <a href="#">Benefits of Outsourcing</a>
            <a href="#">TDS</a>
            <a href="#">Coporate Governance</a>
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