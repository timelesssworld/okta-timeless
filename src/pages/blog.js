import React from 'react'

import BlogRoll from '../components/BlogRoll'
import Logo from '../components/Logo'
class BlogIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <Logo/>
          <div className="content">
            <BlogRoll />
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default BlogIndexPage