import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from './Slider'

export default class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: [],
      selectedShow: {}
    }
    this.selectShow = this.selectShow.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/shows')
      .then(res => res.data)
      .then(shows => {
        this.setState({ shows, selectedShow: shows[0] })
      })
      console.log('component did mount')
  }

  selectShow() {
    let shows = this.state.shows;
    let selectedId = this.props.location.search.split('=')[1]
    if (selectedId) {
      return shows.filter((show) => show.id === selectedId)[0]
    } else {
      return this.state.selectedShow;
    }
  }

  render() {
    let selectedShow = this.selectShow()
    console.log('selectedshow',selectedShow)
    console.log('state', this.state)
    return (
      <main className='main'>
        <section className='main-selectedShow'>
          <img
            alt={selectedShow.title}
            className='main-selectedShow-img'
            src={selectedShow.product_image_url} />
          <div className='main-selectedShow-episodeCount'>{`${selectedShow.episodes} EPISODES`}</div>
          <div className='main-selectedShow-title'>{selectedShow.title}</div>
        </section>
        <hr />
        <Slider shows={this.state.shows} />
      </main>
    )
  }
}
