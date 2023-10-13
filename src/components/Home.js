import React from 'react';
import "../styles/Home.css";
import App from "../App";
import ItemList from './Item/ItemList';
import {GlobalProvider} from "./GlobalContext";

function Home (){
    return (
            <ItemList/>
    );
};

export default Home;
