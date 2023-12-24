const tabLinks = document.querySelectorAll('.tab__btn');
const tabContent = document.querySelectorAll('.tab__content');


if (tabLinks.length) {
    tabLinks.forEach(tab => {
        tab.addEventListener('click', function openTabs(el) {
            const id = tab.dataset.id;

            tabLinks.forEach(function (item) {
                item.classList.remove('_active');
            });

            tabContent.forEach(function (item) {
                if (item.id == id) {
                    item.classList.add('_active');
                }
                else {
                    item.classList.remove('_active');
                }
            });

            tab.classList.add('_active');
        });
    });
}
