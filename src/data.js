import barcelona from "./assets/barcelona.png";
import realMadrid from "./assets/Real_Madrid_CF.svg.png";
import bayernMunich from "./assets/bayern.png";
import manchesterCity from "./assets/mancity.png";
import parisSaintGermain from "./assets/paris.jpg";
import arsenal from "./assets/arsenal.png";

export const teamLogos = {
  barcelona,
  realMadrid,
  bayernMunich,
  manchesterCity,
  parisSaintGermain,
  arsenal,
};

export const teamsData = [
  {
    id: 1,
    name: "FC Barcelona",
    logo: teamLogos.barcelona,
    squad: {
      attackers: [
        "Lamine Yamal",
        "Robert Lewandowski",
        "Raphinha",
        "Ferran Torres",
      ],
      midfielders: [
        "Gavi",
        "Pedri",
        "Frenkie de Jong",
        "Dani Olmo",
        "Bernal",
        "Fermin lopez",
      ],
      defenders: [
        "Ronald Araújo",
        "Jules Koundé",
        "Pau Cubarsí",
        "Alejandro Balde",
        "Gerard Martin",
        "Andreas Christensen",
      ],
    },
    trophies: {
      domesticLeagues: 27,
      championsLeagues: 5,
      domesticCups: 31,
    },
  },
  {
    id: 2,
    name: "Real Madrid",
    logo: teamLogos.realMadrid,
    squad: {
      attackers: [
        "Kylian Mbappé",
        "Vinícius Jr.",
        "Rodrygo",
        "Endrick",
        "Mastantuono",
      ],
      midfielders: [
        "Jude Bellingham",
        "Federico Valverde",
        "Aurélien Tchouaméni",
        "Eduardo Camavinga",
        "Brahim Díaz",
        "Thiago Pitarch",
      ],
      defenders: [
        "Antonio Rüdiger",
        "Dani Carvajal",
        "Éder Militão",
        "Ferland Mendy",
        "David Alaba",
        "Carreras",
        "Asencio",
        "Trent Alexander-Arnold",
        "Dean huijsen",
      ],
    },
    trophies: {
      domesticLeagues: 36,
      championsLeagues: 15,
      domesticCups: 20,
    },
  },
  {
    id: 3,
    name: "Manchester City",
    logo: teamLogos.manchesterCity,
    squad: {
      attackers: [
        "Erling Haaland",
        "Phil Foden",
        "Jeremy Doku",
        "Omar Marmoush",
        "Savinho",
        "Cherki",
      ],
      midfielders: [
        "Rodri",
        "Bernardo Silva",
        "Kovacic",
        "Nico González",
        "O'reily",
      ],
      defenders: [
        "Rúben Dias",
        "John Stones",
        "Matheus Nunes",
        "Josko Gvardiol",
        "Ryan Ait-nouri",
        " Marc Guehi",
      ],
    },
    trophies: {
      domesticLeagues: 10,
      championsLeagues: 1,
      domesticCups: 7,
    },
  },
  {
    id: 4,
    name: "Bayern Munich",
    logo: teamLogos.bayernMunich,
    squad: {
      attackers: ["Harry Kane", "Leroy Sané", "Michael Olise", "Serge Gnabry"],
      midfielders: [
        "Jamal Musiala",
        "Joshua Kimmich",
        "João Palhinha",
        "Leon Goretzka",
        "Pavlovic",

      ],
      defenders: [
        "Dayot Upamecano",
        "Kim Min-jae",
        "Alphonso Davies",
        "Tah",
        "Laimer",
        "Stanisic"
      ],
    },
    trophies: {
      domesticLeagues: 33,
      championsLeagues: 6,
      domesticCups: 20,
    },
  },
  {
    id: 5,
    name: "Paris Saint-Germain",
    logo: teamLogos.parisSaintGermain,
    squad: {
      attackers: [
        "Ousmane Dembélé",
        "Bradley Barcola",
        "Gonçalo Ramos",
        "Desire Doue",
        "Kvicha Kvarateskhelia",
      ],
      midfielders: [
        "Vitinha",
        "Warren Zaïre-Emery",
        "João Neves",
        "Fabian Ruiz",
        "Mayulu"
      ],
      defenders: [
        "Achraf Hakimi",
        "Marquinhos",
        "Lucas Beraldo",
        "Nuno Mendes",
        "Pacho"
        
      ],
    },
    trophies: {
      domesticLeagues: 12,
      championsLeagues: 0,
      domesticCups: 15,
    },
  },
  {
    id: 6,
    name: "Arsenal",
    logo: teamLogos.arsenal,
    squad: {
      attackers: [
        "Bukayo Saka",
        "Gabriel Martinelli",
        "Kai Havertz",
        "Gabriel Jesus",
        "Victor Gyokeres"
      ],
      midfielders: [
        "Martin Ødegaard",
        "Declan Rice",
        "Thomas Partey",
        "Mikel Merino",
        "Eze"
      ],
      defenders: [
        "William Saliba",
        "Gabriel Magalhães",
        "Ben White",
        "Jurriën Timber",
        "Calafiori",
        "Mosquera",
        
      ],
    },
    trophies: {
      domesticLeagues: 13,
      championsLeagues: 0,
      domesticCups: 14,
    },
  },
];
