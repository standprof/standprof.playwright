
## Configure Cucumber in VS Code

- Install the extension [Cucumber for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=CucumberOpen.cucumber-official)
- Update `settings.json` based on the guidelines from the extension, in  particular, add the following (your paths to feature or steps files may differ):
	```
	 "cucumber.features": [
        "tests/features/**/*.feature",    
    ],
    "cucumber.glue": [               
        "tests/steps/**/*.ts",       
      ],
	```	
- Restart Vs Code. Now you will be able to use Cucumber.

## Commands
- To run tests, run:

   `npx cucumber-js`

- To generate HTML report and see it, run:
  
  `node report.js`

#### References
https://www.npmjs.com/package/cucumber-html-reporter

