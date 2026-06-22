// ==UserScript==
// @name         GMailTryGeminiRemover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes the Gemini promo div from GMail using CSS.
// @author       c360e5f1
// @match        https://mail.google.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // We target the unique data attribute 'data-elevated-container-view-type="timely_bump"'
    // This is more stable than the random-looking class names (dgq5vc e5ALpb)
    const css = `div[data-elevated-container-view-type="timely_bump"] {
        display: none !important;
    }`;

    if (typeof GM_addStyle !== 'undefined') {
        GM_addStyle(css);
    } else {
        const style = document.createElement('style');
        style.innerHTML = css;
        document.head.appendChild(style);
    }
})();
