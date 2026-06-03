// SET DATE — use admin-set date or today
const dateEl = document.getElementById('currentDate');
if (dateEl) {
    const saved = localStorage.getItem('clientDate');
    dateEl.textContent = saved || new Date().toLocaleDateString('en-IN', {
        day: 'numeric', month: 'long', year: 'numeric'
    });
}

// SET VERSION
const versionEl = document.querySelector('.version-card h2');
if (versionEl) {
    const v = localStorage.getItem('clientVersion');
    if (v) versionEl.textContent = 'Version ' + v;
}

// SET CHANGELOG
const changelogEl = document.querySelector('.whats-new ul');
const savedLog = localStorage.getItem('changelog');
if (changelogEl && savedLog) {
    changelogEl.innerHTML = savedLog.split('\n')
        .filter(l => l.trim())
        .map(l => `<li>${l.replace(/^-\s*/, '✅ ')}</li>`)
        .join('');
}

// APK FILE NAME — change this whenever you upload a new version
const APK_FILE = 'Bee Queen.apk';

// DOWNLOAD FUNCTION
function downloadApp() {
    const link = document.createElement('a');
    link.href = APK_FILE;
    link.download = APK_FILE;
    link.click();
    showToast('📥 Download started...');
}

// TOAST NOTIFICATION
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}
