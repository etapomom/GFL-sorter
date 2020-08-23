dataSetVersion = "2020-08-22"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = 
[
	{
		name: "Filter by Weapon Class",
		key: "weapon",
		tooltip: "Check this to restrict the sorter to specified weapon classes.",
		checked: false,
		sub: 
		[
			{ name: "Handguns", 		tooltip: "Pea shooters", 					key: "hg" 	},
			{ name: "Submachine Guns", 	tooltip: "Can't touch this", 				key: "smg" 	},
			{ name: "Assault Rifles", 	tooltip: "Say hello to my little friend", 	key: "ar" 	},
			{ name: "Rifles", 			tooltip: "Mom, get the camera!", 			key: "rf" 	},
			{ name: "Machine Guns", 	tooltip: "Bullet hoses", 					key: "mg" 	},
			{ name: "Shotguns", 		tooltip: "Boomsticks", 						key: "sg" 	},
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
		name: "Remove modded MOD3 Dolls",
		key: "mod3",
		tooltip: "Yeah, it sounds quite weird, I know.",
		checked: true
	},
	
	{
		name: "Remove unmodded MOD3 Dolls",
		key: "nomod",
		tooltip: "But it just works (tm), check the bottom of the page.",
		checked: false
	},
	
	{
		name: "Remove Dolls unreleased in EN",
		key: "noten",
		tooltip: "Thanks for beta testing, CN.",
		checked: true
	},
	
	{
		name: "Remove Sangvis Ferri",
		key: "sangvis",
		tooltip: "See you in hell, Sangvis scum!",
		checked: false
	},
	
	{
		name: "Remove non-Dolls",
		key: "human",
		tooltip: "I'm not a robot.",
		checked: true
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
			nomod: true
		}
	},
	
	{
		name: "Colt Revolver MOD 3",
		img: "KQLKGjd.png",
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '5star' ],
			mod3: true
		}
	},
	
	{
		name: "M1911",
		img: "sf4cMqU.png",
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '2star' ],
			nomod: true
		}
	},
	
	{
		name: "M1911 MOD 3",
		img: "MYY35pX.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '4star' ],
			mod3: true
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
			nomod: true
		}
	},
	
	{
		name: "Nagant Revolver MOD 3",
		img: "7IjHEYi.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ],
			mod3: true
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
			nomod: true
		}
	},
	
	{
		name: "Stechkin MOD 3",
		img: "YaC3EaL.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ],
			mod3:	true,
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
	},
	
	{
		name: "P08",
		img: "KCKtS43.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "C96",
		img: "B3IdQ4N.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ],
			nomod: true
		}
	},
	
	{
		name: "C96 MOD 3",
		img: "G06QYxW.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '4star' ],
			mod3:	true,
			noten: true
		}
	},
	
	{
		name: "Type 92",
		img: "enCN6zN.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "Astra Revolver",
		img: "Dia1g12.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "Glock 17",
		img: "81WLzDk.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "Thompson",
		img: "E1YQm8Q.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '5star' ]
		}
	},
	
	{
		name: "M3",
		img: "DpfWcGY.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '2star' ]
		}
	},
	
	{
		name: "MAC-10",
		img: "QkynSgb.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "FMG-9",
		img: "6oTWEE1.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "Vector",
		img: "eRU1pCn.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '5star' ]
		}
	}
];
