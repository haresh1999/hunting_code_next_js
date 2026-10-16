(function () {
    const bar = document.getElementById('top-loading-bar');

    let progress = 0;
    let timer;

    function startLoading() {
        clearInterval(timer);

        progress = 0;
        bar.style.width = '0%';
        bar.classList.remove('loading-complete');

        timer = setInterval(function () {
            if (progress < 90) {
                progress += Math.max(0.5, (90 - progress) * 0.08);
                bar.style.width = progress + '%';
            }
        }, 100);
    }

    function finishLoading() {
        clearInterval(timer);

        bar.style.width = '100%';

        setTimeout(function () {
            bar.classList.add('loading-complete');
        }, 200);

        setTimeout(function () {
            bar.style.width = '0%';
        }, 600);
    }

    // Show loading bar when a page starts loading
    startLoading();

    // Hide when the page has fully loaded
    window.addEventListener('load', finishLoading);

    // Show loading bar when navigating to another page
    document.addEventListener('click', function (event) {
        const link = event.target.closest('a');

        if (
            !link ||
            link.target === '_blank' ||
            link.hasAttribute('download') ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey ||
            event.altKey
        ) {
            return;
        }

        const url = new URL(link.href, window.location.href);

        if (
            url.origin === window.location.origin &&
            url.pathname + url.search !==
            window.location.pathname + window.location.search
        ) {
            startLoading();
        }
    });
})();