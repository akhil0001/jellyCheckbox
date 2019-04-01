import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'jelly-checkbox',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  globalStyle: 'src/global/variables.css'
};
