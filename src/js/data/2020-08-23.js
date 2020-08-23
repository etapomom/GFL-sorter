dataSetVersion = "2020-08-23"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by weapon class",
    key: "weapon",
    tooltip: "Check this to restrict the sorter to specified weapon classes.",
    checked: false,
    sub: [
      { name: "Handguns", tooltip: "peashooters", key: "hg" },
      { name: "Submachine Guns", tooltip: "run n gun", key: "smg" },
      { name: "Assault Rifles", tooltip: "say hello to my little friend", key: "SoEW" },
      { name: "Rifles", tooltip: "taking the shot", key: "PoDD" },
      { name: "Machine Guns", tooltip: "get to the chopper", key: "LLS" },
      { name: "Shotguns", tooltip: "boomsticks", key: "MS" },
    ]
  },
  {
    name: "Filter by rarity",
    key: "rarity",
    tooltip: "Check this to restrict the sorter to specified weapon rarities.",
    checked: false,
    sub: [ 
	  { name: "General", tooltip: "2-Star T-Dolls", key: "2star" }, 
	  { name: "Rare", tooltip: "3-Star T-Dolls", key: "3star" }, 
	  { name: "Epochal", tooltip: "4-Star T-Dolls", key: "4star" }, 
	  { name: "Legendary", tooltip: "5-Star T-Dolls", key: "5star" },
	  { name: "Extra", tooltip: "Collab T-Dolls", key: "extra", checked: false },
    ]
  },
  {
    name: "Remove Neural Upgrades",
    key: "mod3",
    tooltip: "Check this to remove MOD 3 T-Dolls.",
	checked: true
  },
  {
    name: "Remove Non-Neural Upgraded Dolls",
    key: "nomod",
    tooltip: "Check this to remove unmodded T-Dolls that have a Neural Upgrade available.",
	checked: false
  },
  {
    name: "Remove Dolls not released in EN",
    key: "noten",
    tooltip: "Check this to remove T-Dolls that are yet to be released in the global server.",
	checked: false
  },
  {
    name: "Remove Non-Dolls",
    key: "noguns",
    tooltip: "Check this to remove all non-Doll characters."
	checked: true
  },
  {
    name: "Remove Sangvis Ferri",
    key: "sangvis",
    tooltip: "Check this to remove all Sangvis Ferri characters.",
    checked: false
  },
  {
    name: "Remove Non-girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters.",
    checked: true
  }
];

dataSet[dataSetVersion].characterData = [
	
	{
		name: "Colt Revolver",
		img: "o1obAVw.png",
		opts: 
		{
			weapon: [ "hg" ],
			rarity: [ "4star" ],
			nomod: true
		}
	},
	
	{
		name: "Colt Revolver MOD 3",
		img: "KQLKGjd.png",
		opts: 
		{
			weapon: [ "hg" ],
			rarity: [ "5star" ],
			mod3: true
		}
	},
	
	{
		name: "M1911",
		img: "sf4cMqU.png",
		opts: 
		{
			weapon: [ "hg" ],
			rarity: [ "2star" ],
			nomod: true
		}
	},
	
	{
		name: "M1911 MOD 3",
		img: "MYY35pX.png", 
		opts: 
		{
			weapon: [ "hg" ],
			rarity: [ "4star" ],
			mod3: true
		}
	},
	
	{
		name: "M9",
		img: "GeRHGff.png", 
		opts: 
		{
			weapon: [ "hg" ],
			rarity: [ "3star" ]
		}
	},
	
	{
		name: "Python",
		img: "taFMvkw.png", 
		opts: 
		{
			weapon: [ "hg" ],
			rarity: [ "5star" ]
		}
	},
	
	{
		name: "Nagant Revolver",
		img: "5DJRMLq.png", 
		opts: 
		{
			weapon: [ "hg" ],
			rarity: [ "3star" ],
			nomod: true
		}
	},
	
	{
		name: "Nagant Revolver MOD 3",
		img: "7IjHEYi.png", 
		opts: 
		{
			weapon: [ "hg" ],
			rarity: [ "3star" ]
			mod3: true
		}
	},
	
	{
		name: "Tokarev",
		img: "QV5lkhZ.png", 
		opts: 
		{
			weapon: [ "hg" ],
			rarity: [ "3star" ]
		}
	},
	
	{
		name: "Stechkin",
		img: "YYbkJNn.png", 
		opts: 
		{
			weapon: [ "hg" ],
			rarity: [ "3star" ],
			nomod: true
		}
	},
	
	{
		name: "Stechkin MOD 3",
		img: "YaC3EaL.png", 
		opts: 
		{
			weapon: [ "hg" ],
			rarity: [ "3star" ]
			mod3: true,
			noten: true
		}
	},
	
	{
		name: "Makarov",
		img: "swHCQzu.png", 
		opts: 
		{
			weapon: [ "hg" ],
			rarity: [ "3star" ]
		}
	},
	
	{
		name: "P38",
		img: "wxiOGCf.png", 
		opts: 
		{
			weapon: [ "hg" ],
			rarity: [ "2star" ]
		}
	},
	
	{
		name: "PPK",
		img: "Icgkhjo.png", 
		opts: 
		{
			weapon: [ "hg" ],
			rarity: [ "2star" ]
		}
	},
];
