import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithLayout = ({ layout: Layout, component: Component, layoutProps, ...rest } ) => {

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout {...layoutProps}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};


export default RouteWithLayout;
