dataSetVersion = "2020-08-22"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = 
[
	{
		name: "Filter by weapon class",
		key: "weapon",
		tooltip: "Check this to restrict the sorter to specified weapon classes.",
		checked: false,
		sub: 
		[
			{ name: "Handguns", 		tooltip: "peashooters", 					key: "hg" 	},
			{ name: "Submachine Guns", 	tooltip: "run n gun", 						key: "smg" 	},
			{ name: "Assault Rifles", 	tooltip: "say hello to my little friend", 	key: "ar" 	},
			{ name: "Rifles", 			tooltip: "taking the shot", 				key: "rf" 	},
			{ name: "Machine Guns", 	tooltip: "get to the chopper", 				key: "mg" 	},
			{ name: "Shotguns", 		tooltip: "boomsticks", 						key: "sg" 	},
		]
	},
	
	{
		name: "Filter by rarity",
		key: "rarity",
		tooltip: "Check this to restrict the sorter to specified weapon rarities.",
		checked: false,
		sub: 
		[ 
			{ name: "General", 		tooltip: "2-Star T-Dolls", key: "2star" }, 
			{ name: "Rare", 		tooltip: "3-Star T-Dolls", key: "3star" }, 
			{ name: "Epochal", 		tooltip: "4-Star T-Dolls", key: "4star" }, 
			{ name: "Legendary", 	tooltip: "5-Star T-Dolls", key: "5star" },
			{ name: "Extra", 		tooltip: "Collab T-Dolls", key: "extra" },
		]
	},
	
	{
		name: "Neural Upgrades (Select at least one)",
		key: "mod3",
		tooltip: "Should MOD3 T-Dolls appear?"
		sub:
		[
			{ name: "Remove MOD3s",		key: "modded" 	},
			{ name: "Remove non-MOD3s",	key: "unmodded" },
	},
	
	{
		name: "Remove Dolls unreleased in EN",
		key: "noten",
		tooltip: "Check this to remove T-Dolls that are yet to be released in the global server."
	},
	
	{
		name: "Remove Sangvis Ferri",
		key: "sangvis",
		tooltip: "See you in hell, Sangvis scum!"
	},
	
	{
		name: "Remove non-Dolls",
		key: "human",
		tooltip: "I'm not a robot."
	}
];

dataSet[dataSetVersion].characterData = [
	
	{
		name: "Colt Revolver",
		img: "o1obAVw.png",
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '4star' ],
			mod3:	[ 'unmodded' ]
		}
	},
	
	{
		name: "Colt Revolver MOD 3",
		img: "KQLKGjd.png",
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '5star' ],
			mod3:	[ 'modded' ]
		}
	},
	
	{
		name: "M1911",
		img: "sf4cMqU.png",
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '2star' ],
			mod3:	[ 'unmodded' ]
		}
	},
	
	{
		name: "M1911 MOD 3",
		img: "MYY35pX.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '4star' ],
			mod3:	[ 'modded' ]
		}
	},
	
	{
		name: "M9",
		img: "GeRHGff.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "Python",
		img: "taFMvkw.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '5star' ]
		}
	},
	
	{
		name: "Nagant Revolver",
		img: "5DJRMLq.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ],
			mod3:	[ 'unmodded' ]
		}
	},
	
	{
		name: "Nagant Revolver MOD 3",
		img: "7IjHEYi.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ],
			mod3:	[ 'modded' ]
		}
	},
	
	{
		name: "Tokarev",
		img: "QV5lkhZ.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "Stechkin",
		img: "YYbkJNn.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ],
			mod3:	[ 'modded' ]
		}
	},
	
	{
		name: "Stechkin MOD 3",
		img: "YaC3EaL.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ],
			mod3:	[ 'modded' ],
			noten: 	true
		}
	},
	
	{
		name: "Makarov",
		img: "swHCQzu.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "P38",
		img: "wxiOGCf.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '2star' ]
		}
	},
	
	{
		name: "PPK",
		img: "Icgkhjo.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '2star' ]
		}
	}
];
