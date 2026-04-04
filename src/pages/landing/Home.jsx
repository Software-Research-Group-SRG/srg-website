import React from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="items-center justify-center"> 
            <h1 className="text-4xl font-bold text-blue-600">SRG Website</h1>
            <li>
                <h1 className=" text-blue-600 font-['Rajdhani']">
            Rajdhani - SRG Website
            </h1>

            <h1 className=" text-blue-600 font-['Orbitron']">
            Orbitron - SRG Website
            </h1>

             <h1 className=" text-blue-600 font-['Michroma']">
            Michroma - SRG Website
            </h1>

             <h1 className=" text-blue-600 font-['Chakra Petch']">
            Chakra Petch - SRG Website
            </h1>

            <h1 className=" text-green-600 font-['Playfair Display'] ">
            Playfair Display - SRG WEBSITE
            </h1>

            <h1 className=" text-green-600 font-['Oxanium'] ">
            Oxanium - SRG WEBSITE
            </h1>

            </li>

            <br></br>

            <li className="uppercase">
                <h1 className=" text-blue-600 font-['Rajdhani']">
                Rajdhani - SRG Website
                </h1>

                <h1 className=" text-blue-600 font-['Orbitron']">
                Orbitron - SRG Website
                </h1>

                <h1 className=" text-blue-600 font-['Michroma']">
                Michroma - SRG Website
                </h1>

                <h1 className=" text-blue-600 font-['Chakra Petch']">
                Chakra Petch - SRG Website
                </h1>

                <h1 className=" text-green-600 font-['Playfair Display'] ">
                Playfair Display - SRG WEBSITE
                </h1>

                <h1 className=" text-green-600 font-['Oxanium'] ">
                Oxanium - SRG WEBSITE
                </h1>

                <button onClick={() => {
                    navigate(`/BaseProfileDetails`);
                    }}
                >
                    profile details
                </button>

            </li>

        </div>
       
    );
}

export default Home;