/* eslint-disable import/no-commonjs */
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({ name: '@babel/plugin-proposal-decorators', options: { legacy: true } })
  actions.setBabelPlugin({ name: '@babel/plugin-proposal-optional-chaining', options: {} })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
        allFile {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
  `) 
}
