// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import DialogCommunity from "../components/dialog-community"
import communities_distribution from "../images/communities_distribution.png"
import communities_graph from "../images/communities_graph.png"
import correlation_matrix from "../images/correlation_matrix.png"
import correlation_tag_link from "../images/correlation_tag_link.png"
import normalized_correlation_tag_link from "../images/normalized_correlation_tag_link.png"

type TProps = {}

export default function Page1(props: TProps) {
  return (
    <Layout>
      <h1>Communities</h1>
      <p>In this section of the analysis, the communities are the protagonists. First of all, we will create them and we will visualise them. Then, some statistics are computed in order to understand better their properties. In particular....</p>
      
      <h2>Creation of the communities</h2>
      <p> It can be seen that the score of the modularity is around 0.5, in a range between -1 and +1. This means that there is an high level of modularity, and so the communities are well defined. This is a good news as we wanted to find meaningful communities for the further analysis. In Figure (7) it can be seen that there are siz communities. In particular there are three communities with quite the same number of nodes (around 700). Then, there are two communities with respectively around 300 nodes more and less. Finally, there is one community with less than 200 nodes.</p>
      <ImageContainer>
        <img src={communities_distribution} />
      </ImageContainer>
      
      
      <h2>Visualisation of the communities</h2>
      <ImageContainer>
        <img src={communities_graph} />
      </ImageContainer>
      
      <p>It can be seen from the figure above that the communities are well separated. This was predictable as the forceatlas algorithm arranges the nodes to minimize the crossing among edges, and this leads to organize the nodes by communities. In particular, it is easy to find the three communities with the same number of nodes on the top right corner, the smallest community on the bottom part of the graph, the biggest on the left and the second smallest in the top left corner. The same-dimension three communities contain the biggest nodes, those with the highest degree. The smallest community contains agglomerates of nodes, that are small nodes (i.e. low degree) but really connected one to each other.</p>
      
      <h2>Naming and analysing communities</h2>
      <p>The figures below shows the communities of the network with their names. It can be seen that each community is identified bu a different triplet of tags. This mean that each community has, in fact, games with different tags and so the partition is meaningful with respect to the tags.</p>
      <p>The buttons below provides more informations on the communities we spotted :</p>

      <DialogCommunity 
        text={`This community has 448 nodes. So it is the second smallest one. The most common tags are "Remote Play Together" (405 games have this tag), "Shared/Split Screen" (311 have) and "Full controllor support" (296). So, more or less all the games of this community are online games in which you can share the screen. The most connected game is "Just Shapes & Beats".`}
        communityName={`Community 1: "Remote Play Together", "Shared/Split Screen", "Full controller support"`}  
        imageSet={0}
      />

      <DialogCommunity 
        text={`This community has 1069 nodes and it is the biggest one. The most common tags are "Action" (669 games have this tag), "Online PvP" (628 have) and "PvP" (619). So, in this community there are the games action and Player Versus Player, both online and offline. These are the most popular games at the moment, as "Counter Strike". The most connected game is "Necromunda: Underhive Wars".`}
        communityName={`Community 2: "Action", "Online PvP", "PvP"`} 
        imageSet={1}
      />

      <DialogCommunity 
        text={`In this community there are 740 nodes. The most common tags are "Indie" (579 games have this tag), "Strategy" (429 have) and "Casual" (370). The games in this community are mainly strategy games in an old and simple style. The most connected game is "Train Valley".`}
        communityName={`Community 3: "Strategy", "Indie", "Casual"`} 
        imageSet={2}
      />

      <DialogCommunity 
        text={`In this community there are 697 nodes. The most common tags are "Action" (403 games have this tag), "Adventure" (387 have) and "Full controller support" (515). We can understand that the games in this community are games that can be played even without a keyboard (so with controllers) and are adventurous. The most connected game is "Hellblade: Senua's Sacrifice".`}
        communityName={`Community 4: "Full controller support", "Action", "Adventure"`} 
        imageSet={3}
      />

      <DialogCommunity 
        text={`In this community there are 673 nodes. The most common tags are "Indie" (582 games have this tag), "Adventure" (416 have) and "Action" (407). The games in this community are similar to the games of the previous one, with the difference that these games are created by individuals or smaller development teams. The most connected game is "Inner silence".`}
        communityName={`Community 5: "Indie", "Adventure", "Action"`} 
        imageSet={4}
      />

      <DialogCommunity 
        text={`In this community there are 147 nodes. This is the smallest community and the tags are very different from the other communities. The most common tags are "Strategy" (96 games have this tag), "RPG" (47 have) and "Simulation" (23). So, the games of this community are mainly strategic role-play/simulation games. The most connected game is "Supreme Commander: Forged Alliance".`}
        communityName={`Community 6: "Strategy", "RPG", "Simulation"`} 
        imageSet={5}
      />
      

      <p>In the figures above, the linear and log-log distributions for each community are shown. The first three figures are pretty clear and it is visible that the distributions are really similar to those of the whole network. In fact, the linear distribtuion is a descending line, that it is neither the distribution of a random not that of a free-scale distribution. It can be seen that they are not free-scale distributions also from the relative log-log plot, that are not straight lines. As for the whole network, the distributions don't explain the topology very well. The last three images are even more confused, with the distributions that don't follow any rules in the linear plot. It is visible that the log-log plots are aranged similar to the first three, so it is plausible to assume that they indeed have a similar distribution. As a conclusion, we have discovered that the distributions of the communities are similar to that of the whole network, and as that one is difficult to find a meaning, as the properties are neither of a random nor of a scale-free network.</p>

      <ImageContainer>
        <img src={correlation_matrix} />
      </ImageContainer>
      <p>The diagonal contains the nodes that go from community  𝑖  to community  𝑖 , so the edges inside the same community. outside of the diagonal there are the edges among different communities. It can be seen from the figure above that the diagonal contains the higher values. This is in practise a better visualisation of the modularity parameter. the partition is meaningful because there are many intra-class edges and only few inter-class edges. It is interesting to see that communities 2, 3, 4 are high correlated. In the figures above it can be seen that these communities are those with similar number of nodes and also the most common tags are similar (for example, "indie" and "adventure"). As they have similar tags, it makes sense that they are in some way correlated. Finally, it is interesting to see that the last community is not so intra-correlated. This was also visible in the visualisation of the network, in which the nodes created agglomerates but had few edges one to each other. This result leads to the fact that Louvain method tends to prefer putting nodes together instead of overpartitioning the graph.</p>
      
      <ImageContainer>
        <img src={correlation_tag_link} />
        <img src={normalized_correlation_tag_link} />
      </ImageContainer>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

const ImageContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: flex-start;
`
