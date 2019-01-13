import React from 'react';
import Layout from '../layouts/index';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Página Não Encontrada (404)</h1>
        <p>Ooops, essa página não existe!</p>
      </Layout>
    );
  }
}

export default NotFoundPage;
