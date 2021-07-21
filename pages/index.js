import React from 'react';

import Nav from '../components/nav';
import Page from '../layouts/main';
import { getString } from '../metadata/strings';

export default () => (
  <Page>
    <Nav />
    <div className="hero-text title">{ getString('homepage.title') }</div>
    <div className="hero-text subtitle">
      <span className="sub-1">
        { getString('homepage.line1') }
        {'\u00A0'}
        /
      </span>
      <span className="sub-2">
        { getString('homepage.line2') }
        {'\u00A0'}
        /
      </span>
      <span className="sub-3">
        { getString('homepage.line3') }
      </span>
    </div>
  </Page>
);
