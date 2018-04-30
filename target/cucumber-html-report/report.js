$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User login with username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Cards should display",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 103988910,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_login_with_username_and_password()"
});
formatter.result({
  "duration": 17493,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 15786,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.cards_should_display()"
});
formatter.result({
  "duration": 18346,
  "status": "passed"
});
});