import { 
  setDefaultTimeout, 
  Before, 
  After, 
  AfterAll 
} from '@cucumber/cucumber';
import { CustomWorld } from './custom-world';
import { generateReport } from '../../utils/reporter'; // Adjusted path

setDefaultTimeout(30000);

Before(async function (this: CustomWorld) {
  await this.initBrowser();
});

After(async function (this: CustomWorld) {
  await this.closeBrowser();
});

AfterAll(async function() {
  try {
    await generateReport();
  } catch (error) {
    console.error('Failed to generate report:', error);
    throw error; // This will fail the test run if report generation fails
  }
});