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
            id={i}
            key={show.id}>
            <Link
              onClick={e => this.handleClick(e)}
              to={`?id=${show.id}`}>
              <img
                alt={show.title}
                className='slider-thumbnail'
                id={show.id}
                title={show.title}
                src={show.product_image_url}/>
              <div
                alt={show.title}
                className='slider-shadow'
                title={show.title}
                style={{display: selected ? 'none' : 'flex'}}>
              </div>
            </Link>
            <figcaption
              style={{display: selected ? 'flex' : 'none'}}>{i + 1}
            </figcaption>
          </figure>
        })}
      </nav>
    )
  }
}
