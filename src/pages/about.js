import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <div>
                <Head title={"About"} />
                <h1>About</h1>
                <p>I am a software engineer</p>
                <Link to="/contact" > What to work with me? Reach out here </Link>
            </div>
        </Layout>
    )
};

export default AboutPage;