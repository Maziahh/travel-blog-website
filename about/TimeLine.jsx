//TimeLine.jsx
"use client";
import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import FlightRoundedIcon from '@mui/icons-material/FlightRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import LuggageRoundedIcon from '@mui/icons-material/LuggageRounded';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

//css included are inline to override the css set from the library used
function TimeLine() {
    const [selectedItem, setSelectedItem] = React.useState({}); //used to keep track and update the timeline item 

    const handleChange = (event, index) => {
        setSelectedItem({ ...selectedItem, [index]: event.target.value }); //based on user input, it updates the value of selecteditem 
    };  


    // different cases made for the timeline 
    const renderContent = (item, index) => {
        switch (item) {
            case 'brazil':
                return (
                    <Box>
                        <p style={{ textAlign: 'center' }}><strong>Zoe went to Brazil on 7 February 2014! </strong></p>
                        <a href="/brazil">
                            <img src={'braziltimeline.jpg'} alt="Brazil" style={{ width: '100%' }} />
                        </a>
                        <Typography variant="body1" style={{ textAlign: 'center' }}>
                            Zoe visited the largest country in South America, known for its diverse culture, stunning natural landscapes, and vibrant festivals like Carnival. With its rich biodiversity, bustling cities, and thriving economy, Brazil offers a unique blend of attractions and experiences for visitors like her, making it an unforgettable experience.
                            <h2 style={{ fontSize: '24px', margin: '20px 0', fontWeight: 'bold', color: 'purple' }}> Want to know more about her trip? Click on the image to find out more!</h2>
                        </Typography>
                    </Box>
                );

            case 'indonesia':
                return (
                    <>
                        <Box>
                            <p style={{ textAlign: 'center' }}><strong>Maziah went to Indonesia in 26 July 2020! </strong></p>
                            <a href="/indonesia">
                                <img src={'indotimeline.jpg'} alt="Indonesia" style={{ width: '100s%' }} />
                            </a>
                            <Typography variant="body1" style={{ textAlign: 'center' }}>
                                Maziah visited an enchanting island known for its stunning landscapes, rich culture, and warm hospitality, Bali. With its lush rice terraces, pristine beaches, and vibrant coral reefs, Bali offers a perfect blend of natural beauty and cultural experiences, making it a popular destination for travelers from around the world.
                                <h2 style={{ fontSize: '24px', margin: '20px 0', fontWeight: 'bold', color: 'lightblue' }}> Want to know more about her trip? Click on the image to find out more!</h2>
                            </Typography>

                        </Box>
                    </>
                );

            case 'us':
                return (
                    <>
                        <Box>
                            <p style={{ textAlign: 'center' }}><strong>Yuet Lin went to the United States on 14 April 2022! </strong></p>
                            <a href="/usa">
                                <img src={'ustimeline.jpg'} alt="United States" style={{ width: '100%' }} />
                            </a>
                            <Typography variant="body1" style={{ textAlign: 'center' }}>
                                The USA is a diverse country with 50 states, each offering unique attractions. From iconic cities like New York and Los Angeles to natural wonders like the Grand Canyon, the USA is known for its cultural diversity, iconic landmarks, and vibrant cities, marveling at the captivating and majestic beauty, making it a moment she can never forget.
                                <h2 style={{ fontSize: '24px', margin: '20px 0', fontWeight: 'bold', color: 'goldenrod' }}> Want to know more about her trip? Click on the image to find out more!</h2>
                            </Typography>

                        </Box>
                    </>
                );

            case 'shenzhen':
                return (
                    <>
                        <Box>
                            <p style={{ textAlign: 'center' }}><strong>Valery went to China, Shenzhen on 11 September 2023 for her Overseas Immersion Programme trip!  </strong></p>
                            <a href="/china">
                                <img src={'sztimeline.jpg'} alt="Shenzhen" style={{ width: '100%' }} />
                            </a>
                            <Typography variant="body1" style={{ textAlign: 'center' }}>
                                She gained many valuable and informative knowledge during her time there. Her fondest memories were creating friendships and memories with new people she met on the same trip as her.
                                {/* <div style={{ backgroundColor: 'lightpink', padding: '5px' }}> */}
                                <h2 style={{ fontSize: '24px', margin: '20px 0', fontWeight: 'bold', color: 'lightpink' }}> Want to know more about her trip? Click on the image to find out more!</h2>
                                {/* </div>  */}
                            </Typography>
                        </Box>
                    </>
                );

            default:
                return null;
        }
    };


    return (
        // title 
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <h1 style={{ fontSize: '50px', marginBottom: '10px' }}><strong>TimeLine on our travels</strong></h1>
            <div>
                {/* timeline item for Brazil  */}
                <Timeline position="alternate">
                    <TimelineItem>
                        {/* sets the date to be in the middle of the icon, on the right, smaller font and a faded color instead  */}
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            7 February 2014
                        </TimelineOppositeContent>

                        {/* hover function on the icon  */}
                        <TimelineSeparator>
                            <TimelineConnector />
                            <Tooltip title="Amazonas, São Paulo."> 
                                <TimelineDot>
                                    <TravelExploreRoundedIcon />
                                </TimelineDot>
                            </Tooltip>
                            <TimelineConnector />
                        </TimelineSeparator>
                        
                        {/* sets top and bottom paddint to 12 and right and left padding to 2  */}
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Brazil 🦜
                            </Typography>

                            {/* dropdown menu  */}
                            <FormControl>
                                <Select
                                    value={selectedItem[0]} //set selecteditem to 0 
                                    onChange={(event) => handleChange(event, 0)} //event changes according to the user's option 
                                >
                                    <MenuItem value="">Select</MenuItem>
                                    <MenuItem value={'brazil'}>More Details</MenuItem>
                                </Select>
                            </FormControl>
                            {selectedItem[0] === 'brazil' && (
                                <Box mt={2}>
                                    {renderContent('brazil', 0)} 
                                    {/* renders content when condition is true, else do nothing */}
                                </Box>
                            )}
                        </TimelineContent>
                    </TimelineItem>

                    {/* timeline item for Indonesia  */}
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            26 July 2020
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <Tooltip title="Bali.">
                                <TimelineDot color="primary">
                                    <FlightRoundedIcon />
                                </TimelineDot>
                            </Tooltip>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Indonesia 🍛
                            </Typography>
                            <FormControl>
                                <Select
                                    value={selectedItem[1]}
                                    onChange={(event) => handleChange(event, 1)}
                                >
                                    <MenuItem value="">Select</MenuItem>
                                    <MenuItem value={'indonesia'}>More Details</MenuItem>
                                </Select>
                            </FormControl>
                            {selectedItem[1] === 'indonesia' && (
                                <Box mt={2}>
                                    {renderContent('indonesia', 1)}
                                </Box>
                            )}
                        </TimelineContent>
                    </TimelineItem>

                    {/* timeline item for US */}
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            14 April 2022
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <Tooltip title="San Diego, Arizona, California.">
                                <TimelineDot color="primary" variant="outlined"> 
                                {/* set the dot to not fill color, but outlined in primary colour */}
                                
                                    <ExploreRoundedIcon />
                                </TimelineDot>
                            </Tooltip>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                United States
                            </Typography>
                            <FormControl>
                                <Select
                                    value={selectedItem[2]}
                                    onChange={(event) => handleChange(event, 2)}
                                >
                                    <MenuItem value="">Select</MenuItem>
                                    <MenuItem value={'us'}>More Details</MenuItem>
                                </Select>
                            </FormControl>
                            {selectedItem[2] === 'us' && (
                                <Box mt={2}>
                                    {renderContent('us', 2)}
                                </Box>
                            )}
                        </TimelineContent>
                    </TimelineItem>

                    {/* timeline item for China  */}
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            11 September 2023
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            <Tooltip title="Shenzhen.">
                                <TimelineDot color="secondary">
                                    <LuggageRoundedIcon />
                                </TimelineDot>
                            </Tooltip>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                China 🏙️
                            </Typography>
                            <FormControl>
                                <Select
                                    value={selectedItem[3]}
                                    onChange={(event) => handleChange(event, 3)}
                                >
                                    <MenuItem value="">Select</MenuItem>
                                    <MenuItem value={'shenzhen'}>More Details</MenuItem>
                                </Select>
                            </FormControl>
                            {selectedItem[3] === 'shenzhen' && (
                                <Box mt={2}>
                                    {renderContent('shenzhen', 3)}
                                </Box>
                            )}
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                    </TimelineItem>
                </Timeline>
            </div>
        </div >
    );
};

export default TimeLine;
