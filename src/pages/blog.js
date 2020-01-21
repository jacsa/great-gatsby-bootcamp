import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'

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
                            fields {
                                slug
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
                <ol className={blogStyles.posts}>
                    {data.allMarkdownRemark.edges.map(({ node: { frontmatter: { title, date }, fields:{ slug } } }, index) => {
                        return (
                            <li key={index} className={blogStyles.post}>
                                <Link to={`blog/${slug}`}>
                                    <h2>{title}</h2>
                                    <p>{date}</p>
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