document.getElementById('sidebar-toggler').addEventListener('click', (e) => {
    console.log(e.currentTarget.className);
    
    if (e.currentTarget.className === '') {
        e.currentTarget.classList.add('active');
        localStorage.setItem('wp_privacy_zonalweb_extention', 'show');
    } else {
        e.currentTarget.classList.remove('active');
        localStorage.setItem('wp_privacy_zonalweb_extention', 'hide');
    }
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: changePageContent
        });
    });
});

function changePageContent() {
    const Sidebar = document.getElementsByClassName('_aigv _aigw')[1];
    if (Sidebar.style.display === "none") {
        Sidebar.style.display = 'block';
    } else {
        Sidebar.style.display = 'none';
    }
}

window.onload = () => {
    const sidebar = document.getElementById('sidebar-toggler');
    if (localStorage.wp_privacy_zonalweb_extention === 'show') {
        sidebar.classList.add('active');
    } else {
        sidebar.classList.remove('active');
    }
}
