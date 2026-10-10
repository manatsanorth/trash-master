/* =====================================
   Google Apps Script URL
===================================== */

const API_URL = "https://script.google.com/macros/s/AKfycbx8INmMPUOzyfV-Dh0I7KX7B_WRUdh0L3CS1h0mFsSbTReGBEgoqkznRxkiqmcq7lufNQ/exec";


/* =====================================
   คำถาม 10 ข้อ
===================================== */

const questions = [

  {
    category:
      "ขยะรีไซเคิล",

    question:
      "หลังจากดื่มน้ำจากขวดพลาสติกหมดแล้ว ควรทำอย่างไรก่อนนำไปทิ้ง?",

    answers: [

      "ทิ้งลงถังขยะทั่วไปทันที",

      "เทน้ำออกและแยกลงขยะรีไซเคิล",

      "ทิ้งรวมกับเศษอาหาร",

      "ใส่น้ำกลับเข้าไปในขวด"

    ],

    correct: 1,

    explanation:
      "ขวดพลาสติกที่ไม่มีของเหลวและเศษอาหารปนเปื้อน เหมาะกับการนำเข้าสู่ระบบรีไซเคิลมากกว่า"
  },


  {
    category:
      "ขยะอันตราย",

    question:
      "ถ่านไฟฉายที่ใช้หมดแล้วควรจัดเป็นขยะประเภทใด?",

    answers: [

      "ขยะทั่วไป",

      "ขยะรีไซเคิล",

      "ขยะอันตราย",

      "ขยะอินทรีย์"

    ],

    correct: 2,

    explanation:
      "ถ่านไฟฉายอาจมีสารที่เป็นอันตราย จึงควรนำไปทิ้งที่จุดรับขยะอันตราย"
  },


  {
    category:
      "ขยะอินทรีย์",

    question:
      "เศษอาหารและเปลือกผลไม้ควรจัดเป็นขยะประเภทใด?",

    answers: [

      "ขยะอินทรีย์หรือขยะเปียก",

      "ขยะอันตราย",

      "ขยะรีไซเคิล",

      "ขยะอิเล็กทรอนิกส์"

    ],

    correct: 0,

    explanation:
      "เศษอาหารและเปลือกผลไม้ย่อยสลายได้ จัดเป็นขยะอินทรีย์"
  },


  {
    category:
      "ขยะรีไซเคิล",

    question:
      "กระป๋องอะลูมิเนียมที่ใช้แล้วควรจัดการอย่างไร?",

    answers: [

      "ทิ้งรวมกับเศษอาหาร",

      "แยกเพื่อนำไปรีไซเคิล",

      "เผาทิ้ง",

      "ทิ้งเป็นขยะอันตราย"

    ],

    correct: 1,

    explanation:
      "อะลูมิเนียมสามารถนำกลับเข้าสู่กระบวนการรีไซเคิลได้"
  },


  {
    category:
      "ขยะทั่วไป",

    question:
      "ทิชชู่ที่ใช้แล้วโดยทั่วไปควรทิ้งลงขยะประเภทใด?",

    answers: [

      "ขยะรีไซเคิล",

      "ขยะทั่วไป",

      "ขยะอันตราย",

      "ขยะอิเล็กทรอนิกส์"

    ],

    correct: 1,

    explanation:
      "ทิชชู่ใช้แล้วมักมีการปนเปื้อนและไม่เหมาะกับการรีไซเคิล"
  },


  {
    category:
      "ขยะอันตราย",

    question:
      "หลอดไฟที่หมดอายุหรือชำรุดควรจัดการอย่างไร?",

    answers: [

      "ทิ้งรวมกับขยะทั่วไป",

      "นำไปทิ้งที่จุดรับขยะอันตราย",

      "ทิ้งรวมกับขวดพลาสติก",

      "ทิ้งลงถังเศษอาหาร"

    ],

    correct: 1,

    explanation:
      "หลอดไฟบางชนิดมีสารที่ควรจัดการอย่างระมัดระวัง จึงควรทิ้งที่จุดรับขยะอันตราย"
  },


  {
    category:
      "ลดขยะต้นทาง",

    question:
      "ข้อใดช่วยลดปริมาณขยะตั้งแต่ต้นทางได้ดีที่สุด?",

    answers: [

      "ใช้แก้วพลาสติกใหม่ทุกครั้ง",

      "ขอถุงพลาสติกเพิ่มทุกครั้ง",

      "พกแก้วน้ำหรือขวดน้ำส่วนตัว",

      "ใช้ของแบบครั้งเดียวทิ้ง"

    ],

    correct: 2,

    explanation:
      "การใช้ของซ้ำช่วยลดการเกิดขยะตั้งแต่ต้นทาง"
  },


  {
    category:
      "ก่อนรีไซเคิล",

    question:
      "กล่องอาหารที่มีเศษอาหารติดอยู่ ควรทำอย่างไรก่อนนำไปรีไซเคิล?",

    answers: [

      "ทิ้งลงถังรีไซเคิลได้ทันที",

      "เอาเศษอาหารออกและทำความสะอาด",

      "ใส่เศษอาหารเพิ่ม",

      "ทิ้งเป็นขยะอันตราย"

    ],

    correct: 1,

    explanation:
      "การลดสิ่งปนเปื้อนช่วยเพิ่มโอกาสที่วัสดุจะนำไปรีไซเคิลได้จริง"
  },


  {
    category:
      "การปนเปื้อน",

    question:
      "เหตุใดขยะรีไซเคิลที่เปื้อนอาหารมากจึงอาจเป็นปัญหา?",

    answers: [

      "ทำให้รีไซเคิลได้ง่ายขึ้น",

      "ช่วยเพิ่มมูลค่าขยะ",

      "อาจทำให้วัสดุนั้นไม่เหมาะกับการรีไซเคิล",

      "ไม่มีผลอะไร"

    ],

    correct: 2,

    explanation:
      "สิ่งปนเปื้อนอาจทำให้วัสดุบางชนิดถูกคัดออกจากกระบวนการรีไซเคิล"
  },


  {
    category:
      "หน้าที่พลเมือง",

    question:
      "ใครมีหน้าที่ช่วยลดและแยกขยะอย่างถูกต้อง?",

    answers: [

      "เจ้าหน้าที่ทำความสะอาดเท่านั้น",

      "มหาวิทยาลัยเท่านั้น",

      "ร้านค้าเท่านั้น",

      "ทุกคน"

    ],

    correct: 3,

    explanation:
      "การจัดการขยะเป็นความรับผิดชอบร่วมกันของทุกคนในพื้นที่ส่วนรวม"
  }

];



/* =====================================
   ตัวแปร
===================================== */

let currentQuestion = 0;

let score = 0;

let playerName = "";

let yearLevel = "";

let startTime = null;

let answersLog = [];



/* =====================================
   เปลี่ยนหน้า
===================================== */

function showScreen(id) {

  document
    .querySelectorAll(
      ".screen"
    )
    .forEach(
      screen => {

        screen
          .classList
          .remove(
            "active"
          );

      }
    );


  document
    .getElementById(id)
    .classList
    .add(
      "active"
    );


  window.scrollTo({

    top: 0,

    behavior:
      "smooth"

  });

}



/* =====================================
   Escape HTML
===================================== */

function escapeHtml(text) {

  return text.replace(

    /[&<>"']/g,

    char => {

      const map = {

        "&":
          "&amp;",

        "<":
          "&lt;",

        ">":
          "&gt;",

        '"':
          "&quot;",

        "'":
          "&#039;"

      };


      return map[char];

    }

  );

}



/* =====================================
   Navigation
===================================== */

document
  .getElementById(
    "startBtn"
  )
  .onclick =
    () => {

      showScreen(
        "storyScreen"
      );

    };


document
  .getElementById(
    "storyNextBtn"
  )
  .onclick =
    () => {

      showScreen(
        "profileScreen"
      );

    };


document
  .getElementById(
    "profileNextBtn"
  )
  .onclick =
    validateProfile;


document
  .getElementById(
    "beginQuizBtn"
  )
  .onclick =
    beginQuiz;


document
  .getElementById(
    "restartBtn"
  )
  .onclick =
    () => {

      showScreen(
        "chapterScreen"
      );

    };



document
  .querySelectorAll(
    "[data-home]"
  )
  .forEach(
    button => {

      button.onclick =
        () => {

          const confirmHome =
            confirm(
              "ต้องการกลับหน้าแรกหรือไม่?"
            );


          if (
            confirmHome
          ) {

            location.reload();

          }

        };

    }
  );



/* =====================================
   ตรวจข้อมูลก่อนเริ่ม
===================================== */

function validateProfile() {

  const name =
    document
      .getElementById(
        "playerName"
      )
      .value
      .trim();


  const year =
    document
      .getElementById(
        "yearLevel"
      )
      .value
      .trim();


  const consent =
    document
      .getElementById(
        "consentCheck"
      )
      .checked;


  const error =
    document
      .getElementById(
        "profileError"
      );


  error.textContent =
    "";


  if (
    !name
  ) {

    error.textContent =
      "กรุณาใส่ชื่อเล่น";

    return;

  }


  if (
    !year
  ) {

    error.textContent =
      "กรุณาเลือกชั้นปี";

    return;

  }


  if (
    !consent
  ) {

    error.textContent =
      "กรุณายืนยันความยินยอมก่อนเริ่ม";

    return;

  }


  playerName =
    name;


  yearLevel =
    year;


  document
    .getElementById(
      "welcomeText"
    )
    .innerHTML =

      `สวัสดี <strong>${escapeHtml(playerName)}</strong>

      <br>

      คุณจะพบคำถามทั้งหมด 10 ข้อ

      <br>

      เลือกคำตอบที่คิดว่าถูกที่สุด`;


  showScreen(
    "chapterScreen"
  );

}



/* =====================================
   เริ่ม Quiz
===================================== */

function beginQuiz() {

  currentQuestion =
    0;


  score =
    0;


  answersLog =
    [];


  startTime =
    new Date();


  showScreen(
    "quizScreen"
  );


  renderQuestion();

}



/* =====================================
   แสดงคำถาม
===================================== */

function renderQuestion() {

  const q =
    questions[
      currentQuestion
    ];


  document
    .getElementById(
      "progressText"
    )
    .textContent =

      `${String(
        currentQuestion + 1
      ).padStart(
        2,
        "0"
      )} / ${questions.length}`;


  document
    .getElementById(
      "progressFill"
    )
    .style
    .width =

      `${(
        (
          currentQuestion + 1
        )
        /
        questions.length
      )
      * 100}%`;


  document
    .getElementById(
      "questionCategory"
    )
    .textContent =
      q.category;


  document
    .getElementById(
      "questionText"
    )
    .textContent =
      q.question;


  document
    .getElementById(
      "feedbackText"
    )
    .textContent =
      "";


  const box =
    document
      .getElementById(
        "answersBox"
      );


  box.innerHTML =
    "";


  q.answers
    .forEach(
      (
        answer,
        index
      ) => {

        const button =
          document
            .createElement(
              "button"
            );


        button.className =
          "answer-btn";


        button.textContent =

          `${String
            .fromCharCode(
              65 + index
            )}

           ${answer}`;


        button.onclick =
          () => {

            selectAnswer(
              index,
              button
            );

          };


        box.appendChild(
          button
        );

      }
    );

}



/* =====================================
   ตรวจคำตอบ
===================================== */

function selectAnswer(
  selectedIndex,
  selectedButton
) {

  const q =
    questions[
      currentQuestion
    ];


  const buttons =
    [
      ...document
        .querySelectorAll(
          ".answer-btn"
        )
    ];


  buttons
    .forEach(
      button => {

        button.disabled =
          true;

      }
    );


  const isCorrect =

    selectedIndex
    ===
    q.correct;


  if (
    isCorrect
  ) {

    score++;


    selectedButton
      .classList
      .add(
        "correct"
      );


    document
      .getElementById(
        "feedbackText"
      )
      .textContent =

        "ถูกต้อง ✓ "
        +
        q.explanation;

  }

  else {

    selectedButton
      .classList
      .add(
        "wrong"
      );


    buttons[
      q.correct
    ]
      .classList
      .add(
        "correct"
      );


    document
      .getElementById(
        "feedbackText"
      )
      .textContent =

        "คำตอบที่ถูกคือข้อที่ไฮไลต์ — "
        +
        q.explanation;

  }


  answersLog
    .push({

      questionNumber:
        currentQuestion + 1,

      selectedIndex:
        selectedIndex,

      correctIndex:
        q.correct,

      isCorrect:
        isCorrect,

      category:
        q.category

    });


  setTimeout(
    () => {

      currentQuestion++;


      if (
        currentQuestion
        <
        questions.length
      ) {

        renderQuestion();

      }

      else {

        finishQuiz();

      }

    },

    1500

  );

}



/* =====================================
   ระดับผลลัพธ์
===================================== */

function getProfile(
  scoreValue
) {

  if (
    scoreValue
    ===
    10
  ) {

    return {

      title:
        "เจ้าแห่งการแยกขยะ",

      english:
        "The Trash Master",

      badge:
        "👑",

      description:
        `${playerName} มีความรู้เรื่องการแยกขยะในระดับดีเยี่ยม เข้าใจทั้งการจำแนกประเภทขยะ การลดขยะตั้งแต่ต้นทาง และการจัดการวัสดุก่อนนำไปรีไซเคิล`,

      strength:
        "สามารถแยกประเภทขยะพื้นฐานได้แม่นยำ และเข้าใจว่าการจัดการขยะเป็นความรับผิดชอบร่วมกันของทุกคน",

      improve:
        "ลองนำความรู้ไปใช้จริงอย่างต่อเนื่อง และช่วยอธิบายวิธีแยกขยะให้คนรอบตัวเข้าใจง่ายขึ้น"

    };

  }


  if (
    scoreValue
    >=
    8
  ) {

    return {

      title:
        "นักแยกขยะมือโปร",

      english:
        "Professional Waste Sorter",

      badge:
        "🌟",

      description:
        `${playerName} มีพื้นฐานเรื่องการแยกขยะที่ดีมาก รู้จักประเภทขยะสำคัญและเข้าใจวิธีจัดการที่เหมาะสม`,

      strength:
        "จำแนกขยะทั่วไป รีไซเคิล อินทรีย์ และขยะอันตรายได้ค่อนข้างแม่นยำ",

      improve:
        "ควรใส่ใจเรื่องความสะอาดและการปนเปื้อนของบรรจุภัณฑ์ก่อนนำไปรีไซเคิล"

    };

  }


  if (
    scoreValue
    >=
    6
  ) {

    return {

      title:
        "นักแยกขยะฝึกหัด",

      english:
        "Waste Sorting Explorer",

      badge:
        "♻",

      description:
        `${playerName} มีความเข้าใจพื้นฐานเรื่องการแยกขยะ แต่ยังมีบางประเภทที่อาจสับสนได้`,

      strength:
        "เข้าใจหลักการพื้นฐานและเห็นความสำคัญของการรับผิดชอบต่อพื้นที่ส่วนรวม",

      improve:
        "ควรทบทวนความแตกต่างระหว่างขยะทั่วไป ขยะรีไซเคิล ขยะอินทรีย์ และขยะอันตราย"

    };

  }


  if (
    scoreValue
    >=
    4
  ) {

    return {

      title:
        "นักแยกขยะมือใหม่",

      english:
        "Eco Beginner",

      badge:
        "🌱",

      description:
        `${playerName} เริ่มมีความรู้เรื่องการแยกขยะแล้ว แต่ยังมีหลายสถานการณ์ที่อาจเลือกประเภทขยะไม่ถูกต้อง`,

      strength:
        "เริ่มเข้าใจความสำคัญของการแยกขยะและมีพื้นฐานที่พัฒนาต่อได้",

      improve:
        "เริ่มจากจำขยะ 4 กลุ่มหลัก และสังเกตป้ายหน้าถังขยะทุกครั้งก่อนทิ้ง"

    };

  }


  return {

    title:
      "ผู้เริ่มต้นรักษ์โลก",

    english:
      "Eco Starter",

    badge:
      "🌍",

    description:
      `${playerName} กำลังอยู่ในจุดเริ่มต้นของการเรียนรู้เรื่องการแยกขยะ สิ่งสำคัญคือการเริ่มเข้าใจว่าขยะแต่ละชนิดต้องจัดการต่างกัน`,

    strength:
      "พร้อมเรียนรู้และเริ่มตระหนักถึงผลของการทิ้งขยะต่อส่วนรวม",

    improve:
      "เริ่มจากเรียนรู้ตัวอย่างขยะที่พบทุกวัน และดูป้ายบนถังก่อนทิ้ง"

  };

}



/* =====================================
   สรุปคะแนน
===================================== */

function finishQuiz() {

  const duration =
    Math.max(

      1,

      Math.round(

        (
          new Date()
          -
          startTime
        )
        /
        1000

      )

    );


  const profile =
    getProfile(
      score
    );


  document
    .getElementById(
      "resultBadge"
    )
    .textContent =
      profile.badge;


  document
    .getElementById(
      "rankTitle"
    )
    .textContent =
      profile.title;


  document
    .getElementById(
      "rankEnglish"
    )
    .textContent =
      profile.english;


  document
    .getElementById(
      "finalScore"
    )
    .textContent =
      `${score}/${questions.length}`;


  document
    .getElementById(
      "resultDescription"
    )
    .textContent =
      profile.description;


  document
    .getElementById(
      "strengthText"
    )
    .textContent =
      profile.strength;


  document
    .getElementById(
      "improveText"
    )
    .textContent =
      profile.improve;


  showScreen(
    "resultScreen"
  );


  saveResult({

    type:
      "quiz_result",

    name:
      playerName,

    year:
      yearLevel,

    score:
      score,

    total:
      questions.length,

    rank:
      profile.title,

    duration:
      duration,

    answers:
      answersLog

  });

}



/* =====================================
   บันทึกผล Quiz ลง Google Sheet
===================================== */

async function saveResult(
  data
) {

  if (

    !API_URL

    ||

    API_URL
      .includes(
        "ใส่_"
      )

  ) {

    return;

  }


  try {

    await fetch(

      API_URL,

      {

        method:
          "POST",

        headers: {

          "Content-Type":
            "text/plain;charset=utf-8"

        },

        body:
          JSON.stringify(
            data
          )

      }

    );

  }

  catch (
    error
  ) {

    console.error(
      "บันทึกข้อมูลไม่สำเร็จ",
      error
    );

  }

}



/* =====================================
   นับผู้เข้าชมหลังบ้าน
   ไม่แสดงบนหน้าเว็บ
===================================== */

async function registerVisitor() {

  if (

    !API_URL

    ||

    API_URL
      .includes(
        "ใส่_"
      )

  ) {

    return;

  }


  try {

    await fetch(

      `${API_URL}?action=visit`

    );

  }

  catch (
    error
  ) {

    console.error(
      "นับผู้เข้าชมไม่สำเร็จ",
      error
    );

  }

}



/* =====================================
   ทำงานเมื่อเปิดเว็บ
===================================== */

window
  .addEventListener(

    "load",

    registerVisitor

  );