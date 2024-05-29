import NavigationBar from "../components/NavigationBar"
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

import Loader from "react-js-loader";

function ContactUs() {
    const [branches, setbranches] = useState([]);
    const [emailErr, setEmailErr] = useState(false);

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[subject, setSubject] = useState("");
    const[message, setMessage] = useState("");

    const[loader, setLoader] = useState(false);

    useEffect(() => {
        fetch("/data/branches.json")
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setbranches(response.data);
        });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(name, email, subject, message);
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(
            emailRegex.test(email) && 
            name.length > 0 && 
            subject.length > 0 && 
            message.length > 0
        ) {
            setLoader(true);
            fetch("http://localhost:8001/user/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    from: email,
                    subject: subject,
                    message: message
                })
            })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setLoader(false);
                if(response.status == 500) {
                    alert("Some error occured!!");
                }
            })
            .catch((err) => {
                console.log(err);
            })
        }
        else {
            setEmailErr(true);
            setTimeout(() => {
                alert("Invalid email address");
            }, 200)
        }
    }

    return (
      <>
        <NavigationBar selected={"contact"} />
        <div className="sec1">
            <div>
                <h1 id="branch">Branches</h1>
                <div className="m-branch">
                    {branches.map((val, key) => (
                    <div key={key}>
                        <h3>{val.name}</h3>
                        <p>{val.address}</p>
                    </div>
                    ))}
                </div>
            </div>

            <div className="map">
                <iframe
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=CA%20Anil%20Sharma%20Classes%20-%20Best%20CA%20Coaching%20Institute%20in%20Jaipur%20%7C%20CA%20Foundation%20%7C%20CA%20Intermediate%20%7C%20Near%20Me%20Best%20CA%20Coaching%20B,%20103,%20Saraswati%20Marg,%20opposite%20Gandhinagar%20Jaipur%20Railway%20Station,%20Anita%20Colony,%20Bajaj%20Nagar,%20Jaipur,%20Rajasthan%20302015+(CA%20coaching%20classes)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    height={300}
                    width={800}
                ></iframe>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit} onChange={() => setEmailErr(false)}>
                    <input type="text" name="name" 
                    placeholder="Enter your name" required="" 
                    value={name} onChange={(e) => setName(e.target.value)}
                    />

                    <input type="email" name="email" 
                    placeholder="Enter email address" required="" 
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    style={emailErr?{border:"2px solid tomato"}:{}}
                    />

                    <input type="text" name="subject" 
                    placeholder="Enter your subject" required=""
                    value={subject} onChange={(e) => setSubject(e.target.value)}
                    />

                    <textarea rows="8" name="message" 
                    placeholder="Message" required="" 
                    value={message} onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    {
                        loader ? 
                        <Loader type="spinner-default" 
                            bgColor={"#175888"} color={"black"} size={50} />
                        : <button>Send message</button>
                    }
                    
                </form>
                    
            </div>
        </div>
        <Footer />
        </>
    );
}

export default ContactUs