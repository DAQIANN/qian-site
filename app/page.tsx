import React from 'react';

import '../styles/App.module.css';
// import '../styles/Main.module.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt, faHome } from '@fortawesome/free-solid-svg-icons';

import About from "../components/pages/about";
import Navbar from "../components/shared/Navbar";
import PageHome from "../components/pages/PageHome";

library.add(fab, faEnvelope, faFileAlt, faHome);

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <PageHome />
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  );
}
