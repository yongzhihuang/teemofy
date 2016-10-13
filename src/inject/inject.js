chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		// Placeholder player array for now, will figure out what to put later
		var playerNames = ["", "13GhostSK", "1984", "1an", "1onz", "228", "5", "570", "957", "A Chinese Guy", "ALth0r", "AMUSE", "Abaria", "Abbedagge", "AblinK", "Accelerator", "Achuu", "Agent", "Agronar", "Agua", "Alderiate", "Alex Ich", "Alibabba", "AliceMind", "Allorim", "Alocs", "Alps", "Altec", "AlternativeX", "Aluka", "Alunir", "Alvado", "Amazing", "AmazingJ", "Ana2k", "Andre", "Anjinho", "Ansva", "Antariys", "Antogyn", "AntonM", "Ao", "AoD", "Aoi Haru", "Aoshi", "Apexy", "Apple", "ArQuel", "Arcagod", "Arce", "Archie", "Arfoad", "Arphan", "Arthelon", "Astarore", "Astarte", "Atillos", "Atom", "Atup", "Avenuee", "Avoidless", "Awaker", "AxKhan", "Ayel", "BAKA", "BEN aphrOmi", "BEN de Vendetta", "BG Yaltz", "BSYY", "Babunia", "Badmilk", "Baiano", "Balmung", "BananaHammock", "Bao", "BarneyD", "Bayer95", "Beansu", "Bear", "Bebe (German)", "Bei", "Belgianbeast", "Beni", "Benshy", "Bimbo8", "Binx", "Biofrost", "Bischu", "Bjergsen", "BlacKat", "Blaowlino", "Blasting", "BliZarD", "Blindturkey", "Blizer300", "Blooddragon", "Bloos", "BobqinXD", "Bodydrop", "Bonaparte", "Bonjour", "Bonny", "BonziN", "Brigels", "Brokenshard", "Brucer", "BuPing", "CHELitw", "CLOCKDAY", "CMK", "CNB HyperX FoxZ", "CO4", "COOLG", "CSI", "Cabochard", "Candy", "CandyPanda", "CaoMei", "Caos", "Caps", "Captain Korea", "Captain Ziploc", "Carbon", "Cardrid", "Carilrui", "Carry", "Cavaradøssi", "Caveman", "Celaver", "Centhier", "Ceros", "Chaser", "CheesdBeluga", "Chelby", "ChenyBoy", "Chillyz", "Chimin", "Chippys", "Chock", "ChosenOne", "Chu8", "ChuChuZ", "ChuffeR", "Chunx", "CitizenWayne", "Claire", "ClatoS", "ClearLove", "Cloud", "CloudNguyen", "Cola", "Conan", "Condi", "Cool", "CoolKitty", "Cooler", "Corruption", "CozQ", "Cpt", "CrazyCaps", "Crazycaps", "Creaton", "Crimson", "Crisis", "CrowMac", "Cruzher", "CuRtoKy", "Cuden", "Cyanide", "Czaru", "DCStar", "DD Warrior Lady", "DEATHMACHINELOL", "DOXIO", "DW Charlie", "Daenerys", "Damskii", "Danagorn", "Daniquest", "Dans", "Darien", "Darinon", "Darker", "Darkerz", "Darlik", "Darshan", "Darttt", "Dasnyp", "Day1", "Dayruin", "Deaciepoo", "DeadlyBrother", "Dedrayon", "Delord", "Denden", "Denyk", "Destiny", "Devilast", "Dex", "Dexter", "Dgc", "Diamond", "Diamondprox", "DianGun", "Digolera", "DimaJke", "Dimonko", "Dinamox", "Dioud", "Dirtgen", "Divide", "Divine", "Djoko", "Djokovic", "Dman403", "Doctta", "Doigby", "Dom1nant", "DomhoX", "Donmuri", "Doomtrobo", "Doxy", "DrTrevor", "Dragonrouge", "Dreamforest", "Drobovik", "Duji", "Duocek", "Duplience", "EG Reel Senpai", "EGym", "ENV Niitro", "EShen", "EXORKK", "EXitaro", "Easy", "Ebaaan", "Edition", "Edward", "EefFenZ", "Eika", "Eiko", "Eimy", "Ekka", "El Dari", "ElStorcoo", "Electra", "Electro", "Element", "Elementz", "Elendix", "Elysia", "Emp", "Empt2", "Endless", "Energy", "Enty", "Epyonz", "Eraxis", "Ery0n", "Espeon", "Estelim", "Ethalos", "Ethan", "Euterpe", "Evi", "Exactyy", "Exile", "Exileh", "Exo", "Extinxiion", "FIRees", "FORG1VEN", "FS Baby Tesoro", "FS Dien Tesoro", "FS Peskin Tesoro", "FZZF", "Facerollerx", "Fafnyr", "Fai", "Falco", "Fart", "FearlessS", "Febiven", "FeelMyDuck", "Feetloverbard", "Felix", "FiddleOP", "Firemane811", "Firerider", "First Mate", "Fisch", "FishBall", "Flandre", "Flashy", "Focho", "Fomko", "ForellenLord", "Forkzx", "FraGio", "Frae", "Freeze", "Froggen", "Fx iMba", "Föur", "GMH", "GaLaTaS", "Gatocrack", "Genja", "Geno Senpai", "Genre", "Genthix", "Geogeo", "GetCrazy", "Glukoza", "GoB", "God", "GodBro", "GodKwai", "Gogoaffe", "Gogoing", "Goku", "Gokucp", "GoldeNz", "Gonto", "Gornagal", "Gov", "Granddes", "Gratis150ml", "Gripex", "Grom", "Gruhlum", "Gstv1", "Guardsman Bob", "Gudair", "H4ckerv2", "HYP Ail", "Hachiman", "Hack", "Haelz", "Hagane", "Haith", "HandOfBlood", "Hans", "Hans sama", "Hard", "Haretti", "Hasi", "Hatchý", "Hatrixx", "HawkDon", "Haydal", "HeTong", "Heavenz", "Helior", "Heovax", "Herdyn", "Hero", "Hi Im Gosu", "Hiiro", "Hiiva", "Hmmer", "Hocuspocus", "Hoki", "Holly", "HolyFish", "HosaN", "HotshotGG", "Hybrid", "Hylissang", "I MY ME MINE", "I7s", "ILinks", "IcedCloud", "Icon", "IgNiDia", "Iimo", "IlluSioN", "Ilven", "Im the real J4ck", "ImHeat", "ImSoFresh", "Impaired", "Inkki", "InnoX", "Inori", "Inspirro", "Intox", "Intrepid", "Inu", "IoCarry", "Ishikawa", "Ismaro", "JAO DA MAIONESE", "JRTSeven", "Jaeyoong", "Janitin", "Jankos", "Jayke", "Jbzz", "Jensen", "Jesse", "Jezie", "Jia", "Jiang", "Jiaoyang", "JieZou", "Jiizuké", "Jin", "Jing", "Jinjiao", "Jinsh", "Jirall", "JoJo", "Jockster", "Johnnyboi", "JokerJ", "Joni", "JothY", "JueJue", "Juju", "Juliostito", "Jun", "JustNo0b", "Jwi sama", "Jynthe", "K0u", "KIM", "KRYST4L", "Kaas", "Kadir", "Kaigu", "Kaixa", "Kalec", "Kami", "Kanani", "Kaov", "Karalius", "Kaze", "Kazmitch", "KazuXD", "Kenetaro", "Kepe", "Kerp", "Khyle", "Khynm", "KiDDeKay", "Kid", "Kid Cudi", "Kiddo", "Kikis", "Killwar", "Kimchi Wasaru", "Kimi", "Kiralho", "Kirei", "Kirino", "Kirito", "Kitties", "Kittyyyy", "Knut", "KoaLa", "Kobbe", "Koi", "KonDziSan", "Koro1", "Kreox", "Krislund", "Krow", "Kubełka", "Kujaa", "Kulit", "Kuruizaki Sakura", "Kvrof", "Kyosh", "L4Mouette", "LEP", "LLL Tyrok", "LOD", "LOFS", "LaMiaZeaLoT", "LaharlFatuS", "Lamabear", "LaoPi", "Lasagna", "Latimer", "Le Roi Bisou", "Le Smart", "LeChase", "LeDuck", "LeX", "LegoMyEgo", "Leko", "Lenny", "Leofromkorea", "Leozuxo", "LetMe", "Lexvink", "Ley", "Leza", "Lfante", "Libik", "Licken", "Licorice", "Light", "Likkrit", "Lillebelt", "Linak", "LiquidDiego", "Locaal", "Loong", "Loop", "LoordN", "Lord Fabulous", "LordFulvio", "LordKevko", "Lounet", "Louvi", "LoveLing", "Lovecd", "Lucky", "Luffy", "Lukezy", "Luo", "Luskka", "Lyon FraGiovaN", "Lyrics", "Lyumi", "MaGsi", "Mactor", "MadafOckeR", "Madwife", "MagicWindom", "Makeitsnow", "Makler", "Malaz", "Malkkari", "Mampfi", "Manajj", "ManolinGuilder", "Manorah", "March", "Marker", "Martin", "Masa", "Mash", "Massacre", "MasterMinD", "Masterwork", "Matsukaze", "Mattress", "Mazzerin", "McRory", "Meduza", "Mellisan", "Meme", "Memory", "Meron", "Metallicus", "Metalx", "Mettaz", "MiMo", "MiT", "MicaO", "Migxa", "MikeyR", "Minerva", "Minibestia", "Minkywhale", "MirrorEnd", "Misaya", "Misumena", "Mitty", "Mlxg", "Mo", "MoMa", "MoNk3yz", "Mokatte", "MooN", "Moon", "Moopz", "MorZB", "Morsu", "Mortred", "Mouse", "Moyashi", "Mozilla", "Mr Schmorington", "MrFribbs", "MrRalleZ", "MrsPinguini", "Mrsj", "Mueki", "MyDog II", "Myang", "Mylon", "Mystiques", "MythSweet", "MyticQ", "Myw", "Mówiła Że ma 15", "NaMei", "NaSoMaNiAC", "Naaage", "Naga", "Nanouk", "Nappon", "Nardeus", "Narkuss", "Naruga", "Naryt", "Nbs", "Neep", "Neiman", "Neon", "Nervarien", "NerzhuL", "Newbie", "Nex", "Next", "Nickstah", "Nicodd", "NikSar", "NikeZ", "Niko3333", "Nipphu", "Nisbeth", "Nknown Ma1kY", "NoName", "NoNholy", "Noaphiel", "Noel", "Nogod", "Nomanz", "Nono", "Noonia", "Norfz", "Nororin", "Norskeren", "Norvie", "Nova", "Noway4u", "Noxiak", "Nuclear Clint", "Nukeduck", "Nurok", "NydusHerMain", "Nyjacky", "Nyph", "Nzq", "Obvious", "Oceans Eleven", "Oceans11", "Oddie", "Odoamne", "Onionbagel", "Otchie", "OwN", "OwS The Brain", "Owl", "OzoraVeki", "P", "P1noy", "PD Deltus", "PDD", "PENTA invidiuM", "PF", "PaSa", "Pacman", "Paradise", "ParadoXical", "Pat", "Paz", "Pbo", "PeehSmite", "Peel", "Peng", "PentaQ", "Perhapstky", "PerkZ", "Perry", "Phantiks", "Pheilox", "Phoenix", "Phoonie", "Picoca", "PikaProx", "Piru", "Piter Pokir", "Pixel", "Plugo", "Pokka", "Pony", "Porky", "Porpoise", "Pose", "PrZo", "Prepared", "Pretty", "Pride", "Primoo", "Prodigy", "Professor", "Profound", "Prophuth", "Prothana", "Puki style", "Punished", "Punisher", "Pururun", "Pyl", "Pyro", "QQMore", "Qaspiel", "Quakerr", "Quan", "Rabbit97", "Radians", "Raes", "Rafes", "Rainbrain", "Rakin", "Rakyz", "Ranger", "Ravenno", "Raxxo", "ReD", "Rebengga", "RedBert", "Redsn0w", "Refuse Rickkyy", "Regret9", "Reje", "Rellik", "Rena", "Revolta", "Reyk", "Rhuckz", "RhythmAsalt", "Ribena", "Rikytan", "Riou", "Rippii", "Ritix", "Rkp", "Robo", "Rofens", "Roki", "Romant1c", "Rosey", "Rui", "Ruin", "Ruo", "Rusty", "Ryavka", "SAND", "SELFIE", "SKT Bowser", "SOUPerior", "SPIN Solaaaa", "SPanny", "STony", "SaZeD", "SacyR", "Safir", "SagaZ", "Sagi", "Sairusq", "Saitain", "Salamander", "Sandbox:NoKen", "Santorin", "Sarasun", "Sardoche", "Sask", "Satorius", "Saulius", "Savoki", "Schabs", "Sebaqq6", "Sebastian", "Sebekx", "Sedrion", "Seiya", "Sencux", "Serick", "Serton", "Severus", "SezzeR", "Sh4g", "ShLaYa", "ShadowmaRe", "Shantao", "Sharp", "Shaunz", "Sheep", "Shernfire", "Shini", "Shinmori", "Shipa", "Shiphtur", "Shok", "Shu", "Shura", "Shushei", "Sicca", "Sigma", "Sigu", "Sinkdream", "SirNukesAlot", "SirT", "Sixx", "Skill", "Skullomania", "SkyBart", "Skye", "Skyer", "Skyyart", "SleazyWeazy", "Sleeping", "Sleight", "Sleper", "Slow", "Slyv3r", "Sløøpy", "SmLz", "SmileyfaceEx", "SmittyJ", "Smoothie", "Sneaky", "Snoopy", "Snow", "Snowlz", "Snoy", "SorakaBot", "Soren", "Soul", "Soulsilver", "SouthWind", "SozPurefect", "SpiDerPiTv2", "Spontexx", "Spookz", "Spotted", "Spy", "Square Enix", "Squeeze", "Ss17", "Star", "Steelback", "Steve", "Straawbella", "Strategas", "Stray", "Styz", "Sundae", "SunnGoo", "SunnyXX", "Super Metroid", "SuperAZE", "SuperCat", "Svenskeren", "Swak", "Sweet", "Swiffer", "Swip3rR", "Swizzle", "Sybol", "Syrox", "Sòz Purefect", "TXBB", "Tabasko", "Tabe", "Tabzz", "TaeYeon", "Taikki", "TaintedOnes", "TakeFun", "Takeshi", "Tally", "Tantrum", "Tarzan", "Taxstump", "Tealz", "Terette", "Tgee", "Tgun", "The Chupper", "TheFoxz", "TheMountain", "TheOddOne", "TheTess", "Thefecti one", "Theusma", "ThintoN", "ThoRax", "Thulz", "Thyak", "Ti0", "Tibold", "Tidus", "Tierwulf", "Tim6Kya", "Time", "TinOwns", "Tittu", "TkSing", "Toaster", "Tomex", "Touch", "Tour", "Toyz", "Trance", "Trashboat", "Trashy", "Triple", "Trowen", "Truklax", "Turtle", "TwoJ", "U", "Uberrior", "Ungi", "Unknown", "Unlimited", "Urek Mazin0", "Uzi", "V", "VANEZ", "Vaalix", "VandeR", "Vash", "Vasilii", "Vegas", "Veggie", "Venon", "Verfix", "Vert", "ViRtU4l", "Vileroze", "Virtuous", "Visdom", "Vizicsacsi", "Vizility", "Vlokz", "Voidle", "Voku", "Vyy", "Warangelus", "Warble", "Wardz", "We1less", "Wei", "WeiXiao", "Wendelbo", "Werwer", "WetDreaM", "Wextru", "Wh1t3zZ", "WhiteKnight108", "WhiteLotus", "Wibuman", "Wickd", "Wicked", "WildPanda", "WildTurtle", "Wind", "Wish", "Wizzi", "Wolvyz", "Woolite", "World6", "Wos", "WuShuang", "Wunder", "Wuuuh", "Wuxx", "Wynd", "Wynk", "Wzrd", "X1u", "XJAY", "XKeNz", "XL Winner", "XPecake", "XQ", "XXChaosCubeXx", "XXF", "XY", "Xare", "Xaxus", "Xayoo", "Xerxe", "XiaoWeiXiao", "XiaoXiao", "Xiaohu", "Xiaoxi", "Xico", "XiliaGrace", "Xingyun", "Xioh", "Xiyang", "Xiye", "Xmithie", "Xuan", "Y0shee", "YJTM", "YanSir", "Yang", "Yao", "YeTz", "YellOwStaR", "Yeluo", "Yoda", "Yogi", "Yoshiaki", "YoungBuck", "Yu", "YuZhe", "Yukz", "Yume", "Yutapon", "YutoriMoyashi", "Yuuki60", "Yziv", "ZEMYXARCVS", "ZH", "ZaKe", "Zamphira", "Zantins", "Zawisky", "Zealot", "ZeicrØ", "Zentinel", "Zeriouz", "Zerym", "Zeypher", "Zhanos", "Ziriguidun", "Zone", "Zorozero", "Zuao", "Zven", "Zylor", "Zytan", "Zzitai", "Zzr", "alleycat", "amt2k", "aripo", "bigfatlp", "bigpomelo", "bit1", "brTT", "cinku", "cogcog", "corn", "dNa", "danz0r", "eRot1c", "enemyz", "esA", "etnex", "extinkt", "foo sharp", "frogurt", "godlike", "heavenTime", "hu1", "huxley", "iScarface", "if", "inSec", "isurugi", "jLC", "jokieez", "jpak", "k1ng", "kane", "kev1n", "lNightmare", "lies", "loulex", "maplestreet8", "meiko", "mumus100", "nRated", "napraen", "nesrilaS", "niQ", "poysanity", "puszu", "pyri", "raydere", "rhyuga", "rubeN", "sEnG", "sOAZ", "san", "scotty", "sean", "stixx", "stronger", "superNayr", "t4nk", "tOfu", "tei", "tockers", "trebor", "unso", "wewillfailer", "whynuts", "xCube", "xSphere", "xinec", "yellowpete", "yuhahai", "zig", "ßinx", "Ƒirays"];


		// Looks at page and replace every occurance of the known playerName with "teemo"
	}
	}, 10);
});