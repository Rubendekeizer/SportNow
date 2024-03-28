import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run sport-now:serve:development',
        production: 'nx run sport-now:serve:production',
      },
      ciWebServerCommand: 'nx run sport-now:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
