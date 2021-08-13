import React from 'react'

import BlogRoll from '../components/BlogRoll'
// import Logo from '../components/Logo'
// import { Link } from '@reach/router'
class BlogIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="content">
            <BlogRoll />
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default BlogIndexPage