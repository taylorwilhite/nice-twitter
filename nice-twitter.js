function hideNumbers() {
  let analytics = document.querySelectorAll('*[data-testid="retweet"], *[data-testid="like"], *[data-testid="reply"], *[aria-label="Share Tweet"]');

  for (var i = 0; i < analytics.length; i++) {
    analytics[i].setAttribute('style', 'display:none !important;');
    analytics[i].setAttribute('hidden', 'true');
  }
}

const observer = new MutationObserver(hideNumbers);
const config = { childList: true, subtree: true }

observer.observe(document.body, config)

