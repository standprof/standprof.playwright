const config = {
    paths: ['tests/features/**/*.feature'],
    require: ['tests/steps/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'summary',
      'progress-bar',
      `json:tests/report/report.json`
    ],
    formatOptions: { snippetInterface: 'async-await' },
    publishQuiet: true,
  };

module.exports = {
   default: config,
   format: ['html:cucumber-report.html']
 }
