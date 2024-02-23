// import React, { Component } from 'react'
// import Header from './Header'
// import Footer from './Footer'

// export default class MyComponent extends Component {
//   render() {
//     return (
//       <>
//       <h2>MyComponent</h2>
//       <Header id1={1} name1={"Tèo"}/>
//       <Footer id2={2} name2={"Tý"}/>
//       </>
//     );
//   }
// }


import React from 'react'
import Header from './Header'

function MyComponent() {
  return (
    <>
    <h2>MyComponent</h2>
    <Header id={1} name={2}/>
    </>
  )
}

export default MyComponent