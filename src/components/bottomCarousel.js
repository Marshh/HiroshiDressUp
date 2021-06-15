
import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(() => ({
    card: {
        borderRadius: 5,
        height: 360,
        width: 750, 

        justifyContent: 'center',
    },
    media: {
        height: '100%',
        width: '100%',
    },
}));

export default function BottomCarousel(props){
    const classes = useStyles();

    const {images} = props;
    const [index, setIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);
    const [slideDirection, setSlideDirection] = useState('down');

    const handleLeftArrow = () =>{
        setSlideDirection('right');
        setSlideIn(false);

        setTimeout(() => {
            setIndex( index-1 >= 0 ? index-1 : images.length -1 );
            setSlideDirection('left');
            setSlideIn(true);
        }, 500);
    };

    const handleRightArrow = () => {
        setSlideDirection('left');
        setSlideIn(false);

        setTimeout(() => {
            setIndex( index+1 < images.length ? index+1 : 0);
            setSlideDirection('right');
            setSlideIn(true);
        }, 200); 
    };

    return (
        <Box display='flex'>
            <Button onClick={handleLeftArrow}>
                <ArrowBackIosIcon/>
            </Button>
                <Card className={classes.card}>
                    <Slide in={slideIn} direction={slideDirection}>
                        <CardMedia
                            className={classes.media}
                            image={images[index]}
                        />
                    </Slide>
                </Card>
            <Button onClick={handleRightArrow}>
                <ArrowForwardIosIcon/>
            </Button>
        </Box>
    );
}
