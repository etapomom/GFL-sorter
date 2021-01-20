dataSetVersion = "2021-01-19"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
		name: "Remove Dolls unreleased in EN",
		key: "noten",
		tooltip: "Thanks for beta testing, CN.",
		checked: true
	}
];

dataSet[dataSetVersion].characterData = [
	
	{
		name: "Colt Revolver",
		img: "KQLKGjd.png",
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '4star' ]
		}
	},
	
	{
		name: "M1911",
		img: "MYY35pX.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '2star' ]
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
		img: "7IjHEYi.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '2star' ]
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
		img: "YaC3EaL.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ]
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
		img: "G06QYxW.png", 
		opts: 
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ]
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
	},
	
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
		img: "tl9Obtf.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '4star' ]
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
		img: "LY3qlmv.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "Beretta M38",
		img: "ebU8gds.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '2star' ]
		}
	},
	
	{
		name: "Micro UZI",
		img: "QRaRtUa.png", 
		opts: 
		{
			weapon: [ 'smg' ],
			rarity: [ '3star' ]
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
		img: "ER4OPkI.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '3star' ]
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
		img: "m7TqnHp.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '4star' ]
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
		img: "TiCBluW.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '3star' ]
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
		img: "ry9pzsZ.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '4star' ]
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
		img: "MzxwQyR.png", 
		opts: 
		{
			weapon: [ 'rf' ],
			rarity: [ '5star' ]
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
		img: "PjNNDy5.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ]
		}
	},
	
	{
		name: "M4 SOPMOD II",
		img: "LxX0PO8.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ]
		}
	},
	
	{
		name: "ST AR-15",
		img: "aqLofxz.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ]
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
		img: "YrhF4qm.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ]
		}
	},
	
	{
		name: "StG-44",
		img: "C6Xyqj6.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '3star' ]
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
		img: "iZsXntm.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '2star' ]
		}
	},
	
	{
		name: "G36",
		img: "Pdqvx03.png", 
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ]
		}
	},
	
	{
		name: "HK416",
		img: "0qc0Vqc.png",
		opts: 
		{
			weapon: [ 'ar' ],
			rarity: [ '5star' ]
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
		img: "WaBulXL.png", 
		opts: 
		{
			weapon: [ 'mg' ],
			rarity: [ '4star' ]
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
	},
	
	{
		name: "M1919A4",
		img: "3Wm4BXA.png",
		opts:
		{
			weapon: [ 'mg' ],
			rarity: [ '3star' ]
		}
	},
	
	{
		name: "LWMMG",
		img: "9FmPP5E.png",
		opts:
		{
			weapon: [ 'mg' ],
			rarity: [ '2star' ],
		}
	},
	
	{
		name: "DP-28",
		img: "eZ3G1co.png",
		opts:
		{
			weapon: [ 'mg' ],
			rarity: [ '2star' ],
		}
	},
	
	{
		name: "RPD",
		img: "QuFVJiJ.png",
		opts:
		{
			weapon: [ 'mg' ],
			rarity: [ '3star' ],
		}
	},
	
	{
		name: "PK",
		img: "BFd7rKQ.png",
		opts:
		{
			weapon: [ 'mg' ],
			rarity: [ '4star' ],
		}
	},
	
	{
		name: "MG42",
		img: "SRo6DRD.png",
		opts:
		{
			weapon: [ 'mg' ],
			rarity: [ '3star' ],
		}
	},
	
	{
		name: "MG34",
		img: "9lnCeSq.png",
		opts:
		{
			weapon: [ 'mg' ],
			rarity: [ '2star' ],
		}
	},
	
	{
		name: "MG3",
		img: "E2WzXoQ.png",
		opts:
		{
			weapon: [ 'mg' ],
			rarity: [ '4star' ],
		}
	},
	
	{
		name: "Bren",
		img: "XIEbf6n.png",
		opts:
		{
			weapon: [ 'mg' ],
			rarity: [ '3star' ],
		}
	},
	
	{
		name: "FNP-9",
		img: "T9TJELo.png",
		opts:
		{
			weapon: [ 'hg' ],
			rarity: [ '2star' ],
		}
	},
	
	{
		name: "MP-446 Viking",
		img: "agjtYss.png",
		opts:
		{
			weapon: [ 'hg' ],
			rarity: [ '2star' ],
		}
	},
	
	{
		name: "Spectre M4",
		img: "yaE1TWI.png",
		opts:
		{
			weapon: [ 'smg' ],
			rarity: [ '2star' ],
		}
	},
	
	{
		name: "IDW",
		img: "Qv0z1TA.png",
		opts:
		{
			weapon: [ 'smg' ],
			rarity: [ '2star' ],
		}
	},
	
	{
		name: "Type 64",
		img: "SJEmnMj.png",
		opts:
		{
			weapon: [ 'smg' ],
			rarity: [ '2star' ],
		}
	},
	
	{
		name: "Hanyang Type 88",
		img: "bcVwXTV.png",
		opts:
		{
			weapon: [ 'rf' ],
			rarity: [ '3star' ],
		}
	},
	
	{
		name: "Grizzly MkV",
		img: "B2HKYzG.png",
		opts:
		{
			weapon: [ 'hg' ],
			rarity: [ '5star' ],
		}
	},
	
	{
		name: "Calico M950A",
		img: "V3yBre8.png",
		opts:
		{
			weapon: [ 'hg' ],
			rarity: [ '5star' ],
		}
	},
	
	{
		name: "P7",
		img: "mpH2kav.png",
		opts:
		{
			weapon: [ 'hg' ],
			rarity: [ '4star' ],
		}
	},
	
	{
		name: "UMP9",
		img: "YTeKvvN.png",
		opts:
		{
			weapon: [ 'smg' ],
			rarity: [ '4star' ],
		}
	},
	
	{
		name: "UMP40",
		img: "wAgmosw.png",
		opts:
		{
			weapon: [ 'smg' ],
			rarity: [ '4star' ],
		}
	},
	
	{
		name: "UMP45",
		img: "yRzPIBI.png",
		opts:
		{
			weapon: [ 'smg' ],
			rarity: [ '4star' ],
		}
	},
	
	{
		name: "G36C",
		img: "yTQSXt0.png",
		opts:
		{
			weapon: [ 'smg' ],
			rarity: [ '5star' ],
		}
	},
	
	{
		name: "OTs-12",
		img: "fW4AX1F.png",
		opts:
		{
			weapon: [ 'ar' ],
			rarity: [ '3star' ],
		}
	},
	
	{
		name: "FAL",
		img: "KiOJldV.png",
		opts:
		{
			weapon: [ 'ar' ],
			rarity: [ '5star' ],
		}
	},
	
	{
		name: "F2000",
		img: "pVrOyNv.png",
		opts:
		{
			weapon: [ 'ar' ],
			rarity: [ '2star' ],
		}
	},
	
	{
		name: "CZ-805",
		img: "f4KFxWm.png",
		opts:
		{
			weapon: [ 'ar' ],
			rarity: [ '3star' ],
		}
	},
	
	{
		name: "MG5",
		img: "eAsx121.png",
		opts:
		{
			weapon: [ 'mg' ],
			rarity: [ '5star' ],
		}
	},
	
	{
		name: "FG42",
		img: "lchz7UP.png",
		opts:
		{
			weapon: [ 'mg' ],
			rarity: [ '2star' ],
		}
	},
	
	{
		name: "AAT-52",
		img: "gwsYBBJ.png",
		opts:
		{
			weapon: [ 'mg' ],
			rarity: [ '2star' ],
		}
	},
	
	{
		name: "Negev",
		img: "POCDX25.png",
		opts:
		{
			weapon: [ 'mg' ],
			rarity: [ '5star' ],
		}
	},
	
	{
		name: "Serdyukov",
		img: "lgUuBSK.png",
		opts:
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ],
		}
	},
	
	{
		name: "Welrod MkII",
		img: "7vPJxue.png",
		opts:
		{
			weapon: [ 'hg' ],
			rarity: [ '5star' ],
		}
	},
	
	{
		name: "Suomi",
		img: "M1EU7wl.png",
		opts:
		{
			weapon: [ 'smg' ],
			rarity: [ '5star' ],
		}
	},
	
	{
		name: "Z-62",
		img: "iJc7bsE.png",
		opts:
		{
			weapon: [ 'smg' ],
			rarity: [ '3star' ],
		}
	},
	
	{
		name: "PSG-1",
		img: "W7hO48g.png",
		opts:
		{
			weapon: [ 'rf' ],
			rarity: [ '4star' ],
		}
	},
	
	{
		name: "9A-91",
		img: "3HBbyKl.png",
		opts:
		{
			weapon: [ 'ar' ],
			rarity: [ '4star' ],
		}
	},
	
	{
		name: "OTs-14",
		img: "j4dQDR5.png",
		opts:
		{
			weapon: [ 'ar' ],
			rarity: [ '5star' ],
		}
	},
	
	{
		name: "ARX-160",
		img: "DVqzCLe.png",
		opts:
		{
			weapon: [ 'ar' ],
			rarity: [ '3star' ],
		}
	},
	
	{
		name: "Mk48",
		img: "lcN2Ysg.png",
		opts:
		{
			weapon: [ 'mg' ],
			rarity: [ '4star' ],
		}
	},
	
	{
		name: "G11",
		img: "0t3TNq5.png",
		opts:
		{
			weapon: [ 'ar' ],
			rarity: [ '5star' ],
		}
	},
	
	{
		name: "P99",
		img: "lTE9Iwn.png",
		opts:
		{
			weapon: [ 'hg' ],
			rarity: [ '3star' ],
		}
	},
	
	{
		name: "Super SASS",
		img: "NaFwcIM.png",
		opts:
		{
			weapon: [ 'rf' ],
			rarity: [ '3star' ],
		}
	},
	
	{
		name: "MG4",
		img: "2bFyzTR.png",
		opts:
		{
			weapon: [ 'mg' ],
			rarity: [ '5star'],
		}
	},
	
	{
		name: "NZ75",
		img: "UwR9QTV.png",
		opts:
		{
			weapon: [ 'hg' ],
			rarity: [ '5star' ],
		}
	},
	
	{
		name: "Type 79",
		img: "i8oKjUc.png",
		opts:
		{
			weapon: [ 'smg' ],
			rarity: [ '5star' ],
		}
	},
	
	{
		name: "M99",
		img: "PSVyLr8.png",
		opts:
		{
			weapon: [ 'rf' ],
			rarity: [ '5star' ],
		}
	},
	
	{
		name: "Type 95",
		img: "AuddDkc.png",
		opts:
		{
			weapon: [ 'ar' ],
			rarity: [ '5star' ],
		}
	},
	
	{
		name: "Type 97",
		img: "tw7fFjN.png",
		opts:
		{
			weapon: [ 'ar' ],
			rarity: [ '5star' ],
		}
	},
	
	{
		name: "SPP-1",
		img: "bN4f9sj.png",
		opts:
		{
			weapon: [ 'hg' ],
			rarity: [ '4star' ],
		}
	},
	
	{
		name: "Mk23",
		img: "3aVWlz8.png",
		opts:
		{
			weapon: [ 'hg' ],
			rarity: [ '4star' ],
		}
	}
];
