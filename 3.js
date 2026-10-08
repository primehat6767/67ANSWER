// ==UserScript==
// @name         3
// @namespace    http://tampermonkey.net/
// @version      1
// @description  six sevennnnn
// @author       all of them
// @match        *://*/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    const css = `
        * {
            -webkit-user-select: auto !important;
            -moz-user-select: auto !important;
            -ms-user-select: auto !important;
            user-select: auto !important;
        }
    `;
    if (typeof GM_addStyle !== "undefined") {
        GM_addStyle(css);
    } else {
        const styleNode = document.createElement("style");
        styleNode.appendChild(document.createTextNode(css));
        document.head.appendChild(styleNode);
    }
    const blockedEvents = [
        'contextmenu',
        'copy',
        'cut',
        'paste',
        'selectstart',
        'dragstart',
        'mousedown',
        'mouseup'
    ];
    blockedEvents.forEach(eventName => {
        window.addEventListener(eventName, function(e) {
            e.stopPropagation();
        }, true); 
    });
    document.addEventListener('DOMContentLoaded', () => {
        blockedEvents.forEach(eventName => {
            document['on' + eventName] = null;
            if (document.body) {
                document.body['on' + eventName] = null;
            }
        });
    });
})();