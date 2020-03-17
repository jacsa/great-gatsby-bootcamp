const path = require('path')
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve(`./src/templates/blog.js`)

    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    const resp = await graphql(`
        query  {
            allContentfulBlogPost {
                    edges {
                        node {
                            slug
                            id
                            contentful_id
                            node_locale
                        }
                    }
                }
        }
    `)
    resp.data.allContentfulBlogPost.edges.forEach(({ node: { contentful_id, id, node_locale, slug } }) => {
        // createPage({
        //     component: blogTemplate,
        //     path: `/blog/${slug}`,
        //     context: {
        //         slug
        //     }
        // })
        console.log(`/${node_locale}/blog/${contentful_id}/`)
        createPage({
            path: `/${node_locale}/blog/${contentful_id}/`,
            component: slash(blogTemplate),
            context: {
                id: id,
                contentful_id: contentful_id,
            },
        })
    });

}
