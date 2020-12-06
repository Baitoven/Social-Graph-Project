import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as vis from 'vis'
import styled from 'styled-components'

import Layout from "../components/layout"
import image1 from "../images/degree_distr.png"

export default function IndexPage() {
  /*const { allDataJson: { edges: result1, nodes: result2} } = useStaticQuery(graphql`
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
  const { links: nwLinks } = result2[0]*/

  function draw() {
    // create some nodes
    var nodes = [
      { id: 0, label: "Myriel", group: 1 },
      { id: 1, label: "Napoleon", group: 1 },
      { id: 2, label: "Mlle.Baptistine", group: 1 },
      { id: 3, label: "Mme.Magloire", group: 1 },
      { id: 4, label: "CountessdeLo", group: 1 },
      { id: 5, label: "Geborand", group: 1 },
      { id: 6, label: "Champtercier", group: 1 },
      { id: 7, label: "Cravatte", group: 1 },
      { id: 8, label: "Count", group: 1 },
      { id: 9, label: "OldMan", group: 1 },
      { id: 10, label: "Labarre", group: 2 },
      { id: 11, label: "Valjean", group: 2 },
      { id: 12, label: "Marguerite", group: 3 },
      { id: 13, label: "Mme.deR", group: 2 },
      { id: 14, label: "Isabeau", group: 2 },
      { id: 15, label: "Gervais", group: 2 },
      { id: 16, label: "Tholomyes", group: 3 },
      { id: 17, label: "Listolier", group: 3 },
      { id: 18, label: "Fameuil", group: 3 },
      { id: 19, label: "Blacheville", group: 3 },
      { id: 20, label: "Favourite", group: 3 },
      { id: 21, label: "Dahlia", group: 3 },
      { id: 22, label: "Zephine", group: 3 },
      { id: 23, label: "Fantine", group: 3 },
      { id: 24, label: "Mme.Thenardier", group: 4 },
      { id: 25, label: "Thenardier", group: 4 },
      { id: 26, label: "Cosette", group: 5 },
      { id: 27, label: "Javert", group: 4 },
      { id: 28, label: "Fauchelevent", group: 0 },
      { id: 29, label: "Bamatabois", group: 2 },
      { id: 30, label: "Perpetue", group: 3 },
      { id: 31, label: "Simplice", group: 2 },
      { id: 32, label: "Scaufflaire", group: 2 },
      { id: 33, label: "Woman1", group: 2 },
      { id: 34, label: "Judge", group: 2 },
      { id: 35, label: "Champmathieu", group: 2 },
      { id: 36, label: "Brevet", group: 2 },
      { id: 37, label: "Chenildieu", group: 2 },
      { id: 38, label: "Cochepaille", group: 2 },
      { id: 39, label: "Pontmercy", group: 4 },
      { id: 40, label: "Boulatruelle", group: 6 },
      { id: 41, label: "Eponine", group: 4 },
      { id: 42, label: "Anzelma", group: 4 },
      { id: 43, label: "Woman2", group: 5 },
      { id: 44, label: "MotherInnocent", group: 0 },
      { id: 45, label: "Gribier", group: 0 },
      { id: 46, label: "Jondrette", group: 7 },
      { id: 47, label: "Mme.Burgon", group: 7 },
      { id: 48, label: "Gavroche", group: 8 },
      { id: 49, label: "Gillenormand", group: 5 },
      { id: 50, label: "Magnon", group: 5 },
      { id: 51, label: "Mlle.Gillenormand", group: 5 },
      { id: 52, label: "Mme.Pontmercy", group: 5 },
      { id: 53, label: "Mlle.Vaubois", group: 5 },
      { id: 54, label: "Lt.Gillenormand", group: 5 },
      { id: 55, label: "Marius", group: 8 },
      { id: 56, label: "BaronessT", group: 5 },
      { id: 57, label: "Mabeuf", group: 8 },
      { id: 58, label: "Enjolras", group: 8 },
      { id: 59, label: "Combeferre", group: 8 },
      { id: 60, label: "Prouvaire", group: 8 },
      { id: 61, label: "Feuilly", group: 8 },
      { id: 62, label: "Courfeyrac", group: 8 },
      { id: 63, label: "Bahorel", group: 8 },
      { id: 64, label: "Bossuet", group: 8 },
      { id: 65, label: "Joly", group: 8 },
      { id: 66, label: "Grantaire", group: 8 },
      { id: 67, label: "MotherPlutarch", group: 9 },
      { id: 68, label: "Gueulemer", group: 4 },
      { id: 69, label: "Babet", group: 4 },
      { id: 70, label: "Claquesous", group: 4 },
      { id: 71, label: "Montparnasse", group: 4 },
      { id: 72, label: "Toussaint", group: 5 },
      { id: 73, label: "Child1", group: 10 },
      { id: 74, label: "Child2", group: 10 },
      { id: 75, label: "Brujon", group: 4 },
      { id: 76, label: "Mme.Hucheloup", group: 8 },
    ];
  
    // create some edges
    var edges = [
      { from: 1, to: 0 },
      { from: 2, to: 0 },
      { from: 3, to: 0 },
      { from: 3, to: 2 },
      { from: 4, to: 0 },
      { from: 5, to: 0 },
      { from: 6, to: 0 },
      { from: 7, to: 0 },
      { from: 8, to: 0 },
      { from: 9, to: 0 },
      { from: 11, to: 10 },
      { from: 11, to: 3 },
      { from: 11, to: 2 },
      { from: 11, to: 0 },
      { from: 12, to: 11 },
      { from: 13, to: 11 },
      { from: 14, to: 11 },
      { from: 15, to: 11 },
      { from: 17, to: 16 },
      { from: 18, to: 16 },
      { from: 18, to: 17 },
      { from: 19, to: 16 },
      { from: 19, to: 17 },
      { from: 19, to: 18 },
      { from: 20, to: 16 },
      { from: 20, to: 17 },
      { from: 20, to: 18 },
      { from: 20, to: 19 },
      { from: 21, to: 16 },
      { from: 21, to: 17 },
      { from: 21, to: 18 },
      { from: 21, to: 19 },
      { from: 21, to: 20 },
      { from: 22, to: 16 },
      { from: 22, to: 17 },
      { from: 22, to: 18 },
      { from: 22, to: 19 },
      { from: 22, to: 20 },
      { from: 22, to: 21 },
      { from: 23, to: 16 },
      { from: 23, to: 17 },
      { from: 23, to: 18 },
      { from: 23, to: 19 },
      { from: 23, to: 20 },
      { from: 23, to: 21 },
      { from: 23, to: 22 },
      { from: 23, to: 12 },
      { from: 23, to: 11 },
      { from: 24, to: 23 },
      { from: 24, to: 11 },
      { from: 25, to: 24 },
      { from: 25, to: 23 },
      { from: 25, to: 11 },
      { from: 26, to: 24 },
      { from: 26, to: 11 },
      { from: 26, to: 16 },
      { from: 26, to: 25 },
      { from: 27, to: 11 },
      { from: 27, to: 23 },
      { from: 27, to: 25 },
      { from: 27, to: 24 },
      { from: 27, to: 26 },
      { from: 28, to: 11 },
      { from: 28, to: 27 },
      { from: 29, to: 23 },
      { from: 29, to: 27 },
      { from: 29, to: 11 },
      { from: 30, to: 23 },
      { from: 31, to: 30 },
      { from: 31, to: 11 },
      { from: 31, to: 23 },
      { from: 31, to: 27 },
      { from: 32, to: 11 },
      { from: 33, to: 11 },
      { from: 33, to: 27 },
      { from: 34, to: 11 },
      { from: 34, to: 29 },
      { from: 35, to: 11 },
      { from: 35, to: 34 },
      { from: 35, to: 29 },
      { from: 36, to: 34 },
      { from: 36, to: 35 },
      { from: 36, to: 11 },
      { from: 36, to: 29 },
      { from: 37, to: 34 },
      { from: 37, to: 35 },
      { from: 37, to: 36 },
      { from: 37, to: 11 },
      { from: 37, to: 29 },
      { from: 38, to: 34 },
      { from: 38, to: 35 },
      { from: 38, to: 36 },
      { from: 38, to: 37 },
      { from: 38, to: 11 },
      { from: 38, to: 29 },
      { from: 39, to: 25 },
      { from: 40, to: 25 },
      { from: 41, to: 24 },
      { from: 41, to: 25 },
      { from: 42, to: 41 },
      { from: 42, to: 25 },
      { from: 42, to: 24 },
      { from: 43, to: 11 },
      { from: 43, to: 26 },
      { from: 43, to: 27 },
      { from: 44, to: 28 },
      { from: 44, to: 11 },
      { from: 45, to: 28 },
      { from: 47, to: 46 },
      { from: 48, to: 47 },
      { from: 48, to: 25 },
      { from: 48, to: 27 },
      { from: 48, to: 11 },
      { from: 49, to: 26 },
      { from: 49, to: 11 },
      { from: 50, to: 49 },
      { from: 50, to: 24 },
      { from: 51, to: 49 },
      { from: 51, to: 26 },
      { from: 51, to: 11 },
      { from: 52, to: 51 },
      { from: 52, to: 39 },
      { from: 53, to: 51 },
      { from: 54, to: 51 },
      { from: 54, to: 49 },
      { from: 54, to: 26 },
      { from: 55, to: 51 },
      { from: 55, to: 49 },
      { from: 55, to: 39 },
      { from: 55, to: 54 },
      { from: 55, to: 26 },
      { from: 55, to: 11 },
      { from: 55, to: 16 },
      { from: 55, to: 25 },
      { from: 55, to: 41 },
      { from: 55, to: 48 },
      { from: 56, to: 49 },
      { from: 56, to: 55 },
      { from: 57, to: 55 },
      { from: 57, to: 41 },
      { from: 57, to: 48 },
      { from: 58, to: 55 },
      { from: 58, to: 48 },
      { from: 58, to: 27 },
      { from: 58, to: 57 },
      { from: 58, to: 11 },
      { from: 59, to: 58 },
      { from: 59, to: 55 },
      { from: 59, to: 48 },
      { from: 59, to: 57 },
      { from: 60, to: 48 },
      { from: 60, to: 58 },
      { from: 60, to: 59 },
      { from: 61, to: 48 },
      { from: 61, to: 58 },
      { from: 61, to: 60 },
      { from: 61, to: 59 },
      { from: 61, to: 57 },
      { from: 61, to: 55 },
      { from: 62, to: 55 },
      { from: 62, to: 58 },
      { from: 62, to: 59 },
      { from: 62, to: 48 },
      { from: 62, to: 57 },
      { from: 62, to: 41 },
      { from: 62, to: 61 },
      { from: 62, to: 60 },
      { from: 63, to: 59 },
      { from: 63, to: 48 },
      { from: 63, to: 62 },
      { from: 63, to: 57 },
      { from: 63, to: 58 },
      { from: 63, to: 61 },
      { from: 63, to: 60 },
      { from: 63, to: 55 },
      { from: 64, to: 55 },
      { from: 64, to: 62 },
      { from: 64, to: 48 },
      { from: 64, to: 63 },
      { from: 64, to: 58 },
      { from: 64, to: 61 },
      { from: 64, to: 60 },
      { from: 64, to: 59 },
      { from: 64, to: 57 },
      { from: 64, to: 11 },
      { from: 65, to: 63 },
      { from: 65, to: 64 },
      { from: 65, to: 48 },
      { from: 65, to: 62 },
      { from: 65, to: 58 },
      { from: 65, to: 61 },
      { from: 65, to: 60 },
      { from: 65, to: 59 },
      { from: 65, to: 57 },
      { from: 65, to: 55 },
      { from: 66, to: 64 },
      { from: 66, to: 58 },
      { from: 66, to: 59 },
      { from: 66, to: 62 },
      { from: 66, to: 65 },
      { from: 66, to: 48 },
      { from: 66, to: 63 },
      { from: 66, to: 61 },
      { from: 66, to: 60 },
      { from: 67, to: 57 },
      { from: 68, to: 25 },
      { from: 68, to: 11 },
      { from: 68, to: 24 },
      { from: 68, to: 27 },
      { from: 68, to: 48 },
      { from: 68, to: 41 },
      { from: 69, to: 25 },
      { from: 69, to: 68 },
      { from: 69, to: 11 },
      { from: 69, to: 24 },
      { from: 69, to: 27 },
      { from: 69, to: 48 },
      { from: 69, to: 41 },
      { from: 70, to: 25 },
      { from: 70, to: 69 },
      { from: 70, to: 68 },
      { from: 70, to: 11 },
      { from: 70, to: 24 },
      { from: 70, to: 27 },
      { from: 70, to: 41 },
      { from: 70, to: 58 },
      { from: 71, to: 27 },
      { from: 71, to: 69 },
      { from: 71, to: 68 },
      { from: 71, to: 70 },
      { from: 71, to: 11 },
      { from: 71, to: 48 },
      { from: 71, to: 41 },
      { from: 71, to: 25 },
      { from: 72, to: 26 },
      { from: 72, to: 27 },
      { from: 72, to: 11 },
      { from: 73, to: 48 },
      { from: 74, to: 48 },
      { from: 74, to: 73 },
      { from: 75, to: 69 },
      { from: 75, to: 68 },
      { from: 75, to: 25 },
      { from: 75, to: 48 },
      { from: 75, to: 41 },
      { from: 75, to: 70 },
      { from: 75, to: 71 },
      { from: 76, to: 64 },
      { from: 76, to: 65 },
      { from: 76, to: 66 },
      { from: 76, to: 63 },
      { from: 76, to: 62 },
      { from: 76, to: 48 },
      { from: 76, to: 58 },
    ];
  
    // create a network
    var container = document.getElementById("mynetwork");
    var data = {
      nodes: nodes,
      edges: edges,
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
  }, []);

  return (
    <Layout>
      <h1>Motivation</h1>
      <p>At the beginning of the project, many different ideas had been discussed. At the end, we found out that the best solution was creating a network about the games. There are many reasons to choose this solution. First of all, Steam has good and intuitively API to retrieve the data. With Steam and SteamWorks API we were able to retrieve both the data of the games (e.g. number of active users, genres, categories...) and data to perform text analysis (e.g. descriptions and comments for each game). Unfortunately (or actually fortunately, depends on the point of view!) it is not possible to retrieve data on the specific users for privacy reasons. For this reason, it is not possible to know, for example, the list of the users that play a specific game. Secondly, we are interested in the argument and we were curiosed about what we would have been able to understand. Lastly, it is a topic not as common as others, like for example films or songs.</p>
      
      <h1>The goals</h1>
      <p>The goals of the project are different.</p> 
      <ul>
        <li>Firstly, we want to understand if the network has some common structure, i.e. random or scale-free.</li>
        <li>Secondly, we want to study if there are meaningful communities inside the games network, based on the characteristic of the games (e.g. genres).</li>
        <li>Then, we want to perform NLP on the comments of the games, in order to understand the sentiments for the games and for the communitites, as well as find the specific words for each community.</li>
      </ul>

      <h1>The Graph</h1>
      <NetworkContainer id="mynetwork" />
      <h2>General analysis of the topology</h2>
      <p>To start the analysis of the network, we wanted to study its topology, in order to understand better what we were working with. To do that, we analysed the degree distribution as well as other general properties as the average length and the average global clustering coefficient. At the end, we discovered that the properties of this network are really strange, as they don't follow none of the predictions done at each step. This confused us a lot and we think that the knowledges provided during the course are not enough to understand deeply the topology of the graph.</p>
      <ImageContainer>
        <img src={image1} />
      </ImageContainer>
      <p>degree distribution graph</p>
    </Layout>
  )
}

const NetworkContainer = styled.div`
  width: 100%;
  height: 900px;
  border: 1px solid lightgray;
`

const ImageContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  //flex-wrap: wrap;
`
