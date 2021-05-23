import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';

function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <ProductHowItWorks />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
