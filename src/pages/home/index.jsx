import React from "react";
import {Wrapper} from "./styles";
import Navbar from "../../layout/navbar";
import Header from "../../components/home/header";
const Home = () => {
    return(
        <Wrapper>
            <Navbar/>
            <Header/>
        </Wrapper>
    )
}
export default Home