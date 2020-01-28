import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import '../styles/index.scss';

const IndexPage = () => {
    return (
        <Layout >
            <Head title={"Home"} />
            <h1>Hello</h1>
            <h2>I'm Javier Salazar, a full-stack developer living in Mexicali Baja California</h2>
            <p>Need a developer?
                <Link to="/contact" > Contact me </Link>
            </p>
        </Layout>
    )
}
export default IndexPage;

//"develop": "env-cmd .env.development gatsby develop",