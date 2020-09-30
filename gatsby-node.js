exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulProjectDetail {
        nodes {
          slug
        }
      }
    }
  `)
  data.allContentfulProjectDetail.nodes.forEach(edge => {
    const slug = edge.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/pages/templates/project-detail.tsx`),
      context: { slug: slug },
    })
  })
}
