const reporter = require('multiple-cucumber-html-reporter');
import path from 'path';

export async function generateReport(): Promise<void> {
  try {
    // Ensure output directories exist
    const jsonDir = path.join(process.cwd(), 'test/test-results');
    const reportPath = path.join(process.cwd(), 'reports/html');

    (reporter as any).generate({
      jsonDir: 'test/test-results',
      reportPath: 'test/test-report',
      metadata: {
        browser: {
          name: 'chrome',
          version: 'latest'
        },
        device: 'Local machine',
        platform: {
          name: 'Windows',
          version: '11'
        }
      },
      customData: {
        title: 'Test Report',
        data: [
          { label: 'Project', value: 'Playwright-Cucumber Framework' },
          { label: 'Release', value: '1.0.0' },
          { label: 'Execution Start Time', value: new Date().toLocaleString() }
        ]
      }
    });
    
    console.log('✅ HTML report generated successfully');
  } catch (error) {
    console.error('❌ Failed to generate report:', error);
    process.exit(1); // Exit with error code if report generation fails
  }
}

// Execute the report generation
generateReport();