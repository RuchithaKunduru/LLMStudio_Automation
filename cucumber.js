// module.exports = {
//   default: {
//     require: ["test/steps/**/*.ts --require test/support/**/*.ts"],
//     format: ["json:reports/report.json"],
//     requireModule: ["ts-node/register"],
//     paths: ["test/features/**/*.feature"], 
//     // publishQuiet: true
//   }
// };
module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require test/steps/**/*.ts',
    '--require test/support/**/*.ts',
    '--format json:test/test-results/report.json', 
    // '--publish-quiet',
    'test/features/**/*.feature'
  ].join(' ')
};
