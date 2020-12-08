import React, { useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as d3 from "d3"
import * as d3c from "d3-cloud"
import styled from "styled-components"

import Layout from "../components/layout"
import comment_communities from "../images/comments_communities.png"
import histo_words_not_sentiment from "../images/histWordsNotInSentiment.png"
import histo_sentiment from "../images/hist_sentiment_games.png"

type TProps = {}

export default function Page2(props: TProps) {
  /**const { allDataAllSentiment2Json: { edges: result } } = useStaticQuery(graphql`
    query {
      allDataAllSentiment2Json {
        edges {
          node {
            word
            size
          }
        }
      }
    }
  `)
  
  function render() {
    var margin = {top: 10, right: 10, bottom: 10, left: 10},
        width = 450 - margin.left - margin.right,
        height = 450 - margin.top - margin.bottom;

    var svg = d3.select("#my_dataviz").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

    var layout = d3c()
      .size([width, height])
      .words(result.map((node) => {
        return {text: node.node.word, size: node.node.size}
      }))
      .padding(5)        //space between words
      .rotate(function() { return ~~(Math.random() * 2) * 90; })
      .fontSize(function(d) { return d.size; })      // font size of words
      .on("end", draw);
    layout.start();

    function draw(words) {
      svg
        .append("g")
          .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
          .selectAll("text")
            .data(words)
          .enter().append("text")
            .style("font-size", function(d: any) { return d.size; })
            .style("fill", "#69b3a2")
            .attr("text-anchor", "middle")
            .style("font-family", "Impact")
            .attr("transform", function(d: any) {
              return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d: any) { return d.text; });
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      render()
    }, 50);
    return () => clearTimeout(timer);
  }, []);**/
  
  return (
    <Layout>
      <h1>Sentiment analysis</h1>
      <div id="my_dataviz"></div>

      <h2>Wordclouds</h2>
      <p>** some text **</p>
      <ImageContainer>
        <img src={comment_communities} />
      </ImageContainer>
      <p>The words "good", "one", "really" and "time" where filtered out before making the word clouds as they helt a very high weight and appeared large in all the word clouds allthough the TF-IDF should have filterd them out.

We see that wordclouds for the communities are very similar. We have compared the cosine similarity, a metric used to measure how similar the documents are irrespective of their size, to varify this. We can see that the cosine similarity varies between 0.88-0.96 so the document containing the comments for each community are very similar.

These are some of the most notable differences: The word "fun" holds alot of weight in communities 1,2 and 3. The word "Story" holds alot of weight in communities 4 and 5. In community 6 the words "great", "best" and "first" hold alot of weight.</p>

      <h2>Analysis</h2>
      <ImageContainer>
        <img src={histo_words_not_sentiment} />
      </ImageContainer>
      <p>After looking at the words we add some words to the happiness score ranking that are common and give them a score similar to similar words in the happiness score ranking.</p>

      <ImageContainer>
        <img src={histo_sentiment} />
      </ImageContainer>
      <p>We can see that the averge sentiment is normally distributed, which is not surprising as the descriptions of the games are quite neutral.</p>
      <p>Alot of games have 0 sentiment value. These comments are either empty, meaning tha the game didn't have any comments or that the words in the comments are not contained in the sentiment list. The third possability is that the weight defined in the API call is 0 making the total sentiment 0 according to how we defined the function above.</p>

      

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

const ImageContainer = styled.div`
  display: flex;

  & img {
    width: 100%;
    height: auto;
  }
`
