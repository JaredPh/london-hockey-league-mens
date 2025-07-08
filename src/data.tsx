export const divisionGrades = {
  "P": { league: "P", tier: 4 },
  "1": { league: "1", tier: 5 },
  "2N": { league: "2", tier: 6 },
  "2S": { league: "2", tier: 6 },
  "3N": { league: "3", tier: 7 },
  "3S": { league: "3", tier: 7 },
  "4E": { league: "4", tier: 8 },
  "4NW": { league: "4", tier: 8 },
  "4SW": { league: "4", tier: 8 },
  "5E": { league: "5", tier: 9 },
  "5NW": { league: "5", tier: 9 },
  "5SW": { league: "5", tier: 9 },
  "6E": { league: "6", tier: 10 },
  "6NW": { league: "6", tier: 10 },
  "6SW": { league: "6", tier: 10 },
} as const

export type Divisions = keyof typeof divisionGrades
type Leagues = typeof divisionGrades[Divisions]["league"]
type Tier = typeof divisionGrades[Divisions]["tier"]

export const divisions = Object.keys(divisionGrades) as Divisions[]
export const leagues = Object.values(divisionGrades).map(({ league }) => league) as Leagues[]
export const tiers = Object.values(divisionGrades).map(({ tier }) => tier) as Tier[]

type Team = {
  name: string
  division: Divisions
}

type Club = {
  name: string
  logo: string | null
  teams: Team[]
}

type Data = {
  clubs: Club[]
}

export const data: Data = {
  clubs: [
    {
      name: "Ashford",
      logo: "/clubs/ashford.jpg",
      teams: [
        {
          name: "M1",
          division: "1"
        },
        {
          name: "M2",
          division: "5NW"
        },
        {
          name: "M3",
          division: "6NW"
        }
      ]
    },
    {
      name: "Barnes",
      logo: "/clubs/barnes.jpg",
      teams: [
        {
          name: "Accidentals",
          division: "5SW"
        },
        {
          name: "Beavers",
          division: "6SW"
        },
        {
          name: "M1",
          division: "P"
        },
        {
          name: "M2",
          division: "2N"
        },
        {
          name: "M3",
          division: "3S"
        },
        {
          name: "M4",
          division: "4SW"
        }
      ]
    },
    {
      name: "Bromley & Beckenham",
      logo: "/clubs/bromley_beckenham.jpg",
      teams: [
        {
          name: "M2",
          division: "2S"
        },
        {
          name: "M3",
          division: "2S"
        },
        {
          name: "M4",
          division: "5E"
        },
        {
          name: "M6",
          division: "6E"
        },
        {
          name: "M5",
          division: "5E"
        }
      ]
    },
    {
      name: "Cheam",
      logo: "/clubs/cheam.jpg",
      teams: [
        {
          name: "M1",
          division: "3S"
        },
        {
          name: "M2",
          division: "5SW"
        }
      ]
    },
    {
      name: "Crostyx",
      logo: "/clubs/crostyx.jpg",
      teams: [
        {
          name: "M1",
          division: "2N"
        },
        {
          name: "M2",
          division: "3N"
        }
      ]
    },
    {
      name: "Croydon Trinity Whitgiftian",
      logo: "/clubs/croydon_trinity_whitgiftian.jpg",
      teams: [
        {
          name: "M1",
          division: "1"
        }
      ]
    },
    {
      name: "Ealing",
      logo: "/clubs/ealing.jpg",
      teams: [
        {
          name: "M1",
          division: "5NW"
        },
        {
          name: "M2",
          division: "6NW"
        }
      ]
    },
    {
      name: "East London",
      logo: "/clubs/east_london.jpg",
      teams: [
        {
          name: "M1",
          division: "1"
        },
        {
          name: "M2",
          division: "3N"
        },
        {
          name: "M3",
          division: "4E"
        },
        {
          name: "M4",
          division: "4E"
        },
        {
          name: "M5",
          division: "5E"
        },
        {
          name: "M6",
          division: "5E"
        },
        {
          name: "M7",
          division: "6E"
        },
        {
          name: "M8",
          division: "6E"
        }
      ]
    },
    {
      name: "Epsom",
      logo: "/clubs/epsom.jpg",
      teams: [
        {
          name: "M1",
          division: "P"
        },
        {
          name: "M2",
          division: "3S"
        },
        {
          name: "M3",
          division: "4SW"
        },
        {
          name: "M4",
          division: "5SW"
        },
        {
          name: "Mustangs",
          division: "5SW"
        }
      ]
    },
    {
      name: "HAC",
      logo: "/clubs/hac.jpg",
      teams: [
        {
          name: "Gunners",
          division: "2S"
        },
        {
          name: "Sutlers",
          division: "3S"
        }
      ]
    },
    {
      name: "Hampstead & West",
      logo: "/clubs/hampstead_west.jpg",
      teams: [
        {
          name: "Colts",
          division: "5NW"
        },
        {
          name: "Spaniards",
          division: "5NW"
        },
        {
          name: "M3",
          division: "2S"
        },
        {
          name: "M4",
          division: "2N"
        },
        {
          name: "Thirsts",
          division: "4NW"
        },
        {
          name: "Zaks",
          division: "2N"
        }
      ]
    },
    {
      name: "Harrow",
      logo: "/clubs/harrow.jpg",
      teams: [
        {
          name: "M1",
          division: "4NW"
        },
        {
          name: "M2",
          division: "6NW"
        },
        {
          name: "M3",
          division: "6NW"
        }
      ]
    },
    {
      name: "Honor Oak",
      logo: "/clubs/honor_oak.jpg",
      teams: [
        {
          name: "M1",
          division: "1"
        },
        {
          name: "M2",
          division: "4E"
        },
        {
          name: "M3",
          division: "5E"
        },
        {
          name: "M4",
          division: "6E"
        },
        {
          name: "M5",
          division: "6E"
        }
      ]
    },
    {
      name: "Indian Gymkhana",
      logo: "/clubs/indian_gymkhana.jpg",
      teams: [
        {
          name: "M2",
          division: "1"
        },
        {
          name: "M3",
          division: "3N"
        },
        {
          name: "M4",
          division: "4SW"
        },
        {
          name: "M5",
          division: "5NW"
        }
      ]
    },
    {
      name: "London Academicals",
      logo: "/clubs/london_academicals.jpg",
      teams: [
        {
          name: "M1",
          division: "1"
        },
        {
          name: "M2",
          division: "3S"
        },
        {
          name: "M3",
          division: "5E"
        },
        {
          name: "M4",
          division: "6E"
        }
      ]
    },
    {
      name: "London Edwardians",
      logo: "/clubs/london_edwardians.jpg",
      teams: [
        {
          name: "M1",
          division: "P"
        },
        {
          name: "M2",
          division: "2S"
        },
        {
          name: "M3",
          division: "2S"
        },
        {
          name: "M4",
          division: "4E"
        },
        {
          name: "M5",
          division: "5E"
        }
      ]
    },
    {
      name: "London Gamblers",
      logo: "/clubs/london_gamblers.jpeg",
      teams: [
        {
          name: "M1",
          division: "3S"
        },
        {
          name: "M2",
          division: "5SW"
        }
      ]
    },
    {
      name: "London Royals",
      logo: "/clubs/london_royals.jpg",
      teams: [
        {
          name: "M1",
          division: "3N"
        },
        {
          name: "M2",
          division: "5E"
        },
        {
          name: "M3",
          division: "6E"
        },
        {
          name: "M4",
          division: "6E"
        }
      ]
    },
    {
      name: "London Wayfarers",
      logo: "/clubs/london_wayfarers.jpg",
      teams: [
        {
          name: "Barbarians",
          division: "5SW"
        },
        {
          name: "Knights",
          division: "4SW"
        },
        {
          name: "M2",
          division: "P"
        },
        {
          name: "M3",
          division: "3S"
        },
        {
          name: "Outlaws",
          division: "3S"
        },
        {
          name: "Pirates",
          division: "5E"
        },
        {
          name: "Vikings",
          division: "3N"
        }
      ]
    },
    {
      name: "Merton",
      logo: "/clubs/merton.jpg",
      teams: [
        {
          name: "M1",
          division: "4SW"
        },
        {
          name: "M2",
          division: "6SW"
        },
        {
          name: "M3",
          division: "6SW"
        }
      ]
    },
    {
      name: "NPL",
      logo: "/clubs/npl.jpg",
      teams: [
        {
          name: "M1",
          division: "6SW"
        },
        {
          name: "M2",
          division: "6SW"
        }
      ]
    },
    {
      name: "Old Cranleighan",
      logo: "/clubs/old_cranleighan.jpg",
      teams: [
        {
          name: "M1",
          division: "P"
        },
        {
          name: "M2",
          division: "2S"
        },
        {
          name: "M3",
          division: "4SW"
        },
        {
          name: "Samurai",
          division: "6SW"
        },
        {
          name: "Warriors",
          division: "5SW"
        }
      ]
    },
    {
      name: "Old Haberdashers",
      logo: "/clubs/old_haberdashers.jpg",
      teams: [
        {
          name: "M1",
          division: "5NW"
        }
      ]
    },
    {
      name: "Old Kingstonian",
      logo: "/clubs/old_kingstonian.jpg",
      teams: [
        {
          name: "M1",
          division: "5SW"
        },
        {
          name: "M2",
          division: "6SW"
        }
      ]
    },
    {
      name: "Old Merchant Taylors",
      logo: "/clubs/old_merchant_taylors.jpg",
      teams: [
        {
          name: "M1",
          division: "1"
        },
        {
          name: "M2",
          division: "3N"
        },
        {
          name: "M3",
          division: "4NW"
        },
        {
          name: "M4",
          division: "6NW"
        }
      ]
    },
    {
      name: "Old Tonbridgians",
      logo: null,
      teams: [
        {
          name: "M1",
          division: "3S"
        }
      ]
    },
    {
      name: "Osterley",
      logo: "/clubs/osterley.jpg",
      teams: [
        {
          name: "M1",
          division: "4NW"
        }
      ]
    },
    {
      name: "PHC Chiswick",
      logo: "/clubs/phc_chiswick.jpg",
      teams: [
        {
          name: "M1",
          division: "1"
        },
        {
          name: "M2",
          division: "3N"
        },
        {
          name: "M3",
          division: "4NW"
        },
        {
          name: "M4",
          division: "4NW"
        },
        {
          name: "M5",
          division: "5NW"
        },
        {
          name: "M6",
          division: "6NW"
        }
      ]
    },
    {
      name: "Purley Walcountians",
      logo: "/clubs/purley_walcountians.jpg",
      teams: [
        {
          name: "M1",
          division: "P"
        },
        {
          name: "M2",
          division: "3S"
        }
      ]
    },
    {
      name: "Richmond",
      logo: "/clubs/richmond.jpg",
      teams: [
        {
          name: "Deerstalkers",
          division: "4NW"
        },
        {
          name: "Griffins",
          division: "2N"
        },
        {
          name: "M2",
          division: "P"
        },
        {
          name: "M3",
          division: "2N"
        },
        {
          name: "Redoubtables",
          division: "6NW"
        },
        {
          name: "Stags",
          division: "5NW"
        }
      ]
    },
    {
      name: "Southgate",
      logo: "/clubs/southgate.jpg",
      teams: [
        {
          name: "M3",
          division: "1"
        },
        {
          name: "M4",
          division: "2N"
        },
        {
          name: "M5",
          division: "3N"
        },
        {
          name: "M6",
          division: "5NW"
        },
        {
          name: "M7",
          division: "6NW"
        }
      ]
    },
    {
      name: "Spencer",
      logo: "/clubs/spencer.jpg",
      teams: [
        {
          name: "Titans",
          division: "5SW"
        },
        {
          name: "Harlequins",
          division: "6SW"
        },
        {
          name: "Hurricanes",
          division: "4SW"
        },
        {
          name: "M2",
          division: "P"
        },
        {
          name: "M3",
          division: "2S"
        },
        {
          name: "M4",
          division: "2N"
        },
        {
          name: "M5",
          division: "2S"
        },
        {
          name: "M6",
          division: "4E"
        }
      ]
    },
    {
      name: "Surbiton",
      logo: "/clubs/surbiton.jpg",
      teams: [
        {
          name: "Athletics",
          division: "4SW"
        },
        {
          name: "Cobras",
          division: "6SW"
        },
        {
          name: "M3",
          division: "1"
        },
        {
          name: "M4",
          division: "2S"
        },
        {
          name: "Mongooses",
          division: "6SW"
        },
        {
          name: "Originals",
          division: "4SW"
        },
        {
          name: "Sparticans",
          division: "5SW"
        }
      ]
    },
    {
      name: "Teddington",
      logo: "/clubs/teddington.jpg",
      teams: [
        {
          name: "M2",
          division: "P"
        },
        {
          name: "M3",
          division: "2N"
        },
        {
          name: "M4",
          division: "3N"
        },
        {
          name: "M6",
          division: "6SW"
        },
        {
          name: "Oaks",
          division: "5SW"
        }
      ]
    },
    {
      name: "Tulse Hill & Dulwich",
      logo: "/clubs/tulse_hill_dulwich.jpg",
      teams: [
        {
          name: "M1",
          division: "P"
        },
        {
          name: "M2",
          division: "2S"
        },
        {
          name: "M3",
          division: "3S"
        },
        {
          name: "M4",
          division: "4E"
        },
        {
          name: "M5",
          division: "4E"
        },
        {
          name: "M6",
          division: "5E"
        },
        {
          name: "M7",
          division: "6E"
        },
        {
          name: "M8",
          division: "6E"
        }
      ]
    },
    {
      name: "Wanderers",
      logo: "/clubs/wanderers.jpg",
      teams: [
        {
          name: "M1",
          division: "2N"
        },
        {
          name: "M2",
          division: "3N"
        },
        {
          name: "M3",
          division: "4E"
        },
        {
          name: "M4",
          division: "4SW"
        },
        {
          name: "M5",
          division: "4E"
        },
        {
          name: "M6",
          division: "4SW"
        }
      ]
    },
    {
      name: "Wapping",
      logo: "/clubs/wapping.jpg",
      teams: [
        {
          name: "Doctors",
          division: "5E"
        },
        {
          name: "M1",
          division: "P"
        },
        {
          name: "M2",
          division: "1"
        },
        {
          name: "M3",
          division: "2N"
        },
        {
          name: "M4",
          division: "4E"
        },
        {
          name: "M5",
          division: "4NW"
        },
        {
          name: "M6",
          division: "4E"
        },
        {
          name: "M7",
          division: "5E"
        },
        {
          name: "M8",
          division: "6E"
        }
      ]
    },
    {
      name: "West Hampstead",
      logo: "/clubs/west_hampstead.jpg",
      teams: [
        {
          name: "M1",
          division: "1"
        },
        {
          name: "M2",
          division: "2N"
        },
        {
          name: "M3",
          division: "3N"
        },
        {
          name: "M4",
          division: "4NW"
        },
        {
          name: "M5",
          division: "4E"
        },
        {
          name: "M6",
          division: "4NW"
        },
        {
          name: "M7",
          division: "5NW"
        },
        {
          name: "M8",
          division: "6NW"
        },
        {
          name: "M9",
          division: "6NW"
        }
      ]
    },
    {
      name: "West Herts",
      logo: "/clubs/west_herts.jpg",
      teams: [
        {
          name: "M1",
          division: "P"
        },
        {
          name: "M2",
          division: "3N"
        },
        {
          name: "M3",
          division: "4NW"
        },
        {
          name: "M4",
          division: "5NW"
        }
      ]
    },
    {
      name: "Wimbledon",
      logo: "/clubs/wimbledon.jpg",
      teams: [
        {
          name: "M3",
          division: "2S"
        },
        {
          name: "M4",
          division: "3S"
        },
        {
          name: "M5",
          division: "4SW"
        },
        {
          name: "M6",
          division: "5SW"
        }
      ]
    },
    {
      name: "Winchmore Hill & Enfield",
      logo: "/clubs/winchmore_hill_enfield.png",
      teams: [
        {
          name: "M1",
          division: "4NW"
        },
        {
          name: "M2",
          division: "6NW"
        }
      ]
    }
  ]
}