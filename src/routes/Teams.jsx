import NavigationBar from "../components/NavigationBar"
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

function Teams() {
    const [teams, setteams] = useState([]);

    useEffect(() => {
        fetch("/data/teams.json")
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setteams(response.data);
        });
    }, []);

    return (
        <div className="teams">
            <NavigationBar selected={"team"} />
            <h1 style={{textAlign:"center"}} className="teams-heading">Teams :</h1>
            <div className="m-teams">
                {
                    teams.map((val, key) => (
                    <div 
                    style={{borderBottom:"2px solid #9e9e9e"}} 
                    key={key}
                    className="team-item"
                    >
                        <h3>{val.name}</h3>
                        <p>{val.qualification}</p>
                        <p>{val.summary}</p>
                    </div>
                    ))
                }
            </div>

            <Footer/>
        </div>
    )
}

export default Teams