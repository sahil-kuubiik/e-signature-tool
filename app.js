/* ═══════════════════════════════════════════════
   SignatureCraft – app.js
   ═══════════════════════════════════════════════ */
'use strict';

// ─── State ───────────────────────────────────────────────────────────────────
// ─── State ───────────────────────────────────────────────────────────────────
const DEFAULT_STATE = {
  layout: 4,
  color: '#0d9488',
  name: 'Roland Evans',
  title: 'Managing Director',
  company: 'Canford Estate Agents',
  tagline: '',
  address: '',
  email: '',
  website: 'www.canford.au',
  ctaText: '',
  phoneStyle: 'icon',
  phones: [
    { type: 'W', number: '+61 433 335 507' },
    { type: 'T', number: '+61 7 5538 8788' }
  ],
  logo: '',
  logoUrl: 'https://www.canford.au/wp-content/uploads/2026/10/Canford_logo_Kuubiik_high_resolution_transparent_min_388px.png',
  avatar: '',
  avatarUrl: '',
  showPhoto: false,
  showBottomLogo: true,
  logoSize: 140,
  logoRatio: 3.0,
  logoDarkModeFix: false,
  logoBgStyle: 'none',
};

const DEFAULT_CANFORD_BASE64 = 'data:image/png;base64,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';

const state = Object.assign({}, DEFAULT_STATE);
let phoneCount = state.phones.length;

function saveState() {
  try {
    localStorage.setItem('sc_signature_state', JSON.stringify(state));
  } catch (_) { }
}

function loadState() {
  try {
    const saved = localStorage.getItem('sc_signature_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.assign(state, parsed);
      // Auto-migrate legacy logos to the new version
      if (!state.logoUrl || state.logoUrl.includes('nkLI3bf') || state.logoUrl.includes('nktJyxt') || state.logoUrl.includes('removebg') || state.logoUrl.includes('nkt0ZnS')) {
        state.logoUrl = 'https://www.canford.au/wp-content/uploads/2026/10/Canford_logo_Kuubiik_high_resolution_transparent_min_388px.png';
      }
      // Clear legacy default email
      if (state.email === 'roland@canford.au') {
        state.email = '';
      }
      if (Array.isArray(state.phones)) {
        state.phones = state.phones.filter(p => !(p.type === 'E' && p.number === 'roland@canford.au'));
        state.phones.forEach(p => {
          if (p.type !== 'W' && p.type !== 'T') {
            p.type = (p.number && p.number.includes('433')) ? 'W' : 'T';
          }
        });
      }
      state.logoRatio = 3.0;
      state.logoDarkModeFix = false;
      state.logoBgStyle = 'none';
      state.phoneStyle = 'icon';
      state.layout = 4;
      state.color = '#0d9488';
    }
  } catch (_) { }
}

// ─── Layout metadata (Executive Row Layout) ──────────────────────────────────
const LAYOUTS = [
  { id: 4, name: 'Executive Row', desc: 'Photo left · Details center · Company logo right' },
];

// ─── SVG thumbnail for Executive Row layout ──────────────────────────────────
function thumbSvg(id, color) {
  const c = color;
  return `<svg viewBox="0 0 82 52" xmlns="http://www.w3.org/2000/svg">
  <rect width="82" height="52" fill="#f8fafc" rx="4"/>
  <circle cx="12" cy="26" r="8" fill="#e2e8f0"/>
  <circle cx="12" cy="26" r="7" fill="none" stroke="${c}" stroke-width="1.2"/>
  <circle cx="12" cy="26" r="4" fill="${c}" opacity="0.6"/>
  <rect x="23" y="10" width="1" height="32" rx="0.5" fill="#cbd5e1"/>
  <rect x="27" y="14" width="22" height="3.5" rx="1" fill="#1e293b"/>
  <rect x="27" y="20" width="16" height="2" rx="0.8" fill="#64748b"/>
  <rect x="27" y="25" width="24" height="2" rx="0.8" fill="${c}"/>
  <rect x="27" y="30" width="20" height="2" rx="0.8" fill="#1e293b"/>
  <rect x="27" y="35" width="18" height="2" rx="0.8" fill="${c}"/>
  <rect x="55" y="10" width="1" height="32" rx="0.5" fill="#cbd5e1"/>
  <rect x="59" y="18" width="18" height="10" rx="2" fill="#e2e8f0"/>
  <rect x="61" y="21" width="14" height="4" rx="1" fill="${c}" opacity="0.8"/>
  <rect x="60" y="31" width="16" height="2" rx="0.8" fill="#94a3b8"/>
</svg>`;
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  buildLayoutCards();
  bindFields();
  bindColors();
  setupLogoDrop();
  setupAvatarDrop();
  syncStateToUI();
  setupCodeEditor();
  generatePreview();
});

function syncStateToUI() {
  const map = [
    ['fName', 'name'], ['fTitle', 'title'], ['fCompany', 'company'],
    ['fTagline', 'tagline'], ['fAddress', 'address'], ['fEmail', 'email'], ['fWebsite', 'website'],
    ['fCtaText', 'ctaText'], ['fCtaUrl', 'ctaUrl'],
    ['fLogoUrl', 'logoUrl'], ['fAvatarUrl', 'avatarUrl']
  ];
  map.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.value = state[key] || '';
  });

  const photoCheck = document.getElementById('togglePhoto');
  if (photoCheck) {
    photoCheck.checked = state.showPhoto;
    const wrap = document.getElementById('photoSectionWrap');
    if (wrap) wrap.style.display = state.showPhoto ? 'block' : 'none';
  }

  const logoCheck = document.getElementById('toggleBottomLogo');
  if (logoCheck) {
    logoCheck.checked = state.showBottomLogo;
    const wrap = document.getElementById('logoSectionWrap');
    if (wrap) wrap.style.display = state.showBottomLogo ? 'block' : 'none';
  }

  const sizeInput = document.getElementById('fLogoSize');
  if (sizeInput) sizeInput.value = state.logoSize || 140;
  const sizeVal = document.getElementById('logoSizeVal');
  if (sizeVal) sizeVal.textContent = `${state.logoSize || 140}px`;

  // Render phones from state
  const phoneList = document.getElementById('phoneList');
  if (phoneList && state.phones && state.phones.length > 0) {
    phoneList.innerHTML = '';
    phoneCount = state.phones.length;
    state.phones.forEach((p, idx) => {
      const row = document.createElement('div');
      row.className = 'phone-row';
      row.id = `phone-row-${idx}`;
      row.innerHTML = `
        <select class="phone-type" id="phoneType${idx}">
          <option value="W" ${p.type === 'W' ? 'selected' : ''}>W (WhatsApp)</option>
          <option value="T" ${p.type === 'T' ? 'selected' : ''}>T (Tel)</option>
        </select>
        <input class="field-input phone-num" type="tel" id="phoneNum${idx}" value="${e(p.number)}" placeholder="+61 433 335 507" />
        <button class="btn-del-phone" id="delPhone${idx}" onclick="removePhone(${idx})" title="Remove" style="${state.phones.length > 1 ? 'display:flex;' : 'display:none;'}">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>`;
      phoneList.appendChild(row);
      bindPhoneRow(idx);
    });
  } else {
    bindPhoneRow(0);
  }

  setLogoBgStyle(state.logoBgStyle || 'none');
  selectLayout(state.layout || 4);
}

// ─── Layout Cards (Executive Row Dedicated) ──────────────────────────────────
function buildLayoutCards() {
  const grid = document.getElementById('layoutGrid');
  if (!grid) return;
  grid.innerHTML = '';
  LAYOUTS.forEach(l => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'layout-card active';
    btn.id = `lcard-${l.id}`;
    btn.title = l.desc;
    btn.innerHTML = `<div class="layout-thumb">${thumbSvg(l.id, state.color)}</div>
                     <span class="layout-name">${l.name}</span>`;
    btn.onclick = () => selectLayout(l.id);
    grid.appendChild(btn);
  });
}

function selectLayout(id = 4) {
  state.layout = 4;
  saveState();
  const card = document.getElementById('lcard-4');
  if (card) card.classList.add('active');
  generatePreview();
}

// ─── Colors ───────────────────────────────────────────────────────────────────
function bindColors() {
  const swatches = document.querySelectorAll('.swatch[data-color]');
  if (swatches.length) {
    swatches.forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
        btn.classList.add('active');
        applyColor(btn.dataset.color);
      };
    });
  }
  const picker = document.getElementById('customColor');
  if (picker) {
    picker.oninput = e => {
      document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
      applyColor(e.target.value);
    };
  }
}

function applyColor(c) {
  state.color = c;
  document.documentElement.style.setProperty('--accent', c);
  const r = parseInt(c.slice(1, 3), 16), g = parseInt(c.slice(3, 5), 16), b = parseInt(c.slice(5, 7), 16);
  document.documentElement.style.setProperty('--accent-glow', `rgba(${r},${g},${b},0.15)`);
  buildLayoutCards();
  generatePreview();
}

// ─── Field Binding ────────────────────────────────────────────────────────────
function bindFields() {
  const map = [
    ['fName', 'name'], ['fTitle', 'title'], ['fCompany', 'company'],
    ['fTagline', 'tagline'], ['fAddress', 'address'], ['fEmail', 'email'], ['fWebsite', 'website'],
    ['fCtaText', 'ctaText'], ['fCtaUrl', 'ctaUrl'],
    ['fLogoUrl', 'logoUrl'], ['fAvatarUrl', 'avatarUrl']
  ];
  map.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.oninput = () => {
      let val = el.value.trim();
      if (key === 'logoUrl') {
        // If user pasted a Postimages page link instead of direct link
        if (val.includes('postimg.cc/') && !val.includes('i.postimg.cc/')) {
          showToast('Postimages Tip: Copy the "Direct link" (starts with https://i.postimg.cc/...), not the page link!');
        }
        if (val) {
          const testImg = new Image();
          testImg.onload = () => {
            if (testImg.width && testImg.height) {
              state.logoRatio = testImg.width / testImg.height;
              generatePreview();
            }
          };
          testImg.src = val;
        }
      }
      state[key] = val;
      generatePreview();
    };
  });
}

function setLogoBgStyle(bg) {
  state.logoBgStyle = bg;
  state.logoDarkModeFix = (bg === 'white');
  ['none', 'dark', 'brand', 'white'].forEach(s => {
    const btn = document.getElementById(`bgBtn${s.charAt(0).toUpperCase() + s.slice(1)}`);
    if (btn) btn.classList.toggle('active', s === bg);
  });
  generatePreview();
}

// ─── Logo Mode Switcher (URL vs File) ─────────────────────────────────────────
function switchLogoMode(mode) {
  const urlTab = document.getElementById('tabLogoUrl');
  const uploadTab = document.getElementById('tabLogoUpload');
  const urlPane = document.getElementById('logoUrlPane');
  const uploadPane = document.getElementById('logoUploadPane');
  if (mode === 'url') {
    urlTab.classList.add('active');
    uploadTab.classList.remove('active');
    urlPane.style.display = 'block';
    uploadPane.style.display = 'none';
  } else {
    uploadTab.classList.add('active');
    urlTab.classList.remove('active');
    uploadPane.style.display = 'block';
    urlPane.style.display = 'none';
  }
}

// ─── Avatar Mode Switcher (URL vs File) ───────────────────────────────────────
function switchAvatarMode(mode) {
  const urlTab = document.getElementById('tabAvatarUrl');
  const uploadTab = document.getElementById('tabAvatarUpload');
  const urlPane = document.getElementById('avatarUrlPane');
  const uploadPane = document.getElementById('avatarUploadPane');
  if (!urlTab || !uploadTab || !urlPane || !uploadPane) return;
  if (mode === 'url') {
    urlTab.classList.add('active');
    uploadTab.classList.remove('active');
    urlPane.style.display = 'block';
    uploadPane.style.display = 'none';
  } else {
    uploadTab.classList.add('active');
    urlTab.classList.remove('active');
    uploadPane.style.display = 'block';
    urlPane.style.display = 'none';
  }
}

// ─── Phone ────────────────────────────────────────────────────────────────────
function bindPhoneRow(idx) {
  const num = document.getElementById(`phoneNum${idx}`);
  const type = document.getElementById(`phoneType${idx}`);
  if (num) num.oninput = () => { if (state.phones[idx]) state.phones[idx].number = num.value; generatePreview(); };
  if (type) type.onchange = () => { if (state.phones[idx]) state.phones[idx].type = type.value; generatePreview(); };
}

function addPhone() {
  if (phoneCount >= 5) { showToast('Maximum 5 phone numbers allowed'); return; }
  const idx = phoneCount++;
  state.phones.push({ type: 'T', number: '' });

  const row = document.createElement('div');
  row.className = 'phone-row';
  row.id = `phone-row-${idx}`;
  row.innerHTML = `
    <select class="phone-type" id="phoneType${idx}">
      <option value="T" selected>T (Tel)</option>
      <option value="W">W (WhatsApp)</option>
    </select>
    <input class="field-input phone-num" type="tel" id="phoneNum${idx}" placeholder="+61 433 335 507" />
    <button class="btn-del-phone" onclick="removePhone(${idx})" title="Remove" style="display:flex;">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>`;
  document.getElementById('phoneList').appendChild(row);
  bindPhoneRow(idx);

  // Show delete on row 0 too
  if (phoneCount > 1) {
    const d0 = document.getElementById('delPhone0');
    if (d0) d0.style.display = 'flex';
  }
  generatePreview();
}

function removePhone(idx) {
  const row = document.getElementById(`phone-row-${idx}`);
  if (row) row.remove();
  state.phones = state.phones.filter((_, i) => i !== idx);
  phoneCount = Math.max(1, phoneCount - 1);
  if (phoneCount <= 1) {
    const d0 = document.getElementById('delPhone0');
    if (d0) d0.style.display = 'none';
  }
  generatePreview();
}

// ─── Logo Upload & Auto-Compress (Keeps within Gmail 10k limit) ───────────────
// ─── Cloud CDN Auto-Uploader (Direct bypass for Gmail base64 & Apple Mail blocks) ──
async function uploadToCloudCdn(file, target = 'logo') {
  try {
    const fd = new FormData();
    fd.append('source', file);
    fd.append('action', 'upload');
    fd.append('key', '6d207e02198a847aa98d0a2a901485a5');

    const res = await fetch('https://freeimage.host/api/1/upload', {
      method: 'POST',
      body: fd
    });
    const json = await res.json();
    if (json && json.image && json.image.url) {
      const cdnUrl = json.image.url;
      if (target === 'logo') {
        state.logoUrl = cdnUrl;
        const input = document.getElementById('fLogoUrl');
        if (input) input.value = cdnUrl;
        // Also update tab UI to show URL is now active
        switchLogoMode('url');
        generatePreview();
        showToast('Logo auto-uploaded to CDN. Compatible with Gmail & Apple Mail.');
      } else if (target === 'avatar') {
        state.avatarUrl = cdnUrl;
        const input = document.getElementById('fAvatarUrl');
        if (input) input.value = cdnUrl;
        switchAvatarMode('url');
        generatePreview();
        showToast('Headshot auto-uploaded to CDN.');
      }
      return cdnUrl;
    }
  } catch (err) {
    console.warn('CDN upload background fallback:', err);
  }
}

// ─── Logo Upload & Auto-Compress ──────────────────────────────────────────────
function handleLogo(e) {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 10 * 1024 * 1024) { showToast('File too large – max 10MB'); return; }

  const reader = new FileReader();
  reader.onload = ev => {
    const img = new Image();
    img.onload = () => {
      state.logoRatio = (img.width && img.height) ? (img.width / img.height) : 3.0;

      // Downscale to max 280x120 for retina sharpness
      const canvas = document.createElement('canvas');
      const maxW = 280;
      const maxH = 120;
      let w = img.width;
      let h = img.height;
      if (w > maxW || h > maxH) {
        const ratio = Math.min(maxW / w, maxH / h);
        w = Math.round(w * ratio);
        h = Math.round(h * ratio);
      }
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);

      // Try PNG first, if large use JPEG
      let dataUrl = canvas.toDataURL('image/png');
      if (dataUrl.length > 5500) {
        dataUrl = canvas.toDataURL('image/jpeg', 0.75);
      }

      state.logo = dataUrl;
      document.getElementById('logoEmpty').style.display = 'none';
      document.getElementById('logoFilled').style.display = 'flex';
      document.getElementById('logoFilled').style.alignItems = 'center';
      document.getElementById('logoPreview').src = state.logo;
      generatePreview();

      // Automatically upload file to CDN in background so Gmail & Apple Mail get a real HTTPS URL
      showToast('Uploading to high-speed CDN for Gmail & Apple Mail...');
      uploadToCloudCdn(file, 'logo');
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

function removeLogo(e) {
  e.stopPropagation();
  state.logo = '';
  document.getElementById('logoFilled').style.display = 'none';
  document.getElementById('logoEmpty').style.display = 'flex';
  document.getElementById('logoFile').value = '';
  const alertEl = document.getElementById('base64AppleMailAlert');
  if (alertEl) alertEl.style.display = 'none';
  generatePreview();
}

function setupLogoDrop() {
  const zone = document.getElementById('logoZone');
  if (!zone) return;
  zone.ondragover = e => { e.preventDefault(); zone.style.borderColor = state.color; };
  zone.ondragleave = () => { zone.style.borderColor = ''; };
  zone.ondrop = e => {
    e.preventDefault();
    zone.style.borderColor = '';
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) handleLogo({ target: { files: [file] } });
  };
}

// ─── Avatar Upload & Auto-Compress (For Circular Headshots) ───────────────────
function handleAvatar(e) {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) { showToast('File too large – max 5MB'); return; }

  const reader = new FileReader();
  reader.onload = ev => {
    const img = new Image();
    img.onload = () => {
      // Downscale to 130x130 for profile avatar
      const canvas = document.createElement('canvas');
      const maxDim = 130;
      let w = img.width;
      let h = img.height;
      if (w > maxDim || h > maxDim) {
        const ratio = Math.min(maxDim / w, maxDim / h);
        w = Math.round(w * ratio);
        h = Math.round(h * ratio);
      }
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);

      let dataUrl = canvas.toDataURL('image/png');
      if (dataUrl.length > 5500) {
        dataUrl = canvas.toDataURL('image/jpeg', 0.8);
      }

      state.avatar = dataUrl;
      const emptyEl = document.getElementById('avatarEmpty');
      const filledEl = document.getElementById('avatarFilled');
      if (emptyEl) emptyEl.style.display = 'none';
      if (filledEl) {
        filledEl.style.display = 'flex';
        filledEl.style.alignItems = 'center';
      }
      const prev = document.getElementById('avatarPreview');
      if (prev) prev.src = state.avatar;
      generatePreview();
      showToast('Uploading headshot to cloud CDN...');
      uploadToCloudCdn(file, 'avatar');
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

function removeAvatar(e) {
  if (e) e.stopPropagation();
  state.avatar = '';
  const emptyEl = document.getElementById('avatarEmpty');
  const filledEl = document.getElementById('avatarFilled');
  if (filledEl) filledEl.style.display = 'none';
  if (emptyEl) emptyEl.style.display = 'flex';
  const fileInput = document.getElementById('avatarFile');
  if (fileInput) fileInput.value = '';
  generatePreview();
}

function setupAvatarDrop() {
  const zone = document.getElementById('avatarZone');
  if (!zone) return;
  zone.ondragover = e => { e.preventDefault(); zone.style.borderColor = state.color; };
  zone.ondragleave = () => { zone.style.borderColor = ''; };
  zone.ondrop = e => {
    e.preventDefault();
    zone.style.borderColor = '';
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) handleAvatar({ target: { files: [file] } });
  };
}

// ─── Toggles for Photo and Bottom Logo ────────────────────────────────────────
function togglePhotoHandler() {
  const el = document.getElementById('togglePhoto');
  state.showPhoto = el ? el.checked : true;
  const wrap = document.getElementById('photoSectionWrap');
  if (wrap) wrap.style.display = state.showPhoto ? 'block' : 'none';
  generatePreview();
}

function toggleBottomLogoHandler() {
  const el = document.getElementById('toggleBottomLogo');
  state.showBottomLogo = el ? el.checked : true;
  const wrap = document.getElementById('logoSectionWrap');
  if (wrap) wrap.style.display = state.showBottomLogo ? 'block' : 'none';
  generatePreview();
}


// ─── Helpers ──────────────────────────────────────────────────────────────────
const e = str => (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const cleanWeb = url => (url || '').replace(/^https?:\/\//, '').replace(/\/$/, '');

// ─── Font Stack & Premium Email-Safe Icons ─────────────────────────────────────
const FONT_STACK = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

// ─── Gmail-Safe Raster PNG Icons (Universal Email Client Support) ─────────────
const ICONS = {
  // WhatsApp
  wa: '<img src="https://www.canford.au/wp-content/uploads/2026/10/canford-icon-mobile.png" width="15" height="15" alt="WhatsApp" style="display:inline-block;vertical-align:middle;border:0;width:15px;height:15px;" />',

  // Discovery Call / Calendar outline (Clean PNG)
  cal: '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACbklEQVR4AexWsXLTQBDdVaGkADq+ApjJINLgxqYGGkxKOtNn+A4mPekog2mAGrsxTRCTGeAr6EiKRIU2+yytspbOsSZ2Jil8c0+3t/vu7bNmbuSIbni0NrDde/UAWOQXHGARz+qtDEAwp+gPgNgO11fUwAEQ1+uhfSsDInzfDvvYcrb6mo+tHlrnGuh0Xt7dftZ/+qTb7+rBLYXNLeRCUEKDBw1oaS04GwZATnr9D6fxxv9ceCLMI8WenUasQC6EBg8a0IImtE3H1hkDICh5RMQDWvngAbTRw0vPGDiN4/daTBREwp9E5AWL9BS705w+ECuQC6HBgwa09ChmUvZAPEVloHBW/nJtno4Pdn6Nh99+jodjZR4pbB4hF4ISGjxopKp1YYIHRS9l66wMZBvxI91Pp1D+cRqUD2b5V4bkY8vZ6ms+Rt1r+l6VAckpBhHQ5AlWw+Ho89+I8ocAYsvXV9TAARD7utes9fK0Km5cNdxrIHT9fA4cwOcQq7K/orotphorAv8U5j1F6Jotk6uuqO8VNOAJ1x0HDbDIriJ0zZbJVVfU/6igASXMvWqh69cmB01FY84z0CBeV2JtYP0G1m/g9rwBjiizu54T3bF4VavX9L2qNxCfZb+tGVP0hlY82Gn6XpWByeTLMZHsEwbL66S7c/C423+OT+kygEaiWqSakEaPolexqwxgu5ll73RNFYQDzPxVin/FV/4MQwNaVIy07FHs9DljAM42s7MeXGptxVP2oY0eXnjGAAogpKPhWyXfi1g6y36WoQEtaEIbPTwaBqwI8uH34Y82n9rLONCAlunW17kG6sSr7hedOwcAAP//Gp0LsQAAAAZJREFUAwCorkhfLi+jhgAAAABJRU5ErkJggg==" width="15" height="15" alt="Calendar" style="display:inline-block;vertical-align:middle;border:0;width:15px;height:15px;" />',

  // Telephone handset
  tel: '<img src="https://www.canford.au/wp-content/uploads/2026/10/canford-icon-phone.png" width="15" height="15" alt="Tel" style="display:inline-block;vertical-align:middle;border:0;width:15px;height:15px;" />',

  // Mobile / Smartphone
  mob: '<img src="https://www.canford.au/wp-content/uploads/2026/10/canford-icon-mobile.png" width="15" height="15" alt="Mobile" style="display:inline-block;vertical-align:middle;border:0;width:15px;height:15px;" />',

  // Fax outline (Clean PNG)
  fax: '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACAUlEQVR4AexXvUrDUBQ+kYJDCxVxFKFv0E10su+gu0iddFD7M0pxbFO71MniC+g76KS49Q0K4ihCoR0Eafy+mx8TQpNcTdCh5Zzcc8899/u+nCZNuiR//Pm/AvZPeivVemcnDSfWvEbP7UAu91nGpvs03MECVNjmCgiXZpNJKuAU9BVN5x5sibakAoYDs/Gg46AdwmMtqYBYoJ8WhAS0Wq2lg3pnC4C8CDEoK+veDdgV2E9MYiMfsICAw3rn7HWSf0fyEVU9uGuMde8I7vH2E5PY5HCTHJHnIMIFS6SLWRGelRXJQS6XQAlga7Bw7iRHYhl7iHWv+uh6G3MEXCEXORkrAS+T/CYm9plbRnPQrd/pXPGJaoEpwAYPrehwihKAwzKzyg3rTY2/PFQb7SN6AMaH7XJiDJSkMlHEltHHGfdVHIGaiYAIvtBSJgIGneaVGNYxXcUh2u9EJgIIT2I64yjPTEAUqX9tIWDRgUUHVAdmIh/erWEZa16cduDDdjmVgI3C9BlcY7jg16tdrZm7um9AsfXAJLbYn7HDaT8N8WyeGSIX9pqUUHiLWPcNKLresIhZAq6Qi5yMVQcYXJuNSyzUENudQJCBjclBLhfbE8AEF9YL01V8P9uYV9J0YhKbHMD1LCCAWbbmxmw8JXrL0fivQExik8PvIQH+xTTiOIwvAAAA//+au8WPAAAABklEQVQDAMO/iFCEqdAcAAAAAElFTkSuQmCC" width="15" height="15" alt="Fax" style="display:inline-block;vertical-align:middle;border:0;width:15px;height:15px;" />',

  // Mail envelope (Clean PNG)
  mail: '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACgUlEQVR4AexWv2sUQRh9W0gUglWwsBAQG4sU4kUkgkUqG0FES20E77+gjeAXeGIRLBS58v4B87mZeXN3c7eX280lhTcfu9nb2e+9ee/N7iV64tT4k2ugXp8y5k2v6b59V2N41Tj/dF0D/f7X0/39p5+n00c14v1b5E6o8eHh82d5a32yroGdnS8vDg6ePZ9Ov2vIHzXi10a+eZjcCR0eNCgB54c14GzX18+0aN6e2tV1DXS7T56enj6/mU6/a0g/1YhvGfnmYXInbGy8f5jcAQ8a0KJ15+xRA9K+f7z9cT3q/H13dfV5d/eP3oH+1U1/P5V1Y6Y0/ZfO34F8C9KkK1gB44dJc3G+UQM35/3371+rE9733N9P34H2e8G21g6k6Vw+0/8K5EOY6tF/3b/b1U5W9/1X833fV/vR+t26Bvr9f6eXl7dfTafnGs1rjfjfkW8eJneCx8cPtKjx98818PNn748u4n88v9yO4j6ErkL35d7fP1Y3mZ7qSgXyLUx3m6sGuJt0u1d/dY7k/aM2fDk/7H1vXYA8xX+E3AknJz+1eF7UvDq3028uLt7d6B04P/8lff1/0Z8G+RC2tv5sJ/d44fGgQS08f5q1G2+wV1f/dLeZfG/d31dZ67F1AeQJ+dOg3A3yIbg3l980uOaX/k6T80oD6f0lUuK/6k540KCEmefhD2uAm7PzM+7D+XoT+p8/z7Wq8b11AehV0q0Fk+e+1jW475NfNWqfD6Y/Gq0H8iFszY85GzVwW/Nfrk1k5xYhXv2P/q7W/Xy9D0C8BqT0oXID7v1fK9uG/Xj99/8AAAD//w==" width="15" height="15" alt="Mail" style="display:inline-block;vertical-align:middle;border:0;width:15px;height:15px;" />'
};

function getPhoneLabel(type) {
  const t = (type || 'T').toUpperCase().trim();
  if (t === 'W' || t.includes('WHAT') || t.includes('WA')) return 'W';
  return 'T';
}

function setPhoneStyle(style) {
  state.phoneStyle = 'icon';
  generatePreview();
}

function phoneIconHtml(type, color) {
  const t = (type || 'T').toUpperCase();
  if (t === 'W' || t.includes('WHAT') || t.includes('WA')) return ICONS.wa;
  return ICONS.tel;
}

// ─── Build phone rows HTML (Always Clean Universal Icons) ─────────────────────
function phoneRowsHtml(linkColor) {
  const rows = state.phones.filter(p => p.number && p.number.trim());
  if (!rows.length) return '';

  return rows.map(p => {
    const isWa = p.type === 'W' || p.type.toLowerCase().includes('what');
    const isEmail = p.type === 'E' || p.type.toLowerCase().includes('email') || p.type.toLowerCase().includes('mail');
    const cleanNum = p.number.replace(/\s/g, '');
    let href = `tel:${cleanNum}`;
    if (isWa) {
      href = `https://wa.me/${p.number.replace(/[^0-9]/g, '')}`;
    } else if (isEmail) {
      href = `mailto:${p.number.trim()}`;
    }

    const icon = phoneIconHtml(p.type, linkColor);
    const prefixTd = `<td style="padding-right:6px;vertical-align:middle;line-height:1;">${icon}</td>`;

    return `
  <tr>
    <td style="padding:0 0 4px;font-size:12.5px;line-height:1.4;white-space:nowrap;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          ${prefixTd}
          <td style="vertical-align:middle;font-size:12.5px;font-family:${FONT_STACK};white-space:nowrap;">
            <a href="${e(href)}" target="${isWa ? '_blank' : '_self'}" style="color:#0f172a;text-decoration:none;font-weight:400;white-space:nowrap;">${e(p.number)}</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
  }).join('');
}

// ─── Initials fallback (when no logo) ────────────────────────────────────────
function initialsBox(color, shape = 'square', size = 68) {
  const letters = (state.name || state.company || '?').split(' ').map(w => w[0] || '').join('').slice(0, 2).toUpperCase();
  const radius = shape === 'circle' ? '50%' : (shape === 'rounded' ? '12px' : '6px');
  const border = shape === 'circle' ? `border:2px solid ${color};` : (shape === 'rounded' ? 'border:1px solid #e2e8f0;' : '');
  const bg = shape === 'rounded' ? '#f8fafc' : color;
  const textColor = shape === 'rounded' ? color : 'white';
  return `<table cellpadding="0" cellspacing="0" border="0" style="width:${size}px;height:${size}px;border-radius:${radius};background:${bg};${border}border-collapse:separate;"><tr><td align="center" valign="middle" style="color:${textColor};font-size:${Math.round(size * 0.36)}px;font-weight:700;letter-spacing:-0.5px;font-family:${FONT_STACK};line-height:1;text-align:center;">${letters}</td></tr></table>`;
}

// ─── Photo Element (Avatar or Initials fallback) ─────────────────────────────
function getPhotoImg(shape = 'square', size = 68) {
  const src = state.avatarUrl || state.avatar;
  if (src) {
    if (shape === 'circle') {
      return `<img src="${src}" alt="${e(state.name || state.company)}" width="${size}" height="${size}" border="0" style="display:block;width:${size}px;height:${size}px;border-radius:50%;object-fit:cover;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" />`;
    } else if (shape === 'rounded') {
      return `<img src="${src}" alt="${e(state.name || state.company)}" width="${size}" height="${size}" border="0" style="display:block;width:${size}px;height:${size}px;border-radius:10px;object-fit:cover;border:1px solid #e2e8f0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" />`;
    }
    return `<img src="${src}" alt="${e(state.name || state.company)}" width="${size}" height="${size}" border="0" style="display:block;width:${size}px;height:${size}px;border-radius:4px;object-fit:cover;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" />`;
  }
  return initialsBox(state.color, shape, size);
}

// ─── Company Logo & Tagline Helpers (Customizable Size) ─────────────────────
function updateLogoSize(val) {
  state.logoSize = parseInt(val, 10) || 135;
  const label = document.getElementById('logoSizeVal');
  if (label) label.textContent = `${state.logoSize}px`;
  generatePreview();
}



// Dedicated helper for Layout 4 (right side column logo & tagline)
function sideLogoHtml(forAppleMail = false) {
  if (!state.showBottomLogo) return '';
  let logoSrc = state.logoUrl;
  if (!logoSrc || logoSrc.startsWith('data:') || logoSrc.includes('nkLI3bf') || logoSrc.includes('nktJyxt') || logoSrc.includes('removebg') || logoSrc.includes('nkt0ZnS')) {
    logoSrc = 'https://www.canford.au/wp-content/uploads/2026/10/Canford_logo_Kuubiik_high_resolution_transparent_min_388px.png';
  }

  const parts = [];
  const maxW = state.logoSize || 140;
  const ratio = state.logoRatio || 3.0;
  const calcH = Math.max(16, Math.round(maxW / ratio));

  if (logoSrc) {
    const isWhiteBg = state.logoBgStyle === 'white';
    const imgBg = isWhiteBg ? 'background-color:#ffffff !important;' : '';
    const imgHtml = `<img src="${logoSrc}" alt="${e(state.company || 'Company')} logo" width="${maxW}" height="${calcH}" border="0" style="display:block;width:${maxW}px;max-width:${maxW}px;height:${calcH}px;margin:0 auto;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;${imgBg}" />`;

    let imgBlock = imgHtml;
    if (state.logoBgStyle === 'dark') {
      imgBlock = `<table cellpadding="0" cellspacing="0" border="0" bgcolor="#0f172a" style="background-color:#0f172a;border-radius:6px;border-collapse:collapse;margin:0 auto;"><tr><td bgcolor="#0f172a" align="center" style="background-color:#0f172a;padding:8px 14px;border-radius:6px;line-height:1;text-align:center;">${imgHtml}</td></tr></table>`;
    } else if (state.logoBgStyle === 'brand') {
      imgBlock = `<table cellpadding="0" cellspacing="0" border="0" bgcolor="${state.color}" style="background-color:${state.color};border-radius:6px;border-collapse:collapse;margin:0 auto;"><tr><td bgcolor="${state.color}" align="center" style="background-color:${state.color};padding:8px 14px;border-radius:6px;line-height:1;text-align:center;">${imgHtml}</td></tr></table>`;
    } else if (isWhiteBg) {
      imgBlock = `<table cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" class="sc-logo-box" style="background-color:#ffffff !important;border:1px solid #e2e8f0;border-radius:8px;border-collapse:collapse;margin:0 auto;box-shadow:0 1px 3px rgba(0,0,0,0.06);"><tr><td bgcolor="#ffffff" align="center" style="background-color:#ffffff !important;padding:7px 14px;border-radius:8px;line-height:1;text-align:center;">${imgHtml}</td></tr></table>`;
    }

    parts.push(`<tr><td style="padding:0 0 4px;text-align:center;line-height:1;">
      ${imgBlock}
    </td></tr>`);
  } else if (state.company) {
    parts.push(`<tr><td style="padding:0 0 3px;font-size:14.5px;font-weight:700;color:#0f172a;letter-spacing:-0.25px;font-family:${FONT_STACK};text-align:center;white-space:nowrap;">
      ${e(state.company)}
    </td></tr>`);
  }

  if (state.tagline) {
    const maxTagW = Math.max(140, maxW + 20);
    parts.push(`<tr><td style="padding:0;font-size:11px;color:#64748b;font-weight:400;letter-spacing:-0.1px;font-family:${FONT_STACK};line-height:1.3;text-align:center;max-width:${maxTagW}px;">
      ${e(state.tagline)}
    </td></tr>`);
  }

  if (!parts.length) return '';
  return parts.join('\n');
}

// ─── Detail block (address, phones, cta, website) ────────────────────────────
function detailBlock(color) {
  const parts = [];

  // Address
  if (state.address) {
    parts.push(`<tr><td style="padding:0 0 5px;font-size:12px;color:#64748b;font-family:${FONT_STACK};line-height:1.4;">${e(state.address)}</td></tr>`);
  }

  // Phones
  const pHtml = phoneRowsHtml(color);
  if (pHtml) {
    parts.push(`<tr><td style="padding:0 0 1px;">
  <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
    ${pHtml}
  </table>
</td></tr>`);
  }

  // Email (from dedicated field if not already included in phone rows)
  const emailAlreadyInPhones = state.phones && state.phones.some(p => p.number && (p.type === 'E' || (p.type || '').toUpperCase().includes('EMAIL') || (p.type || '').toUpperCase().includes('MAIL')));
  if (state.email && !emailAlreadyInPhones) {
    const prefixTd = `<td style="padding-right:6px;vertical-align:middle;line-height:1;">${ICONS.mail}</td>`;

    parts.push(`<tr><td style="padding:0 0 4px;font-size:12.5px;line-height:1.4;white-space:nowrap;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          ${prefixTd}
          <td style="vertical-align:middle;font-size:12.5px;font-family:${FONT_STACK};white-space:nowrap;">
            <a href="mailto:${e(state.email)}" style="color:#0f172a;text-decoration:none;font-weight:400;white-space:nowrap;">${e(state.email)}</a>
          </td>
        </tr>
      </table>
    </td></tr>`);
  }

  // Meeting / Discovery Call CTA (Matches screenshot styling)
  if (state.ctaText) {
    const ctaHref = state.ctaUrl ? (state.ctaUrl.startsWith('http') ? state.ctaUrl : 'https://' + state.ctaUrl) : '#';
    parts.push(`<tr><td style="padding:0 0 6px;font-size:12.5px;line-height:1.4;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td style="padding-right:6px;vertical-align:middle;line-height:1;">
            ${ICONS.cal}
          </td>
          <td style="vertical-align:middle;font-size:12.5px;font-family:${FONT_STACK};">
            <a href="${e(ctaHref)}" target="_blank" style="color:#0f172a;text-decoration:underline;text-underline-offset:2px;font-weight:400;">${e(state.ctaText)}</a>
          </td>
        </tr>
      </table>
    </td></tr>`);
  }

  // Website
  if (state.website) {
    const display = cleanWeb(state.website);
    const href = state.website.startsWith('http') ? state.website : 'https://' + state.website;
    parts.push(`<tr><td style="padding:1px 0 0;font-size:12.5px;font-family:${FONT_STACK};white-space:nowrap;"><a href="${e(href)}" target="_blank" style="color:#203932;font-weight:600;text-decoration:none;letter-spacing:-0.1px;white-space:nowrap;">${e(display)}</a></td></tr>`);
  }

  return parts.join('\n');
}

// ─── Name / title / company header (Premium Inter Typography) ─────────────────
function nameBlock(nameFontSize = 15) {
  const rows = [];
  if (state.name) {
    rows.push(`<tr><td style="padding:0 0 2px;font-size:${nameFontSize}px;font-weight:700;color:#0f172a;letter-spacing:-0.25px;font-family:${FONT_STACK};line-height:1.25;white-space:nowrap;">${e(state.name)}</td></tr>`);
  }
  if (state.title) {
    rows.push(`<tr><td style="padding:0 0 7px;font-size:12.5px;font-weight:400;color:#475569;letter-spacing:-0.1px;font-family:${FONT_STACK};line-height:1.35;white-space:nowrap;">${e(state.title)}</td></tr>`);
  }
  if (state.company && !state.showBottomLogo) {
    rows.push(`<tr><td style="padding:0 0 6px;font-size:13px;font-weight:600;color:#334155;letter-spacing:-0.2px;font-family:${FONT_STACK};white-space:nowrap;">${e(state.company)}</td></tr>`);
  }
  return rows.join('\n');
}

// ═════════════════════════════════════════════════════════════════════════════
// BUILD SIGNATURE HTML (Executive Row Layout: Photo Left · Details · Logo Right)
// ═════════════════════════════════════════════════════════════════════════════
function buildSig(forExport = false, forAppleMail = false) {
  const c = state.color;
  const db = detailBlock(c);
  const nb = nameBlock(15);
  const sLogo = sideLogoHtml(forAppleMail);

  const photoHtml = state.showPhoto ? `
  <td style="vertical-align:middle;padding-right:16px;border-right:1.5px solid #cbd5e1;">
    ${getPhotoImg('circle', 64)}
  </td>` : '';

  const hasLogo = state.showBottomLogo && sLogo;
  const dividerBorder = hasLogo ? 'border-right:1.5px solid #cbd5e1;' : '';
  const padLeft = state.showPhoto ? 'padding-left:16px;' : '';
  const padRight = hasLogo ? 'padding-right:18px;' : '';

  const logoHtml = hasLogo ? `
  <td style="vertical-align:middle;padding-left:18px;text-align:center;white-space:nowrap;">
    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:${FONT_STACK};margin:0 auto;">
      ${sLogo}
    </table>
  </td>` : '';

  const html = `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:${FONT_STACK};">
<tr>
  ${photoHtml}
  <td style="vertical-align:middle;${padLeft}${padRight}${dividerBorder}white-space:nowrap;">
    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:${FONT_STACK};">
      ${nb}
      ${db}
    </table>
  </td>
  ${logoHtml}
</tr>
</table>`;

  if (forExport) {
    return `<!-- Email Signature – SignatureCraft -->
<!-- Formatted for Gmail, Apple Mail & Outlook -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

${html}

<!-- End of Signature -->`;
  }
  return html;
}

// ─── Custom Editable HTML State ──────────────────────────────────────────────
let isCustomHtmlEdited = false;
let customHtml = '';
let isDirectEditMode = false;

function updateCustomBadge(show) {
  const badge = document.getElementById('customBadge');
  const resetBtn = document.getElementById('btnResetHtml');
  if (badge) badge.style.display = show ? 'inline-block' : 'none';
  if (resetBtn) resetBtn.style.display = show ? 'inline-flex' : 'none';
}

function updateSizeBadge(len) {
  const badge = document.getElementById('sizeBadge');
  if (!badge) return;
  if (len <= 7500) {
    badge.className = 'size-badge safe';
    badge.textContent = `${len.toLocaleString()} / 10,000 chars (Gmail Safe)`;
  } else if (len <= 10000) {
    badge.className = 'size-badge warn';
    badge.textContent = `${len.toLocaleString()} / 10,000 chars (Near Gmail limit)`;
  } else {
    badge.className = 'size-badge danger';
    badge.textContent = `${len.toLocaleString()} / 10,000 chars (Exceeds Gmail limit - Use Image URL)`;
  }
}

function setupCodeEditor() {
  const editor = document.getElementById('codeEditor');
  if (!editor) return;

  let debounceTimer = null;
  editor.addEventListener('input', () => {
    isCustomHtmlEdited = true;
    customHtml = editor.value;
    updateCustomBadge(true);

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const wrap = document.getElementById('sigPreview');
      if (wrap) wrap.innerHTML = customHtml;
      updateSizeBadge(customHtml.length);
    }, 250);
  });
}

function applyCustomHtml(showToastMsg = true) {
  const editor = document.getElementById('codeEditor');
  if (!editor) return;
  customHtml = editor.value;
  isCustomHtmlEdited = true;
  updateCustomBadge(true);

  const wrap = document.getElementById('sigPreview');
  if (wrap) {
    wrap.innerHTML = customHtml;
  }
  updateSizeBadge(customHtml.length);
  if (showToastMsg) {
    showToast('Custom HTML applied to preview and copy buttons.');
  }
}

function resetHtmlToGenerated() {
  isCustomHtmlEdited = false;
  customHtml = '';
  updateCustomBadge(false);
  generatePreview(true);
  showToast('Reset back to form-generated signature.');
}

function toggleDirectEdit() {
  const wrap = document.getElementById('sigPreview');
  const btn = document.getElementById('btnDirectEdit');
  if (!wrap) return;

  isDirectEditMode = !isDirectEditMode;
  wrap.contentEditable = isDirectEditMode ? 'true' : 'false';
  wrap.classList.toggle('direct-editing', isDirectEditMode);
  if (btn) btn.classList.toggle('active', isDirectEditMode);

  if (isDirectEditMode) {
    showToast('Direct edit enabled: Click anywhere on signature text to type.');
    wrap.focus();
    wrap.oninput = () => {
      isCustomHtmlEdited = true;
      customHtml = wrap.innerHTML;
      const editor = document.getElementById('codeEditor');
      if (editor) editor.value = customHtml;
      updateCustomBadge(true);
      updateSizeBadge(customHtml.length);
    };
  } else {
    showToast('Direct text edits saved.');
    wrap.oninput = null;
  }
}

// ─── Preview ──────────────────────────────────────────────────────────────────
function generatePreview(force = false) {
  const wrap = document.getElementById('sigPreview');
  const editor = document.getElementById('codeEditor');
  const hasData = state.name || state.company || state.logo || state.logoUrl || state.avatar || state.avatarUrl || state.phones.some(p => p.number);

  if (!hasData) {
    wrap.innerHTML = `<div class="sig-empty">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.25"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      <p>Fill in your details to preview your signature</p>
    </div>`;
    if (editor) editor.value = '<!-- Fill in your details to generate HTML -->';
    updateSizeBadge(0);
    return;
  }

  // If user has custom-edited the HTML and not forcing a reset, keep custom edits
  if (isCustomHtmlEdited && customHtml && !force) {
    wrap.innerHTML = customHtml;
    if (editor) editor.value = customHtml;
    updateSizeBadge(customHtml.length);
    updateCustomBadge(true);
    return;
  }

  // Normal form-driven generation
  isCustomHtmlEdited = false;
  customHtml = '';
  updateCustomBadge(false);

  const sigHtml = buildSig(false);
  const code = buildSig(true);
  wrap.innerHTML = sigHtml;
  if (editor) editor.value = code;
  const legacyText = document.getElementById('codeText');
  if (legacyText) legacyText.textContent = code;

  updateSizeBadge(code.length);

  // Update email header mockup
  const initials = (state.name || state.company || '?').split(' ').map(w => w[0] || '').join('').slice(0, 2).toUpperCase();
  const av = document.getElementById('emailAvatar');
  if (av) { av.textContent = initials; av.style.background = state.color; }
  const sn = document.getElementById('emailSender');
  if (sn) sn.textContent = state.name || state.company || 'Your Name';
  const sa = document.getElementById('emailAddr');
  if (sa) sa.textContent = state.website ? cleanWeb(state.website) : 'your@company.com';
}

// ─── Direct 1-Click Copy for Gmail & Apple Mail (Formatted Rich-Text) ─────────
function copySignatureOneClick() {
  const previewEl = document.getElementById('sigPreview');
  if (!previewEl || (!state.name && !state.company)) {
    showToast('Please fill in your details first.');
    return;
  }

  // 1. Select the live rendered signature DOM node
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(previewEl);
  selection.removeAllRanges();
  selection.addRange(range);

  // 2. Perform native execCommand('copy') WITHOUT e.preventDefault()
  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch (err) {
    console.warn('execCommand copy failed', err);
  }

  selection.removeAllRanges();

  if (copied) {
    showToast('Copied to clipboard! Ready to paste into Gmail or Apple Mail.');
  } else {
    showToast('Could not copy automatically. Click "Open in Tab" and press Cmd+C.');
  }

  // Visual feedback on all copy buttons
  ['btnOneClickCopy', 'btnTopCopy', 'btnGmail', 'btnAppleCopy'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      const old = btn.innerHTML;
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
      setTimeout(() => { btn.innerHTML = old; }, 2500);
    }
  });
}
const copyForGmail = copySignatureOneClick;

function copyForAppleMail() {
  if (!state.name && !state.company) {
    showToast('Please fill in your details first.');
    return;
  }

  // 1. Generate signature with embedded base64 logo for Apple Mail (or custom edited HTML)
  const sigHtml = (isCustomHtmlEdited && customHtml) ? customHtml : buildSig(false, true);

  // 2. Render into an in-viewport hidden container so WebKit/Blink computes layout & image attachments
  const tempEl = document.createElement('div');
  tempEl.style.position = 'fixed';
  tempEl.style.left = '0';
  tempEl.style.top = '0';
  tempEl.style.width = '650px';
  tempEl.style.opacity = '0.01';
  tempEl.style.pointerEvents = 'none';
  tempEl.style.zIndex = '-9999';
  tempEl.innerHTML = sigHtml;
  document.body.appendChild(tempEl);

  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(tempEl);
  selection.removeAllRanges();
  selection.addRange(range);

  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch (err) {
    console.warn('execCommand copy failed', err);
  }

  if (navigator.clipboard && window.ClipboardItem) {
    try {
      const htmlBlob = new Blob([sigHtml], { type: 'text/html' });
      const textBlob = new Blob([tempEl.innerText || ''], { type: 'text/plain' });
      navigator.clipboard.write([
        new ClipboardItem({
          'text/html': htmlBlob,
          'text/plain': textBlob
        })
      ]).then(() => { copied = true; }).catch(() => { });
    } catch (_) { }
  }

  selection.removeAllRanges();
  setTimeout(() => {
    if (tempEl.parentNode) document.body.removeChild(tempEl);
  }, 400);

  if (copied) {
    showToast('Copied for Apple Mail. Press Cmd+V in Apple Mail Signatures.');
  } else {
    showToast('Could not copy automatically. Click "Open in Tab" and press Cmd+C.');
  }

  // Visual feedback on all Apple copy buttons
  ['btnAppleCopy', 'btnTopAppleCopy'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      const old = btn.innerHTML;
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
      setTimeout(() => { btn.innerHTML = old; }, 2500);
    }
  });
}

// ─── Copy Logo Image Only (Binary PNG to Clipboard) ─────────────────────────
async function copyLogoImageOnly() {
  try {
    let blob;
    const logoToFetch = (state.logoUrl && !state.logoUrl.startsWith('data:')) ? state.logoUrl : 'https://www.canford.au/wp-content/uploads/2026/10/Canford_logo_Kuubiik_high_resolution_transparent_min_388px.png';
    const res = await fetch(logoToFetch);
    blob = await res.blob();
    await navigator.clipboard.write([
      new ClipboardItem({ 'image/png': blob })
    ]);
    showToast('White-backed logo copied! In Apple Mail, click the empty box and press Cmd+V.');
    ['btnCopyLogoOnly', 'btnTopLogoOnly'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        const old = btn.innerHTML;
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Image Copied!';
        setTimeout(() => { btn.innerHTML = old; }, 2500);
      }
    });
  } catch (err) {
    console.error(err);
    showToast('Drag the logo file from Downloads directly into the empty box.');
  }
}

// ─── Copy HTML Code ───────────────────────────────────────────────────────────
function copyCode() {
  const editor = document.getElementById('codeEditor');
  const code = (editor && editor.value && !editor.value.includes('<!-- Fill in')) ? editor.value : ((isCustomHtmlEdited && customHtml) ? customHtml : buildSig(true));
  if (!code || code.includes('Fill in your')) { showToast('Please fill in your details first.'); return; }

  const copy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).then(onCopied).catch(fallback);
    } else { fallback(); }
  };
  const fallback = () => {
    const ta = document.createElement('textarea');
    ta.value = code;
    ta.style.cssText = 'position:fixed;opacity:0;';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy');
    document.body.removeChild(ta); onCopied();
  };
  copy();
}

function onCopied() {
  const btn = document.getElementById('copyBtn');
  btn.classList.add('copied');
  btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
  showToast('HTML copied to clipboard.');
  setTimeout(() => {
    btn.classList.remove('copied');
    btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy HTML`;
  }, 3000);
}

// ─── Toast ────────────────────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 3500);
}

// ─── Email Client Guides ──────────────────────────────────────────────────────
const GUIDES = {
  gmail: {
    title: 'Add to Gmail Signature',
    subtitle: 'Fixing "Signature is too long" & Easy 1-Click Setup',
    steps: [
      {
        heading: 'Why did Gmail say "The signature is too long"?',
        detail: 'Gmail has a strict <strong>10,000 character limit</strong>. If you uploaded a logo file directly, it became a massive Base64 text string exceeding the limit.<br/><br/><strong>Fix:</strong> Use our <strong>"Image URL"</strong> tab (paste your website logo link) or our auto-compressed file uploader!',
      },
      {
        heading: '1. Click "Copy for Gmail"',
        detail: 'Click the <strong>"Copy for Gmail"</strong> button. This copies the formatted signature directly to your clipboard.',
      },
      {
        heading: '2. Open Gmail Settings',
        detail: 'Go to <strong>gmail.com</strong> → click the Settings gear (top right) → click <strong>"See all settings"</strong>.',
        path: 'Settings icon  →  See all settings',
      },
      {
        heading: '3. Scroll to "Signature"',
        detail: 'On the <strong>General</strong> tab, scroll down to the <strong>Signature</strong> section.',
        path: 'General tab  →  Signature section',
      },
      {
        heading: '4. Paste your signature',
        detail: 'Click <strong>+ Create new</strong>, enter a name, click inside the box, and press <strong>Ctrl+V</strong> (or Cmd+V on Mac) to paste.',
      },
      {
        heading: '5. Save Changes',
        detail: 'Scroll to the very bottom of Gmail Settings and click <strong>"Save Changes"</strong>. Because your signature is now under the 10,000 character limit, it will save instantly without error!',
        path: 'Scroll to bottom  →  Save Changes',
      },
    ],
    note: '<strong>Pro Tip:</strong> Pasting your company logo web URL (e.g., https://yoursite.com/logo.png) is the best practice for Gmail because it uses only ~40 characters!',
    action: 'Copy for Gmail Now',
    actionFn: 'copyForGmail()',
  },

  apple: {
    title: 'Apple Mail Signature Guide & Setup',
    subtitle: 'Fix unformatted plain text and ensure logo & icons display perfectly.',
    steps: [
      {
        heading: '1. Click "Copy for Apple Mail"',
        detail: 'Click <strong>"Copy for Apple Mail"</strong>. This generates native macOS Cocoa rich-text & webarchive on your clipboard.',
      },
      {
        heading: '2. UNCHECK "Always match my default message font"',
        detail: 'In Apple Mail <strong>Settings → Signatures</strong>, look at the bottom right and <strong>UNCHECK</strong> <em>"Always match my default message font (Helvetica 12)"</em>.<br/><span style="color:#ef4444;font-weight:600;">If this box is checked, Apple Mail strips ALL colors, fonts, tables, and images into plain text!</span>',
      },
      {
        heading: '3. Paste your signature',
        detail: 'Click into the signature preview box on the right, press <strong>Cmd+A</strong> then <strong>Delete</strong> to clear any plain text, then press <strong>Cmd+V</strong> to paste.',
      },
      {
        heading: '4. Drag to your Email Account',
        detail: 'In the left column, if your signature is under <em>"All Signatures"</em>, click and <strong>drag it onto your email account</strong> (e.g. <em>Google</em>).',
      },
      {
        heading: '5. Set "Choose Signature" dropdown',
        detail: 'Click your email account in the left column. At the bottom dropdown, change <strong>"Choose Signature: None"</strong> to your signature name.',
      },
    ],
    note: '<strong>Troubleshooting:</strong> If formatting was lost: 1) "Always match my default message font" was checked. 2) The signature was not dragged to your account in the left column.',
    action: 'Copy for Apple Mail Now',
    actionFn: 'copyForAppleMail()',
  },
};

function openClientGuide(client) {
  const guide = GUIDES[client];
  if (!guide) return;

  const stepsHtml = guide.steps.map((s, i) => `
    <div class="guide-step">
      <div class="guide-step-num">${i + 1}</div>
      <div class="guide-step-body">
        <h4>${s.heading}</h4>
        <p>${s.detail}</p>
        ${s.path ? `<span class="path">${s.path}</span>` : ''}
      </div>
    </div>
  `).join('');

  document.getElementById('modalContent').innerHTML = `
    <h2 class="guide-title">${guide.title}</h2>
    <p class="guide-subtitle">${guide.subtitle}</p>
    ${stepsHtml}
    <div class="guide-note">${guide.note}</div>
    <button class="guide-action-btn" onclick="${guide.actionFn};document.getElementById('guideModal').classList.remove('open')">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      ${guide.action}
    </button>
  `;

  document.getElementById('guideModal').classList.add('open');
}

function closeModal(e) {
  if (e.target === document.getElementById('guideModal')) {
    document.getElementById('guideModal').classList.remove('open');
  }
}

// ─── Open Rendered Preview (for Gmail / Apple Mail copy-paste) ────────────────
function openRenderedPreview() {
  const sigGmail = (isCustomHtmlEdited && customHtml) ? customHtml : buildSig(false, false);
  const sigApple = (isCustomHtmlEdited && customHtml) ? customHtml : buildSig(false, true);
  if ((!sigGmail && !sigApple) || (!state.name && !state.company)) {
    showToast('Please fill in your details first.');
    return;
  }

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Your Email Signature – SignatureCraft</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background: #f8fafc;
      margin: 0;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      padding: 30px;
      max-width: 680px;
      width: 100%;
    }
    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      padding-bottom: 18px;
      border-bottom: 1px solid #f1f5f9;
      flex-wrap: wrap;
      gap: 12px;
    }
    .header-bar h2 {
      margin: 0;
      font-size: 18px;
      color: #0f172a;
    }
    .actions-group {
      display: flex;
      gap: 10px;
    }
    .copy-btn {
      background: #0d9488;
      color: #ffffff;
      border: none;
      padding: 10px 18px;
      border-radius: 8px;
      font-size: 13.5px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }
    .copy-btn:hover { background: #0f766e; }
    .copy-btn.apple-btn {
      background: #0f172a;
    }
    .copy-btn.apple-btn:hover { background: #1e293b; }
    .sig-container {
      background: #ffffff;
      border: 1px dashed #cbd5e1;
      border-radius: 8px;
      padding: 24px;
      display: inline-block;
    }
    .toast-msg {
      position: fixed;
      bottom: 24px;
      background: #0f172a;
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 13px;
      opacity: 0;
      transition: opacity 0.3s;
      pointer-events: none;
    }
    .toast-msg.show { opacity: 1; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header-bar">
      <h2>Your Formatted Signature</h2>
      <div class="actions-group">
        <button class="copy-btn" id="btnCopyGmail">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Copy for Gmail
        </button>
        <button class="copy-btn apple-btn" id="btnCopyApple">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg> Copy for Apple Mail
        </button>
      </div>
    </div>
    <div class="sig-container" id="sigBox">
      ${sigApple}
    </div>
    <div style="display:none;" id="sigGmailHidden">${sigGmail}</div>
  </div>
  <div class="toast-msg" id="toast">Copied to clipboard!</div>

  <script>
    function copyFromBox(el, msg) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(el);
      selection.removeAllRanges();
      selection.addRange(range);
      try {
        document.execCommand('copy');
        selection.removeAllRanges();
        const t = document.getElementById('toast');
        t.textContent = msg;
        t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 3000);
      } catch (err) {
        alert('Please select the signature and press Cmd+C.');
      }
    }

    document.getElementById('btnCopyApple').addEventListener('click', () => {
      copyFromBox(document.getElementById('sigBox'), 'Copied for Apple Mail! Press Cmd+V in Signatures.');
    });

    document.getElementById('btnCopyGmail').addEventListener('click', () => {
      const gBox = document.getElementById('sigGmailHidden');
      gBox.style.display = 'block';
      copyFromBox(gBox, 'Copied for Gmail! Press Ctrl+V / Cmd+V in Gmail.');
      gBox.style.display = 'none';
    });
  </script>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}
