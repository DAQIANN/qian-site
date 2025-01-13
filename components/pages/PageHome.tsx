import React from 'react';

import './Home.css';

import { IconTray } from '../shared/IconTray';
import { IconTrayTwo } from '../shared/IconTray2';

export default function PageHome(): React.ReactElement {
  return (
    <div className="home-root">
      {/* <img alt="boy-and-cat" className="boy-and-cat-drawing" src={Drawing} /> */}
      <p className="home-title">hello, i am daniel</p>
      <br />
      <IconTray iconSize="sm" darkMode={false} />
    </div>
  );
}