import React from 'react';
import Title from '../components/Title';
import FilmBox from '../components/FilmBox';
import Footer from '../containers/Footer';

const UpcomingReleaseBox = () => {

    return(
        <>
        <Title title="Upcoming Film Releases For UK"/>
        <hr width="75%"></hr>
        <FilmBox></FilmBox>


        <Footer></Footer>

        </>



    )
}


export default UpcomingReleaseBox;