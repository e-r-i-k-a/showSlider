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
    let selectedId = this.props.selectedShow.id;
    return (
      <nav className='slider'>
        {shows.map((show, i) => {
          let caption = (show.id === selectedId) ? <figcaption>{i + 1}</figcaption> : null
          return <figure
            key={show.id}
            id={i}>
            <Link
              to={`?id=${show.id}`}
              onClick={e => this.handleClick(e)}>
              <img
                alt={show.title}
                className='slider-thumbnail'
                src={show.product_image_url}
                id={show.id} />
            </Link>
            {caption}
          </figure>
        })}
      </nav>
    )
  }
}
