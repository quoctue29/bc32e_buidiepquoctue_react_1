import React, { Component } from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import Item from './Item'


export default class Home extends Component {
  render() {
    return (
      <div>
         <Header/>
        <div>
            <Carousel/>
            <Item/>
        </div>
        <Footer/>
    </div>
    )
  }
}
