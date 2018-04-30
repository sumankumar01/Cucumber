package CucumberOptions;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//feature
@RunWith(Cucumber.class)

@CucumberOptions(

		plugin = { "html:target/cucumber-html-report",
		        "json:target/cucumber.json", "pretty:target/cucumber-pretty.txt",
		        "usage:target/cucumber-usage.json", "junit:target/cucumber-results.xml" },
		
		
		features="src/test/java/features",
		glue="StepDefinitions"
		)
public class TestRunner {
	
	
}
