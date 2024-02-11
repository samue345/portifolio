document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('[data-tab-value]');
    const tabInfos = document.querySelectorAll('[data-tab-info]');
    const tabsList = document.querySelector('.tabs');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabValue);
            tabs.forEach(t => t.classList.remove('active'));
            tabInfos.forEach(tabInfo => tabInfo.classList.remove('active'));
            tab.classList.add('active');
            target.classList.add('active');
            tabsList.querySelectorAll('li').forEach(li => {
                li.style.borderBottom = 'none';
            });

            tab.style.borderBottom = '3px solid #fbab04';
        });
    });

    tabs[0].click();
});
