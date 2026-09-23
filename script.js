/**
 * ==========================================================================
 * VESTOR INNOVATORS - LIQUID SILVER VAULT GALLERY
 * Pure Vanilla JavaScript Application (Zero Frameworks)
 * Designed for High Performance, Accessibility & Classroom Clarity
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. Vault Security Configuration
// --------------------------------------------------------------------------
const VAULT_SECURITY_KEY = 'innovators';

// --------------------------------------------------------------------------
// 2. Initial Dataset: Curated Images & Team Information
// (Note: File sizes have been completely removed as requested)
// --------------------------------------------------------------------------
const INITIAL_GALLERY_DATA = [
  // --- LEAGUE MEMBERS & LEADERSHIP ---
  {
    id: 'member-chhotu',
    title: 'Chhotu Kumar',
    category: 'members',
    isCaptain: true,
    role: 'League Captain',
    roll: '69',
    course: 'MBA',
    session: '2025–2027',
    src: './images/members/chhotu_kumar-69-mba-25-27.png',
    aspectRatio: 'aspect-portrait',
    isHD: true,
    isLocked: false,
    description: 'League Captain of Vestor Innovators. Guiding visionary leadership and strategic operations.'
  },
  {
    id: 'member-abhishek',
    title: 'Abhishek Kumar',
    category: 'members',
    isCaptain: false,
    role: 'Vice-Captain',
    roll: '06',
    course: 'BCA',
    session: '2026–2029',
    src: './images/members/abhishek-kumar-06-bca-26-29.jpeg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Vice-Captain & Core Technical Contributor at Vestor Innovators.'
  },
  {
    id: 'member-dhruv',
    title: 'Dhruv Raj',
    category: 'members',
    isCaptain: false,
    role: 'Team Member',
    roll: '95',
    course: 'BCA',
    session: '2026–2029',
    src: './images/members/dhruv-raj-95-bca-26-29.jpeg',
    aspectRatio: 'aspect-portrait',
    isHD: true,
    isLocked: false,
    description: 'Full-stack software developer and systems innovator at Vestor Innovators.'
  },
  {
    id: 'member-radha',
    title: 'Radha Kumari',
    category: 'members',
    isCaptain: false,
    role: 'Team Member',
    roll: '34',
    course: 'BBA',
    session: '2026–2029',
    src: './images/members/radha-kumari-34-bba-26-29.jpeg',
    aspectRatio: 'aspect-portrait',
    isHD: true,
    isLocked: false,
    description: 'Business Administration strategist & operations lead.'
  },
  {
    id: 'member-bijay',
    title: 'Bijay Kumar',
    category: 'members',
    isCaptain: false,
    role: 'Team Member',
    roll: '75',
    course: 'BBA',
    session: '2024–2027',
    src: './images/members/bijay-kumar-bba-75-24-27.jpeg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Senior management and competitive events coordinator.'
  },
  {
    id: 'member-divya',
    title: 'Divya Kumari',
    category: 'members',
    isCaptain: false,
    role: 'Team Member',
    roll: '58',
    course: 'BCA',
    session: '2026–2029',
    src: './images/members/divya-kumari_58-bca-26-29.jpeg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Computer Applications development and UI logic specialist.'
  },
  {
    id: 'member-gautam',
    title: 'Gautam Kumar',
    category: 'members',
    isCaptain: false,
    role: 'Team Member',
    roll: '04',
    course: 'BCA',
    session: '2024–2027',
    src: './images/members/gautam-kumar-04-bca-24-27.jpeg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Full-stack problem solving and algorithms researcher.'
  },
  {
    id: 'member-indrajeet',
    title: 'Indrajeet Soni',
    category: 'members',
    isCaptain: false,
    role: 'Team Member',
    roll: '54',
    course: 'BCA',
    session: '2026–2029',
    src: './images/members/indrajeet_soni-54-bca-26-29.jpeg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Technical analyst and systems designer.'
  },
  {
    id: 'member-aquib',
    title: 'Md Aquib Hussain',
    category: 'members',
    isCaptain: false,
    role: 'Team Member',
    roll: '13',
    course: 'BCA',
    session: '2024–2027',
    src: './images/members/md-aquib-hussain-13-bca-24-27.jpeg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Backend architecture and competition coding specialist.'
  },
  {
    id: 'member-priyanshu',
    title: 'Priyanshu Kumar',
    category: 'members',
    isCaptain: false,
    role: 'Team Member',
    roll: '90',
    course: 'BBA',
    session: '2024–2027',
    src: './images/members/priyanshu-kumar-90-bba-24-27.jpeg',
    aspectRatio: 'aspect-portrait',
    isHD: true,
    isLocked: false,
    description: 'Public relations and corporate communication organizer.'
  },
  {
    id: 'member-raj-nandini',
    title: 'Raj Nandini Kumari',
    category: 'members',
    isCaptain: false,
    role: 'Team Member',
    roll: '61',
    course: 'BBA',
    session: '2026–2029',
    src: './images/members/raj-nandini-kumari-61-bba-26-29.png',
    aspectRatio: 'aspect-portrait',
    isHD: true,
    isLocked: false,
    description: 'Creative design, branding, and event management.'
  },
  {
    id: 'member-saba',
    title: 'Saba Moin',
    category: 'members',
    isCaptain: false,
    role: 'Team Member',
    roll: '05',
    course: 'MBA',
    session: '2026–2028',
    src: './images/members/saba-moin-05-mba-26-28.png',
    aspectRatio: 'aspect-portrait',
    isHD: true,
    isLocked: false,
    description: 'Business strategy analysis and league event coordination.'
  },
  {
    id: 'member-saniya',
    title: 'Saniya Pravin',
    category: 'members',
    isCaptain: false,
    role: 'Team Member',
    roll: '02',
    course: 'BCA',
    session: '2025–2028',
    src: './images/members/saniya_pravin-02-bca-25-28.png',
    aspectRatio: 'aspect-portrait',
    isHD: true,
    isLocked: false,
    description: 'Software testing, quality assurance, and presentation designer.'
  },
  {
    id: 'member-shrest',
    title: 'Shrest Kumar Gupta',
    category: 'members',
    isCaptain: false,
    role: 'Team Member',
    roll: '03',
    course: 'BSc I.T.',
    session: '2026–2029',
    src: './images/members/shrest_kumar_gupta-03-bsc.i.t.-26-29.jpeg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Information Technology infrastructure and hardware enthusiast.'
  },
  {
    id: 'member-shreya',
    title: 'Shreya Kumari',
    category: 'members',
    isCaptain: false,
    role: 'Team Member',
    roll: '152',
    course: 'BBA',
    session: '2026–2029',
    src: './images/members/shreya-kumari-152-bba-26-29.jpeg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Marketing campaign management and content creation.'
  },
  {
    id: 'member-soumya',
    title: 'Soumya Shah',
    category: 'members',
    isCaptain: false,
    role: 'Team Member',
    roll: '80',
    course: 'BBA',
    session: '2024–2027',
    src: './images/members/soumya-shah-80-bba.jpeg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Event operations and inter-departmental liaison.'
  },
  {
    id: 'member-tannu',
    title: 'Tannu Kumari',
    category: 'members',
    isCaptain: false,
    role: 'Team Member',
    roll: '30',
    course: 'BSc I.T.',
    session: '2026–2029',
    src: './images/members/tannu_kumari-30-bsc.i.t.-26-29.jpeg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Database management and IT security student.'
  },
  {
    id: 'member-nikita',
    title: 'Nikita Kumari',
    category: 'members',
    isCaptain: false,
    role: 'Team Member',
    roll: '72',
    course: 'BCA',
    session: '2025–2028',
    src: './images/members/nikita-kumari-72-bca-25-28.jpeg',
    aspectRatio: 'aspect-portrait',
    isHD: true,
    isLocked: false,
    description: 'Applications engineering, quality testing, and team coordination.'
  },

  // --- TROPHIES & ACHIEVEMENTS ---
  {
    id: 'trophy-01',
    title: 'Innovators Trophy of Honor #01',
    category: 'trophies',
    role: 'Achievement Award',
    src: './images/member-1-trophy.png',
    aspectRatio: 'aspect-portrait',
    isHD: true,
    isLocked: false,
    description: 'Honoring exceptional technical merit and team dedication.'
  },
  {
    id: 'trophy-02',
    title: 'Excellence Trophy #02',
    category: 'trophies',
    role: 'Achievement Award',
    src: './images/member-2-trophy.jpg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Awarded for victory in competitive presentations.'
  },
  {
    id: 'trophy-03',
    title: 'Gold Star League Trophy #03',
    category: 'trophies',
    role: 'Top Honor Award',
    src: './images/member-3-trophy.jpg',
    aspectRatio: 'aspect-portrait',
    isHD: true,
    isLocked: false,
    description: 'Prestigious award recognizing outstanding leadership and teamwork.'
  },
  {
    id: 'trophy-04',
    title: 'Innovation Cup #04',
    category: 'trophies',
    role: 'Achievement Award',
    src: './images/member-4-trophy.jpg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Celebrating high-impact problem solving in robotics and IT.'
  },
  {
    id: 'trophy-05',
    title: 'Trophy of Distinction #05',
    category: 'trophies',
    role: 'Achievement Award',
    src: './images/member-5-trophy.jpg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Recognizing academic and competitive excellence.'
  },
  {
    id: 'trophy-06',
    title: 'Merit Trophy #06',
    category: 'trophies',
    role: 'Achievement Award',
    src: './images/member-6-trophy.jpg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Honoring consistent performance across league initiatives.'
  },
  {
    id: 'trophy-07',
    title: 'Leadership Trophy #07',
    category: 'trophies',
    role: 'Achievement Award',
    src: './images/member-7-trophy.jpg',
    aspectRatio: 'aspect-portrait',
    isHD: true,
    isLocked: false,
    description: 'Awarded for extraordinary teamwork and leadership presence.'
  },
  {
    id: 'trophy-08',
    title: 'Victory Cup #08',
    category: 'trophies',
    role: 'Achievement Award',
    src: './images/member-8-trophy.jpg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Symbol of triumph in university inter-league competition.'
  },
  {
    id: 'trophy-09',
    title: 'Rising Star Trophy #09',
    category: 'trophies',
    role: 'Achievement Award',
    src: './images/member-9-trophy.jpg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: true,
    description: 'Recognizing remarkable dedication from new league recruits.'
  },
  {
    id: 'trophy-10',
    title: 'Grand Champions Cup #10',
    category: 'trophies',
    role: 'Achievement Award',
    src: './images/member-10-trophy.jpg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: true,
    description: 'Decisive tournament victory trophy held by Vestor Innovators.'
  },
  {
    id: 'award-english-quiz',
    title: 'English Quiz Championship',
    category: 'trophies',
    role: '1st Place Champions',
    src: './images/winner_english_quiz_competition.jpg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Official felicitation ceremony winning the English Quiz Competition.'
  },
  {
    id: 'award-screen-winners',
    title: 'Innovators on Main Stage Screen',
    category: 'trophies',
    role: 'Victory Broadcast',
    src: './images/winners_on_screen.jpg',
    aspectRatio: 'aspect-wide',
    isHD: false,
    isLocked: false,
    description: 'Team scores and winners highlighted across campus display.'
  },
  {
    id: 'award-group-winning',
    title: 'Championship Victory Moment',
    category: 'trophies',
    role: 'Grand Celebration',
    src: './images/group-winning.jpg',
    aspectRatio: 'aspect-wide',
    isHD: false,
    isLocked: false,
    description: 'Team celebration holding the winning certificate and trophies.'
  },

  // --- EVENTS & CAMPUS HIGHLIGHTS ---
  {
    id: 'event-showcase-hd1',
    title: 'Grand League Showcase',
    category: 'events',
    role: 'Campus Auditorium',
    src: './images/IMG-20260823-WA0027.jpg',
    aspectRatio: 'aspect-wide',
    isHD: true,
    isLocked: false,
    description: 'Live campus auditorium celebration with alumni and guests.'
  },
  {
    id: 'event-keynote-hd2',
    title: 'Innovation Keynote Presentation',
    category: 'events',
    role: 'Keynote Showcase',
    src: './images/IMG-20260905-WA0107.jpg',
    aspectRatio: 'aspect-wide',
    isHD: true,
    isLocked: false,
    description: 'Keynote address delivered by Vestor Innovators leadership.'
  },
  {
    id: 'event-milestone-hd3',
    title: 'Auditorium League Milestone',
    category: 'events',
    role: 'Auditorium Gathering',
    src: './images/IMG-20260905-WA0108.jpg',
    aspectRatio: 'aspect-wide',
    isHD: true,
    isLocked: false,
    description: 'Stage address celebrating quarterly milestones and hackathon wins.'
  },
  {
    id: 'event-teacher',
    title: 'Mentorship Session with Faculty',
    category: 'events',
    role: 'Academic Guidance',
    src: './images/group with teacher..jpg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Vestor Innovators team with respected faculty mentors and advisors.'
  },
  {
    id: 'event-team-assemble-1',
    title: 'Vestor Innovators Assemble I',
    category: 'events',
    role: 'Team Cohort',
    src: './images/group-image1.jpg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Complete league assembly outside campus innovation centre.'
  },
  {
    id: 'event-team-assemble-2',
    title: 'Vestor Innovators Assemble II',
    category: 'events',
    role: 'Team Cohort',
    src: './images/group-image2.jpg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Team bonding and strategy session in campus lawns.'
  },
  {
    id: 'event-league-harmony',
    title: 'League Harmony & Unity',
    category: 'events',
    role: 'Collaboration',
    src: './images/league_with-harmony.jpg',
    aspectRatio: 'aspect-wide',
    isHD: false,
    isLocked: false,
    description: 'Cross-league alignment and unity during technical fest.'
  },
  {
    id: 'event-lab-session',
    title: 'Project Brainstorming Lab',
    category: 'events',
    role: 'Workshop',
    src: './images/IMG-20260808-WA0246.jpg',
    aspectRatio: 'aspect-wide',
    isHD: false,
    isLocked: false,
    description: 'Hands-on hackathon ideation and architectural whiteboard session.'
  },
  {
    id: 'event-expo',
    title: 'League Exhibition Session',
    category: 'events',
    role: 'Expo Showcase',
    src: './images/IMG-20260905-WA0100.jpg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Showcasing project prototypes to students and visitors.'
  },
  {
    id: 'event-strategy',
    title: 'Strategy & Tech Review',
    category: 'events',
    role: 'Sprint Review',
    src: './images/IMG-20260905-WA0102.jpg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Sprint planning and evaluation of live prototype progress.'
  },
  {
    id: 'event-candid',
    title: 'Candid Innovation Moment',
    category: 'events',
    role: 'Campus Moment',
    src: './images/random.jpg',
    aspectRatio: 'aspect-portrait',
    isHD: false,
    isLocked: false,
    description: 'Informal innovation team moment between competition rounds.'
  },
  {
    id: 'video-spotlight-01',
    title: 'Campus Video Spotlight',
    category: 'events',
    isVideo: true,
    duration: '0:31',
    role: 'Video Spotlight',
    src: './videos/video-1.mp4',
    aspectRatio: 'aspect-wide',
    isHD: true,
    isLocked: false,
    description: 'Dynamic campus video showcase highlighting live teamwork and innovations.'
  }
];

// --------------------------------------------------------------------------
// 3. Application State Management
// --------------------------------------------------------------------------
const AppState = {
  // Gallery items (merges default data with any uploaded items in localStorage)
  items: [],
  // Active category filter: 'all' | 'members' | 'trophies' | 'events' | 'hd' | 'favorites' | 'locked'
  activeFilter: 'all',
  // Active search query
  searchQuery: '',
  // Active sorting rule: 'default' | 'name-asc' | 'roll-asc' | 'hd-first'
  sortBy: 'default',
  // Active grid view density: 'grid' | 'bento' | 'compact'
  viewMode: 'grid',
  // Favorite items IDs set
  favorites: new Set(),
  // Locked items IDs set (persisted in localStorage)
  lockedIds: new Set(),
  // Is Private Vault Unlocked in this session
  isVaultAuthenticated: false,
  // Pending action requiring authentication
  pendingAuthAction: null,
  // Lightbox carousel state
  lightbox: {
    isOpen: false,
    currentIndex: 0,
    filteredItems: [],
    zoomLevel: 1,
    rotation: 0
  },
  // Theme: 'dark' | 'light'
  theme: 'dark'
};

// State for active image upload
const currentUploadState = {
  dataUrl: '',
  isHD: false,
  dimensions: ''
};

// --------------------------------------------------------------------------
// 4. DOM Elements Cache
// --------------------------------------------------------------------------
const DOM = {
  galleryGrid: document.getElementById('galleryGrid'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  lockedVaultFilterBtn: document.getElementById('lockedVaultFilterBtn'),
  lockedVaultTabIcon: document.getElementById('lockedVaultTabIcon'),
  lockedVaultCount: document.getElementById('lockedVaultCount'),
  searchInput: document.getElementById('searchInput'),
  sortSelect: document.getElementById('sortSelect'),
  viewButtons: document.querySelectorAll('.view-btn'),
  darkmodeToggle: document.getElementById('darkmode-toggle'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  themeIcon: document.getElementById('themeIcon'),
  
  // Metric Counters
  totalAssetsCount: document.getElementById('totalAssetsCount'),
  membersCount: document.getElementById('membersCount'),
  tournamentsCount: document.getElementById('tournamentsCount'),
  trophiesCount: document.getElementById('trophiesCount'),
  hdCount: document.getElementById('hdCount'),
  
  // Lightbox Elements
  lightboxModal: document.getElementById('lightboxModal'),
  lightboxImage: document.getElementById('lightboxImage'),
  lightboxTitle: document.getElementById('lightboxTitle'),
  lightboxSubtitle: document.getElementById('lightboxSubtitle'),
  lightboxBadge: document.getElementById('lightboxBadge'),
  lightboxCounter: document.getElementById('lightboxCounter'),
  lightboxFilmstrip: document.getElementById('lightboxFilmstrip'),
  closeLightboxBtn: document.getElementById('closeLightboxBtn'),
  prevArrowBtn: document.getElementById('prevArrowBtn'),
  nextArrowBtn: document.getElementById('nextArrowBtn'),
  zoomInBtn: document.getElementById('zoomInBtn'),
  zoomOutBtn: document.getElementById('zoomOutBtn'),
  resetZoomBtn: document.getElementById('resetZoomBtn'),
  rotateBtn: document.getElementById('rotateBtn'),
  fullscreenBtn: document.getElementById('fullscreenBtn'),
  downloadBtn: document.getElementById('downloadBtn'),
  lightboxLikeBtn: document.getElementById('lightboxLikeBtn'),
  lightboxLikeIcon: document.getElementById('lightboxLikeIcon'),
  lightboxLockBtn: document.getElementById('lightboxLockBtn'),
  lightboxLockIcon: document.getElementById('lightboxLockIcon'),
  lightboxLockLabel: document.getElementById('lightboxLockLabel'),

  // Upload Modal Elements
  uploadModal: document.getElementById('uploadModal'),
  openUploadBtn: document.getElementById('openUploadBtn'),
  closeUploadBtn: document.getElementById('closeUploadBtn'),
  cancelUploadBtn: document.getElementById('cancelUploadBtn'),
  uploadForm: document.getElementById('uploadForm'),
  dropZone: document.getElementById('dropZone'),
  fileInput: document.getElementById('fileInput'),
  cameraInput: document.getElementById('cameraInput'),
  cameraSnapBtn: document.getElementById('cameraSnapBtn'),
  browseFilesBtn: document.getElementById('browseFilesBtn'),
  cameraStreamBox: document.getElementById('cameraStreamBox'),
  cameraVideo: document.getElementById('cameraVideo'),
  cameraCanvas: document.getElementById('cameraCanvas'),
  captureStreamBtn: document.getElementById('captureStreamBtn'),
  switchCameraBtn: document.getElementById('switchCameraBtn'),
  closeCameraBtn: document.getElementById('closeCameraBtn'),
  uploadPreviewBox: document.getElementById('uploadPreviewBox'),
  uploadPreviewImage: document.getElementById('uploadPreviewImage'),
  removePreviewBtn: document.getElementById('removePreviewBtn'),
  uploadHDStatus: document.getElementById('uploadHDStatus'),
  uploadToLockedVault: document.getElementById('uploadToLockedVault'),
  memberFieldsToggle: document.getElementById('memberFieldsToggle'),
  memberSpecificFields: document.getElementById('memberSpecificFields'),

  // Security Authentication Modal Elements
  securityModal: document.getElementById('securityModal'),
  securityForm: document.getElementById('securityForm'),
  securityPasswordInput: document.getElementById('securityPasswordInput'),
  togglePasswordVisibility: document.getElementById('togglePasswordVisibility'),
  togglePasswordIcon: document.getElementById('togglePasswordIcon'),
  cancelSecurityBtn: document.getElementById('cancelSecurityBtn'),
  securityErrorMsg: document.getElementById('securityErrorMsg'),
  securityModalTitle: document.getElementById('securityModalTitle'),
  securityModalDesc: document.getElementById('securityModalDesc'),

  // Toast Container
  toastContainer: document.getElementById('toastContainer')
};

// --------------------------------------------------------------------------
// 4b. Memories & Highlights Reel Engine (Google Photos Inspired)
// --------------------------------------------------------------------------
const HIGHLIGHTS_DATA = [
  {
    id: 'hl-quiz',
    tag: '1 year since...',
    title: 'English Quiz Championship',
    desc: 'Vestor Innovators securing 1st place in the prestigious university English Quiz Championship.',
    type: 'image',
    src: './images/winner_english_quiz_competition.jpg'
  },
  {
    id: 'hl-video',
    tag: 'Video spotlight',
    title: 'Campus Video Spotlight',
    desc: 'Dynamic video highlights and live moments with the Vestor Innovators team.',
    type: 'video',
    src: './videos/video-1.mp4'
  },
  {
    id: 'hl-victory',
    tag: 'Championship Victory',
    title: 'Grand Victory Celebration',
    desc: 'Team victory moment celebrating outstanding collaborative achievement and trophies.',
    type: 'image',
    src: './images/group-winning.jpg'
  },
  {
    id: 'hl-friday',
    tag: 'A glimpse of Friday',
    title: 'Project Brainstorming Lab',
    desc: 'Late-night architecture whiteboard session and competitive hackathon sprint.',
    type: 'image',
    src: './images/IMG-20260808-WA0246.jpg'
  },
  {
    id: 'hl-saturday',
    tag: 'A glimpse of Saturday',
    title: 'Grand League Showcase',
    desc: 'Auditorium keynote and prototype live demonstrations to faculty and students.',
    type: 'image',
    src: './images/IMG-20260823-WA0027.jpg'
  },
  {
    id: 'hl-recent',
    tag: 'A few days ago',
    title: 'Mentorship Session with Faculty',
    desc: 'Strategic consultation and project guidance with respected faculty mentors.',
    type: 'image',
    src: './images/group with teacher..jpg'
  },
  {
    id: 'hl-stage',
    tag: 'Screen Spotlight',
    title: 'Innovators on Main Stage Screen',
    desc: 'Campus auditorium screen broadcast honoring Vestor Innovators milestones.',
    type: 'image',
    src: './images/winners_on_screen.jpg'
  }
];

// Ambient Audio Soundscape Engine (Web Audio API)
const AmbientAudio = {
  ctx: null,
  isPlaying: false,
  gainNode: null,
  activeOscillators: [],
  timer: null,

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  },

  start() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (this.isPlaying) return;

    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 2.5);
    this.gainNode.connect(this.ctx.destination);

    // Warm peaceful ambient chord sequence (C - G - Am - F)
    const chords = [
      [261.63, 329.63, 392.00, 523.25], // C Major
      [196.00, 246.94, 293.66, 392.00], // G Major
      [220.00, 261.63, 329.63, 440.00], // A Minor
      [174.61, 220.00, 261.63, 349.23]  // F Major
    ];
    let chordIdx = 0;

    const playChord = () => {
      if (!this.isPlaying) return;
      this.activeOscillators.forEach(osc => {
        try {
          osc.gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);
          setTimeout(() => osc.osc.stop(), 1300);
        } catch(e) {}
      });
      this.activeOscillators = [];

      const currentChord = chords[chordIdx % chords.length];
      chordIdx++;

      currentChord.forEach(freq => {
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(650, this.ctx.currentTime);

        oscGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
        oscGain.gain.exponentialRampToValueAtTime(0.06, this.ctx.currentTime + 1.2);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(this.gainNode);

        osc.start();
        this.activeOscillators.push({ osc, gain: oscGain });
      });

      this.timer = setTimeout(playChord, 5200);
    };

    this.isPlaying = true;
    playChord();
    this.updateUI(true);
  },

  stop() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.timer) clearTimeout(this.timer);
    if (this.gainNode && this.ctx) {
      try {
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
      } catch(e) {}
    }
    setTimeout(() => {
      this.activeOscillators.forEach(o => {
        try { o.osc.stop(); } catch(e) {}
      });
      this.activeOscillators = [];
    }, 900);
    this.updateUI(false);
  },

  toggle() {
    if (this.isPlaying) {
      this.stop();
      showToast('Ambient sound muted');
    } else {
      this.start();
      showToast('Ambient relaxing soundtrack active');
    }
  },

  updateUI(active) {
    const audioBtn = document.getElementById('ambientAudioBtn');
    const audioIcon = document.getElementById('audioIcon');
    const audioText = document.getElementById('audioStatusText');
    const storyAudioIcon = document.getElementById('storyAudioIcon');
    if (audioBtn) audioBtn.classList.toggle('active', active);
    if (audioIcon) audioIcon.textContent = active ? 'volume_up' : 'volume_off';
    if (audioText) audioText.textContent = active ? 'Sound Playing' : 'Ambient Sound';
    if (storyAudioIcon) storyAudioIcon.textContent = active ? 'volume_up' : 'volume_off';
  }
};

// Story Viewer Engine (Memories Auto-Advancing Player)
const StoryViewer = {
  isOpen: false,
  currentIndex: 0,
  timer: null,
  startTime: 0,
  duration: 4500,
  isPaused: false,
  remainingTime: 4500,

  open(index = 0) {
    this.isOpen = true;
    this.currentIndex = index;
    const modal = document.getElementById('storyViewerModal');
    if (modal) modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.buildProgressBars();
    this.showSlide(index);
  },

  close() {
    this.isOpen = false;
    if (this.timer) clearTimeout(this.timer);
    const modal = document.getElementById('storyViewerModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
    const storyVideo = document.getElementById('storyVideo');
    if (storyVideo) {
      storyVideo.pause();
      storyVideo.src = '';
    }
  },

  buildProgressBars() {
    const container = document.getElementById('storyProgressContainer');
    if (!container) return;
    container.innerHTML = HIGHLIGHTS_DATA.map((_, i) => `
      <div class="story-progress-segment" id="storySeg-${i}">
        <div class="story-progress-fill" id="storyFill-${i}"></div>
      </div>
    `).join('');
  },

  showSlide(index) {
    if (index < 0 || index >= HIGHLIGHTS_DATA.length) {
      this.close();
      return;
    }
    this.currentIndex = index;
    if (this.timer) clearTimeout(this.timer);

    const item = HIGHLIGHTS_DATA[index];
    const storyImage = document.getElementById('storyImage');
    const storyVideo = document.getElementById('storyVideo');
    const storyTag = document.getElementById('storyTag');
    const storyTitle = document.getElementById('storyTitle');
    const storyCaptionTitle = document.getElementById('storyCaptionTitle');
    const storyCaptionDesc = document.getElementById('storyCaptionDesc');

    if (storyTag) storyTag.textContent = item.tag;
    if (storyTitle) storyTitle.textContent = item.title;
    if (storyCaptionTitle) storyCaptionTitle.textContent = item.title;
    if (storyCaptionDesc) storyCaptionDesc.textContent = item.desc;

    // Update progress bars
    for (let i = 0; i < HIGHLIGHTS_DATA.length; i++) {
      const seg = document.getElementById(`storySeg-${i}`);
      const fill = document.getElementById(`storyFill-${i}`);
      if (!seg || !fill) continue;
      if (i < index) {
        seg.classList.add('completed');
        fill.style.width = '100%';
        fill.style.transition = 'none';
      } else if (i === index) {
        seg.classList.remove('completed');
        fill.style.width = '0%';
        fill.style.transition = 'none';
        requestAnimationFrame(() => {
          fill.style.transition = `width ${item.type === 'video' ? '8s' : '4.5s'} linear`;
          fill.style.width = '100%';
        });
      } else {
        seg.classList.remove('completed');
        fill.style.width = '0%';
        fill.style.transition = 'none';
      }
    }

    if (item.type === 'video') {
      if (storyImage) storyImage.style.display = 'none';
      if (storyVideo) {
        storyVideo.style.display = 'block';
        storyVideo.src = item.src;
        storyVideo.currentTime = 0;
        storyVideo.play().catch(() => {});
      }
      this.duration = 8000;
    } else {
      if (storyVideo) {
        storyVideo.pause();
        storyVideo.style.display = 'none';
      }
      if (storyImage) {
        storyImage.style.display = 'block';
        storyImage.src = item.src;
      }
      this.duration = 4500;
    }

    this.startTime = Date.now();
    this.remainingTime = this.duration;
    this.isPaused = false;
    const playIcon = document.getElementById('storyPlayPauseIcon');
    if (playIcon) playIcon.textContent = 'pause';
    this.timer = setTimeout(() => this.next(), this.duration);
  },

  next() {
    if (this.currentIndex + 1 < HIGHLIGHTS_DATA.length) {
      this.showSlide(this.currentIndex + 1);
    } else {
      this.close();
    }
  },

  prev() {
    if (this.currentIndex > 0) {
      this.showSlide(this.currentIndex - 1);
    } else {
      this.showSlide(0);
    }
  },

  togglePlayPause() {
    const icon = document.getElementById('storyPlayPauseIcon');
    if (this.isPaused) {
      this.isPaused = false;
      if (icon) icon.textContent = 'pause';
      this.startTime = Date.now();
      this.timer = setTimeout(() => this.next(), this.remainingTime);
      const storyVideo = document.getElementById('storyVideo');
      if (storyVideo && storyVideo.style.display !== 'none') storyVideo.play().catch(() => {});
    } else {
      this.isPaused = true;
      if (icon) icon.textContent = 'play_arrow';
      if (this.timer) clearTimeout(this.timer);
      this.remainingTime -= (Date.now() - this.startTime);
      const storyVideo = document.getElementById('storyVideo');
      if (storyVideo && storyVideo.style.display !== 'none') storyVideo.pause();
    }
  }
};

function renderHighlights() {
  const track = document.getElementById('highlightsTrack');
  if (!track) return;

  track.innerHTML = HIGHLIGHTS_DATA.map((item, index) => {
    const mediaTag = item.type === 'video'
      ? `<video src="${item.src}#t=0.2" preload="metadata" muted playsinline></video>
         <div class="highlight-play-badge"><span class="material-symbols-outlined" style="font-size: 14px;">play_arrow</span></div>`
      : `<img src="${item.src}" alt="${item.title}" loading="lazy">`;

    return `
      <div class="highlight-card" data-index="${index}" role="button" tabindex="0" title="${item.title}">
        ${mediaTag}
        <div class="highlight-card-overlay">
          <span class="highlight-card-tag">${item.tag}</span>
          <span class="highlight-card-title">${item.title}</span>
        </div>
      </div>
    `;
  }).join('');

  // Attach click listeners to highlight cards
  track.querySelectorAll('.highlight-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      StoryViewer.open(idx);
    });
  });
}

// --------------------------------------------------------------------------
// 5. Initialization
// --------------------------------------------------------------------------
function init() {
  loadSavedPreferences();
  bindEventListeners();
  renderHighlights();
  renderGallery();
  updateMetrics();
}

/**
 * Loads preferences, favorites, locked items, and uploads from localStorage
 */
function loadSavedPreferences() {
  // 1. Theme
  const savedTheme = localStorage.getItem('vi_theme') || 'dark';
  AppState.theme = savedTheme;
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (DOM.darkmodeToggle) {
    DOM.darkmodeToggle.checked = (savedTheme === 'dark');
  }
  updateThemeIcon();

  // 2. Favorites
  try {
    const savedFavorites = JSON.parse(localStorage.getItem('vi_favorites') || '[]');
    AppState.favorites = new Set(savedFavorites);
  } catch (e) {
    AppState.favorites = new Set();
  }

  // 3. Locked IDs
  try {
    const defaultLockedIds = INITIAL_GALLERY_DATA.filter(i => i.isLocked).map(i => i.id);
    const storedLocked = localStorage.getItem('vi_locked_ids');
    const migrated = localStorage.getItem('vi_vault_defaults_v2');

    if (storedLocked !== null && migrated === 'true') {
      AppState.lockedIds = new Set(JSON.parse(storedLocked));
    } else {
      // First load or default migration: ensure default locked trophies are locked
      const existing = storedLocked ? JSON.parse(storedLocked) : [];
      AppState.lockedIds = new Set([...existing, ...defaultLockedIds]);
      localStorage.setItem('vi_locked_ids', JSON.stringify([...AppState.lockedIds]));
      localStorage.setItem('vi_vault_defaults_v2', 'true');
    }
  } catch (e) {
    const defaultLockedIds = INITIAL_GALLERY_DATA.filter(i => i.isLocked).map(i => i.id);
    AppState.lockedIds = new Set(defaultLockedIds);
  }

  // 4. Uploaded items
  try {
    const savedUploads = JSON.parse(localStorage.getItem('vi_uploads') || '[]');
    AppState.items = [...INITIAL_GALLERY_DATA, ...savedUploads];
  } catch (e) {
    AppState.items = [...INITIAL_GALLERY_DATA];
  }

  // 5. View Mode (Default to smart Google Photos layout)
  const savedView = localStorage.getItem('vi_view_mode') || 'smart';
  AppState.viewMode = savedView;
  DOM.viewButtons.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-view') === savedView);
  });
  DOM.galleryGrid.className = 'gallery-grid';
  if (savedView === 'smart') DOM.galleryGrid.classList.add('view-smart');
  if (savedView === 'bento') DOM.galleryGrid.classList.add('view-bento');
  if (savedView === 'compact') DOM.galleryGrid.classList.add('view-compact');

  // Sync locked status from saved set
  AppState.items.forEach(item => {
    item.isLocked = AppState.lockedIds.has(item.id);
  });

  // Check if session was already authenticated
  if (sessionStorage.getItem('vi_vault_unlocked') === 'true') {
    AppState.isVaultAuthenticated = true;
    updateLockedVaultIcon();
  }
}

// --------------------------------------------------------------------------
// 6. Gallery Filtering, Sorting & Rendering Logic
// --------------------------------------------------------------------------

/**
 * Filters and sorts items based on current application state
 */
function getProcessedItems() {
  let result = [...AppState.items];

  // Special Category: Locked Vault
  if (AppState.activeFilter === 'locked') {
    // Only display locked images
    result = result.filter(item => item.isLocked === true);
  } else {
    // Hide locked images from all standard public views!
    result = result.filter(item => !item.isLocked);

    if (AppState.activeFilter === 'members') {
      result = result.filter(item => item.category === 'members');
    } else if (AppState.activeFilter === 'trophies') {
      result = result.filter(item => item.category === 'trophies');
    } else if (AppState.activeFilter === 'events') {
      result = result.filter(item => item.category === 'events');
    } else if (AppState.activeFilter === 'hd') {
      result = result.filter(item => item.isHD);
    } else if (AppState.activeFilter === 'favorites') {
      result = result.filter(item => AppState.favorites.has(item.id));
    }
  }

  // Search filter
  if (AppState.searchQuery.trim() !== '') {
    const query = AppState.searchQuery.toLowerCase().trim();
    result = result.filter(item => {
      const matchTitle = (item.title || '').toLowerCase().includes(query);
      const matchRole = (item.role || '').toLowerCase().includes(query);
      const matchRoll = (item.roll || '').toLowerCase().includes(query);
      const matchCourse = (item.course || '').toLowerCase().includes(query);
      const matchSession = (item.session || '').toLowerCase().includes(query);
      const matchDesc = (item.description || '').toLowerCase().includes(query);
      return matchTitle || matchRole || matchRoll || matchCourse || matchSession || matchDesc;
    });
  }

  // Sorting
  if (AppState.sortBy === 'name-asc') {
    result.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
  } else if (AppState.sortBy === 'roll-asc') {
    result.sort((a, b) => {
      const rollA = parseInt(a.roll, 10) || 9999;
      const rollB = parseInt(b.roll, 10) || 9999;
      return rollA - rollB;
    });
  } else if (AppState.sortBy === 'hd-first') {
    result.sort((a, b) => (b.isHD ? 1 : 0) - (a.isHD ? 1 : 0));
  }

  return result;
}

/**
 * Renders the gallery cards into the DOM
 */
function renderGallery() {
  const items = getProcessedItems();
  AppState.lightbox.filteredItems = items;

  if (items.length === 0) {
    const isLockedView = AppState.activeFilter === 'locked';
    DOM.galleryGrid.innerHTML = `
      <div class="empty-state glass-panel">
        <span class="material-symbols-outlined empty-state-icon" style="${isLockedView ? 'color: #fb7185;' : ''}">
          ${isLockedView ? 'lock' : 'search_off'}
        </span>
        <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">
          ${isLockedView ? 'No Locked Vault Assets' : 'No Vault Assets Found'}
        </h3>
        <p style="color: var(--chrome-muted); font-size: 0.85rem; max-width: 420px;">
          ${isLockedView 
            ? 'Use the lock icon on any photo card or in the upload form to seal assets into this private vault.' 
            : 'Try adjusting your search terms or selecting another category filter above.'}
        </p>
        <button class="btn-chrome" style="margin-top: 1.25rem;" onclick="resetFilters()">
          <span class="material-symbols-outlined" style="font-size: 1.1rem;">refresh</span>
          Reset Filters
        </button>
      </div>
    `;
    return;
  }

  DOM.galleryGrid.innerHTML = items.map((item, index) => {
    const isLiked = AppState.favorites.has(item.id);
    const isLocked = item.isLocked;
    const hdTag = item.isHD ? `<span class="badge-pill badge-hd">HD</span>` : '';
    
    // Category & member specific badge tag (ensures no image is missing a tag)
    let memberBadge = '';
    if (item.isCaptain) {
      memberBadge = `<span class="badge-pill badge-captain">★ CAPTAIN</span>`;
    } else if (item.id === 'member-abhishek' || item.role === 'Vice-Captain') {
      memberBadge = `<span class="badge-pill badge-member">VICE-CAPTAIN</span>`;
    } else if (item.isLocked) {
      memberBadge = `<span class="badge-pill badge-locked">SEALED</span>`;
    } else if (item.isVideo) {
      memberBadge = `<span class="badge-pill badge-group">VIDEO</span>`;
    } else if (item.category === 'members') {
      memberBadge = `<span class="badge-pill badge-member">MEMBER</span>`;
    } else if (item.category === 'trophies') {
      memberBadge = `<span class="badge-pill badge-trophy">AWARD</span>`;
    } else if (item.category === 'events') {
      memberBadge = `<span class="badge-pill badge-group">GROUP</span>`;
    } else {
      memberBadge = `<span class="badge-pill badge-group">GROUP</span>`;
    }

    // Detail rows (File size removed completely)
    let detailsRow = '';
    if (item.category === 'members' && item.roll) {
      detailsRow = `
        <div class="card-details-row">
          <span class="tag-roll">ROLL: ${item.roll}</span>
          <span>${item.course} • ${item.session}</span>
        </div>
      `;
    } else {
      detailsRow = `
        <div class="card-details-row">
          <span>${item.role || 'Vault Asset'}</span>
          <span class="tag-status" style="color: ${item.isLocked ? '#fb7185' : 'var(--accent-cyan)'}; font-weight: 600;">
            ${item.isLocked ? 'PRIVATE' : 'VERIFIED'}
          </span>
        </div>
      `;
    }

    // Calculate aspect ratio float for Google Photos justified flex packing
    let aspectVal = 0.7; // default portrait
    if (item.aspectRatio === 'aspect-wide') aspectVal = 1.77;
    else if (item.aspectRatio === 'aspect-square') aspectVal = 1.0;
    else if (item.aspectRatio === 'aspect-portrait') aspectVal = 0.56;

    const mediaMarkup = item.isVideo ? `
      <video class="card-video" src="${item.src}#t=0.2" preload="metadata" muted playsinline loop onmouseenter="this.play()" onmouseleave="this.pause()"></video>
      <div class="video-play-indicator">
        <span class="material-symbols-outlined" style="font-size: 14px;">play_arrow</span>
        <span>${item.duration || '0:31'}</span>
      </div>
    ` : `
      <img class="card-image" 
           src="${item.src}" 
           alt="${item.title}" 
           loading="lazy"
           onerror="this.onerror=null; this.src='./images/logo.png';">
    `;

    return `
      <div class="gallery-card glass-card ${item.aspectRatio || 'aspect-portrait'}" 
           style="--aspect: ${aspectVal};"
           data-id="${item.id}" 
           data-index="${index}"
           tabindex="0"
           role="button"
           aria-label="View ${item.title}">
        
        <div class="card-media-wrapper">
          ${mediaMarkup}
          <div class="card-overlay"></div>
          <div class="card-sheen"></div>
        </div>

        <div class="card-top-bar">
          <div class="card-badges">
            ${memberBadge}
            ${hdTag}
          </div>
          <div class="card-hover-actions">
            <!-- Lock / Move to Vault Button -->
            <button class="action-circle-btn locked-action" 
                    title="${isLocked ? 'Unlock to Public Gallery' : 'Lock in Private Vault'}" 
                    data-id="${item.id}" 
                    onclick="event.stopPropagation(); handleCardLockToggle('${item.id}');">
              <span class="material-symbols-outlined" style="font-size: 16px;">
                ${isLocked ? 'lock_open' : 'lock'}
              </span>
            </button>

            <!-- Favorite Like Button -->
            <button class="action-circle-btn like-btn ${isLiked ? 'liked' : ''}" 
                    title="${isLiked ? 'Unlike' : 'Like'}" 
                    data-id="${item.id}" 
                    onclick="event.stopPropagation(); toggleLike('${item.id}');">
              <span class="material-symbols-outlined" style="font-size: 16px; font-variation-settings: 'FILL' ${isLiked ? 1 : 0};">
                favorite
              </span>
            </button>

            <!-- Fullscreen Preview Button -->
            <button class="action-circle-btn view-btn-preview" 
                    title="Fullscreen Preview"
                    onclick="event.stopPropagation(); openLightbox(${index});">
              <span class="material-symbols-outlined" style="font-size: 17px;">
                visibility
              </span>
            </button>
          </div>
        </div>

        <div class="card-bottom-bar">
          <div class="card-metadata-box">
            <h3 class="card-title">${item.title}</h3>
            <p class="card-subtext">
              <span class="material-symbols-outlined" style="font-size: 13px; color: ${isLocked ? '#fb7185' : 'var(--accent-cyan)'};">
                ${isLocked ? 'enhanced_encryption' : 'shield'}
              </span>
              ${item.role || (item.category === 'members' ? 'Innovator Member' : 'Enclave Media')}
            </p>
            ${detailsRow}
          </div>
        </div>

      </div>
    `;
  }).join('');

  // Attach card click handlers for opening lightbox
  const cards = DOM.galleryGrid.querySelectorAll('.gallery-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      openLightbox(idx);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = parseInt(card.getAttribute('data-index'), 10);
        openLightbox(idx);
      }
    });
  });
}

/**
 * Updates hero metric numbers and filter badge counters
 */
function updateMetrics() {
  const publicItems = AppState.items.filter(i => !i.isLocked);
  const totalPublic = publicItems.length;
  const members = publicItems.filter(i => i.category === 'members').length;
  const trophies = publicItems.filter(i => i.category === 'trophies').length;
  const hd = publicItems.filter(i => i.isHD).length;
  const favs = publicItems.filter(i => AppState.favorites.has(i.id)).length;
  const lockedCount = AppState.items.filter(i => i.isLocked).length;

  if (DOM.totalAssetsCount) DOM.totalAssetsCount.textContent = totalPublic;
  if (DOM.membersCount) DOM.membersCount.textContent = members;
  if (DOM.tournamentsCount) DOM.tournamentsCount.textContent = '3';
  if (DOM.trophiesCount) DOM.trophiesCount.textContent = '3';
  if (DOM.hdCount) DOM.hdCount.textContent = hd;
  if (DOM.lockedVaultCount) DOM.lockedVaultCount.textContent = lockedCount;

  // Update counts inside filter buttons
  DOM.filterButtons.forEach(btn => {
    const filter = btn.getAttribute('data-filter');
    const badge = btn.querySelector('.filter-count');
    if (!badge) return;

    if (filter === 'all') badge.textContent = totalPublic;
    else if (filter === 'members') badge.textContent = members;
    else if (filter === 'trophies') badge.textContent = trophies;
    else if (filter === 'events') badge.textContent = publicItems.filter(i => i.category === 'events').length;
    else if (filter === 'hd') badge.textContent = hd;
    else if (filter === 'favorites') badge.textContent = favs;
    else if (filter === 'locked') badge.textContent = lockedCount;
  });
}

/**
 * Resets search query and filters back to default
 */
window.resetFilters = function() {
  AppState.activeFilter = 'all';
  AppState.searchQuery = '';
  if (DOM.searchInput) DOM.searchInput.value = '';

  DOM.filterButtons.forEach(btn => {
    if (btn.getAttribute('data-filter') === 'all') {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderGallery();
  showToast('Filters reset to default view');
};

// --------------------------------------------------------------------------
// 7. Locked Vault Security & Authentication Mechanics
// --------------------------------------------------------------------------

function updateLockedVaultIcon() {
  if (DOM.lockedVaultTabIcon) {
    DOM.lockedVaultTabIcon.textContent = AppState.isVaultAuthenticated ? 'lock_open' : 'lock';
  }
}

/**
 * Handles clicking the Locked Vault filter tab
 */
function handleLockedVaultTabClick() {
  if (AppState.isVaultAuthenticated) {
    // Already unlocked
    setActiveFilter('locked');
  } else {
    // Prompt for password
    promptSecurityAuth('Enter password to unlock private vault enclave', () => {
      setActiveFilter('locked');
      showToast('Private Vault Decrypted & Unlocked 🔓');
    });
  }
}

function setActiveFilter(filterName) {
  AppState.activeFilter = filterName;
  DOM.filterButtons.forEach(b => {
    if (b.getAttribute('data-filter') === filterName) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });
  renderGallery();
}

/**
 * Opens Security Authentication Modal
 */
function promptSecurityAuth(desc, onSuccess, title) {
  AppState.pendingAuthAction = onSuccess;
  if (DOM.securityModalTitle) {
    DOM.securityModalTitle.textContent = title || 'Private Vault Authentication';
  }
  if (DOM.securityModalDesc) {
    DOM.securityModalDesc.textContent = desc || 'Enter vault password (innovators)';
  }
  if (DOM.securityErrorMsg) DOM.securityErrorMsg.textContent = '';
  if (DOM.securityPasswordInput) DOM.securityPasswordInput.value = '';
  DOM.securityModal.classList.add('active');
  if (DOM.securityPasswordInput) {
    setTimeout(() => DOM.securityPasswordInput.focus(), 60);
  }
}

function closeSecurityModal() {
  DOM.securityModal.classList.remove('active');
  AppState.pendingAuthAction = null;
  if (DOM.securityPasswordInput) DOM.securityPasswordInput.value = '';
  if (DOM.securityErrorMsg) DOM.securityErrorMsg.textContent = '';
  if (DOM.securityModalTitle) {
    DOM.securityModalTitle.textContent = 'Private Vault Authentication';
  }
  if (DOM.securityModalDesc) {
    DOM.securityModalDesc.textContent = 'Enter the enclave security key to access or seal private vault assets.';
  }
}

function verifySecurityPassword(e) {
  e.preventDefault();
  const inputVal = (DOM.securityPasswordInput.value || '').trim();

  if (inputVal === VAULT_SECURITY_KEY) {
    AppState.isVaultAuthenticated = true;
    sessionStorage.setItem('vi_vault_unlocked', 'true');
    updateLockedVaultIcon();
    const action = AppState.pendingAuthAction;
    closeSecurityModal();

    if (typeof action === 'function') {
      action();
    }
  } else {
    if (DOM.securityErrorMsg) {
      DOM.securityErrorMsg.textContent = '❌ Access Denied: Incorrect Password';
      DOM.securityPasswordInput.classList.add('shake');
      setTimeout(() => DOM.securityPasswordInput.classList.remove('shake'), 400);
    }
  }
}

/**
 * Toggles an image's locked state (moving between public gallery and locked vault)
 * NOTE: Whenever a user tries to move photos OUT of the vault, they are ALWAYS asked for the password!
 */
window.handleCardLockToggle = function(id) {
  const item = AppState.items.find(i => i.id === id);
  if (!item) return;

  if (item.isLocked) {
    // MOVING OUT OF THE VAULT: Always prompt for password confirmation!
    promptSecurityAuth(
      `Enter vault password to unlock "${item.title}" and move it to the public gallery:`,
      () => {
        toggleItemLock(item);
      },
      'Unlock Vault Asset'
    );
  } else {
    // MOVING INTO THE VAULT:
    if (!AppState.isVaultAuthenticated) {
      promptSecurityAuth(
        `Enter password to lock "${item.title}" into Private Vault:`,
        () => {
          toggleItemLock(item);
        },
        'Lock Asset in Vault'
      );
    } else {
      toggleItemLock(item);
    }
  }
};

function toggleItemLock(item) {
  item.isLocked = !item.isLocked;

  if (item.isLocked) {
    AppState.lockedIds.add(item.id);
    showToast(`"${item.title}" sealed into Locked Vault 🔒`);
  } else {
    AppState.lockedIds.delete(item.id);
    showToast(`"${item.title}" moved out of Vault & restored to Public Gallery 🔓`);
  }

  // Persist locked IDs
  localStorage.setItem('vi_locked_ids', JSON.stringify([...AppState.lockedIds]));

  // Also update vi_uploads if this was an uploaded item so its isLocked field is updated
  try {
    const existingUploads = JSON.parse(localStorage.getItem('vi_uploads') || '[]');
    const uploadItem = existingUploads.find(u => u.id === item.id);
    if (uploadItem) {
      uploadItem.isLocked = item.isLocked;
      localStorage.setItem('vi_uploads', JSON.stringify(existingUploads));
    }
  } catch (e) {}

  renderGallery();
  updateMetrics();
  if (AppState.lightbox.isOpen) {
    updateLightboxContent();
    renderLightboxFilmstrip();
  }
}

// --------------------------------------------------------------------------
// 8. Fullscreen Lightbox Modal & Carousel Mechanics
// --------------------------------------------------------------------------

function openLightbox(index) {
  const items = AppState.lightbox.filteredItems;
  if (!items || items.length === 0) return;

  if (index < 0) index = items.length - 1;
  if (index >= items.length) index = 0;

  AppState.lightbox.isOpen = true;
  AppState.lightbox.currentIndex = index;
  AppState.lightbox.zoomLevel = 1;
  AppState.lightbox.rotation = 0;

  DOM.lightboxModal.classList.add('active');
  document.body.style.overflow = 'hidden';

  updateLightboxContent();
  renderLightboxFilmstrip();
}

function closeLightbox() {
  AppState.lightbox.isOpen = false;
  DOM.lightboxModal.classList.remove('active');
  document.body.style.overflow = '';
  const lightboxVideo = document.getElementById('lightboxVideo');
  if (lightboxVideo) {
    lightboxVideo.pause();
    lightboxVideo.src = '';
    lightboxVideo.style.display = 'none';
  }
}

function nextLightbox() {
  const items = AppState.lightbox.filteredItems;
  if (!items || items.length === 0) return;
  const nextIdx = (AppState.lightbox.currentIndex + 1) % items.length;
  openLightbox(nextIdx);
}

function prevLightbox() {
  const items = AppState.lightbox.filteredItems;
  if (!items || items.length === 0) return;
  const prevIdx = (AppState.lightbox.currentIndex - 1 + items.length) % items.length;
  openLightbox(prevIdx);
}

function updateLightboxContent() {
  const items = AppState.lightbox.filteredItems;
  const item = items[AppState.lightbox.currentIndex];
  if (!item) return;

  const lightboxVideo = document.getElementById('lightboxVideo');
  if (item.isVideo) {
    DOM.lightboxImage.style.display = 'none';
    if (lightboxVideo) {
      lightboxVideo.style.display = 'block';
      lightboxVideo.src = item.src;
      lightboxVideo.play().catch(() => {});
    }
  } else {
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.src = '';
      lightboxVideo.style.display = 'none';
    }
    DOM.lightboxImage.style.display = 'block';
    DOM.lightboxImage.style.opacity = '0';
    DOM.lightboxImage.src = item.src;
    DOM.lightboxImage.alt = item.title;
    applyTransform();
    requestAnimationFrame(() => {
      DOM.lightboxImage.style.opacity = '1';
    });
  }

  DOM.lightboxTitle.textContent = item.title;
  if (item.category === 'members' && item.roll) {
    DOM.lightboxSubtitle.textContent = `ROLL: ${item.roll} • ${item.course} (${item.session})`;
  } else {
    DOM.lightboxSubtitle.textContent = item.role || (item.isLocked ? 'Locked Asset' : 'Enclave Media');
  }

  // HD tag
  if (item.isHD) {
    DOM.lightboxBadge.style.display = 'inline-flex';
  } else {
    DOM.lightboxBadge.style.display = 'none';
  }

  // Counter
  DOM.lightboxCounter.textContent = `${AppState.lightbox.currentIndex + 1} / ${items.length}`;

  // Favorite status
  const isLiked = AppState.favorites.has(item.id);
  DOM.lightboxLikeIcon.textContent = 'favorite';
  DOM.lightboxLikeIcon.style.fontVariationSettings = `'FILL' ${isLiked ? 1 : 0}`;
  DOM.lightboxLikeBtn.style.color = isLiked ? 'var(--accent-rose)' : 'inherit';

  // Lock status in Lightbox
  if (DOM.lightboxLockIcon && DOM.lightboxLockLabel) {
    DOM.lightboxLockIcon.textContent = item.isLocked ? 'lock_open' : 'lock';
    DOM.lightboxLockLabel.textContent = item.isLocked ? 'Unlock' : 'Lock';
    DOM.lightboxLockBtn.style.color = item.isLocked ? '#fb7185' : 'inherit';
  }

  DOM.downloadBtn.onclick = () => {
    downloadImage(item.src, `${item.title.toLowerCase().replace(/\s+/g, '_')}.jpg`);
  };
}

function renderLightboxFilmstrip() {
  const items = AppState.lightbox.filteredItems;
  if (!DOM.lightboxFilmstrip) return;

  DOM.lightboxFilmstrip.innerHTML = items.map((item, idx) => `
    <div class="filmstrip-thumb ${idx === AppState.lightbox.currentIndex ? 'active' : ''}" 
         onclick="openLightbox(${idx})" 
         title="${item.title}">
      <img src="${item.src}" alt="${item.title}">
    </div>
  `).join('');

  const activeThumb = DOM.lightboxFilmstrip.querySelector('.filmstrip-thumb.active');
  if (activeThumb) {
    activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

function applyTransform() {
  DOM.lightboxImage.style.transform = `scale(${AppState.lightbox.zoomLevel}) rotate(${AppState.lightbox.rotation}deg)`;
}

function zoomIn() {
  if (AppState.lightbox.zoomLevel < 3) {
    AppState.lightbox.zoomLevel += 0.25;
    applyTransform();
  }
}

function zoomOut() {
  if (AppState.lightbox.zoomLevel > 0.5) {
    AppState.lightbox.zoomLevel -= 0.25;
    applyTransform();
  }
}

function resetZoom() {
  AppState.lightbox.zoomLevel = 1;
  AppState.lightbox.rotation = 0;
  applyTransform();
}

function rotateImage() {
  AppState.lightbox.rotation = (AppState.lightbox.rotation + 90) % 360;
  applyTransform();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    DOM.lightboxModal.requestFullscreen().catch(err => {
      console.warn('Fullscreen error:', err);
    });
  } else {
    document.exitFullscreen();
  }
}

function downloadImage(url, filename) {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast(`Downloading: ${filename}`);
}

// --------------------------------------------------------------------------
// 9. Favorite / Like Handling
// --------------------------------------------------------------------------
window.toggleLike = function(id) {
  if (AppState.favorites.has(id)) {
    AppState.favorites.delete(id);
    showToast('Removed from Favorites');
  } else {
    AppState.favorites.add(id);
    showToast('Added to Favorites ❤️');
  }

  localStorage.setItem('vi_favorites', JSON.stringify([...AppState.favorites]));

  renderGallery();
  updateMetrics();
  if (AppState.lightbox.isOpen) {
    updateLightboxContent();
  }
};

// --------------------------------------------------------------------------
// 10. Image Upload & Automatic HD Resolution Scanner
// --------------------------------------------------------------------------
function openUploadModal() {
  DOM.uploadModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeUploadModal() {
  DOM.uploadModal.classList.remove('active');
  document.body.style.overflow = '';
  stopLiveCamera();
  resetUploadForm();
}

function resetUploadForm() {
  if (DOM.uploadForm) DOM.uploadForm.reset();
  if (DOM.uploadPreviewBox) DOM.uploadPreviewBox.classList.remove('active');
  if (DOM.uploadPreviewImage) DOM.uploadPreviewImage.src = '';
  if (DOM.dropZone) DOM.dropZone.style.display = 'block';
  if (DOM.memberSpecificFields) DOM.memberSpecificFields.style.display = 'none';
  if (DOM.uploadHDStatus) {
    DOM.uploadHDStatus.innerHTML = '<span class="badge-pill badge-member">Select an image to detect</span>';
  }
  stopLiveCamera();
  currentUploadState.dataUrl = '';
  currentUploadState.isHD = false;
  currentUploadState.dimensions = '';
  currentUploadState.aspectRatio = 'aspect-portrait';
}

function handleFileSelect(file) {
  if (!file || !file.type.startsWith('image/')) {
    showToast('Please select a valid image file');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    currentUploadState.dataUrl = dataUrl;
    DOM.uploadPreviewImage.src = dataUrl;
    DOM.uploadPreviewBox.classList.add('active');
    DOM.dropZone.style.display = 'none';
    stopLiveCamera();

    // Automatic HD Resolution & Aspect Ratio Detection
    const tempImg = new Image();
    tempImg.onload = () => {
      const width = tempImg.naturalWidth;
      const height = tempImg.naturalHeight;
      // HD criteria: 1280x720 (720p) or 1920x1080 or file size >= 450KB
      const isAutoHD = (width >= 1280 || height >= 720 || file.size >= 450 * 1024);
      currentUploadState.isHD = isAutoHD;
      currentUploadState.dimensions = `${width} × ${height}`;
      const ratio = width / height;
      currentUploadState.aspectRatio = ratio > 1.3 ? 'aspect-wide' : (ratio < 0.8 ? 'aspect-portrait' : 'aspect-square');

      if (DOM.uploadHDStatus) {
        const aspectText = currentUploadState.aspectRatio === 'aspect-wide' ? '16:9' : (currentUploadState.aspectRatio === 'aspect-square' ? '1:1' : '9:16');
        if (isAutoHD) {
          DOM.uploadHDStatus.innerHTML = `
            <span class="badge-pill badge-hd" style="display: inline-flex; align-items: center; gap: 0.35rem;">
              <span class="material-symbols-outlined" style="font-size: 13px;">check_circle</span>
              HD Auto-Detected (${width}×${height} • ${aspectText})
            </span>
          `;
        } else {
          DOM.uploadHDStatus.innerHTML = `
            <span class="badge-pill badge-member" style="display: inline-flex; align-items: center; gap: 0.35rem;">
              <span class="material-symbols-outlined" style="font-size: 13px;">photo_size_select_actual</span>
              Standard (${width}×${height} • ${aspectText})
            </span>
          `;
        }
      }
    };
    tempImg.src = dataUrl;
  };
  reader.readAsDataURL(file);
}

function processUploadSubmission(e) {
  e.preventDefault();

  const title = document.getElementById('uploadTitle').value.trim();
  const category = document.getElementById('uploadCategory').value;
  const description = document.getElementById('uploadDescription').value.trim();
  const shouldLock = DOM.uploadToLockedVault && DOM.uploadToLockedVault.checked;
  const imageSrc = currentUploadState.dataUrl || DOM.uploadPreviewImage.src;

  if (!imageSrc) {
    showToast('Please upload or select an image');
    return;
  }
  if (!title) {
    showToast('Please enter an image title');
    return;
  }

  // If user wants to save directly to locked vault and is not authenticated yet:
  if (shouldLock && !AppState.isVaultAuthenticated) {
    promptSecurityAuth('Enter password to encrypt & seal this upload into Locked Vault', () => {
      finalizeUpload(title, category, description, true, imageSrc);
    });
    return;
  }

  finalizeUpload(title, category, description, shouldLock, imageSrc);
}

function finalizeUpload(title, category, description, isLocked, imageSrc) {
  const studentName = document.getElementById('uploadMemberName') ? document.getElementById('uploadMemberName').value.trim() : '';
  const roll = document.getElementById('uploadMemberRoll') ? document.getElementById('uploadMemberRoll').value.trim() : '';
  const course = document.getElementById('uploadMemberCourse') ? document.getElementById('uploadMemberCourse').value.trim() : '';
  const session = document.getElementById('uploadMemberSession') ? document.getElementById('uploadMemberSession').value.trim() : '';

  const newItem = {
    id: 'upload-' + Date.now(),
    title: studentName ? studentName : title,
    category: category,
    isCaptain: false,
    role: category === 'members' ? 'Innovator Member' : (isLocked ? 'Sealed Asset' : 'Enclave Upload'),
    roll: roll || null,
    course: course || null,
    session: session || null,
    src: imageSrc,
    aspectRatio: currentUploadState.aspectRatio || 'aspect-portrait',
    isHD: currentUploadState.isHD,
    isLocked: isLocked,
    description: description || 'Asset safely preserved inside Vestor Innovators Vault.'
  };

  AppState.items.unshift(newItem);
  if (isLocked) {
    AppState.lockedIds.add(newItem.id);
    localStorage.setItem('vi_locked_ids', JSON.stringify([...AppState.lockedIds]));
  }

  try {
    const existingUploads = JSON.parse(localStorage.getItem('vi_uploads') || '[]');
    existingUploads.unshift(newItem);
    localStorage.setItem('vi_uploads', JSON.stringify(existingUploads));
  } catch (err) {
    console.warn('LocalStorage error:', err);
  }

  closeUploadModal();
  renderGallery();
  updateMetrics();
  showToast(`Added "${newItem.title}" ${isLocked ? 'to Locked Vault 🔒' : 'to Gallery'}!`);
}

// --------------------------------------------------------------------------
// 11. Theme Toggle (Instant 60fps Dark & Light Mode)
// --------------------------------------------------------------------------
function toggleTheme() {
  const newTheme = AppState.theme === 'dark' ? 'light' : 'dark';
  AppState.theme = newTheme;
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('vi_theme', newTheme);
  if (DOM.darkmodeToggle) {
    DOM.darkmodeToggle.checked = (newTheme === 'dark');
  }
  updateThemeIcon();
}

function updateThemeIcon() {
  if (DOM.themeIcon) {
    DOM.themeIcon.textContent = AppState.theme === 'dark' ? 'light_mode' : 'dark_mode';
  }
  if (DOM.darkmodeToggle) {
    DOM.darkmodeToggle.checked = (AppState.theme === 'dark');
  }
}

// --------------------------------------------------------------------------
// 12. Toast Feedback Notifications
// --------------------------------------------------------------------------
function showToast(message) {
  if (!DOM.toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="material-symbols-outlined" style="font-size: 17px; color: var(--accent-cyan);">info</span>
    <span>${message}</span>
  `;
  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) toast.parentNode.removeChild(toast);
  }, 2900);
}

// --------------------------------------------------------------------------
// 13. Event Listeners & Binding
// --------------------------------------------------------------------------
function bindEventListeners() {
  // Category Filter Reel
  DOM.filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      if (filter === 'locked') {
        handleLockedVaultTabClick();
      } else {
        setActiveFilter(filter);
      }
    });
  });

  // Search Input (Desktop & Mobile Synchronized)
  const mobileSearchBtn = document.getElementById('mobileSearchBtn');
  const mobileSearchDrawer = document.getElementById('mobileSearchDrawer');
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  const mobileSearchClose = document.getElementById('mobileSearchClose');

  if (DOM.searchInput) {
    DOM.searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value;
      if (mobileSearchInput) mobileSearchInput.value = e.target.value;
      renderGallery();
    });
  }

  if (mobileSearchBtn && mobileSearchDrawer) {
    mobileSearchBtn.addEventListener('click', () => {
      const isActive = mobileSearchDrawer.classList.toggle('active');
      if (isActive && mobileSearchInput) {
        mobileSearchInput.focus();
      }
    });
  }

  if (mobileSearchClose && mobileSearchDrawer) {
    mobileSearchClose.addEventListener('click', () => {
      mobileSearchDrawer.classList.remove('active');
    });
  }

  if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value;
      if (DOM.searchInput) DOM.searchInput.value = e.target.value;
      renderGallery();
    });
  }

  // Sort Dropdown
  if (DOM.sortSelect) {
    DOM.sortSelect.addEventListener('change', (e) => {
      AppState.sortBy = e.target.value;
      renderGallery();
    });
  }

  // View Mode Switcher (Smart / Grid / Bento / Compact)
  DOM.viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.viewButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.getAttribute('data-view');
      AppState.viewMode = view;
      localStorage.setItem('vi_view_mode', view);

      DOM.galleryGrid.className = 'gallery-grid';
      if (view === 'smart') DOM.galleryGrid.classList.add('view-smart');
      if (view === 'bento') DOM.galleryGrid.classList.add('view-bento');
      if (view === 'compact') DOM.galleryGrid.classList.add('view-compact');
      showToast(`Switched to ${view.toUpperCase()} Layout`);
    });
  });

  // Theme Toggle (Instantaneous, Lag-Free)
  if (DOM.darkmodeToggle) {
    DOM.darkmodeToggle.addEventListener('change', (e) => {
      const isDark = e.target.checked;
      const newTheme = isDark ? 'dark' : 'light';
      AppState.theme = newTheme;
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('vi_theme', newTheme);
      if (DOM.themeIcon) {
        DOM.themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
      }
    });
  }
  if (DOM.themeToggleBtn) {
    DOM.themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Highlights & Ambient Audio Controls
  const ambientAudioBtn = document.getElementById('ambientAudioBtn');
  if (ambientAudioBtn) {
    ambientAudioBtn.addEventListener('click', () => AmbientAudio.toggle());
  }

  const track = document.getElementById('highlightsTrack');
  const prevBtn = document.getElementById('highlightsPrevBtn');
  const nextBtn = document.getElementById('highlightsNextBtn');
  if (prevBtn && track) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -260, behavior: 'smooth' });
    });
  }
  if (nextBtn && track) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: 260, behavior: 'smooth' });
    });
  }

  // Story Viewer Controls
  const storyTapPrev = document.getElementById('storyTapPrev');
  const storyTapNext = document.getElementById('storyTapNext');
  const storyPlayPauseBtn = document.getElementById('storyPlayPauseBtn');
  const storyAudioToggleBtn = document.getElementById('storyAudioToggleBtn');
  const closeStoryBtn = document.getElementById('closeStoryBtn');

  if (storyTapPrev) storyTapPrev.addEventListener('click', () => StoryViewer.prev());
  if (storyTapNext) storyTapNext.addEventListener('click', () => StoryViewer.next());
  if (storyPlayPauseBtn) storyPlayPauseBtn.addEventListener('click', () => StoryViewer.togglePlayPause());
  if (storyAudioToggleBtn) storyAudioToggleBtn.addEventListener('click', () => AmbientAudio.toggle());
  if (closeStoryBtn) closeStoryBtn.addEventListener('click', () => StoryViewer.close());

  // Lightbox Modal Controls
  if (DOM.closeLightboxBtn) DOM.closeLightboxBtn.addEventListener('click', closeLightbox);
  if (DOM.nextArrowBtn) DOM.nextArrowBtn.addEventListener('click', nextLightbox);
  if (DOM.prevArrowBtn) DOM.prevArrowBtn.addEventListener('click', prevLightbox);
  if (DOM.zoomInBtn) DOM.zoomInBtn.addEventListener('click', zoomIn);
  if (DOM.zoomOutBtn) DOM.zoomOutBtn.addEventListener('click', zoomOut);
  if (DOM.resetZoomBtn) DOM.resetZoomBtn.addEventListener('click', resetZoom);
  if (DOM.rotateBtn) DOM.rotateBtn.addEventListener('click', rotateImage);
  if (DOM.fullscreenBtn) DOM.fullscreenBtn.addEventListener('click', toggleFullscreen);
  if (DOM.lightboxLikeBtn) {
    DOM.lightboxLikeBtn.addEventListener('click', () => {
      const item = AppState.lightbox.filteredItems[AppState.lightbox.currentIndex];
      if (item) toggleLike(item.id);
    });
  }
  if (DOM.lightboxLockBtn) {
    DOM.lightboxLockBtn.addEventListener('click', () => {
      const item = AppState.lightbox.filteredItems[AppState.lightbox.currentIndex];
      if (item) handleCardLockToggle(item.id);
    });
  }

  // Keyboard Navigation for Lightbox & Story Viewer
  window.addEventListener('keydown', (e) => {
    if (DOM.securityModal && DOM.securityModal.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeSecurityModal();
        return;
      }
    }
    if (StoryViewer.isOpen) {
      if (e.key === 'Escape') StoryViewer.close();
      else if (e.key === 'ArrowRight' || e.key === ' ') StoryViewer.next();
      else if (e.key === 'ArrowLeft') StoryViewer.prev();
      return;
    }
    if (!AppState.lightbox.isOpen) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowRight') nextLightbox();
    else if (e.key === 'ArrowLeft') prevLightbox();
    else if (e.key === 'f' || e.key === 'F') toggleFullscreen();
    else if (e.key === '+') zoomIn();
    else if (e.key === '-') zoomOut();
  });

  // Touch Swipe for Mobile Navigation in Lightbox
  let touchStartX = 0;
  let touchEndX = 0;
  DOM.lightboxModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  DOM.lightboxModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) nextLightbox();
    else if (touchEndX > touchStartX + swipeThreshold) prevLightbox();
  }, { passive: true });

  // Upload Modal Triggers
  if (DOM.openUploadBtn) DOM.openUploadBtn.addEventListener('click', openUploadModal);
  if (DOM.closeUploadBtn) DOM.closeUploadBtn.addEventListener('click', closeUploadModal);
  if (DOM.cancelUploadBtn) DOM.cancelUploadBtn.addEventListener('click', closeUploadModal);
  if (DOM.uploadForm) DOM.uploadForm.addEventListener('submit', processUploadSubmission);

  // File Picker & Drop Zone
  if (DOM.dropZone && DOM.fileInput) {
    DOM.dropZone.addEventListener('click', () => DOM.fileInput.click());
    DOM.fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleFileSelect(e.target.files[0]);
      }
    });

    ['dragenter', 'dragover'].forEach(name => {
      DOM.dropZone.addEventListener(name, (e) => {
        e.preventDefault();
        DOM.dropZone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(name => {
      DOM.dropZone.addEventListener(name, (e) => {
        e.preventDefault();
        DOM.dropZone.classList.remove('dragover');
      });
    });

    DOM.dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFileSelect(e.dataTransfer.files[0]);
      }
    });
  }

  if (DOM.removePreviewBtn) {
    DOM.removePreviewBtn.addEventListener('click', () => {
      DOM.uploadPreviewImage.src = '';
      DOM.uploadPreviewBox.classList.remove('active');
      DOM.dropZone.style.display = 'block';
      if (DOM.fileInput) DOM.fileInput.value = '';
      currentUploadState.dataUrl = '';
      currentUploadState.isHD = false;
      if (DOM.uploadHDStatus) {
        DOM.uploadHDStatus.innerHTML = '<span class="badge-pill badge-member">Select an image to detect</span>';
      }
    });
  }

  // Toggle member specific fields when category is 'members'
  const categorySelect = document.getElementById('uploadCategory');
  if (categorySelect && DOM.memberSpecificFields) {
    categorySelect.addEventListener('change', (e) => {
      if (e.target.value === 'members') {
        DOM.memberSpecificFields.style.display = 'grid';
      } else {
        DOM.memberSpecificFields.style.display = 'none';
      }
    });
  }

  // Security Modal Handlers
  if (DOM.securityForm) DOM.securityForm.addEventListener('submit', verifySecurityPassword);
  if (DOM.cancelSecurityBtn) DOM.cancelSecurityBtn.addEventListener('click', closeSecurityModal);
  if (DOM.securityModal) {
    DOM.securityModal.addEventListener('click', (e) => {
      if (e.target === DOM.securityModal) {
        closeSecurityModal();
      }
    });
  }

  // Toggle Password Visibility
  if (DOM.togglePasswordVisibility && DOM.securityPasswordInput && DOM.togglePasswordIcon) {
    DOM.togglePasswordVisibility.addEventListener('click', () => {
      const isPassword = DOM.securityPasswordInput.type === 'password';
      DOM.securityPasswordInput.type = isPassword ? 'text' : 'password';
      DOM.togglePasswordIcon.textContent = isPassword ? 'visibility_off' : 'visibility';
    });
  }
  // Initialize Camera & Dual Upload Controls
  setupCameraHandlers();
}

// --------------------------------------------------------------------------
// 14. Camera Live Viewfinder & Capture Logic
// --------------------------------------------------------------------------
let currentCameraStream = null;
let currentFacingMode = 'environment';

function setupCameraHandlers() {
  if (DOM.browseFilesBtn && DOM.fileInput) {
    DOM.browseFilesBtn.addEventListener('click', () => DOM.fileInput.click());
  }

  if (DOM.cameraSnapBtn) {
    DOM.cameraSnapBtn.addEventListener('click', () => {
      // On mobile devices, launch the native camera capture immediately
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile && DOM.cameraInput) {
        DOM.cameraInput.click();
      } else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        startLiveCamera(currentFacingMode);
      } else if (DOM.cameraInput) {
        DOM.cameraInput.click();
      } else if (DOM.fileInput) {
        DOM.fileInput.click();
      }
    });
  }

  if (DOM.cameraInput) {
    DOM.cameraInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleFileSelect(e.target.files[0]);
      }
    });
  }

  if (DOM.closeCameraBtn) {
    DOM.closeCameraBtn.addEventListener('click', stopLiveCamera);
  }

  if (DOM.switchCameraBtn) {
    DOM.switchCameraBtn.addEventListener('click', () => {
      currentFacingMode = (currentFacingMode === 'environment') ? 'user' : 'environment';
      startLiveCamera(currentFacingMode);
    });
  }

  if (DOM.captureStreamBtn && DOM.cameraVideo && DOM.cameraCanvas) {
    DOM.captureStreamBtn.addEventListener('click', () => {
      const video = DOM.cameraVideo;
      const canvas = DOM.cameraCanvas;
      if (!video.videoWidth || !video.videoHeight) return;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
      stopLiveCamera();

      // Set to current upload state
      currentUploadState.dataUrl = dataUrl;
      DOM.uploadPreviewImage.src = dataUrl;
      DOM.uploadPreviewBox.classList.add('active');
      DOM.dropZone.style.display = 'none';

      const isHD = (canvas.width >= 1280 || canvas.height >= 720);
      currentUploadState.isHD = isHD;
      currentUploadState.dimensions = `${canvas.width} × ${canvas.height}`;
      const ratio = canvas.width / canvas.height;
      currentUploadState.aspectRatio = ratio > 1.3 ? 'aspect-wide' : (ratio < 0.8 ? 'aspect-portrait' : 'aspect-square');

      if (DOM.uploadHDStatus) {
        const aspectText = currentUploadState.aspectRatio === 'aspect-wide' ? '16:9' : (currentUploadState.aspectRatio === 'aspect-square' ? '1:1' : '9:16');
        DOM.uploadHDStatus.innerHTML = `
          <span class="badge-pill ${isHD ? 'badge-hd' : 'badge-member'}" style="display: inline-flex; align-items: center; gap: 0.35rem;">
            <span class="material-symbols-outlined" style="font-size: 13px;">${isHD ? 'check_circle' : 'photo_camera'}</span>
            Camera Snap (${canvas.width}×${canvas.height} • ${aspectText})
          </span>
        `;
      }
      showToast('Photo captured successfully from camera!');
    });
  }
}

async function startLiveCamera(facingMode) {
  stopLiveCamera();
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: facingMode, width: { ideal: 1920 }, height: { ideal: 1080 } },
      audio: false
    });
    currentCameraStream = stream;
    if (DOM.cameraVideo) {
      DOM.cameraVideo.srcObject = stream;
    }
    if (DOM.cameraStreamBox) DOM.cameraStreamBox.style.display = 'block';
    if (DOM.dropZone) DOM.dropZone.style.display = 'none';
  } catch (err) {
    console.warn('Camera stream error:', err);
    showToast('Opening native camera capture...');
    if (DOM.cameraInput) DOM.cameraInput.click();
  }
}

function stopLiveCamera() {
  if (currentCameraStream) {
    currentCameraStream.getTracks().forEach(t => t.stop());
    currentCameraStream = null;
  }
  if (DOM.cameraStreamBox) DOM.cameraStreamBox.style.display = 'none';
  if (DOM.dropZone && !currentUploadState.dataUrl) DOM.dropZone.style.display = 'block';
}

// --------------------------------------------------------------------------
// 15. Run on DOM Loaded
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', init);
