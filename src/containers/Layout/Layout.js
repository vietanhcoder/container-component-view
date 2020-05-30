import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Layout, Spin } from 'antd';

import LayoutHeader from './LayoutHeader';
import LayoutFooter from './LayoutFooter';
import LayoutSideBar from './LayoutSideBar';

// config routes
import routes from '../../routes';

const { Content } = Layout;

const DefaultLayout = () => {
  return (
    <Layout id="components-layout-demo-custom-trigger">
      <LayoutSideBar />
      <Layout className="site-layout">
        <LayoutHeader />
        <Content className="site-layout-background dashboard__content">
          <Suspense fallback={<Spin size="large" />}>
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.extract}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
              <Redirect from="/" to="/dashboard" />
            </Switch>
          </Suspense>
        </Content>
        <LayoutFooter />
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
