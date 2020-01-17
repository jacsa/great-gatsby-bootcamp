import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
            query  {
                allMarkdownRemark {
                    edges {
                        node {
                            frontmatter {
                                date
                                title
                            }
                        }
                    }
                }
            }
        `);
    return (
        <div>
            <Layout >
                <h1>
                    Blog
                </h1>
                <p>Post will show a list of posts</p>
                <ol>
                    {data.allMarkdownRemark.edges.map(({ node: { frontmatter: { title, date } } }, index) => {
                        return (
                            <li key={index}>
                                <h2>{title}</h2>
                                <p>{date}</p>
                            </li>
                        );
                    })}
                </ol>
            </Layout>
        </div>
    )
};

export default BlogPage;