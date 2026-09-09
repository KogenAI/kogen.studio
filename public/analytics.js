if (location.hostname === 'kogen.studio') {
  window.plausible = window.plausible || function () {
    (window.plausible.q = window.plausible.q || []).push(arguments);
  };
  window.plausible.init = window.plausible.init || function (options) {
    window.plausible.o = options || {};
  };
  window.plausible.init();
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://plausible.io/js/pa-kpLeAUmhpsAiVLJBU84wU.js';
  document.head.appendChild(script);
}
