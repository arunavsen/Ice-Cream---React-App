import React from 'react';
import classes from './Icecream.module.css';

export const Icecream = () => {
    return (
        <div>
            <div class={classes.icecream}>
              <p class={classes.cone}></p>
              {/*  <p>Please start adding scoops</p> */}
              <div class={classes.cherry}></div>
            </div>
          </div>
    );
};
export default Icecream;
