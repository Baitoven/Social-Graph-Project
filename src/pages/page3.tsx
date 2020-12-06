// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

type TProps = {}

export default function Page3(props: TProps) {
  return (
    <Layout>
      <h1>About the project</h1>
      <h2>Retriving the data</h2>
      <p>Once decided the topic, we focused on taking the data. Unfortunately, there are some techical constraints that we had to face. The problem is about the dimension of the graph and on the time needed to retrieve all the data. In fact, there are about 105800 games on Steam, and it is possible to make only one request at a second to retrieve the data of the game and not more than 200 consequently. So, only for retrieve this information, it took more than 50 hours. The work had been parallelized over three different computers (i.e. the maximum active sessions that Google Colab allows for a user) to overcome partially the problem of the time constraint, since the requests came from different IPs.</p>

      <p>At the end of the process, we had the statistics for all the games on Steam.</p>

      <h2>Problems on the creation of the network</h2>
      <p>In order to create the network, we decided to have games as nodes. Then, we had to decide how to create links among the games. As our goal was to find similarities among games, it was intuitive to think ways to generate edges based on the similarities, found on the tags (i.e. genres and categories). In particular, many different choice have been considered, for example to create an edge between two games if the number of equal tags between the two games were above a certain threshold. This led to the choice of a proper arbitrary threshold without ways to decide which was the best. For this reason, at the end, another approch has been used. An edge is create between two games if the similitude between them is greater than the opposition. Expressed in other words, in the number of tags in common between the two games is greater than the number of tags not in common. The process of the network creation should have been easy but, as always, the practice was different from the theory. In fact, all the attemps to build the network failed because of the big dimensions of the network itself. In particular, working on Google Colab, after 4000 edges the system crashed, because of the too many links. As the purpose of the project wasn't working on big data, it's been decided to reduce the dimension of the network in order to be able to continue the project. For this reason, it's been decided to take the 4000 most played games in this period. It is a good choice also because after this number, there are very unplayed games with few or no comments that wouldn't have been useful in the sentiment analysis.</p>
      
      <h2>The website</h2>
      <p>The main objective of this website is to show the results of our network analysis, in an interactive and easy to understand way. That is why this website uses Gatsby, a React App Framework, as an engine, providing to the visitor of this website a fully responsive experience, without any lag (Gatsby using a pre-rendering technique to calculate and store queries). The website contains mostly texts, pictures and interactive components, as the Home page interactive graph, made using Vis.JS and a wordcloud found in the Sentiment analysis page, made using D3.JS.</p>
      <p>All of this website code is available in <a href="https://github.com/Baitoven/Social-Graph-Project">this GitHub repository</a>, and all of the Python code used for data processing is available from the download link below :</p>
      
      <p>** download link goes here **</p>

      <h2>About Us</h2>
      <p>put some more text here</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
