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
        let selectedId = this.props.location.search.split('=')[1]
        let selectedShow = selectedId ? shows.filter((show) => show.id === selectedId)[0] : shows[0]
        this.setState({ shows, selectedShow })
      })
  }

  selectShow() {
    let shows = this.state.shows;
    let selectedId = this.props.location.search.split('=')[1]
    return selectedId ? shows.filter((show) => show.id === selectedId)[0] : shows[0]
  }

  render() {
    let selectedShow = this.selectShow() ||this.state.selectedShow
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
