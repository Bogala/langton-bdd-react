@source ./App.feature.impl.ts
Feature: Langton ant workspace

  Scenario: My title show time to the second
    Given I am on the application
     When I wait some ticks
     Then Time as changed 

  Scenario: My initial conditions
     When I launch application
     Then I have a grid with 21 lines, 21 cells each line and an ant at the middle