import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// export const query = graphql`query ($slug: String){
//     markdownRemark (fields: {
//     slug: {
//       eq : $slug
//     }
//   }) {
//     frontmatter {
//       title
//       date
//     }
//     excerpt
//     html
//   }
// }`;

export const query = graphql`query ($slug: String){
    contentfulBlogPost (slug: { eq : $slug }) {
      title
      publishedDate(formatString:"MMMM Do, YYYY")
      body {
        json
      }
    }
  }`;

const Blog = ({data}) => {
    const  { json } = data.contentfulBlogPost.body;
    const options = {
      renderNode:  {
          "embedded-asset-block": (node) => {
            const alt = node.data.target.fields.title['en-US'];
            const url = node.data.target.fields.file['en-US'].url;
            return <img src={url} alt={alt} />
          }
      }
    };
    return (
        <Layout>
            <h1>{data.contentfulBlogPost.title}</h1>
            <p>{data.contentfulBlogPost.publishedDate}</p>
            { documentToReactComponents(json, options) }
        </Layout>
    )
}

export default Blog;