import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Row rowID='1' title='Up Coming' searchTerm='Upcoming' />
            <Row rowID='2' title='Popular' searchTerm='Popular' />
            <Row rowID='3' title='Trending' searchTerm='Trending' />
            <Row rowID='4' title='Top Rated' searchTerm='Top Rated' />
            <Row rowID='5' title='Action' searchTerm='Action' />
            <Row rowID='6' title='Comedy' searchTerm='Comedy' />
            <Row rowID='7' title='Horror' searchTerm='Horror' />
        </>
    )
}

export default Home
