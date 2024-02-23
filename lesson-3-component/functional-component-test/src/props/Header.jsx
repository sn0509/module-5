// import React, { Component } from 'react'

// export default class Header extends Component {
//   render() {
//     return (
//       <>
//       <h2>Header</h2>
//       <p>Id from MyComponent: {this.props.id1}</p>
//       <p>Name from MyComponent: {this.props.name1}</p>
//       </>
//     );
//   }
// }


import React from 'react'
import Footer from './Footer'

function Header(props) {
  return (
    <>
    <h2>Header</h2>
    <Footer id={props.id} name={props.name}/>
    </>
  )
}

export default Header