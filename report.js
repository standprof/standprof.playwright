var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'tests/report/report.json',
        output: 'tests/report/report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
        },
        failedSummaryReport: true,
    };

    reporter.generate(options);
