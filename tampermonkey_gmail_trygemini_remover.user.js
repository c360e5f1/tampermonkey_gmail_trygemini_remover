// ==UserScript==
// @name         GMailTryGeminiRemover
// @namespace    http://tampermonkey.net/
// @version      4.1
// @description  Removes Gemini icons in Gmail.
// @author       josep11
// @license      GNU GPL v3.1
// @namespace    https://github.com/josep11/tampermonkey_youtube_cardremover
// @updateURL    https://raw.githubusercontent.com/josep11/tampermonkey_gmail_gemini_remover/main/tampermonkey_gmail_trygemini_remover.user.js
// @downloadURL  https://raw.githubusercontent.com/josep11/tampermonkey_gmail_gemini_remover/main/tampermonkey_gmail_trygemini_remover.user.js
// @homepage     https://github.com/josep11/tampermonkey_gmail_gemini_remover
// @match        https://mail.google.com/*
// @grant        GM_addStyle
// @icon         data:image/png;base64,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
// @run-at       document-start
// ==/UserScript==

(function () {
      'use strict';
 
      // =========================================================================
      // CONFIGURATION — EDIT THIS LIST
      // =========================================================================
      //
      // Add the CSS class name of each <div> (or any element) you want removed.
      // Each entry is matched with document.querySelectorAll('.<name>'), so:
      //   - Use the class name WITHOUT the leading dot.
      //   - ALL elements matching each class will be removed (not just the first).
      //
      // -------------------------------------------------------------------------
      // EXAMPLE 1 — remove a single element (just one entry in the array):
      //
      //   const TARGET_CLASSES = [
      //       's1rbBe',
      //   ];
      //
      // -------------------------------------------------------------------------
      // EXAMPLE 2 — remove multiple elements (one entry per line):
      //
      //   const TARGET_CLASSES = [
      //       's1rbBe',        // Gemini "try it" promo
      //       'aT5-aX',        // some other promo banner
      //       'nH.aHU',        // NOTE: see the advanced note below about spaces
      //   ];
      //
      // -------------------------------------------------------------------------
      // ADVANCED — matching by more than a class name:
      //
      //   Entries are used as full CSS selectors, so you are not limited to
      //   class names. For example:
      //       '#someId'                    // match by id
      //       'div[data-tooltip="Chat"]'   // match by attribute
      //       '.classA.classB'             // element having BOTH classes
      //
      //   IMPORTANT: an element with the DOM class attribute "nH aHU" (a space
      //   between two classes) is written as '.nH.aHU' in a selector, NOT
      //   '.nH aHU'. A space in a selector means "descendant of".
      // =========================================================================
      const TARGET_CLASSES = [
          's1rbBe', // 20260814 - "Upgrade" icon
          'div[jscontroller="xdV2Hc"]', // 20260902 - "Try Gemini" icon in the top right
          'div[jscontroller="EdTKdf"]', // 20260918 - "Ask Gemini" icon in the toolbar.
      ];
 
      // How long (ms) to keep watching the page for the elements to appear
      // before giving up and disconnecting the observer.
      const OBSERVE_TIMEOUT_MS = 30000;
 
      // =========================================================================
      // Implementation — usually no need to edit below this line.
      // =========================================================================
 
      // Build sets of the selectors/texts we still need to remove. Once an
      // entry has matched and been removed at least once, we stop tracking it
      // so the observer can disconnect as soon as everything is gone.
      const remainingSelectors = new Set(TARGET_CLASSES);
 
      /**
       * Remove every element matching the given selector.
       * @param {string} selector - CSS class name or full CSS selector.
       * @returns {boolean} true if at least one element was found and removed.
       */
      function removeBySelector(selector) {
          // If the entry looks like a bare class name (no CSS special chars),
          // treat it as a class selector by prefixing a dot. Otherwise, use it
          // verbatim as a full CSS selector.
          const isBareClass = /^[a-zA-Z_][\w-]*$/.test(selector);
          const query = isBareClass ? `.${selector}` : selector;
 
          const nodes = document.querySelectorAll(query);
          if (nodes.length === 0) return false;
 
          nodes.forEach((el) => el.remove());
          return true;
      }

      /**
       * Attempt to remove all still-pending targets.
       * @returns {boolean} true when nothing is left to remove.
       */
      function removeAllTargets() {
          for (const selector of Array.from(remainingSelectors)) {
              if (removeBySelector(selector)) {
                  remainingSelectors.delete(selector);
              }
          }
          return remainingSelectors.size === 0;
      }
 
      // Try immediately in case the elements already exist.
      if (removeAllTargets()) return;
 
      // Otherwise, observe the DOM until every target has appeared and been
      // removed, then clean up the observer.
      const observer = new MutationObserver((mutations, obs) => {
          if (removeAllTargets()) {
              obs.disconnect();
          }
      });
 
      // document.body may not exist yet at document-start; guard for it.
      const startObserving = () => {
          observer.observe(document.body, { childList: true, subtree: true });
          // Safety: disconnect after the timeout if some target never appears
          // (avoid leaking an observer that runs forever).
          setTimeout(() => observer.disconnect(), OBSERVE_TIMEOUT_MS);
      };
 
      if (document.body) {
          startObserving();
      } else {
          document.addEventListener('DOMContentLoaded', startObserving, { once: true });
      }
})();
