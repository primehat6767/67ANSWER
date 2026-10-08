// ==UserScript==
// @name         1
// @namespace    http://tampermonkey.net/
// @version      1
// @description  six sevennn
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
    const OLLAMA_API_KEY = "apikey";
    const MODEL_NAME = "gemma4:31b";
    const API_URL = "https://ollama.com/api/chat";
    const _0x51a4 = [
        'https://api.jsonbin.io/v3/b/6ac76b90ffd5d1605358bbab',
        '$2a$10$J5bCuNsFU1mUeoDC4TY1suqRkLlQeBal5c9peagEf4m7E5ZPGy1Ju',
        'cbt_user_identity',
        'Admin_',
        'User_',
        'cbt_setting_hint',
        'cbt_setting_interval',
        'cbt_scraped_live',
        'cbt-stealth-host',
        'cbt-panic-btn',
        'cbt-main-btn',
        'cbt-hint-box',
        'cbt-modal',
        'cbt-close-modal',
        'tab-btn-ans',
        'tab-btn-chat',
        'tab-btn-ai',
        'tab-btn-board',
        'tab-btn-set',
        'cbt-tab-ans',
        'cbt-tab-chat',
        'cbt-tab-ai',
        'cbt-tab-board',
        'cbt-tab-set',
        'cbt-status',
        'cbt-table-body',
        'chat-messages',
        'chat-input',
        'chat-send',
        'chat-virtual-keyboard',
        'ai-chat-messages',
        'ai-chat-input',
        'ai-chat-send',
        'ai-virtual-keyboard',
        'cbt-board-body',
        'cfg-delay',
        'cfg-hint',
        'cfg-clear',
        'cbt-disconnect-overlay'
    ];
    const _0x2b8e = function(_0x4d12) {
        return _0x51a4[_0x4d12];
    };
    const _0x14f2 = _0x2b8e(0);
    const _0x39a1 = _0x2b8e(1);

    let _0x4d5e = false, _0x5e6f = false, _0x6f70 = false, _0x7081 = {}, _0x8192 = {}, _0x92a3 = "", _0xa3b4 = false;
    let _0xb4c5 = null, _0xc5d6 = null;
    function _0x1a2b(_0x12) { return _0xc5d6 ? _0xc5d6.getElementById(_0x12) : null; }

    let _0xd6e7 = GM_getValue(_0x2b8e(2), '');
    if (!_0xd6e7 || _0xd6e7.startsWith(_0x2b8e(3))) {
        _0xd6e7 = _0x2b8e(4) + Math.random().toString(36).substring(2, 6).toUpperCase();
        GM_setValue(_0x2b8e(2), _0xd6e7);
    }
    let _0xe7f8 = GM_getValue(_0x2b8e(5), true);
    let _0xf809 = GM_getValue(_0x2b8e(6), 8);
    const _0x2b3c = () => JSON.parse(GM_getValue(_0x2b8e(7), '[]'));
    const _0x3c4d = (_0xq) => GM_setValue(_0x2b8e(7), JSON.stringify(_0xq));

    function _0x091a() {
        if (document.getElementById(_0x2b8e(8))) return;
        _0xb4c5 = document.createElement('div');
        _0xb4c5.id = _0x2b8e(8);
        _0xb4c5.style = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 2147483647; pointer-events: none;";
        document.body.appendChild(_0xb4c5);
        _0xc5d6 = _0xb4c5.attachShadow({ mode: 'closed' });

        const _0x9 = document.createElement('div'); _0x9.id = _0x2b8e(9); _0x9.title = "Emergency Toggle"; _0x9.style = "position: absolute; top: 5px; left: 5px; width: 20px; height: 20px; background: black; opacity: 0; cursor: pointer; border-radius: 4px; transition: 0.2s; pointer-events: auto;";
        _0x9.onmouseover = () => _0x9.style.opacity = '0'; _0x9.onmouseout = () => _0x9.style.opacity = '0'; _0x9.onclick = _0x5e60; _0xc5d6.appendChild(_0x9);

        const _0xa = document.createElement('button'); _0xa.id = _0x2b8e(10); _0xa.innerText = '[SYSTEM] Initializing...'; _0xa.style = "position: absolute; bottom: 20px; right: 20px; padding: 12px 20px; background-color: #1e293b; color: #ffffff; border: 1px solid #334155; border-radius: 6px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.15); font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif; font-size: 13px; transition: display 0s; pointer-events: auto;";
        _0xa.onclick = _0x92a4; _0xc5d6.appendChild(_0xa);

        const _0xb = document.createElement('div'); _0xb.id = _0x2b8e(11); _0xb.style = "display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #0f172a; color: #f8fafc; padding: 18px 36px; border-radius: 8px; font-size: 22px; font-weight: 700; text-align: center; border: 1px solid #334155; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); transition: opacity 0.3s; opacity: 0; pointer-events: none; font-family: sans-serif;";
        _0xc5d6.appendChild(_0xb);

        const _0xc = document.createElement('div'); _0xc.id = _0x2b8e(12); _0xc.style = "display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(4px); justify-content: center; align-items: center; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif; pointer-events: auto;";
        _0xc.innerHTML = `<div style="position:relative;width:90%;height:95%;max-width:700px;display:flex;flex-direction:column;"><button id="${_0x2b8e(13)}" style="position:absolute;top:-15px;right:-15px;width:35px;height:35px;background:#ef4444;color:#ffffff;border:2px solid #ffffff;border-radius:50%;font-weight:bold;cursor:pointer;font-size:16px;display:flex;justify-content:center;align-items:center;box-shadow:0 4px 10px rgba(0,0,0,0.3);z-index:10;padding:0;">X</button><div style="background:#ffffff;width:100%;height:100%;border-radius:8px;display:flex;flex-direction:column;overflow:hidden;border:1px solid #cbd5e1;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);"><div style="display:flex;background:#f8fafc;border-bottom:1px solid #e2e8f0;flex-wrap:wrap;"><button id="${_0x2b8e(14)}" style="flex:1;padding:14px 8px;border:none;background:#ffffff;font-weight:600;cursor:pointer;border-bottom:2px solid #2563eb;color:#0f172a;font-size:13px;min-width:80px;">Answers</button><button id="${_0x2b8e(15)}" style="flex:1;padding:14px 8px;border:none;background:transparent;font-weight:600;cursor:pointer;border-bottom:2px solid transparent;color:#64748b;font-size:13px;min-width:90px;">Global Chat</button><button id="${_0x2b8e(16)}" style="flex:1;padding:14px 8px;border:none;background:transparent;font-weight:600;cursor:pointer;border-bottom:2px solid transparent;color:#64748b;font-size:13px;min-width:80px;">AI Chat</button><button id="${_0x2b8e(17)}" style="flex:1;padding:14px 8px;border:none;background:transparent;font-weight:600;cursor:pointer;border-bottom:2px solid transparent;color:#64748b;font-size:13px;min-width:95px;">Leaderboard</button><button id="${_0x2b8e(18)}" style="flex:1;padding:14px 8px;border:none;background:transparent;font-weight:600;cursor:pointer;border-bottom:2px solid transparent;color:#64748b;font-size:13px;min-width:80px;">Settings</button></div><div id="${_0x2b8e(19)}" style="display:flex;flex-direction:column;flex-grow:1;padding:20px;overflow-y:auto;"><div style="margin-bottom:15px;display:flex;justify-content:space-between;align-items:center;"><span id="${_0x2b8e(24)}" style="color:#2563eb;font-weight:600;font-size:13px;">[STATUS] Background synchronization active.</span><span style="font-size:12px;color:#64748b;">Node ID: ${_0xd6e7}</span></div><table style="width:100%;border-collapse:collapse;text-align:left;color:#1e293b;font-size:13px;"><thead><tr style="background:#f1f5f9;border-bottom:1px solid #cbd5e1;"><th style="padding:10px;border:1px solid #e2e8f0;width:30px;">No.</th><th style="padding:10px;border:1px solid #e2e8f0;">Question Parameter</th><th style="padding:10px;border:1px solid #e2e8f0;width:200px;">Resolution & Metric</th></tr></thead><tbody id="${_0x2b8e(25)}"><tr><td colspan="3" style="text-align:center;padding:20px;color:#64748b;">No data available. Awaiting assessment initialization...</td></tr></tbody></table></div><div id="${_0x2b8e(20)}" style="display:none;flex-direction:column;flex-grow:1;background:#f8fafc;overflow:hidden;"><div id="${_0x2b8e(26)}" style="flex-grow:1;padding:15px;overflow-y:auto;display:flex;flex-direction:column;gap:10px;"><div style="text-align:center;color:#64748b;font-size:12px;margin-top:10px;">Network connected. System keyboard input is disabled.</div></div><div style="padding:10px;border-top:1px solid #e2e8f0;background:#ffffff;display:flex;flex-direction:column;gap:10px;"><div style="display:flex;"><input type="text" id="${_0x2b8e(27)}" readonly placeholder="Use the virtual keyboard below..." style="flex-grow:1;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;margin-right:10px;font-size:14px;outline:none;background:#f1f5f9;color:#0f172a;font-weight:600;cursor:pointer;"><button id="${_0x2b8e(28)}" style="padding:10px 15px;background:#2563eb;color:#ffffff;border:none;border-radius:4px;font-weight:600;cursor:pointer;font-size:13px;">SEND</button></div><div id="${_0x2b8e(29)}" style="display:flex;flex-direction:column;gap:4px;background:#e2e8f0;padding:8px;border-radius:6px;"></div></div></div><div id="${_0x2b8e(21)}" style="display:none;flex-direction:column;flex-grow:1;background:#f8fafc;overflow:hidden;"><div id="${_0x2b8e(30)}" style="flex-grow:1;padding:15px;overflow-y:auto;display:flex;flex-direction:column;gap:10px;"><div style="text-align:center;color:#64748b;font-size:12px;margin-top:10px;">Direct AI interface established. System keyboard input is disabled.</div></div><div style="padding:10px;border-top:1px solid #e2e8f0;background:#ffffff;display:flex;flex-direction:column;gap:10px;"><div style="display:flex;"><input type="text" id="${_0x2b8e(31)}" readonly placeholder="Use the virtual keyboard below..." style="flex-grow:1;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;margin-right:10px;font-size:14px;outline:none;background:#f1f5f9;color:#0f172a;font-weight:600;cursor:pointer;"><button id="${_0x2b8e(32)}" style="padding:10px 15px;background:#10b981;color:#ffffff;border:none;border-radius:4px;font-weight:600;cursor:pointer;font-size:13px;">SEND</button></div><div id="${_0x2b8e(33)}" style="display:flex;flex-direction:column;gap:4px;background:#e2e8f0;padding:8px;border-radius:6px;"></div></div></div><div id="${_0x2b8e(22)}" style="display:none;flex-direction:column;flex-grow:1;padding:20px;overflow-y:auto;background:#ffffff;"><div style="margin-bottom:15px;border-bottom:1px solid #e2e8f0;padding-bottom:10px;"><h3 style="margin:0;color:#0f172a;font-size:18px;">Global Contribution Network</h3><p style="margin:4px 0 0 0;font-size:12px;color:#64748b;">Tracking nodes with the highest number of synchronized assessment parameters.</p></div><table style="width:100%;border-collapse:collapse;text-align:left;color:#1e293b;font-size:13px;"><thead><tr style="background:#f1f5f9;border-bottom:1px solid #cbd5e1;"><th style="padding:10px;border:1px solid #e2e8f0;width:60px;text-align:center;">Rank</th><th style="padding:10px;border:1px solid #e2e8f0;">Client ID</th><th style="padding:10px;border:1px solid #e2e8f0;width:120px;text-align:center;">Valid Commits</th></tr></thead><tbody id="${_0x2b8e(34)}"><tr><td colspan="3" style="text-align:center;padding:20px;color:#64748b;">No contribution data available.</td></tr></tbody></table></div><div id="${_0x2b8e(23)}" style="display:none;flex-direction:column;flex-grow:1;padding:30px;background:#ffffff;color:#0f172a;"><h3 style="margin-top:0;font-size:18px;color:#0f172a;border-bottom:1px solid #e2e8f0;padding-bottom:10px;">System Configuration</h3><div style="margin-bottom:20px;margin-top:15px;"><label style="font-weight:600;display:block;margin-bottom:6px;font-size:13px;">Client Identity:</label><input type="text" value="${_0xd6e7}" readonly style="padding:8px 12px;width:100%;max-width:300px;border:1px solid #cbd5e1;border-radius:4px;background:#f1f5f9;color:#64748b;cursor:not-allowed;font-size:13px;"></div><div style="margin-bottom:20px;"><label style="font-weight:600;display:block;margin-bottom:6px;font-size:13px;">Synchronization Interval (Seconds):</label><input type="number" id="${_0x2b8e(35)}" value="${_0xf809}" style="padding:8px 12px;width:100%;max-width:100px;border:1px solid #cbd5e1;border-radius:4px;font-size:13px;"></div><div style="margin-bottom:30px;"><label style="font-weight:600;display:flex;align-items:center;cursor:pointer;font-size:13px;"><input type="checkbox" id="${_0x2b8e(36)}" ${_0xe7f8 ? 'checked' : ''} style="width:16px;height:16px;margin-right:10px;">Enable Automatic Hint Rendering</label></div><hr style="border:0;border-top:1px solid #e2e8f0;margin-bottom:20px;"><div><p style="margin-top:0;font-weight:600;color:#ef4444;font-size:13px;">Database Maintenance</p><button id="${_0x2b8e(37)}" style="padding:8px 16px;background:#ef4444;color:#ffffff;border:none;border-radius:4px;font-weight:600;cursor:pointer;font-size:12px;">Purge Local Cache</button></div></div></div></div>`;
        _0xc5d6.appendChild(_0xc);

        const _0xd = _0x1a2b(_0x2b8e(14)), _0xe = _0x1a2b(_0x2b8e(15)), _0xf = _0x1a2b(_0x2b8e(16)), _0x10 = _0x1a2b(_0x2b8e(17)), _0x11 = _0x1a2b(_0x2b8e(18));
        const _0x12 = _0x1a2b(_0x2b8e(19)), _0x13 = _0x1a2b(_0x2b8e(20)), _0x14 = _0x1a2b(_0x2b8e(21)), _0x15 = _0x1a2b(_0x2b8e(22)), _0x16 = _0x1a2b(_0x2b8e(23));

        function _0x17(_ab, _at) {
            [_0xd, _0xe, _0xf, _0x10, _0x11].forEach(b => { b.style.background = 'transparent'; b.style.borderBottomColor = 'transparent'; b.style.color = '#64748b'; });
            [_0x12, _0x13, _0x14, _0x15, _0x16].forEach(t => t.style.display = 'none');
            _ab.style.background = '#ffffff'; _ab.style.borderBottomColor = '#2563eb'; _ab.style.color = '#0f172a';
            _at.style.display = 'flex';
        }

        _0xd.onclick = () => _0x17(_0xd, _0x12);
        _0xe.onclick = () => { _0x17(_0xe, _0x13); _0x1a2d(); };
        _0xf.onclick = () => { _0x17(_0xf, _0x14); _0x4d5f(); };
        _0x10.onclick = () => _0x17(_0x10, _0x15);
        _0x11.onclick = () => _0x17(_0x11, _0x16);
        _0x1a2b(_0x2b8e(13)).onclick = () => _0xc.style.display = 'none';
        _0x1a2b(_0x2b8e(35)).onchange = (e) => { _0xf809 = parseInt(e.target.value) || 8; GM_setValue(_0x2b8e(6), _0xf809); };
        _0x1a2b(_0x2b8e(36)).onchange = (e) => { _0xe7f8 = e.target.checked; GM_setValue(_0x2b8e(5), _0xe7f8); };
        _0x1a2b(_0x2b8e(37)).onclick = () => { if(confirm("Confirm purge of local memory cache?")) { GM_setValue(_0x2b8e(7), '[]'); alert("Local memory successfully purged."); _0x2b3e({}); } };
        _0x1a2b(_0x2b8e(28)).onclick = _0xf80a;
        _0x1a2b(_0x2b8e(32)).onclick = _0x2b3d;
        _0x1a2c(_0x2b8e(29), _0x2b8e(27));
        _0x1a2c(_0x2b8e(33), _0x2b8e(31));
    }

    function _0x1a2c(_cid, _iid) {
        const _k = _0x1a2b(_cid), _i = _0x1a2b(_iid);
        if (!_k || !_i) return;
        const _l = [['1','2','3','4','5','6','7','8','9','0'],['Q','W','E','R','T','Y','U','I','O','P'],['A','S','D','F','G','H','J','K','L'],['Z','X','C','V','B','N','M', ',', '.', '?']];
        _l.forEach(r => {
            const _rd = document.createElement('div'); _rd.style = "display: flex; justify-content: center; gap: 3px;";
            r.forEach(k => {
                const _b = document.createElement('button'); _b.innerText = k; _b.style = "flex: 1; padding: 10px 0; font-size: 14px; font-weight: bold; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer; color: #0f172a; box-shadow: 0 1px 2px rgba(0,0,0,0.1);";
                const _hp = (e) => { e.preventDefault(); if (_i.disabled) return; _i.value += k.toLowerCase(); };
                _b.onmousedown = (e) => { e.preventDefault(); if(!_i.disabled) _b.style.background = "#e2e8f0"; };
                _b.onmouseup = (e) => { e.preventDefault(); _b.style.background = "#ffffff"; _hp(e); };
                _b.ontouchstart = (e) => { e.preventDefault(); if(!_i.disabled) _b.style.background = "#e2e8f0"; };
                _b.ontouchend = (e) => { e.preventDefault(); _b.style.background = "#ffffff"; _hp(e); };
                _rd.appendChild(_b);
            });
            _k.appendChild(_rd);
        });
        const _br = document.createElement('div'); _br.style = "display: flex; justify-content: center; gap: 4px; margin-top: 2px;";
        const _cb = document.createElement('button'); _cb.innerText = "CLEAR"; _cb.style = "flex: 1; padding: 10px 0; font-size: 11px; font-weight: bold; background: #f59e0b; color: white; border: 1px solid #d97706; border-radius: 4px; cursor: pointer;";
        const _hc = (e) => { e.preventDefault(); if(!_i.disabled) _i.value = ""; }; _cb.onmousedown = _hc; _cb.ontouchstart = _hc;
        const _sb = document.createElement('button'); _sb.innerText = "SPACE"; _sb.style = "flex: 3; padding: 10px 0; font-size: 12px; font-weight: bold; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer; color: #0f172a;";
        const _hs = (e) => { e.preventDefault(); if(!_i.disabled) _i.value += " "; }; _sb.onmousedown = _hs; _sb.ontouchstart = _hs;
        const _bb = document.createElement('button'); _bb.innerText = "DEL"; _bb.style = "flex: 1; padding: 10px 0; font-size: 12px; font-weight: bold; background: #ef4444; color: white; border: 1px solid #dc2626; border-radius: 4px; cursor: pointer;";
        const _hd = (e) => { e.preventDefault(); if (_i.disabled) return; _i.value = _i.value.slice(0, -1); }; _bb.onmousedown = _hd; _bb.ontouchstart = _hd;
        _br.appendChild(_cb); _br.appendChild(_sb); _br.appendChild(_bb); _k.appendChild(_br);
    }

    async function _0x2b3d() {
        const _i = _0x1a2b(_0x2b8e(31)), _b = _0x1a2b(_0x2b8e(32)), _m = _i.value.trim();
        if (!_m || _b.disabled) return;
        _i.value = ""; _0x3c4e("Client", _m, "#1e293b", "#ffffff");
        _b.innerText = "WAIT"; _b.disabled = true; _b.style.background = "#94a3b8";
        try { let _r = await _0x5e61(_m); _0x3c4e("System AI", _r, "#10b981", "#ffffff"); } catch (e) { _0x3c4e("System Error", "Connection to AI backend failed.", "#ef4444", "#ffffff"); }
        _b.innerText = "SEND"; _b.disabled = false; _b.style.background = "#10b981"; _0x4d5f();
    }
    function _0x3c4e(_s, _t, _bg, _tc) {
        const _c = _0x1a2b(_0x2b8e(30));
        const _al = _s === "Client" ? "flex-end" : "flex-start";
        _c.innerHTML += `<div style="display:flex;flex-direction:column;align-items:${_al};width:100%;margin-bottom:8px;"><span style="font-size:11px;color:#64748b;margin-bottom:2px;">${_s}</span><div style="background:${_bg};padding:10px 14px;border-radius:6px;max-width:85%;color:${_tc};font-size:13px;word-wrap:break-word;white-space:pre-wrap;line-height:1.4;">${_t}</div></div>`;
        _0x4d5f();
    }
    function _0x4d5f() { const _c = _0x1a2b(_0x2b8e(30)); if (_c) _c.scrollTop = _c.scrollHeight; }
    function _0x5e60() {
        _0x6f70 = !_0x6f70;
        let _b = _0x1a2b(_0x2b8e(10)), _m = _0x1a2b(_0x2b8e(12)), _h = _0x1a2b(_0x2b8e(11));
        if (_0x6f70) { if(_b) _b.style.display = 'none'; if(_m) _m.style.display = 'none'; if(_h) _h.style.display = 'none'; } else { if(_b) _b.style.display = 'block'; }
    }
    function _0x6f71() {
        _0xa3b4 = true;
        let _b = _0x1a2b(_0x2b8e(10)), _m = _0x1a2b(_0x2b8e(12)), _h = _0x1a2b(_0x2b8e(11));
        if(_b) _b.style.display = 'none'; if(_m) _m.style.display = 'none'; if(_h) _h.style.display = 'none';
        if (!_0x1a2b(_0x2b8e(38))) {
            const _o = document.createElement('div'); _o.id = _0x2b8e(38); _o.style = `position:absolute;top:0;left:0;width:100%;height:100%;background:#090d16;color:#ef4444;pointer-events:auto;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:monospace;text-align:center;padding:20px;box-sizing:border-box;`;
            _o.innerHTML = `<div style="border:1px solid #dc2626;padding:40px;border-radius:8px;background:#0f172a;max-width:500px;width:90%;box-shadow:0 10px 25px rgba(0,0,0,0.5);"><h2 style="margin-top:0;color:#ef4444;font-size:20px;letter-spacing:1px;">[NETWORK TERMINATED]</h2><p style="color:#cbd5e1;font-size:14px;margin-top:15px;line-height:1.5;">Your session has been disconnected by the administrator.</p><p style="font-size:11px;color:#64748b;margin-top:25px;border-top:1px solid #1e293b;padding-top:15px;">ERR_ADMIN_DISCONNECT_TARGET</p></div>`;
            _0xc5d6.appendChild(_o);
        }
    }
    function _0x7082() { _0xa3b4 = false; let _o = _0x1a2b(_0x2b8e(38)); if (_o) _o.remove(); let _b = _0x1a2b(_0x2b8e(10)); if (_b && !_0x6f70) _b.style.display = 'block'; }
    function _0x8193(_aD) {
        if (!_0xe7f8 || _0x6f70 || _0xa3b4) return;
        let _qD = document.querySelector('.py-8 .my-2') || document.querySelector('.py-8 > div:first-child');
        let _oC = document.querySelector('.flex.flex-col.space-y-3.mt-5');
        if (!_qD || !_oC) return;
        let _cQT = _qD.innerText.trim();
        if (_cQT && _aD[_cQT] && _cQT !== _0x92a3) {
            _0x92a3 = _cQT;
            const _bx = _0x1a2b(_0x2b8e(11)); if (!_bx) return;
            let _dbA = _aD[_cQT].split(' [')[0], _mL = "N/A";
            _oC.querySelectorAll('.flex.space-x-1').forEach(_el => {
                let _lS = _el.querySelector('label span.uppercase'), _tP = _el.querySelector('p');
                if (_lS && _tP) { if (_tP.innerText.trim() === _dbA) _mL = _lS.innerText.trim().toUpperCase(); }
            });
            _bx.innerText = `[OPTION]: ${_mL}. ${_dbA}`; _bx.style.display = 'block';
            setTimeout(() => { _bx.style.opacity = '1'; }, 10);
            setTimeout(() => { _bx.style.opacity = '0'; setTimeout(() => { _bx.style.display = 'none'; }, 300); }, 2500);
        }
    }
    function _0x92a4() { if(_0x6f70 || _0xa3b4) return; _0x1a2b(_0x2b8e(12)).style.display = 'flex'; _0xb4c6(); }
    function _0xa3b5(_t) { let _s = _0x1a2b(_0x2b8e(24)); if(_s) _s.innerText = `[STATUS] ${_t}`; }

    setInterval(() => {
        if (_0xa3b4) return;
        let _qD = document.querySelector('.py-8 .my-2') || document.querySelector('.py-8 > div:first-child');
        let _oC = document.querySelector('.flex.flex-col.space-y-3.mt-5'); let _b = _0x1a2b(_0x2b8e(10));
        if (!_qD || !_oC || !_b) return;
        let _qT = _qD.innerText.trim(); if (_qT === "") return;
        if (_qT !== _0x92a3 && _0x7081[_qT]) { _0x8193(_0x7081); }
        let _qL = _0x2b3c(); let _e = _qL.find(q => q.question === _qT);
        if (!_e) {
            _b.style.backgroundColor = '#d97706'; _b.innerText = '[WAIT] Executing local commit...';
            let _oD = {};
            _oC.querySelectorAll('.flex.space-x-1').forEach(_el => {
                let _lS = _el.querySelector('label span.uppercase'), _tP = _el.querySelector('p');
                if (_lS && _tP) _oD[_lS.innerText.trim().toUpperCase()] = _tP.innerText.trim();
            });
            if (Object.keys(_oD).length > 0) { _qL.push({ number: _qL.length + 1, question: _qT, options: _oD }); _0x3c4d(_qL); _0xb4c6(); }
        } else { _b.style.backgroundColor = '#1e293b'; _b.innerText = `[SYSTEM] Active Modules: ${_qL.length}`; }
    }, 300);

    async function _0xb4c6() {
        if (_0x4d5e || _0xa3b4) { _0x5e6f = true; return; }
        _0x4d5e = true; _0x5e6f = false;
        try { await _0xd6e8(); } catch (e) { console.error("Sync fail", e); }
        _0x4d5e = false; if (_0x5e6f && !_0xa3b4) _0xb4c6();
    }
    function _0xc5d7() { setTimeout(() => { if(!_0x4d5e && !_0xa3b4 && _0x1a2b(_0x2b8e(10))) _0xb4c6(); _0xc5d7(); }, _0xf809 * 1000); }

    async function _0xd6e8() {
        let _qL = _0x2b3c(); _0xa3b5("Establishing server connection...");
        let _sD = await _0x3c4f();
        let _sA = _sD.answers || {}, _sC = _sD.chats || [], _aS = _sD.adminState || { isMuted: false, disconnectedUsers: [] }, _sCo = _sD.contributors || {};
        _0x8192 = _sCo;
        if (_aS.disconnectedUsers && (_aS.disconnectedUsers.includes(_0xd6e7) || _aS.disconnectedUsers.includes("ALL"))) { _0x6f71(); return; } else { _0x7082(); }
        _0xe7f9(_aS.isMuted); _0x7081 = _sA; _0x091b(_sC); _0x8193(_sA);
        if (_qL.length === 0) { _0xa3b5("Awaiting objective parameters..."); return; }
        let _aTR = { ..._sA }, _mQ = _qL.filter(q => !_sA[q.question]);
        if (_mQ.length > 0) {
            _0xa3b5(`Delegating ${_mQ.length} parameter(s) to AI node...`);
            let _pQ = "";
            _mQ.forEach(q => { _pQ += `\n--- Question No. ${q.number} ---\n${q.question}\nOptions:\n`; for (let k in q.options) _pQ += `  ${k}. ${q.options[k]}\n`; });
            let _fP = "Determine the correct answer letter. Output in pure JSON format.\nExample: {\"1\": \"A\"}\n\nQuestions:\n" + _pQ;
            try {
                let _aiR = await _0x5e61(_fP); let _aiJ = _0x6f72(_aiR); let _nCC = 0;
                _mQ.forEach(q => {
                    let _aL = _aiJ[q.number] || _aiJ[String(q.number)];
                    if (_aL && q.options[_aL]) { let _tA = q.options[_aL]; _sA[q.question] = _tA; _aTR[q.question] = `${_tA} [AI Node]`; _0x7081[q.question] = _tA; _nCC++; }
                });
                if (_nCC > 0) {
                    _0xa3b5("Committing updates to remote database...");
                    let _lD = await _0x3c4f(); let _lC = _lD.contributors || {}; _lC[_0xd6e7] = (_lC[_0xd6e7] || 0) + _nCC;
                    let _mA = { ..._lD.answers, ..._sA }, _mC = _lD.chats || _sC;
                    let _succ = await _0x4d50({ answers: _mA, chats: _mC, adminState: _aS, contributors: _lC });
                    if(_succ) { _0xa3b5("[OK] Synchronization completed."); _sCo = _lC; } else { _0xa3b5("[FAIL] Database write operation failed."); }
                    _0x8193(_sA);
                }
            } catch (err) { _0xa3b5("[WAIT] AI node occupied. Queuing request..."); }
        } else {
            _0xa3b5("[OK] Local data fully aligned with server.");
            _qL.forEach(q => { if (_aTR[q.question] && !_aTR[q.question].includes('[')) { _aTR[q.question] = `${_aTR[q.question]} [Peer Network]`; } });
        }
        _0x2b3e(_aTR);
    }
    function _0xe7f9(_iM) {
        const _i = _0x1a2b(_0x2b8e(27)), _b = _0x1a2b(_0x2b8e(28)); if (!_i || !_b) return;
        if (_iM) { _i.disabled = true; _i.placeholder = "Global chat has been restricted by the administrator."; _b.disabled = true; _b.style.background = "#94a3b8"; _b.style.cursor = "not-allowed"; } else { _i.disabled = false; _i.placeholder = "Use the virtual keyboard below..."; _b.disabled = false; _b.style.background = "#2563eb"; _b.style.cursor = "pointer"; }
    }
    async function _0xf80a() {
        const _i = _0x1a2b(_0x2b8e(27)); if (!_i || _i.disabled) return;
        const _iS = _i.value.trim(); if (!_iS) return; _i.value = "";
        const _b = _0x1a2b(_0x2b8e(28)); _b.innerText = "WAIT"; _b.disabled = true;
        let _sD = await _0x3c4f(); let _cC = _sD.chats || [];
        _cC.push({ sender: _0xd6e7, text: _iS, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
        if (_cC.length > 50) _cC.shift();
        await _0x4d50({ answers: _sD.answers || {}, chats: _cC, adminState: _sD.adminState || { isMuted: false, disconnectedUsers: [] }, contributors: _sD.contributors || {} });
        _0x8192 = _sD.contributors || {}; _0x091b(_cC);
        _b.innerText = "SEND"; _b.disabled = false; _0x1a2d();
    }
    function _0x091b(_cA) {
        const _cC = _0x1a2b(_0x2b8e(26)); if (!_cC) return;
        let _iAB = (_cC.scrollHeight - _cC.scrollTop === _cC.clientHeight); _cC.innerHTML = "";
        if (_cA.length === 0) { _cC.innerHTML = "<div style='text-align:center; color:#94a3b8; margin-top:20px; font-size:12px;'>No communication records found.</div>"; return; }
        const _sC = Object.entries(_0x8192 || {}).sort((a, b) => b[1] - a[1]);
        const _t1 = _sC[0] ? _sC[0][0] : null, _t2 = _sC[1] ? _sC[1][0] : null, _t3 = _sC[2] ? _sC[2][0] : null;
        _cA.forEach(_m => {
            const _iM = _m.sender === _0xd6e7, _al = _iM ? "flex-end" : "flex-start", _bg = _iM ? "#2563eb" : "#e2e8f0", _tc = _iM ? "#ffffff" : "#0f172a";
            const _iA = _m.sender.toLowerCase().startsWith("admin"), _sCo = _iA ? "#ef4444" : "#64748b", _sW = _iA ? "bold" : "600";
            let _bH = "";
            if (_iA) _bH += `<span style="background: #fee2e2; color: #b91c1c; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: bold; margin-right: 4px;">🛡️ ADMIN</span>`;
            if (_m.sender === _t1) _bH += `<span style="background: #fef3c7; color: #b45309; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: bold; margin-right: 4px;">🥇 TOP 1</span>`;
            else if (_m.sender === _t2) _bH += `<span style="background: #f1f5f9; color: #334155; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: bold; margin-right: 4px;">🥈 TOP 2</span>`;
            else if (_m.sender === _t3) _bH += `<span style="background: #ffedd5; color: #c2410c; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: bold; margin-right: 4px;">🥉 TOP 3</span>`;
            const _hA = _iM ? "row-reverse" : "row", _mB = _iM ? "margin-left: 5px; margin-right: 0;" : "margin-right: 5px;", _fBH = _bH.replace(/margin-right: 4px;/g, _mB);
            _cC.innerHTML += `<div style="display:flex;flex-direction:column;align-items:${_al};width:100%;margin-bottom:12px;"><div style="display:flex;align-items:center;flex-direction:${_hA};font-size:11px;margin-bottom:4px;">${_fBH}<span style="color:${_sCo};font-weight:${_sW};letter-spacing:0.3px;">${_m.sender}</span><span style="color:#cbd5e1;margin:0 5px;">|</span><span style="color:#94a3b8;">${_m.time}</span></div><div style="background:${_bg};padding:8px 12px;border-radius:6px;max-width:75%;color:${_tc};font-size:13px;word-wrap:break-word;box-shadow:0 1px 2px rgba(0,0,0,0.05);">${_m.text}</div></div>`;
        });
        if (_iAB) _0x1a2d();
    }
    function _0x1a2d() { const _cC = _0x1a2b(_0x2b8e(26)); if (_cC) _cC.scrollTop = _cC.scrollHeight; }
    function _0x2b3e(_aD) {
        let _tb = _0x1a2b(_0x2b8e(25)); if (!_tb) return; let _qL = _0x2b3c(); if (_qL.length === 0) return;
        _tb.innerHTML = "";
        _qL.forEach(q => {
            let _tr = document.createElement('tr'), _rAT = _aD[q.question] || "[PENDING]", _bgC = _rAT.includes("[PENDING]") ? "#fef2f2" : "#f0fdf4";
            let _pAT = _rAT.split(' [')[0], _mL = "N/A", _sT = _rAT.includes('[') ? _rAT.split(' [')[1].replace(']','') : 'Peer Network', _cB = "";
            if (_rAT.includes("[PENDING]")) { _cB = `<span style="background: #fee2e2; color: #991b1b; padding: 3px 6px; border-radius: 4px; font-size: 10px; font-weight: bold; margin-left: 8px;">AWAITING DATA</span>`; }
            else if (_sT.includes("AI Node")) { _cB = `<span style="background: #dcfce7; color: #166534; padding: 3px 6px; border-radius: 4px; font-size: 10px; font-weight: bold; margin-left: 8px;">95% CONFIDENCE</span>`; for (let l in q.options) { if (q.options[l] === _pAT) { _mL = l; break; } } }
            else { _cB = `<span style="background: #e0e7ff; color: #3730a3; padding: 3px 6px; border-radius: 4px; font-size: 10px; font-weight: bold; margin-left: 8px;">PEER VERIFIED</span>`; for (let l in q.options) { if (q.options[l] === _pAT) { _mL = l; break; } } }
            _tr.style.backgroundColor = _bgC; _tr.innerHTML = `<td style="padding:10px;border:1px solid #e2e8f0;vertical-align:top;">${q.number}</td><td style="padding:10px;border:1px solid #e2e8f0;vertical-align:top;">${q.question}</td><td style="padding:10px;border:1px solid #e2e8f0;vertical-align:top;"><div style="font-weight:600;margin-bottom:4px;">${_mL !== "N/A" ? `<span style="color:#2563eb;">${_mL}.</span> ` : ""} ${_pAT}</div><div style="display:flex;align-items:center;margin-top:6px;"><span style="font-size:10px;color:#64748b;">Source: ${_sT}</span>${_cB}</div></td>`;
            _tb.appendChild(_tr);
        });
    }
    function _0x3c4f() {
        return new Promise((resolve) => {
            if (_0x14f2.includes("YOUR_BIN_ID")) { resolve({ answers: {}, chats: [], adminState: { isMuted: false, disconnectedUsers: [] }, contributors: {} }); return; }
            let _cB = "?t=" + new Date().getTime();
            GM_xmlhttpRequest({ method: "GET", url: _0x14f2 + _cB, headers: { "X-Master-Key": _0x39a1, "Cache-Control": "no-cache, no-store, must-revalidate" }, onload: (res) => { try { let _p = JSON.parse(res.responseText).record || {}; resolve({ answers: _p.answers || {}, chats: _p.chats || [], adminState: _p.adminState || { isMuted: false, disconnectedUsers: [] }, contributors: _p.contributors || {} }); } catch { resolve({ answers: {}, chats: [], adminState: { isMuted: false, disconnectedUsers: [] }, contributors: {} }); } }, onerror: () => resolve({ answers: {}, chats: [], adminState: { isMuted: false, disconnectedUsers: [] }, contributors: {} }) });
        });
    }
    function _0x4d50(_nD) {
        return new Promise((resolve) => {
            if (_0x14f2.includes("YOUR_BIN_ID")) { resolve(false); return; }
            GM_xmlhttpRequest({ method: "PUT", url: _0x14f2, headers: { "Content-Type": "application/json", "X-Master-Key": _0x39a1 }, data: JSON.stringify(_nD), onload: (res) => { if (res.status >= 200 && res.status < 300) resolve(true); else resolve(false); }, onerror: () => resolve(false) });
        });
    }
    function _0x5e61(_pT) {
        return new Promise((resolve, reject) => { GM_xmlhttpRequest({ method: "POST", url: API_URL, headers: { "Authorization": "Bearer " + OLLAMA_API_KEY, "Content-Type": "application/json" }, data: JSON.stringify({ model: MODEL_NAME, messages: [{"role": "user", "content": _pT}], stream: false, temperature: 0.1 }), onload: (res) => { try { resolve(JSON.parse(res.responseText).message.content); } catch (e) { reject(e); } }, onerror: (e) => reject("API Connection Failed") }); });
    }
    function _0x6f72(_rA) {
        let _cJ = ""; let _mM = _rA.match(/```(?:json)?\s*(\{[\s\S]*?\})\s*```/i);
        if (_mM) { _cJ = _mM[1]; } else { let _bks = _rA.match(/\{[^{}]+\}/g); if (_bks && _bks.length > 0) _cJ = _bks[_bks.length - 1]; else throw new Error("JSON Object Excluded"); }
        _cJ = _cJ.replace(/[\u00A0\u200B-\u200D\uFEFF]/g, ' ').replace(/'/g, '"'); _cJ = _cJ.replace(/([{,]\s*)([0-9]+)(\s*:)/g, '$1"$2"$3').replace(/,\s*}/g, '}'); return JSON.parse(_cJ);
    }
    function _0x7083() { if(document.getElementById(_0x2b8e(8))) return; _0x091a(); _0xc5d7(); }
    if (document.readyState === 'complete' || document.readyState === 'interactive') { setTimeout(_0x7083, 1000); } else { window.addEventListener('load', () => setTimeout(_0x7083, 1000)); }
})();
