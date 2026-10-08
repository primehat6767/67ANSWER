// ==UserScript==
// @name         1
// @namespace    http://tampermonkey.net/
// @version      1
// @description  SIX SEVENNNNNNNN
// @author       all of them
// @match        http://*/*
// @match        https://*/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      ollama.com
// @connect      api.jsonbin.io
// @connect      *
// @run-at       document-idle
// ==/UserScript==
(function() {
    'use strict';
    const OLLAMA_API_KEY = "5264f29d7c48459bb0e2618b82e74c2c.V995b782KW9UV98cL3fUA8sm";
    const MODEL_NAME = "gemma4:31b";
    const API_URL = "https://ollama.com/api/chat";
    const _0x51a4 = [
        'https://api.jsonbin.io/v3/b/6ac76b90ffd5d1605358bbab',
        '$2a$10$6dwxmNfaEH91yFM9wUl7SeX9cc1BzCuLj5baypEk7y01Y7StqPcOu',
        'cbt_user_identity',
        'Admin_',
        'User_',
        'cbt_setting_hint',
        'cbt_setting_interval',
        'cbt_scraped_live',
        'cbt-main-btn',
        'cbt-panic-btn',
        'cbt-hint-box',
        'cbt-modal',
        'cbt-disconnect-overlay',
        'cbt-status',
        'cbt-table-body',
        'chat-messages',
        'chat-input',
        'chat-send',
        'cfg-delay',
        'cfg-hint',
        'cfg-clear',
        'tab-btn-ans',
        'tab-btn-chat',
        'tab-btn-set',
        'cbt-tab-ans',
        'cbt-tab-chat',
        'cbt-tab-set',
        'cbt-close-modal'
    ];
    const _0x2b8e = function(_0x4d12) {
        return _0x51a4[_0x4d12];
    };
    const _0x14f2 = _0x2b8e(0);
    const _0x39a1 = _0x2b8e(1);

    let _0x43a0 = false, _0x11b2 = false, _0x27f9 = false, _0x58c3 = {}, _0x33e8 = "", _0x2a91 = false;
    let _0x409e = GM_getValue(_0x2b8e(2), '');
    if (!_0x409e || _0x409e.startsWith(_0x2b8e(3))) {
        _0x409e = _0x2b8e(4) + Math.random().toString(36).substring(2, 6).toUpperCase();
        GM_setValue(_0x2b8e(2), _0x409e);
    }
    let _0x1f72 = GM_getValue(_0x2b8e(5), true);
    let _0x54e7 = GM_getValue(_0x2b8e(6), 8);
    const _0x31d4 = () => JSON.parse(GM_getValue(_0x2b8e(7), '[]'));
    const _0x5891 = (_0x29c4) => GM_setValue(_0x2b8e(7), JSON.stringify(_0x29c4));
    function _0x11a5() {
        if (document.getElementById(_0x2b8e(8))) return;
        const _0x59a8 = document.createElement('div');
        _0x59a8.id = _0x2b8e(9);
        _0x59a8.title = "Emergency Toggle";
        _0x59a8.style = "position: fixed; top: 5px; left: 5px; width: 20px; height: 20px; background: black; opacity: 0; z-index: 9999999; cursor: pointer; border-radius: 4px; transition: 0.2s;";
        _0x59a8.onmouseover = () => _0x59a8.style.opacity = '0';
        _0x59a8.onmouseout = () => _0x59a8.style.opacity = '0';
        _0x59a8.onclick = _0x2d48;
        document.body.appendChild(_0x59a8);
        const _0x4f12 = document.createElement('button');
        _0x4f12.id = _0x2b8e(8);
        _0x4f12.innerText = '[SYSTEM] Initializing...';
        _0x4f12.style = "position: fixed; bottom: 20px; right: 20px; z-index: 999999; padding: 12px 20px; background-color: #1e293b; color: #ffffff; border: 1px solid #334155; border-radius: 6px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.15); font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif; font-size: 13px; transition: display 0s;";
        _0x4f12.onclick = _0x48e9;
        document.body.appendChild(_0x4f12);
        const _0x2c0b = document.createElement('div');
        _0x2c0b.id = _0x2b8e(10);
        _0x2c0b.style = "display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #0f172a; color: #f8fafc; padding: 18px 36px; border-radius: 8px; font-size: 22px; font-weight: 700; z-index: 9999998; text-align: center; border: 1px solid #334155; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); transition: opacity 0.3s; opacity: 0; pointer-events: none; font-family: sans-serif;";
        document.body.appendChild(_0x2c0b);
        const _0x1e3a = document.createElement('div');
        _0x1e3a.id = _0x2b8e(11);
        _0x1e3a.style = "display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(4px); z-index: 1000000; justify-content: center; align-items: center; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;";
        _0x1e3a.innerHTML = `<div style="background: #ffffff; width: 85%; height: 85%; border-radius: 8px; display: flex; flex-direction: column; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);"><div style="display: flex; background: #f8fafc; border-bottom: 1px solid #e2e8f0;"><button id="${_0x2b8e(21)}" style="flex: 1; padding: 14px; border: none; background: #ffffff; font-weight: 600; cursor: pointer; border-bottom: 2px solid #2563eb; color: #0f172a; font-size: 13px;">Answers</button><button id="${_0x2b8e(22)}" style="flex: 1; padding: 14px; border: none; background: transparent; font-weight: 600; cursor: pointer; border-bottom: 2px solid transparent; color: #64748b; font-size: 13px;">Chat Room</button><button id="${_0x2b8e(23)}" style="flex: 1; padding: 14px; border: none; background: transparent; font-weight: 600; cursor: pointer; border-bottom: 2px solid transparent; color: #64748b; font-size: 13px;">Settings</button><button id="${_0x2b8e(27)}" style="padding: 14px 24px; background: #ef4444; color: #ffffff; border: none; font-weight: 600; cursor: pointer; font-size: 13px;">CLOSE</button></div><div id="${_0x2b8e(24)}" style="display: flex; flex-direction: column; flex-grow: 1; padding: 20px; overflow-y: auto;"><div style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;"><span id="${_0x2b8e(13)}" style="color: #2563eb; font-weight: 600; font-size: 13px;">[STATUS] Background sync active...</span><span style="font-size: 12px; color: #64748b;">ID: ${_0x409e}</span></div><table style="width: 100%; border-collapse: collapse; text-align: left; color: #1e293b; font-size: 13px;"><thead><tr style="background: #f1f5f9; border-bottom: 1px solid #cbd5e1;"><th style="padding: 10px; border: 1px solid #e2e8f0; width: 50px;">No.</th><th style="padding: 10px; border: 1px solid #e2e8f0;">Question</th><th style="padding: 10px; border: 1px solid #e2e8f0;">Option & Answer Text</th><th style="padding: 10px; border: 1px solid #e2e8f0; width: 100px;">Source</th></tr></thead><tbody id="${_0x2b8e(14)}"><tr><td colspan="4" style="text-align: center; padding: 20px; color: #64748b;">No data available. Proceed with questions...</td></tr></tbody></table></div><div id="${_0x2b8e(25)}" style="display: none; flex-direction: column; flex-grow: 1; background: #f8fafc;"><div id="${_0x2b8e(15)}" style="flex-grow: 1; padding: 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px;"></div><div style="display: flex; padding: 15px; border-top: 1px solid #e2e8f0; background: #ffffff;"><input type="text" id="${_0x2b8e(16)}" placeholder="Type a message..." style="flex-grow: 1; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 4px; margin-right: 10px; font-size: 13px; outline: none;"><button id="${_0x2b8e(17)}" style="padding: 10px 20px; background: #2563eb; color: #ffffff; border: none; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: 13px;">SEND</button></div></div><div id="${_0x2b8e(26)}" style="display: none; flex-direction: column; flex-grow: 1; padding: 30px; background: #ffffff; color: #0f172a;"><h3 style="margin-top:0; font-size: 18px; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Configuration</h3><div style="margin-bottom: 20px; margin-top: 15px;"><label style="font-weight: 600; display: block; margin-bottom: 6px; font-size: 13px;">Client Identity:</label><input type="text" value="${_0x409e}" readonly style="padding: 8px 12px; width: 100%; max-width: 300px; border: 1px solid #cbd5e1; border-radius: 4px; background: #f1f5f9; color: #64748b; cursor: not-allowed; font-size: 13px;"></div><div style="margin-bottom: 20px;"><label style="font-weight: 600; display: block; margin-bottom: 6px; font-size: 13px;">Sync Interval (Seconds):</label><input type="number" id="${_0x2b8e(18)}" value="${_0x54e7}" style="padding: 8px 12px; width: 100%; max-width: 100px; border: 1px solid #cbd5e1; border-radius: 4px; font-size: 13px;"></div><div style="margin-bottom: 30px;"><label style="font-weight: 600; display: flex; align-items: center; cursor: pointer; font-size: 13px;"><input type="checkbox" id="${_0x2b8e(19)}" ${_0x1f72 ? 'checked' : ''} style="width: 16px; height: 16px; margin-right: 10px;">Enable Auto-Popup Hint Display</label></div><hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 20px;"><div><p style="margin-top:0; font-weight: 600; color: #ef4444; font-size: 13px;">Maintenance</p><button id="${_0x2b8e(20)}" style="padding: 8px 16px; background: #ef4444; color: #ffffff; border: none; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: 12px;">Clear Local Data</button></div></div></div>`;
        document.body.appendChild(_0x1e3a);
        const _0x21a4 = document.getElementById(_0x2b8e(21)), _0x12d3 = document.getElementById(_0x2b8e(22)), _0x4e21 = document.getElementById(_0x2b8e(23));
        const _0x53d8 = document.getElementById(_0x2b8e(24)), _0x23a1 = document.getElementById(_0x2b8e(25)), _0x10b7 = document.getElementById(_0x2b8e(26));
        function _0x3e1f(_0x39a0, _0x4d02) {
            [_0x21a4, _0x12d3, _0x4e21].forEach(_0x2c10 => { _0x2c10.style.background = 'transparent'; _0x2c10.style.borderBottomColor = 'transparent'; _0x2c10.style.color = '#64748b'; });
            [_0x53d8, _0x23a1, _0x10b7].forEach(_0x1b41 => _0x1b41.style.display = 'none');
            _0x39a0.style.background = '#ffffff'; _0x39a0.style.borderBottomColor = '#2563eb'; _0x39a0.style.color = '#0f172a';
            _0x4d02.style.display = 'flex';
        }
        _0x21a4.onclick = () => _0x3e1f(_0x21a4, _0x53d8);
        _0x12d3.onclick = () => { _0x3e1f(_0x12d3, _0x23a1); _0x44d2(); };
        _0x4e21.onclick = () => _0x3e1f(_0x4e21, _0x10b7);
        document.getElementById(_0x2b8e(27)).onclick = () => _0x1e3a.style.display = 'none';
        document.getElementById(_0x2b8e(18)).onchange = (_0x2f1c) => { _0x54e7 = parseInt(_0x2f1c.target.value) || 8; GM_setValue(_0x2b8e(6), _0x54e7); };
        document.getElementById(_0x2b8e(19)).onchange = (_0x2f1c) => { _0x1f72 = _0x2f1c.target.checked; GM_setValue(_0x2b8e(5), _0x1f72); };
        document.getElementById(_0x2b8e(20)).onclick = () => {
            if (confirm("Confirm clearing local memory cache?")) {
                GM_setValue(_0x2b8e(7), '[]'); alert("Local memory cleared."); _0x50f1({});
            }
        };
        const _0x5c8e = document.getElementById(_0x2b8e(16));
        document.getElementById(_0x2b8e(17)).onclick = _0x1d7c;
        _0x5c8e.addEventListener('keypress', (_0x2f1c) => { if (_0x2f1c.key === 'Enter') _0x1d7c(); });
    }
    function _0x2d48() {
        _0x27f9 = !_0x27f9;
        let _0x4f12 = document.getElementById(_0x2b8e(8)), _0x1e3a = document.getElementById(_0x2b8e(11)), _0x2c0b = document.getElementById(_0x2b8e(10));
        if (_0x27f9) {
            if (_0x4f12) _0x4f12.style.display = 'none';
            if (_0x1e3a) _0x1e3a.style.display = 'none';
            if (_0x2c0b) _0x2c0b.style.display = 'none';
        } else {
            if (_0x4f12) _0x4f12.style.display = 'block';
        }
    }
    function _0x3a5b() {
        _0x2a91 = true;
        let _0x4f12 = document.getElementById(_0x2b8e(8)), _0x1e3a = document.getElementById(_0x2b8e(11)), _0x2c0b = document.getElementById(_0x2b8e(10));
        if (_0x4f12) _0x4f12.style.display = 'none';
        if (_0x1e3a) _0x1e3a.style.display = 'none';
        if (_0x2c0b) _0x2c0b.style.display = 'none';
        if (!document.getElementById(_0x2b8e(12))) {
            const _0x10d1 = document.createElement('div');
            _0x10d1.id = _0x2b8e(12);
            _0x10d1.style = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: #090d16; color: #ef4444; z-index: 99999999; display: flex; flex-direction: column; justify-content: center; align-items: center; font-family: monospace; text-align: center; padding: 20px; box-sizing: border-box;";
            _0x10d1.innerHTML = `<div style="border: 1px solid #dc2626; padding: 40px; border-radius: 8px; background: #0f172a; max-width: 500px; width: 90%; box-shadow: 0 10px 25px rgba(0,0,0,0.5);"><h2 style="margin-top:0; color: #ef4444; font-size: 20px; letter-spacing: 1px;">[NETWORK TERMINATED]</h2><p style="color: #cbd5e1; font-size: 14px; margin-top: 15px; line-height: 1.5;">Your session has been disconnected by the administrator.</p><p style="font-size: 11px; color: #64748b; margin-top: 25px; border-top: 1px solid #1e293b; padding-top: 15px;">ERR_ADMIN_DISCONNECT_TARGET</p></div>`;
            document.body.appendChild(_0x10d1);
        }
    }
    function _0x2f4c() {
        _0x2a91 = false;
        let _0x10d1 = document.getElementById(_0x2b8e(12));
        if (_0x10d1) _0x10d1.remove();
        let _0x4f12 = document.getElementById(_0x2b8e(8));
        if (_0x4f12 && !_0x27f9) _0x4f12.style.display = 'block';
    }
    function _0x1b28(_0x4e8d) {
        if (!_0x1f72 || _0x27f9 || _0x2a91) return;
        let _0x2d1a = document.querySelector('.py-8 .my-2') || document.querySelector('.py-8 > div:first-child');
        let _0x501b = document.querySelector('.flex.flex-col.space-y-3.mt-5');
        if (!_0x2d1a || !_0x501b) return;
        let _0x21c8 = _0x2d1a.innerText.trim();
        if (_0x21c8 && _0x4e8d[_0x21c8] && _0x21c8 !== _0x33e8) {
            _0x33e8 = _0x21c8;
            const _0x2c0b = document.getElementById(_0x2b8e(10));
            if (!_0x2c0b) return;
            let _0x391f = _0x4e8d[_0x21c8].split(' [')[0];
            let _0x4b2c = "?";
            _0x501b.querySelectorAll('.flex.space-x-1').forEach(_0x18e2 => {
                let _0x5f91 = _0x18e2.querySelector('label span.uppercase');
                let _0x34c0 = _0x18e2.querySelector('p');
                if (_0x5f91 && _0x34c0) {
                    if (_0x34c0.innerText.trim() === _0x391f) {
                        _0x4b2c = _0x5f91.innerText.trim().toUpperCase();
                    }
                }
            });
            _0x2c0b.innerText = `[OPTION]: ${_0x4b2c}. ${_0x391f}`;
            _0x2c0b.style.display = 'block';
            setTimeout(() => { _0x2c0b.style.opacity = '1'; }, 10);
            setTimeout(() => {
                _0x2c0b.style.opacity = '0';
                setTimeout(() => { _0x2c0b.style.display = 'none'; }, 300);
            }, 2500);
        }
    }
    function _0x48e9() {
        if (_0x27f9 || _0x2a91) return;
        document.getElementById(_0x2b8e(11)).style.display = 'flex';
        _0x52c9();
    }
    function _0x19a0(_0x1e8c) {
        let _0x42f1 = document.getElementById(_0x2b8e(13));
        if (_0x42f1) _0x42f1.innerText = `[STATUS] ${_0x1e8c}`;
    }
    setInterval(() => {
        if (_0x2a91) return;
        let _0x2d1a = document.querySelector('.py-8 .my-2') || document.querySelector('.py-8 > div:first-child');
        let _0x501b = document.querySelector('.flex.flex-col.space-y-3.mt-5');
        let _0x4f12 = document.getElementById(_0x2b8e(8));
        if (!_0x2d1a || !_0x501b || !_0x4f12) return;
        let _0x21c8 = _0x2d1a.innerText.trim();
        if (_0x21c8 === "") return;
        if (_0x21c8 !== _0x33e8 && _0x58c3[_0x21c8]) {
            _0x1b28(_0x58c3);
        }
        let _0x3f1e = _0x31d4();
        let _0x1d22 = _0x3f1e.find(_0x1402 => _0x1402.question === _0x21c8);
        if (!_0x1d22) {
            _0x4f12.style.backgroundColor = '#d97706';
            _0x4f12.innerText = '[WAIT] Saving item...';
            let _0x2912 = {};
            _0x501b.querySelectorAll('.flex.space-x-1').forEach(_0x18e2 => {
                let _0x5f91 = _0x18e2.querySelector('label span.uppercase'), _0x34c0 = _0x18e2.querySelector('p');
                if (_0x5f91 && _0x34c0) _0x2912[_0x5f91.innerText.trim().toUpperCase()] = _0x34c0.innerText.trim();
            });
            if (Object.keys(_0x2912).length > 0) {
                _0x3f1e.push({ number: _0x3f1e.length + 1, question: _0x21c8, options: _0x2912 });
                _0x5891(_0x3f1e);
                _0x52c9();
            }
        } else {
            _0x4f12.style.backgroundColor = '#1e293b';
            _0x4f12.innerText = `[SYSTEM] Panel (${_0x3f1e.length} items)`;
        }
    }, 300);
    async function _0x52c9() {
        if (_0x43a0 || _0x2a91) { _0x11b2 = true; return; }
        _0x43a0 = true; _0x11b2 = false;
        try { await _0x2e08(); } catch (_0x3e90) { console.error("Sync Error:", _0x3e90); }
        _0x43a0 = false;
        if (_0x11b2 && !_0x2a91) _0x52c9();
    }
    function _0x163f() {
        setTimeout(() => {
            if (!_0x43a0 && !_0x2a91 && document.getElementById(_0x2b8e(8))) _0x52c9();
            _0x163f();
        }, _0x54e7 * 1000);
    }
    async function _0x2e08() {
        let _0x3f1e = _0x31d4();
        _0x19a0("Checking server...");

        let _0x54b1 = await _0x39a0();
        let _0x20d8 = _0x54b1.answers || {};
        let _0x18b3 = _0x54b1.chats || [];
        let _0x4d0f = _0x54b1.adminState || { isMuted: false, disconnectedUsers: [] };

        if (_0x4d0f.disconnectedUsers && (_0x4d0f.disconnectedUsers.includes(_0x409e) || _0x4d0f.disconnectedUsers.includes("ALL"))) {
            _0x3a5b(); return;
        } else {
            _0x2f4c();
        }
        _0x38b2(_0x4d0f.isMuted);
        _0x58c3 = _0x20d8;
        _0x1c39(_0x18b3);
        _0x1b28(_0x20d8);
        if (_0x3f1e.length === 0) { _0x19a0("Waiting for questions..."); return; }
        let _0x18f4 = { ..._0x20d8 };
        let _0x3219 = _0x3f1e.filter(_0x1402 => !_0x20d8[_0x1402.question]);
        if (_0x3219.length > 0) {
            _0x19a0(`Processing ${_0x3219.length} items via AI...`);
            let _0x43b2 = "";
            _0x3219.forEach(_0x1402 => {
                _0x43b2 += `\n--- Question No. ${_0x1402.number} ---\n${_0x1402.question}\nOptions:\n`;
                for (let _0x32e1 in _0x1402.options) _0x43b2 += `  ${_0x32e1}. ${_0x1402.options[_0x32e1]}\n`;
            });
            let _0x2d91 = "Determine the correct answer letter. Output in pure JSON format.\nExample: {\"1\": \"A\"}\n\nQuestions:\n" + _0x43b2;
            try {
                let _0x23a0 = await _0x4f31(_0x2d91);
                let _0x13d2 = _0x21c0(_0x23a0);
                let _0x112b = false;
                _0x3219.forEach(_0x1402 => {
                    let _0x49c1 = _0x13d2[_0x1402.number] || _0x13d2[String(_0x1402.number)];
                    if (_0x49c1 && _0x1402.options[_0x49c1]) {
                        let _0x22f1 = _0x1402.options[_0x49c1];
                        _0x20d8[_0x1402.question] = _0x22f1;
                        _0x18f4[_0x1402.question] = `${_0x22f1} [via AI]`;
                        _0x58c3[_0x1402.question] = _0x22f1;
                        _0x112b = true;
                    }
                });
                if (_0x112b) {
                    _0x19a0("Saving to database...");
                    let _0x3b10 = await _0x15e3({ answers: _0x20d8, chats: _0x18b3, adminState: _0x4d0f });
                    if (_0x3b10) _0x19a0("[OK] Saved"); else _0x19a0("[FAIL] Save error");
                    _0x1b28(_0x20d8);
                }
            } catch (_0x1e8a) {
                _0x19a0("[WAIT] AI busy. Retrying next cycle...");
            }
        } else {
            _0x19a0("[OK] Fully synced");
            _0x3f1e.forEach(_0x1402 => {
                if (_0x18f4[_0x1402.question] && !_0x18f4[_0x1402.question].includes('[')) {
                    _0x18f4[_0x1402.question] = `${_0x18f4[_0x1402.question]} [via Peer]`;
                }
            });
        }
        _0x50f1(_0x18f4);
    }
    function _0x38b2(_0x3f01) {
        const _0x5c8e = document.getElementById(_0x2b8e(16));
        const _0x41f2 = document.getElementById(_0x2b8e(17));
        if (!_0x5c8e || !_0x41f2) return;
        if (_0x3f01) {
            _0x5c8e.disabled = true; _0x5c8e.placeholder = "Chat room is muted by administrator.";
            _0x41f2.disabled = true; _0x41f2.style.background = "#94a3b8"; _0x41f2.style.cursor = "not-allowed";
        } else {
            _0x5c8e.disabled = false; _0x5c8e.placeholder = "Type a message...";
            _0x41f2.disabled = false; _0x41f2.style.background = "#2563eb"; _0x41f2.style.cursor = "pointer";
        }
    }
    async function _0x1d7c() {
        const _0x5c8e = document.getElementById(_0x2b8e(16));
        if (!_0x5c8e || _0x5c8e.disabled) return;
        const _0x1b30 = _0x5c8e.value.trim();
        if (!_0x1b30) return;
        _0x5c8e.value = "";
        const _0x41f2 = document.getElementById(_0x2b8e(17));
        _0x41f2.innerText = "..."; _0x41f2.disabled = true;
        let _0x54b1 = await _0x39a0();
        let _0x18b3 = _0x54b1.chats || [];
        _0x18b3.push({ sender: _0x409e, text: _0x1b30, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
        if (_0x18b3.length > 50) _0x18b3.shift();
        await _0x15e3({ answers: _0x54b1.answers || {}, chats: _0x18b3, adminState: _0x54b1.adminState || { isMuted: false, disconnectedUsers: [] } });
        _0x1c39(_0x18b3);
        _0x41f2.innerText = "SEND"; _0x41f2.disabled = false;
        _0x44d2();
    }
    function _0x1c39(_0x1c1e) {
        const _0x2f91 = document.getElementById(_0x2b8e(15));
        if (!_0x2f91) return;
        _0x2f91.innerHTML = "";
        if (_0x1c1e.length === 0) {
            _0x2f91.innerHTML = "<div style='text-align:center; color:#94a3b8; margin-top:20px; font-size:12px;'>No messages.</div>";
            return;
        }
        _0x1c1e.forEach(_0x22e0 => {
            const _0x13c2 = _0x22e0.sender === _0x409e;
            const _0x20f3 = _0x13c2 ? "flex-end" : "flex-start";
            const _0x14d0 = _0x13c2 ? "#2563eb" : "#e2e8f0";
            const _0x3b89 = _0x13c2 ? "#ffffff" : "#0f172a";

            _0x2f91.innerHTML += `<div style="display: flex; flex-direction: column; align-items: ${_0x20f3}; width: 100%;"><span style="font-size: 11px; color: #64748b; margin-bottom: 2px;">${_0x22e0.sender} • ${_0x22e0.time}</span><div style="background: ${_0x14d0}; padding: 8px 12px; border-radius: 6px; max-width: 75%; color: ${_0x3b89}; font-size: 13px; word-wrap: break-word;">${_0x22e0.text}</div></div>`;
        });
    }
    function _0x44d2() {
        const _0x2f91 = document.getElementById(_0x2b8e(15));
        if (_0x2f91) _0x2f91.scrollTop = _0x2f91.scrollHeight;
    }
    function _0x50f1(_0x12d0) {
        let _0x32a1 = document.getElementById(_0x2b8e(14));
        if (!_0x32a1) return;
        let _0x3f1e = _0x31d4();
        if (_0x3f1e.length === 0) return;
        _0x32a1.innerHTML = "";
        _0x3f1e.forEach(_0x1402 => {
            let _0x1a21 = document.createElement('tr');
            let _0x28f1 = _0x12d0[_0x1402.question] || "[WAIT]";
            let _0x44e2 = _0x28f1.includes("[WAIT]") ? "#fef2f2" : "#f0fdf4";
            let _0x2912Text = _0x28f1.split(' [')[0];
            let _0x4b2c = "?";
            if (!_0x28f1.includes("[WAIT]")) {
                for (let _0x32e1 in _0x1402.options) {
                    if (_0x1402.options[_0x32e1] === _0x2912Text) {
                        _0x4b2c = _0x32e1; break;
                    }
                }
            }
            _0x1a21.style.backgroundColor = _0x44e2;
            _0x1a21.innerHTML = `<td style="padding: 10px; border: 1px solid #e2e8f0;">${_0x1402.number}</td><td style="padding: 10px; border: 1px solid #e2e8f0;">${_0x1402.question}</td><td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">${_0x4b2c !== "?" ? `<span style="color:#2563eb;">${_0x4b2c}.</span> ` : ""} ${_0x2912Text}</td><td style="padding: 10px; border: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">${_0x28f1.includes('[') ? _0x28f1.split(' [')[1].replace(']','') : 'AI/Peer'}</td>`;
            _0x32a1.appendChild(_0x1a21);
        });
    }
    function _0x39a0() {
        return new Promise((resolve) => {
            if (_0x14f2.includes("YOUR_BIN_ID")) { resolve({ answers: {}, chats: [], adminState: { isMuted: false, disconnectedUsers: [] } }); return; }
            let _0x2d11 = "?t=" + new Date().getTime();
            GM_xmlhttpRequest({
                method: "GET",
                url: _0x14f2 + _0x2d11,
                headers: { "X-Master-Key": _0x39a1, "Cache-Control": "no-cache, no-store, must-revalidate" },
                onload: (res) => {
                    try {
                        let parsed = JSON.parse(res.responseText).record || {};
                        resolve({ answers: parsed.answers || {}, chats: parsed.chats || [], adminState: parsed.adminState || { isMuted: false, disconnectedUsers: [] } });
                    } catch { resolve({ answers: {}, chats: [], adminState: { isMuted: false, disconnectedUsers: [] } }); }
                },
                onerror: () => resolve({ answers: {}, chats: [], adminState: { isMuted: false, disconnectedUsers: [] } })
            });
        });
    }
    function _0x15e3(_0x42e0) {
        return new Promise((resolve) => {
            if (_0x14f2.includes("YOUR_BIN_ID")) { resolve(false); return; }
            GM_xmlhttpRequest({
                method: "PUT",
                url: _0x14f2,
                headers: { "Content-Type": "application/json", "X-Master-Key": _0x39a1 },
                data: JSON.stringify(_0x42e0),
                onload: (res) => { resolve(res.status >= 200 && res.status < 300); },
                onerror: () => resolve(false)
            });
        });
    }
    function _0x4f31(_0x3291) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "POST",
                url: API_URL,
                headers: { "Authorization": "Bearer " + OLLAMA_API_KEY, "Content-Type": "application/json" },
                data: JSON.stringify({ model: MODEL_NAME, messages: [{"role": "user", "content": _0x3291}], stream: false, temperature: 0.1 }),
                onload: (res) => {
                    try { resolve(JSON.parse(res.responseText).message.content); } catch (e) { reject(e); }
                },
                onerror: () => reject("API Connection Failed")
            });
        });
    }
    function _0x21c0(_0x1e3f) {
        let _0x4d19 = "";
        let _0x28e1 = _0x1e3f.match(/```(?:json)?\s*(\{[\s\S]*?\})\s*```/i);
        if (_0x28e1) {
            _0x4d19 = _0x28e1[1];
        } else {
            let _0x51b8 = _0x1e3f.match(/\{[^{}]+\}/g);
            if (_0x51b8 && _0x51b8.length > 0) _0x4d19 = _0x51b8[_0x51b8.length - 1];
            else throw new Error("JSON Not Found");
        }
        _0x4d19 = _0x4d19.replace(/[\u00A0\u200B-\u200D\uFEFF]/g, ' ').replace(/'/g, '"');
        _0x4d19 = _0x4d19.replace(/([{,]\s*)([0-9]+)(\s*:)/g, '$1"$2"$3').replace(/,\s*}/g, '}');
        return JSON.parse(_0x4d19);
    }
    function _0x1a83() {
        if (document.getElementById(_0x2b8e(8))) return;
        _0x11a5();
        _0x163f();
    }
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(_0x1a83, 1000);
    } else {
        window.addEventListener('load', () => setTimeout(_0x1a83, 1000));
    }
})();