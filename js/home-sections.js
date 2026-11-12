(() => {
  const sections = {
    '#setup': 'setup.html',
    '#ai-setup': 'setup.html#ai-setup',
    '#editions': 'setup.html#editions',
    '#guide': 'guide.html',
    '#privacy': 'privacy-overview.html',
  };

  function openSectionPage() {
    const destination = sections[window.location.hash];
    if (destination) window.location.replace(destination);
  }

  window.addEventListener('hashchange', openSectionPage);
  openSectionPage();
})();
