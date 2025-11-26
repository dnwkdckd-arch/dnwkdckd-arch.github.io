document.addEventListener("DOMContentLoaded", () => {
  /* ----- 공통 유틸 ----- */

  const normalize = (t) => t.replace(/\s/g, "").toLowerCase();

  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function showScreen(id) {
    document.querySelectorAll(".screen").forEach((s) => (s.style.display = "none"));
    const el = document.getElementById(id);
    if (el) el.style.display = id === "main-screen" ? "flex" : "block";
  }

  function resetTextAndInputs() {
    document.querySelectorAll(".info").forEach((el) => (el.textContent = ""));
    document.querySelectorAll(".explain").forEach((el) => (el.textContent = ""));
    document.querySelectorAll("input").forEach((i) => (i.value = ""));
  }

  function resetImages() {
    const ids = [
      "snackImage", "answerImage",
      "scovilleImage", "scovilleAnswerImage",
      "animalImage", "animalAnswerImage",
      "scienceTextImage",
      "univImage", "univAnswerImage",
      "tickerImage",
      "mythImage"
    ];
    ids.forEach((id) => {
      const img = document.getElementById(id);
      if (!img) return;
      img.src = "";
      img.classList.add("hidden");
    });

    const miscReveal = document.getElementById("miscRevealImage");
    if (miscReveal) {
      miscReveal.src = "";
      miscReveal.classList.add("hidden");
    }
  }

  /* ----- 메인 / 카테고리 화면 ----- */

  const categoryBtn = document.getElementById("categoryBtn");
  const classicBtn = document.getElementById("classicBtn");
  const backToMainBtn = document.getElementById("backToMainBtn");

  if (categoryBtn) {
    categoryBtn.onclick = () => {
      resetTextAndInputs();
      resetImages();
      showScreen("category-screen");
    };
  }

  if (backToMainBtn) {
    backToMainBtn.onclick = () => {
      resetTextAndInputs();
      resetImages();
      showScreen("main-screen");
    };
  }

  /* ----- Classic 모드 (틀릴 때까지 진행, 틀리면 점수) ----- */

  let isClassicMode = false;
  let classicScore = 0;
  let classicList = [];
  let classicIndex = 0;

  function startClassicMode() {
    if (classicIndex >= classicList.length) {
      endClassic();
      return;
    }
    loadClassicNext();
  }

  function endClassic() {
    isClassicMode = false;
    showScreen("classic-result-screen");
    const scoreEl = document.getElementById("classicFinalScore");
    if (scoreEl) scoreEl.textContent = `${classicScore}`;
    const timerEl = document.getElementById("classicTimer");
    if (timerEl) timerEl.textContent = ""; // 안내 문구 안 씀
  }

  function loadClassicNext() {
    if (!classicList.length) {
      endClassic();
      return;
    }

    const p = classicList.pop(); // 뒤에서부터 하나씩
    classicIndex++;

    // 문제 타입에 따라 해당 화면/로더로 보냄
    if (p.type === "snack") {
      showScreen("snack-game");
      loadSnack(p, true);
    } else if (p.type === "scoville") {
      showScreen("scoville-game");
      loadScoville(p, true);
    } else if (p.mode === "animal") {
      showScreen("animal-game");
      loadAnimal(p, true);
    } else if (p.mode === "science-text" || p.mode === "science-img" || p.mode === "science-order") {
      showScreen("science-text-game");
      loadScienceCommon(p, true);
    } else if (p.type === "univ") {
      currentUnivProblem = p;
      showScreen("univ-game");
      loadUniv(true);
    } else if (p.type === "ticker" || p.type === "economy") {
      currentFinanceProblem = p;
      showScreen("ticker-game");
      loadFinanceSingle(p, true);
    } else if (p.type === "myth") {
      currentMythProblem = p;
      showScreen("myth-game");
      loadMythSingle(p, true);
    } else {
      // 나머지는 misc 텍스트로 처리 (언어/사회/문화/잡학 등)
      currentMiscProblem = p;
      miscMode = "classic";
      showScreen("misc-game");
      loadMiscSingle(p, true);
    }
  }

  if (classicBtn) {
    classicBtn.onclick = () => {
      resetTextAndInputs();
      resetImages();
      isClassicMode = true;
      classicScore = 0;
      classicIndex = 0;

      classicList = shuffleArray([
        ...langData.map((v) => ({ type: "lang", ...v })),
        ...societyData.map((v) => ({ type: "society", ...v })),
        ...cultureData.map((v) => ({ type: "culture", ...v })),
        ...snackData.map((v) => ({ type: "snack", ...v })),
        ...scovilleData.map((v) => ({ type: "scoville", ...v })),
        ...animalData.map((v) => ({ mode: "animal", ...v })),
        ...scienceProblems, // mode: "science-text"/"science-img"/"science-order"
        ...tickerData.map((v) => ({ type: "ticker", ...v })),
        ...economyData.map((v) => ({ type: "economy", ...v })),
        ...mythData.map((v) => ({ type: "myth", ...v })),
        ...univData.map((v) => ({ type: "univ", ...v })),
        ...miscData.map((v) => ({ type: "misc", ...v })),
        ...lifestyleTextData.map((v) => ({ type: "life-text", ...v }))
      ]);

      if (!classicList.length) {
        alert("문제가 없습니다.");
        showScreen("main-screen");
        return;
      }

      startClassicMode();
    };
  }

  /* ============================================================
     수학·논리 : 숫자야구
  ============================================================ */

  let answer = [];
  let tries = 0;
  const maxTries = 6;

  const mathLogicBtn = document.getElementById("mathLogicBtn");
  if (mathLogicBtn) {
    mathLogicBtn.onclick = () => {
      isClassicMode = false;
      resetTextAndInputs();
      resetImages();
      showScreen("game-screen");
      startNumberBaseball();
    };
  }

  function startNumberBaseball() {
    resetTextAndInputs();
    resetImages();

    answer = [];
    tries = 0;

    const triesInfo = document.getElementById("triesInfo");
    if (triesInfo) triesInfo.textContent = `현재 시도: 0 / ${maxTries}`;

    const log = document.getElementById("log");
    if (log) log.innerHTML = "";

    const input = document.getElementById("userInput");
    if (input) {
      input.value = "";
      setTimeout(() => input.focus(), 0);
    }

    while (answer.length < 4) {
      const n = Math.floor(Math.random() * 10);
      if (!answer.includes(n)) answer.push(n);
    }
  }

  const checkBtn = document.getElementById("checkBtn");
  if (checkBtn) {
    checkBtn.onclick = () => {
      const inputEl = document.getElementById("userInput");
      const log = document.getElementById("log");
      const triesInfo = document.getElementById("triesInfo");
      if (!inputEl || !log || !triesInfo) return;

      const value = inputEl.value.trim();

      if (value.length !== 4 || new Set(value).size !== 4 || isNaN(value)) {
        alert("서로 다른 숫자 4개 입력!");
        return;
      }

      tries++;
      triesInfo.textContent = `현재 시도: ${tries} / ${maxTries}`;

      let S = 0, B = 0;
      value.split("").map(Number).forEach((n, i) => {
        if (n === answer[i]) S++;
        else if (answer.includes(n)) B++;
      });

      const li = document.createElement("li");
      li.textContent = `${value} → ${S}S ${B}B`;
      log.prepend(li);

      if (S === 4) {
        alert(`정답! (${tries}번 만에 성공)`);
        showScreen("category-screen");
        return;
      }

      if (tries >= maxTries) {
        alert(`실패! 정답: ${answer.join("")}`);
        showScreen("category-screen");
        return;
      }

      inputEl.value = "";
    };
  }

  const backToCategoryBtn = document.getElementById("backToCategoryBtn");
  if (backToCategoryBtn) {
    backToCategoryBtn.onclick = () => {
      isClassicMode = false;
      showScreen("category-screen");
    };
  }

  /* ============================================================
     생활상식 : 과자 / 스코빌 / 텍스트
  ============================================================ */

  let lifestyleProblems = [];
  let currentLifestyle = 0;

  const snackBtn = document.getElementById("snackBtn");
  if (snackBtn) {
    snackBtn.onclick = () => {
      isClassicMode = false;
      lifestyleProblems = shuffleArray(lifestyleAllData);
      currentLifestyle = 0;
      loadLifestyle();
    };
  }

  function loadLifestyle() {
    resetTextAndInputs();
    resetImages();

    const p = lifestyleProblems[currentLifestyle];
    if (!p) {
      alert("생활상식 끝!");
      showScreen("category-screen");
      return;
    }

    if (p.type === "snack") {
      showScreen("snack-game");
      loadSnack(p, false);
    } else if (p.type === "scoville") {
      showScreen("scoville-game");
      loadScoville(p, false);
    } else {
      showScreen("lifestyle-text-game");
      loadLifestyleText(p, false);
    }
  }

  /* ----- 과자 맞히기 ----- */

  function loadSnack(p, fromClassic) {
    const qImg = document.getElementById("snackImage");
    const aImg = document.getElementById("answerImage");
    const result = document.getElementById("snackResult");
    const inp = document.getElementById("answerInput");
    const answerSection = document.getElementById("answerSection");
    const nextBtn = document.getElementById("nextSnackBtn");

    if (!qImg || !aImg || !result || !inp || !answerSection || !nextBtn) return;

    qImg.src = p.q;
    qImg.classList.remove("hidden");
    aImg.src = "";
    aImg.classList.add("hidden");

    result.textContent = "";
    inp.value = "";
    setTimeout(() => inp.focus(), 0);

    answerSection.style.display = "block";
    nextBtn.classList.add("hidden");

    const checkBtn = document.getElementById("snackCheckBtn");
    if (!checkBtn) return;

    checkBtn.onclick = () => {
      const input = inp.value.trim();
      if (!input) {
        alert("정답 입력!");
        return;
      }

      if (normalize(input) === normalize(p.a)) {
        result.textContent = "맞았습니다!";
        result.style.color = "#16a34a";
        if (fromClassic) classicScore++;
      } else {
        result.textContent = `틀렸습니다! (정답: ${p.a})`;
        result.style.color = "#dc2626";
        if (fromClassic) {
          endClassic();
          return;
        }
      }

      qImg.classList.add("hidden");
      aImg.src = p.reveal;
      aImg.classList.remove("hidden");

      answerSection.style.display = "none";
      nextBtn.classList.remove("hidden");
    };

    nextBtn.onclick = () => {
      if (fromClassic) {
        loadClassicNext();
      } else {
        currentLifestyle++;
        loadLifestyle();
      }
    };
  }

  const backToCategoryBtn2 = document.getElementById("backToCategoryBtn2");
  if (backToCategoryBtn2) {
    backToCategoryBtn2.onclick = () => {
      isClassicMode = false;
      showScreen("category-screen");
    };
  }

  /* ----- 스코빌 ----- */

  function loadScoville(p, fromClassic) {
    const qImg = document.getElementById("scovilleImage");
    const aImg = document.getElementById("scovilleAnswerImage");
    const result = document.getElementById("scovilleResult");
    const inp = document.getElementById("scovilleAnswerInput");
    const answerSection = document.getElementById("scovilleAnswerSection");
    const nextBtn = document.getElementById("nextScovilleBtn");

    if (!qImg || !aImg || !result || !inp || !answerSection || !nextBtn) return;

    qImg.src = p.q;
    qImg.classList.remove("hidden");
    aImg.src = "";
    aImg.classList.add("hidden");

    result.textContent = "";
    inp.value = "";
    setTimeout(() => inp.focus(), 0);

    answerSection.style.display = "block";
    nextBtn.classList.add("hidden");

    const checkBtn = document.getElementById("scovilleCheckBtn");
    if (!checkBtn) return;

    checkBtn.onclick = () => {
      const input = inp.value.trim();
      if (!input) {
        alert("입력하세요!");
        return;
      }

      if (input === p.a) {
        result.textContent = "맞았습니다!";
        result.style.color = "#16a34a";
        if (fromClassic) classicScore++;
      } else {
        result.textContent = `틀렸습니다! (정답: ${p.a})`;
        result.style.color = "#dc2626";
        if (fromClassic) {
          endClassic();
          return;
        }
      }

      qImg.classList.add("hidden");
      aImg.src = p.reveal;
      aImg.classList.remove("hidden");

      answerSection.style.display = "none";
      nextBtn.classList.remove("hidden");
    };

    nextBtn.onclick = () => {
      if (fromClassic) {
        loadClassicNext();
      } else {
        currentLifestyle++;
        loadLifestyle();
      }
    };
  }

  const backToCategoryBtnScoville = document.getElementById("backToCategoryBtnScoville");
  if (backToCategoryBtnScoville) {
    backToCategoryBtnScoville.onclick = () => {
      isClassicMode = false;
      showScreen("category-screen");
    };
  }

  /* ----- 생활상식 텍스트 ----- */

  function loadLifestyleText(p, fromClassic) {
    const qEl = document.getElementById("lifestyleTextQuestion");
    const resEl = document.getElementById("lifestyleTextResult");
    const expEl = document.getElementById("lifestyleTextExplain");
    const inp = document.getElementById("lifestyleTextAnswerInput");
    const answerSection = document.getElementById("lifestyleTextAnswerSection");
    const nextBtn = document.getElementById("nextLifestyleTextBtn");

    if (!qEl || !resEl || !expEl || !inp || !answerSection || !nextBtn) return;

    qEl.innerHTML = p.questionHtml || p.q || "";
    resEl.textContent = "";
    expEl.textContent = "";

    inp.value = "";
    setTimeout(() => inp.focus(), 0);

    answerSection.style.display = "block";
    nextBtn.classList.add("hidden");

    const checkBtn = document.getElementById("lifestyleTextCheckBtn");
    if (!checkBtn) return;

    checkBtn.onclick = () => {
      const input = inp.value.trim();
      if (!input) {
        alert("정답을 입력하세요!");
        return;
      }

      const user = normalize(input.replace("%", ""));
      const ans = normalize(String(p.answer || p.a).replace("%", ""));

      if (user === ans) {
        resEl.textContent = "맞았습니다!";
        resEl.style.color = "#16a34a";
        if (fromClassic) classicScore++;
      } else {
        const correctDisplay = p.answer != null ? `${p.answer}%` : p.a;
        resEl.textContent = `틀렸습니다! (정답: ${correctDisplay})`;
        resEl.style.color = "#dc2626";
        if (fromClassic) {
          expEl.textContent = p.explain || "";
          answerSection.style.display = "none";
          nextBtn.classList.remove("hidden");
          endClassic();
          return;
        }
      }

      expEl.textContent = p.explain || "";

      answerSection.style.display = "none";
      nextBtn.classList.remove("hidden");
    };

    nextBtn.onclick = () => {
      if (fromClassic) {
        loadClassicNext();
      } else {
        currentLifestyle++;
        loadLifestyle();
      }
    };
  }

  const backToCategoryBtnLifestyle = document.getElementById("backToCategoryBtnLifestyle");
  if (backToCategoryBtnLifestyle) {
    backToCategoryBtnLifestyle.onclick = () => {
      isClassicMode = false;
      showScreen("category-screen");
    };
  }

  /* ============================================================
     과학 : 동물 + 텍스트/이미지/순서
  ============================================================ */

  let scienceList = [];
  let currentScience = 0;

  const scienceBtn = document.getElementById("scienceBtn");
  if (scienceBtn) {
    scienceBtn.onclick = () => {
      isClassicMode = false;
      scienceList = shuffleArray([
        ...animalData.map((v) => ({ mode: "animal", ...v })),
        ...scienceProblems
      ]);
      currentScience = 0;
      loadScience();
    };
  }

  function loadScience() {
    resetTextAndInputs();
    resetImages();

    const p = scienceList[currentScience];
    if (!p) {
      alert("과학 끝!");
      showScreen("category-screen");
      return;
    }

    if (p.mode === "animal") {
      showScreen("animal-game");
      loadAnimal(p, false);
    } else {
      showScreen("science-text-game");
      loadScienceCommon(p, false);
    }
  }

  /* ----- 과학 : 동물 ----- */

  function loadAnimal(p, fromClassic) {
    const qImg = document.getElementById("animalImage");
    const aImg = document.getElementById("animalAnswerImage");
    const inp = document.getElementById("animalAnswerInput");
    const result = document.getElementById("animalResult");
    const answerSection = document.getElementById("animalAnswerSection");
    const nextBtn = document.getElementById("nextAnimalBtn");

    if (!qImg || !aImg || !inp || !result || !answerSection || !nextBtn) return;

    qImg.src = p.q;
    qImg.classList.remove("hidden");
    aImg.src = "";
    aImg.classList.add("hidden");

    inp.value = "";
    setTimeout(() => inp.focus(), 0);

    result.textContent = "";
    answerSection.style.display = "block";
    nextBtn.classList.add("hidden");

    const checkBtn = document.getElementById("animalCheckBtn");
    if (!checkBtn) return;

    checkBtn.onclick = () => {
      const input = inp.value.trim();
      if (!input) {
        alert("정답 입력!");
        return;
      }

      if (normalize(input) === normalize(p.a)) {
        result.textContent = "맞았습니다!";
        result.style.color = "#16a34a";
        if (fromClassic) classicScore++;
      } else {
        result.textContent = `틀렸습니다! (정답: ${p.a})`;
        result.style.color = "#dc2626";
        if (fromClassic) {
          endClassic();
          return;
        }
      }

      qImg.classList.add("hidden");
      aImg.src = p.reveal;
      aImg.classList.remove("hidden");

      answerSection.style.display = "none";
      nextBtn.classList.remove("hidden");
    };

    nextBtn.onclick = () => {
      if (fromClassic) {
        loadClassicNext();
      } else {
        currentScience++;
        loadScience();
      }
    };
  }

  const backToCategoryBtnAnimal = document.getElementById("backToCategoryBtnAnimal");
  if (backToCategoryBtnAnimal) {
    backToCategoryBtnAnimal.onclick = () => {
      isClassicMode = false;
      showScreen("category-screen");
    };
  }

  /* ----- 과학 : 텍스트/이미지/순서 ----- */

  function loadScienceCommon(p, fromClassic) {
    const qEl = document.getElementById("scienceTextQuestion");
    const resEl = document.getElementById("scienceTextResult");
    const expEl = document.getElementById("scienceTextExplain");
    const imgEl = document.getElementById("scienceTextImage");
    const inp = document.getElementById("scienceTextAnswerInput");
    const answerSection = document.getElementById("scienceTextAnswerSection");
    const nextBtn = document.getElementById("nextScienceTextBtn");

    if (!qEl || !resEl || !expEl || !imgEl || !inp || !answerSection || !nextBtn) return;

    qEl.innerHTML = p.q.replace(/\n/g, "<br>");
    resEl.textContent = "";
    expEl.textContent = "";

    imgEl.classList.add("hidden");
    imgEl.src = "";

    inp.value = "";
    inp.placeholder = p.mode === "science-order" ? "예: 14253" : "정답 입력";
    setTimeout(() => inp.focus(), 0);

    answerSection.style.display = "block";
    nextBtn.classList.add("hidden");

    const checkBtn = document.getElementById("scienceTextCheckBtn");
    if (!checkBtn) return;

    checkBtn.onclick = () => {
      const input = inp.value.trim();
      if (!input) {
        alert("정답 입력!");
        return;
      }

      let ok = false;

      if (p.mode === "science-order") {
        ok = input === p.a;
      } else {
        const ans = normalize(p.a);
        const user = normalize(input);
        if (user === ans) ok = true;
        else {
          const altList = p.alt || p.ali;
          if (altList && altList.some((v) => normalize(v) === user)) ok = true;
        }
      }

      if (ok) {
        resEl.textContent = "맞았습니다!";
        resEl.style.color = "#16a34a";
        if (fromClassic) classicScore++;
      } else {
        resEl.textContent = `틀렸습니다! (정답: ${p.a})`;
        resEl.style.color = "#dc2626";
        if (fromClassic) {
          expEl.textContent = p.explain || "";
          if (p.mode === "science-img" && p.reveal) {
            imgEl.src = p.reveal;
            imgEl.classList.remove("hidden");
          }
          answerSection.style.display = "none";
          nextBtn.classList.remove("hidden");
          endClassic();
          return;
        }
      }

      expEl.textContent = p.explain || "";

      if (p.mode === "science-img" && p.reveal) {
        imgEl.src = p.reveal;
        imgEl.classList.remove("hidden");
      }

      answerSection.style.display = "none";
      nextBtn.classList.remove("hidden");
    };

    nextBtn.onclick = () => {
      if (fromClassic) {
        loadClassicNext();
      } else {
        currentScience++;
        loadScience();
      }
    };
  }

  const backToCategoryBtnScience = document.getElementById("backToCategoryBtnScience");
  if (backToCategoryBtnScience) {
    backToCategoryBtnScience.onclick = () => {
      isClassicMode = false;
      showScreen("category-screen");
    };
  }

  /* ============================================================
     창의·두뇌퍼즐 : 폰트 + 대학교
  ============================================================ */

  let creativeProblems = [];
  let currentCreative = 0;
  let currentUnivProblem = null;
  let fontCorrectIndex = null;
  let fontSelectedIndex = null;

  const creativeBtn = document.getElementById("creativeBtn");
  if (creativeBtn) {
    creativeBtn.onclick = () => {
      isClassicMode = false;
      creativeProblems = shuffleArray([
        { type: "font" },
        ...univData.map((v) => ({ type: "univ", ...v }))
      ]);
      currentCreative = 0;
      loadCreative();
    };
  }

  function loadCreative() {
    resetTextAndInputs();
    resetImages();

    const p = creativeProblems[currentCreative];
    if (!p) {
      alert("모든 창의·두뇌퍼즐 문제 완료!");
      showScreen("category-screen");
      return;
    }

    if (p.type === "font") {
      showScreen("font-game");
      startFontGame();
    } else {
      currentUnivProblem = p;
      showScreen("univ-game");
      loadUniv(false);
    }
  }

  function nextCreative() {
    currentCreative++;
    loadCreative();
  }

  /* ----- 폰트 맞히기 ----- */

  function startFontGame() {
    const con = document.getElementById("lettersContainer");
    const msg = document.getElementById("fontGuessResult");
    const checkBtn = document.getElementById("fontCheckBtn");
    const nextBtn = document.getElementById("nextFontBtn");

    if (!con || !msg || !checkBtn || !nextBtn) return;

    con.innerHTML = "";

    fontCorrectIndex = Math.floor(Math.random() * 12);
    fontSelectedIndex = null;

    for (let i = 0; i < 12; i++) {
      const span = document.createElement("span");
      span.textContent = String.fromCharCode(65 + i);
      span.className = i === fontCorrectIndex ? "helvetica" : "other";

      span.onclick = () => {
        [...con.children].forEach((e) => (e.style.textDecoration = "none"));
        span.style.textDecoration = "underline";
        fontSelectedIndex = i;
      };

      con.appendChild(span);
    }

    msg.textContent = "Helvetica 글자를 찾으세요!";
    msg.style.color = "#1e293b";

    checkBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");

    checkBtn.onclick = () => {
      if (fontSelectedIndex === null) {
        alert("글자를 선택하세요!");
        return;
      }

      if (fontSelectedIndex === fontCorrectIndex) {
        msg.textContent = "맞았습니다!";
        msg.style.color = "#16a34a";
      } else {
        msg.textContent = `틀렸습니다! (정답: ${String.fromCharCode(65 + fontCorrectIndex)})`;
        msg.style.color = "#dc2626";
      }

      checkBtn.classList.add("hidden");
      nextBtn.classList.remove("hidden");
    };

    nextBtn.onclick = nextCreative;
  }

  const backToCategoryBtnFont = document.getElementById("backToCategoryBtnFont");
  if (backToCategoryBtnFont) {
    backToCategoryBtnFont.onclick = () => {
      isClassicMode = false;
      showScreen("category-screen");
    };
  }

  /* ----- 대학교 맞히기 ----- */

  function loadUniv(fromClassic) {
    const p = fromClassic ? currentUnivProblem : currentUnivProblem;
    if (!p) return;

    const qImg = document.getElementById("univImage");
    const aImg = document.getElementById("univAnswerImage");
    const inp = document.getElementById("univAnswerInput");
    const result = document.getElementById("univResult");
    const answerSection = document.getElementById("univAnswerSection");
    const nextBtn = document.getElementById("nextUnivBtn");

    if (!qImg || !aImg || !inp || !result || !answerSection || !nextBtn) return;

    qImg.src = p.q;
    qImg.classList.remove("hidden");
    aImg.src = "";
    aImg.classList.add("hidden");

    inp.value = "";
    setTimeout(() => inp.focus(), 0);

    result.textContent = "";
    answerSection.style.display = "block";
    nextBtn.classList.add("hidden");

    const checkBtn = document.getElementById("univCheckBtn");
    if (!checkBtn) return;

    checkBtn.onclick = () => {
      const input = inp.value.trim();
      if (!input) {
        alert("정답 입력!");
        return;
      }

      const user = normalize(input);
      const ans = normalize(p.a);
      let ok = user === ans;
      if (!ok && p.alt) {
        ok = p.alt.some((v) => normalize(v) === user);
      }

      if (ok) {
        result.textContent = "맞았습니다!";
        result.style.color = "#16a34a";
        if (fromClassic) classicScore++;
      } else {
        result.textContent = `틀렸습니다! (정답: ${p.a})`;
        result.style.color = "#dc2626";
        if (fromClassic) {
          endClassic();
          return;
        }
      }

      qImg.classList.add("hidden");
      aImg.src = p.reveal;
      aImg.classList.remove("hidden");

      answerSection.style.display = "none";
      nextBtn.classList.remove("hidden");
    };

    nextBtn.onclick = () => {
      if (fromClassic) {
        loadClassicNext();
      } else {
        nextCreative();
      }
    };
  }

  const backToCategoryBtnUniv = document.getElementById("backToCategoryBtnUniv");
  if (backToCategoryBtnUniv) {
    backToCategoryBtnUniv.onclick = () => {
      isClassicMode = false;
      showScreen("category-screen");
    };
  }

  /* ============================================================
     경제·금융 : 티커 + 경제 텍스트
  ============================================================ */

  let financeProblems = [];
  let currentFinance = 0;
  let currentFinanceProblem = null;

  const financeBtn = document.getElementById("financeBtn");
  if (financeBtn) {
    financeBtn.onclick = () => {
      isClassicMode = false;
      financeProblems = shuffleArray([
        ...tickerData.map((v) => ({ type: "ticker", ...v })),
        ...economyData.map((v) => ({ type: "economy", ...v }))
      ]);
      currentFinance = 0;
      loadFinance();
    };
  }

  function loadFinance() {
    resetTextAndInputs();
    resetImages();

    const p = financeProblems[currentFinance];
    if (!p) {
      alert("경제·금융 끝!");
      showScreen("category-screen");
      return;
    }

    currentFinanceProblem = p;
    loadFinanceSingle(p, false);
  }

  function loadFinanceSingle(p, fromClassic) {
    resetTextAndInputs();
    resetImages();

    showScreen("ticker-game");

    const qEl = document.getElementById("tickerQuestion");
    const hintEl = document.getElementById("tickerHint");
    const img = document.getElementById("tickerImage");
    const resEl = document.getElementById("tickerResult");
    const inp = document.getElementById("tickerAnswerInput");
    const answerSection = document.getElementById("tickerAnswerSection");
    const nextBtn = document.getElementById("nextTickerBtn");

    if (!qEl || !hintEl || !img || !resEl || !inp || !answerSection || !nextBtn) return;

    img.src = "";
    img.classList.add("hidden");
    resEl.textContent = "";
    inp.value = "";
    setTimeout(() => inp.focus(), 0);

    if (p.type === "ticker") {
      qEl.textContent = "티커: " + p.ticker;
      hintEl.textContent = "힌트: " + p.hint;
    } else {
      qEl.textContent = p.q;
      hintEl.textContent = "";
    }

    answerSection.style.display = "block";
    nextBtn.classList.add("hidden");

    const checkBtn = document.getElementById("tickerCheckBtn");
    if (!checkBtn) return;

    checkBtn.onclick = () => {
      const input = inp.value.trim();
      if (!input) {
        alert("입력하세요!");
        return;
      }

      let ok = false;

      if (p.type === "ticker") {
        ok = normalize(input) === normalize(p.answer);
        if (ok) {
          resEl.textContent = "맞았습니다!";
          resEl.style.color = "#16a34a";
          if (fromClassic) classicScore++;
        } else {
          resEl.textContent = `틀렸습니다! (정답: ${p.answer})`;
          resEl.style.color = "#dc2626";
          if (fromClassic) {
            endClassic();
            return;
          }
        }
        img.src = p.img;
        img.classList.remove("hidden");
      } else {
        const user = normalize(input);
        const ans = normalize(p.a);
        if (user === ans) ok = true;
        else if (p.alt) ok = p.alt.some((v) => normalize(v) === user);

        if (ok) {
          resEl.textContent = "맞았습니다!";
          resEl.style.color = "#16a34a";
          if (fromClassic) classicScore++;
        } else {
          resEl.textContent = `틀렸습니다! (정답: ${p.a})`;
          resEl.style.color = "#dc2626";
          if (fromClassic) {
            if (p.reveal) {
              img.src = p.reveal;
              img.classList.remove("hidden");
            }
            endClassic();
            return;
          }
        }

        if (p.reveal) {
          img.src = p.reveal;
          img.classList.remove("hidden");
        }
      }

      answerSection.style.display = "none";
      nextBtn.classList.remove("hidden");
    };

    nextBtn.onclick = () => {
      if (fromClassic) {
        loadClassicNext();
      } else {
        currentFinance++;
        loadFinance();
      }
    };
  }

  const backToCategoryBtnTicker = document.getElementById("backToCategoryBtnTicker");
  if (backToCategoryBtnTicker) {
    backToCategoryBtnTicker.onclick = () => {
      isClassicMode = false;
      showScreen("category-screen");
    };
  }

  /* ============================================================
     문학·철학·종교 : 신화 문제
  ============================================================ */

  let mythProblems = [];
  let currentMyth = 0;
  let currentMythProblem = null;

  const mythBtn = document.getElementById("mythBtn");
  if (mythBtn) {
    mythBtn.onclick = () => {
      isClassicMode = false;
      mythProblems = shuffleArray(mythData);
      currentMyth = 0;
      loadMyth();
    };
  }

  function loadMyth() {
    resetTextAndInputs();
    resetImages();

    const p = mythProblems[currentMyth];
    if (!p) {
      alert("모든 신화 문제 완료!");
      showScreen("category-screen");
      return;
    }

    currentMythProblem = p;
    loadMythSingle(p, false);
  }

  function loadMythSingle(p, fromClassic) {
    resetTextAndInputs();
    resetImages();

    showScreen("myth-game");

    const qEl = document.getElementById("mythQuestion");
    const imgEl = document.getElementById("mythImage");
    const resEl = document.getElementById("mythResult");
    const inp = document.getElementById("mythAnswerInput");
    const answerSection = document.getElementById("mythAnswerSection");
    const nextBtn = document.getElementById("nextMythBtn");

    if (!qEl || !imgEl || !resEl || !inp || !answerSection || !nextBtn) return;

    qEl.innerHTML = p.q.replace(/\n/g, "<br>");
    resEl.textContent = "";

    imgEl.src = "";
    imgEl.classList.add("hidden");

    inp.value = "";
    inp.placeholder = p.type === "order" ? "예: 14253" : "정답 입력";
    setTimeout(() => inp.focus(), 0);

    answerSection.style.display = "block";
    nextBtn.classList.add("hidden");

    const checkBtn = document.getElementById("mythCheckBtn");
    if (!checkBtn) return;

    checkBtn.onclick = () => {
      const input = inp.value.trim();
      if (!input) {
        alert("정답 입력!");
        return;
      }

      let ok = false;
      if (p.type === "order") {
        ok = input === p.a;
      } else {
        const user = normalize(input);
        const ans = normalize(p.a);
        if (user === ans) ok = true;
        else if (p.alt) ok = p.alt.some((v) => normalize(v) === user);
      }

      if (ok) {
        resEl.textContent = "맞았습니다!";
        resEl.style.color = "#16a34a";
        if (fromClassic) classicScore++;
      } else {
        resEl.textContent = `틀렸습니다! (정답: ${p.a})`;
        resEl.style.color = "#dc2626";
        if (fromClassic) {
          if (p.reveal) {
            imgEl.src = p.reveal;
            imgEl.classList.remove("hidden");
          }
          answerSection.style.display = "none";
          nextBtn.classList.remove("hidden");
          endClassic();
          return;
        }
      }

      if (p.reveal) {
        imgEl.src = p.reveal;
        imgEl.classList.remove("hidden");
      }

      answerSection.style.display = "none";
      nextBtn.classList.remove("hidden");
    };

    nextBtn.onclick = () => {
      if (fromClassic) {
        loadClassicNext();
      } else {
        currentMyth++;
        loadMyth();
      }
    };
  }

  const backToCategoryBtnMyth = document.getElementById("backToCategoryBtnMyth");
  if (backToCategoryBtnMyth) {
    backToCategoryBtnMyth.onclick = () => {
      isClassicMode = false;
      showScreen("category-screen");
    };
  }

  /* ============================================================
     언어 / 사회 / 문화 / 잡학 → misc-game 재사용
  ============================================================ */

  let miscMode = null; // "lang" | "society" | "culture" | "misc" | "classic"
  let langList = [];
  let currentLang = 0;
  let societyList = [];
  let currentSociety = 0;
  let cultureList = [];
  let currentCulture = 0;
  let miscList = [];
  let currentMisc = 0;
  let currentMiscProblem = null;

  const miscTitleEl = document.querySelector("#misc-game h1");
  const miscQEl = document.getElementById("miscQuestion");
  const miscInp = document.getElementById("miscAnswerInput");
  const miscRes = document.getElementById("miscResult");
  const miscExplain = document.getElementById("miscExplain");
  const miscAnswerSection = document.getElementById("miscAnswerSection");
  const nextMiscBtn = document.getElementById("nextMiscBtn");

  const langBtn = document.getElementById("langBtn");
  const societyBtn = document.getElementById("societyBtn");
  const cultureBtn = document.getElementById("cultureBtn");
  const miscBtn = document.getElementById("miscBtn");

  if (langBtn) {
    langBtn.onclick = () => {
      isClassicMode = false;
      miscMode = "lang";
      langList = shuffleArray(langData);
      currentLang = 0;
      loadMiscLike();
    };
  }

  if (societyBtn) {
    societyBtn.onclick = () => {
      isClassicMode = false;
      miscMode = "society";
      societyList = shuffleArray(societyData);
      currentSociety = 0;
      loadMiscLike();
    };
  }

  if (cultureBtn) {
    cultureBtn.onclick = () => {
      isClassicMode = false;
      miscMode = "culture";
      cultureList = shuffleArray(cultureData);
      currentCulture = 0;
      loadMiscLike();
    };
  }

  if (miscBtn) {
    miscBtn.onclick = () => {
      isClassicMode = false;
      miscMode = "misc";
      miscList = shuffleArray(miscData);
      currentMisc = 0;
      loadMiscLike();
    };
  }

  function getCurrentMiscProblem() {
    if (miscMode === "lang") return langList[currentLang];
    if (miscMode === "society") return societyList[currentSociety];
    if (miscMode === "culture") return cultureList[currentCulture];
    if (miscMode === "classic") return currentMiscProblem;
    return miscList[currentMisc];
  }

  function loadMiscLike() {
    resetTextAndInputs();
    resetImages();

    const p = getCurrentMiscProblem();
    if (!p) {
      const msg =
        miscMode === "lang"
          ? "언어 끝!"
          : miscMode === "society"
          ? "사회·정치·법 끝!"
          : miscMode === "culture"
          ? "문화·예술·스포츠 끝!"
          : "모든 잡학 문제 완료!";
      alert(msg);
      showScreen("category-screen");
      return;
    }

    showScreen("misc-game");

    if (miscMode === "lang") miscTitleEl.textContent = "언어 퀴즈";
    else if (miscMode === "society") miscTitleEl.textContent = "사회·정치·법 퀴즈";
    else if (miscMode === "culture") miscTitleEl.textContent = "문화·예술·스포츠 퀴즈";
    else if (miscMode === "classic") miscTitleEl.textContent = "클래식 텍스트 퀴즈";
    else miscTitleEl.textContent = "잡학 맞히기";

    miscQEl.textContent = p.q || p.question || "";
    miscRes.textContent = "";
    miscExplain.textContent = "";

    miscInp.value = "";
    setTimeout(() => miscInp.focus(), 0);

    miscAnswerSection.style.display = "block";
    nextMiscBtn.classList.add("hidden");
  }

  function loadMiscSingle(p, fromClassic) {
    miscMode = "classic";
    currentMiscProblem = p;
    loadMiscLike();

    const checkBtn = document.getElementById("miscCheckBtn");
    if (!checkBtn) return;

    checkBtn.onclick = () => {
      const input = miscInp.value.trim();
      if (!input) {
        alert("정답 입력!");
        return;
      }

      const answer = p.a || p.answer;
      let ok = false;

      const user = normalize(input);
      const ans = normalize(answer);

      if (user === ans) ok = true;
      else if (p.alt) ok = p.alt.some((v) => normalize(v) === user);

      if (ok) {
        miscRes.textContent = "맞았습니다!";
        miscRes.style.color = "#16a34a";
        if (fromClassic) classicScore++;
      } else {
        miscRes.textContent = `틀렸습니다! (정답: ${answer})`;
        miscRes.style.color = "#dc2626";
        if (fromClassic) {
          miscExplain.textContent = p.explain || "";
          miscAnswerSection.style.display = "none";
          nextMiscBtn.classList.remove("hidden");
          endClassic();
          return;
        }
      }

      miscExplain.textContent = p.explain || "";

      let img = document.getElementById("miscRevealImage");
      if (!img) {
        img = document.createElement("img");
        img.id = "miscRevealImage";
        img.className = "misc-reveal-image";
        miscQEl.insertAdjacentElement("afterend", img);
      }
      img.src = "";
      img.classList.add("hidden");

      if (p.reveal) {
        img.src = p.reveal;
        img.classList.remove("hidden");
      }

      miscAnswerSection.style.display = "none";
      nextMiscBtn.classList.remove("hidden");
    };

    nextMiscBtn.onclick = () => {
      if (fromClassic) {
        loadClassicNext();
      }
    };
  }

  const miscCheckBtn = document.getElementById("miscCheckBtn");
  if (miscCheckBtn) {
    miscCheckBtn.onclick = () => {
      const p = getCurrentMiscProblem();
      if (!p) return;

      const input = miscInp.value.trim();
      if (!input) {
        alert("정답 입력!");
        return;
      }

      const answer = p.a || p.answer;
      let ok = false;

      if (miscMode === "misc") {
        ok = normalize(input) === normalize(answer);
      } else {
        const user = normalize(input);
        const ans = normalize(answer);
        if (user === ans) ok = true;
        else if (p.alt) ok = p.alt.some((v) => normalize(v) === user);
      }

      if (ok) {
        miscRes.textContent = "맞았습니다!";
        miscRes.style.color = "#16a34a";
      } else {
        miscRes.textContent = `틀렸습니다! (정답: ${answer})`;
        miscRes.style.color = "#dc2626";
      }

      miscExplain.textContent = p.explain || "";

      let img = document.getElementById("miscRevealImage");
      if (!img) {
        img = document.createElement("img");
        img.id = "miscRevealImage";
        img.className = "misc-reveal-image";
        miscQEl.insertAdjacentElement("afterend", img);
      }
      img.src = "";
      img.classList.add("hidden");

      if (p.reveal) {
        img.src = p.reveal;
        img.classList.remove("hidden");
      }

      miscAnswerSection.style.display = "none";
      nextMiscBtn.classList.remove("hidden");
    };
  }

  if (nextMiscBtn) {
    nextMiscBtn.onclick = () => {
      if (miscMode === "lang") currentLang++;
      else if (miscMode === "society") currentSociety++;
      else if (miscMode === "culture") currentCulture++;
      else currentMisc++;

      loadMiscLike();
    };
  }

  const backToCategoryBtnMisc = document.getElementById("backToCategoryBtnMisc");
  if (backToCategoryBtnMisc) {
    backToCategoryBtnMisc.onclick = () => {
      isClassicMode = false;
      showScreen("category-screen");
    };
  }

  /* ============================================================
     Classic 결과 화면 버튼
  ============================================================ */

  const classicRestartBtn = document.getElementById("classicRestartBtn");
  const classicBackBtn = document.getElementById("classicBackBtn");

  if (classicRestartBtn) {
    classicRestartBtn.onclick = () => {
      if (!classicList.length) {
        alert("클래식 문제가 없습니다.");
        showScreen("main-screen");
        return;
      }
      // 다시 시작
      isClassicMode = true;
      classicScore = 0;
      classicIndex = 0;
      classicList = shuffleArray(classicList);
      startClassicMode();
    };
  }

  if (classicBackBtn) {
    classicBackBtn.onclick = () => {
      isClassicMode = false;
      showScreen("main-screen");
    };
  }

  /* ============================================================
     ESC = 이전 화면 / Enter = 확인/다음
  ============================================================ */

  document.addEventListener("keydown", (e) => {
    // ESC → 뒤로가기
    if (e.key === "Escape") {
      const current = [...document.querySelectorAll(".screen")].find(
        (s) => s.style.display !== "none"
      );
      if (!current) return;
      if (current.id === "main-screen") return;

      if (current.id === "category-screen") {
        showScreen("main-screen");
      } else if (current.id === "classic-result-screen") {
        // 결과 화면에서 ESC → 메인
        if (classicBackBtn) classicBackBtn.click();
      } else {
        showScreen("category-screen");
      }
      return;
    }

    // Enter → 현재 화면에서 확인 버튼 / 다음 버튼
    if (e.key === "Enter") {
      const current = [...document.querySelectorAll(".screen")].find(
        (s) => s.style.display !== "none"
      );
      if (!current) return;

      // Classic 결과 화면에서 Enter → 다시 도전
      if (current.id === "classic-result-screen") {
        if (classicRestartBtn) classicRestartBtn.click();
        return;
      }

      const checkBtn =
        [...current.querySelectorAll("button[id*='CheckBtn'], #checkBtn")].find(
          (btn) => btn.offsetParent !== null
        );

      const nextBtn =
        [...current.querySelectorAll("button[id*='next']")].find(
          (btn) => btn.offsetParent !== null
        );

      if (checkBtn) checkBtn.click();
      else if (nextBtn) nextBtn.click();
    }
  });
});
