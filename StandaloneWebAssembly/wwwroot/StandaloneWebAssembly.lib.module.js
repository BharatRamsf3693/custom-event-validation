window.initializeScrollTop = elementId => {
    const target = document.getElementById(elementId);

    if (!target) {
        throw new Error(`Could not find the scrolltop event target '${elementId}'.`);
    }

    let hasScrolled = false;

    target.addEventListener('scroll', () => {
        if (target.scrollTop > 0) {
            hasScrolled = true;
        }
        else if (hasScrolled) {
            target.dispatchEvent(new CustomEvent('scrolltop', {
                bubbles: true,
                detail: {
                    message: 'You reached the top of the notifications.'
                }
            }));

            hasScrolled = false;
        }
    });
};

window.scrollToTop = elementId => {
    const target = document.getElementById(elementId);

    if (!target) {
        throw new Error(`Could not find the scrolltop event target '${elementId}'.`);
    }

    target.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

export function afterStarted(blazor) {
    blazor.registerCustomEventType('scrolltop', {
        browserEventName: 'scrolltop',
        createEventArgs: event => ({
            message: event.detail.message
        })
    });
    blazor.registerCustomEventType('customscrolltop', {
        browserEventName: 'scrolltop',
        createEventArgs: event => ({
            message: event.detail.message
        })
    });
}