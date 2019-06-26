import React from 'react';
import {Nav} from "./Nav";

// Do not export like that. Its name will be Unknown inside React Dev Tools.
export default ({theme}) => (
  <header>
    Unreadable Header Component ({theme})
    <Nav/>
  </header>
);

export const Header = ({theme}) => (
  <header>
    Readable Header Component ({theme})
    <Nav/>
  </header>
);
