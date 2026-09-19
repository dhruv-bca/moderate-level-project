/**
 * ============================================================================
 * VESTOR INNOVATORS - CONTACT US & DIRECT CAPTAIN DISPATCH SCRIPT
 * Direct Transmission via WhatsApp & Email to Captain Chhotu Kumar
 * ============================================================================
 */

const CAPTAIN_CONFIG = {
  name: 'Chhotu Kumar',
  role: 'League Captain',
  phone: '+91 90066 80736',
  phoneRaw: '919006680736',
  email: 'dhruvraj10370@gmail.com'
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initContactDispatch();
});

/* --------------------------------------------------------------------------
   1. Theme Synchronization (Shares vi_theme with Gallery)
   -------------------------------------------------------------------------- */
function initTheme() {
  const toggleCheckbox = document.getElementById('darkmode-toggle');
  const savedTheme = localStorage.getItem('vi_theme') || 'dark';

  // Apply theme to document
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Synchronize checkbox state (checked = dark mode)
  if (toggleCheckbox) {
    toggleCheckbox.checked = (savedTheme === 'dark');

    toggleCheckbox.addEventListener('change', (e) => {
      const newTheme = e.target.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('vi_theme', newTheme);
      showToast(`Theme switched to ${newTheme === 'dark' ? 'Obsidian Dark' : 'Liquid Light'} Mode`);
    });
  }
}

/* --------------------------------------------------------------------------
   2. Contact Transmission Console (WhatsApp & Email Dual Dispatch)
   -------------------------------------------------------------------------- */
function getFormData() {
  const name = document.getElementById('senderName') ? document.getElementById('senderName').value.trim() : '';
  const email = document.getElementById('senderEmail') ? document.getElementById('senderEmail').value.trim() : '';
  const phone = document.getElementById('senderPhone') ? document.getElementById('senderPhone').value.trim() : '';
  const roll = document.getElementById('senderRoll') ? document.getElementById('senderRoll').value.trim() : '';
  const categorySelect = document.getElementById('inquiryCategory');
  const category = categorySelect ? categorySelect.value : 'general';
  const categoryLabel = categorySelect && categorySelect.options[categorySelect.selectedIndex] 
    ? categorySelect.options[categorySelect.selectedIndex].text 
    : 'General Campus Inquiry';
  const subject = document.getElementById('senderSubject') ? document.getElementById('senderSubject').value.trim() : '';
  const message = document.getElementById('senderMessage') ? document.getElementById('senderMessage').value.trim() : '';

  return { name, email, phone, roll, category, categoryLabel, subject, message };
}

function validateFormData(data) {
  if (!data.name) {
    showToast('Please enter your full name');
    const el = document.getElementById('senderName');
    if (el) el.focus();
    return false;
  }

  if (!data.email || !isValidEmail(data.email)) {
    showToast('Please enter a valid email address');
    const el = document.getElementById('senderEmail');
    if (el) el.focus();
    return false;
  }

  if (!data.subject) {
    showToast('Please provide a subject for your dispatch');
    const el = document.getElementById('senderSubject');
    if (el) el.focus();
    return false;
  }

  if (!data.message) {
    showToast('Please detail your dispatch message');
    const el = document.getElementById('senderMessage');
    if (el) el.focus();
    return false;
  }

  return true;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function saveDispatchRecord(data, targetChannel) {
  const dispatchId = 'DISPATCH-' + Math.floor(100000 + Math.random() * 900000);
  const record = {
    id: dispatchId,
    timestamp: new Date().toISOString(),
    channel: targetChannel,
    ...data
  };

  try {
    const savedInquiries = JSON.parse(localStorage.getItem('vi_contact_inquiries') || '[]');
    savedInquiries.unshift(record);
    localStorage.setItem('vi_contact_inquiries', JSON.stringify(savedInquiries));
  } catch (err) {
    console.warn('LocalStorage error:', err);
  }

  return dispatchId;
}

function displaySuccessBanner(dispatchId, channelName) {
  const feedbackBanner = document.getElementById('formFeedback');
  if (!feedbackBanner) return;

  feedbackBanner.className = 'form-feedback-banner success';
  feedbackBanner.innerHTML = `
    <span class="material-symbols-outlined" style="font-size: 24px; color: #10b981;">check_circle</span>
    <div>
      <strong>Dispatch Routed via ${channelName} [${dispatchId}]</strong>
      <p style="margin: 0.25rem 0 0 0; font-size: 0.84rem; opacity: 0.95;">
        Your transmission has been formatted and directed to Captain Chhotu Kumar (${CAPTAIN_CONFIG.phone} • ${CAPTAIN_CONFIG.email}).
      </p>
    </div>
  `;
  feedbackBanner.style.display = 'flex';
  feedbackBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function initContactDispatch() {
  const whatsAppBtn = document.getElementById('sendWhatsAppBtn');
  const emailBtn = document.getElementById('sendEmailBtn');

  // WhatsApp Dispatch Handler
  if (whatsAppBtn) {
    whatsAppBtn.addEventListener('click', () => {
      const data = getFormData();
      if (!validateFormData(data)) return;

      const dispatchId = saveDispatchRecord(data, 'WhatsApp');

      // Compose clean, structured WhatsApp text message
      let waText = `*VESTOR INNOVATORS - DISPATCH TO CAPTAIN*\n`;
      waText += `━━━━━━━━━━━━━━━━━━━━\n`;
      waText += `👤 *Sender:* ${data.name}\n`;
      waText += `📧 *Email:* ${data.email}\n`;
      if (data.phone) waText += `📞 *Phone:* ${data.phone}\n`;
      if (data.roll) waText += `🎓 *Roll/Affiliation:* ${data.roll}\n`;
      waText += `📂 *Category:* ${data.categoryLabel}\n`;
      waText += `📌 *Subject:* ${data.subject}\n`;
      waText += `━━━━━━━━━━━━━━━━━━━━\n`;
      waText += `📝 *Message:*\n${data.message}\n`;

      const waUrl = `https://wa.me/${CAPTAIN_CONFIG.phoneRaw}?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank');

      displaySuccessBanner(dispatchId, 'WhatsApp');
      showToast(`Opening WhatsApp chat with Captain Chhotu Kumar (${CAPTAIN_CONFIG.phone})...`);
    });
  }

  // Email Dispatch Handler
  if (emailBtn) {
    emailBtn.addEventListener('click', () => {
      const data = getFormData();
      if (!validateFormData(data)) return;

      const dispatchId = saveDispatchRecord(data, 'Email');

      const mailSubject = `[Vestor Innovators - ${data.categoryLabel}] ${data.subject}`;
      let mailBody = `VESTOR INNOVATORS - TRANSMISSION TO CAPTAIN\n`;
      mailBody += `====================================\n`;
      mailBody += `From: ${data.name}\n`;
      mailBody += `Email: ${data.email}\n`;
      if (data.phone) mailBody += `Phone: ${data.phone}\n`;
      if (data.roll) mailBody += `Roll / Affiliation: ${data.roll}\n`;
      mailBody += `Category: ${data.categoryLabel}\n`;
      mailBody += `Subject: ${data.subject}\n`;
      mailBody += `====================================\n\n`;
      mailBody += `Message:\n${data.message}\n`;

      const mailtoUrl = `mailto:${CAPTAIN_CONFIG.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
      window.location.href = mailtoUrl;

      displaySuccessBanner(dispatchId, 'Email');
      showToast(`Opening email composer to Captain Chhotu Kumar (${CAPTAIN_CONFIG.email})...`);
    });
  }

  // Direct Mail to Captain Spotlight Button
  const directMailBtn = document.getElementById('directCaptainMailBtn');
  if (directMailBtn) {
    directMailBtn.addEventListener('click', () => {
      showToast(`Directing transmission to Captain Chhotu Kumar (${CAPTAIN_CONFIG.email})...`);
    });
  }
}

/* --------------------------------------------------------------------------
   3. Toast Notification Feedback
   -------------------------------------------------------------------------- */
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="material-symbols-outlined" style="font-size: 17px; color: var(--accent-cyan);">info</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) toast.parentNode.removeChild(toast);
  }, 3200);
}
