import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head'
//contentfulBlogPost (slug: { eq : $slug }) {
const Blog = ({data, location}) => {
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
        <Layout data={data} location={location}>
            <Head title={data.contentfulBlogPost.title} />
            <h1>{data.contentfulBlogPost.title}</h1>
            <p>{data.contentfulBlogPost.publishedDate}</p>
            { documentToReactComponents(json, options) }
        </Layout>
    )
}

export default Blog;

export const query = graphql`query ($id: String){
  site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  contentfulBlogPost (id: { eq: $id }) {
      title
      publishedDate(formatString:"MMMM Do, YYYY")
      body {
        json
      }
    }
  }`;