// import React from 'react'
// import { Link } from 'gatsby'
// import Layout from '../components/layout'
// import Head from '../components/head'
// import '../styles/index.scss';

// const IndexPage = () => {
//     return (
//         <Layout >
//             <Head title={"Home"} />
//             <h1>Hello</h1>
//             <h2>I'm Javier Salazar, a full-stack developer living in Mexicali Baja California</h2>
//             <p>Need a developer?
//                 <Link to="/contact" > Contact me </Link>
//             </p>
//         </Layout>
//     )
// }
// export default IndexPage;

// //"develop": "env-cmd .env.development gatsby develop",

import React from 'react';
import { graphql, navigate, withPrefix } from 'gatsby'
import { getUserLangKey } from 'ptz-i18n';

class RedirectIndex extends React.PureComponent {
  constructor(args) {
    super(args);

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const { langs, defaultLangKey } = args.data.site.siteMetadata.languages;
      const langKey = getUserLangKey(langs, defaultLangKey);
      const homeUrl = withPrefix(`/${langKey}/`);
      
      navigate(homeUrl);
    }
  }

  render() {
    // It's recommended to add your SEO solution in here for bots
    // eg. https://github.com/ahimsayogajp/ahimsayoga-gatsby/blob/master/src/pages/index.js#L22
    return (<div />);
  }
}

export default RedirectIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site{
      siteMetadata{
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
