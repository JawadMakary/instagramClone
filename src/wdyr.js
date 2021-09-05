import React from 'react';
// patches React to notify you about potentially avoidable re-renders. (Works with React Native as well.)
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
      
    trackAllPureComponents: true,
  });
