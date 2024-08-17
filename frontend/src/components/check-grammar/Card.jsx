import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from "../common/Card";

const GenerateJsonCard = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/grammar-enhancer")
    }
    return (
        <div onClick={handleClick}>
            <Card
                imagePath={"check-grammar.jpeg"}
                imageHeight={"256"}
                cardTitle={"Grammar Enhancer"}
                cardDescription={"Refine your writing with the Grammar and Style Enhancer. It detects grammar errors and suggests improvements, making your content clear and polished. Ideal for blog posts, reports, and social media content."}
            >
            </Card>

        </div>
    )
}

export default GenerateJsonCard;