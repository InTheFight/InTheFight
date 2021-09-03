import React from 'react';
import PropTypes from 'prop-types';

import renderHTML from 'react-render-html';
import Layout from './layout';
import Title from '../components/atoms/title';

export default function BlogPost({ pageContext: { post } }) {
  return (
    <Layout>
      <section>
        <Title text={post.title} />
        <div>
          {renderHTML(post.content)}
        </div>
      </section>
    </Layout>
  );
}

BlogPost.propTypes = {
  pageContext: PropTypes.instanceOf(Object).isRequired,
};
