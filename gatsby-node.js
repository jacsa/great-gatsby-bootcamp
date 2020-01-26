const path = require('path')

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
                        }
                    }
                }
        }
    `)
    console.log(resp.data)
    resp.data.allContentfulBlogPost.edges.forEach(({ node: { slug } }) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${slug}`,
            context: {
                slug
            }
        })
    });

}
