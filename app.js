//Class for obtaining the users in the database
const Reader = require("./lib/utils/Reader");
//Classes for giving services using the explorers in the database
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");


//List of esplorers
const explorers = Reader.readJsonFile("explorers.json"); 


// Verifying explorers by mission, amount of explorers in mission and their usernames
const explorersByMission = ExplorerService.filterByMission(explorers, "node");
const amountOfExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
const usernamesOfExplorersByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");


//Validating correct application of Fizz, Buzz and Fizzbuzz depending on the given logic to implement 
const explorer1 = {name: "Explorer1", score: 1}
const validation1 = FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3}
const validation2 = FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5}
const validation3 = FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15}
const validation4 = FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}


