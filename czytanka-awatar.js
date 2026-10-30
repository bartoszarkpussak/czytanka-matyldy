/* Czytanka Matyldy — awatar: dziewczynka z długimi białymi włosami + ubranka i dodatki (SVG, viewBox 0 0 200 300).
   avatarSvg(outfit, size, opts) → string SVG. outfit = {top, bottom, head, face, neck, feet, hand, back, pet} (id dodatku lub null). */
const AV={
  skin:'#f7d9c4', skinD:'#e8bfa6', hair:'#f7f7fa', hairD:'#d9dae3', cheek:'#f9b4c0', mouth:'#c0392b', eye:'#3b2a4a',
  tee:'#ffffff', legg:'#c9b8e8'
};
const AVP={ /* warstwy rysowane w tej kolejności */
  back:{
    skrzydla:`<g opacity=".95"><path d="M70 125 C20 95 20 175 68 175 Z" fill="#e8f4ff" stroke="#9fd0ff" stroke-width="2"/><path d="M130 125 C180 95 180 175 132 175 Z" fill="#e8f4ff" stroke="#9fd0ff" stroke-width="2"/><path d="M66 150 C40 140 38 170 68 168" fill="none" stroke="#bfe0ff" stroke-width="2"/><path d="M134 150 C160 140 162 170 132 168" fill="none" stroke="#bfe0ff" stroke-width="2"/></g>`,
    plecak:`<rect x="60" y="108" width="80" height="74" rx="16" fill="#2b7bd6"/><rect x="60" y="150" width="80" height="32" rx="12" fill="#1d5fb0"/><path d="M76 108 v-6 h48 v6" fill="none" stroke="#1d5fb0" stroke-width="4"/>`,
    peleryna:`<path d="M72 112 L48 235 L152 235 L128 112 Z" fill="#c0392b"/><path d="M72 112 L128 112 L124 130 L76 130 Z" fill="#e74c3c"/>`
  },
  hairBack:`<path d="M62 70 C46 110 50 170 58 215 L80 215 L78 150 L122 150 L120 215 L142 215 C150 170 154 110 138 70 Z" fill="${AV.hair}" stroke="${AV.hairD}" stroke-width="2"/>`,
  legs:`<rect x="82" y="175" width="16" height="56" rx="7" fill="${AV.legg}"/><rect x="102" y="175" width="16" height="56" rx="7" fill="${AV.legg}"/>`,
  feetBase:`<path d="M78 228 h22 v10 h-26 a5 5 0 0 1 0 -10 Z" fill="#8e7cc3"/><path d="M100 228 h22 a5 5 0 0 1 0 10 h-26 Z" fill="#8e7cc3"/>`,
  feet:{
    baletki:`<path d="M78 226 h22 v12 h-26 a6 6 0 0 1 0 -12 Z" fill="#ff9ebb"/><path d="M100 226 h22 a6 6 0 0 1 0 12 h-26 Z" fill="#ff9ebb"/><path d="M82 226 l4 -12 M94 226 l-4 -12 M106 226 l4 -12 M118 226 l-4 -12" stroke="#ff5fa2" stroke-width="2"/>`,
    kozaki:`<path d="M80 196 h20 v42 h-26 a6 6 0 0 1 0 -12 h6 Z" fill="#6d4c41"/><path d="M100 196 h20 v30 h6 a6 6 0 0 1 0 12 h-26 Z" fill="#6d4c41"/><path d="M80 200 h20 M100 200 h20" stroke="#a1887f" stroke-width="3"/>`,
    buty:`<path d="M76 212 h24 v26 h-28 a6 6 0 0 1 0 -12 h4 Z" fill="#d7263d"/><path d="M100 212 h24 v14 h4 a6 6 0 0 1 0 12 h-28 Z" fill="#d7263d"/><path d="M76 216 h24 M100 216 h24" stroke="#ff8fa3" stroke-width="3"/>`
  },
  bottom:{
    spodnie:`<path d="M78 172 h44 v12 l-4 50 h-15 l-3 -40 l-3 40 h-15 l-4 -50 Z" fill="#3b6fd6"/><path d="M78 176 h44" stroke="#2b50a0" stroke-width="3"/>`,
    spodnica:`<path d="M74 172 h52 l12 46 h-76 Z" fill="#9b59b6"/><path d="M74 172 h52" stroke="#7d3c98" stroke-width="4"/><path d="M80 190 l8 20 M100 190 l0 22 M120 190 l-8 20" stroke="#b07cc6" stroke-width="2"/>`
  },
  torsoBase:`<path d="M74 108 h52 v70 h-52 Z" fill="${AV.tee}" stroke="#e6e6ee" stroke-width="1.5"/>`,
  top:{
    sukienka:`<path d="M74 108 h52 l6 34 h-64 Z" fill="#ff5fa2"/><path d="M68 142 h64 l18 78 h-100 Z" fill="#ff7fb8"/><path d="M68 142 h64" stroke="#ff3d8f" stroke-width="4"/><g fill="#ffd6e7"><path d="M88 170 l5 -5 l5 5 l-5 7 Z"/><path d="M108 185 l5 -5 l5 5 l-5 7 Z"/><path d="M78 195 l5 -5 l5 5 l-5 7 Z"/></g>`,
    suknia:`<path d="M74 108 h52 l6 34 h-64 Z" fill="#4f8ef7"/><path d="M68 142 h64 l26 110 h-116 Z" fill="#6fa3ff"/><path d="M68 142 h64" stroke="#2f6fe0" stroke-width="4"/><g fill="#ffffff"><circle cx="90" cy="175" r="2.5"/><circle cx="120" cy="190" r="2.5"/><circle cx="100" cy="215" r="2.5"/><circle cx="80" cy="235" r="2.5"/><circle cx="130" cy="230" r="2.5"/></g>`,
    teczowa:`<defs><clipPath id="cTecz"><path d="M68 144 h64 c4 40 22 76 36 124 h-136 c14 -48 32 -84 36 -124 Z"/></clipPath></defs><path d="M74 108 h52 l6 36 h-64 Z" fill="#ff6b6b"/><g clip-path="url(#cTecz)"><rect x="20" y="144" width="160" height="21" fill="#ff6b6b"/><rect x="20" y="165" width="160" height="21" fill="#ffa94d"/><rect x="20" y="186" width="160" height="21" fill="#ffd93d"/><rect x="20" y="207" width="160" height="21" fill="#6bcb77"/><rect x="20" y="228" width="160" height="21" fill="#4d96ff"/><rect x="20" y="249" width="160" height="21" fill="#b26bff"/></g><path d="M68 144 h64" stroke="#fff" stroke-width="4"/>`,
    krolowej:`<path d="M74 108 h52 l6 36 h-64 Z" fill="#6a1b9a"/><path d="M68 144 h64 c4 40 26 76 44 124 h-152 c18 -48 40 -84 44 -124 Z" fill="#8e24aa"/><path d="M68 144 h64" stroke="#f6b40e" stroke-width="4"/><path d="M100 144 v124" stroke="#f6b40e" stroke-width="3"/><path d="M26 266 h148" stroke="#fff" stroke-width="9"/><g fill="#2d3436"><circle cx="44" cy="266" r="2"/><circle cx="66" cy="266" r="2"/><circle cx="88" cy="266" r="2"/><circle cx="110" cy="266" r="2"/><circle cx="132" cy="266" r="2"/><circle cx="154" cy="266" r="2"/></g><g fill="#f6b40e"><path d="M84 180 l2 -6 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 Z"/><path d="M116 215 l2 -6 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 Z"/></g>`,
    balowa:`<defs><linearGradient id="gBal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe08a"/><stop offset="1" stop-color="#f2b705"/></linearGradient></defs><circle cx="66" cy="114" r="11" fill="#ffe9a8"/><circle cx="134" cy="114" r="11" fill="#ffe9a8"/><path d="M74 108 h52 l6 36 h-64 Z" fill="#f6c343"/><path d="M68 144 h64 c6 40 26 80 44 128 h-152 c18 -48 38 -88 44 -128 Z" fill="url(#gBal)"/><path d="M60 200 c20 10 60 10 80 0 M50 236 c28 12 72 12 100 0" fill="none" stroke="#fff3c4" stroke-width="3"/><path d="M68 144 h64" stroke="#d99a06" stroke-width="4"/><g fill="#fff"><path d="M90 170 l2 -6 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 Z"/><path d="M118 215 l2 -6 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 Z"/><path d="M76 250 l2 -6 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 Z"/></g>`,
    rozana:`<path d="M74 108 h52 l6 36 h-64 Z" fill="#ff8fb1"/><path d="M68 144 h64 c4 40 22 76 36 124 h-136 c14 -48 32 -84 36 -124 Z" fill="#ffb3c9"/><path d="M68 144 h64" stroke="#e0338a" stroke-width="4"/><path d="M100 144 v124" stroke="#ff8fb1" stroke-width="2" stroke-dasharray="4 6"/><g fill="#e0338a"><circle cx="82" cy="175" r="6"/><circle cx="118" cy="195" r="6"/><circle cx="90" cy="230" r="6"/><circle cx="124" cy="245" r="6"/><circle cx="70" cy="255" r="6"/></g><g fill="#ff5fa2"><circle cx="82" cy="175" r="3"/><circle cx="118" cy="195" r="3"/><circle cx="90" cy="230" r="3"/><circle cx="124" cy="245" r="3"/><circle cx="70" cy="255" r="3"/></g><g fill="#5bb85d"><ellipse cx="88" cy="180" rx="4" ry="2"/><ellipse cx="112" cy="200" rx="4" ry="2"/><ellipse cx="96" cy="235" rx="4" ry="2"/></g>`,
    gwiezdna:`<path d="M74 108 h52 l6 36 h-64 Z" fill="#2b2d7a"/><path d="M68 144 h64 c4 40 22 76 36 124 h-136 c14 -48 32 -84 36 -124 Z" fill="#3a3d9e"/><path d="M68 144 h64" stroke="#c0c6ff" stroke-width="4"/><path d="M38 268 h124" stroke="#c0c6ff" stroke-width="5"/><g fill="#fff8c6"><path d="M84 168 l2 -6 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 Z"/><path d="M118 190 l2 -6 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 Z"/><path d="M96 215 l2 -6 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 Z"/><path d="M72 240 l2 -6 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 Z"/><path d="M126 248 l2 -6 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 Z"/><circle cx="108" cy="170" r="1.5"/><circle cx="80" cy="205" r="1.5"/><circle cx="112" cy="232" r="1.5"/></g>`,
    syrenki:`<path d="M74 108 h52 l4 40 h-60 Z" fill="#2ec4b6"/><path d="M70 148 h60 c2 40 -4 70 -4 90 c20 10 30 22 36 32 h-124 c6 -10 16 -22 36 -32 c0 -20 -6 -50 -4 -90 Z" fill="#48d8c8"/><path d="M70 148 h60" stroke="#149a8c" stroke-width="4"/><g fill="none" stroke="#9ff0e6" stroke-width="1.5"><path d="M76 165 q6 6 12 0 q6 6 12 0 q6 6 12 0 q6 6 12 0 M76 185 q6 6 12 0 q6 6 12 0 q6 6 12 0 q6 6 12 0 M78 205 q6 6 12 0 q6 6 12 0 q6 6 12 0 M80 225 q6 6 12 0 q6 6 12 0 M84 245 q6 6 12 0"/></g>`,
    lodowa:`<path d="M74 108 h52 l6 36 h-64 Z" fill="#9fd8ff"/><path d="M68 144 h64 c4 40 22 76 36 124 h-136 c14 -48 32 -84 36 -124 Z" fill="#cdeeff"/><path d="M68 144 h64" stroke="#5fb8f0" stroke-width="4"/><path d="M80 110 c-6 -14 -16 -16 -28 -8 M120 110 c6 -14 16 -16 28 -8" fill="none" stroke="#e6f7ff" stroke-width="5" stroke-linecap="round"/><g stroke="#fff" stroke-width="2" fill="none"><path d="M90 175 v14 M83 182 h14 M85 177 l10 10 M95 177 l-10 10"/><path d="M118 215 v14 M111 222 h14 M113 217 l10 10 M123 217 l-10 10"/><path d="M78 245 v14 M71 252 h14 M73 247 l10 10 M83 247 l-10 10"/></g>`,
    bluzka:`<path d="M74 108 h52 v66 h-52 Z" fill="#f9c846"/><path d="M58 110 l16 -2 v28 l-14 4 Z M142 110 l-16 -2 v28 l14 4 Z" fill="#f9c846"/><circle cx="100" cy="125" r="3" fill="#fff"/><circle cx="100" cy="140" r="3" fill="#fff"/><circle cx="100" cy="155" r="3" fill="#fff"/>`
  },
  arms:`<path d="M74 110 c-18 10 -22 40 -20 62 a7 7 0 0 0 14 0 c0 -18 4 -36 10 -46 Z" fill="${AV.skin}"/><path d="M126 110 c18 10 22 40 20 62 a7 7 0 0 1 -14 0 c0 -18 -4 -36 -10 -46 Z" fill="${AV.skin}"/>`,
  neck:{
    szalik:`<path d="M76 104 h48 v14 h-48 Z" fill="#e74c3c"/><path d="M104 116 h18 v40 h-18 Z" fill="#e74c3c"/><path d="M76 108 h48 M106 130 h14 M106 142 h14" stroke="#f9d4cf" stroke-width="3"/>`,
    korale:`<path d="M80 106 q20 22 40 0" fill="none" stroke="#f06292" stroke-width="2"/><g fill="#f06292"><circle cx="84" cy="110" r="3"/><circle cx="91" cy="115" r="3"/><circle cx="100" cy="117" r="3.5"/><circle cx="109" cy="115" r="3"/><circle cx="116" cy="110" r="3"/></g>`
  },
  head:`<ellipse cx="100" cy="96" rx="9" ry="8" fill="${AV.skin}"/><circle cx="100" cy="68" r="34" fill="${AV.skin}"/><circle cx="84" cy="78" r="5" fill="${AV.cheek}" opacity=".7"/><circle cx="116" cy="78" r="5" fill="${AV.cheek}" opacity=".7"/><ellipse cx="88" cy="70" rx="3.4" ry="4.5" fill="${AV.eye}"/><ellipse cx="112" cy="70" rx="3.4" ry="4.5" fill="${AV.eye}"/><circle cx="89.5" cy="68" r="1.2" fill="#fff"/><circle cx="113.5" cy="68" r="1.2" fill="#fff"/><path d="M92 84 q8 7 16 0" fill="none" stroke="${AV.mouth}" stroke-width="2.2" stroke-linecap="round"/>`,
  hairFront:`<path d="M66 64 C66 34 86 28 100 28 C114 28 134 34 134 64 C128 48 120 44 100 44 C80 44 72 48 66 64 Z" fill="${AV.hair}" stroke="${AV.hairD}" stroke-width="2"/><path d="M66 64 c-4 20 -2 44 2 60 l10 -2 c-4 -18 -4 -40 -2 -56 Z M134 64 c4 20 2 44 -2 60 l-10 -2 c4 -18 4 -40 2 -56 Z" fill="${AV.hair}" stroke="${AV.hairD}" stroke-width="2"/>`,
  face:{
    maska:`<path d="M72 62 q14 -12 27 0 q1 5 0 8 q-13 7 -27 1 Z M128 62 q-14 -12 -27 0 q-1 5 0 8 q13 7 27 1 Z" fill="#8e44ad"/><circle cx="88" cy="68" r="4" fill="#fff"/><circle cx="112" cy="68" r="4" fill="#fff"/><path d="M128 62 l10 -10" stroke="#8e44ad" stroke-width="2.5"/><g fill="#f6b40e"><circle cx="76" cy="60" r="1.8"/><circle cx="124" cy="60" r="1.8"/><circle cx="100" cy="64" r="1.8"/></g>`,
    okulary:`<g fill="none" stroke="#2d3436" stroke-width="2.5"><circle cx="88" cy="70" r="9"/><circle cx="112" cy="70" r="9"/><path d="M97 70 h6 M79 68 l-8 -3 M121 68 l8 -3"/></g><circle cx="88" cy="70" r="7.5" fill="#9fd8ff" opacity=".35"/><circle cx="112" cy="70" r="7.5" fill="#9fd8ff" opacity=".35"/>`
  },
  headwear:{
    kapelusz:`<ellipse cx="100" cy="44" rx="48" ry="9" fill="#f4a261"/><path d="M72 44 c0 -22 10 -30 28 -30 c18 0 28 8 28 30 Z" fill="#f4a261"/><path d="M72 40 h56" stroke="#e76f51" stroke-width="5"/>`,
    czapka:`<path d="M64 60 c0 -26 16 -36 36 -36 c20 0 36 10 36 36 Z" fill="#e63946"/><path d="M64 58 h72 v10 h-72 Z" fill="#f1faee" stroke="#e63946" stroke-width="1"/><circle cx="100" cy="24" r="7" fill="#f1faee" stroke="#e63946" stroke-width="2"/>`,
    korona:`<path d="M72 44 l8 -22 l12 14 l8 -20 l8 20 l12 -14 l8 22 Z" fill="#f6b40e" stroke="#d99a06" stroke-width="2"/><rect x="72" y="42" width="56" height="6" fill="#f6b40e" stroke="#d99a06" stroke-width="2"/><circle cx="100" cy="30" r="3" fill="#e63946"/><circle cx="84" cy="38" r="2.5" fill="#2ecc71"/><circle cx="116" cy="38" r="2.5" fill="#3498db"/>`,
    kokarda:`<g transform="translate(130 40)"><path d="M0 0 l-14 -10 v20 Z M0 0 l14 -10 v20 Z" fill="#ff5fa2" stroke="#e0338a" stroke-width="2"/><circle cx="0" cy="0" r="4" fill="#ffd6e7" stroke="#e0338a" stroke-width="1.5"/></g>`,
    wianek:`<path d="M68 50 q32 -16 64 0" fill="none" stroke="#5bb85d" stroke-width="4"/><g fill="#ffb3c6"><circle cx="72" cy="49" r="4.5"/><circle cx="85" cy="43" r="4.5"/><circle cx="100" cy="41" r="4.5"/><circle cx="115" cy="43" r="4.5"/><circle cx="128" cy="49" r="4.5"/></g><g fill="#f6b40e"><circle cx="72" cy="49" r="1.6"/><circle cx="85" cy="43" r="1.6"/><circle cx="100" cy="41" r="1.6"/><circle cx="115" cy="43" r="1.6"/><circle cx="128" cy="49" r="1.6"/></g>`,
    spinka:`<g transform="translate(72 46) rotate(-20)"><rect x="-10" y="-3" width="20" height="6" rx="3" fill="#f6b40e"/><path d="M-1 -9 l3 -4 l3 4 l4 1 l-4 3 l-1 4 l-2 -3 l-4 -1 Z" fill="#ff5fa2"/></g>`,
    tiara:`<path d="M78 42 c6 -10 12 -14 22 -14 c10 0 16 4 22 14" fill="none" stroke="#dfe6f3" stroke-width="4" stroke-linecap="round"/><path d="M92 34 l8 -14 l8 14 Z" fill="#dfe6f3"/><circle cx="100" cy="28" r="3.5" fill="#ff5fa2"/><circle cx="86" cy="36" r="2.5" fill="#8fd3ff"/><circle cx="114" cy="36" r="2.5" fill="#8fd3ff"/>`,
    kwiatek:`<g transform="translate(68 46)"><g fill="#ffb3c6"><circle cx="0" cy="-7" r="4.5"/><circle cx="7" cy="-2" r="4.5"/><circle cx="4" cy="6" r="4.5"/><circle cx="-4" cy="6" r="4.5"/><circle cx="-7" cy="-2" r="4.5"/></g><circle cx="0" cy="0" r="3.5" fill="#f6b40e"/></g>`
  },
  hand:{
    lizak:`<path d="M146 172 l12 -34" stroke="#fff" stroke-width="3"/><circle cx="160" cy="132" r="12" fill="#ff5fa2"/><path d="M152 132 a8 8 0 0 1 16 0 a4 4 0 0 1 -8 0" fill="none" stroke="#fff" stroke-width="2.5"/>`,
    parasolka:`<path d="M146 172 l12 -42" stroke="#555" stroke-width="2"/><path d="M128 132 q30 -36 60 0 Z" fill="#a78bfa"/><path d="M128 132 q7 -8 15 0 q7 -8 15 0 q7 -8 15 0 q7 -8 15 0" fill="none" stroke="#7c3aed" stroke-width="2"/><path d="M158 100 v-8" stroke="#555" stroke-width="2"/>`,
    torba:`<path d="M138 165 h26 v26 h-26 Z" fill="#8d5524" rx="3"/><path d="M143 165 c0 -10 16 -10 16 0" fill="none" stroke="#8d5524" stroke-width="3"/><circle cx="151" cy="178" r="2.5" fill="#f6b40e"/>`,
    balon:`<path d="M146 172 q4 -20 4 -40" fill="none" stroke="#555" stroke-width="1.5"/><ellipse cx="152" cy="112" rx="16" ry="20" fill="#ff5fa2"/><path d="M152 132 l-3 5 h6 Z" fill="#ff5fa2"/><ellipse cx="146" cy="104" rx="4" ry="6" fill="#fff" opacity=".5"/>`,
    rozdzka:`<path d="M146 172 l18 -40" stroke="#8e44ad" stroke-width="3" stroke-linecap="round"/><path d="M164 132 l3 -9 l3 9 l9 3 l-9 3 l-3 9 l-3 -9 l-9 -3 Z" fill="#f6b40e"/><circle cx="158" cy="120" r="1.5" fill="#f6b40e"/><circle cx="176" cy="126" r="1.5" fill="#f6b40e"/>`
  },
  pet:{
    motylek:`<g transform="translate(162 150)"><path d="M0 0 c-14 -16 -22 2 -4 8 Z M0 0 c14 -16 22 2 4 8 Z M0 2 c-14 12 -22 0 -4 -4 Z M0 2 c14 12 22 0 4 -4 Z" fill="#ff8fb1" stroke="#e0338a" stroke-width="1"/><path d="M0 -5 v13" stroke="#5b3a7a" stroke-width="2"/><path d="M0 -5 l-3 -5 M0 -5 l3 -5" stroke="#5b3a7a" stroke-width="1"/></g>`,
    jednorozec:`<g transform="translate(38 205)"><ellipse cx="0" cy="22" rx="18" ry="12" fill="#fff" stroke="#e9d5ff"/><circle cx="12" cy="6" r="11" fill="#fff" stroke="#e9d5ff"/><path d="M16 -4 l3 -14 l4 14 Z" fill="#f6b40e"/><path d="M4 0 q-8 -2 -10 10 q-6 0 -6 10 q-2 10 4 14" fill="none" stroke="#c084fc" stroke-width="4" stroke-linecap="round"/><circle cx="16" cy="6" r="1.5" fill="#2d3436"/><path d="M-14 22 q-10 -4 -8 -16" fill="none" stroke="#f9a8d4" stroke-width="4" stroke-linecap="round"/><rect x="-10" y="30" width="5" height="8" fill="#fff"/><rect x="6" y="30" width="5" height="8" fill="#fff"/></g>`,
    kotek:`<g transform="translate(150 200)"><ellipse cx="0" cy="22" rx="16" ry="12" fill="#f39c12"/><circle cx="-6" cy="8" r="11" fill="#f39c12"/><path d="M-14 2 l-2 -10 l8 5 Z M2 2 l2 -10 l-8 5 Z" fill="#f39c12"/><circle cx="-10" cy="7" r="1.5" fill="#2d3436"/><circle cx="-3" cy="7" r="1.5" fill="#2d3436"/><path d="M-8 11 q1.5 2 3 0" fill="none" stroke="#2d3436" stroke-width="1"/><path d="M14 20 q12 -4 10 -16" fill="none" stroke="#f39c12" stroke-width="4" stroke-linecap="round"/></g>`
  }
};
const AVSLOT={lizak:'hand',spinka:'head',maska:'face',wianek:'head',plecak:'back',baletki:'feet',kozaki:'feet',motylek:'pet',parasolka:'hand',jednorozec:'pet',teczowa:'top',krolowej:'top',sukienka:'top',suknia:'top',bluzka:'top',balowa:'top',rozana:'top',gwiezdna:'top',syrenki:'top',lodowa:'top',tiara:'head',spodnie:'bottom',spodnica:'bottom',kapelusz:'head',czapka:'head',korona:'head',kokarda:'head',kwiatek:'head',okulary:'face',szalik:'neck',korale:'neck',buty:'feet',torba:'hand',balon:'hand',rozdzka:'hand',skrzydla:'back',peleryna:'back',kotek:'pet'};
const isDress=id=>['sukienka','suknia','balowa','rozana','gwiezdna','syrenki','lodowa','teczowa','krolowej'].includes(id);
function avatarSvg(o,size=200,opts={}){
  o=o||{};const L=[];
  if(o.back&&AVP.back[o.back])L.push(AVP.back[o.back]);
  L.push(AVP.hairBack,AVP.legs);
  L.push(o.feet&&AVP.feet[o.feet]?AVP.feet[o.feet]:AVP.feetBase);
  if(o.bottom&&AVP.bottom[o.bottom]&&!isDress(o.top))L.push(AVP.bottom[o.bottom]);
  L.push(AVP.torsoBase);
  if(o.top&&AVP.top[o.top])L.push(AVP.top[o.top]);
  L.push(AVP.arms);
  if(o.neck&&AVP.neck[o.neck])L.push(AVP.neck[o.neck]);
  L.push(AVP.head,AVP.hairFront);
  if(o.face&&AVP.face[o.face])L.push(AVP.face[o.face]);
  if(o.head&&AVP.headwear[o.head])L.push(AVP.headwear[o.head]);
  if(o.hand&&AVP.hand[o.hand])L.push(AVP.hand[o.hand]);
  if(o.pet&&AVP.pet[o.pet])L.push(AVP.pet[o.pet]);
  const h=Math.round(size*1.5);
  return `<svg viewBox="0 0 200 300" width="${size}" height="${h}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible${opts.style?';'+opts.style:''}">${L.join('')}</svg>`;
}
/* podgląd samego dodatku (na kafelku w szafie): postać wyszarzona, dodatek w kolorze */
function itemPreviewSvg(id,size=80){
  const slot=AVSLOT[id];const o={};o[slot]=id;if(slot==='bottom')o.top='bluzka';
  return avatarSvg(o,size);
}
if(typeof module!=='undefined')module.exports={avatarSvg,itemPreviewSvg,AVSLOT};
