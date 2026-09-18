/**
 * Family Tree Application - Mobile First Edition
 * Key Features:
 * - Smart Mobile Journey View: Focused ancestor hero card, breadcrumbs, and children drill-down
 * - Dual View: 📱 ফোকাস মোড (Mobile First) & 🗺️ ফুল ট্রি ম্যাপ (SVG Canvas)
 * - Admin Authentication with secure password 'tanvir1407' (No demo hint)
 * - Photo Support & Instant Local Image Conversion
 */

// Initial Seed Data (Fallback)
const DEFAULT_MEMBERS = [
  {
    "id": "poranulla",
    "name": "পরানউল্লা",
    "gender": "male",
    "parentId": null,
    "photo": "",
    "residence": "বানিশান্তা গ্রাম, দাকোপ, খুলনা",
    "notes": "এখন পর্যন্ত পাওয়া তথ্যের ভিত্তিতে বংশের আদিপুরুষ। মূল বাসস্থান ছিল বানিশান্তা গ্রাম।"
  },
  {
    "id": "amanulla",
    "name": "হাজী আমানউল্লা",
    "gender": "male",
    "parentId": "poranulla",
    "photo": "",
    "residence": "শংকরপাশা গ্রাম",
    "notes": "পরানউল্লার জ্যেষ্ঠ পুত্র। বাসস্থান: শংকরপাশা গ্রাম।"
  },
  {
    "id": "dorajulla",
    "name": "দরাজউল্লা",
    "gender": "male",
    "parentId": "poranulla",
    "photo": "",
    "residence": "শংকরপাশা গ্রাম",
    "notes": "পরানউল্লার দ্বিতীয় পুত্র। বাসস্থান: শংকরপাশা গ্রাম।"
  },
  {
    "id": "sharafulla",
    "name": "শরাফউল্লা",
    "gender": "male",
    "parentId": "poranulla",
    "photo": "",
    "residence": "শংকরপাশা গ্রাম",
    "notes": "পরানউল্লার তৃতীয় পুত্র। বাসস্থান: শংকরপাশা গ্রাম।"
  },
  {
    "id": "imdad_ali",
    "name": "হাজী ইমদাদ আলী",
    "gender": "male",
    "parentId": "amanulla",
    "photo": "",
    "residence": "",
    "notes": "হাজী আমানউল্লার একমাত্র পুত্র।"
  },
  {
    "id": "sharafulla_daughter_1",
    "name": "অজ্ঞাত কন্যা",
    "gender": "female",
    "parentId": "sharafulla",
    "photo": "",
    "residence": "",
    "notes": "শরাফউল্লার একমাত্র কন্যা (নাম এখনও পাওয়া যায়নি)।"
  },
  {
    "id": "afel_uddin",
    "name": "আফেল উদ্দিন হাওলাদার",
    "gender": "male",
    "parentId": "imdad_ali",
    "photo": "",
    "residence": "",
    "notes": "হাজী ইমদাদ আলীর পুত্র। অনেকগুলো ছেলেমেয়ে আছে, বাকিদের তথ্য পরে যুক্ত করা হবে।"
  },
  {
    "id": "imdad_daughter_1",
    "name": "অজ্ঞাত কন্যা ১",
    "gender": "female",
    "parentId": "imdad_ali",
    "photo": "",
    "residence": "",
    "notes": "হাজী ইমদাদ আলীর কন্যা।"
  },
  {
    "id": "imdad_daughter_2",
    "name": "অজ্ঞাত কন্যা ২",
    "gender": "female",
    "parentId": "imdad_ali",
    "photo": "",
    "residence": "",
    "notes": "হাজী ইমদাদ আলীর কন্যা।"
  },
  {
    "id": "imdad_daughter_3",
    "name": "অজ্ঞাত কন্যা ৩",
    "gender": "female",
    "parentId": "imdad_ali",
    "photo": "",
    "residence": "",
    "notes": "হাজী ইমদাদ আলীর কন্যা।"
  },
  {
    "id": "khairul_bashar",
    "name": "মোহাম্মদ খাইরুল বাশার",
    "gender": "male",
    "parentId": "afel_uddin",
    "photo": "",
    "residence": "",
    "notes": "আফেল উদ্দিন হাওলাদারের পুত্র।"
  },
  {
    "id": "tamim",
    "name": "মোহাম্মদ তামিম",
    "gender": "male",
    "parentId": "khairul_bashar",
    "photo": "",
    "residence": "",
    "notes": "মোহাম্মদ খাইরুল বাশারের পুত্র।"
  },
  {
    "id": "tanvir",
    "name": "মোহাম্মদ তানভীর",
    "gender": "male",
    "parentId": "khairul_bashar",
    "photo": "",
    "residence": "",
    "notes": "মোহাম্মদ খাইরুল বাশারের পুত্র (আপনি)।"
  },
  {
    "id": "tahira",
    "name": "দিলরুবা আক্তার তাহিরা",
    "gender": "female",
    "parentId": "khairul_bashar",
    "photo": "",
    "residence": "",
    "notes": "মোহাম্মদ খাইরুল বাশারের কন্যা।"
  },
  {
    "id": "mozaffar_ali",
    "name": "মোজাফফর আলী",
    "gender": "male",
    "parentId": "dorajulla",
    "photo": "",
    "residence": "",
    "notes": "দরাজউল্লার প্রথম পুত্র।"
  },
  {
    "id": "iman_ali",
    "name": "ইমান আলী",
    "gender": "male",
    "parentId": "dorajulla",
    "photo": "",
    "residence": "",
    "notes": "দরাজউল্লার দ্বিতীয় পুত্র।"
  },
  {
    "id": "abdul_haq",
    "name": "আব্দুল হক",
    "gender": "male",
    "parentId": "mozaffar_ali",
    "photo": "",
    "residence": "",
    "notes": "মোজাফফর আলীর একমাত্র পুত্র।"
  },
  {
    "id": "mozaffar_daughter_1",
    "name": "অজ্ঞাত কন্যা ১",
    "gender": "female",
    "parentId": "mozaffar_ali",
    "photo": "",
    "residence": "",
    "notes": "মোজাফফর আলীর কন্যা।"
  },
  {
    "id": "mozaffar_daughter_2",
    "name": "অজ্ঞাত কন্যা ২",
    "gender": "female",
    "parentId": "mozaffar_ali",
    "photo": "",
    "residence": "",
    "notes": "মোজাফফর আলীর কন্যা।"
  },
  {
    "id": "momin_uddin",
    "name": "মোমিন উদ্দিন",
    "gender": "male",
    "parentId": "iman_ali",
    "photo": "",
    "residence": "",
    "notes": "ইমান আলীর পুত্র। বংশের একমাত্র ব্যক্তি যিনি ভিক্ষা করেছেন।"
  },
  {
    "id": "ambia",
    "name": "আম্বিয়া",
    "gender": "female",
    "parentId": "iman_ali",
    "photo": "",
    "residence": "",
    "notes": "ইমান আলীর কন্যা।"
  }
];

// Admin Credentials
const ADMIN_CONFIG = {
  usernames: ['tanvir', 'admin'],
  password: 'tanvir1407'
};

// State Variables
let members = [];
let currentFocusedId = 'poranulla';
let currentViewMode = 'focus'; // 'focus' or 'tree'
let isAdmin = false;
let zoomBehavior = null;
let currentTransform = d3.zoomIdentity;

// Card constants for tree SVG
const CARD_WIDTH = 260;
const CARD_HEIGHT = 102;
const AVATAR_SIZE = 64;

// Bengali Numerals
function toBengaliNum(num) {
  const digits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, d => digits[d]);
}

// Generate Unique ID
function generateId(name) {
  const base = name.trim().toLowerCase().replace(/[\s\W]+/g, '_').substring(0, 15);
  return (base || 'person') + '_' + Math.random().toString(36).substring(2, 7);
}

// App Initialization
async function initApp() {
  isAdmin = sessionStorage.getItem('family_tree_admin') === 'true';
  updateAdminUI();

  // Try fetching fresh data.json first
  try {
    const resp = await fetch('data.json?t=' + Date.now());
    if (resp.ok) {
      members = await resp.json();
      localStorage.setItem('family_tree_members', JSON.stringify(members));
    } else {
      throw new Error("Could not fetch data.json");
    }
  } catch (e) {
    // If offline or file:// protocol, check localStorage or fallback to DEFAULT_MEMBERS
    const saved = localStorage.getItem('family_tree_members');
    if (saved) {
      try {
        members = JSON.parse(saved);
      } catch (err) {
        members = DEFAULT_MEMBERS;
      }
    } else {
      members = DEFAULT_MEMBERS;
    }
  }

  // Setup Handlers
  setupEventListeners();
  setupSearch();
  populateParentDropdown();

  // Focus Root (Poran Ulla) by default
  const root = members.find(m => !m.parentId) || members[0];
  if (root) currentFocusedId = root.id;

  // Automatically select Tree mode for Desktop/Laptop (>768px), Focus mode for Mobile
  const isDesktop = window.innerWidth > 768;
  setViewMode(isDesktop ? 'tree' : 'focus');
}

// Switch between Mobile Focus Journey & Full Tree Canvas
function setViewMode(mode) {
  currentViewMode = mode;
  const focusView = document.getElementById('mobile-journey-view');
  const treeView = document.getElementById('tree-viewport');
  const btnFocus = document.getElementById('view-mode-focus');
  const btnTree = document.getElementById('view-mode-tree');

  if (mode === 'focus') {
    closeMemberDrawer();
    focusView.style.display = 'flex';
    treeView.style.display = 'none';
    btnFocus.classList.add('active');
    btnTree.classList.remove('active');
    focusMember(currentFocusedId);
  } else {
    focusView.style.display = 'none';
    treeView.style.display = 'block';
    btnFocus.classList.remove('active');
    btnTree.classList.add('active');
    renderTree();
    zoomToMember(currentFocusedId);
  }
}

// Update Admin UI
function updateAdminUI() {
  const adminElements = document.querySelectorAll('.admin-only-ui');
  const loginBtn = document.getElementById('btn-admin-login-modal');
  const adminBadge = document.getElementById('admin-status-badge');
  const drawerFooter = document.getElementById('drawer-admin-footer');
  const drawerPhotoBtn = document.getElementById('btn-drawer-change-photo');

  if (isAdmin) {
    adminElements.forEach(el => el.style.display = 'inline-flex');
    if (drawerFooter) drawerFooter.style.display = 'flex';
    if (drawerPhotoBtn) drawerPhotoBtn.style.display = 'flex';
    if (loginBtn) loginBtn.style.display = 'none';
    if (adminBadge) adminBadge.style.display = 'inline-flex';
  } else {
    adminElements.forEach(el => el.style.display = 'none');
    if (drawerFooter) drawerFooter.style.display = 'none';
    if (drawerPhotoBtn) drawerPhotoBtn.style.display = 'none';
    if (loginBtn) loginBtn.style.display = 'inline-flex';
    if (adminBadge) adminBadge.style.display = 'none';
  }
}

// Persist Members
function persistMembers() {
  localStorage.setItem('family_tree_members', JSON.stringify(members));
  populateParentDropdown();
  if (currentViewMode === 'focus') {
    focusMember(currentFocusedId);
  } else {
    renderTree();
  }
}

// Calculate generation depth
function calculateMemberDepth(member) {
  let depth = 0;
  let curr = member;
  while (curr && curr.parentId) {
    depth++;
    curr = members.find(m => m.id === curr.parentId);
  }
  return depth;
}

// Get ancestor lineage path array
function getAncestorLineage(memberId) {
  const path = [];
  let curr = members.find(m => m.id === memberId);
  while (curr) {
    path.unshift(curr);
    curr = members.find(m => m.id === curr.parentId);
  }
  return path;
}

// =======================================================
// CORE MOBILE FOCUS JOURNEY CONTROLLER
// =======================================================
function focusMember(memberId) {
  const member = members.find(m => m.id === memberId);
  if (!member) return;
  currentFocusedId = memberId;

  const card = document.getElementById('focus-hero-card');

  // Trigger smooth animation
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = 'heroFadeIn 0.28s cubic-bezier(0.16, 1, 0.3, 1)';

  // Card classes
  card.className = 'focus-hero-card';
  card.classList.add(`gender-${member.gender}`);
  if (member.id === 'tanvir') card.classList.add('is-user');
  if (!member.parentId) card.classList.add('is-root');

  // Header info
  const depth = calculateMemberDepth(member);
  document.getElementById('focus-generation').textContent = `${toBengaliNum(depth + 1)}ম প্রজন্ম`;

  const statusEl = document.getElementById('focus-status');
  if (member.id === 'tanvir') {
    statusEl.textContent = '✨ আপনি (ইউজার)';
    statusEl.style.color = '#d97706';
  } else if (!member.parentId) {
    statusEl.textContent = '👑 বংশের আদিপুরুষ';
    statusEl.style.color = '#059669';
  } else {
    statusEl.textContent = member.gender === 'female' ? 'বংশের কন্যা' : 'বংশের পুত্র';
    statusEl.style.color = '#475569';
  }

  // Name & Residence
  document.getElementById('focus-name').textContent = member.name;
  const resEl = document.getElementById('focus-residence');
  const resPill = document.getElementById('focus-residence-pill');
  if (member.residence) {
    resEl.textContent = member.residence;
    resPill.style.display = 'inline-flex';
  } else {
    resPill.style.display = 'none';
  }

  // Photo
  const imgEl = document.getElementById('focus-photo-img');
  const placeholderEl = document.getElementById('focus-photo-placeholder');
  if (member.photo) {
    imgEl.src = member.photo;
    imgEl.style.display = 'block';
    placeholderEl.style.display = 'none';
  } else {
    imgEl.style.display = 'none';
    placeholderEl.style.display = 'flex';
    placeholderEl.textContent = member.gender === 'female' ? '👩' : (depth === 0 ? '👑' : '👨');
  }

  // Notes
  const notesEl = document.getElementById('focus-notes');
  if (member.notes && member.notes.trim()) {
    notesEl.textContent = member.notes;
    document.querySelector('.hero-notes-card').style.display = 'block';
  } else {
    notesEl.textContent = 'এই সদস্যের কোনো বিশেষ নোট সংরক্ষিত নেই।';
  }

  // Parent Back Button
  const parentBox = document.getElementById('hero-parent-box');
  const parent = members.find(m => m.id === member.parentId);
  if (parent) {
    document.getElementById('focus-parent-name').textContent = parent.name;
    parentBox.style.display = 'flex';
    document.getElementById('btn-goto-parent').onclick = () => focusMember(parent.id);
  } else {
    parentBox.style.display = 'none';
  }

  // Siblings List
  const siblingsSec = document.getElementById('hero-siblings-section');
  const siblingsList = document.getElementById('focus-siblings-list');
  siblingsList.innerHTML = '';
  if (member.parentId) {
    const siblings = members.filter(m => m.parentId === member.parentId && m.id !== member.id);
    if (siblings.length > 0) {
      document.getElementById('focus-siblings-count').textContent = toBengaliNum(siblings.length);
      siblings.forEach(s => {
        const chip = document.createElement('button');
        chip.className = 'sibling-chip';
        chip.innerHTML = `<span>${s.gender === 'female' ? '👧' : '👦'}</span> <span>${s.name}</span>`;
        chip.onclick = () => focusMember(s.id);
        siblingsList.appendChild(chip);
      });
      siblingsSec.style.display = 'flex';
    } else {
      siblingsSec.style.display = 'none';
    }
  } else {
    siblingsSec.style.display = 'none';
  }

  // Breadcrumbs
  renderBreadcrumbs(memberId);

  // Children Section
  const children = members.filter(m => m.parentId === member.id);
  document.getElementById('focus-children-count').textContent = toBengaliNum(children.length);
  const grid = document.getElementById('focus-children-grid');
  grid.innerHTML = '';

  if (children.length > 0) {
    children.forEach(child => {
      const card = document.createElement('div');
      card.className = `child-card gender-${child.gender}`;
      if (child.id === 'tanvir') card.classList.add('is-user');

      const avatarContent = child.photo 
        ? `<img src="${child.photo}" class="child-avatar-mini">`
        : `<div class="child-avatar-mini">${child.gender === 'female' ? '👧' : '👦'}</div>`;

      const grandChildren = members.filter(m => m.parentId === child.id);

      card.innerHTML = `
        <div class="child-left-info">
          ${avatarContent}
          <div class="child-meta">
            <h4>${child.name}</h4>
            <div class="child-sub">
              ${child.residence ? '📍 ' + child.residence.split(',')[0] : (grandChildren.length > 0 ? `সন্তান: ${toBengaliNum(grandChildren.length)} জন` : 'সন্তানের তথ্য নেই')}
            </div>
          </div>
        </div>
        <div class="child-arrow-btn" title="বিস্তারিত দেখুন">›</div>
      `;

      card.onclick = () => {
        focusMember(child.id);
        // Scroll to top smoothly
        document.getElementById('mobile-journey-view').scrollTo({ top: 0, behavior: 'smooth' });
      };

      grid.appendChild(card);
    });
  } else {
    grid.innerHTML = `
      <div class="no-children-box">
        🌱 বংশের পরবর্তী প্রজন্মের তথ্য এখনো এখানে যুক্ত করা হয়নি।
        ${isAdmin ? '<br><button class="btn btn-sm btn-primary" style="margin-top: 8px;" onclick="openAddMemberModal(\'' + member.id + '\')">➕ নতুন সন্তান যুক্ত করুন</button>' : ''}
      </div>
    `;
  }

  // Admin button actions on active hero card
  document.getElementById('btn-hero-add-child').onclick = () => openAddMemberModal(member.id);
  document.getElementById('btn-hero-add-sibling').onclick = () => openAddMemberModal(member.parentId || '');
  document.getElementById('btn-hero-edit').onclick = () => openEditMemberModal(member);
  document.getElementById('btn-hero-delete').onclick = () => deleteMember(member);
}

// Render Breadcrumbs
function renderBreadcrumbs(memberId) {
  const container = document.getElementById('ancestor-breadcrumbs');
  container.innerHTML = '';
  const lineage = getAncestorLineage(memberId);

  lineage.forEach((m, idx) => {
    const isLast = idx === lineage.length - 1;
    const chip = document.createElement('button');
    chip.className = `breadcrumb-chip ${isLast ? 'active' : ''}`;
    chip.innerHTML = `${idx === 0 ? '👑 ' : ''}${m.name}`;
    chip.onclick = () => focusMember(m.id);
    container.appendChild(chip);

    if (!isLast) {
      const sep = document.createElement('span');
      sep.className = 'breadcrumb-sep';
      sep.textContent = '›';
      container.appendChild(sep);
    }
  });

  // Auto-scroll breadcrumbs to the right
  setTimeout(() => {
    container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
  }, 100);
}

// =======================================================
// D3 SVG FULL TREE VIEW (For Desktop & Canvas Exploration)
// =======================================================
function buildHierarchyTree() {
  if (!members.length) return null;
  const rootItem = members.find(m => !m.parentId) || members[0];
  const memberMap = new Map();
  members.forEach(m => memberMap.set(m.id, { ...m, children: [] }));

  let rootNode = null;
  members.forEach(m => {
    const node = memberMap.get(m.id);
    if (!m.parentId || m.id === rootItem.id) {
      rootNode = node;
    } else {
      const parent = memberMap.get(m.parentId);
      if (parent) {
        parent.children.push(node);
      } else if (!rootNode) {
        rootNode = node;
      }
    }
  });

  if (!rootNode) return null;
  return d3.hierarchy(rootNode);
}

function renderTree() {
  const svg = d3.select('#tree-svg');
  const group = d3.select('#tree-group');

  if (!zoomBehavior) {
    zoomBehavior = d3.zoom()
      .scaleExtent([0.15, 3.5])
      .on('zoom', (event) => {
        currentTransform = event.transform;
        group.attr('transform', event.transform);
      });
    svg.call(zoomBehavior);
  }

  group.selectAll('*').remove();
  const hierarchy = buildHierarchyTree();
  if (!hierarchy) return;

  const treeLayout = d3.tree()
    .nodeSize([CARD_WIDTH + 50, CARD_HEIGHT + 90])
    .separation((a, b) => (a.parent === b.parent ? 1.08 : 1.25));

  const root = treeLayout(hierarchy);

  // Connectors
  group.append('g')
    .attr('class', 'links-layer')
    .selectAll('path')
    .data(root.links())
    .join('path')
    .attr('class', 'tree-link')
    .attr('d', d => {
      const sourceX = d.source.x + CARD_WIDTH / 2;
      const sourceY = d.source.y + CARD_HEIGHT;
      const targetX = d.target.x + CARD_WIDTH / 2;
      const targetY = d.target.y;
      const midY = (sourceY + targetY) / 2;
      return `M ${sourceX} ${sourceY} C ${sourceX} ${midY}, ${targetX} ${midY}, ${targetX} ${targetY}`;
    });

  // Node Cards
  const nodes = group.append('g')
    .attr('class', 'nodes-layer')
    .selectAll('g')
    .data(root.descendants())
    .join('g')
    .attr('class', d => {
      let cls = `node-card node-${d.data.gender}`;
      if (d.data.id === 'tanvir') cls += ' node-user';
      if (!d.data.parentId) cls += ' node-root';
      return cls;
    })
    .attr('transform', d => `translate(${d.x}, ${d.y})`)
    .on('click', (event, d) => {
      event.stopPropagation();
      openMemberDrawer(d.data.id);
      zoomToMember(d.data.id);
    });

  nodes.append('rect')
    .attr('class', 'card-bg')
    .attr('width', CARD_WIDTH)
    .attr('height', CARD_HEIGHT)
    .attr('rx', 16)
    .attr('ry', 16);

  const AVATAR_X = 16;
  const AVATAR_Y = (CARD_HEIGHT - AVATAR_SIZE) / 2;

  nodes.each(function(d, i) {
    const clipId = `tree-clip-${d.data.id}-${i}`;
    const nodeEl = d3.select(this);

    nodeEl.append('clipPath')
      .attr('id', clipId)
      .append('circle')
      .attr('cx', AVATAR_X + AVATAR_SIZE / 2)
      .attr('cy', AVATAR_Y + AVATAR_SIZE / 2)
      .attr('r', AVATAR_SIZE / 2);

    nodeEl.append('circle')
      .attr('cx', AVATAR_X + AVATAR_SIZE / 2)
      .attr('cy', AVATAR_Y + AVATAR_SIZE / 2)
      .attr('r', AVATAR_SIZE / 2 + 1.5)
      .attr('fill', 'none')
      .attr('stroke', d.data.gender === 'female' ? '#f472b6' : (d.data.id === 'tanvir' ? '#f59e0b' : '#60a5fa'))
      .attr('stroke-width', '2');

    nodeEl.append('circle')
      .attr('cx', AVATAR_X + AVATAR_SIZE / 2)
      .attr('cy', AVATAR_Y + AVATAR_SIZE / 2)
      .attr('r', AVATAR_SIZE / 2)
      .attr('fill', d.data.gender === 'female' ? '#fdf2f8' : (d.data.id === 'tanvir' ? '#fef3c7' : '#eff6ff'));

    if (d.data.photo) {
      nodeEl.append('image')
        .attr('xlink:href', d.data.photo)
        .attr('x', AVATAR_X)
        .attr('y', AVATAR_Y)
        .attr('width', AVATAR_SIZE)
        .attr('height', AVATAR_SIZE)
        .attr('preserveAspectRatio', 'xMidYMid slice')
        .attr('clip-path', `url(#${clipId})`);
    } else {
      nodeEl.append('text')
        .attr('x', AVATAR_X + AVATAR_SIZE / 2)
        .attr('y', AVATAR_Y + AVATAR_SIZE / 2 + 9)
        .attr('text-anchor', 'middle')
        .attr('font-size', '30px')
        .text(d.data.gender === 'female' ? '👩' : (d.data.depth === 0 ? '👑' : '👨'));
    }
  });

  const TEXT_X = AVATAR_X + AVATAR_SIZE + 14;

  nodes.append('text')
    .attr('x', TEXT_X)
    .attr('y', 36)
    .attr('font-size', '15.5px')
    .attr('font-weight', '700')
    .attr('fill', '#0f172a')
    .text(d => (d.data.name.length > 14 ? d.data.name.substring(0, 14) + '...' : d.data.name));

  nodes.append('text')
    .attr('x', TEXT_X)
    .attr('y', 58)
    .attr('font-size', '12px')
    .attr('font-weight', '600')
    .attr('fill', d => (d.data.id === 'tanvir' ? '#d97706' : '#475569'))
    .text(d => (d.data.id === 'tanvir' ? '✨ আপনি' : (d.depth === 0 ? '👑 আদিপুরুষ' : `${toBengaliNum(d.depth + 1)}ম প্রজন্ম`)));

  nodes.append('text')
    .attr('x', TEXT_X)
    .attr('y', 80)
    .attr('font-size', '11px')
    .attr('fill', d => (d.data.notes ? '#2563eb' : '#64748b'))
    .text(d => (d.data.residence ? `📍 ${d.data.residence.split(',')[0].trim()}` : (d.data.notes ? '📝 নোট সংরক্ষিত' : `সন্তান: ${toBengaliNum(d.children ? d.children.length : 0)} জন`)));
}

function fitScreenToTree() {
  const container = document.getElementById('tree-viewport');
  const width = container.clientWidth;
  const height = container.clientHeight;
  const svg = d3.select('#tree-svg');

  const hierarchy = buildHierarchyTree();
  if (!hierarchy) return;

  const treeLayout = d3.tree().nodeSize([CARD_WIDTH + 50, CARD_HEIGHT + 90]);
  const root = treeLayout(hierarchy);

  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  root.each(d => {
    if (d.x < minX) minX = d.x;
    if (d.x > maxX) maxX = d.x;
    if (d.y < minY) minY = d.y;
    if (d.y > maxY) maxY = d.y;
  });

  const treeWidth = (maxX - minX) + CARD_WIDTH + 80;
  const treeHeight = (maxY - minY) + CARD_HEIGHT + 120;

  const scale = Math.min(width / treeWidth, height / treeHeight, 1.05) * 0.88;
  const centerX = width / 2 - ((minX + maxX + CARD_WIDTH) / 2) * scale;
  const centerY = 50;

  svg.transition().duration(600).call(
    zoomBehavior.transform,
    d3.zoomIdentity.translate(centerX, centerY).scale(scale)
  );
}

function zoomToMember(memberId) {
  const hierarchy = buildHierarchyTree();
  if (!hierarchy) return;

  const treeLayout = d3.tree().nodeSize([CARD_WIDTH + 50, CARD_HEIGHT + 90]);
  const root = treeLayout(hierarchy);

  let targetNode = null;
  root.each(d => {
    if (d.data.id === memberId) targetNode = d;
  });

  if (!targetNode) return;

  const container = document.getElementById('tree-viewport');
  const width = container.clientWidth;
  const height = container.clientHeight;
  const svg = d3.select('#tree-svg');

  const targetScale = 1.05;
  const targetX = width / 2 - (targetNode.x + CARD_WIDTH / 2) * targetScale;
  const targetY = height / 2 - (targetNode.y + CARD_HEIGHT / 2) * targetScale;

  svg.transition().duration(600).call(
    zoomBehavior.transform,
    d3.zoomIdentity.translate(targetX, targetY).scale(targetScale)
  );
}

// =======================================================
// MEMBER DETAILS DRAWER (FOR FULL TREE DESKTOP MODE)
// =======================================================
let selectedMember = null;

function openMemberDrawer(id) {
  const member = members.find(m => m.id === id);
  if (!member) return;
  selectedMember = member;

  const drawer = document.getElementById('member-drawer');
  if (!drawer) return;
  drawer.classList.add('open');

  document.getElementById('drawer-name').textContent = member.name;
  document.getElementById('drawer-card-name').textContent = member.name;

  const depth = calculateMemberDepth(member);
  document.getElementById('drawer-generation').textContent = `${toBengaliNum(depth + 1)}ম প্রজন্ম`;

  // Avatar Photo
  const imgEl = document.getElementById('drawer-photo-img');
  const placeholderEl = document.getElementById('drawer-photo-placeholder');
  if (member.photo) {
    imgEl.src = member.photo;
    imgEl.style.display = 'block';
    placeholderEl.style.display = 'none';
  } else {
    imgEl.style.display = 'none';
    placeholderEl.style.display = 'flex';
    placeholderEl.textContent = member.gender === 'female' ? '👩' : (depth === 0 ? '👑' : '👨');
  }

  // Meta
  document.getElementById('drawer-gender').textContent = member.gender === 'female' ? 'নারী' : (member.gender === 'male' ? 'পুরুষ' : 'অজানা');
  document.getElementById('drawer-residence').textContent = member.residence || 'অজানা / উল্লেখ নেই';
  
  // Status badge
  const statusBadge = document.getElementById('drawer-card-status');
  if (member.id === 'tanvir') {
    statusBadge.textContent = '🌟 আপনি (ইউজার)';
    statusBadge.style.color = '#d97706';
  } else if (!member.parentId) {
    statusBadge.textContent = '👑 বংশের আদিপুরুষ';
    statusBadge.style.color = '#059669';
  } else {
    statusBadge.textContent = `${toBengaliNum(depth + 1)}ম প্রজন্মের সদস্য`;
    statusBadge.style.color = '#475569';
  }

  // Parent Info (Clickable navigation in drawer)
  const parent = members.find(m => m.id === member.parentId);
  const parentEl = document.getElementById('drawer-parent');
  if (parent) {
    parentEl.innerHTML = `<span style="color: #2563eb; cursor: pointer; text-decoration: underline;">${parent.name}</span>`;
    parentEl.onclick = () => {
      openMemberDrawer(parent.id);
      zoomToMember(parent.id);
    };
  } else {
    parentEl.textContent = 'কেউ নেই (বংশের আদিপুরুষ)';
    parentEl.onclick = null;
  }

  // Notes
  const notesBox = document.getElementById('drawer-notes');
  notesBox.textContent = member.notes || 'কোনো অতিরিক্ত নোট বা তথ্য যুক্ত করা হয়নি।';

  // Children List (Clickable navigation in drawer)
  const children = members.filter(m => m.parentId === member.id);
  document.getElementById('drawer-children-count').textContent = toBengaliNum(children.length);
  const childrenList = document.getElementById('drawer-children-list');
  childrenList.innerHTML = '';
  if (children.length > 0) {
    children.forEach(c => {
      const chip = document.createElement('div');
      chip.className = 'relation-chip';
      chip.innerHTML = `<span>${c.gender === 'female' ? '👧' : '👦'}</span> <strong>${c.name}</strong>`;
      chip.onclick = () => {
        openMemberDrawer(c.id);
        zoomToMember(c.id);
      };
      childrenList.appendChild(chip);
    });
  } else {
    childrenList.innerHTML = '<span class="empty-hint">কোনো সন্তানের তথ্য এখনো যুক্ত করা হয়নি</span>';
  }

  // Siblings List (Clickable navigation in drawer)
  const siblingsList = document.getElementById('drawer-siblings-list');
  siblingsList.innerHTML = '';
  if (member.parentId) {
    const siblings = members.filter(m => m.parentId === member.parentId && m.id !== member.id);
    if (siblings.length > 0) {
      siblings.forEach(s => {
        const chip = document.createElement('div');
        chip.className = 'relation-chip';
        chip.innerHTML = `<span>${s.gender === 'female' ? '👧' : '👦'}</span> <strong>${s.name}</strong>`;
        chip.onclick = () => {
          openMemberDrawer(s.id);
          zoomToMember(s.id);
        };
        siblingsList.appendChild(chip);
      });
    } else {
      siblingsList.innerHTML = '<span class="empty-hint">কোনো ভাই/বোন নেই (একমাত্র সন্তান)</span>';
    }
  } else {
    siblingsList.innerHTML = '<span class="empty-hint">আদিপুরুষের কোনো ভাই/বোন জানা নেই</span>';
  }
}

function closeMemberDrawer() {
  const drawer = document.getElementById('member-drawer');
  if (drawer) drawer.classList.remove('open');
}

// =======================================================
// MODAL & DATA EDITING
// =======================================================
let currentUploadedPhoto = '';

function populateParentDropdown(selectedParentId = '') {
  const select = document.getElementById('form-parent');
  select.innerHTML = '<option value="">-- কোনো অভিভাবক নেই (আদিপুরুষ) --</option>';
  members.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m.id;
    opt.textContent = `${m.name} (${toBengaliNum(calculateMemberDepth(m) + 1)}ম প্রজন্ম)`;
    if (m.id === selectedParentId) opt.selected = true;
    select.appendChild(opt);
  });
}

function openAddMemberModal(presetParentId = '') {
  if (!isAdmin) {
    openLoginModal();
    return;
  }
  document.getElementById('modal-title').textContent = 'নতুন সদস্য যুক্ত করুন';
  document.getElementById('form-member-id').value = '';
  document.getElementById('form-name').value = '';
  document.getElementById('form-gender').value = 'male';
  document.getElementById('form-residence').value = '';
  document.getElementById('form-notes').value = '';
  currentUploadedPhoto = '';
  resetPhotoPreview();
  populateParentDropdown(presetParentId);

  document.getElementById('member-modal-backdrop').classList.add('open');
}

function openEditMemberModal(member) {
  if (!isAdmin) {
    openLoginModal();
    return;
  }
  document.getElementById('modal-title').textContent = 'সদস্যের তথ্য সম্পাদনা করুন';
  document.getElementById('form-member-id').value = member.id;
  document.getElementById('form-name').value = member.name;
  document.getElementById('form-gender').value = member.gender || 'male';
  document.getElementById('form-residence').value = member.residence || '';
  document.getElementById('form-notes').value = member.notes || '';
  currentUploadedPhoto = member.photo || '';
  
  if (currentUploadedPhoto) {
    showPhotoPreview(currentUploadedPhoto);
  } else {
    resetPhotoPreview();
  }

  populateParentDropdown(member.parentId || '');
  document.getElementById('member-modal-backdrop').classList.add('open');
}

function deleteMember(member) {
  if (!isAdmin) {
    openLoginModal();
    return;
  }
  const hasChildren = members.some(m => m.parentId === member.id);
  if (hasChildren) {
    alert('সতর্কতা: এই সদস্যের সন্তান রয়েছে। সন্তান থাকলে সরাসরি মুছে ফেলা যাবে না।');
    return;
  }
  if (confirm(`আপনি কি সত্যিই "${member.name}" কে মুছে ফেলতে চান?`)) {
    const parentId = member.parentId;
    members = members.filter(m => m.id !== member.id);
    persistMembers();
    focusMember(parentId || (members[0] ? members[0].id : 'poranulla'));
    showToast('সদস্য মুছে ফেলা হয়েছে।');
  }
}

function closeModal() {
  document.getElementById('member-modal-backdrop').classList.remove('open');
}

function showPhotoPreview(dataUrl) {
  const preview = document.getElementById('form-avatar-preview');
  const icon = document.getElementById('form-avatar-icon');
  const removeBtn = document.getElementById('btn-remove-photo');
  preview.src = dataUrl;
  preview.style.display = 'block';
  icon.style.display = 'none';
  removeBtn.style.display = 'inline-flex';
}

function resetPhotoPreview() {
  const preview = document.getElementById('form-avatar-preview');
  const icon = document.getElementById('form-avatar-icon');
  const removeBtn = document.getElementById('btn-remove-photo');
  preview.src = '';
  preview.style.display = 'none';
  icon.style.display = 'block';
  removeBtn.style.display = 'none';
  document.getElementById('form-photo-input').value = '';
}

// Toast
function showToast(msg) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✓</span> <div>${msg}</div>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3500);
}

// Login Modal
function openLoginModal() {
  document.getElementById('login-password').value = '';
  document.getElementById('login-error-msg').style.display = 'none';
  document.getElementById('admin-login-modal').classList.add('open');
}

function closeLoginModal() {
  document.getElementById('admin-login-modal').classList.remove('open');
}

// Setup Search
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  const dropdown = document.getElementById('search-results');

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) {
      dropdown.classList.remove('open');
      dropdown.innerHTML = '';
      return;
    }

    const matches = members.filter(m => 
      m.name.toLowerCase().includes(q) || 
      (m.residence && m.residence.toLowerCase().includes(q)) ||
      (m.notes && m.notes.toLowerCase().includes(q))
    );

    if (matches.length === 0) {
      dropdown.innerHTML = '<div style="padding: 9px 12px; color: #94a3b8; font-size: 12px;">কোনো সদস্য পাওয়া যায়নি</div>';
      dropdown.classList.add('open');
      return;
    }

    dropdown.innerHTML = '';
    matches.forEach(m => {
      const item = document.createElement('div');
      item.className = 'search-item';
      
      const avatarSrc = m.photo ? `<img src="${m.photo}" class="search-avatar-mini">` : `<div class="search-avatar-mini">${m.gender === 'female' ? '👩' : '👨'}</div>`;

      item.innerHTML = `
        ${avatarSrc}
        <div>
          <div class="search-item-name">${m.name}</div>
          <div class="search-item-meta">${m.residence || `${toBengaliNum(calculateMemberDepth(m) + 1)}ম প্রজন্ম`}</div>
        </div>
      `;

      item.onclick = () => {
        dropdown.classList.remove('open');
        searchInput.value = '';
        if (currentViewMode === 'tree') {
          openMemberDrawer(m.id);
          zoomToMember(m.id);
        } else {
          focusMember(m.id);
        }
      };

      dropdown.appendChild(item);
    });

    dropdown.classList.add('open');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrapper')) {
      dropdown.classList.remove('open');
    }
  });
}

// Exports
function exportJSON() {
  const cleanData = members.map(m => ({
    id: m.id,
    name: m.name,
    gender: m.gender,
    parentId: m.parentId,
    photo: m.photo || "",
    residence: m.residence || "",
    notes: m.notes || ""
  }));

  const blob = new Blob([JSON.stringify(cleanData, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'data.json';
  a.click();
  showToast('data.json ফাইল ডাউনলোড হয়েছে!');
}

function exportGedcom() {
  let ged = [];
  ged.push("0 HEAD");
  ged.push("1 SOUR FamilyTreeApp");
  ged.push("1 GEDC");
  ged.push("2 VERS 5.5.1");
  ged.push("2 FORM LINEAGE-LINKED");
  ged.push("1 CHAR UTF-8");

  members.forEach(m => {
    ged.push(`0 @I_${m.id}@ INDI`);
    ged.push(`1 NAME ${m.name}`);
    ged.push(`1 SEX ${m.gender === 'female' ? 'F' : (m.gender === 'male' ? 'M' : 'U')}`);
    if (m.residence) {
      ged.push(`1 RESI`);
      ged.push(`2 ADDR ${m.residence}`);
    }
    if (m.notes) {
      ged.push(`1 NOTE ${m.notes}`);
    }
    if (m.parentId) {
      ged.push(`1 FAMC @F_${m.parentId}@`);
    }
  });

  const parentIds = [...new Set(members.map(m => m.parentId).filter(Boolean))];
  parentIds.forEach(pid => {
    ged.push(`0 @F_${pid}@ FAM`);
    const parent = members.find(m => m.id === pid);
    if (parent && parent.gender === 'female') {
      ged.push(`1 WIFE @I_${pid}@`);
    } else {
      ged.push(`1 HUSB @I_${pid}@`);
    }
    const children = members.filter(m => m.parentId === pid);
    children.forEach(c => {
      ged.push(`1 CHIL @I_${c.id}@`);
    });
  });

  ged.push("0 TRLR");

  const blob = new Blob([ged.join('\n')], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `family-tree-${new Date().toISOString().slice(0, 10)}.ged`;
  a.click();
  showToast('GEDCOM ফাইল ডাউনলোড হয়েছে!');
}

async function exportTreeImage() {
  const container = document.getElementById('mobile-journey-view');
  showToast('ছবি তৈরি হচ্ছে...');
  try {
    if (window.htmlToImage) {
      const dataUrl = await htmlToImage.toPng(container, { quality: 0.95, backgroundColor: '#f1f5f9' });
      const a = document.createElement('a');
      a.download = `family-tree-${new Date().toISOString().slice(0, 10)}.png`;
      a.href = dataUrl;
      a.click();
      showToast('ছবি সফলভাবে সংরক্ষিত হয়েছে!');
    } else {
      window.print();
    }
  } catch (err) {
    window.print();
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // View mode switcher
  document.getElementById('view-mode-focus').onclick = () => setViewMode('focus');
  document.getElementById('view-mode-tree').onclick = () => setViewMode('tree');

  // Quick navigation buttons
  document.getElementById('btn-quick-poranulla').onclick = () => {
    if (currentViewMode === 'tree') {
      openMemberDrawer('poranulla');
      zoomToMember('poranulla');
    } else {
      focusMember('poranulla');
    }
  };
  document.getElementById('btn-quick-tanvir').onclick = () => {
    if (currentViewMode === 'tree') {
      openMemberDrawer('tanvir');
      zoomToMember('tanvir');
    } else {
      focusMember('tanvir');
    }
  };

  // Tools dropdown
  const dropdownBtn = document.getElementById('tools-dropdown-btn');
  const dropdownMenu = document.getElementById('tools-dropdown-menu');
  dropdownBtn.onclick = (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('open');
  };
  document.addEventListener('click', () => dropdownMenu.classList.remove('open'));

  // Admin login / logout
  document.getElementById('btn-admin-login-modal').onclick = openLoginModal;
  document.getElementById('close-login-modal-btn').onclick = closeLoginModal;
  document.getElementById('btn-cancel-login').onclick = closeLoginModal;

  document.getElementById('admin-login-form').onsubmit = (e) => {
    e.preventDefault();
    const user = document.getElementById('login-username').value.trim().toLowerCase();
    const pass = document.getElementById('login-password').value;

    if (ADMIN_CONFIG.usernames.includes(user) && pass === ADMIN_CONFIG.password) {
      isAdmin = true;
      sessionStorage.setItem('family_tree_admin', 'true');
      updateAdminUI();
      closeLoginModal();
      focusMember(currentFocusedId);
      showToast('অভিনন্দন! আপনি সফলভাবে অ্যাডমিন হিসেবে লগইন করেছেন।');
    } else {
      document.getElementById('login-error-msg').style.display = 'block';
    }
  };

  document.getElementById('btn-admin-logout').onclick = () => {
    isAdmin = false;
    sessionStorage.removeItem('family_tree_admin');
    updateAdminUI();
    focusMember(currentFocusedId);
    showToast('অ্যাডমিন থেকে লগআউট সম্পন্ন হয়েছে।');
  };

  // Add member button from menu
  document.getElementById('btn-add-member').onclick = () => openAddMemberModal();

  // Export / Import
  document.getElementById('btn-export-json').onclick = exportJSON;
  document.getElementById('btn-export-gedcom').onclick = exportGedcom;
  document.getElementById('btn-export-image').onclick = exportTreeImage;

  const jsonFileInput = document.getElementById('json-file-input');
  document.getElementById('btn-import-json-trigger').onclick = () => {
    if (!isAdmin) {
      openLoginModal();
      return;
    }
    jsonFileInput.click();
  };
  jsonFileInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (Array.isArray(imported) && imported.length > 0) {
            members = imported;
            persistMembers();
            showToast('JSON ফাইল সফলভাবে লোড ও সেভ হয়েছে!');
          }
        } catch (err) {
          alert('JSON ফাইল সঠিক নয়।');
        }
      };
      reader.readAsText(file);
    }
  };

  // Photo Upload directly from Hero Card (Admin Only)
  const heroPhotoInput = document.getElementById('hero-photo-input');
  document.getElementById('btn-hero-change-photo').onclick = () => {
    if (!isAdmin) {
      openLoginModal();
      return;
    }
    heroPhotoInput.click();
  };
  heroPhotoInput.onchange = (e) => {
    const file = e.target.files[0];
    const member = members.find(m => m.id === currentFocusedId);
    if (file && member) {
      const reader = new FileReader();
      reader.onload = (event) => {
        member.photo = event.target.result;
        persistMembers();
        showToast('ছবি সফলভাবে যুক্ত করা হয়েছে!');
      };
      reader.readAsDataURL(file);
    }
  };

  // Modal Photo Preview
  const formPhotoInput = document.getElementById('form-photo-input');
  formPhotoInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        currentUploadedPhoto = event.target.result;
        showPhotoPreview(currentUploadedPhoto);
      };
      reader.readAsDataURL(file);
    }
  };

  document.getElementById('btn-remove-photo').onclick = () => {
    currentUploadedPhoto = '';
    resetPhotoPreview();
  };

  // Modal Form Submit
  document.getElementById('member-form').onsubmit = (e) => {
    e.preventDefault();
    if (!isAdmin) {
      openLoginModal();
      return;
    }
    const id = document.getElementById('form-member-id').value;
    const name = document.getElementById('form-name').value.trim();
    const gender = document.getElementById('form-gender').value;
    const parentId = document.getElementById('form-parent').value || null;
    const residence = document.getElementById('form-residence').value.trim();
    const notes = document.getElementById('form-notes').value.trim();

    if (!name) return;

    if (id) {
      const member = members.find(m => m.id === id);
      if (member) {
        member.name = name;
        member.gender = gender;
        member.parentId = parentId;
        member.residence = residence;
        member.notes = notes;
        if (currentUploadedPhoto) member.photo = currentUploadedPhoto;
        else if (currentUploadedPhoto === '') member.photo = '';
        showToast('তথ্য আপডেট হয়েছে!');
      }
    } else {
      const newMember = {
        id: generateId(name),
        name,
        gender,
        parentId,
        photo: currentUploadedPhoto || "",
        residence,
        notes
      };
      members.push(newMember);
      currentFocusedId = newMember.id;
      showToast(`"${name}" কে যুক্ত করা হয়েছে!`);
    }

    persistMembers();
    closeModal();
    focusMember(currentFocusedId);
  };

  document.getElementById('close-modal-btn').onclick = closeModal;
  document.getElementById('btn-cancel-modal').onclick = closeModal;

  // Zoom buttons in tree view
  document.getElementById('btn-zoom-in').onclick = () => {
    d3.select('#tree-svg').transition().duration(250).call(zoomBehavior.scaleBy, 1.25);
  };
  document.getElementById('btn-zoom-out').onclick = () => {
    d3.select('#tree-svg').transition().duration(250).call(zoomBehavior.scaleBy, 0.8);
  };
  document.getElementById('btn-fit-screen').onclick = fitScreenToTree;

  // Drawer Event Listeners (Full Tree Desktop Mode)
  document.getElementById('close-drawer-btn').onclick = closeMemberDrawer;
  document.getElementById('btn-drawer-add-child').onclick = () => {
    if (selectedMember) openAddMemberModal(selectedMember.id);
  };
  document.getElementById('btn-drawer-add-sibling').onclick = () => {
    if (selectedMember) openAddMemberModal(selectedMember.parentId || '');
  };
  document.getElementById('btn-drawer-edit').onclick = () => {
    if (selectedMember) openEditMemberModal(selectedMember);
  };
  document.getElementById('btn-drawer-delete').onclick = () => {
    if (selectedMember) deleteMember(selectedMember);
  };

  // Drawer photo upload
  const drawerPhotoInput = document.getElementById('drawer-photo-input');
  document.getElementById('btn-drawer-change-photo').onclick = () => {
    if (!isAdmin) {
      openLoginModal();
      return;
    }
    drawerPhotoInput.click();
  };
  drawerPhotoInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file && selectedMember) {
      const reader = new FileReader();
      reader.onload = (event) => {
        selectedMember.photo = event.target.result;
        persistMembers();
        openMemberDrawer(selectedMember.id);
        showToast('ছবি সফলভাবে যুক্ত করা হয়েছে!');
      };
      reader.readAsDataURL(file);
    }
  };
}

// Start
window.addEventListener('DOMContentLoaded', initApp);
