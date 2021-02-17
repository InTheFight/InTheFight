import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/templates/layout';
import HomePageLogo from '../components/molecules/homePageLogo';
import HomeHeadlineSection from '../components/organisms/HomeHeadlineSection';

import { PlaceholderLinks, PlaceholderLink } from '../components/molecules/placeholderLinks';

const IndexPage = ({ data }) => {
  const homepageData = data.allContentfulHomepageData.edges;

  return (
    <>
      <Layout>
        <HomePageLogo />
        {homepageData.map((homeData) => {
          const { title, simpleDescription, id } = homeData.node;
          return (
            <HomeHeadlineSection
              title={title}
              description={simpleDescription.simpleDescription}
              id={id}
            />
          );
        })}
        <PlaceholderLinks>
          <PlaceholderLink text="Sign Up" href="https://www.google.com/url?q=https%3A%2F%2Fnbk.inthefight.org%2Fjoinus&sa=D&sntz=1&usg=AFQjCNHMbRtqUWbxzfTS_XspVULOupVc3Q" />
          <PlaceholderLink text="Events" href="https://www.google.com/url?q=https%3A%2F%2Fwww.mobilize.us%2Finthefight%2F&sa=D&sntz=1&usg=AFQjCNHOq_AcEGktJAG9m-jgt-UpCBmpmw" />
          {/* TODO: <PlaceholderLink text="Resources" href="/resources" /> */}
        </PlaceholderLinks>
      </Layout>
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.node.isRequired,
};

export default IndexPage;

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
  }
`;
