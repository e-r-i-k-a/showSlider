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
      behavior: 'smooth'
    })
  }

  render() {
    const shows = this.props.shows;
    let selectedId = this.props.selectedShow.id;
    return (
      <nav className='slider'>
        {shows.map((show, i) => {
          let selected = (show.id === selectedId)
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
              <div
                className='slider-shadow'
                style={{display: selected ? 'none' : 'flex'}}></div>
            </Link>
            <figcaption style={{display: selected ? 'flex' : 'none'}}>{i + 1}</figcaption>
          </figure>
        })}
      </nav>
    )
  }
}
