import NavigationBar from "../components/NavigationBar";
import { useState, useEffect } from "react";
import "../App.scss";

function ContactUs() {
  const [branches, setbranches] = useState([]);

  useEffect(() => {
    fetch("../../public/data/branches.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setbranches(response.data);
      });
  }, []);
  return (
    <>
      <div className="sec1">
        <div>
          <NavigationBar selected={"contact"} />
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
        <form action="" method="post">
                    <input type="text" name="name" placeholder="Enter your name" required="" />
                    <input type="email" name="email" placeholder="Enter email address" required="" />
                    <input type="text" name="subject" placeholder="Enter your subject" required=""/>
                    <textarea rows="8" name="message" placeholder="Message" required=""></textarea>
                    <button type="submit" >Send Message</button>
                </form>
                
        </div>
      </div>
    </>
  );
}

export default ContactUs;
