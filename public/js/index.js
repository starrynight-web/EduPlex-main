// Typing Animation
const typingText = document.getElementById("typing-text");
const messages = [
  "Access comprehensive course materials...",
  "Prepare with previous year questions...",
  "Track your exam countdown...",
  "Calculate your target CGPA...",
];
let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentMessage = messages[messageIndex];

  if (isDeleting) {
    typingText.textContent = currentMessage.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingText.textContent = currentMessage.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentMessage.length) {
    isDeleting = true;
    typingSpeed = 1500;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    messageIndex = (messageIndex + 1) % messages.length;
    typingSpeed = 500;
  }

  setTimeout(type, typingSpeed);
}
setTimeout(type, 1000);

// Batch-specific Exam Schedules
const examSchedules = {
  "batch-44": [
    {
      date: new Date("November 3, 2025 11:30:00").getTime(),
      name: "Digital Electronics & Logic Design",
      duration: 1.5,
    },
    {
      date: new Date("November 5, 2025 11:30:00").getTime(),
      name: "Data Structure",
      duration: 1.5,
    },
    {
      date: new Date("November 6, 2025 09:00:00").getTime(),
      name: "Mathematics II",
      duration: 1.5,
    },
  ],
  "batch-45": [
    {
      date: new Date("November 2, 2025 11:30:00").getTime(),
      name: "Software Requirement Specifications",
      duration: 1.5,
    },
    {
      date: new Date("November 4, 2025 11:30:00").getTime(),
      name: "Structured Programming",
      duration: 1.5,
    },
    {
      date: new Date("November 6, 2025 09:00:00").getTime(),
      name: "Mathematics I",
      duration: 1.5,
    },
    {
      date: new Date("November 9, 2025 09:00:00").getTime(),
      name: "Physics I",
      duration: 1.5,
    },
  ],
  "batch-46": [
    {
      date: new Date("November 2, 2025 09:00:00").getTime(),
      name: "English I",
      duration: 1.5,
    },
    {
      date: new Date("November 4, 2025 14:00:00").getTime(),
      name: "Computer Fundamentals",
      duration: 1.5,
    },
    {
      date: new Date("November 6, 2025 14:00:00").getTime(),
      name: "Software Engineering",
      duration: 1.5,
    },
    {
      date: new Date("November 9, 2025 14:00:00").getTime(),
      name: "Bangladesh Studies",
      duration: 1.5,
    },
  ],
};

// Detect current batch from URL
function getCurrentBatch() {
  const path = window.location.pathname;
  if (path.includes("batch-44")) return "batch-44";
  if (path.includes("batch-45")) return "batch-45";
  if (path.includes("batch-46")) return "batch-46";
  return "batch-44"; // default fallback
}

function getNextExam(batch) {
  const now = new Date().getTime();
  const schedule = examSchedules[batch];
  return schedule.find((exam) => exam.date > now) || null;
}

function getCurrentExamIndex(batch) {
  const now = new Date().getTime();
  const schedule = examSchedules[batch];

  for (let i = 0; i < schedule.length; i++) {
    const examStart = schedule[i].date;
    const examEnd = examStart + schedule[i].duration * 60 * 60 * 1000;

    if (now >= examStart && now <= examEnd) {
      return i;
    }
  }
  return -1;
}

function getExamStatus() {
  const batch = getCurrentBatch();
  const now = new Date().getTime();
  const nextExam = getNextExam(batch);
  const currentExamIndex = getCurrentExamIndex(batch);

  if (currentExamIndex !== -1) {
    const currentExam = examSchedules[batch][currentExamIndex];
    const currentExamEnd =
      currentExam.date + currentExam.duration * 60 * 60 * 1000;
    const timeUntilEnd = currentExamEnd - now;

    return {
      type: "ongoing",
      examNumber: currentExamIndex + 1,
      examName: currentExam.name,
      timeRemaining: timeUntilEnd,
      message: `${currentExam.name} exam in progress`,
    };
  } else if (nextExam) {
    return {
      type: "countdown",
      examNumber: examSchedules[batch].indexOf(nextExam) + 1,
      examName: nextExam.name,
      timeRemaining: nextExam.date - now,
      message: "Next exam countdown:",
    };
  } else {
    return {
      type: "finished",
      examNumber: null,
      examName: null,
      timeRemaining: 0,
      message: "All midterm exams are finished!",
    };
  }
}

function updateCountdown() {
  const status = getExamStatus();
  const countdownElement = document.getElementById("countdown");
  const subtitleElement = document.querySelector(".countdown-subtitle");

  if (!countdownElement || !subtitleElement) return;

  if (status.type === "finished") {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    subtitleElement.textContent = status.message;
    return;
  }

  const totalSeconds = Math.floor(status.timeRemaining / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");

  if (status.type === "ongoing") {
    subtitleElement.textContent = `${status.examName} ends in:`;
  } else {
    subtitleElement.textContent = `${status.examName} starts in:`;
  }
}

// Update title to show "Midterm Exam Countdown"
function updatePageTitle() {
  const countdownTitle = document.querySelector(".countdown-title");
  if (countdownTitle) {
    countdownTitle.textContent = "Midterm Exam Countdown";
  }
}

// Initialize countdown
updatePageTitle();
updateCountdown();
setInterval(updateCountdown, 1000);

// 🎓 Single Subject CGPA Calculator Logic
document.getElementById("calculate-btn").addEventListener("click", function () {
  resetErrors();

  const inputs = {
    final: getValidatedInput("final-marks", 0, 40, "final-error"),
    mid: getValidatedInput("mid-marks", 0, 25, "mid-error"),
    presentation: getValidatedInput("presentation", 0, 8, "presentation-error"),
    assignment: getValidatedInput("assignment", 0, 5, "assignment-error"),
    ct: getValidatedInput("ct-marks", 0, 15, "ct-error"),
    attendance: getValidatedInput("attendance", 0, 7, "attendance-error"),
  };

  if (Object.values(inputs).includes(null)) return;

  const totalMarks = Object.values(inputs).reduce((sum, val) => sum + val, 0);
  document.getElementById("current-total").textContent = totalMarks.toFixed(2);

  const { grade, cgpa } = getGradeAndCgpa(totalMarks);
  document.getElementById("grade").textContent = grade;
  document.getElementById("cgpa").textContent = cgpa;

  const next = getNextGrade(totalMarks);
  document.getElementById("analysis").textContent = next
    ? `If you work hard, you can reach grade ${next.grade} (CGPA ${
        next.cgpa
      }). You only need ${(next.min - totalMarks).toFixed(
        2
      )} more marks to reach that goal.`
    : `You're already at the highest grade. Excellent work!`;
});

function resetErrors() {
  document.querySelectorAll(".error-message").forEach((el) => {
    el.style.display = "none";
    el.textContent = "";
    if (el.previousElementSibling) {
      el.previousElementSibling.style.borderColor = "#ddd";
    }
  });
}

function getValidatedInput(id, min, max, errorId) {
  const value = parseFloat(document.getElementById(id).value);
  if (isNaN(value) || value < min || value > max) {
    showError(errorId, id, `Please enter valid input (${min}–${max})`);
    return null;
  }
  return value;
}

function showError(errorId, inputId, message) {
  const errorEl = document.getElementById(errorId);
  errorEl.textContent = message;
  errorEl.style.display = "block";
  document.getElementById(inputId).style.borderColor = "red";
}

function getCGPA(marks) {
  if (marks >= 80) return 4.0;
  if (marks < 40) return 0.0;

  let steps = Math.floor((80 - marks) / 0.5);
  let cgpa = 4.0 - steps * 0.025;

  return parseFloat(cgpa.toFixed(2));
}

function getGrade(cgpa) {
  if (cgpa === 4.0) return "A+";
  if (cgpa >= 3.75) return "A";
  if (cgpa >= 3.5) return "A-";
  if (cgpa >= 3.25) return "B+";
  if (cgpa >= 3.0) return "B";
  if (cgpa >= 2.75) return "B-";
  if (cgpa >= 2.5) return "C+";
  if (cgpa >= 2.25) return "C";
  if (cgpa >= 2.0) return "D";
  return "F";
}

function getGradeAndCgpa(marks) {
  const cgpa = getCGPA(marks);
  const grade = getGrade(cgpa);
  return { grade, cgpa: cgpa.toFixed(2) };
}

function getNextGrade(marks) {
  const current = getGradeAndCgpa(marks);
  if (current.cgpa >= 4.0) return null;

  for (let nextMarks = marks + 0.5; nextMarks <= 80; nextMarks += 0.5) {
    const next = getGradeAndCgpa(nextMarks);
    if (next.grade !== current.grade) {
      return { min: nextMarks, grade: next.grade, cgpa: next.cgpa };
    }
  }
  return null;
}

// 📘 Semester CGPA Calculator
(function initSemesterCgpaCalculator() {
  const form = document.getElementById("semester-form");
  if (!form) return;

  const calcBtn = document.getElementById("calculate-semester-btn");
  const resultEl = document.getElementById("semester-cgpa-value");
  const gradeEl = document.getElementById("semester-grade");
  const messageEl = document.getElementById("semester-message");
  const totalCreditsEl = document.getElementById("semester-total-credits");

  const SUBJECTS = [
    { code: "BNS", name: "Bangladesh Studies (BNS)", credit: 3 },
    { code: "CF", name: "Computer Fundamentals (CF)", credit: 3 },
    { code: "CFL", name: "Computer Fundamentals Lab (CFL)", credit: 1 },
    {
      code: "ISE",
      name: "Introduction To Software Engineering (ISE)",
      credit: 3,
    },
    { code: "E1", name: "English - 1 (E-1)", credit: 3 },
  ];

  const TOTAL_CREDIT_POINTS = SUBJECTS.reduce((sum, s) => sum + s.credit, 0);
  totalCreditsEl.textContent = TOTAL_CREDIT_POINTS.toString();

  calcBtn.addEventListener("click", () => {
    let totalWeightedCgpa = 0;
    let totalCredits = 0;
    let validSubjectCount = 0;

    SUBJECTS.forEach((subject) => {
      const inputEl = document.getElementById(
        `${subject.code.toLowerCase()}-marks`
      );
      const errorEl = document.getElementById(
        `${subject.code.toLowerCase()}-error`
      );
      const raw = parseFloat(inputEl?.value);

      errorEl.textContent = "";
      errorEl.style.display = "none";
      inputEl.style.borderColor = "#ddd";

      if (isNaN(raw) || raw < 0 || raw > 100) {
        errorEl.textContent = `Enter valid marks for ${subject.name} (0–100)`;
        errorEl.style.display = "block";
        inputEl.style.borderColor = "red";
        return;
      }

      const { cgpa } = getGradeAndCgpa(raw);
      totalWeightedCgpa += parseFloat(cgpa) * subject.credit;
      totalCredits += subject.credit;
      validSubjectCount++;
    });

    if (validSubjectCount === 0) {
      resultEl.textContent = "--";
      gradeEl.textContent = "--";
      messageEl.textContent =
        "Please enter valid marks for at least one subject.";
      return;
    }

    const semesterCgpa = (totalWeightedCgpa / totalCredits).toFixed(2);
    resultEl.textContent = semesterCgpa;

    const semesterGrade = getGrade(parseFloat(semesterCgpa));
    gradeEl.textContent = semesterGrade;

    messageEl.textContent = `Your semester CGPA is ${semesterCgpa} (${semesterGrade}). Keep pushing forward!`;
  });
})();

// Enhanced Dropdown Functionality - Question Bank Only
function initQuestionBankDropdown() {
  const dropdownContainers = document.querySelectorAll(".dropdown-container");

  dropdownContainers.forEach((container) => {
    const dropdownBtn = container.querySelector(".dropdown-btn");

    if (!dropdownBtn) return;

    dropdownBtn.addEventListener("click", function (e) {
      e.stopPropagation();

      // Close other dropdowns
      dropdownContainers.forEach((otherContainer) => {
        if (otherContainer !== container) {
          otherContainer.classList.remove("active");
        }
      });

      // Toggle current dropdown
      container.classList.toggle("active");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown-container")) {
      dropdownContainers.forEach((container) => {
        container.classList.remove("active");
      });
    }
  });

  // Close dropdown on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      dropdownContainers.forEach((container) => {
        container.classList.remove("active");
      });
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initQuestionBankDropdown();
});
