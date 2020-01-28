import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return(
        <div>
            <Layout>
            <Head title={"Contact"} />
            <h1>
                Contact
            </h1>
            <p>Contactme on <a href="https://www.facebook.com/javier.salazarcardenas" target="_blank"> jacsa77@gmail.com </a></p>
            </Layout>
        </div>
    )
};

export default ContactPage;