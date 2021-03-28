// import React from 'react';
// import Builder from '../../components/Builder/Builder';
// import IceCream from '../../components/IceCream/Icecream';
// import classes from './IceCreamBuilder.module.css';

// const IceCreamBuilder = () => {
//     return (
//         <div className={['container',classes.container].join(' ')}>
//                  <IceCream/>
//                  <Builder/>
//           </div>
//     )
// }

// export default IceCreamBuilder











import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/IceCream/Icecream';
import classes from './IceCreamBuilder.module.css';

export default class IceCreamBuilder extends Component{
    state={};
    render(){
        return(
            <div className={['container',classes.container].join(' ')}>
                <IceCream/>
                <Builder/>
            </div>
        );
    }
}
