/* 언어 문제*/
const langData = [
{
  q: "소금(salt) 지급에서 유래한 이 영어 단어는?",
  a: "salary",
  alt: ["Salary", "샐러리"]
},
{
  q: "이탈리아어 ‘banca(벤치·탁자)’에서 비롯된 이 영어 단어는?",
  a: "bank",
  alt: ["Bank", "뱅크"]
},
{
  q: "라틴어로 ‘가면’에서 비롯된 이 영어 단어는?",
  a: "persona",
  alt: ["Persona", "페르소나"]
},
{
  q: "아무 근거 없이 미신을 믿고 불길함을 두려워하는 태도를 뜻하는 한자어는?",
  a: "기우",
  explain:"杞憂"
},
{
  q: "남을 헐뜯고 모함하여 해를 끼치는 말을 의미하는 사자성어는?",
  a: "중상모략",
  explain:"中傷謀略"
},
{
  q: "성과 없이 헛수고만 하는 노력을 뜻하는 사자성어는?",
  a: "도로무익",
  explain:"徒勞無益"
},
{
  q: "의논만 하고 아무런 행동이 따르지 않는 상태를 뜻하는 사자성어는?",
  a: "탁상공론",
  explain:"卓上空論"
},
{
  q: "사람이나 사물이 드러나서 분명히 나타나는 것을 뜻하는 한자어는?",
  a: "현현",
  explain:"顯現"
}
];

/* 사회·정치·법 문제*/
const societyData = [
{
  q: "대한민국 아동복지법에서 '어린이'를 일컫는 아동은 만 몇 세 미만을 의미하는가?",
  a: "18",
  alt: ["18세"],
  explain:"‘어린이’라는 말은 1920년에 방정환(方定煥)이 \n어린 아동들을 하나의 인격체로 보아야 한다는 취지에서 처음으로 사용한 표현이다.",
  reveal: "images/Law/childlaw.JPG"
},
{
  q: "세계에서 가장 오래된 법전은?",
  a: "우르남무 법전",
  alt: ["우르남무","우르남무법전"],
  explain:"우르남무 법전은 기원전 2100년 함무라비 법전은 기원전 1750년경",
  reveal: "images/Law/urnammu.JPG"
}

];


/* 문화·예술·스포츠 문제*/
const cultureData = [
  {
  q: "육상 높이뛰기의 혁명이라 불리는 '배면뛰기'를 창시하고 1968년 멕시코시티 올림픽에서 금메달을 획득한 인물은?",
  a: "딕 포스베리",
  alt: ["딕 포스버리"],
  reveal: "images/art/DickFosbury.JPG"
},
{
  q: "세계에서 가장 빠른 인간으로 불리는 우사인 볼트의 100m 기록은?",
  a: "9.58초",
  alt: ["9.58"],
  reveal: "images/art/bolt.JPG"
},
{
  q: "세계적으로 유명한 동화 '피노키오의 모험'의 작가는?",
  a: "카를로 콜로디",
  alt: ["카를로 로렌치니"],
  reveal: "images/art/CarloLorenzini.JPG"
},
{
  q: "등장인물의 행동을 유발하는 동기를 제공하지만 실제 의미는 중요하지 않은 극적 장치를 무엇이라고 하는가?",
  a: "맥거핀",
  alt: ["MacGuffin", "맥거핀 장치"],
  explain:"맥거핀은 사실 아무것도 아니다.\n-앨프리드 히치콕-",
  reveal: "images/art/Hitchcock.jpg"
}
];

/* ============ 생활상식 ============ */
const snackData = [
  { q:"images/ChocoSongi_q.JPG",            a:"초코송이",            reveal:"images/ChocoSongi_a.JPG" },
  { q:"images/pocachip_q.JPG",              a:"포카칩오리지널",      reveal:"images/pocachip_a.JPG" },
  { q:"images/PotetochipOriginal_q.JPG",    a:"포테토칩오리지널",    reveal:"images/PotetochipOriginal_a.JPG" },
  { q:"images/JjolbyeongMaekomhanMat_q.JPG", a:"쫄병매콤한맛",       reveal:"images/JjolbyeongMaekomhanMat_a.JPG" }
];

const scovilleData = [
  { q:"images/scov/bibim.JPG",      a:"700",   reveal:"images/scov/bibim.JPG" },
  { q:"images/scov/buldagb.JPG",    a:"4404",  reveal:"images/scov/buldagb.JPG" },
  { q:"images/scov/chamchi.JPG",    a:"1935",  reveal:"images/scov/chamchi.JPG" },
  { q:"images/scov/Doritos.JPG",    a:"2000",  reveal:"images/scov/Doritos.JPG" },
  { q:"images/scov/Cheetos.JPG",    a:"1500",  reveal:"images/scov/Cheetos.JPG" },
  { q:"images/scov/ggarebo.JPG",    a:"2400",  reveal:"images/scov/ggarebo.JPG" },
  { q:"images/scov/jinla.JPG",      a:"600",   reveal:"images/scov/jinla.JPG" },
  { q:"images/scov/jjol.JPG",       a:"2500",  reveal:"images/scov/jjol.JPG" },
  { q:"images/scov/kingddu.JPG",    a:"12000", reveal:"images/scov/kingddu.JPG" },
  { q:"images/scov/sinrameon.JPG",  a:"3400",  reveal:"images/scov/sinrameon.JPG" },
  { q:"images/scov/buldagk.JPG",    a:"3200",  reveal:"images/scov/buldagk.JPG" }
];

/* 생활상식 텍스트 문제 (수면 = 알코올 농도) */
const lifestyleTextData = [
  {
    type: "text",
    questionHtml:
      "다음 설명을 보고 알맞은 혈중알코올농도를 고르세요.<br><br>" +
      "<span class='small-inline'>※ 2020년 미국 질병통제예방센터(CDC) 산하 NIOSH 트레이닝 모듈과<br>" +
      "&nbsp;&nbsp;2021년 Harvard Medical School 산하 Division of Sleep Medicine 자료 기준</span><br><br>" +
      "24시간 동안 계속 깨어 있으면 인지·반응 속도 저하 수준이<br>" +
      "대략 어느 정도 혈중알코올농도와 비슷해질까요?",
    answer: "0.1",
    alt:["0.1%"],
    explain:
      "연구 자료에 따르면, 24시간 이상 깨어 있는 상태는 대략 혈중알코올농도 0.1% 수준의 " +
      "인지·반응 속도 저하와 비슷한 영향을 주는 것으로 알려져 있습니다."
  }
];

/* ============ 과학 : 동물 맞히기 ============ */
const animalData = [ 
  { q: "images/anim/acau_q.JPG", a: "악어거북", reveal: "images/anim/acau_a.JPG" },
  { q: "images/anim/adeli_q.JPG", a: "아델리펭귄", reveal: "images/anim/adeli_a.JPG" },
  { q: "images/anim/agi_q.JPG", a: "애기웜뱃", reveal: "images/anim/agi_a.JPG" },
  { q:"images/anim/ahob_q.JPG", a:"아홉띠아르마딜로", reveal:"images/anim/ahob_a.JPG" },
  { q:"images/anim/alac_q.JPG", a:"알락꼬리고양이", reveal:"images/anim/alac_a.JPG" },
  { q:"images/anim/andes_q.JPG", a:"아메리카검은댕기해오라기", reveal:"images/anim/andes_a.JPG" },
  { q:"images/anim/angkarana_q.JPG", a:"안데스산고양이", reveal:"images/anim/angkarana_a.JPG" },
  { q:"images/anim/angung_q.JPG", a:"앙카라나족제비여우원숭이", reveal:"images/anim/angung_a.JPG" },
  { q:"images/anim/bacg_q.JPG", a:"남방안경영원", reveal:"images/anim/bacg_a.JPG" },
  { q:"images/anim/bacge_q.JPG", a:"박쥐귀여우", reveal:"images/anim/bacge_a.JPG" },
  { q:"images/anim/bachu_q.JPG", a:"배추흰나비", reveal:"images/anim/bachu_a.JPG" },
  { q:"images/anim/bau_q.JPG", a:"노랑반점바위너구리", reveal:"images/anim/bau_a.JPG" },
  { q:"images/anim/bonith_q.JPG", a:"보닛헤드귀상어", reveal:"images/anim/bonith_a.JPG" },
  { q:"images/anim/buchi_q.JPG", a:"자메이카벌잡이부치새", reveal:"images/anim/buchi_a.JPG" },
  { q:"images/anim/bulgam_q.JPG", a:"벌감펭", reveal:"images/anim/bulgam_a.JPG" },
  { q:"images/anim/bulgend_q.JPG", a:"붉은다리개구리", reveal:"images/anim/bulgend_a.JPG" },
  { q:"images/anim/burij_q.JPG", a:"노랑부리저어새", reveal:"images/anim/burij_a.JPG" },
  { q:"images/anim/cano_q.JPG", a:"카노두더지", reveal:"images/anim/cano_a.JPG" },
  { q:"images/anim/carive_q.JPG", a:"카리브암초꼴뚜기", reveal:"images/anim/carive_a.JPG" },
  { q:"images/anim/casp_q.JPG", a:"카스피채찍뱀", reveal:"images/anim/casp_a.JPG" },
  { q:"images/anim/cham_q.JPG", a:"참게", reveal:"images/anim/cham_a.JPG" },
  { q:"images/anim/chamm_q.JPG", a:"참문어", reveal:"images/anim/chamm_a.JPG" },
  { q:"images/anim/chorug_q.JPG", a:"초록나무비단뱀", reveal:"images/anim/chorug_a.JPG" },
  { q:"images/anim/codcod_q.JPG", a:"코드코드", reveal:"images/anim/codcod_a.JPG" },
  { q:"images/anim/cuten_q.JPG", a:"커튼원양해파리", reveal:"images/anim/cuten_a.JPG" },
  { q:"images/anim/ddangdoa_q.JPG", a:"땅돼지", reveal:"images/anim/ddangdoa_a.JPG" },
  { q:"images/anim/dongsu_q.JPG", a:"동수구리", reveal:"images/anim/dongsu_a.JPG" },
  { q:"images/anim/dotom_q.JPG", a:"도톰꼬리도마뱀붙이", reveal:"images/anim/dotom_a.JPG" },
  { q:"images/anim/dotori_q.JPG", a:"도토리귀고둥", reveal:"images/anim/dotori_a.JPG" },
  { q:"images/anim/dumbul_q.JPG", a:"덤불해오라기", reveal:"images/anim/dumbul_a.JPG" },
  { q:"images/anim/g_q.JPG", a:"사향쥐캥거루", reveal:"images/anim/g_a.JPG" },
  { q:"images/anim/gabir_q.JPG", a:"가비알", reveal:"images/anim/gabir_a.JPG" },
  { q:"images/anim/galsacu_q.JPG", a:"갈색얼거니새", reveal:"images/anim/galsacu_a.JPG" },
  { q:"images/anim/gami_q.JPG", a:"주머니개미핥기", reveal:"images/anim/gami_a.JPG" },
  { q:"images/anim/garo_q.JPG", a:"가로줄무늬자칼", reveal:"images/anim/garo_a.JPG" },
  { q:"images/anim/gin_q.JPG", a:"긴꼬리왈라비", reveal:"images/anim/gin_a.JPG" },
  { q:"images/anim/gmgang_q.JPG", a:"금강앵무", reveal:"images/anim/gmgang_a.JPG" },
  { q:"images/anim/gmnun_q.JPG", a:"그문쇠올빼미", reveal:"images/anim/gmnun_a.JPG" },
  { q:"images/anim/goni_q.JPG", a:"기러기아과", reveal:"images/anim/goni_a.JPG" },
  { q:"images/anim/goun_q.JPG", a:"고운점박이푸른부전나비", reveal:"images/anim/goun_a.JPG" },
  { q:"images/anim/goyange_q.JPG", a:"아시아황금고양이", reveal:"images/anim/goyange_a.JPG" },
  { q:"images/anim/gripon_q.JPG", a:"그리폰독수리", reveal:"images/anim/gripon_a.JPG" },
  { q:"images/anim/gubug_q.JPG", a:"늪가로목거북", reveal:"images/anim/gubug_a.JPG" },
  { q:"images/anim/guisin_q.JPG", a:"북아메리카귀신소쩍새", reveal:"images/anim/guisin_a.JPG" },
  { q:"images/anim/gurm_q.JPG", a:"구름표범", reveal:"images/anim/gurm_a.JPG" },
  { q:"images/anim/hinco_q.JPG", a:"흰코사향고양이", reveal:"images/anim/hinco_a.JPG" },
  { q:"images/anim/hindeng_q.JPG", a:"고산대머리수리속", reveal:"images/anim/hindeng_a.JPG" },
  { q:"images/anim/hinul_q.JPG", a:"백로속", reveal:"images/anim/hinul_a.JPG" },
  { q:"images/anim/horangn_q.JPG", a:"절지동물문", reveal:"images/anim/horangn_a.JPG" },
  { q:"images/anim/hu_q.JPG", a:"얼룩푸른혀도마뱀", reveal:"images/anim/hu_a.JPG" },
  { q:"images/anim/jacengo_q.JPG", a:"작은고스도치홍어", reveal:"images/anim/jacengo_a.JPG" },
  { q:"images/anim/jan_q.JPG", a:"잔점박이물범", reveal:"images/anim/jan_a.JPG" },
  { q:"images/anim/jangnims_q.JPG", a:"수염상어목", reveal:"images/anim/jangnims_a.JPG" },
  { q:"images/anim/jenet_q.JPG", a:"붉은점박이제넷", reveal:"images/anim/jenet_a.JPG" },
  { q:"images/anim/jirenge_q.JPG", a:"이베리아지렁이도마뱀", reveal:"images/anim/jirenge_a.JPG" },
  { q:"images/anim/jugle_q.JPG", a:"척삭동물문", reveal:"images/anim/jugle_a.JPG" },
  { q:"images/anim/jumbace_q.JPG", a:"하이에나과", reveal:"images/anim/jumbace_a.JPG" },
  { q:"images/anim/jummug_q.JPG", a:"네발나비과", reveal:"images/anim/jummug_a.JPG" },
  { q:"images/anim/kanggu_q.JPG", a:"캥거루쥐", reveal:"images/anim/kanggu_a.JPG" },
  { q:"images/anim/macaroni_q.JPG", a:"마카로니펭귄", reveal:"images/anim/macaroni_a.JPG" },
  { q:"images/anim/mal_q.JPG", a:"말사슴", reveal:"images/anim/mal_a.JPG" },
  { q:"images/anim/malddong_q.JPG", a:"붉은꼬리말똥가리", reveal:"images/anim/malddong_a.JPG" },
  { q:"images/anim/mangchi_q.JPG", a:"망치머리황새", reveal:"images/anim/mangchi_a.JPG" },
  { q:"images/anim/moggule_q.JPG", a:"목걸이증부리", reveal:"images/anim/moggule_a.JPG" },
  { q:"images/anim/mongus_q.JPG", a:"큰띠몽구스", reveal:"images/anim/mongus_a.JPG" },
  { q:"images/anim/moniddo_q.JPG", a:"모니또델몬토", reveal:"images/anim/moniddo_a.JPG" },
  { q:"images/anim/mora_q.JPG", a:"모래고양이", reveal:"images/anim/mora_a.JPG" },
  { q:"images/anim/mugda_q.JPG", a:"먹대가리비단뱀", reveal:"images/anim/mugda_a.JPG" },
  { q:"images/anim/mul_q.JPG", a:"물닭", reveal:"images/anim/mul_a.JPG" },
  { q:"images/anim/mutjange_q.JPG", a:"큰멋쟁이나비", reveal:"images/anim/mutjange_a.JPG" },
  { q:"images/anim/namu_q.JPG", a:"린네두발가락나무늘보", reveal:"images/anim/namu_a.JPG" },
  { q:"images/anim/orino_q.JPG", a:"오리노코악어", reveal:"images/anim/orino_a.JPG" },
  { q:"images/anim/palma_q.JPG", a:"팔마왈라비", reveal:"images/anim/palma_a.JPG" },
  { q:"images/anim/paloba_q.JPG", a:"필로바테스테리빌리스", reveal:"images/anim/paloba_a.JPG" },
  { q:"images/anim/paran_q.JPG", a:"파란고리문어", reveal:"images/anim/paran_a.JPG" },
  { q:"images/anim/posa_q.JPG", a:"포사", reveal:"images/anim/posa_a.JPG" },
  { q:"images/anim/pyobum_q.JPG", a:"표범폐어", reveal:"images/anim/pyobum_a.JPG" },
  { q:"images/anim/rdavra_q.JPG", a:"알다브라코끼리거북", reveal:"images/anim/rdavra_a.JPG" },
  { q:"images/anim/saki_q.JPG", a:"흰얼굴사키원숭이", reveal:"images/anim/saki_a.JPG" },
  { q:"images/anim/sanchung_q.JPG", a:"산청개구리", reveal:"images/anim/sanchung_a.JPG" },
  { q:"images/anim/sangg_q.JPG", a:"큰생쥐귀박쥐", reveal:"images/anim/sangg_a.JPG" },
  { q:"images/anim/sanho_q.JPG", a:"기둥산호", reveal:"images/anim/sanho_a.JPG" },
  { q:"images/anim/silbu_q.JPG", a:"실버아로와나", reveal:"images/anim/silbu_a.JPG" },
  { q:"images/anim/smail_q.JPG", a:"웃는개구리", reveal:"images/anim/smail_a.JPG" },
  { q:"images/anim/soop_q.JPG", a:"척삭동물문", reveal:"images/anim/soop_a.JPG" },
  { q:"images/anim/subu_q.JPG", a:"서부나무타기너구리", reveal:"images/anim/subu_a.JPG" },
  { q:"images/anim/taz_q.JPG", a:"태즈메이니아데빌", reveal:"images/anim/taz_a.JPG" },
  { q:"images/anim/tungso_q.JPG", a:"은상어목", reveal:"images/anim/tungso_a.JPG" },
  { q:"images/anim/umsac_q.JPG", a:"염색독개구리", reveal:"images/anim/umsac_a.JPG" }
];
const scienceProblems = [
/* 텍스트*/
  {
    mode: "science-text",
    q: "지각을 이루는 가장 풍부한 원소는?",
    a: "산소",
    ali: ["o", "oxygen"],
    explain: "지각 구성 원소 중 산소 비율 약 46%"
  },
/* 이미지*/
  {
    mode: "science-img",
    q: "세계 최초의 인공위성은?",
    a: "스푸트니크 1호",
    explain: "(1957년)",
    reveal: "images/science/sputnik1.JPG"
  },

  {
    mode: "science-img",
    q: "세계에서 가장 큰 사막은?",
    a: "남극",
    ali: ["남극사막", "남극대륙"],
    explain: "남극(14.2m km²) > 사하라(9.2m km²)\n연평균 강수량 250mm 이하 → 사막 정의 충족",
    reveal: "images/science/antarctica.JPG"
  },

  {
    mode: "science-img",
    q: "지구 역사상 가장 큰 동물은?",
    a: "대왕고래",
    ali: ["흰긴수염고래"],
    explain: "몸 길이 최대 34m, 체중 약 190t",
    reveal: "images/science/bluewhale.JPG"
  },
/*객관식 */
  {
    mode: "science-order",
    q:
      "퀴리 온도는 자성체가 자성을 잃고 상자성이 되는 온도입니다.\n" +
      "아래 물질들을 '퀴리 온도 낮은 순'으로 입력하세요.\n\n" +
      "1. 철(Fe)\n2. 니켈(Ni)\n3. 코발트(Co)\n4. 가돌리늄(Gd)\n5. 디스프로슘(Dy)\n6. 테르븀(Tb)\n\n" +
      "예: 123456",
    a: "456213",
    explain:
      "가돌리늄(Gd): 20°C\n" +
      "디스프로슘(Dy): 186°C\n" +
      "테르븀(Tb): 230°C\n" +
      "니켈(Ni): 358°C\n" +
      "철(Fe): 770°C\n" +
      "코발트(Co): 1127°C"
  }

];


/* ============ 창의·두뇌퍼즐 : 대학교 데이터 ============ */
const univData = [
  { q: "images/school/buc_q.JPG", a: "부천대학교", alt: ["부천대"], reveal: "images/school/buc_a.JPG" },
  { q: "images/school/cau_q.JPG", a: "중앙대학교", alt: ["중앙대"], reveal: "images/school/cau_a.JPG" },
  { q: "images/school/cau2_q.JPG", a: "중앙대학교", alt: ["중앙대"], reveal: "images/school/cau2_a.JPG" },
  { q: "images/school/bu_q.JPG", a: "부산대학교", alt: ["부산대","부대"], reveal: "images/school/bu_a.JPG" },
  { q: "images/school/bu2_q.JPG", a: "부산대학교", alt: ["부산대","부대"], reveal: "images/school/bu2_a.JPG" },
  { q: "images/school/chungn_q.JPG", a: "충남대학교", alt: ["충남대"], reveal: "images/school/chungn_a.JPG" },
  { q: "images/school/deu_q.JPG", a: "동의대학교", alt: ["동의대"], reveal: "images/school/deu_a.JPG" },
  { q: "images/school/dku2_q.JPG", a: "단국대학교", alt: ["단국대","단대"], reveal: "images/school/dku2_a.JPG" },
  { q: "images/school/dku3_q.JPG", a: "단국대학교", alt: ["단국대","단대"], reveal: "images/school/dku3_a.JPG" },
  { q: "images/school/eulj_q.JPG", a: "을지대학교", alt: ["을지대"], reveal: "images/school/eulj_a.JPG" },
  { q: "images/school/gac_q.JPG", a: "가천대학교", alt: ["가천대"], reveal: "images/school/gac_.JPG" },
  { q: "images/school/gac2_q.JPG", a: "가천대학교", alt: ["가천대"], reveal: "images/school/gac2_a.JPG" },
  { q: "images/school/hany_q.JPG", a: "한양대학교", alt: ["한양대"], reveal: "images/school/hany_a.JPG" },
  { q: "images/school/hany2_q.JPG", a: "한양대학교", alt: ["한양대"], reveal: "images/school/hany2_a.JPG" },
  { q: "images/school/hany3_q.JPG", a: "한양대학교", alt: ["한양대"], reveal: "images/school/hany3_a.JPG" },
  { q: "images/school/hufs_q.JPG", a: "한국외국어대학교", alt: ["외대"], reveal: "images/school/hufs_a.JPG" },
  { q: "images/school/ihs_q.JPG", a: "서강대학교", alt: ["서강대"], reveal: "images/school/ihs_a.JPG" },
  { q: "images/school/ihs2_q.JPG", a: "서강대학교", alt: ["서강대"], reveal: "images/school/ihs2_a.JPG" },
  { q: "images/school/inc_q.JPG", a: "인천대학교", alt: ["인천대"], reveal: "images/school/inc_a.JPG" },
  { q: "images/school/inc2_q.JPG", a: "인천대학교", alt: ["인천대"], reveal: "images/school/inc2_a.JPG" },
  { q: "images/school/inh_q.JPG", a: "인하대학교", alt: ["인하대"], reveal: "images/school/inh_a.JPG" },
  { q: "images/school/inh2_q.JPG", a: "인하대학교", alt: ["인하대"], reveal: "images/school/inh2_a.JPG" },
  { q: "images/school/k_q.JPG", a: "고려대학교", alt: ["고려대","고대"], reveal: "images/school/k_a.JPG" },
  { q: "images/school/k2_q.JPG", a: "고려대학교", alt: ["고려대","고대"], reveal: "images/school/k2_a.JPG" },
  { q: "images/school/kgu_q.JPG", a: "경기대학교", alt: ["경기대"], reveal: "images/school/kgu_a.JPG" },
  { q: "images/school/kmu_q.JPG", a: "국민대학교", alt: ["국민대"], reveal: "images/school/kmu_a.JPG" },
  { q: "images/school/kmu2_q.JPG", a: "국민대학교", alt: ["국민대"], reveal: "images/school/kmu2_a.JPG" },
  { q: "images/school/knu_q.JPG", a: "강원대학교", alt: ["강원대","강대"], reveal: "images/school/knu_a.JPG" },
  { q: "images/school/knue_q.JPG", a: "한국교원대학교", alt: ["한국교원대","교원대"], reveal: "images/school/knue_a.JPG" },
  { q: "images/school/ksnu_q.JPG", a: "국립군산대학교", alt: ["군산대","군산대학교"], reveal: "images/school/ksnu_a.JPG" },
  { q: "images/school/ku_q.JPG", a: "건국대학교", alt: ["건국대","건대"], reveal: "images/school/ku_a.JPG" },
  { q: "images/school/ku2_q.JPG", a: "건국대학교", alt: ["건국대","건대"], reveal: "images/school/ku2_a.JPG" },
  { q: "images/school/kyungh_q.JPG", a: "경희대학교", alt: ["경희대"], reveal: "images/school/kyungh_a.JPG" },
  { q: "images/school/kyungh2_q.JPG", a: "경희대학교", alt: ["경희대"], reveal: "images/school/kyungh2_a.JPG" },
  { q: "images/school/s_q.JPG", a: "서울대학교", alt: ["서울대"], reveal: "images/school/s_a.JPG" },
  { q: "images/school/s2_q.JPG", a: "서울대학교", alt: ["서울대"], reveal: "images/school/s2_a.JPG" },
  { q: "images/school/sist_q.JPG", a: "서울과학기술대학교", alt: ["서울과기대"], reveal: "images/school/sist_a.JPG" },
  { q: "images/school/sist2_q.JPG", a: "서울과학기술대학교", alt: ["서울과기대"], reveal: "images/school/sist2_a.JPG" },
  { q: "images/school/sungk_q.JPG", a: "성균관대학교", alt: ["성균관대","성대"], reveal: "images/school/sungk_a.JPG" },
  { q: "images/school/sungk2_q.JPG", a: "성균관대학교", alt: ["성균관대","성대"], reveal: "images/school/sungk2_a.JPG" },
  { q: "images/school/y_q.JPG", a: "연세대학교", alt: ["연세대","연대"], reveal: "images/school/y_a.JPG" },
  { q: "images/school/y2_q.JPG", a: "연세대학교", alt: ["연세대","연대"], reveal: "images/school/y2_a.JPG" }
];

/* ============ 경제·금융 : 티커 데이터 ============ */
const tickerData = [
  { ticker:"MNST",  answer:"몬스터",              hint:"에너지",                    img:"images/com/MNST.JPG" },
  { ticker:"K",     answer:"켈로그",              hint:"시리얼",                    img:"images/com/K.JPG" },
  { ticker:"INTC",  answer:"인텔",                hint:"라이젠",                    img:"images/com/INTC.JPG" },
  { ticker:"HLT",   answer:"힐튼호텔",            hint:"패리스",                    img:"images/com/HLT.JPG" },
  { ticker:"MCD",   answer:"맥도날드",            hint:"DT",                        img:"images/com/MCD.JPG" },
  { ticker:"BLK",   answer:"블랙록",              hint:"ETF",                       img:"images/com/BLK.JPG" },
  { ticker:"F",     answer:"포드",                hint:"페라리",                    img:"images/com/F.JPG" },
  { ticker:"YUM",   answer:"얌브랜즈",            hint:"KFC, 피자헛",               img:"images/com/YUM.JPG" },
  { ticker:"RBI",   answer:"레스토랑브랜즈",      hint:"버거킹",                    img:"images/com/RBI.JPG" },
  { ticker:"EA",    answer:"일렉트로닉아츠",      hint:"FIFA, 심즈, 배틀필드",      img:"images/com/EA.JPG" },
  { ticker:"DIS",   answer:"디즈니",              hint:"월트",                      img:"images/com/DIS.JPG" },
  { ticker:"GM",    answer:"제너럴모터스",        hint:"쉐보레, 캐딜락",            img:"images/com/GM.JPG" },
  { ticker:"KHC",   answer:"크래프트하인즈",      hint:"케첩",                      img:"images/com/KHC.JPG" },
  { ticker:"MDLZ",  answer:"몬델리즈",            hint:"오레오",                    img:"images/com/MDLZ.JPG" },
  { ticker:"GIS",   answer:"제너럴밀스",          hint:"하겐다즈",                  img:"images/com/GIS.JPG" },
  { ticker:"RL",    answer:"랄프로렌",            hint:"폴로",                      img:"images/com/RL.JPG" },
  { ticker:"SNE",   answer:"소니",                hint:"플스",                      img:"images/com/SNE.JPG" },
  { ticker:"BKNG",  answer:"부킹홀딩스",          hint:"아고다",                    img:"images/com/BKNG.JPG" },
  { ticker:"KMB",   answer:"킴벌리클라크",        hint:"하기스",                    img:"images/com/KMB.JPG" },
  { ticker:"UL",    answer:"유니레버",            hint:"도브, 립톤, 벤앤제리",       img:"images/com/UL.JPG" },
  { ticker:"TTWO",  answer:"테이크투",            hint:"GTA",                       img:"images/com/TTWO.JPG" },
  { ticker:"WBD",   answer:"워너브라더스디스커버리", hint:"DC, 해리포터",         img:"images/com/WBD.JPG" },
  { ticker:"PYPL",  answer:"페이팔",              hint:"토스",                      img:"images/com/PYPL.JPG" },
  { ticker:"BF-B",  answer:"브라운포맨",          hint:"잭다니엘",                  img:"images/com/BF-B.JPG" },
  { ticker:"H",     answer:"하얏트",              hint:"그랜드",                    img:"images/com/H.JPG" },
  { ticker:"CMCSA", answer:"컴캐스트",            hint:"유니버설, 미니언",          img:"images/com/CMCSA.JPG" },
  { ticker:"DNUT",  answer:"크리스피크림",        hint:"도넛",                      img:"images/com/DNUT.JPG" },
  { ticker:"PM",    answer:"필립모리스",          hint:"아이코스, 말보로",          img:"images/com/PM.JPG" }
];
/* ============ 경제·금융 ============ */
const economyData = [
  {
    q: "1961년에 설립된 OECD의 회원국은 38개 국가이다. 한국은 몇 번째로 OECD 회원국에 가입했는가?",
    a: "29",
    alt: ["29번째","29번"],
    explain:"1996년 12월"
  },
  {
    q: "'유동성 선호 이론(Liquidity Preference Theory)'을 정립한 경제학자는 누구인가?",
    a: "존 메이너드 케인스",
    alt: ["케인스"],
    explain:"유동성 선호 이론이란 사람들이 거래·예비·투기 목적 때문에 현금을 보유하려는 성향을 가지며, \n이러한 화폐 수요와 공급의 균형에 따라 이자율이 결정된다는 이론이다.",
    reveal: "images/economy/keynes.JPG"
  },
  {
    q: "'창조적 파괴(Creative Destruction)' 개념을 주장한 경제학자는 누구인가?",
    a: "요제프 슘페터",
    alt: ["슘페터"],
    explain:"창조적 파괴란 기술혁신으로 낡은 것을 파괴·도태시키고 새로운 것을 창조하고 변혁을 일으키는 과정",
    reveal: "images/economy/schumpeter.JPG"
  },
  {
    q: "은행이 예금보다 대출을 크게 늘릴 때 사용하는 지표로, 예대율이라고도 불리는 비율을 뜻하는 용어는?\n영어로",
    a: "LDR",
    explain:"예대율은 은행의 예금 대비 대출 비율을 의미하며,\n은행의 유동성과 건전성을 관리하는 핵심 지표로 활용됩니다.",
  },
  {
    q: "불완전경쟁시장에서의 국제무역에 대한 연구로 무역이론과 경제지리학을 통합한 공로를 인정받아\n 2008년 노벨경제학상을 수상한 인물은?",
    a: "폴크루그먼",
    alt: ["크루그먼","폴 크루그먼"],
    reveal: "images/economy/krugman.JPG"
  }
];

/* ============ 문학·철학·종교 : 신화 문제 ============ */
const mythData = [
  {
    q: "대지의 여신 가이아의 신탁 터였으며 세계의 배꼽이라 불릴 정도로 신성한 땅이다.\n그리스 중부에 위치한 델포이를 수호한 괴물은?",
    a: "피톤", reveal: "images/god/piton.JPG"
  },
  {
    q: "크로노스에게 잡아먹히지 않도록 레아가 몰래 숨긴 아기 제우스를 기른 존재는?",
    a: "아말테이아", reveal: "images/god/amal.JPG"
  },
  {
    q: "프로메테우스의 동생이며 최초의 여성이자 모든 선물을 받은 여자 '판도라'의 남편은?",
    a: "에피메테우스", reveal: "images/god/epime.JPG"
  },
  {
    q: "아르카디아의 왕이었으며 늑대 인간 신화의 기원이며 \n제우스를 시험하기 위해 인간의 고기로 요리한 사람의 이름은?",
    a: "리카온", reveal: "images/god/lycaon.JPG"
  },
  {
    q: "트로이 전쟁 후반의 분노·복수·영웅담을 그린 '일리아스'와 \n오디세우스가 트로이 전쟁 후 10년 동안 귀향하는 모험을 다룬 '오디세이아'를 남긴 고대 그리스의 전설적 시인은?",
    a: "호메로스", reveal: "images/god/homer.JPG"
  },
  {
    q: "'헤스티아' '데메테르' '헤라' '아테나' '제우스' '포세이돈' 중 '하데스'의 형제자매가 아닌 신은?",
    a: "아테나", reveal: "images/god/athena.JPG"
  },
  {
    q: "아킬레우스가 약점인 발뒤꿈치로 인해 죽게 되는 원인이 된 신 또는 인물은?",
    a: "파리스", reveal: "images/god/paris.JPG"
  },
  {
    q: "헤라클레스의 12과업 중 하나에 해당하는 \n머리를 자르면 다시 돋아나는 불사의 머리를 가진 이 괴물은?",
    a: "히드라", reveal: "images/god/hydra.JPG"
  },
  {
    q: "절름발이로 그리스 신들 중 유일하게 완전한 신체가 아닌 신은?",
    a: "헤파이스토스", reveal: "images/god/hephaestus.JPG"
  },
  {
    q: "크레타 섬의 높은 탑에 감금되었으며 미노타우로스가 갇혀 있던 '미궁 라비린토스'의 설계자는?",
    a: "다이달로스", alt: ["데이달노스"], reveal: "images/god/daedalus.JPG"
  },
  {
    q: "라그나로크에서 토르와 최종 결전을 벌이는 괴물은?",
    a: "요르문간드", reveal: "images/god/jorm.JPG"
  },
  {
    q: "신들의 세계 아스가르드에 다리를 놓는 무지개 다리의 이름은?",
    a: "비프로스트", reveal: "images/god/bifrost.JPG"
  },
  {
    q: "오시리스의 신체를 14조각으로 절단해 강에 던진 신은 누구인가?",
    a: "세트", reveal: "images/god/seth.JPG"
  },
  {
    q: "오딘의 말 슬레이프니르의 부모는 매우 기괴하다고 알려져 있다. \n슬레이프니르의 어머니는 누구인가?",
    a: "로키", reveal: "images/god/loki.JPG"
  },
  {
    q: "메두사의 피에서 태어난 날개 달린 말은?",
    a: "페가수스", reveal: "images/god/pegasus.JPG"
  },
  {
    q: "불멸의 인간 우트나피쉬팀이 등장하는 세상에서 가장 오래된 서사시의 주인공 영웅은?",
    a: "길가메시", reveal: "images/god/gilga.JPG"
  },
  {
    q: "일본 신화에서 태양을 관장하며 가장 중요한 여신으로, \n천황의 조상신으로 여겨지는 존재는?",
    a: "아마테라스", reveal: "images/god/amaterasu.JPG"
  },
  {
    q: "북유럽 신화에서 ‘세상의 처음’의 영역은 \n불의 세계 무스펠헤임과 어떤 세계의 충돌로 창조가 시작되었는가?",
    a: "니플헤임", reveal: "images/god/niflheim.JPG"
  },
  {
    q: "일본 신화에서 아마테라스가 동굴에 숨어버린 사건의 원인을 만든 인물은?",
    a: "스사노오", reveal: "images/god/susanoo.JPG"
  },
  {
    q: "라그나로크 순서 맞히기\n1. 예르자겨울(피임불의 겨울) 시작\n2. 펜리르 탈출\n3. 오딘 vs 펜리르\n4. 세계수 흔들림\n5. 수르트가 불을 던져 세계 종말\n→ 정답을 숫자로 입력하세요 (예: 12345)",
    a: "14253",
    type: "order"
  },
    {
    q: "세계 최초의 장편 소설로 알려져 있으며 1008년에 쓰여진 일본 고전 문학 작품은?",
    a: "겐지모노가타리",
    explain: "(1008년)",
    reveal: "images/god/genji.JPG"
    }
];

/* ============ 잡학 ============ */
const miscData = [
  {
    answer: "고려",
    explain: "(1377년)",
    question: "세계 최초로 금속 활자인 『직지심체요절』을 인쇄한 나라는?"
  },
  {
    answer: "테노치티틀란",
    explain: "",
    question: "아즈텍 제국의 수도는?"
  },
  {
    answer: "마라톤 전투",
    explain: "(기원전 490년)",
    question: "페르시아 전쟁에서 그리스 연합군이 최초로 승리한 전투는?"
  },
  {
    answer: "카데시 전투",
    explain: "(BCE 1274년)",
    question: "고대 이집트와 히타이트의 카데시 전투는 무엇으로 유명한가?\n→ 세계 최초의 다국가 연합군 전쟁 기록으로 알려진 전투 이름은?"
  }
];

/* 생활상식/과학 통합용 배열 (스크립트에서 합쳐 씀) */
const lifestyleAllData = [
  ...snackData.map(v => ({ type:"snack", ...v })),
  ...scovilleData.map(v => ({ type:"scoville", ...v })),
  ...lifestyleTextData // type:"text"
];
