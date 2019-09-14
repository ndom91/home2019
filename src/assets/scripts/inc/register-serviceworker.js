// Register Service Worker
const isLive = (host) => {
    if (host === 'ndo.dev' || host === 'iamnico.xyz' || host === 'ni.co.de') {
        return true
    } else {
        return false
    }
}
if ('serviceWorker' in navigator) {
    if (!isLive(window.location.hostname)) {
        console.info('skipping service worker registration in development.')
    } else {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('/sw.js')
                .catch(registrationError => {
                    console.error('SW registration failed: ', registrationError)
                })
        })
    }
}

// disable PWA install prompt
window.addEventListener('beforeinstallprompt', e => e.preventDefault())
