import React from 'react';
import classes from './Builder.module.css';

export const Builder = () => {
    return (
        <div className={classes.builder}>
              <h3>Build your own Ice Cream Sundae</h3>
              
              <button type="button" onclick="next()" className={[classes.order,'rounded'].join()}>
                Add to Cart
              </button>
            </div>

    );
};
export default Builder;