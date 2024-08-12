import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from "../common/Card";

const EmailCard = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/email")
    }
    return (
        <div onClick={handleClick}>
            <Card
                imagePath={"public/proofread.jpeg"}
                imageHeight={"256"}
                cardTitle={"The Email Polisher"}
                cardDescription={"Elevate your emails with Email Polisher. Proofread and transform your messages into clear, professional, and formal communications, making every email you send polished and impressive."}
            >
            </Card>

        </div>
    )
}

export default EmailCard
