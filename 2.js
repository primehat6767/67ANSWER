// ==UserScript==
// @name         2
// @namespace    http://tampermonkey.net/
// @version      1
// @description  six sevennnnn
// @author       all of them
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    const targetWindow = window;
    targetWindow.blur = function() {};
    targetWindow.HTMLElement.prototype.blur = function() {};
    Object.defineProperty(document, 'hasFocus', {
        get: function () { return true; },
        configurable: true
    });
    Object.defineProperty(document, 'visibilityState', {
        get: function () { return 'visible'; },
        configurable: true
    });
    Object.defineProperty(document, 'hidden', {
        get: function () { return false; },
        configurable: true
    });
    const originalAddEventListener = targetWindow.addEventListener;
    targetWindow.addEventListener = function(type, listener, options) {
        if (type === 'blur' || type === 'focusout') {
            return;
        }
        return originalAddEventListener.call(this, type, listener, options);
    };
    const originalDocAddEventListener = document.addEventListener;
    document.addEventListener = function(type, listener, options) {
        if (type === 'visibilitychange' || type === 'blur' || type === 'focusout') {
            return;
        }
        return originalDocAddEventListener.call(this, type, listener, options);
    };
    Object.defineProperty(targetWindow, 'onblur', {
        set: function(value) {
        },
        get: function() {
            return null;
        },
        configurable: true
    });
    Object.defineProperty(document, 'onvisibilitychange', {
        set: function(value) {
        },
        get: function() {
            return null;
        },
        configurable: true
    });
})();