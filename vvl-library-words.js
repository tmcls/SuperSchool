// https://obspwa.nl/wp-content/uploads/2018/04/vllkim-art-leerlijn-maan-technisch-lezen.pdf

const library = new Array();

// Default weeks
library[0] = [];
library[1] = [];

// Week 1 & 2 - Kern start (i, k, m, s, p)
library[2] = [
    "mis", "mik", "sim", "sik", "sip", "kim", "kip", "is", "sis", 
    "ik", "kik", "pim"
];

// Week 3 - Kern 1 (aa, r, e)
library[3] = [
    "raam", "raas", "raar", "raap", "sim", "sik", "sip", "rem", "rek", 
    "maak", "maas", "maar", "ik", "rik", "mik", "pek", "kim", "pim", 
    "kaas", "raak", "mis", "kik", "kers", "pers", "paars", "kaars", 
    "smaak", "spaak", "prik", "spraak"
];

// Week 4 - Kern 1 & 2 (v, n)
library[4] = [
    "maan", "maas", "maar", "maak", "mis", "mik", "rem", "ren", "rek",
    "vaar", "vaas", "vaak", "vin", "kin", "min", "pin", "pen", "ken", 
    "ven", "sis", "vis", "nis", "paar", "naar", "kaas", "sik", "mes", 
    "rik", "naam", "kip", "ver", "kers", "pers", "vers", "mars", 
    "paars", "kerk", "kaars", "merk", "krik", "kraam", "spin", "spaak", 
    "snik", "kraan"
];

// Week 5 - Kern 2 (ee, t)
library[5] = [
    "tip", "tim", "tik", "tin", "mee", "meet", "meer", "mees", "raam", "raak", "raas", "raap",
    "mes", "met", "mep", "men", "veen", "peen", "teen", "meen", "pin", "kin", "vin", "min",
    "kaas", "paas", "maas", "vaas", "pet", "net", "vet", "teek", "maak", "sip", "kaap", "sim",
    "rek", "kist", "mist", "vist", "sist", "staan", "staat", "staar", "staak", "prins", "prent",
    "krent", "stept", "prikt", "streep", "spraak", "strik", "spreek", "straat", "perst", "minst",
    "kerst"
];

// Week 6 - Kern 2 (oo, b)
library[6] = [
    "boon", "boos", "boot", "boom", "pet", "per", "pek", "pen", "vaar", "vaak", "vaas", "vaat", 
    "mis", "mik", "min", "is", "vis", "pis", "oom", "room", "toom", "een", "been", "teen", "peen", 
    "aak", "raak", "taak", "baas", "tik", "mees", "en", "ook", "aan", "toos", "kip", "berk", "merk", 
    "kerk", "sterk", "step", "preek", "smaak", "stip", "vrek", "mest", "vaart", "berm", "mist", 
    "breekt", "troost", "knipt", "spaart", "stept"
];

// Week 7 - Kern 3 (d, oe)
library[7] = [
    "dik", "dip", "dim", "dit", "moe", "moer", "moet", "moes", "koos", "koop", "kook", "koor",
    "bes", "bek", "ben", "bep", "doos", "roos", "boos", "doek", "boek", "koek", "roek", "meet",
    "beet", "keet", "neet", "kaak", "raak", "vaak", "taak", "doen", "pit", "vaas", "boom", 
    "mes", "beek", "roep", "noot", "best", "nest", "vest", "rest", "droom", "droop", "kroop",
    "kroon", "stoep", "kreek", "broek", "draak", "trek", "droomt", "kraakt", "breekt", "knoopt",
    "krent", "streek", "straat", "stroom", "sproet", "spreekt"
];

// Week 8 - Kern 3 (z, ij)
library[8] = [
    "boek", "boen", "boem", "boet", "zee", "zeem", "zeep", "zeer", "zoek", "zoet", "zoem", 
    "zoen", "rij", "rijp", "rijm", "rijk", "zaak", "maak", "kaak", "vaak", "boer", "moer", 
    "voer", "roer", "zijn", "mijn", "pijn", "dijn", "voet", "roet", "zet", "peen", "doen", 
    "min", "tip", "kijk", "neem", "raar", "sip", "bek", "zes", "dijk", "koop", "ver", "nek", 
    "brij", "braam", "breek", "broos", "bres", "knaap", "knoop", "knik", "knijp", "knip", 
    "strijk", "streep", "strook", "straat", "stroom", "stookt", "maakt", "zoekt", "kijkt", "rekt"
];

// Week 9 - Kern 3 & 4 (h, w)
library[9] = [
    "wit", "wim", "win", "wip", "hek", "hem", "het", "hes", "pook", "poos", "poot", "poon", 
    "zoem", "zoet", "zoek", "zoen", "rijk", "wijk", "tijk", "dijk", "kijk", "haak", "vaak", 
    "zaak", "raak", "maak", "heer", "peer", "weer", "zeer", "veer", "hoest", "noest", "koest", 
    "woest", "roest", "wijs", "koek", "wij", "zwak", "boek", "zaak", "weet", "zwaar", "woon", 
    "hap", "zoon", "zwijn", "paar", "wek", "koop", "zweet", "hees", "hik", "vaas", "zwem", 
    "staart", "toorts", "kook-boek", "hikt", "prijst", "perst", "hijs-kraan", "perk", "krast", 
    "witst", "tent-doek", "mens", "prikt", "morst", "broek-pak"
];

// Week 10 - Kern 4 (o, a)
library[10] = [
    "bak", "bas", "bar", "ban", "waas", "waak", "waan", "waar", "dom", "dot", "dok", "dor", 
    "hoe", "hoen", "hoek", "hoes", "oom", "room", "boom", "zoom", "hap", "sap", "tap", "rap", 
    "zijn", "mijn", "pijn", "wijn", "port", "kort", "mort", "vort", "wrak", "droom", "prijs", 
    "brok", "stoet", "koopt", "wijst", "werk", "haast", "dorp", "spant", "steekt", "krijst", 
    "stikt", "braakt", "prikt", "breekt", "zwets", "spijst", "proest", "sport", "smoest", 
    "kroost", "prijst", "verst", "pompt", "koorts", "sprak", "strik", 
    "sproet", "streek", "strijk", "ijs-baan", "was-zak", "werk-map", "werk-boek", "spoor-boom"
];

// Week 11 - Kern 4 (u, j)
library[11] = [
    "jak", "jat", "jan", "jas", "heen", "heet", "hees", "heer", "hup", "hut", "hum", "hun",
    "zoen", "zoek", "zoet", "zoem", "ook", "rook", "pook", "dook", "bus", "kus", "mus", "rus",
    "wijk", "rijk", "dijk", "prik", "krik", "brik", "wrik", "boek", "joop", "paar", "hek",
    "woon", "roep", "poets", "bons", "remt", "weekt", "wijst", "brak", "stuk", "spoor", 
    "prijs", "knip", "pompt", "wenst", "sipst", "dunst", "vaakst", "dwars", "prijkt", 
    "vreest", "prins", "snurk", "sponst", "snurkt", "stompt", "spitst", "zwaarst", 
    "boom-hut", "kap-stok", "kaars-vet", "aan-komst", "stoep-krijt"
];

// Week 12 - Kern 5 (eu, ie)
library[12] = [
    "deuk", "deun", "deur", "mien", "miep", "mies", "mier", "jas", "jan", "jat", "jak",
    "beek", "been", "beer", "beet", "reus", "neus", "keus", "heus", "kijk", "rijk", "dijk",
    "wijk", "ziet", "piet", "niet", "riet", "win", "min", "vin", "pin", "wiek", "tien",
    "ziek", "biet", "haas", "kan", "mus", "pak", "bier", "men", "zoon", "rust", "sust",
    "kust", "kast", "munt", "kerk", "viert", "haast", "kamp", "stoer", "spijt", "kroon",
    "wrat", "breek", "koorts", "barst", "witst", "kerst", "botst", "jas-zak", "broek-zak",
    "speur-neus", "strop-das", "strijk-stok"
];

// Week 13 - Kern 5 (ou, l)
library[13] = [
    "hek", "her", "hen", "hes", "liep", "lies", "lier", "liet", "waas", "waan", "waar", "waak",
    "put", "pur", "pul", "pup", "loop", "hoop", "doop", "koop", "zij", "jij", "hij", "wij", 
    "hout", "bout", "zout", "mout", "nou", "kou", "hou", "jou", "kaas", "bus", "leuk", "boor", 
    "hiel", "tel", "wek", "elk", "kalk", "wolk", "melk", "klip", "klom", "klus", "klier", 
    "speurt", "spelt", "smult", "steunt", "spiekt", "strot", "straalt", "sproet", "streept", 
    "strijkt", "eerst", "koerst", "perst", "vorst", "barst", "zit-zak", "ijs-baan", "zout-stel", 
    "werk-tas", "kerst-bal"
];

// Week 14 - Kern 5 & 6 (g, uu)
library[14] = [
    "gaar", "gaas", "gaan", "gaat", "gaap", "lap", "lak", "lat", "lam", "lag", 
    "wie", "wiek", "wier", "wiel", "wieg", "doe", "doek", "doen", "doel", "doet", 
    "guur", "huur", "zuur", "puur", "muur", "pol", "wol", "mol", "hol", "bol", 
    "beuk", "leuk", "jeuk", "reuk", "deuk", "lus", "zus", "mus", "dus", "kus", 
    "zout", "bijt", "voeg", "mees", "por", "laag", "pees", "tik", "haan", "rug", 
    "wijk", "pas", "bel", "teug", "bouw", "vaag", "kent", "want", "boent", "leunt", 
    "weent", "kerst", "borst", "koerst", "morst", "barst", "spijt", "spoel", "spoor", 
    "spies", "spaak", "streek", "strak", "strop", "strik", "strijk", "stuur", "vrouw", 
    "tsaar", "prijs", "twijg", "smoes", "bries", "slijm", "gluur", "rups", "kort", 
    "rilt", "buurt", "meest", "tips", "taart", "kiest", "zult", "rasp", "groots", 
    "plots", "spuugt", "klemt", "gluurt", "briest", "spits", "prent", "sjaals", 
    "blijft", "gerst", "komst", "werkt", "winst", "kermt", "kraakt", "sleurt", 
    "zwiert", "knots", "kleurt", "soep-kom", "zout-vat", "bal-zaal", "boom-hut", 
    "zuur-kool", "hijs-kraan", "vis-graat", "bak-blik", "wijn-glas", "bot-breuk", 
    "spier-pijn", "gras-pol", "broek-pak", "vlier-bes", "slijp-tol", "bont-kraag", 
    "kerk-klok", "strijk-bout", "straat-steen", "sport-broek"
];

// Week 15 - Kern 6 (au, ui)
library[15] = [
    "wit", "wim", "wip", "win", "buit", "buis", "buik", "buig", "lap", "lag", "lak", "lam",
    "blaar", "blaas", "blaat", "blaam", "hier", "kier", "vier", "mier", "vuur", "muur", 
    "kuur", "guur", "zout", "hout", "bout", "stout", "rauw", "blauw", "grauw", "klauw", 
    "ram", "kuit", "sok", "gauw", "lauw", "lier", "bier", "vies", "zien", "kous", "wauw", 
    "lijk", "kies", "giet", "muis", "kiep", "ruit", "wiel", "er", "in", "aan", "op", "is", 
    "sloeg", "plus", "vrouw", "sleep", "stuk", "help", "fiets", "zoemt", "leest", "likt", 
    "klimt", "gluurt", "stopt", "druipt", "klomp", "glans", "ploegt", "zwart", "sleept", 
    "slurp", "stram", "spleet", "spriet", "straal", "spruit", "slimst", "groenst", "drukst", 
    "vlugst", "bruinst", "zak-mes", "tuin-man", "deur-bel", "trein-reis", "gras-spriet"
];

// Week 16 - Kern 6 (ei, f)
library[16] = [
    "leef", "leem", "lees", "leen", "mug", "mul", "muf", "mus", "ziek", "zien", "ziel", "ziet", 
    "buit", "buil", "buig", "buik", "lus", "kus", "zus", "bus", "pauw", "dauw", "lauw", "rauw", 
    "gauw", "ei", "mei", "wei", "kei", "hei", "buurt", "tuurt", "kuurt", "duurt", "huurt", 
    "vuur", "goot", "weg", "fijn", "hoog", "jaar", "rein", "kou", "gaf", "fout", "juf", "guur", 
    "vel", "jan", "lief", "mouw", "lig", "wol", "deun", "sein", "juist", "fiets", "rijst", 
    "wiegt", "trui", "flauw", "trein", "dreun", "kreeft", "kleumt", "staart", "spons", 
    "huis-mus", "hout-blok", "stamp-pot", "kerk-plein", "zelf", "warm", "berg", "melk", "wolk", 
    "zoutst", "poetst", "gutst", "malst", "fijnst", "plonst", "sterkst", "stormt", "kleinst", 
    "krapst", "kerst-roos", "kerst-man", "kerst-bal", "kerst-kaart", "kerst-krans"
];

// Week 17 - Kern 6
library[17] = [
    "schaal", "schaar", "schaap", "schaaf", "schaak", "schaam", "scheer", "scheel", "scheen", 
    "scheef", "scheet", "schip", "schil", "schim", "schik", "school", "schoon", "schoof", 
    "schoor", "schoot", "schuin", "schuim", "schuif", "schuit", "schuil", "schol", "schop", 
    "schok", "schot", "schor", "scheur", "scheut", "schijn", "schijf", "schep", "schoen", 
    "schuur", "scherm", "scherp", "scherf", "schelm", "schelp", "schept", "schopt", "schijnt", 
    "schuilt", "schuift", "schilt", "schort", "schrift", "schrapt", "schrijft", "schroeft", 
    "schraapt", "school-tas", "school-bel", "school-deur", "school-plein", "school-melk", 
    "schelp-dier", "schuim-kop", "schuim-taart", "schoen-poets", "schrijf-schrift", "zee-schelp", 
    "vlees-schaal", "taal-schrift", "tuin-scherm", "fruit-schaal", "schuur-deur", "scheer-kwast", 
    "schaak-stuk", "schaak-spel", "schroef-dop"
];