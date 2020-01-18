const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.
    if (node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        //console.log(JSON.stringify(slug))
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve(`./src/templates/blog.js`)

    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    const resp = await graphql(`
        query  {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    console.log(resp.data)
    resp.data.allMarkdownRemark.edges.forEach(({ node: { fields: { slug } } }) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${slug}`,
            context: {
                slug
            }
        })
    });

}
