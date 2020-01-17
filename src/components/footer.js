import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {

    const data = useStaticQuery(graphql`
    query {
        site{
            siteMetadata {
                author
            }
        }
    }
`);

    return (
        <footer>
            <br />
            Created by {data.site.siteMetadata.author}, @2020
        </footer>
    )
}
export default Footer;
