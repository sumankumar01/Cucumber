package CucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//feature
@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/features",
		glue="StepDefinitions"
		)
public class TestRunner {

}
