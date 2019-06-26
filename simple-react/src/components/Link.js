import React, {useState, useDebugValue} from "react";

const useToggleCustomHook = (toggleState) => {
  const [toggle, setToggle] = useState(toggleState);

  useDebugValue(toggle ? 'Toggled' : 'Not Toggled');

  return [toggle, setToggle]
};

export const Link = ({url, name, classes}) => {
  const [toggle, setToggle] = useToggleCustomHook(false);

  return (
    <>
      <a onClick={() => setToggle(!toggle)} className={classes ? classes : ''} href={url}>
        {name} {toggle ? 'Toggled' : ''}
      </a>
    </>
  );
};
