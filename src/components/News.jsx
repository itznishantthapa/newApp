import React, { Component } from 'react'
import NewsItems from './NewsItem'

export class News extends Component {
  render() {
    return (
    <>
      <div>THIS IS NEWS COMPONENT</div>
    <NewsItems />
    </>
    )
  }
}

export default News