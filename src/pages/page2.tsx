import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import * as d3 from "d3"
import * as d3c from "d3-cloud"
import styled from "styled-components"

import Layout from "../components/layout"
import comment_communities from "../images/comments_communities.png"
import histo_words_not_sentiment from "../images/histWordsNotInSentiment.png"
import histo_sentiment from "../images/hist_sentiment_games.png"

type TProps = {}

export default function Page2(props: TProps) {
  
  function render() {
    var myWords = [{word: "Running", size: "10"}, {word: "Surfing", size: "20"}, {word: "Climbing", size: "50"}, {word: "Kiting", size: "30"}, {word: "Sailing", size: "20"}, {word: "Snowboarding", size: "60"} ]

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
      .words(myWords.map(function(d: any) { return {text: d.word, size:d.size}; }))
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
  }, []);
  
  return (
    <Layout>
      <h1>Sentiment analysis</h1>
      <div id="my_dataviz"></div>

      <h2>Wordclouds</h2>
      <p>** some text **</p>
      <ImageContainer>
        <img src={comment_communities} />
      </ImageContainer>
      <p>** some more text here **</p>

      <h2>Analysis</h2>
      <ImageContainer>
        <img src={histo_words_not_sentiment} />
      </ImageContainer>

      <ImageContainer>
        <img src={histo_sentiment} />
      </ImageContainer>
      <p>put some more text here</p>

      

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
