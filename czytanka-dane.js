/* Czytanka Matyldy — dane (litery, światy, słowa, zwroty lektorki) + katalog nagrań.
   Ten plik czyta zarówno strona czytanka-matyldy.html, jak i generator nagrań generuj-glos.mjs. */

/* litera: [nazwa do wymówienia, słowo-przykład, emoji] */
const LETTERS={
 A:['a','ananas','🍍'],O:['o','Ola','👧'],E:['e','Ela','👧'],I:['i','Iga','👧'],U:['u','Ula','👧'],Y:['igrek','yeti','🧌'],
 M:['em','mama','👩'],T:['te','tata','👨'],L:['el','lala','🪆'],D:['de','dom','🏠'],
 K:['ka','kot','🐱'],N:['en','nos','👃'],S:['es','sok','🧃'],
 R:['er','ryba','🐟'],W:['wu','woda','💧'],B:['be','balon','🎈'],P:['pe','pies','🐶'],J:['jot','jajo','🥚'],
 G:['gie','gra','🎮'],Z:['zet','zebra','🦓'],C:['ce','cytryna','🍋'],H:['ha','hak','🪝'],F:['ef','foka','🦭'],
 Ł:['eł','łapa','🐾'],Ó:['o z kreską','król','🤴'],Ś:['eś','ślimak','🐌'],Ć:['cie','ćma','🦋'],Ż:['żet','żaba','🐸'],Ź:['ziet','źrebak','🐎'],Ą:['ą','ząb','🦷'],Ę:['ę','gęś','🪿'],Ń:['eń','koń','🐴']
};
const VOW=['A','O','E','I','U','Y'];
const NOSYL=['Ó','Ą','Ę']; /* litery, które nie tworzą sylab w ćwiczeniach */
const isCons=l=>!VOW.includes(l)&&!NOSYL.includes(l);
const FIRST={A:[['a-na-nas','🍍'],['au-to','🚗'],['ar-buz','🍉']],O:[['o-ko','👁️'],['o-sa','🐝'],['ow-ca','🐑']],E:[['e-kran','📺'],['E-la','👩‍🦰'],['E-mil','👦']],I:[['i-gła','🪡'],['in-dyk','🦃'],['I-ga','🧒']],U:[['ul','🐝'],['u-cho','👂'],['U-la','👱‍♀️']]};
const FIRST_OTHER=[['kot','🐱'],['dom','🏠'],['ma-ma','👩'],['ry-ba','🐟'],['la-la','🪆'],['sok','🧃'],['nos','👃'],['pies','🐶'],['ba-lon','🎈'],['lo-dy','🍦'],['ża-ba','🐸'],['miś','🧸']];

/* words: [sylaby-z-myślnikami, emoji lub ''] */
const WORLDS=[
 {id:'w1',emoji:'🏰',name:'Zamek Samogłosek',tag:'A · O · E · I · U · Y',c1:'#f472b6',c2:'#be185d',letters:['A','O','E','I','U','Y'],words:[],
  lesson:'Samogłoski to litery, które można <b>śpiewać</b>: aaa, ooo, eee! Posłuchaj każdej i znajdź ją w zamku.'},
 {id:'w2',emoji:'🗼',name:'Wieża M i T',tag:'mama, tata, to, tu',c1:'#a78bfa',c2:'#6d28d9',letters:['M','T'],
  words:[['ma-ma','👩'],['ta-ta','👨'],['ma-ta',''],['ta-ma',''],['to',''],['tu',''],['ty',''],['mam',''],['tam',''],['o-to','']],
  sent:['To mama.','To tata.','Mam to.','Tu tata.'],
  lesson:'Poznajesz litery <b>M</b> i <b>T</b>. Łączymy je z samogłoskami w sylaby: <b>MA</b>, <b>TA</b>, <b>TO</b>… a z sylab układamy słowa!'},
 {id:'w3',emoji:'🌳',name:'Las L i D',tag:'lala, dom, lody, Matylda',c1:'#34d399',c2:'#047857',letters:['L','D'],
  words:[['la-la','🪆'],['la-to','☀️'],['dom','🏠'],['da-ma',''],['lo-dy','🍦'],['O-la',''],['E-la',''],['A-la',''],['dym',''],['mo-tyl','🦋'],['Ma-tyl-da',''],['A-me-lia',''],['u-le',''],['ta-lia','']],
  sent:['To Ola.','Ala ma dom.','Mama ma lody.','Matylda i Amelia.','Tu lata motyl.'],
  lesson:'Litery <b>L</b> i <b>D</b>. Teraz możesz przeczytać swoje imię: <b>MA-TYL-DA</b>, i imię siostry: <b>A-ME-LIA</b>!'},
 {id:'w4',emoji:'🌷',name:'Ogród K, N, S',tag:'kot, nos, sok, sanki',c1:'#fb923c',c2:'#c2410c',letters:['K','N','S'],
  words:[['kot','🐱'],['mak',''],['sok','🧃'],['nos','👃'],['sen',''],['las','🌲'],['lis','🦊'],['sa-la',''],['ka-sa',''],['ki-no',''],['san-ki','🛷'],['ko-la-no','🦵'],['mas-ka','🎭'],['o-ko','👁️'],['ko-ty','🐱'],['ko-nik','🐴'],['nu-ta','🎵'],['Na-ta-lia','']],
  sent:['Ala ma kota.','To lis i las.','Kot ma nos.','Tata ma sanki.','Mama i kot.'],
  lesson:'Litery <b>K</b>, <b>N</b> i <b>S</b>. W ogrodzie mieszka <b>KOT</b>, <b>LIS</b> i rośnie <b>MAK</b>. Spróbuj czytać całe słowa!'},
 {id:'w5',emoji:'🏞️',name:'Jezioro R, W, B, P, J',tag:'ryba, woda, balon, pies',c1:'#38bdf8',c2:'#1d4ed8',letters:['R','W','B','P','J'],
  words:[['ry-ba','🐟'],['ro-wer','🚲'],['wo-rek',''],['bal',''],['po-le',''],['lam-pa','💡'],['bu-da',''],['pla-ma',''],['wo-da','💧'],['ja-ma',''],['park',''],['ja-jo','🥚'],['ba-ran','🐏'],['bra-ma',''],['pies','🐶'],['ba-lon','🎈'],['pi-rat','🏴‍☠️'],['ko-ro-na','👑'],['lu-pa','🔍'],['bu-ty','👟'],['tor-ba','👜'],['pal-ma','🌴'],['ba-nan','🍌']],
  sent:['Ola ma balon.','Pies i kot.','Tata ma rower.','Ryba i woda.','To jest park.','Pirat ma mapy.'],
  lesson:'Aż pięć nowych liter: <b>R</b>, <b>W</b>, <b>B</b>, <b>P</b>, <b>J</b>. W jeziorze pływa <b>RY-BA</b>, a na brzegu leży <b>KO-RO-NA</b>!'},
 {id:'w6',emoji:'⛰️',name:'Góry G, Z, C, H, F',tag:'gra, zebra, foka, smok',c1:'#a3e635',c2:'#3f6212',letters:['G','Z','C','H','F'],
  words:[['gra','🎮'],['zu-pa','🍲'],['fo-ka','🦭'],['hak','🪝'],['ze-bra','🦓'],['ko-za','🐐'],['cy-try-na','🍋'],['smok','🐉'],['no-ga','🦵'],['ce-bu-la','🧅'],['gi-ta-ra','🎸'],['za-mek','🏰'],['fo-tel','🛋️'],['far-ba',''],['ga-zet-ka',''],['ho-tel','🏨'],['ko-cur','🐈']],
  sent:['Koza ma nogi.','Smok ma zamek.','Foka lubi ryby.','Zebra i koza.','Ola gra na gitarze.','Tata je zupę.'],
  lesson:'Litery <b>G</b>, <b>Z</b>, <b>C</b>, <b>H</b>, <b>F</b>. W górach mieszka <b>SMOK</b> i strzeże swojego <b>ZAM-KU</b>.'},
 {id:'w7',emoji:'🌈',name:'Tęcza Ogonków',tag:'Ł Ó Ś Ć Ż Ź Ą Ę Ń',c1:'#f0abfc',c2:'#a21caf',letters:['Ł','Ó','Ś','Ć','Ż','Ź','Ą','Ę','Ń'],
  words:[['ła-pa','🐾'],['słoń','🐘'],['miś','🧸'],['ża-ba','🐸'],['król','🤴'],['śli-mak','🐌'],['ząb','🦷'],['rę-ka','✋'],['koń','🐴'],['łód-ka','🛶'],['gęś','🪿'],['ma-ła',''],['łyż-ka','🥄'],['ję-zyk','👅'],['kró-lo-wa','👸'],['żółw','🐢'],['łoś','🫎'],['ćma','🦋'],['źre-bak','🐎'],['ko-ło',''],['pięć','5️⃣'],['ba-let','🩰']],
  sent:['Miś ma łapę.','Żaba skacze.','Król ma koronę.','Słoń je banana.','Koń biega po łące.','Gęś i koń.','Matylda ma pięć lat.'],
  lesson:'Polskie litery z ogonkami i kreskami: <b>Ł</b>, <b>Ó</b>, <b>Ś</b>, <b>Ć</b>, <b>Ż</b>, <b>Ź</b>, <b>Ą</b>, <b>Ę</b>, <b>Ń</b>. Dzięki nim przeczytasz <b>KRÓL</b> i <b>KRÓ-LO-WA</b>!'},
 {id:'w8',emoji:'👑',name:'Bal Księżniczek',tag:'sz, cz, rz, ch, dz i całe zdania',c1:'#fbbf24',c2:'#b45309',letters:[],boss:true,
  words:[['sza-fa',''],['czap-ka','🧢'],['rze-ka',''],['chleb','🍞'],['mysz','🐭'],['księż-nicz-ka','👸'],['wróż-ka','🧚'],['dzwon','🔔'],['chmu-ra','☁️'],['szko-ła','🏫'],['grusz-ka','🍐'],['pszczo-ła','🐝'],['deszcz','🌧️'],['ser-ce','❤️'],['cza-ro-dziej','🧙'],['ry-cerz',''],['su-kien-ka','👗'],['ka-ro-ca',''],['pan-to-fe-lek','🥿']],
  sent:['Księżniczka tańczy na balu.','Wróżka ma różdżkę.','Mysz je ser.','Rycerz ma zamek.','Matylda lubi lody.','Amelia i Matylda tańczą.','Czarodziej ma czapkę.','Pies biega po parku.','Mama czyta bajkę.','Kot pije mleko.'],
  lesson:'Wielki bal! Tu są dwuznaki: <b>SZ</b>, <b>CZ</b>, <b>RZ</b>, <b>CH</b>, <b>DZ</b>. Dwie litery, jeden dźwięk. Czytasz całe zdania. Zostajesz <b>Mistrzynią Czytania</b>!'},

 /* ===== SERIA 2: Kraina Mistrzyni. Każda misja zaczyna się od powtórki tego, co ostatnio było trudne (dziennik pomyłek). ===== */
 {id:'wx',emoji:'🔁',name:'Trening Matyldy',tag:'to, co było trudne',c1:'#fb7185',c2:'#9f1239',series:2,train:true,letters:[],words:[],sent:[],
  lesson:'Tu ćwiczymy tylko to, co ostatnio sprawiało <b>kłopot</b>: litery, sylaby i słowa, które się pomyliły. Za każdym razem inny zestaw, zawsze ten, którego najbardziej potrzebujesz.'},
 {id:'w9',emoji:'🪞',name:'Lustro B, D, P',tag:'bałwan, dynia, pudel',c1:'#60a5fa',c2:'#1e3a8a',series:2,letters:['B','D','P'],confuse:['B','D','P'],
  words:[['dąb','🌳'],['bo-cian','🦩'],['bę-ben','🥁'],['pu-del','🐩'],['bał-wan','⛄'],['bo-bas','👶'],['dy-nia','🎃'],['bu-dyń','🍮'],['pa-pu-ga','🦜'],['po-dusz-ka','🛏️'],['do-bra',''],['bu-dy-nek','🏢'],['pa-da',''],['dro-ga','🛣️'],['pąk','🌸'],['pud-ło','📦'],['bu-rak','🥬'],['po-bud-ka','⏰']],
  sent:['Pudel biega po drodze.','Babcia piecze babkę.','Dynia jest duża.','Bobas pije mleko.','Bocian ma długi dziób.','Pada deszcz na dąb.'],
  lesson:'Litery <b>B</b>, <b>D</b> i <b>P</b> wyglądają jak w lustrze! <b>B</b> ma brzuszek z przodu, <b>D</b> ma brzuszek z tyłu, a <b>P</b> ma brzuszek na górze. Patrz uważnie!'},
 {id:'w10',emoji:'🎵',name:'Rytm Sylab',tag:'ma-li-na, sa-mo-lot',c1:'#fbbf24',c2:'#92400e',series:2,letters:[],extra:'words',
  words:[['ma-li-na','🍓'],['ka-na-pa','🛋️'],['pa-ra-sol','☂️'],['te-le-fon','📱'],['sa-mo-lot','✈️'],['la-ta-wiec','🪁'],['cze-ko-la-da','🍫'],['hu-laj-no-ga','🛴'],['ja-go-dy','🫐'],['mo-ty-lek','🦋'],['to-reb-ka','👜'],['ko-ra-li-ki','📿'],['ka-lo-ry-fer',''],['ko-mi-nek',''],['ma-lo-wan-ka','🎨'],['ro-we-rek','🚲'],['po-ma-rań-cza','🍊'],['do-mi-no','🁣']],
  sent:['Malina jest słodka.','Samolot leci wysoko.','Matylda je czekoladę.','Amelia jedzie na hulajnodze.','Motylek siada na kanapie.','Parasol chroni przed deszczem.'],
  lesson:'Długie słowa to tylko <b>kilka sylab</b> obok siebie. Klaszcz do każdej: <b>MA-LI-NA</b>, <b>SA-MO-LOT</b>, <b>CZE-KO-LA-DA</b>. Sylaba po sylabie, i gotowe!'},
 {id:'w11',emoji:'🧩',name:'Zbitki Liter',tag:'kra, pla, sta, gwia',c1:'#34d399',c2:'#065f46',series:2,letters:[],extra:'words',
  words:[['kra-wat','👔'],['pla-ża','🏖️'],['trak-tor','🚜'],['stół',''],['kwia-ty','💐'],['drze-wo','🌳'],['gwiaz-da','⭐'],['skar-by','💎'],['kla-wisz','🎹'],['sta-tek','🚢'],['krop-ka',''],['pta-szek','🐦'],['słoń-ce','☀️'],['śnieg','❄️'],['grzy-bek','🍄'],['kró-lik','🐰'],['smo-czek','🍼'],['płaszcz','🧥'],['krze-sło','🪑']],
  sent:['Traktor jedzie przez pole.','Na niebie świeci gwiazda.','Królik skacze po trawie.','Statek płynie po morzu.','Ptaszek śpiewa na drzewie.','Kwiaty stoją na stole.'],
  lesson:'Czasem dwie lub trzy spółgłoski stoją <b>obok siebie</b>: <b>KR</b>-awat, <b>PL</b>-aża, <b>ST</b>-atek, <b>GW</b>-iazda. Powiedz je razem, szybko, jednym tchem.'},
 {id:'w12',emoji:'🔤',name:'Dwuznaki',tag:'sz, cz, rz, ch, dz',c1:'#c084fc',c2:'#581c87',series:2,letters:[],digraphs:['SZ','CZ','RZ','CH','DZ'],
  words:[['szyn-ka','🥓'],['cza-pecz-ka','🧢'],['rze-pa',''],['chmur-ka','☁️'],['dzię-cioł','🐦'],['dżem','🍯'],['niedź-wiedź','🐻'],['szczu-rek','🐀'],['kacz-ka','🦆'],['wie-czór','🌙'],['mo-rze','🌊'],['cho-in-ka','🎄'],['dzwo-nek','🔔'],['czo-ło',''],['szklan-ka','🥛'],['rzę-sy',''],['chus-ta','🧣'],['dziew-czyn-ka','👧'],['dzie-ci','🧒']],
  sent:['Szczurek je szynkę.','Kaczka pływa po rzece.','Na choince wisi dzwonek.','Dziewczynka ma czapeczkę.','Wieczorem świeci księżyc.','Niedźwiedź śpi w zimie.'],
  lesson:'Dwie litery, <b>jeden dźwięk</b>: <b>SZ</b> jak szynka, <b>CZ</b> jak czapka, <b>RZ</b> jak rzeka, <b>CH</b> jak chmura, <b>DZ</b> jak dzwonek. Gdy je zobaczysz obok siebie, czytaj je razem.'},
 {id:'w13',emoji:'❓',name:'Zdania i Pytania',tag:'Gdzie jest mój miś?',c1:'#38bdf8',c2:'#075985',series:2,letters:[],extra:'sent',
  words:[['książ-ka','📖'],['ciast-ko','🍪'],['jabł-ko','🍎'],['bab-cia','👵'],['dzia-dek','👴'],['ju-tro',''],['dzi-siaj',''],['gdzie',''],['kie-dy',''],['dla-cze-go',''],['pro-szę',''],['dzię-ku-ję',''],['przed-szko-le','🏫'],['u-ro-dzi-ny','🎂'],['pre-zent','🎁'],['ba-sen','🏊'],['mój',''],['czy','']],
  sent:['Gdzie jest mój miś?','Czy kot lubi mleko?','Kto zjadł moje ciastko?','Matylda czyta książkę.','Jutro idziemy do babci.','Amelia ma dzisiaj urodziny.','Dziękuję za prezent!','Kiedy pójdziemy na basen?','Proszę o jabłko.'],
  lesson:'Zdanie zaczyna się <b>wielką literą</b>, a kończy kropką albo <b>znakiem zapytania</b>. Gdy widzisz <b>?</b>, głos idzie w górę, jak przy pytaniu: Gdzie jest mój miś?'},
 {id:'w14',emoji:'📖',name:'Bajka Matyldy',tag:'cała bajka do przeczytania',c1:'#f472b6',c2:'#831843',series:2,boss:true,letters:[],
  words:[['sios-tra','👧'],['o-gród','🌷'],['łóż-ko','🛏️'],['ra-no','🌅'],['daw-no',''],['bia-ły',''],['zgu-bi-ła',''],['zna-lazł',''],['tań-czy-li',''],['szczęś-li-wie',''],['ko-tek','🐱'],['za-mek','🏰']],
  sent:['Dawno temu żyła księżniczka Matylda.','Miała siostrę Amelię i białego kotka.','Pewnego dnia zgubiła swoją koronę.','Szukała jej w zamku i w ogrodzie.','Kotek znalazł koronę pod łóżkiem.','Matylda zrobiła wielki bal.','Amelia grała na gitarze.','Wszyscy tańczyli do rana.','I żyły długo i szczęśliwie.'],
  lesson:'To jest <b>twoja bajka</b>. Czytasz ją zdanie po zdaniu, w trzech misjach, od początku do końca. Na końcu bajki czeka największa nagroda.'}
];

/* dodatki do awatara: id, nazwa sylabami, slot, czy jest na start (base) — rysunki w czytanka-awatar.js */
const ITEMS=[
 {id:'sukienka',syl:'su-kien-ka',slot:'top',base:true},
 {id:'suknia',syl:'suk-nia',slot:'top',base:true},
 {id:'bluzka',syl:'bluz-ka',slot:'top',base:true},
 {id:'spodnie',syl:'spod-nie',slot:'bottom',base:true},
 {id:'kapelusz',syl:'ka-pe-lusz',slot:'head',base:true},
 {id:'czapka',syl:'czap-ka',slot:'head',base:true},
 /* nagrody, od najkrótszych nazw */
 {id:'buty',syl:'bu-ty',slot:'feet'},
 {id:'torba',syl:'tor-ba',slot:'hand'},
 {id:'balon',syl:'ba-lon',slot:'hand'},
 {id:'korona',syl:'ko-ro-na',slot:'head'},
 {id:'szalik',syl:'sza-lik',slot:'neck'},
 {id:'kotek',syl:'ko-tek',slot:'pet'},
 {id:'kokarda',syl:'ko-kar-da',slot:'head'},
 {id:'kwiatek',syl:'kwia-tek',slot:'head'},
 {id:'korale',syl:'ko-ra-le',slot:'neck'},
 {id:'okulary',syl:'o-ku-la-ry',slot:'face'},
 {id:'spodnica',syl:'spód-ni-ca',slot:'bottom'},
 {id:'rozdzka',syl:'różdż-ka',slot:'hand'},
 {id:'skrzydla',syl:'skrzy-dła',slot:'back'},
 {id:'peleryna',syl:'pe-le-ry-na',slot:'back'},
 /* na końcu: suknie księżniczek */
 {id:'tiara',syl:'tia-ra',slot:'head'},
 {id:'rozana',syl:'suk-nia ró-ża-na',slot:'top'},
 {id:'lodowa',syl:'suk-nia lo-do-wa',slot:'top'},
 {id:'gwiezdna',syl:'suk-nia gwiezd-na',slot:'top'},
 {id:'syrenki',syl:'suk-nia sy-ren-ki',slot:'top'},
 {id:'balowa',syl:'suk-nia ba-lo-wa',slot:'top'},
 /* seria 2 */
 {id:'lizak',syl:'li-zak',slot:'hand'},
 {id:'spinka',syl:'spin-ka',slot:'head'},
 {id:'maska',syl:'mas-ka',slot:'face'},
 {id:'wianek',syl:'wia-nek',slot:'head'},
 {id:'plecak',syl:'ple-cak',slot:'back'},
 {id:'baletki',syl:'ba-let-ki',slot:'feet'},
 {id:'kozaki',syl:'ko-za-ki',slot:'feet'},
 {id:'motylek',syl:'mo-ty-lek',slot:'pet'},
 {id:'parasolka',syl:'pa-ra-sol-ka',slot:'hand'},
 {id:'jednorozec',syl:'jed-no-ro-żec',slot:'pet'},
 {id:'teczowa',syl:'suk-nia tę-czo-wa',slot:'top'},
 {id:'krolowej',syl:'suk-nia kró-lo-wej',slot:'top'},
];

/* stałe zwroty lektorki (kind 'say') */
const PRAISE=['Brawo!','Super, Matylda!','Świetnie!','Tak jest!','Wspaniale!','Pięknie czytasz!','Jesteś mistrzynią!'];
const GREETS=['Cześć Matylda! Wybierz świat i zbieraj gwiazdki!','Każda gwiazdka to nowa naklejka do albumu.','Kliknij głośniczek, a przeczytam ci zadanie na głos.','Naciśnij zielony mikrofon i przeczytaj, a posłucham!','Dziś poczytamy jak prawdziwa księżniczka.','W serii drugiej czekają nowe światy, bajka i nowe ubranka!'];
const SAY={
  findLetter:'Gdzie jest ta litera?', readLetter:'Jaka to litera? Powiedz głośno.', firstSoundA:'Które słowo zaczyna się na a?', firstSoundO:'Które słowo zaczyna się na o?', firstSoundE:'Które słowo zaczyna się na e?', firstSoundI:'Które słowo zaczyna się na i?', firstSoundU:'Które słowo zaczyna się na u?',
  findSyllable:'Znajdź sylabę, którą mówię.', pictureWord:'Przeczytaj słowa i znajdź to, które pasuje do obrazka.', findWord:'Znajdź słowo, które mówię.', buildWord:'Ułóż to słowo z klocków.', readWord:'Przeczytaj to słowo.', readSentence:'Przeczytaj całe zdanie.',
  again:'Hmm, spróbuj jeszcze raz.', almost:'Prawie! Posłuchaj, jak łączymy sylaby:', yourTurn:'Teraz ty.', together:'Czytamy razem:', soundsWord:'Tak brzmi to słowo:', soundsSent:'Tak brzmi to zdanie:',
  nothing:'Nic nie usłyszałam. Spróbuj jeszcze raz.', thisIs:'To jest:', thisWord:'To jest:', repeat:'Powtórz:', written:'Tu jest napisane:', sayIt:'Powiedz.',
  bravo:'Brawo, Matylda!', almostEnd:'Prawie!', r3:'Wszystkie gwiazdki! Jesteś mistrzynią czytania!', r2:'Świetnie! Jeszcze trochę i będą trzy gwiazdki.', r1:'Brawo! Masz gwiazdkę. Spróbuj jeszcze raz po więcej!', r0:'Nie szkodzi! Spróbuj jeszcze raz, dasz radę.',
  hello:'Cześć Matylda! Jestem twoją lektorką. Posłuchaj: ko, ro, na. Korona.',
  newGift:'Masz nowy dodatek dla swojej postaci! Ułóż jego nazwę, żeby go odblokować.', buildName:'Ułóż nazwę tego dodatku.', fillVowels:'Wstaw brakujące samogłoski w nazwie tego dodatku.', unlocked:'Brawo! Dodatek odblokowany. Zajrzyj do szafy i ubierz swoją postać.', wardrobe:'To twoja szafa. Dotknij ubranka, żeby je założyć.',
  train:'Trening! Ćwiczymy to, co ostatnio było trudne. Dasz radę, Matylda!', review:'Powtórka. To już znasz, spróbuj jeszcze raz.', storyNext:'Czytaj dalej bajkę.', series2:'Seria druga! Nowe światy, dłuższe słowa i cała bajka do przeczytania.'
};

/* ---- katalog nagrań: każda jednostka to {kind, text}; nazwa pliku = kind-fnv(kind|text).m4a ---- */
function fnv(s){let h=0x811c9dc5;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0}return h.toString(16).padStart(8,'0')}
const plainWord=w=>w.replace(/-/g,'');
/* tekst, który lektorka ma nagrać dla danej jednostki */
function unitText(kind,text){
  if(kind==='letter'){const [n,ex]=LETTERS[text];return ['Ó','Ą','Ę','Ń'].includes(text)?`Litera ${n}, jak w słowie ${ex}.`:`Litera ${n}, jak ${ex}.`}
  if(kind==='syl'){const t=text.toLowerCase();return `Posłuchaj. Sylaba: ${t}. Jeszcze raz: ${t}.`}
  if(kind==='word')return `Słowo ${plainWord(text)}.`;
  if(kind==='model'){const p=text.split(/[- ]/);return p.length>1?`Czytamy sylabami: ${p.map(x=>x.toLowerCase()).join(', ')}. Razem: ${plainWord(text)}.`:`Słowo ${plainWord(text)}.`}
  return text;
}
const unitBaseOld=(kind,text)=>`${kind}-${fnv(kind+'|'+text)}`;
/* nazwa pliku zależy od nagrywanego zdania: zmiana tekstu = nowy plik */
const unitBase=(kind,text)=>`${kind}-${fnv(kind+'|'+unitText(kind,text))}`;
const unitFile=(kind,text)=>unitBase(kind,text)+'.m4a';
function katalogNagran(){
  const out=[],seen=new Set();const add=(kind,text)=>{const k=kind+'|'+text;if(seen.has(k))return;seen.add(k);out.push({kind,text,file:unitFile(kind,text),say:unitText(kind,text)})};
  Object.keys(LETTERS).forEach(l=>add('letter',l));
  const cons=[...new Set(WORLDS.flatMap(w=>w.letters).filter(isCons))];
  cons.forEach(c=>VOW.forEach(v=>add('syl',c+v)));
  WORLDS.filter(w=>w.digraphs).forEach(w=>w.digraphs.forEach(d=>VOW.forEach(v=>add('syl',d+v))));
  const words=[...WORLDS.flatMap(w=>w.words.map(x=>x[0])),...Object.values(FIRST).flat().map(x=>x[0]),...FIRST_OTHER.map(x=>x[0])];
  words.forEach(w=>{add('word',w);if(w.includes('-'))add('model',w)});
  ITEMS.forEach(it=>{add('word',it.syl);if(it.syl.includes('-'))add('model',it.syl)});
  WORLDS.forEach(w=>(w.sent||[]).forEach(s=>add('sent',s)));
  PRAISE.forEach(p=>add('say',p));GREETS.forEach(g=>add('say',g));Object.values(SAY).forEach(s=>add('say',s));
  WORLDS.forEach(w=>add('say',w.lesson.replace(/<[^>]+>/g,'').replace(/-/g,'')));
  return out;
}
if(typeof module!=='undefined')module.exports={unitBase,ITEMS,unitBaseOld,LETTERS,VOW,NOSYL,isCons,FIRST,FIRST_OTHER,WORLDS,PRAISE,GREETS,SAY,fnv,unitText,unitFile,katalogNagran};
