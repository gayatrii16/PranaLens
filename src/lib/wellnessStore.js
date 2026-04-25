const USERS_KEY = "pranalens-users";
const AUTH_KEY = "pranalens-auth";
const ASSESSMENTS_KEY = "pranalens-assessments";
const APPOINTMENTS_KEY = "pranalens-appointments";
const BLOG_KEY = "pranalens-blog-posts";

const assessmentQuestions = [
  { id: "sleep-quality", category: "Recovery", dosha: "vata", prompt: "How restorative has your sleep felt over the last 7 days?" },
  { id: "stress-load", category: "Stress", dosha: "pitta", prompt: "How manageable has your daily stress felt during work or study?" },
  { id: "digestion", category: "Nutrition", dosha: "pitta", prompt: "How comfortable and regular has your digestion felt recently?" },
  { id: "focus", category: "Mental Clarity", dosha: "vata", prompt: "How easy has it been to sustain focus without mental fatigue?" },
  { id: "movement", category: "Physical Vitality", dosha: "kapha", prompt: "How energized does your body feel during movement and daily tasks?" },
  { id: "emotional-balance", category: "Emotional Wellness", dosha: "vata", prompt: "How emotionally steady and calm have you felt through the day?" },
  { id: "screen-overload", category: "Lifestyle", dosha: "kapha", prompt: "How well are you managing screen fatigue and sedentary time?" },
  { id: "resilience", category: "Resilience", dosha: "kapha", prompt: "How quickly do you bounce back after a demanding day?" }
];

const blogSeed = [
  {
    id: "blog-1",
    title: "Why Preventive Wellness Needs More Than Step Counts",
    excerpt: "A modern wellness strategy combines behavior, energy patterns, recovery, and context instead of relying on one metric.",
    category: "Preventive Care",
    author: "Dr. Naina Kapoor",
    readTime: "5 min read",
    publishedAt: "2026-04-10"
  },
  {
    id: "blog-2",
    title: "How Ayurveda-Informed Routines Support Modern Professionals",
    excerpt: "Small shifts in meal timing, recovery rituals, and sensory load can meaningfully improve resilience for busy teams.",
    category: "Ayurveda",
    author: "Ishita Rao",
    readTime: "6 min read",
    publishedAt: "2026-04-14"
  },
  {
    id: "blog-3",
    title: "Building a Campus Wellness Index That Students Actually Use",
    excerpt: "Institutions need measurable, human-centered ways to understand burnout risk, resilience, and support opportunities.",
    category: "Institutional Wellness",
    author: "Rhea Menon",
    readTime: "7 min read",
    publishedAt: "2026-04-18"
  }
];

const seedUser = {
  id: "seed-user-1",
  fullName: "Aarav Mehta",
  email: "aarav@pranalens.com",
  password: "Demo@123",
  role: "Working Professional",
  organization: "PranaLens Demo",
  createdAt: "2026-04-20T09:30:00.000Z"
};

const seedAssessment = {
  id: "assessment-seed-1",
  userId: "seed-user-1",
  createdAt: "2026-04-21T08:00:00.000Z",
  answers: [
    { id: "sleep-quality", category: "Recovery", dosha: "vata", value: 4 },
    { id: "stress-load", category: "Stress", dosha: "pitta", value: 3 },
    { id: "digestion", category: "Nutrition", dosha: "pitta", value: 4 },
    { id: "focus", category: "Mental Clarity", dosha: "vata", value: 4 },
    { id: "movement", category: "Physical Vitality", dosha: "kapha", value: 3 },
    { id: "emotional-balance", category: "Emotional Wellness", dosha: "vata", value: 4 },
    { id: "screen-overload", category: "Lifestyle", dosha: "kapha", value: 3 },
    { id: "resilience", category: "Resilience", dosha: "kapha", value: 4 }
  ]
};

const seedAppointment = {
  id: "appointment-seed-1",
  userId: "seed-user-1",
  fullName: "Aarav Mehta",
  email: "aarav@pranalens.com",
  assessmentType: "In-Person Energy Mapping",
  preferredDate: "2026-04-28",
  preferredTime: "11:00",
  notes: "Needs stress and sleep optimization guidance before product launch week.",
  status: "Pending Confirmation",
  createdAt: "2026-04-22T10:30:00.000Z"
};

const scoreBands = [
  {
    min: 85,
    label: "Thriving Balance",
    color: "#22c55e",
    lifestyle: [
      "Maintain your restorative sleep rhythm with consistent digital wind-down routines.",
      "Protect high-energy windows by batching deep work and recovery breaks.",
      "Continue moderate movement practices such as yoga flow, walking, or mobility circuits."
    ],
    nutrition: [
      "Favor anti-inflammatory meals built around greens, seasonal fruits, lentils, and healthy fats.",
      "Hydrate steadily throughout the day and include mineral-rich foods after intense workdays."
    ],
    mindfulness: [
      "Practice 10 minutes of pranayama or box breathing before demanding tasks.",
      "Use a short gratitude reflection at night to reinforce emotional stability."
    ]
  },
  {
    min: 65,
    label: "Adaptive Recovery",
    color: "#38bdf8",
    lifestyle: [
      "Introduce 5-minute recovery pauses every 90 minutes to reduce cognitive fatigue.",
      "Anchor your day with regular mealtimes and a fixed sleep window.",
      "Use acupressure-inspired self-massage on palms, neck, and soles to ease stress accumulation."
    ],
    nutrition: [
      "Reduce excess caffeine after 2 PM and increase warm, grounding meals.",
      "Support stable energy with balanced plates: protein, fiber, vegetables, and whole grains."
    ],
    mindfulness: [
      "Try guided body scans or alternate nostril breathing twice a day.",
      "Replace one doom-scrolling habit with a 15-minute restorative evening routine."
    ]
  },
  {
    min: 45,
    label: "Needs Rebalancing",
    color: "#f59e0b",
    lifestyle: [
      "Prioritize a lighter weekly schedule with deliberate recovery blocks and lower evening stimulation.",
      "Shift from intense exercise to gentle mobility, stretching, and short outdoor walks.",
      "Book a guided in-person wellness session to interpret your energy patterns more deeply."
    ],
    nutrition: [
      "Choose warm, easy-to-digest meals and avoid skipping breakfast.",
      "Track hydration and keep simple nourishing snacks available during busy hours."
    ],
    mindfulness: [
      "Practice 5 minutes of diaphragmatic breathing on waking and before sleep.",
      "Use journaling prompts to spot stress triggers and energy drains."
    ]
  },
  {
    min: 0,
    label: "Restore and Reset",
    color: "#ef4444",
    lifestyle: [
      "Reduce overload immediately and create a 7-day recovery plan focused on sleep, hydration, and gentle movement.",
      "Seek structured support through personalized assessment follow-up and lifestyle coaching.",
      "Avoid stacking social, work, and physical demands without decompression time."
    ],
    nutrition: [
      "Aim for consistent meals with soothing foods such as soups, khichdi-style bowls, fruit, and herbal beverages.",
      "Limit sugar spikes and highly processed convenience foods during the recovery phase."
    ],
    mindfulness: [
      "Begin with short guided breathing or mindfulness sessions under 5 minutes to rebuild consistency.",
      "Use sensory grounding techniques when stress symptoms intensify."
    ]
  }
];

const doshaHints = {
  vata: "Focus on warmth, routine, and grounding recovery rituals.",
  pitta: "Prioritize cooling practices, boundaries, and anti-inflammatory foods.",
  kapha: "Build momentum with energizing movement and lighter, stimulating meals."
};

function safeRead(key, fallback) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : fallback;
}

function safeWrite(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function completeAssessmentOutcome(assessment) {
  const total = assessment.answers.reduce((sum, answer) => sum + Number(answer.value || 0), 0);
  const score = Math.round((total / (assessment.answers.length * 5)) * 100);
  const doshaMap = { vata: 0, pitta: 0, kapha: 0 };

  assessment.answers.forEach((answer) => {
    doshaMap[answer.dosha] += Number(answer.value || 0);
  });

  const dominantDosha = Object.entries(doshaMap).sort((a, b) => b[1] - a[1])[0][0];
  const band = scoreBands.find((entry) => score >= entry.min);

  return {
    ...assessment,
    score,
    status: band.label,
    color: band.color,
    dominantDosha,
    energyInsight: doshaHints[dominantDosha],
    recommendations: {
      lifestyle: band.lifestyle,
      nutrition: band.nutrition,
      mindfulness: band.mindfulness
    }
  };
}

export function initializeWellnessStore() {
  if (!localStorage.getItem(USERS_KEY)) {
    safeWrite(USERS_KEY, [seedUser]);
  }
  if (!localStorage.getItem(BLOG_KEY)) {
    safeWrite(BLOG_KEY, blogSeed);
  }
  if (!localStorage.getItem(ASSESSMENTS_KEY)) {
    safeWrite(ASSESSMENTS_KEY, [completeAssessmentOutcome(seedAssessment)]);
  }
  if (!localStorage.getItem(APPOINTMENTS_KEY)) {
    safeWrite(APPOINTMENTS_KEY, [seedAppointment]);
  }
  if (!localStorage.getItem(AUTH_KEY)) {
    safeWrite(AUTH_KEY, { token: "", user: null });
  }
}

export function getStoredSession() {
  initializeWellnessStore();
  return safeRead(AUTH_KEY, { token: "", user: null });
}

export function clearStoredSession() {
  safeWrite(AUTH_KEY, { token: "", user: null });
}

export function signupUser(payload) {
  initializeWellnessStore();
  const users = safeRead(USERS_KEY, []);
  const exists = users.some((user) => user.email.toLowerCase() === payload.email.toLowerCase());

  if (exists) {
    throw new Error("Email already registered");
  }

  const user = {
    id: createId("user"),
    fullName: payload.fullName,
    email: payload.email,
    password: payload.password,
    role: payload.role,
    organization: payload.organization,
    createdAt: new Date().toISOString()
  };

  users.push(user);
  safeWrite(USERS_KEY, users);
  return createSession(user);
}

export function loginUser({ email, password }) {
  initializeWellnessStore();
  const users = safeRead(USERS_KEY, []);
  const user = users.find((entry) => entry.email.toLowerCase() === email.toLowerCase());

  if (!user || user.password !== password) {
    throw new Error("Invalid email or password");
  }

  return createSession(user);
}

function createSession(user) {
  const session = {
    token: createId("token"),
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      organization: user.organization
    }
  };

  safeWrite(AUTH_KEY, session);
  return session;
}

export function getAssessmentQuestions() {
  initializeWellnessStore();
  return assessmentQuestions;
}

export function getBlogPosts() {
  initializeWellnessStore();
  return safeRead(BLOG_KEY, blogSeed);
}

export function submitAssessment(userId, answers) {
  const assessments = safeRead(ASSESSMENTS_KEY, []);
  const assessment = completeAssessmentOutcome({
    id: createId("assessment"),
    userId,
    createdAt: new Date().toISOString(),
    answers
  });

  assessments.push(assessment);
  safeWrite(ASSESSMENTS_KEY, assessments);
  return assessment;
}

export function getAssessmentHistory(userId) {
  initializeWellnessStore();
  return safeRead(ASSESSMENTS_KEY, [])
    .filter((item) => item.userId === userId)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export function createAppointment(user, payload) {
  const appointments = safeRead(APPOINTMENTS_KEY, []);
  const appointment = {
    id: createId("appointment"),
    userId: user.id,
    fullName: user.fullName,
    email: user.email,
    assessmentType: payload.assessmentType,
    preferredDate: payload.preferredDate,
    preferredTime: payload.preferredTime,
    notes: payload.notes,
    status: "Pending Confirmation",
    createdAt: new Date().toISOString()
  };

  appointments.push(appointment);
  safeWrite(APPOINTMENTS_KEY, appointments);
  return appointment;
}

export function getAppointments(userId) {
  initializeWellnessStore();
  return safeRead(APPOINTMENTS_KEY, [])
    .filter((item) => item.userId === userId)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export function getDashboardData(userId) {
  const history = getAssessmentHistory(userId).slice().reverse();
  const latest = history[history.length - 1] || null;

  return {
    latestAssessment: latest,
    chartSeries: history.map((item) => ({
      date: item.createdAt.slice(0, 10),
      score: item.score
    })),
    categoryBreakdown: latest
      ? latest.answers.map((answer) => ({
          category: answer.category,
          value: Math.round((Number(answer.value) / 5) * 100)
        }))
      : [],
    appointments: getAppointments(userId).slice(0, 3),
    quickStats: {
      completedAssessments: history.length,
      nextStep: latest ? "Book your follow-up interpretation session" : "Take your first assessment",
      wellnessIndex: latest ? latest.score : 0
    }
  };
}

export function getProfileSnapshot(userId) {
  const users = safeRead(USERS_KEY, []);
  const user = users.find((entry) => entry.id === userId);
  const assessments = getAssessmentHistory(userId);
  const appointments = getAppointments(userId);

  return {
    user: user
      ? {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
          role: user.role,
          organization: user.organization
        }
      : null,
    stats: {
      assessments: assessments.length,
      appointments: appointments.length
    }
  };
}
