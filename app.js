const courses = [
  {
    code: "ECE322",
    name: "Hardest course",
    priority: "Hardest",
    priorityClass: "priority-hardest",
    lectures: 8,
    exam: "2026-06-07",
    examTime: "11:00-13:00",
    room: "132",
  },
  {
    code: "ECEN438",
    name: "Hardest course",
    priority: "Hardest",
    priorityClass: "priority-hardest",
    lectures: 6,
    exam: "2026-06-17",
    examTime: "16:00-18:00",
    room: "9",
  },
  {
    code: "ECE471",
    name: "Medium high priority",
    priority: "Medium high",
    priorityClass: "priority-medium-high",
    lectures: 11,
    exam: "2026-06-09",
    examTime: "11:00-13:00",
    room: "114",
  },
  {
    code: "CSCI465",
    name: "Medium priority",
    priority: "Medium",
    priorityClass: "priority-medium",
    lectures: 12,
    exam: "2026-06-11",
    examTime: "11:00-13:00",
    room: "7",
  },
  {
    code: "ECEN428",
    name: "Medium low priority",
    priority: "Medium low",
    priorityClass: "priority-medium-low",
    lectures: 9,
    exam: "2026-06-14",
    examTime: "13:30-15:30",
    room: "132",
  },
  {
    code: "SSCI201",
    name: "Low priority",
    priority: "Low",
    priorityClass: "priority-low",
    lectures: 11,
    exam: "2026-06-04",
    examTime: "11:00-12:30",
    room: "132",
  },
];

const days = [
  {
    date: "2026-05-29",
    title: "Start strong",
    tasks: [
      task("ECE322", "Study lectures 1-2", "Lecture", "High priority first pass."),
      task("ECEN438", "Study lecture 1", "Lecture", "Start the other hardest course early."),
      task("ECE471", "Study lecture 1", "Lecture", "Begin medium-high priority early."),
    ],
  },
  {
    date: "2026-05-30",
    title: "Build the base",
    tasks: [
      task("ECE322", "Study lectures 3-4", "Lecture", "Keep ECE322 moving fast."),
      task("ECE471", "Study lectures 2-3", "Lecture", "Medium-high priority."),
      task("CSCI465", "Study lectures 1-2", "Lecture", "Light first pass."),
    ],
  },
  {
    date: "2026-05-31",
    title: "Heavy coverage day",
    tasks: [
      task("ECE322", "Study lectures 5-6", "Lecture", "Finish most of the course before June."),
      task("ECEN438", "Study lecture 2", "Lecture", "Keep the final hard course alive."),
      task("CSCI465", "Study lectures 3-4", "Lecture", "Two-topic block."),
      task("ECEN428", "Study lecture 1", "Lecture", "Low pressure first pass."),
    ],
  },
  {
    date: "2026-06-01",
    title: "Finish the core",
    tasks: [
      task("ECE322", "Study lectures 7-8", "Lecture", "Finish all ECE322 lectures."),
      task("ECE471", "Study lectures 4-6", "Lecture", "Get ahead before exam sprints start."),
      task("CSCI465", "Study lectures 5-6", "Lecture", "Reach halfway."),
      task("ECEN428", "Study lectures 2-3", "Lecture", "Reduce the later ECEN428 sprint."),
    ],
  },
  {
    date: "2026-06-02",
    title: "Close early gaps",
    tasks: [
      task("ECE322", "Solve mixed problem set", "Practice", "Convert lectures into exam moves."),
      task("ECE471", "Study lectures 7-9", "Lecture", "Leave only two lectures for the ECE471 sprint."),
      task("CSCI465", "Study lectures 7-8", "Lecture", "Reduce the post-ECE471 load."),
      task("ECEN428", "Study lecture 4", "Lecture", "Small block."),
      task("ECEN438", "Study lecture 3", "Lecture", "One more early hard-course pass."),
    ],
  },
  {
    date: "2026-06-03",
    title: "SSCI201 documents day",
    tasks: [task("SSCI201", "Study all 11 documents", "Docs", "One-day push, as planned.")],
  },
  {
    date: "2026-06-04",
    title: "SSCI201 exam, then ECE322 only",
    exam: "SSCI201",
    tasks: [
      examTask("SSCI201"),
      task("ECE322", "Review weak lectures", "Revision", "Only the next exam subject after SSCI201."),
      task("ECE322", "Redo marked problems", "Practice", "Find and patch mistakes."),
    ],
  },
  {
    date: "2026-06-05",
    title: "ECE322 only",
    tasks: [
      task("ECE322", "Solve past exam set 1", "Practice", "Timed or semi-timed attempt."),
      task("ECE322", "Fix formula and concept gaps", "Revision", "Turn mistakes into a final sheet."),
    ],
  },
  {
    date: "2026-06-06",
    title: "ECE322 revision only",
    revision: "ECE322",
    tasks: [
      task("ECE322", "Revise all lectures", "Revision", "Make a formula and concept sheet."),
      task("ECE322", "Solve past exam questions", "Practice", "Prioritize weak topics."),
    ],
  },
  {
    date: "2026-06-07",
    title: "ECE322 exam, then ECE471 only",
    exam: "ECE322",
    tasks: [
      examTask("ECE322"),
      task("ECE471", "Study lectures 10-11", "Lecture", "Only the next exam subject after ECE322."),
      task("ECE471", "Make final topic checklist", "Revision", "Prepare tomorrow's revision path."),
    ],
  },
  {
    date: "2026-06-08",
    title: "ECE471 revision only",
    revision: "ECE471",
    tasks: [
      task("ECE471", "Revise all lectures", "Revision", "Compress the course into one sheet."),
      task("ECE471", "Solve representative problems", "Practice", "Focus on repeatable question types."),
    ],
  },
  {
    date: "2026-06-09",
    title: "ECE471 exam, then CSCI465 only",
    exam: "ECE471",
    tasks: [
      examTask("ECE471"),
      task("CSCI465", "Study lectures 9-10", "Lecture", "Only the next exam subject after ECE471."),
      task("CSCI465", "Study lectures 11-12", "Lecture", "Finish CSCI465 before revision day."),
    ],
  },
  {
    date: "2026-06-10",
    title: "CSCI465 revision only",
    revision: "CSCI465",
    tasks: [
      task("CSCI465", "Revise all lectures", "Revision", "Make a compact checklist."),
      task("CSCI465", "Solve or review likely questions", "Practice", "Patch weak sections."),
    ],
  },
  {
    date: "2026-06-11",
    title: "CSCI465 exam, then ECEN428 only",
    exam: "CSCI465",
    tasks: [
      examTask("CSCI465"),
      task("ECEN428", "Study lectures 5-7", "Lecture", "Only the next exam subject after CSCI465."),
      task("ECEN428", "Build problem/formula checklist", "Revision", "Prepare the final ECEN428 push."),
    ],
  },
  {
    date: "2026-06-12",
    title: "ECEN428 only",
    tasks: [
      task("ECEN428", "Study lectures 8-9", "Lecture", "Finish all ECEN428 lectures."),
      task("ECEN428", "Solve representative questions", "Practice", "Patch the course before revision day."),
    ],
  },
  {
    date: "2026-06-13",
    title: "ECEN428 revision only",
    revision: "ECEN428",
    tasks: [
      task("ECEN428", "Revise all lectures", "Revision", "Make a final sheet."),
      task("ECEN428", "Solve representative questions", "Practice", "Prioritize common formats."),
    ],
  },
  {
    date: "2026-06-14",
    title: "ECEN428 exam, then ECEN438 only",
    exam: "ECEN428",
    tasks: [
      examTask("ECEN428"),
      task("ECEN438", "Study lectures 4-5", "Lecture", "Only the next exam subject after ECEN428."),
      task("ECEN438", "Review earlier lectures 1-3", "Revision", "Reconnect the early material."),
    ],
  },
  {
    date: "2026-06-15",
    title: "ECEN438 only",
    tasks: [
      task("ECEN438", "Study lecture 6", "Lecture", "Finish all ECEN438 lectures."),
      task("ECEN438", "Solve past exam set", "Practice", "Treat it like a timed attempt."),
      task("ECEN438", "Fix weak topics", "Revision", "Use mistakes to choose what to review."),
    ],
  },
  {
    date: "2026-06-16",
    title: "ECEN438 revision only",
    revision: "ECEN438",
    tasks: [
      task("ECEN438", "Revise all lectures", "Revision", "Final calm pass."),
      task("ECEN438", "Review solved mistakes", "Practice", "No new side quests."),
    ],
  },
  {
    date: "2026-06-17",
    title: "ECEN438 exam",
    exam: "ECEN438",
    tasks: [examTask("ECEN438")],
  },
];

const storageKey = "exam-study-tracker-v1";
let state = loadState();
let hideCompleted = false;

function task(course, title, type, note) {
  return { id: slug(`${course}-${title}`), course, title, type, note };
}

function examTask(course) {
  const courseInfo = courses.find((item) => item.code === course);
  return task(course, `${course} exam (${courseInfo.examTime}, room ${courseInfo.room})`, "Exam", "Good luck. Do the paper calmly.");
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || { completed: {} };
  } catch {
    return { completed: {} };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function isDone(id) {
  return Boolean(state.completed[id]);
}

function setDone(id, done) {
  if (done) {
    state.completed[id] = true;
  } else {
    delete state.completed[id];
  }
  saveState();
  render();
}

function studyTasks() {
  return days.flatMap((day) => day.tasks).filter((item) => item.type !== "Exam");
}

function formatDate(dateValue, options = {}) {
  const date = new Date(`${dateValue}T12:00:00`);
  return new Intl.DateTimeFormat("en", options).format(date);
}

function todayKey() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function getCourseProgress(code) {
  const courseTasks = studyTasks().filter((item) => item.course === code);
  const done = courseTasks.filter((item) => isDone(item.id)).length;
  const total = courseTasks.length;
  return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
}

function getNextExam() {
  const today = todayKey();
  return courses
    .filter((course) => course.exam >= today)
    .sort((a, b) => a.exam.localeCompare(b.exam))[0] || courses[courses.length - 1];
}

function render() {
  renderSummary();
  renderCourseList();
  renderTimeline();
  renderCourseDetails();
}

function renderSummary() {
  const all = studyTasks();
  const done = all.filter((item) => isDone(item.id)).length;
  const percent = all.length ? Math.round((done / all.length) * 100) : 0;
  document.getElementById("overallPercent").textContent = `${percent}%`;
  document.getElementById("overallBar").style.width = `${percent}%`;
  document.getElementById("doneCount").textContent = done;
  document.getElementById("leftCount").textContent = all.length - done;

  const today = todayKey();
  const todayPlan = days.find((day) => day.date === today) || days[0];
  document.getElementById("todayTitle").textContent = `${formatDate(todayPlan.date, {
    weekday: "long",
    month: "short",
    day: "numeric",
  })}: ${todayPlan.title}`;

  const nextExam = getNextExam();
  document.getElementById("nextExam").textContent = `${nextExam.code} on ${formatDate(nextExam.exam, {
    month: "short",
    day: "numeric",
  })}`;

  const todayStudyTasks = todayPlan.tasks.filter((item) => item.type !== "Exam");
  document.getElementById("todayWorkload").textContent = `${todayStudyTasks.length} study task${todayStudyTasks.length === 1 ? "" : "s"}`;
}

function renderCourseList() {
  const courseList = document.getElementById("courseList");
  courseList.innerHTML = courses
    .map((course) => {
      const progress = getCourseProgress(course.code);
      return `
        <article class="course-item">
          <div class="course-item-header">
            <span class="course-code">${course.code}</span>
            <span class="priority-pill ${course.priorityClass}">${course.priority}</span>
          </div>
          <div class="progress-track" aria-label="${course.code} progress">
            <span style="width: ${progress.percent}%"></span>
          </div>
          <div class="course-meta">
            <span>${progress.done}/${progress.total} tasks</span>
            <span>${formatDate(course.exam, { month: "short", day: "numeric" })}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderTimeline() {
  const timeline = document.getElementById("timeline");
  const today = todayKey();
  timeline.innerHTML = days
    .map((day) => {
      const visibleTasks = hideCompleted ? day.tasks.filter((item) => !isDone(item.id)) : day.tasks;
      const cardClasses = ["day-card"];
      if (day.date === today) cardClasses.push("today");
      if (day.exam) cardClasses.push("exam");
      if (day.revision) cardClasses.push("revision");
      return `
        <article class="${cardClasses.join(" ")}" id="day-${day.date}">
          <header class="day-header">
            <div>
              <h3 class="date-title">${formatDate(day.date, { weekday: "long", month: "short", day: "numeric" })}</h3>
              <div class="date-line">${day.title}</div>
            </div>
            <div class="day-tags">
              ${day.exam ? `<span class="day-pill exam-pill">${day.exam} exam</span>` : ""}
              ${day.revision ? `<span class="day-pill revision-pill">${day.revision} revision</span>` : ""}
              ${day.date === today ? `<span class="day-pill">Today</span>` : ""}
            </div>
          </header>
          <div class="task-list">
            ${
              visibleTasks.length
                ? visibleTasks.map(renderTask).join("")
                : `<div class="empty">Everything visible for this day is complete.</div>`
            }
          </div>
          ${day.tasks.length ? `<button class="complete-day" type="button" data-day="${day.date}">Complete visible day</button>` : ""}
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".task-check").forEach((input) => {
    input.addEventListener("change", (event) => setDone(event.target.dataset.taskId, event.target.checked));
  });

  document.querySelectorAll(".complete-day").forEach((button) => {
    button.addEventListener("click", () => {
      const day = days.find((item) => item.date === button.dataset.day);
      day.tasks
        .filter((item) => !hideCompleted || !isDone(item.id))
        .forEach((item) => {
          state.completed[item.id] = true;
        });
      saveState();
      showToast("Day marked complete.");
      render();
    });
  });
}

function renderTask(item) {
  const checked = isDone(item.id);
  return `
    <label class="task-row ${checked ? "completed" : ""}">
      <span class="task-left">
        <input class="task-check" type="checkbox" data-task-id="${item.id}" ${checked ? "checked" : ""} />
        <span>
          <span class="task-title">${item.title}</span>
          <span class="task-meta">${item.course} - ${item.note}</span>
        </span>
      </span>
      <span class="type-pill">${item.type}</span>
    </label>
  `;
}

function renderCourseDetails() {
  const grid = document.getElementById("courseDetailGrid");
  grid.innerHTML = courses
    .map((course) => {
      const progress = getCourseProgress(course.code);
      const courseDays = days.filter((day) => day.tasks.some((item) => item.course === course.code));
      const nextTask = courseDays
        .flatMap((day) => day.tasks.map((item) => ({ ...item, date: day.date })))
        .find((item) => item.type !== "Exam" && !isDone(item.id));
      return `
        <article class="course-detail-card">
          <div class="course-detail-header">
            <div>
              <h3>${course.code}</h3>
              <div class="course-meta">${course.name}</div>
            </div>
            <span class="priority-pill ${course.priorityClass}">${course.priority}</span>
          </div>
          <div class="progress-track" aria-label="${course.code} detail progress">
            <span style="width: ${progress.percent}%"></span>
          </div>
          <ul>
            <li><span>Progress</span><strong>${progress.done}/${progress.total}</strong></li>
            <li><span>Lectures/docs</span><strong>${course.lectures}</strong></li>
            <li><span>Exam</span><strong>${formatDate(course.exam, { weekday: "short", month: "short", day: "numeric" })}</strong></li>
            <li><span>Time and room</span><strong>${course.examTime}, ${course.room}</strong></li>
            <li><span>Next task</span><strong>${nextTask ? `${formatDate(nextTask.date, { month: "short", day: "numeric" })}` : "Done"}</strong></li>
          </ul>
        </article>
      `;
    })
    .join("");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

document.getElementById("hideCompletedBtn").addEventListener("click", (event) => {
  hideCompleted = !hideCompleted;
  event.currentTarget.setAttribute("aria-pressed", String(hideCompleted));
  renderTimeline();
});

document.getElementById("exportBtn").addEventListener("click", async () => {
  const payload = JSON.stringify(state, null, 2);
  try {
    await navigator.clipboard.writeText(payload);
    showToast("Progress copied to clipboard.");
  } catch {
    const blob = new Blob([payload], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "study-progress.json";
    link.click();
    URL.revokeObjectURL(link.href);
    showToast("Progress downloaded as JSON.");
  }
});

document.getElementById("resetBtn").addEventListener("click", () => {
  const confirmed = window.confirm("Reset all completed tasks?");
  if (!confirmed) return;
  state = { completed: {} };
  saveState();
  showToast("Progress reset.");
  render();
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".view").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(`${tab.dataset.view}View`).classList.add("active");
  });
});

if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

render();
