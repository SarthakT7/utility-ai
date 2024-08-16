import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from "../common/Card";

const GenerateJsonCard = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/generate-json")
    }
    return (
        <div onClick={handleClick}>
            <Card
                imagePath={"generate-json.jpeg"}
                imageHeight={"256"}
                cardTitle={"The JSON Standardizer"}
                cardDescription={"JSON Standardizer is a tool designed to transform  non-standard JSON-like data into clean, valid JSON. This utility processes input that may resemble JSON but lacks proper formatting , and outputs well-structured JSON"}
            >
            </Card>

        </div>
    )
}

export default GenerateJsonCard;