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
	
	{
		name: "PPSh-41",
		img: "69Njxff.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '2star' ]
		}
	},
	
	{
		name: "PPS-43",
		img: "tD8eXlr.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "PP-90",
		img: "Njy4qVe.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '4star' ]
		}
	},
	
	{
		name: "PP-2000",
		img: "3um9u8x.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '2star' ]
		}
	},
	
	{
		name: "MP40",
		img: "Ow4D3bI.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '2star' ]
		}
	},
	
	{
		name: "MP5",
		img: "pY9reMT.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '4star' ],
			nomod: true
		}
	},
	
	{
		name: "MP5 MOD 3",
		img: "tl9Obtf.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '5star' ],
			mod3: true,
			noten: true
		}
	},
	
	{
		name: "Skorpion",
		img: "dxa3acv.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "MP7",
		img: "y7tbdvS.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '5star' ]
		}
	},
	
	{
		name: "Sten MkII",
		img: "UgW4Jwo.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '3star' ],
			nomod: true
		}
	},
	
	{
		name: "Sten MkII MOD 3",
		img: "LY3qlmv.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '4star' ],
			mod3: true,
			noten: true
		}
	},
	
	{
		name: "Beretta M38",
		img: "6V7PkN3.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '2star' ],
			nomod: true
		}
	},
	
	{
		name: "Beretta M38 MOD 3",
		img: "ebU8gds.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '4star' ],
			mod3: true,
			noten: true
		}
	},
	
	{
		name: "Micro UZI",
		img: "ls3o2ZF.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '3star' ],
			nomod: true
		}
	},
	
	{
		name: "Micro UZI MOD 3",
		img: "QRaRtUa.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '4star' ],
			mod3: true
		}
	},
	
	{
		name: "m45",
		img: "2DHQhTN.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '2star' ]
		}
	},
	
	{
		name: "M1 Garand",
		img: "uPXhCc9.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "M1A1",
		img: "x3E0i0J.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "Springfield",
		img: "ImCcx5W.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '4star' ]
		}
	},
	
	{
		name: "M14",
		img: "7Tj4D1n.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '3star' ],
			nomod: true
		}
	},
	
	{
		name: "M14 MOD 3",
		img: "ER4OPkI.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '4star' ],
			mod3: true
		}
	},
	
	{
		name: "M21",
		img: "Cap6lZg.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "Mosin Nagant",
		img: "JnG9vEE.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '4star' ],
			nomod: true
		}
	},
	
	{
		name: "Mosin Nagant MOD 3",
		img: "m7TqnHp.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '5star' ],
			mod3: true
		}
	},
	
	{
		name: "SVT-38",
		img: "f4ndmqB.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '2star' ]
		}
	},
	
	{
		name: "Simonov",
		img: "5aWuVqf.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '2star' ]
		}
	},
	
	{
		name: "PTRD",
		img: "kFCZ8yN.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '4star' ]
		}
	},
	
	{
		name: "Dragunov",
		img: "vr0vCTg.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '4star' ]
		}
	},
	
	{
		name: "SV-98",
		img: "LlckWTP.png",
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '3star' ],
			nomod: true
		}
	},
	
	{
		name: "SV-98 MOD 3",
		img: "TiCBluW.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '4star' ],
			mod3: true,
			noten: true
		}
	},
	
	{
		name: "Kar98k",
		img: "wWEgP09.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '5star' ]
		}
	},
	
	{
		name: "Gewehr 43",
		img: "yH4Yl9y.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '2star' ]
		}
	},
	
	{
		name: "WA2000",
		img: "sBKG0cJ.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '5star' ]
		}
	},
	
	{
		name: "Type 56 Carbine",
		img: "ZSnFsN1.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "Lee Enfield",
		img: "TUqvTED.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '5star' ]
		}
	},
	
	{
		name: "FN-49",
		img: "F2eYlLO.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '2star' ],
			nomod: true
		}
	},
	
	{
		name: "FN-49 MOD 3",
		img: "ry9pzsZ.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '4star' ],
			mod3: true
		}
	},
	
	{
		name: "BM59",
		img: "QSKQkJe.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '2star' ]
		}
	},
	
	{
		name: "NTW-20",
		img: "ep6G7yA.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '5star' ],
			nomod: true
		}
	},
	
	{
		name: "NTW-20 MOD 3",
		img: "MzxwQyR.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '5star' ],
			mod3: true
		}
	},
	
	{
		name: "M16A1",
		img: "xDiIMLq.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ]
		}
	},
	
	{
		name: "M4A1",
		img: "SgwjRxr.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ],
			nomod: true
		}
	},
	
	{
		name: "M4A1 MOD 3",
		img: "PjNNDy5.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '5star' ],
			mod3: true
		}
	},
	
	{
		name: "M4 SOPMOD II",
		img: "cVAlon8.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ],
			nomod: true
		}
	},
	
	{
		name: "M4 SOPMOD II MOD 3",
		img: "LxX0PO8.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '5star' ],
			mod3: true
		}
	},
	
	{
		name: "ST AR-15",
		img: "uiOPXTB.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ],
			nomod: true
		}
	},
	
	{
		name: "ST AR-15 MOD 3",
		img: "aqLofxz.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '5star' ],
			mod3: true
		}
	},
	
	{
		name: "AK47",
		img: "p9loX2a.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "AK74-U",
		img: "H3Ny7PK.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '5star' ]
		}
	},
	
	{
		name: "AS-Val",
		img: "7SPQNRt.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ],
			nomod: true
		}
	},
	
	{
		name: "AS-Val MOD 3",
		img: "YrhF4qm.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '5star' ],
			mod3: true
		}
	},
	
	{
		name: "StG-44",
		img: "YT51mSw.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '3star' ],
			nomod: true
		}
	},
	
	{
		name: "StG-44 MOD 3",
		img: "C6Xyqj6.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ],
			mod3: true,
			noten: true
		}
	},
	
	{
		name: "G41",
		img: "MtoXqKG.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '5star' ]
		}
	},
	
	{
		name: "G3",
		img: "fICOlNa.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '2star' ],
			nomod: true
		}
	},
	
	{
		name: "G3",
		img: "fICOlNa.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ],
			mod3: true
		}
	},
	
	{
		name: "G36",
		img: "5rwWU8V.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ],
			nomod: true
		}
	},
	
	{
		name: "G36 MOD 3",
		img: "Pdqvx03.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '5star' ],
			mod3: true
		}
	},
	
	{
		name: "HK416",
		img: "uMIyyu8.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '5star' ],
			nomod: true
		}
	},
	
	{
		name: "HK416 MOD 3",
		img: "0qc0Vqc.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '5star' ],
			mod3: true,
			noten: true
		}
	},
	
	{
		name: "Type 56-1",
		img: "cItBKsx.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ]
		}
	},
	
	{
		name: "L85A1",
		img: "CEzUYLO.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '2star' ]
		}
	},
	
	{
		name: "FAMAS",
		img: "eJywGWO.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ]
		}
	},
	
	{
		name: "FNC",
		img: "CykJSf6.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "Tavor-21",
		img: "lbQuU5k.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ]
		}
	},
	
	{
		name: "AUG",
		img: "wIOxNWU.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '5star' ]
		}
	},
	
	{
		name: "SIG-510",
		img: "kf7U23U.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '2star' ]
		}
	},
	
	{
		name: "M1918 BAR",
		img: "xhrtBSc.png", 
		opts: 
		{
			weapon: [ 'mg' ],
			rarity: [ '4star' ],
			nomod: true
		}
	},
	
	{
		name: "M1918 BAR MOD 3",
		img: "WaBulXL.png", 
		opts: 
		{
			weapon: [ 'mg' ],
			rarity: [ '5star' ],
			mod3: true
		}
	},
	
	{
		name: "M2HB",
		img: "abZiYbl.png", 
		opts: 
		{
			weapon: [ 'mg' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "M60",
		img: "ykYAM2q.png", 
		opts: 
		{
			weapon: [ 'mg' ],
			rarity: [ '4star' ]
		}
	},
	
	{
		name: "M249 SAW",
		img: "YRH73Wt.png", 
		opts: 
		{
			weapon: [ 'mg' ],
			rarity: [ '3star' ]
		}
	}
];
