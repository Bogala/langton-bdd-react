@source ./App.feature.impl.ts
Feature: Langton ant workspace

  Scenario: My title show time to the second
    Given I am on the application
     When I wait some ticks
     Then Time as changed

  Scenario: I want to initiate a grid and an ant when started
     When I launch app
     Then I have a table with 21 lines, each line have 21 cells and my ant is at the middle