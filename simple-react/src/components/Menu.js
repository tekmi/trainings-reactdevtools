import React from "react";
import {Link} from "./Link";

export const Menu = (props) => (
  <ul>
    <li>
      <Link name='Link1' url='#1' {...props} />
      <Link name='Link2' url='#2' />
    </li>
  </ul>
);
