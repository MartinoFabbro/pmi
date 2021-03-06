import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "pmi",
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  puppeteerLaunchOptions: { executablePath: '/opt/google/chrome/chrome', args: ['--no-sandbox', '--disable-setuid-sandbox'] },
  routes: {
  }
};