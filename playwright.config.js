// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';


const config =({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  projects: [
    { use: {
    browserName: 'chromium',  
    headless: false,
    screenshot: 'on',
    trace:'on',
   
  } },
  ],
  });
export default (config);
