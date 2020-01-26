import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    // const data = useStaticQuery(graphql`
    //         query  {
    //             allMarkdownRemark {
    //                 edges {
    //                     node {
    //                         frontmatter {
    //                             date
    //                             title
    //                         }
    //                         fields {
    //                             slug
    //                         }
    //                     }

    //                 }
    //             }
    //         }
    //     `);

    const data = useStaticQuery(graphql`
        query  {
            allContentfulBlogPost (sort:
            {
                fields : publishedDate,
                order: DESC
            }) {
                edges {
                    node {
                        slug
                        title
                        publishedDate(formatString:"MMMM Do, YYYY")
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
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map(({ node: { title, publishedDate, slug } }, index) => {
                        return (
                            <li key={index} className={blogStyles.post}>
                                <Link to={`blog/${slug}`}>
                                    <h2>{title}</h2>
                                    <p>{publishedDate}</p>
                                </Link>
                            </li>
                        );
                    })}
                </ol>
            </Layout>
        </div>
    )
};

export default BlogPage;