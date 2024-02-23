// import React, { Component } from 'react'

// export default class Footer extends Component {
//   render() {
//     return (
//         <>
//         <h2>Footer</h2>
//         <p>Id from MyComponent: {this.props.id1}</p>
//         <p>Name from MyComponent: {this.props.name1}</p>
//         </>
//     )
//   }
// }


import React from 'react'

function Footer(props) {
  return (
    <>
    <h2>Footer</h2>
    <p>{props.id}</p>
    <p>{props.name}</p>
    </>
  )
}

export default Footer