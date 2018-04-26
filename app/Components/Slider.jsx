import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.target.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  render() {
    const shows = this.props.shows;
    return (
      <div>
        <nav className='slider'>
          {shows.map(show => {
            return <section
              key={show.id}
              id={show.id}>
              <Link
                to={`?id=${show.id}`}
                onClick={e => this.handleClick(e)}>
                <img
                  alt={show.title}
                  className='slider-thumbnail'
                  src={show.product_image_url} />
              </Link>
            </section>
          })}
        </nav>
      </div>
    )
  }
}
