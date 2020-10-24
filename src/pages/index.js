import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/templates/layout"
import Title from "../components/atoms/title"
import Description from "../components/atoms/description"
import HomePageLogo from "../components/molecules/homePageLogo"
import MiddleSection from "../components/organisms/MiddleSection"

import homeImageA from "../images/home-images/home-image-a.png"
import homeImageB from "../images/home-images/home-image-b.png"
import homeImageC from "../images/home-images/home-image-c.png"

class IndexPage extends Component {
  render() {
    const homepageData = this.props.data.allContentfulHomepageData.edges

    return (
      <>
        <Layout />
        <HomePageLogo />
        {homepageData.map(data => {
          const { title, simpleDescription } = data.node

          return (
            <div key={data.node.id}>
              <Title text={title} />
              <Description text={simpleDescription.simpleDescription} />
            </div>
          )
        })}
        <MiddleSection
          sections={[
            {
              image: homeImageA,
              title: 'Header',
              text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            },
            {
              image: homeImageB,
              title: 'Header',
              text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            },
            {
              image: homeImageC,
              title: 'Header',
              text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            },
          ]}
        />
      </>
    )
  }
}

export default IndexPage

export const homePageQuery = graphql`
  query homePageQuery {
    allContentfulHomepageData {
      edges {
        node {
          id
          title
          simpleDescription {
            simpleDescription
          }
        }
      }
    }
  }`
