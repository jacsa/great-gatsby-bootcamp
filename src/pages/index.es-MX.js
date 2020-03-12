import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import blogStyles from './blog.module.scss'

const propTypes = {
  data: PropTypes.object.isRequired,
}

// const Product = ({ node }) => {
//   return (
//     <div>
//       <Link
//         style={{ color: `inherit`, textDecoration: `none` }}
//         to={`/${node.node_locale}/products/${node.contentful_id}/`}
//       >
//         <div
//           style={{
//             display: `flex`,
//             alignItems: `center`,
//             borderBottom: `1px solid lightgray`,
//             paddingBottom: rhythm(1 / 2),
//             marginBottom: rhythm(1 / 2),
//           }}
//         >
//           <div style={{ marginRight: rhythm(1 / 2) }}>
//             {node.image[0].resolutions.src && (
//               <Img
//                 style={{ margin: 0 }}
//                 resolutions={node.image[0].resolutions}
//               />
//             )}
//           </div>
//           <div style={{ flex: 1 }}>{node.productName.productName}</div>
//         </div>
//       </Link>
//     </div>
//   )
// }

class IndexPage extends React.Component {
  render() {
    const usblogEdges = this.props.data.es.edges
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <div style={{ marginBottom: rhythm(2) }}>
          <h3>Espanol</h3>
          <ol className={blogStyles.posts}>
          {usblogEdges.map(({ node }, index) => (
            <li key={index} className={blogStyles.post}>
              <Link to={`/${node.node_locale}/blog/${node.contentful_id}/`}>
                <h2>{node.title}</h2>
                <p>{node.publishedDate}</p>
              </Link>
            </li>
          ))}
          </ol>
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageEsMxQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    es: allContentfulBlogPost(filter: { node_locale: { eq: "es-MX" } }) {
      edges {
        node {
          id
          contentful_id
          node_locale
          title
          publishedDate
            #   productName {
            #     productName
            #   }
            #   image {
            #     resolutions(width: 75) {
            #       ...GatsbyContentfulResolutions
            #     }
            #   }
        }
      }
    }
  }
`
