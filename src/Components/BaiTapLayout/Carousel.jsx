import React, { Component } from 'react'

export default class Carousel extends Component {
  render() {
    return (
      <div className="py-5">
      <div className="container px-lg-5 ">
        <div className="p-4 p-lg-5 bg-light rounded-3">
          <div className="m-4 m-lg-5">
              <h1 className="title">A Warm Welcome!</h1>
              <p className="title2">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
              <a className="btn btn-primary" href="#!">Call to action</a>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
