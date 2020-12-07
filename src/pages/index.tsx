import React, { useEffect } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as vis from 'vis'
import styled from 'styled-components'

import Layout from "../components/layout"
import degree_distribution from "../images/degree_distr.png"
import communities_graph from "../images/communities_graph.png"

export default function IndexPage() {
  /**const { allDataJson: { edges: result1, nodes: result2} } = useStaticQuery(graphql`
    query {
      allDataJson {
        edges {
          node {
            nodes {
              name
              id
            }
          }
        }
        nodes {
          links {
            source
            target
          }
        }
      }
    }
  `)

  const { node: { nodes: nwNodes } } = result1[0]
  const { links: nwLinks } = result2[0]

  var nwNodesReformed = [];
  var nwLinksReformed = [];

  nwNodes.map((node) => {
    nwNodesReformed.push({ id: node.id, label: node.name, group: 1 })
  })

  nwLinks.map((link) => {
    nwLinksReformed.push({ from: link.source ,to: link.target })
  })

  function draw() {
    // create a network
    var container = document.getElementById("mynetwork");
    var data = {
      nodes: nwNodesReformed,
      edges: nwLinksReformed,
    };
    var options = {
      nodes: {
        shape: "dot",
        size: 16,
      },
      physics: {
        forceAtlas2Based: {
          gravitationalConstant: -26,
          centralGravity: 0.005,
          springLength: 230,
          springConstant: 0.18,
        },
        maxVelocity: 146,
        solver: "forceAtlas2Based",
        timestep: 0.35,
        stabilization: { iterations: 150 },
      },
    };
    var network = new vis.Network(container, data, options);
  }
    
  useEffect(() => {
    const timer = setTimeout(() => {
      draw()
    }, 50);
    return () => clearTimeout(timer);
  }, []);**/

  return (
    <Layout>
      <h1>Motivation</h1>
      <p>To begin with, here is the <a href="https://www.youtube.com/watch?v=VvwCjep0cQE">link to the YouTube presentation video</a> of the project.</p>
      <p>At the beginning of the project, many different ideas had been discussed. At the end, we found out that the best solution was creating a network about the games. There are many reasons to choose this solution. First of all, Steam has good and intuitively API to retrieve the data. With Steam and SteamWorks API we were able to retrieve both the data of the games (e.g. number of active users, genres, categories...) and data to perform text analysis (e.g. descriptions and comments for each game). Unfortunately (or actually fortunately, depends on the point of view!) it is not possible to retrieve data on the specific users for privacy reasons. For this reason, it is not possible to know, for example, the list of the users that play a specific game. Secondly, we are interested in the argument and we were curiosed about what we would have been able to understand. Lastly, it is a topic not as common as others, like for example films or songs.</p>
      
      <h1>The goals</h1>
      <p>The goals of the project are different.</p> 
      <ul>
        <li>Firstly, we want to understand if the network has some common structure, i.e. random or scale-free.</li>
        <li>Secondly, we want to study if there are meaningful communities inside the games network, based on the characteristic of the games (e.g. genres).</li>
        <li>Then, we want to perform NLP on the comments of the games, in order to understand the sentiments for the games and for the communitites, as well as find the specific words for each community.</li>
      </ul>

      <h1>The Graph</h1>
      <ImageContainer>
        <img src={communities_graph} />
      </ImageContainer>
      <p>You can download the entire graph with <a href={"json_GN.json"} download>this link</a>.</p>
      <h2>Degree distribution</h2>
      <p>To start the analysis of the network, we wanted to study its topology, in order to understand better what we were working with. To do that, we analysed the degree distribution as well as other general properties as the average length and the average global clustering coefficient. At the end, we discovered that the properties of this network are really strange, as they don't follow none of the predictions done at each step. This confused us a lot and we think that the knowledges provided during the course are not enough to understand deeply the topology of the graph.</p>
      <ImageContainer>
        <img src={degree_distribution} />
      </ImageContainer>
      <p>To see more analysis on the graph, you can go to the notebook (download link in the <Link to="/page3" >About the project</Link> section).</p>
    </Layout>
  )
}

const NetworkContainer = styled.div`
  width: 100%;
  height: 900px;
`

const ImageContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
`
