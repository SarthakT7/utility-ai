import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';

const MyCard = ({ cardHeight, imageHeight, imagePath, cardTitle, cardDescription }) => {
    return (
        <div>
            <Card sx={{ maxWidth: cardHeight ?? 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height={imageHeight ?? "140"}
                        image={imagePath}
                        alt="image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {cardTitle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {cardDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button size="small" color="primary">
                        Explore
                    </Button>
                </CardActions>
            </Card>

        </div>
    )
}

MyCard.propTypes = {
    cardHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
    cardTitle: PropTypes.string,
    cardDescription: PropTypes.string,
};



export default MyCard
