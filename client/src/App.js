import React, { Component } from 'react';
import Todo from './component/Todo';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer/Footer';
//Import browser router
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import MainContainer from './component/MainContainer';
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainContainer />
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
