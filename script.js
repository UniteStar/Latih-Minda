<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Latih Minda! - Belajar Bersama Alia, Ali & Cici</title>
    <!-- Tailwind CSS untuk reka bentuk yang moden & ceria -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Font 'Inter' & 'Fredoka' untuk tipografi mesra kanak-kanak -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <!-- Lucide Icons untuk butang & menu -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <!-- Canvas Confetti untuk animasi ganjaran bintang -->
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
    
    <style>
        body {
            font-family: 'Fredoka', 'Inter', sans-serif;
            background-color: #B2EBF2; /* Biru langit lembut */
            background-image: radial-gradient(#FFF 1.5px, transparent 1.5px);
            background-size: 24px 24px;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            overflow-x: hidden;
        }
        /* Penyesuaian warna pastel premium */
        .bg-pastel-blue { background-color: #6EC6FF; }
        .bg-pastel-green { background-color: #81C784; }
        .bg-pastel-yellow { background-color: #FFF59D; }
        .bg-pastel-cream { background-color: #FFFDE7; }
        .text-pastel-blue { color: #0288D1; }
        .text-pastel-green { color: #2E7D32; }
        
        /* Animasi tersuai melambai tangan maskot Cici */
        @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(25deg); }
        }
        .animate-wave-hand {
            animation: wave 0.6s infinite ease-in-out;
            transform-origin: bottom left;
        }

        /* Animasi menepuk tangan maskot Koko */
        @keyframes clap-left {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(-20deg) translate(-3px, -3px); }
        }
        @keyframes clap-right {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(20deg) translate(3px, -3px); }
        }
        .animate-clap-left {
            animation: clap-left 0.3s infinite ease-in-out;
            display: inline-block;
        }
        .animate-clap-right {
            animation: clap-right 0.3s infinite ease-in-out;
            display: inline-block;
        }

        /* Animasi pergerakan awan SVG secara berterusan (Infinite loop) */
        @keyframes driftCloud {
            0% { transform: translateX(-150px); }
            100% { transform: translateX(450px); }
        }
        .animate-cloud-slow {
            animation: driftCloud 32s infinite linear;
        }
        .animate-cloud-mid {
            animation: driftCloud 22s infinite linear;
        }
        .animate-cloud-fast {
            animation: driftCloud 15s infinite linear;
        }

        /* Animasi melompat comel maskot */
        @keyframes bounce-gentle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }
        .animate-bounce-gentle {
            animation: bounce-gentle 1.8s infinite ease-in-out;
        }
        @keyframes pulse-soft {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.04); }
        }
        .animate-pulse-soft {
            animation: pulse-soft 2s infinite ease-in-out;
        }
        
        /* Gaya butang gelembung premium */
        .bubble-btn {
            box-shadow: 0 8px 0px 0px rgba(0, 0, 0, 0.08);
            transition: all 0.1s ease;
        }
        .bubble-btn:active {
            transform: translateY(4px);
            box-shadow: 0 4px 0px 0px rgba(0, 0, 0, 0.08);
        }
        
        /* Sembunyikan scrollbar */
        ::-webkit-scrollbar {
            display: none;
        }

        /* Animasi hilangkan Cici (Fade out & Shrink) */
        .fade-out-cici {
            animation: ciciDisappear 0.8s forwards ease-in-out;
        }
        @keyframes ciciDisappear {
            0% { opacity: 1; transform: scale(1); max-height: 200px; margin-top: 8px; margin-bottom: 8px; }
            100% { opacity: 0; transform: scale(0.6); max-height: 0px; margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; overflow: hidden; display: none; }
        }

        /* Animasi/Pergerakan Elemen Terapung (Belon & Burung) */
        @keyframes fly-left-right {
            0% { left: -100px; transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-40px) rotate(15deg); }
            100% { left: 105vw; transform: translateY(0px) rotate(0deg); }
        }
        @keyframes fly-right-left {
            0% { right: -100px; transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-50px) rotate(-15deg); }
            100% { right: 105vw; transform: translateY(0px) rotate(0deg); }
        }
        @keyframes float-bottom-top {
            0% { bottom: -100px; transform: translateX(0px); }
            50% { transform: translateX(60px); }
            100% { bottom: 105vh; transform: translateX(0px); }
        }
        
        .anim-fly-lr {
            position: fixed;
            animation: fly-left-right 12s linear forwards;
            pointer-events: none;
            z-index: 5;
        }
        .anim-fly-rl {
            position: fixed;
            animation: fly-right-left 12s linear forwards;
            pointer-events: none;
            z-index: 5;
        }
        .anim-float-bt {
            position: fixed;
            animation: float-bottom-top 14s linear forwards;
            pointer-events: none;
            z-index: 5;
        }
    </style>
</head>
<body class="min-h-screen flex flex-col items-center justify-between text-gray-800 antialiased selection:bg-yellow-200 relative pb-6">

    <!-- Bekas Animasi Terapung Bebas (Belon & Burung) -->
    <div id="sky-decorations" class="fixed inset-0 pointer-events-none overflow-hidden z-0"></div>

    <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div class="absolute top-20 left-10 text-5xl opacity-30 animate-bounce-gentle">🎈</div>
        <div class="absolute top-48 right-12 text-6xl opacity-20 animate-bounce-gentle" style="animation-delay: 1s;">🎈</div>
        <div class="absolute bottom-32 left-8 text-5xl opacity-25">🌈</div>
    </div>

    <!-- Kotak Kandungan Utama Permainan (Game Board) -->
    <main id="game-container" class="w-full max-w-md min-h-screen flex flex-col justify-between p-4 relative bg-pastel-cream shadow-2xl overflow-hidden md:rounded-3xl md:min-h-[830px] md:my-6 border-4 border-white z-10">
        
        <!-- Lapisan Latar Belakang Awan Bergerak & Hiasan Bukit -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <!-- Bukit Pastel di Bawah Game Container -->
            <svg class="absolute bottom-0 left-0 w-full opacity-30 fill-emerald-200" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 20 Q 25 10 50 15 T 100 12 L 100 20 Z" />
            </svg>
            <svg class="absolute bottom-0 left-0 w-full opacity-20 fill-emerald-300" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 20 Q 30 8 60 14 T 100 10 L 100 20 Z" />
            </svg>

            <!-- Awan SVG Bergerak Dinamik -->
            <div class="absolute top-12 left-0 w-full animate-cloud-slow">
                <svg viewBox="0 0 100 60" class="w-24 h-14 fill-white/85 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.03)]">
                    <path d="M 20,40 A 15,15 0 0,1 40,20 A 20,20 0 0,1 75,25 A 15,15 0 0,1 80,45 A 10,10 0 0,1 70,50 L 30,50 A 10,10 0 0,1 20,40 Z" />
                </svg>
            </div>
            <div class="absolute top-28 left-0 w-full animate-cloud-mid" style="animation-delay: -10s;">
                <svg viewBox="0 0 100 60" class="w-16 h-10 fill-white/90 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.02)]">
                    <path d="M 20,40 A 15,15 0 0,1 40,20 A 20,20 0 0,1 75,25 A 15,15 0 0,1 80,45 A 10,10 0 0,1 70,50 L 30,50 A 10,10 0 0,1 20,40 Z" />
                </svg>
            </div>
            <div class="absolute top-44 left-0 w-full animate-cloud-fast" style="animation-delay: -5s;">
                <svg viewBox="0 0 100 60" class="w-20 h-12 fill-white/75 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.03)]">
                    <path d="M 20,40 A 15,15 0 0,1 40,20 A 20,20 0 0,1 75,25 A 15,15 0 0,1 80,45 A 10,10 0 0,1 70,50 L 30,50 A 10,10 0 0,1 20,40 Z" />
                </svg>
            </div>
        </div>
        
        <!-- Header Atas (Profil Ringkas, Pemasa, & Bintang) -->
        <header id="game-header" class="hidden flex items-center justify-between w-full bg-white/95 backdrop-blur-md rounded-2xl p-3 border-2 border-yellow-100 shadow-sm z-10">
            <div class="flex items-center gap-2">
                <div id="header-avatar" class="w-10 h-10 rounded-full bg-pastel-yellow border-2 border-white flex items-center justify-center text-2xl shadow-inner">👦</div>
                <div>
                    <h3 id="header-name" class="font-bold text-sm text-gray-700 leading-tight">Adik</h3>
                    <p id="header-badge" class="text-[10px] text-pastel-green font-semibold bg-green-50 px-2 py-0.5 rounded-full">Pintar Cilik</p>
                </div>
            </div>
            <!-- Paparan Pemasa Belajar -->
            <div id="header-timer-box" class="hidden flex items-center gap-1 bg-red-100 text-red-700 border border-red-200 px-2.5 py-1 rounded-full text-xs font-bold animate-pulse-soft">
                <span>⏱️</span>
                <span id="header-timer-display">00:00</span>
            </div>
            <div class="flex items-center gap-1.5 bg-yellow-100/80 border border-yellow-200 px-3 py-1 rounded-full shadow-sm animate-pulse-soft">
                <span class="text-xl">⭐</span>
                <span id="header-stars" class="font-bold text-yellow-700 text-sm">0</span>
            </div>
        </header>

        <!-- Dynamic Content Section -->
        <div id="content-area" class="flex-grow flex flex-col justify-center items-center w-full mt-4 mb-4 z-10">
            <!-- Kandungan skrin akan diganti menggunakan JavaScript -->
        </div>

        <!-- Maskot Dialog Sentiasa Terpapar di Bawah Skrin Permainan -->
        <div id="mascot-section" class="hidden flex items-end gap-3 w-full bg-white/90 rounded-2xl p-3 border border-dashed border-yellow-300/85 mb-2 relative z-10">
            <div class="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
                <div id="mascot-face" class="text-5xl animate-bounce-gentle">👧</div>
            </div>
            <div class="bg-white rounded-2xl p-2.5 shadow-sm text-xs border border-yellow-100 relative flex-grow">
                <div class="absolute left-[-6px] bottom-4 w-3 h-3 bg-white border-l border-b border-yellow-100 rotate-45"></div>
                <p id="mascot-text" class="text-gray-700 font-semibold leading-relaxed">Hai adik manis! Mari mulakan kembara minda kita hari ini!</p>
            </div>
        </div>

    </main>

    <!-- Floating Menu Lingkaran (Penjuru Kanan Bawah) -->
    <div id="floating-menu-container" class="hidden fixed bottom-6 md:bottom-12 right-6 md:right-1/2 md:translate-x-[200px] z-50">
        <!-- Butang Utama Terapung -->
        <button onclick="toggleFloatingMenu()" id="menu-trigger-btn" class="w-14 h-14 rounded-full bg-yellow-400 border-4 border-white shadow-xl flex items-center justify-center text-white hover:bg-yellow-500 active:scale-95 transition-all">
            <i id="menu-icon-lucide" data-lucide="menu" class="w-7 h-7 stroke-[3]"></i>
        </button>
        <!-- Senarai Butang Terapung Menu -->
        <div id="floating-menu-options" class="absolute bottom-16 right-0 flex flex-col gap-3 scale-0 origin-bottom-right transition-transform duration-300">
            <button onclick="navigate('home')" class="w-12 h-12 rounded-full bg-white border-2 border-pastel-blue text-pastel-blue shadow-lg flex items-center justify-center" title="Utama">
                <i data-lucide="home" class="w-5 h-5"></i>
            </button>
            <button onclick="navigate('ganjaran')" class="w-12 h-12 rounded-full bg-white border-2 border-yellow-400 text-yellow-600 shadow-lg flex items-center justify-center" title="Ganjaran">
                <i data-lucide="gift" class="w-5 h-5"></i>
            </button>
            <button onclick="navigate('lencana')" class="w-12 h-12 rounded-full bg-white border-2 border-purple-400 text-purple-600 shadow-lg flex items-center justify-center" title="Lencana">
                <i data-lucide="award" class="w-5 h-5"></i>
            </button>
            <button onclick="navigate('kedudukan')" class="w-12 h-12 rounded-full bg-white border-2 border-amber-400 text-amber-600 shadow-lg flex items-center justify-center" title="Kedudukan">
                <i data-lucide="trophy" class="w-5 h-5"></i>
            </button>
            <button onclick="openParentsGate()" class="w-12 h-12 rounded-full bg-white border-2 border-red-400 text-red-600 shadow-lg flex items-center justify-center" title="Ibu Bapa">
                <i data-lucide="lock" class="w-5 h-5"></i>
            </button>
        </div>
    </div>

    <!-- Modals & Overlays -->
    <!-- 1. Pintu Keselamatan Ibu Bapa (DENGAN KEYPAD FIZIKAL ATAS SKRIN) -->
    <div id="parents-gate-modal" class="fixed inset-0 bg-black/50 hidden items-center justify-center p-4 z-50 backdrop-blur-sm">
        <div class="bg-white rounded-3xl p-5 w-full max-w-xs text-center border-4 border-red-300 shadow-2xl scale-95 transition-all">
            <div class="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <i data-lucide="lock" class="w-6 h-6"></i>
            </div>
            <h3 class="font-bold text-base text-red-700 leading-tight">Bahagian Ibu Bapa</h3>
            <p class="text-[10px] text-gray-500 mt-0.5 mb-2">Sila selesaikan soalan matematik di bawah:</p>
            
            <div id="parents-math-question" class="text-xl font-bold text-gray-800 bg-gray-100 py-1.5 px-4 rounded-xl mb-2 inline-block w-full">5 + 3 = ?</div>
            
            <!-- Jawapan Bertulis -->
            <div class="bg-gray-50 border-2 border-gray-200 rounded-xl py-2 px-3 text-lg font-black text-gray-800 mb-2 tracking-widest min-h-[44px] flex items-center justify-center" id="parents-keypad-display"></div>
            
            <!-- Papan Numpad Interaktif -->
            <div class="grid grid-cols-3 gap-1.5 mb-3">
                <button onclick="parentsNumpadPress(1)" class="py-2.5 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-sm rounded-xl border border-gray-200 transition-all shadow-sm">1</button>
                <button onclick="parentsNumpadPress(2)" class="py-2.5 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-sm rounded-xl border border-gray-200 transition-all shadow-sm">2</button>
                <button onclick="parentsNumpadPress(3)" class="py-2.5 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-sm rounded-xl border border-gray-200 transition-all shadow-sm">3</button>
                <button onclick="parentsNumpadPress(4)" class="py-2.5 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-sm rounded-xl border border-gray-200 transition-all shadow-sm">4</button>
                <button onclick="parentsNumpadPress(5)" class="py-2.5 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-sm rounded-xl border border-gray-200 transition-all shadow-sm">5</button>
                <button onclick="parentsNumpadPress(6)" class="py-2.5 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-sm rounded-xl border border-gray-200 transition-all shadow-sm">6</button>
                <button onclick="parentsNumpadPress(7)" class="py-2.5 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-sm rounded-xl border border-gray-200 transition-all shadow-sm">7</button>
                <button onclick="parentsNumpadPress(8)" class="py-2.5 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-sm rounded-xl border border-gray-200 transition-all shadow-sm">8</button>
                <button onclick="parentsNumpadPress(9)" class="py-2.5 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-sm rounded-xl border border-gray-200 transition-all shadow-sm">9</button>
                <button onclick="parentsNumpadPress('clear')" class="py-2.5 bg-red-50 active:bg-red-100 text-red-600 font-extrabold text-xs rounded-xl border border-red-100">Padam</button>
                <button onclick="parentsNumpadPress(0)" class="py-2.5 bg-gray-100 active:bg-gray-200 text-gray-800 font-extrabold text-sm rounded-xl border border-gray-200">0</button>
                <button onclick="verifyParentsGate()" class="py-2.5 bg-green-50 active:bg-green-100 text-green-600 font-extrabold text-xs rounded-xl border border-green-100">OK</button>
            </div>

            <div id="parents-error-msg" class="text-[10px] text-red-500 font-bold mb-2 hidden">Jawapan salah! Sila cuba lagi.</div>
            
            <button onclick="closeParentsGate()" class="w-full py-2 bg-gray-200 rounded-xl text-gray-600 font-bold text-xs hover:bg-gray-300">Batal</button>
        </div>
    </div>

    <!-- 2. Kotak Pengumuman Mesej Custom -->
    <div id="message-modal" class="fixed inset-0 bg-black/50 hidden items-center justify-center p-4 z-50 backdrop-blur-sm">
        <div class="bg-white rounded-3xl p-6 w-full max-w-xs text-center border-4 border-yellow-400 shadow-2xl scale-95 transition-all">
            <div id="msg-modal-icon" class="text-5xl mb-3">⭐</div>
            <h3 id="msg-modal-title" class="font-bold text-lg text-yellow-700 mb-1">Mesej</h3>
            <p id="msg-modal-body" class="text-xs text-gray-500 mb-4">Maklumat mesej diletakkan di sini.</p>
            <button onclick="closeMessageModal()" class="w-full py-2 bg-yellow-400 text-white rounded-xl font-bold hover:bg-yellow-500">Baiklah</button>
        </div>
    </div>

    <!-- 3. Kotak Pengesahan Reset Data -->
    <div id="confirm-modal" class="fixed inset-0 bg-black/50 hidden items-center justify-center p-4 z-50 backdrop-blur-sm">
        <div class="bg-white rounded-3xl p-6 w-full max-w-xs text-center border-4 border-red-400 shadow-2xl scale-95 transition-all">
            <div class="text-5xl mb-3">⚠️</div>
            <h3 class="font-bold text-lg text-red-700 mb-1">Padam Rekod?</h3>
            <p class="text-xs text-gray-500 mb-4">Adakah anda pasti mahu memadam semua kemajuan peranti anda?</p>
            <div class="flex gap-2">
                <button onclick="closeConfirmModal()" class="flex-1 py-2 bg-gray-200 rounded-xl text-gray-600 font-bold">Batal</button>
                <button onclick="executeResetData()" class="flex-1 py-2 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600">Ya, Padam</button>
            </div>
        </div>
    </div>

    <!-- 4. Menu Tetapan Ibu Bapa -->
    <div id="settings-modal" class="fixed inset-0 bg-black/50 hidden items-center justify-center p-4 z-50 backdrop-blur-sm">
        <div class="bg-white rounded-3xl p-6 w-full max-sm border-4 border-pastel-blue shadow-2xl">
            <div class="flex items-center justify-between mb-4 border-b pb-2">
                <h3 class="font-bold text-lg text-pastel-blue flex items-center gap-2">
                    <i data-lucide="settings"></i> Tetapan Ibu Bapa
                </h3>
                <button onclick="closeSettings()" class="text-gray-400 hover:text-gray-600">
                    <i data-lucide="x"></i>
                </button>
            </div>
            <div class="space-y-4">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="font-bold text-sm text-gray-700">Kesan Bunyi (SFX)</h4>
                        <p class="text-[10px] text-gray-400">Bunyi klik, ganjaran, confetti</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="sfx-toggle" checked class="sr-only peer" onchange="toggleSFXSetting()">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pastel-green"></div>
                    </label>
                </div>
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="font-bold text-sm text-gray-700">Muzik Latar (BGM)</h4>
                        <p class="text-[10px] text-gray-400">Muzik riang sepanjang permainan</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="bgm-toggle" checked class="sr-only peer" onchange="toggleBGMSetting()">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pastel-green"></div>
                    </label>
                </div>
                <hr>
                <!-- Menetapkan Pemasa Belajar -->
                <div>
                    <h4 class="font-bold text-sm text-gray-700 mb-2">Ubah Pemasa Belajar</h4>
                    <div class="grid grid-cols-4 gap-1">
                        <button onclick="ubahPemasaTetapan(10)" class="py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-lg text-xs">10m</button>
                        <button onclick="ubahPemasaTetapan(20)" class="py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-lg text-xs">20m</button>
                        <button onclick="ubahPemasaTetapan(30)" class="py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-lg text-xs">30m</button>
                        <button onclick="ubahPemasaTetapan(40)" class="py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-lg text-xs">40m</button>
                    </div>
                </div>
                <hr>
                <div>
                    <h4 class="font-bold text-sm text-gray-700 mb-2">Padam Data Kemajuan</h4>
                    <p class="text-[11px] text-gray-400 mb-2">Semua bintang, lencana dan nama profil akan dipadamkan.</p>
                    <button onclick="openConfirmModal()" class="w-full py-2 bg-red-100 hover:bg-red-200 text-red-600 font-bold rounded-xl text-xs transition-colors">
                        Padam Semua Kemajuan
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Overlay Kunci Skrin Tetap (DENGAN KEYPAD FIZIKAL ATAS SKRIN) -->
    <div id="locked-overlay" class="fixed inset-0 bg-yellow-100 hidden flex-col items-center justify-center p-6 text-center z-[999] overflow-hidden">
        <!-- Latar Belakang Pesta Animasi Rawak -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-40 z-0">
            <div class="absolute top-10 left-5 text-6xl animate-bounce-gentle">🎉</div>
            <div class="absolute top-24 right-10 text-5xl animate-bounce-gentle" style="animation-delay: 0.5s;">🎈</div>
            <div class="absolute bottom-20 left-12 text-7xl">🌈</div>
            <div class="absolute bottom-10 right-8 text-6xl animate-bounce-gentle" style="animation-delay: 1s;">✨</div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl animate-spin-slow opacity-15">⭐</div>
        </div>

        <!-- Kandungan Mesej Selesa & Numpad Nyahkunci -->
        <div class="bg-white rounded-3xl p-5 border-4 border-yellow-400 max-w-sm shadow-2xl relative z-10 flex flex-col items-center gap-2 animate-pulse-soft w-full max-w-xs">
            <div class="text-5xl animate-bounce">🐻</div>
            <h2 class="text-xl font-black text-yellow-700">Masa Rehat, Sayang!</h2>
            
            <p class="text-[11px] font-semibold text-gray-700 leading-relaxed bg-yellow-50 p-2.5 rounded-2xl border border-yellow-200">
                "Hai adik~ adik dah belajar lama hari ni. masa untuk berehat ya~ nanti adik sambung belajar semula"
            </p>

            <!-- Bahagian Pengesahan Nyahkunci Ibu Bapa (Numpad) -->
            <div class="w-full border-t border-dashed pt-2 mt-1">
                <p class="text-[9px] text-gray-400 font-bold mb-1">IBU BAPA: Selesaikan soalan ini untuk nyahkunci:</p>
                <div id="locked-math-question" class="text-lg font-bold text-gray-800 bg-gray-100 py-1 px-4 rounded-xl mb-1.5 inline-block w-full">6 + 7 = ?</div>
                
                <!-- Display input jawapan kunci -->
                <div class="bg-gray-50 border-2 border-gray-200 rounded-xl py-1.5 px-3 text-lg font-black text-gray-800 mb-2 tracking-widest min-h-[40px] flex items-center justify-center" id="locked-keypad-display"></div>
                
                <!-- Numpad Fizikal Nyahkunci -->
                <div class="grid grid-cols-3 gap-1">
                    <button onclick="lockedNumpadPress(1)" class="py-2 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-xs rounded-xl border border-gray-200 transition-all shadow-sm">1</button>
                    <button onclick="lockedNumpadPress(2)" class="py-2 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-xs rounded-xl border border-gray-200 transition-all shadow-sm">2</button>
                    <button onclick="lockedNumpadPress(3)" class="py-2 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-xs rounded-xl border border-gray-200 transition-all shadow-sm">3</button>
                    <button onclick="lockedNumpadPress(4)" class="py-2 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-xs rounded-xl border border-gray-200 transition-all shadow-sm">4</button>
                    <button onclick="lockedNumpadPress(5)" class="py-2 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-xs rounded-xl border border-gray-200 transition-all shadow-sm">5</button>
                    <button onclick="lockedNumpadPress(6)" class="py-2 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-xs rounded-xl border border-gray-200 transition-all shadow-sm">6</button>
                    <button onclick="lockedNumpadPress(7)" class="py-2 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-xs rounded-xl border border-gray-200 transition-all shadow-sm">7</button>
                    <button onclick="lockedNumpadPress(8)" class="py-2 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-xs rounded-xl border border-gray-200 transition-all shadow-sm">8</button>
                    <button onclick="lockedNumpadPress(9)" class="py-2 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold text-xs rounded-xl border border-gray-200 transition-all shadow-sm">9</button>
                    <button onclick="lockedNumpadPress('clear')" class="py-2 bg-red-50 active:bg-red-100 text-red-600 font-extrabold text-[10px] rounded-xl border border-red-100">Padam</button>
                    <button onclick="lockedNumpadPress(0)" class="py-2 bg-gray-100 active:bg-gray-200 text-gray-800 font-extrabold text-xs rounded-xl border border-gray-200">0</button>
                    <button onclick="verifyLockedUnlock()" class="py-2 bg-green-50 active:bg-green-100 text-green-600 font-extrabold text-[10px] rounded-xl border border-green-100">OK</button>
                </div>
                <div id="locked-error-msg" class="text-[10px] text-red-500 font-bold mt-1.5 hidden">Jawapan salah! Cuba lagi.</div>
            </div>
        </div>
    </div>

    <script>
        /* ==========================================
           ENJIN AUDIO SINTESIS & AUDIOPLAYBACK (SINKRONIK SFX & BGM)
           ========================================== */
        let audioCtx = null;
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn("AudioContext tidak disokong oleh pelayar ini.", e);
        }

        let sfxEnabled = true;
        let bgmEnabled = true;
        let bgmInterval = null;
        let bgmStep = 0;
        let bgmTempo = 550; // Tempo asal
        let isGameLocked = false; // Status Kunci Permainan

        // Skema nota muzik riang kanak-kanak (C Major Pentatonic)
        const bgmNotes = [
            261.63, 329.63, 392.00, 329.63, 
            293.66, 349.23, 440.00, 349.23, 
            329.63, 392.00, 493.88, 392.00, 
            349.23, 440.00, 523.25, 440.00, 
            392.00, 493.88, 587.33, 493.88, 
            523.25, 392.00, 329.63, 261.63  
        ];

        // Memainkan bunyi seakan Saksafon (Siri gelombang bertindih + vibrato)
        function playSaxNote(freq, time) {
            if (!audioCtx) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            const filter = audioCtx.createBiquadFilter();
            
            const lfo = audioCtx.createOscillator();
            const lfoGain = audioCtx.createGain();
            lfo.frequency.value = 5.2; 
            lfoGain.gain.value = 5; 
            
            lfo.connect(lfoGain);
            lfoGain.connect(osc.frequency);
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, time);
            
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(950, time); 
            
            osc.connect(filter);
            filter.connect(gain);
            gain.connect(audioCtx.destination);
            
            gain.gain.setValueAtTime(0, time);
            gain.gain.linearRampToValueAtTime(0.04, time + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.6);
            
            lfo.start(time);
            osc.start(time);
            lfo.stop(time + 0.6);
            osc.stop(time + 0.6);
        }

        // Memainkan bunyi seakan Seruling (Flute) yang tinggi & berangin
        function playFluteNote(freq, time) {
            if (!audioCtx) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            const lfo = audioCtx.createOscillator();
            const lfoGain = audioCtx.createGain();
            lfo.frequency.value = 6.2; 
            lfoGain.gain.value = 4;
            
            lfo.connect(lfoGain);
            lfoGain.connect(osc.frequency);
            
            osc.type = 'sine'; 
            osc.frequency.setValueAtTime(freq * 2, time); 
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            gain.gain.setValueAtTime(0, time);
            gain.gain.linearRampToValueAtTime(0.035, time + 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.5);
            
            lfo.start(time);
            osc.start(time);
            lfo.stop(time + 0.5);
            osc.stop(time + 0.5);
        }

        function playBgmStep() {
            if (!bgmEnabled || !audioCtx) return;
            if (audioCtx.state === 'suspended') return;

            try {
                const now = audioCtx.currentTime;
                const freq = bgmNotes[bgmStep % bgmNotes.length];

                // Jika skrin berkunci, mainkan instrumen Saksafon & Seruling secara silih ganti
                if (isGameLocked) {
                    if (bgmStep % 2 === 0) {
                        playSaxNote(freq, now); 
                    } else {
                        playFluteNote(freq, now); 
                    }
                } else {
                    // Bunyi biasa (Music Box) semasa permainan aktif
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();

                    osc.connect(gain);
                    gain.connect(audioCtx.destination);

                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now);

                    if (bgmStep % 4 === 0) {
                        const bassOsc = audioCtx.createOscillator();
                        const bassGain = audioCtx.createGain();
                        bassOsc.connect(bassGain);
                        bassGain.connect(audioCtx.destination);
                        bassOsc.type = 'triangle';
                        bassOsc.frequency.setValueAtTime(freq / 2, now);
                        bassGain.gain.setValueAtTime(0.01, now);
                        bassGain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
                        bassOsc.start(now);
                        bassOsc.stop(now + 1.5);
                    }

                    gain.gain.setValueAtTime(0.015, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
                    osc.start(now);
                    osc.stop(now + 0.8);
                }

                bgmStep++;
            } catch (err) {
                console.warn("Gagal memainkan langkah BGM:", err);
            }
        }

        function startBGM() {
            if (bgmInterval) clearInterval(bgmInterval);
            if (!audioCtx) return;
            
            if (audioCtx.state === 'suspended') {
                audioCtx.resume().catch(err => console.log("Gagal menyambung AudioContext:", err));
            }
            
            // Ubah tempo berdasarkan status kunci
            bgmTempo = isGameLocked ? 250 : 550; // Tempo sangat rancak jika dikunci
            bgmInterval = setInterval(playBgmStep, bgmTempo);
        }

        function stopBGM() {
            if (bgmInterval) {
                clearInterval(bgmInterval);
                bgmInterval = null;
            }
        }

        function playSFX(type) {
            if (!sfxEnabled || !audioCtx) return;
            if (audioCtx.state === 'suspended') {
                audioCtx.resume().catch(err => console.log("Gagal menyambung AudioContext:", err));
            }
            try {
                const now = audioCtx.currentTime;

                if (type === 'click') {
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(150, now);
                    osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
                    
                    gain.gain.setValueAtTime(0.12, now);
                    gain.gain.linearRampToValueAtTime(0.01, now + 0.1);
                    
                    osc.start(now);
                    osc.stop(now + 0.1);
                } 
                else if (type === 'success') {
                    const notes = [523.25, 659.25, 783.99, 1046.50];
                    notes.forEach((freq, index) => {
                        const t = now + (index * 0.08);
                        const osc = audioCtx.createOscillator();
                        const gain = audioCtx.createGain();
                        osc.connect(gain);
                        gain.connect(audioCtx.destination);
                        
                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(freq, t);
                        
                        gain.gain.setValueAtTime(0.15, t);
                        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
                        
                        osc.start(t);
                        osc.stop(t + 0.3);
                    });
                } 
                else if (type === 'fail') {
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(300, now);
                    osc.frequency.linearRampToValueAtTime(100, now + 0.4);
                    
                    gain.gain.setValueAtTime(0.12, now);
                    gain.gain.linearRampToValueAtTime(0.001, now + 0.4);
                    
                    osc.start(now);
                    osc.stop(now + 0.4);
                }
                else if (type === 'pop') {
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(800, now);
                    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.05);
                    
                    gain.gain.setValueAtTime(0.18, now);
                    gain.gain.linearRampToValueAtTime(0.01, now + 0.05);
                    
                    osc.start(now);
                    osc.stop(now + 0.06);
                }
            } catch (err) {
                console.warn("Gagal memainkan kesan bunyi:", err);
            }
        }

        function safeCreateIcons() {
            if (typeof lucide !== 'undefined' && lucide.createIcons) {
                lucide.createIcons();
            }
        }

        function safeConfetti(options) {
            if (typeof confetti === 'function') {
                confetti(options);
            }
        }
    </script>

    <script>
        const DATA_HURUF = [
            { h: 'A', e: '🐔', n: 'Ayam' }, { h: 'B', e: '⚽', n: 'Bola' }, { h: 'C', e: '🍵', n: 'Cawan' },
            { h: 'D', e: '🍃', n: 'Daun' }, { h: 'E', e: '🪙', n: 'Emas' }, { h: 'F', e: '🚢', n: 'Feri' },
            { h: 'G', e: '🐘', n: 'Gajah' }, { h: 'H', e: '🐯', n: 'Harimau' }, { h: 'I', e: '🦆', n: 'Itik' },
            { h: 'J', e: '🌽', n: 'Jagung' }, { h: 'K', e: '🐱', n: 'Kucing' }, { h: 'L', e: '🍋', n: 'Limau' },
            { h: 'M', e: '🐒', n: 'Monyet' }, { h: 'N', e: '🍍', n: 'Nanas' }, { h: 'O', e: '🍊', n: 'Oren' },
            { h: 'P', e: '🍌', n: 'Pisang' }, { h: 'Q', e: '📖', n: 'Qur\'an' }, { h: 'R', e: '🍇', n: 'Rambutan' },
            { h: 'S', e: '🐜', n: 'Semut' }, { h: 'T', e: '🍉', n: 'Tembikai' }, { h: 'U', e: '🐍', n: 'Ular' },
            { h: 'V', e: '🚐', n: 'Van' }, { h: 'W', e: '🪁', n: 'Wau' }, { h: 'X', e: '🩻', n: 'X-Ray' },
            { h: 'Y', e: '🪀', n: 'Yoyo' }, { h: 'Z', e: '🦒', n: 'Zirafah' }
        ];

        const DATA_WARNA = [
            { n: 'Merah', h: '#EF5350', e: '🍎' }, { n: 'Biru', h: '#42A5F5', e: '🐟' },
            { n: 'Hijau', h: '#66BB6A', e: '🐸' }, { n: 'Kuning', h: '#FFEE58', e: '🍌' },
            { n: 'Oren', h: '#FFA726', e: '🍊' }, { n: 'Ungu', h: '#AB47BC', e: '🍇' },
            { n: 'Putih', h: '#FFFFFF', e: '☁️', border: true }, { n: 'Hitam', h: '#212121', e: '🐈‍⬛' },
            { n: 'Merah Jambu', h: '#EC407A', e: '🌸' }, { n: 'Coklat', h: '#8D6E63', e: '🪵' }
        ];

        const DATA_BENTUK = [
            { n: 'Bulat', d: 'M 50 10 A 40 40 0 1 1 49.9 10 Z', e: '🔴' },
            { n: 'Segi Empat', d: 'M 15 15 L 85 15 L 85 85 L 15 85 Z', e: '⬜' },
            { n: 'Segi Tiga', d: 'M 50 15 L 85 85 L 15 85 Z', e: '🔺' },
            { n: 'Bujur', d: 'M 50 20 A 30 40 0 1 1 49.9 20 Z', e: '🥚' },
            { n: 'Bintang', d: 'M 50 10 L 61 38 L 91 38 L 67 56 L 76 86 L 50 68 L 24 86 L 33 56 L 9 38 L 39 38 Z', e: '⭐' },
            { n: 'Hati', d: 'M 12,2 C 8.3,2 5,5 5,9 C 5,14 12,20 12,20 C 12,20 19,14 19,9 C 19,5 15.7,2 12,2 Z', scale: true, e: '❤️' }
        ];

        const DATA_HAIWAN = [
            { n: 'Kucing', e: '🐱', s: 'Bunyi kucing mengiau, Meow meow!' },
            { n: 'Anjing', e: '🐶', s: 'Bunyi anjing menyalak, Woof woof!' },
            { n: 'Burung', e: '🐦', s: 'Bunyi burung berkicau, Pip pip!' },
            { n: 'Semut', e: '🐜', s: 'Semut merayap dengan rajin!' },
            { n: 'Ayam', e: '🐔', s: 'Ayam berkokok, Kok kok kok!' },
            { n: 'Itik', e: '🦆', s: 'Itik berenang, Quack quack!' },
            { n: 'Arnab', e: '🐰', s: 'Arnab suka melompat tinggi!' },
            { n: 'Ikan', e: '🐟', s: 'Ikan berenang riang dalam air!' },
            { n: 'Kambing', e: '🐐', s: 'Kambing mengembek, Mbek mbek!' },
            { n: 'Gajah', e: '🐘', s: 'Gajah besar ada belalai panjang!' }
        ];

        // Memori soalan baru bagi mengelakkan pengulangan soalan secara kerap
        let quizHistory = {
            warna: [],
            bentuk: [],
            haiwan: [],
            pintar: []
        };

        // Memori Simpanan Pemain (State) - Guna v5 untuk mengelak isu pertindihan rekod terdahulu
        let player = {
            nama: '',
            umur: null, 
            avatar: '👦',
            bintang: 0,
            lencana: [],
            stickers: [],
            aktivitiSelesai: 0,
            cabaranSelesai: [],
            lastScreen: 'welcome', 
            timerSeconds: null, 
            timerActive: false
        };

        const MASCOTS = [
            { nama: 'Alia', rupa: '👧', greeting: 'Pandai adik! Alia gembira sangat!' },
            { nama: 'Ali', rupa: '👦', greeting: 'Terbaiklah! Ali bangga dengan adik!' },
            { nama: 'Cici si Beruang', rupa: '🐻', greeting: 'Aum! Cici nampak bintang adik bersinar!' }
        ];

        // Penterjemah Nombor yang robust diguna secara global
        function terjemahSebutNombor(n) {
            const num = parseInt(n);
            if (isNaN(num)) return "Kosong";
            if (num === 0) return "Sifar";
            if (num === 100) return "Satu Ratus (Seratus)";
            if (num === 1000) return "Satu Ribu (Seribu)";
            
            const sa = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Lapan", "Sembilan"];
            if (num < 10) return sa[num];
            if (num === 10) return "Sepuluh";
            if (num === 11) return "Sebelas";
            if (num < 20) return sa[num - 10] + " Belas";
            
            const puluh = Math.floor(num / 10);
            const baki = num % 10;
            return sa[puluh] + " Puluh" + (baki > 0 ? " " + sa[baki] : "");
        }

        function muatTurunKemajuan() {
            try {
                const dataPemain = localStorage.getItem('latih_minda_player_v5');
                if (dataPemain) {
                    player = JSON.parse(dataPemain);
                    kemasKiniHeader();
                    return true;
                }
            } catch (err) {
                console.warn("Gagal mendapatkan kemajuan dari LocalStorage:", err);
            }
            return false;
        }

        function simpanKemajuan() {
            try {
                localStorage.setItem('latih_minda_player_v5', JSON.stringify(player));
            } catch (err) {
                console.warn("Gagal menyimpan kemajuan ke LocalStorage:", err);
            }
            kemasKiniHeader();
        }

        function kemasKiniHeader() {
            const avatarEl = document.getElementById('header-avatar');
            const nameEl = document.getElementById('header-name');
            const starsEl = document.getElementById('header-stars');
            const badgeEl = document.getElementById('header-badge');

            if (avatarEl) avatarEl.textContent = player.avatar;
            if (nameEl) nameEl.textContent = player.nama || 'Adik';
            if (starsEl) starsEl.textContent = player.bintang;
            
            let gelaran = 'Pintar Cilik';
            if (player.bintang >= 150) gelaran = 'Maha Pintar 👑';
            else if (player.bintang >= 80) gelaran = 'Cendekiawan Muda 🌟';
            else if (player.bintang >= 30) gelaran = 'Adik Bijak ⚡';
            
            if (badgeEl) badgeEl.textContent = gelaran;
        }

        function tukarMesejMaskot(teks) {
            const faceEl = document.getElementById('mascot-face');
            const textEl = document.getElementById('mascot-text');
            if (faceEl && textEl) {
                const maskotRawak = MASCOTS[Math.floor(Math.random() * MASCOTS.length)];
                faceEl.textContent = maskotRawak.rupa;
                textEl.textContent = `${maskotRawak.nama} berkata: "${teks}"`;
            }
        }

        let activeMessageCallback = null;
        function showMessageModal(icon, title, body, callback = null) {
            const iconEl = document.getElementById('msg-modal-icon');
            const titleEl = document.getElementById('msg-modal-title');
            const bodyEl = document.getElementById('msg-modal-body');
            const modalEl = document.getElementById('message-modal');

            if (iconEl) iconEl.textContent = icon;
            if (titleEl) titleEl.textContent = title;
            if (bodyEl) bodyEl.textContent = body;
            
            if (modalEl) {
                modalEl.classList.remove('hidden');
                modalEl.classList.add('flex');
            }
            activeMessageCallback = callback;
        }

        function closeMessageModal() {
            const modalEl = document.getElementById('message-modal');
            if (modalEl) {
                modalEl.classList.remove('flex');
                modalEl.classList.add('hidden');
            }
            if (activeMessageCallback) {
                activeMessageCallback();
                activeMessageCallback = null;
            }
        }
    </script>

    <script>
        const BALLOONS = ['🎈', '🔴', '🟡', '🟢', '🔵', '💜', '🧡'];
        const BIRDS = ['🐦', '🐤', '🦅', '🦉', '🕊️'];

        function janaHiasanTerapung() {
            const container = document.getElementById('sky-decorations');
            if (!container) return;

            const isBalloon = Math.random() > 0.5;
            const emojiList = isBalloon ? BALLOONS : BIRDS;
            const emoji = emojiList[Math.floor(Math.random() * emojiList.length)];

            const moveType = Math.floor(Math.random() * 3);
            const decorationEl = document.createElement('div');
            decorationEl.textContent = emoji;
            
            const size = Math.floor(Math.random() * 20) + 30; // 30px ke 50px
            decorationEl.style.fontSize = `${size}px`;
            
            const randomY = Math.floor(Math.random() * 60) + 10; // 10vh ke 70vh
            const randomX = Math.floor(Math.random() * 80) + 10; // 10vw ke 90vw

            if (moveType === 0) {
                decorationEl.className = 'anim-fly-lr';
                decorationEl.style.top = `${randomY}vh`;
            } else if (moveType === 1) {
                decorationEl.className = 'anim-fly-rl';
                decorationEl.style.top = `${randomY}vh`;
            } else {
                decorationEl.className = 'anim-float-bt';
                decorationEl.style.left = `${randomX}vw`;
            }

            container.appendChild(decorationEl);

            decorationEl.addEventListener('animationend', () => {
                decorationEl.remove();
            });
        }

        // Jalankan hiasan terbang rawak secara berterusan (dikurangkan kekerapan kepada setiap 15 saat)
        setInterval(janaHiasanTerapung, 15000);
    </script>

    <script>
        function generateWavingBearMarkup(text = "Hai kawan! Jom belajar!") {
            const bearId = 'waving-bear-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
            
            setTimeout(() => {
                const element = document.getElementById(bearId);
                if (element) {
                    element.classList.add('fade-out-cici');
                }
            }, 4000);

            return `
                <div id="${bearId}" class="flex flex-col items-center justify-center p-3 bg-white/95 rounded-2xl border-2 border-yellow-200 shadow-sm max-w-xs mx-auto animate-pulse-soft transition-all duration-1000 w-full">
                    <div class="relative w-20 h-20 flex items-center justify-center">
                        <span class="text-6xl">🐻</span>
                        <span class="absolute right-[-4px] top-4 text-3xl animate-wave-hand origin-bottom-left">👋</span>
                    </div>
                    <p class="text-[10px] font-bold text-amber-800 text-center mt-2">${text}</p>
                </div>
            `;
        }

        function generateClappingCatMarkup(text = "Yeay! Adik hebat sangat!") {
            return `
                <div class="flex flex-col items-center justify-center p-4 bg-white/95 rounded-2xl border-2 border-green-200 shadow-sm max-w-xs mx-auto animate-pulse-soft w-full">
                    <div class="relative w-24 h-24 flex items-center justify-center">
                        <span class="text-7xl">🐱</span>
                        <span class="absolute left-[-16px] bottom-2 text-4xl animate-clap-left">👏</span>
                        <span class="absolute right-[-16px] bottom-2 text-4xl animate-clap-right">👏</span>
                    </div>
                    <p class="text-xs font-black text-pastel-green text-center mt-4">${text}</p>
                </div>
            `;
        }
    </script>

    <script>
        const contentArea = document.getElementById('content-area');
        let welcomeClicks = 0; // Mengira klik dwi-sah halaman permulaan

        function navigate(moduleName) {
            playSFX('click');
            closeFloatingMenu();
            
            player.lastScreen = moduleName;
            simpanKemajuan();

            const headerEl = document.getElementById('game-header');
            const mascotEl = document.getElementById('mascot-section');
            const menuEl = document.getElementById('floating-menu-container');

            if (moduleName === 'welcome' || moduleName === 'parent_rules' || moduleName === 'profile') {
                if (headerEl) headerEl.classList.add('hidden');
                if (mascotEl) mascotEl.classList.add('hidden');
                if (menuEl) menuEl.classList.add('hidden');
            } else {
                if (headerEl) headerEl.classList.remove('hidden');
                if (mascotEl) mascotEl.classList.remove('hidden');
                if (menuEl) menuEl.classList.remove('hidden');
                kemasKiniHeader();
            }

            switch(moduleName) {
                case 'welcome': renderWelcome(); break;
                case 'parent_rules': renderParentRules(); break;
                case 'profile': renderProfile(); break;
                case 'home': renderHome(); break;
                case 'huruf': 
                    renderHuruf(); 
                    tukarMesejMaskot("hai adik, sini kita akan belajar mengenali huruf ya");
                    break;
                case 'nombor': 
                    renderNombor(); 
                    tukarMesejMaskot("hai adik, sini kita akan belajar mengenali nombor dan cara sebutannya");
                    break;
                case 'trace_huruf': 
                    renderTraceHuruf(); 
                    tukarMesejMaskot("hai adik, sini kita akan belajar menulis huruf. Adik kena tulis mengikut bentuk huruf yang diberikan");
                    break;
                case 'trace_nombor': 
                    renderTraceNombor(); 
                    tukarMesejMaskot("hai adik, sini kita akan belajar menulis nombor. Adik kena tulis mengikut bentuk nombor yang diberikan");
                    break;
                case 'warna': 
                    renderWarna(); 
                    tukarMesejMaskot("hai adik, sini kita akan belajar mengenali warna asas");
                    break;
                case 'bentuk': 
                    renderBentuk(); 
                    tukarMesejMaskot("hai adik, sini kita akan belajar mengenali bentuk bentuk asas ");
                    break;
                case 'haiwan': 
                    renderHaiwan(); 
                    tukarMesejMaskot("hai adik, sini kita akan belajar mengenali haiwan asas");
                    break;
                case 'dengar_pilih': renderDengarPilih(); break;
                case 'ganjaran': renderGanjaran(); break;
                case 'lencana': renderLencana(); break;
                case 'kedudukan': renderKedudukan(); break;
                default: renderHome();
            }
        }

        // Halaman Permulaan Pesanan (Butang Sedia perlu dwi-sahkan)
        function renderWelcome() {
            welcomeClicks = 0;
            contentArea.innerHTML = `
                <div class="text-center px-4 flex flex-col items-center justify-center gap-4 w-full animate-pulse-soft">
                    <div class="relative z-10">
                        <div class="absolute -top-6 -left-6 text-4xl animate-bounce">🎈</div>
                        <h1 class="text-5xl font-extrabold text-amber-500 tracking-wider filter drop-shadow-md">Latih Minda!</h1>
                        <p class="text-sm font-semibold text-pastel-blue mt-1">Edisi Premium Prasekolah</p>
                    </div>

                    <div class="w-full flex justify-center z-10">
                        ${generateWavingBearMarkup("Hai adik pintar! Mari mulakan pengembaraan belajar bersama Cici!")}
                    </div>

                    <div class="bg-blue-50/90 rounded-3xl p-4 border-2 border-dashed border-blue-200 shadow-sm max-w-xs z-10">
                        <div class="text-2xl mb-1">👁️</div>
                        <h4 class="font-bold text-xs text-blue-800 mb-1">Pesanan Sayang Alia & Ali:</h4>
                        <p class="text-xs text-blue-900 leading-relaxed">
                            "Sila laraskan kecerahan skrin mengikut keselesaan mata adik sebelum bermain."
                        </p>
                    </div>

                    <p class="text-[10px] text-red-500 font-bold max-w-xs z-10 leading-tight">
                        * Butang di bawah perlu diklik 2 kali oleh Ibu Bapa untuk pengesahan keselamatan.
                    </p>

                    <button id="sedia-btn" onclick="verifyWelcomeTaps()" class="bubble-btn bg-pastel-green hover:bg-green-500 text-white font-extrabold text-xl py-4 px-6 rounded-full border-b-4 border-green-700 w-full max-w-xs z-10 shadow-lg">
                        Saya Sedia
                    </button>
                </div>
            `;
        }

        function verifyWelcomeTaps() {
            welcomeClicks++;
            const sediaBtn = document.getElementById('sedia-btn');
            
            if (welcomeClicks === 1) {
                playSFX('pop');
                if (sediaBtn) {
                    sediaBtn.textContent = "Sahkan Sekali Lagi (Ibu Bapa) 🔒";
                    sediaBtn.className = "bubble-btn bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-base py-4 px-6 rounded-full border-b-4 border-yellow-700 w-full max-w-xs z-10 shadow-lg";
                }
            } else if (welcomeClicks >= 2) {
                playSFX('success');
                navigate('parent_rules');
            }
        }
    </script>

    <script>
        let countdownInterval = null;

        // Skrin Menetapkan Masa Belajar Anak
        function renderParentRules() {
            contentArea.innerHTML = `
                <div class="w-full max-w-xs flex flex-col gap-4 px-2 justify-center z-10 text-center">
                    <div class="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                        <i data-lucide="clock" class="w-8 h-8 stroke-[2.5]"></i>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold text-purple-700">Peraturan Ibu Bapa</h2>
                        <p class="text-xs text-gray-500 mt-1">Sila setkan had masa belajar bagi adik di bawah:</p>
                    </div>

                    <div class="grid grid-cols-2 gap-2 mt-2">
                        <button onclick="pilihTimerBelajar(10)" class="py-3 bg-white border-2 border-purple-200 hover:border-purple-500 rounded-2xl font-bold text-gray-700 text-sm transition-all shadow-sm">10 Minit</button>
                        <button onclick="pilihTimerBelajar(20)" class="py-3 bg-white border-2 border-purple-200 hover:border-purple-500 rounded-2xl font-bold text-gray-700 text-sm transition-all shadow-sm">20 Minit</button>
                        <button onclick="pilihTimerBelajar(30)" class="py-3 bg-white border-2 border-purple-200 hover:border-purple-500 rounded-2xl font-bold text-gray-700 text-sm transition-all shadow-sm">30 Minit</button>
                        <button onclick="pilihTimerBelajar(40)" class="py-3 bg-white border-2 border-purple-200 hover:border-purple-500 rounded-2xl font-bold text-gray-700 text-sm transition-all shadow-sm">40 Minit</button>
                    </div>

                    <div class="border-t border-dashed my-2"></div>

                    <!-- Butang Ujian Pantas -->
                    <button onclick="pilihTimerBelajar(0.166)" class="bubble-btn bg-amber-400 hover:bg-amber-500 text-white font-extrabold py-2 px-4 rounded-xl text-xs border-b-2 border-amber-600 shadow-sm">
                        ⚡ Ujian Cepat (10 Saat)
                    </button>
                    <p class="text-[10px] text-gray-400 leading-tight">
                        * Gunakan Ujian Cepat untuk menguji skrin kunci saksafon & seruling beserta keypad atas skrin secara pantas.
                    </p>
                </div>
            `;
            safeCreateIcons();
        }

        function pilihTimerBelajar(minit) {
            playSFX('success');
            player.timerSeconds = Math.round(minit * 60);
            player.timerActive = true;
            simpanKemajuan();

            mulakanPemasaSistem();
            navigate('profile');
        }

        function mulakanPemasaSistem() {
            if (countdownInterval) clearInterval(countdownInterval);

            const timerBox = document.getElementById('header-timer-box');
            if (timerBox) timerBox.classList.remove('hidden');

            countdownInterval = setInterval(() => {
                if (isGameLocked) return; 

                if (player.timerSeconds > 0) {
                    player.timerSeconds--;
                    simpanKemajuan();
                    kemasKiniPaparanPemasa();
                } else {
                    clearInterval(countdownInterval);
                    kunciSkrinPermainan(); 
                }
            }, 1000);
        }

        function kemasKiniPaparanPemasa() {
            const displayEl = document.getElementById('header-timer-display');
            if (!displayEl || player.timerSeconds === null) return;

            const m = Math.floor(player.timerSeconds / 60);
            const s = player.timerSeconds % 60;
            const text = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
            displayEl.textContent = text;
        }

        function ubahPemasaTetapan(minit) {
            playSFX('success');
            player.timerSeconds = Math.round(minit * 60);
            player.timerActive = true;
            simpanKemajuan();
            mulakanPemasaSistem();
            closeSettings();
            showMessageModal('⏱️', 'Pemasa Dikemaskini', `Masa belajar baharu ditetapkan kepada ${minit} minit.`);
        }
    </script>

    <script>
        /* ==========================================
           LOGIK NYAHKUNCI SKRIN DAN KEYPAD IBU BAPA
           ========================================== */
        let lockMathAns = 0;
        let lockTypedAnswer = "";

        let parentsMathAns = 0;
        let parentsTypedAnswer = "";

        // Fungsi mengurus butang numpad Ibu Bapa (Pintu Keselamatan Biasa)
        function parentsNumpadPress(val) {
            playSFX('pop');
            const displayEl = document.getElementById('parents-keypad-display');
            if (!displayEl) return;

            if (val === 'clear') {
                parentsTypedAnswer = "";
            } else {
                parentsTypedAnswer += val.toString();
                // Hadkan panjang input
                if (parentsTypedAnswer.length > 5) parentsTypedAnswer = parentsTypedAnswer.substring(0, 5);
            }
            displayEl.textContent = parentsTypedAnswer;
        }

        // Fungsi mengurus butang numpad Skrin Kunci (Locked Screen)
        function lockedNumpadPress(val) {
            playSFX('pop');
            const displayEl = document.getElementById('locked-keypad-display');
            if (!displayEl) return;

            if (val === 'clear') {
                lockTypedAnswer = "";
            } else {
                lockTypedAnswer += val.toString();
                if (lockTypedAnswer.length > 5) lockTypedAnswer = lockTypedAnswer.substring(0, 5);
            }
            displayEl.textContent = lockTypedAnswer;
        }

        function kunciSkrinPermainan() {
            isGameLocked = true;
            stopBGM();
            startBGM(); 

            // Jana soalan kunci skrin
            const numX = Math.floor(Math.random() * 8) + 2; 
            const numY = Math.floor(Math.random() * 7) + 2;
            lockMathAns = numX + numY;
            lockTypedAnswer = "";

            const questionEl = document.getElementById('locked-math-question');
            const displayEl = document.getElementById('locked-keypad-display');
            const errEl = document.getElementById('locked-error-msg');

            if (questionEl) questionEl.textContent = `${numX} + ${numY} = ?`;
            if (displayEl) displayEl.textContent = "";
            if (errEl) errEl.classList.add('hidden');

            const lockedOverlay = document.getElementById('locked-overlay');
            if (lockedOverlay) {
                lockedOverlay.classList.remove('hidden');
                lockedOverlay.classList.add('flex');
            }

            // Letupkan confetti pesta
            let confettiDuration = 10 * 1000;
            let confettiEnd = Date.now() + confettiDuration;

            (function frame() {
                safeConfetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 } });
                safeConfetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 } });

                if (Date.now() < confettiEnd && isGameLocked) {
                    requestAnimationFrame(frame);
                }
            }());
        }

        function verifyLockedUnlock() {
            const val = parseInt(lockTypedAnswer);
            const errEl = document.getElementById('locked-error-msg');

            if (val === lockMathAns) {
                playSFX('success');
                isGameLocked = false;
                
                // Setkan semula pemasa belajar kembali kepada 10 minit
                player.timerSeconds = 10 * 60;
                player.timerActive = true;
                simpanKemajuan();

                // Sembunyikan skrin kunci
                const lockedOverlay = document.getElementById('locked-overlay');
                if (lockedOverlay) {
                    lockedOverlay.classList.remove('flex');
                    lockedOverlay.classList.add('hidden');
                }

                stopBGM();
                startBGM(); // Muzik kotak muzik biasa semula
                mulakanPemasaSistem(); 
            } else {
                playSFX('fail');
                if (errEl) errEl.classList.remove('hidden');
                lockTypedAnswer = "";
                const displayEl = document.getElementById('locked-keypad-display');
                if (displayEl) displayEl.textContent = "";
            }
        }
    </script>

    <script>
        let selectedAvatar = '👦';
        function selectAvatar(el, avatar) {
            selectedAvatar = avatar;
            document.querySelectorAll('.avatar-box').forEach(b => b.classList.remove('border-yellow-400', 'bg-yellow-100'));
            el.classList.add('border-yellow-400', 'bg-yellow-100');
            playSFX('pop');
        }

        // Halaman Profil (Umur Wajib Dipilih, Nama wajib untuk 4-5 tahun)
        function renderProfile() {
            selectedAvatar = '👦';
            selectedAgeVal = null; // Set balik null untuk keselamatan input wajib
            contentArea.innerHTML = `
                <div class="w-full max-w-xs flex flex-col gap-3 px-2 justify-center z-10 animate-pulse-soft">
                    <div class="text-center">
                        <h2 class="text-2xl font-bold text-pastel-blue">Daftar Ahli Pintar!</h2>
                        <p class="text-xs text-gray-500">Isi maklumat di bawah untuk mula belajar.</p>
                    </div>

                    <!-- Pemilihan Umur Wajib -->
                    <div>
                        <label class="block text-xs font-bold text-gray-600 mb-1">Umur Anak <span class="text-red-500">* Wajib</span>:</label>
                        <div class="grid grid-cols-4 gap-2">
                            <button type="button" onclick="pilihUmurMendaftar(this, 2)" class="age-btn py-1.5 font-bold rounded-xl border-2 border-gray-200 hover:border-pastel-blue bg-white transition-all text-xs">2 Tahun</button>
                            <button type="button" onclick="pilihUmurMendaftar(this, 3)" class="age-btn py-1.5 font-bold rounded-xl border-2 border-gray-200 hover:border-pastel-blue bg-white transition-all text-xs">3 Tahun</button>
                            <button type="button" onclick="pilihUmurMendaftar(this, 4)" class="age-btn py-1.5 font-bold rounded-xl border-2 border-gray-200 hover:border-pastel-blue bg-white transition-all text-xs">4 Tahun</button>
                            <button type="button" onclick="pilihUmurMendaftar(this, 5)" class="age-btn py-1.5 font-bold rounded-xl border-2 border-gray-200 hover:border-pastel-blue bg-white transition-all text-xs">5 Tahun</button>
                        </div>
                    </div>

                    <!-- Input Nama Dinamik -->
                    <div id="nama-input-container" class="hidden">
                        <label class="block text-xs font-bold text-gray-600 mb-1">Nama Pemain <span class="text-red-500">*</span>:</label>
                        <input type="text" id="prof-nama" placeholder="Tulis nama disini..." class="w-full border-3 border-gray-200 focus:border-yellow-400 rounded-2xl py-2 px-4 text-center font-bold outline-none shadow-inner text-sm">
                        <p class="text-[9px] text-red-500 font-semibold mt-1">* Umur 4 & 5-Tahun wajib menulis nama adik.</p>
                    </div>

                    <div id="nama-hint-container" class="hidden text-center bg-green-50 text-green-700 border border-green-200 rounded-xl p-2 text-[10px] font-bold">
                        🎉 Umur 2 & 3 Tahun boleh terus belajar tanpa mengisi nama!
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-gray-600 mb-1">Pilih Avatar:</label>
                        <div class="grid grid-cols-6 gap-1 bg-white p-2 rounded-2xl border-2 border-dashed border-gray-200">
                            <button onclick="selectAvatar(this, '👦')" class="avatar-box text-2xl h-10 w-10 flex items-center justify-center rounded-xl border-2 border-transparent transition-all border-yellow-400 bg-yellow-100">👦</button>
                            <button onclick="selectAvatar(this, '👧')" class="avatar-box text-2xl h-10 w-10 flex items-center justify-center rounded-xl border-2 border-transparent transition-all">👧</button>
                            <button onclick="selectAvatar(this, '🐱')" class="avatar-box text-2xl h-10 w-10 flex items-center justify-center rounded-xl border-2 border-transparent transition-all">🐱</button>
                            <button onclick="selectAvatar(this, '🐰')" class="avatar-box text-2xl h-10 w-10 flex items-center justify-center rounded-xl border-2 border-transparent transition-all">🐰</button>
                            <button onclick="selectAvatar(this, '🐦')" class="avatar-box text-2xl h-10 w-10 flex items-center justify-center rounded-xl border-2 border-transparent transition-all">🐦</button>
                            <button onclick="selectAvatar(this, '🐻')" class="avatar-box text-2xl h-10 w-10 flex items-center justify-center rounded-xl border-2 border-transparent transition-all">🐻</button>
                        </div>
                    </div>

                    <button onclick="daftarPemain()" class="bubble-btn mt-1 bg-yellow-400 hover:bg-yellow-500 text-white font-extrabold text-lg py-3 p-2 px-6 rounded-2xl border-b-4 border-yellow-600 w-full shadow-md">
                        Mula Belajar!
                    </button>
                </div>
            `;
        }

        let selectedAgeVal = null; 
        function pilihUmurMendaftar(btn, age) {
            selectedAgeVal = age;
            document.querySelectorAll('.age-btn').forEach(b => b.classList.remove('bg-pastel-blue', 'text-white', 'border-pastel-blue'));
            btn.classList.add('bg-pastel-blue', 'text-white', 'border-pastel-blue');
            playSFX('pop');

            const nameInputContainer = document.getElementById('nama-input-container');
            const nameHintContainer = document.getElementById('nama-hint-container');

            if (age === 4 || age === 5) {
                nameInputContainer.classList.remove('hidden');
                nameHintContainer.classList.add('hidden');
            } else {
                nameInputContainer.classList.add('hidden');
                nameHintContainer.classList.remove('hidden');
            }
        }

        function daftarPemain() {
            if (selectedAgeVal === null) {
                showMessageModal('⚠️', 'Pilihan Wajib', 'Sila pilih umur adik dahulu sebelum memulakan permainan!');
                playSFX('fail');
                return;
            }

            let namaInput = '';
            if (selectedAgeVal === 4 || selectedAgeVal === 5) {
                const inputEl = document.getElementById('prof-nama');
                namaInput = inputEl ? inputEl.value.trim() : '';
                if (!namaInput) {
                    showMessageModal('⚠️', 'Nama Diperlukan', 'Adik berumur 4 atau 5 tahun wajib mengisi nama pemain!');
                    playSFX('fail');
                    return;
                }
            } else {
                namaInput = 'Adik Pintar';
            }

            player.nama = namaInput;
            player.umur = selectedAgeVal;
            player.avatar = selectedAvatar;
            player.bintang = player.bintang || 0; 
            
            simpanKemajuan();
            startBGM();
            navigate('home');
        }

        function renderHome() {
            tukarMesejMaskot("Pilih satu modul menyeronokkan untuk mula mengumpul bintang!");
            
            const modules = [
                { id: 'huruf', label: 'Kenal Huruf', icon: '✨', desc: 'Belajar Huruf A-Z', color: 'bg-red-50 border-red-200 text-red-700' },
                { id: 'nombor', label: 'Kenal Nombor', icon: '🔟', desc: 'Belajar Kira 0-1000', color: 'bg-blue-50 border-blue-200 text-blue-700' },
                { id: 'trace_huruf', label: 'Trace Huruf', icon: '✏️', desc: 'Latih Tulis Huruf', color: 'bg-green-50 border-green-200 text-green-700' },
                { id: 'trace_nombor', label: 'Trace Nombor', icon: '🔢', desc: 'Latih Tulis Nombor', color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
                { id: 'warna', label: 'Warna Ceria', icon: '🎨', desc: 'Belajar Warna Warni', color: 'bg-purple-50 border-purple-200 text-purple-700' },
                { id: 'bentuk', label: 'Bentuk Comel', icon: '📐', desc: 'Segi Tiga, Bulat, Hati', color: 'bg-pink-50 border-pink-200 text-pink-700' },
                { id: 'haiwan', label: 'Dunia Haiwan', icon: '🦁', desc: 'Kenali Bunyi Haiwan', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
                { id: 'dengar_pilih', label: 'Kuiz Pintar', icon: '❓', desc: 'Teka & Jawab Soalan', color: 'bg-orange-50 border-orange-200 text-orange-700' }
            ];

            contentArea.innerHTML = `
                <div class="w-full max-h-[460px] overflow-y-auto px-1 py-1 space-y-3 z-10">
                    <div class="text-center">
                        <h2 class="text-xl font-bold text-gray-700">Modul Pembelajaran</h2>
                        <p class="text-xs text-gray-400">Pilih salah satu aktiviti di bawah</p>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-3">
                        ${modules.map(m => `
                            <button onclick="navigate('${m.id}')" class="bubble-btn p-3 rounded-2xl border-2 ${m.color} flex flex-col items-center justify-center text-center transition-all bg-white/95 hover:scale-[1.02] shadow-sm">
                                <span class="text-3xl mb-1">${m.icon}</span>
                                <span class="font-bold text-sm block leading-tight">${m.label}</span>
                                <span class="text-[10px] text-gray-400 mt-0.5">${m.desc}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    </script>

    <script>
        let idxHuruf = 0;
        function renderHuruf() {
            const data = DATA_HURUF[idxHuruf];

            contentArea.innerHTML = `
                <div class="w-full flex flex-col items-center gap-3 text-center z-10 animate-pulse-soft">
                    <div class="flex items-center justify-between w-full px-4">
                        <button onclick="backHuruf()" class="w-10 h-10 rounded-full bg-white border shadow flex items-center justify-center text-gray-600"><i data-lucide="chevron-left"></i></button>
                        <span class="text-xs font-bold bg-yellow-100 px-3 py-1 rounded-full text-yellow-800">Huruf ${idxHuruf + 1} / 26</span>
                        <button onclick="nextHuruf()" class="w-10 h-10 rounded-full bg-white border shadow flex items-center justify-center text-gray-600"><i data-lucide="chevron-right"></i></button>
                    </div>

                    <div class="bg-white/95 rounded-3xl p-5 border-4 border-pastel-blue shadow-lg w-full max-w-xs relative flex flex-col items-center justify-center gap-2">
                        <h1 class="text-7xl font-black text-pastel-blue animate-bounce-gentle">${data.h} <span class="text-5xl text-purple-400 font-bold">${data.h.toLowerCase()}</span></h1>
                        <span class="text-7xl">${data.e}</span>
                        <h2 class="text-2xl font-bold text-gray-700">${data.n}</h2>
                        
                        <div class="mt-2 w-full flex justify-center">
                            ${generateWavingBearMarkup(`Ini huruf ${data.h} untuk ${data.n}!`)}
                        </div>
                    </div>

                    <button onclick="navigate('home')" class="text-xs font-bold text-gray-400 hover:text-gray-600 flex items-center gap-1">
                        <i data-lucide="arrow-left" class="w-4 h-4"></i> Kembali ke Menu Utama
                    </button>
                </div>
            `;
            safeCreateIcons();
        }

        function nextHuruf() {
            playSFX('pop');
            berikanBintang(1, "Kenal huruf");
            if (idxHuruf < 25) {
                idxHuruf++;
                renderHuruf();
                tukarMesejMaskot("hai adik, sini kita akan belajar mengenali huruf ya");
            } else {
                showSuccessModulEnd("Hebat! Selesai semua huruf!", 'Juara ABC');
            }
        }

        function backHuruf() {
            if (idxHuruf > 0) {
                idxHuruf--;
                renderHuruf();
                tukarMesejMaskot("hai adik, sini kita akan belajar mengenali huruf ya");
            }
        }
    </script>

    <script>
        let listNombor = [];
        for (let i = 0; i <= 23; i++) {
            listNombor.push(i);
        }
        listNombor.push(100, 1000, "GUIDE");

        let idxNombor = 0;

        function renderNombor() {
            const nombor = listNombor[idxNombor];

            if (nombor === "GUIDE") {
                renderNomborDigitGuide();
                return;
            }

            let penunjukEmoji = "";
            let penerangan = "hai adik, sini kita akan belajar mengenali nombor dan cara sebutannya";
            let notaKhas = "";

            if (nombor === 0) {
                notaKhas = "Sifar bermaksud tiada sebarang nilai atau objek di situ.";
            } else if (nombor >= 1 && nombor <= 10) {
                penunjukEmoji = "⚽".repeat(nombor);
                notaKhas = `Cuba kira bilangan bola sepak di atas. Ada tepat ${nombor}!`;
            } else if (nombor === 11) {
                notaKhas = "Nombor 11 memperkenalkan konsep 'belas'. Belas bermakna sepuluh ditambah dengan nilai sa di belakangnya. Sebelas bermaksud 'sepuluh tambah satu'.";
            } else if (nombor > 11 && nombor <= 19) {
                notaKhas = "Nombor belas (11 hingga 19) mewakili gabungan satu kumpulan sepuluh berserta baki unit sa di belakangnya.";
            } else if (nombor === 20) {
                notaKhas = "Nombor 20 memperkenalkan konsep 'puluh'. Apabila kita ada dua kumpulan sepuluh, ia disebut 'dua puluh'. Digit sifar di belakang menandakan tiada baki sa.";
            } else if (nombor > 20 && nombor <= 23) {
                notaKhas = `Sebut gandaan puluh dahulu, diikuti oleh nilai sa di belakang. Contohnya: ${terjemahSebutNombor(nombor)}.`;
            } else if (nombor === 100) {
                notaKhas = "Konsep 'ratus' bermaksud kita mempunyai sepuluh kumpulan sepuluh (10 x 10). Ia ditulis menggunakan 3 digit angka. Contohnya 100.";
            } else if (nombor === 1000) {
                notaKhas = "Konsep 'ribu' mewakili nilai yang sangat banyak! Ia ditulis dengan 4 digit angka (1000). Seribu bermakna sepuluh gandaan ratus (10 x 100).";
            }

            contentArea.innerHTML = `
                <div class="w-full flex flex-col items-center gap-3 text-center z-10 animate-pulse-soft">
                    <div class="flex items-center justify-between w-full px-4">
                        <button onclick="backNombor()" class="w-10 h-10 rounded-full bg-white border shadow flex items-center justify-center text-gray-600"><i data-lucide="chevron-left"></i></button>
                        <span class="text-xs font-bold bg-yellow-100 px-3 py-1 rounded-full text-yellow-800">Nombor ${nombor}</span>
                        <button onclick="nextNombor()" class="w-10 h-10 rounded-full bg-white border shadow flex items-center justify-center text-gray-600"><i data-lucide="chevron-right"></i></button>
                    </div>

                    <div class="bg-white/95 rounded-3xl p-4 border-4 border-pastel-green shadow-lg w-full max-w-xs relative flex flex-col items-center justify-center gap-1.5">
                        <h1 class="text-7xl font-black text-pastel-green animate-bounce-gentle">${nombor}</h1>
                        <p class="text-base font-bold text-gray-600">${terjemahSebutNombor(nombor)}</p>
                        
                        ${nombor > 0 && nombor <= 10 ? `
                        <div class="text-xl tracking-wider max-w-[200px] break-all leading-normal flex flex-wrap justify-center min-h-[30px] my-1">
                            ${penunjukEmoji}
                        </div>
                        ` : ''}

                        <div class="bg-yellow-50 text-yellow-900 border border-yellow-200 rounded-xl p-2.5 text-[11px] text-left leading-relaxed mt-1 font-medium w-full">
                            💡 ${notaKhas}
                        </div>

                        <div class="w-full flex justify-center mt-1">
                            ${generateWavingBearMarkup(`Nombor ${nombor} seronok kan!`)}
                        </div>
                    </div>

                    <button onclick="navigate('home')" class="text-xs font-bold text-gray-400 hover:text-gray-600 flex items-center gap-1">
                        <i data-lucide="arrow-left" class="w-4 h-4"></i> Kembali
                    </button>
                </div>
            `;
            safeCreateIcons();
        }

        function renderNomborDigitGuide() {
            contentArea.innerHTML = `
                <div class="w-full flex flex-col items-center gap-3 text-center z-10">
                    <div class="flex items-center justify-between w-full px-4">
                        <button onclick="backNombor()" class="w-10 h-10 rounded-full bg-white border shadow flex items-center justify-center text-gray-600"><i data-lucide="chevron-left"></i></button>
                        <span class="text-xs font-bold bg-purple-100 text-purple-800 px-3 py-1 rounded-full animate-pulse">Slaid Bijak Digit</span>
                        <button onclick="nextNombor()" class="w-10 h-10 rounded-full bg-white border shadow flex items-center justify-center text-gray-600"><i data-lucide="chevron-right"></i></button>
                    </div>

                    <div class="bg-white/95 rounded-3xl p-4 border-4 border-purple-300 shadow-lg w-full max-w-sm flex flex-col items-center gap-2">
                        <h2 class="text-lg font-bold text-purple-700">Kenali Bilangan Digit</h2>
                        <p class="text-[10px] text-gray-500">Tekan butang di bawah untuk melihat seni sebutan nombor!</p>

                        <div class="grid grid-cols-4 gap-1 w-full mt-1">
                            <button onclick="tukarSlaidDigit('belas')" id="btn-digit-belas" class="tab-digit-btn py-1 px-1 text-[10px] font-black border rounded-xl transition-all bg-purple-100 border-purple-400 text-purple-800 shadow-sm">Belas</button>
                            <button onclick="tukarSlaidDigit('puluh')" id="btn-digit-puluh" class="tab-digit-btn py-1 px-1 text-[10px] font-black border rounded-xl transition-all bg-white border-gray-200 text-gray-500 hover:bg-gray-50">Puluh</button>
                            <button onclick="tukarSlaidDigit('ratus')" id="btn-digit-ratus" class="tab-digit-btn py-1 px-1 text-[10px] font-black border rounded-xl transition-all bg-white border-gray-200 text-gray-500 hover:bg-gray-50">Ratus</button>
                            <button onclick="tukarSlaidDigit('ribu')" id="btn-digit-ribu" class="tab-digit-btn py-1 px-1 text-[10px] font-black border rounded-xl transition-all bg-white border-gray-200 text-gray-500 hover:bg-gray-50">Ribu</button>
                        </div>

                        <div class="w-full bg-pastel-cream rounded-2xl p-3 border border-yellow-200/60 min-h-[170px] flex flex-col justify-between items-center relative mt-1">
                            <div id="digit-text-explain" class="text-xs text-purple-950 font-bold leading-relaxed text-center max-w-[280px]"></div>
                            <div id="digit-animation-box" class="w-full flex justify-center items-center py-2 h-16"></div>
                            <div id="digit-audio-translation" class="text-xs font-extrabold text-amber-700 bg-yellow-100 border border-yellow-200 px-3 py-1 rounded-xl opacity-0 transform scale-75 transition-all duration-500 text-center w-full max-w-[260px]"></div>
                        </div>
                    </div>

                    <button onclick="navigate('home')" class="text-xs font-bold text-gray-400 hover:text-gray-600 flex items-center gap-1">
                        <i data-lucide="arrow-left" class="w-4 h-4"></i> Kembali ke Menu Utama
                    </button>
                </div>
            `;
            safeCreateIcons();
            tukarSlaidDigit('belas');
        }

        function tukarSlaidDigit(jenis) {
            playSFX('click');

            document.querySelectorAll('.tab-digit-btn').forEach(btn => {
                btn.classList.remove('bg-purple-100', 'border-purple-400', 'text-purple-800', 'shadow-sm');
                btn.classList.add('bg-white', 'border-gray-200', 'text-gray-500');
            });
            const activeBtn = document.getElementById(`btn-digit-${jenis}`);
            if (activeBtn) {
                activeBtn.classList.remove('bg-white', 'border-gray-200', 'text-gray-500');
                activeBtn.classList.add('bg-purple-100', 'border-purple-400', 'text-purple-800', 'shadow-sm');
            }

            const explainEl = document.getElementById('digit-text-explain');
            const animEl = document.getElementById('digit-animation-box');
            const translateEl = document.getElementById('digit-audio-translation');

            if (window.timerDigit1) clearTimeout(window.timerDigit1);
            if (window.timerDigit2) clearTimeout(window.timerDigit2);
            if (window.timerDigit3) clearTimeout(window.timerDigit3);
            if (window.timerDigit4) clearTimeout(window.timerDigit4);
            if (window.timerDigit5) clearTimeout(window.timerDigit5);

            if (jenis === 'belas') {
                explainEl.innerHTML = `<strong>2 Digit bermula dengan 1 dan digit kedua 1–9</strong><br><span class="text-[10px] text-gray-600 font-medium">Belas: Sebut digit kedua + belas. Contoh: 17 → tujuh belas.</span>`;
                animEl.innerHTML = `
                    <div class="flex gap-4">
                        <div id="card-belas-1" class="w-12 h-12 bg-blue-400 text-white font-black text-2xl rounded-xl flex items-center justify-center shadow-lg transform scale-0 transition-transform duration-300">1</div>
                        <div id="card-belas-7" class="w-12 h-12 bg-pink-400 text-white font-black text-2xl rounded-xl flex items-center justify-center shadow-lg transform scale-0 transition-transform duration-300">7</div>
                    </div>
                `;
                translateEl.textContent = "Tujuh Belas";
                translateEl.classList.add('opacity-0', 'scale-75');

                window.timerDigit1 = setTimeout(() => {
                    const c1 = document.getElementById('card-belas-1');
                    if(c1) { c1.classList.remove('scale-0'); c1.classList.add('scale-100'); playSFX('pop'); }
                }, 200);
                window.timerDigit2 = setTimeout(() => {
                    const c2 = document.getElementById('card-belas-7');
                    if(c2) { c2.classList.remove('scale-0'); c2.classList.add('scale-100'); playSFX('pop'); }
                }, 600);
                window.timerDigit3 = setTimeout(() => {
                    if (translateEl) {
                        translateEl.classList.remove('opacity-0', 'scale-75');
                        translateEl.classList.add('opacity-100', 'scale-100');
                        playSFX('success');
                        safeConfetti({ particleCount: 30, spread: 40 });
                    }
                }, 1100);
            } 
            else if (jenis === 'puluh') {
                explainEl.innerHTML = `<strong>2 Digit</strong><br><span class="text-[10px] text-gray-600 font-medium">Puluh: Sebut digit pertama + puluh, kemudian sambung digit kedua jika ada nilai. Contoh: 24 → dua puluh empat.</span>`;
                animEl.innerHTML = `
                    <div class="flex gap-4">
                        <div class="flex flex-col items-center">
                            <div id="card-puluh-2" class="w-12 h-12 bg-amber-400 text-white font-black text-2xl rounded-xl flex items-center justify-center shadow-lg transform scale-0 transition-transform duration-300">2</div>
                            <span id="lbl-puluh-2" class="text-[8px] font-bold text-amber-600 mt-1 opacity-0 transition-opacity">Puluh</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <div id="card-puluh-4" class="w-12 h-12 bg-teal-400 text-white font-black text-2xl rounded-xl flex items-center justify-center shadow-lg transform scale-0 transition-transform duration-300">4</div>
                            <span id="lbl-puluh-4" class="text-[8px] font-bold text-teal-600 mt-1 opacity-0 transition-opacity">Sa</span>
                        </div>
                    </div>
                `;
                translateEl.textContent = "Dua Puluh Empat";
                translateEl.classList.add('opacity-0', 'scale-75');

                window.timerDigit1 = setTimeout(() => {
                    const c1 = document.getElementById('card-puluh-2');
                    const l1 = document.getElementById('lbl-puluh-2');
                    if(c1 && l1) {
                        c1.classList.remove('scale-0'); c1.classList.add('scale-100');
                        l1.classList.remove('opacity-0'); l1.classList.add('opacity-100');
                        playSFX('pop');
                    }
                }, 200);
                window.timerDigit2 = setTimeout(() => {
                    const c2 = document.getElementById('card-puluh-4');
                    const l2 = document.getElementById('lbl-puluh-4');
                    if(c2 && l2) {
                        c2.classList.remove('scale-0'); c2.classList.add('scale-100');
                        l2.classList.remove('opacity-0'); l2.classList.add('opacity-100');
                        playSFX('pop');
                    }
                }, 600);
                window.timerDigit3 = setTimeout(() => {
                    if (translateEl) {
                        translateEl.classList.remove('opacity-0', 'scale-75');
                        translateEl.classList.add('opacity-100', 'scale-100');
                        playSFX('success');
                    }
                }, 1100);
            }
            else if (jenis === 'ratus') {
                explainEl.innerHTML = `<strong>3 Digit</strong><br><span class="text-[10px] text-gray-600 font-medium">Ratus: Baca dari kiri ke kanan bermula dengan ratus → puluh → sa. Contoh: 325 → tiga ratus dua puluh lima.</span>`;
                animEl.innerHTML = `
                    <div class="flex gap-2">
                        <div class="flex flex-col items-center">
                            <div id="card-ratus-3" class="w-10 h-10 bg-indigo-400 text-white font-black text-xl rounded-lg flex items-center justify-center shadow-lg transform scale-0 transition-transform duration-300">3</div>
                            <span id="lbl-ratus-3" class="text-[7px] font-bold text-indigo-600 mt-1 opacity-0 transition-opacity">Ratus</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <div id="card-ratus-2" class="w-10 h-10 bg-pink-400 text-white font-black text-xl rounded-lg flex items-center justify-center shadow-lg transform scale-0 transition-transform duration-300">2</div>
                            <span id="lbl-ratus-2" class="text-[7px] font-bold text-pink-600 mt-1 opacity-0 transition-opacity">Puluh</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <div id="card-ratus-5" class="w-10 h-10 bg-emerald-400 text-white font-black text-xl rounded-lg flex items-center justify-center shadow-lg transform scale-0 transition-transform duration-300">5</div>
                            <span id="lbl-ratus-5" class="text-[7px] font-bold text-emerald-600 mt-1 opacity-0 transition-opacity">Sa</span>
                        </div>
                    </div>
                `;
                translateEl.textContent = "Tiga Ratus Dua Puluh Lima";
                translateEl.classList.add('opacity-0', 'scale-75');

                window.timerDigit1 = setTimeout(() => {
                    const c1 = document.getElementById('card-ratus-3');
                    const l1 = document.getElementById('lbl-ratus-3');
                    if(c1 && l1) { c1.classList.remove('scale-0'); c1.classList.add('scale-100'); l1.classList.replace('opacity-0', 'opacity-100'); playSFX('pop'); }
                }, 200);
                window.timerDigit2 = setTimeout(() => {
                    const c2 = document.getElementById('card-ratus-2');
                    const l2 = document.getElementById('lbl-ratus-2');
                    if(c2 && l2) { c2.classList.remove('scale-0'); c2.classList.add('scale-100'); l2.classList.replace('opacity-0', 'opacity-100'); playSFX('pop'); }
                }, 500);
                window.timerDigit3 = setTimeout(() => {
                    const c3 = document.getElementById('card-ratus-5');
                    const l3 = document.getElementById('lbl-ratus-5');
                    if(c3 && l3) { c3.classList.remove('scale-0'); c3.classList.add('scale-100'); l3.classList.replace('opacity-0', 'opacity-100'); playSFX('pop'); }
                }, 800);
                window.timerDigit4 = setTimeout(() => {
                    if (translateEl) {
                        translateEl.classList.remove('opacity-0', 'scale-75');
                        translateEl.classList.add('opacity-100', 'scale-100');
                        playSFX('success');
                    }
                }, 1300);
            }
            else if (jenis === 'ribu') {
                explainEl.innerHTML = `<strong>4 Digit</strong><br><span class="text-[10px] text-gray-600 font-medium">Ribu: Baca dari kiri ke kanan bermula dengan ribu → ratus → puluh → sa. Contoh: 4321 → empat ribu tiga ratus dua puluh satu.</span>`;
                animEl.innerHTML = `
                    <div class="flex gap-1.5">
                        <div class="flex flex-col items-center">
                            <div id="card-ribu-4" class="w-9 h-9 bg-red-400 text-white font-black text-lg rounded-lg flex items-center justify-center shadow-lg transform scale-0 transition-transform duration-300">4</div>
                            <span id="lbl-ribu-4" class="text-[7px] font-bold text-red-600 mt-1 opacity-0 transition-opacity">Ribu</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <div id="card-ribu-3" class="w-9 h-9 bg-indigo-400 text-white font-black text-lg rounded-lg flex items-center justify-center shadow-lg transform scale-0 transition-transform duration-300">3</div>
                            <span id="lbl-ribu-3" class="text-[7px] font-bold text-indigo-600 mt-1 opacity-0 transition-opacity">Ratus</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <div id="card-ribu-2" class="w-9 h-9 bg-pink-400 text-white font-black text-lg rounded-lg flex items-center justify-center shadow-lg transform scale-0 transition-transform duration-300">2</div>
                            <span id="lbl-ribu-2" class="text-[7px] font-bold text-pink-600 mt-1 opacity-0 transition-opacity">Puluh</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <div id="card-ribu-1" class="w-9 h-9 bg-emerald-400 text-white font-black text-lg rounded-lg flex items-center justify-center shadow-lg transform scale-0 transition-transform duration-300">1</div>
                            <span id="lbl-ribu-1" class="text-[7px] font-bold text-emerald-600 mt-1 opacity-0 transition-opacity">Sa</span>
                        </div>
                    </div>
                `;
                translateEl.textContent = "Empat Ribu Tiga Ratus Dua Puluh Satu";
                translateEl.classList.add('opacity-0', 'scale-75');

                window.timerDigit1 = setTimeout(() => {
                    const c1 = document.getElementById('card-ribu-4');
                    const l1 = document.getElementById('lbl-ribu-4');
                    if(c1 && l1) { c1.classList.remove('scale-0'); c1.classList.add('scale-100'); l1.classList.replace('opacity-0', 'opacity-100'); playSFX('pop'); }
                }, 200);
                window.timerDigit2 = setTimeout(() => {
                    const c2 = document.getElementById('card-ribu-3');
                    const l2 = document.getElementById('lbl-ribu-3');
                    if(c2 && l2) { c2.classList.remove('scale-0'); c2.classList.add('scale-100'); l2.classList.replace('opacity-0', 'opacity-100'); playSFX('pop'); }
                }, 450);
                window.timerDigit3 = setTimeout(() => {
                    const c3 = document.getElementById('card-ribu-2');
                    const l3 = document.getElementById('lbl-ribu-2');
                    if(c3 && l3) { c3.classList.remove('scale-0'); c3.classList.add('scale-100'); l3.classList.replace('opacity-0', 'opacity-100'); playSFX('pop'); }
                }, 700);
                window.timerDigit4 = setTimeout(() => {
                    const c4 = document.getElementById('card-ribu-1');
                    const l4 = document.getElementById('lbl-ribu-1');
                    if(c4 && l4) { c4.classList.remove('scale-0'); c4.classList.add('scale-100'); l4.classList.replace('opacity-0', 'opacity-100'); playSFX('pop'); }
                }, 950);
                window.timerDigit5 = setTimeout(() => {
                    if (translateEl) {
                        translateEl.classList.remove('opacity-0', 'scale-75');
                        translateEl.classList.add('opacity-100', 'scale-100');
                        playSFX('success');
                    }
                }, 1400);
            }
        }

        function nextNombor() {
            playSFX('pop');
            berikanBintang(1, "Mengenal nombor");
            if (idxNombor < listNombor.length - 1) {
                idxNombor++;
                renderNombor();
                tukarMesejMaskot("hai adik, sini kita akan belajar mengenali nombor dan cara sebutannya");
            } else {
                showSuccessModulEnd("Hebat! Selesai belajar nombor!", 'Pintar Nombor');
            }
        }

        function backNombor() {
            if (idxNombor > 0) {
                idxNombor--;
                renderNombor();
                tukarMesejMaskot("hai adik, sini kita akan belajar mengenali nombor dan cara sebutannya");
            }
        }
    </script>

    <script>
        /* ==========================================
           MODUL LAKARAN / TRACING (Canvas Engine - STRICT MODE)
           ========================================== */
        let canvas, ctx;
        let isTracing = false;
        let traceTarget = ""; 
        let currentTraceIndex = 0;
        let isTraceLetterMode = true; 
        let traceCoordinates = []; 
        let isLowercaseActive = false; // Mengawal giliran huruf kecil
        let hasScribbledOutside = false; // Pengesan jika lakaran terkeluar bentuk

        function renderTraceHuruf() {
            isTraceLetterMode = true;
            currentTraceIndex = 0;
            isLowercaseActive = false;
            setupTraceUI();
        }

        function renderTraceNombor() {
            isTraceLetterMode = false;
            currentTraceIndex = 0;
            isLowercaseActive = false;
            setupTraceUI();
        }

        function setupTraceUI() {
            if (isTraceLetterMode) {
                const letterObj = DATA_HURUF[currentTraceIndex];
                traceTarget = isLowercaseActive ? letterObj.h.toLowerCase() : letterObj.h;
            } else {
                traceTarget = (currentTraceIndex + 1).toString();
            }
            
            let labelText = "";
            if (isTraceLetterMode) {
                labelText = `Lakar Huruf ${isLowercaseActive ? 'Kecil' : 'Besar'}: ${traceTarget}`;
            } else {
                labelText = `Lakar Nombor: ${traceTarget}`;
            }

            contentArea.innerHTML = `
                <div class="w-full flex flex-col items-center gap-3 text-center z-10 animate-pulse-soft">
                    <div class="flex items-center justify-between w-full px-2">
                        <button onclick="backTrace()" class="w-8 h-8 rounded-full bg-white border shadow flex items-center justify-center text-gray-600"><i data-lucide="chevron-left" class="w-4 h-4"></i></button>
                        <span class="text-xs font-bold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">${labelText}</span>
                        <button onclick="nextTrace()" class="w-8 h-8 rounded-full bg-white border shadow flex items-center justify-center text-gray-600"><i data-lucide="chevron-right" class="w-4 h-4"></i></button>
                    </div>

                    <div class="relative bg-white rounded-3xl border-4 border-dashed border-purple-300 shadow-inner w-[280px] h-[280px] overflow-hidden">
                        <canvas id="trace-canvas" width="280" height="280" class="absolute inset-0 cursor-crosshair z-10"></canvas>
                        <div id="hand-indicator" class="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-3xl pointer-events-none z-20 animate-bounce-gentle">☝️</div>
                        <div id="start-node" class="absolute top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-ping z-20 pointer-events-none"></div>
                    </div>

                    <div class="flex gap-2 w-full max-w-[280px]">
                        <button onclick="padamCanvas()" class="flex-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold rounded-xl text-xs transition-colors">Padam</button>
                        <button onclick="semakLakaran()" class="flex-1 py-2 bg-pastel-green hover:bg-green-500 text-white font-bold rounded-xl text-xs shadow-md transition-colors">Selesai Semak</button>
                    </div>

                    <button onclick="navigate('home')" class="text-xs font-bold text-gray-400 hover:text-gray-600">
                        Kembali ke Menu Utama
                    </button>
                </div>
            `;
            safeCreateIcons();
            initCanvas();
        }

        function initCanvas() {
            canvas = document.getElementById('trace-canvas');
            if (!canvas) return;
            ctx = canvas.getContext('2d');

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "900 180px 'Fredoka'";
            ctx.fillStyle = "#F3E5F5"; 
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(traceTarget, canvas.width / 2, canvas.height / 2);

            ctx.strokeStyle = "#E0E0E0";
            ctx.lineWidth = 4;
            ctx.setLineDash([8, 8]);
            ctx.strokeText(traceTarget, canvas.width / 2, canvas.height / 2);
            ctx.setLineDash([]); 

            simpanPoints();
            hasScribbledOutside = false; // Reset status terkeluar garisan

            canvas.addEventListener('mousedown', startTrace);
            canvas.addEventListener('mousemove', traceMove);
            canvas.addEventListener('mouseup', stopTrace);
            canvas.addEventListener('mouseleave', stopTrace);

            canvas.addEventListener('touchstart', (e) => {
                if (e.cancelable) e.preventDefault();
                const touch = e.touches[0];
                startTrace({
                    clientX: touch.clientX,
                    clientY: touch.clientY
                });
            }, { passive: false });

            canvas.addEventListener('touchmove', (e) => {
                if (e.cancelable) e.preventDefault();
                const touch = e.touches[0];
                traceMove({
                    clientX: touch.clientX,
                    clientY: touch.clientY
                });
            }, { passive: false });

            canvas.addEventListener('touchend', stopTrace);
        }

        function simpanPoints() {
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            traceCoordinates = [];
            
            for (let y = 0; y < canvas.height; y += 4) {
                for (let x = 0; x < canvas.width; x += 4) {
                    const idx = (y * canvas.width + x) * 4;
                    if (imgData.data[idx + 3] > 10) { 
                        traceCoordinates.push({ x, y, hit: false });
                    }
                }
            }
        }

        function startTrace(e) {
            isTracing = true;
            const handInd = document.getElementById('hand-indicator');
            const startNd = document.getElementById('start-node');
            if (handInd) handInd.classList.add('hidden');
            if (startNd) startNd.classList.add('hidden');
            playSFX('pop');

            ctx.beginPath();
            const pos = dapatkanPosisi(e);
            ctx.moveTo(pos.x, pos.y);
            
            ctx.strokeStyle = "#40C4FF"; 
            ctx.lineWidth = 18;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            // Semak ketepatan titik sentuhan pertama (Had dilaraskan ke 16px)
            let minDistance = 9999;
            for (let i = 0; i < traceCoordinates.length; i += 2) {
                const pt = traceCoordinates[i];
                const d = Math.hypot(pt.x - pos.x, pt.y - pos.y);
                if (d < minDistance) minDistance = d;
                if (minDistance < 16) break;
            }
            if (minDistance > 16) {
                hasScribbledOutside = true;
            }
        }

        function traceMove(e) {
            if (!isTracing) return;
            const pos = dapatkanPosisi(e);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();

            // Semak jarak ke garisan terdekat secara Strict (Had Ketat 16px)
            let minDistance = 9999;
            traceCoordinates.forEach(pt => {
                const d = Math.hypot(pt.x - pos.x, pt.y - pos.y);
                if (d < minDistance) {
                    minDistance = d;
                }
                if (d < 16) {
                    pt.hit = true;
                }
            });

            // Sekiranya pergerakan pen terkeluar lebih daripada 16 piksel
            if (minDistance > 16) {
                hasScribbledOutside = true;
            }
        }

        function stopTrace() {
            isTracing = false;
        }

        function dapatkanPosisi(e) {
            const rect = canvas.getBoundingClientRect();
            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        }

        function padamCanvas() {
            playSFX('click');
            initCanvas();
            const handInd = document.getElementById('hand-indicator');
            const startNd = document.getElementById('start-node');
            if (handInd) handInd.classList.remove('hidden');
            if (startNd) startNd.classList.remove('hidden');
        }

        function semakLakaran() {
            const total = traceCoordinates.length;
            const hitCount = traceCoordinates.filter(pt => pt.hit).length;
            let matchingRate = total > 0 ? (hitCount / total) * 100 : 0;

            let stars = 0;
            let title = "Bagus, Cuba Lagi!";
            let message = "Sila cuba lagi sekali untuk lakar dengan lebih tepat.";
            let sfxToPlay = 'fail';

            // Sistem denda strict sekiranya dikesan terkeluar garisan lakaran
            if (hasScribbledOutside) {
                matchingRate = 0;
                stars = 0;
                title = "Alamak, Terkeluar!";
                message = "Adik dikesan menulis terkeluar jauh dari bentuk asal! Jom klik 'Lakar Semula' untuk belajar menulis mengikut bentuk dengan betul.";
                sfxToPlay = 'fail';
            } else {
                if (matchingRate >= 90) {
                    stars = 3;
                    title = "Wah, Pandainya Adik!";
                    message = "Hebat betul hasil lakaran adik! Cantik sangat.";
                    sfxToPlay = 'success';
                    safeConfetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                } else if (matchingRate >= 45) {
                    stars = 2;
                    title = "Hebat, Teruskan Cuba!";
                    message = "Sikit lagi! Cuba lakar mengikut garis tengah dengan tepat.";
                    sfxToPlay = 'success';
                }
            }

            playSFX(sfxToPlay);
            
            player.aktivitiSelesai += 1;
            player.bintang += stars;
            simpanKemajuan();

            contentArea.innerHTML = `
                <div class="text-center flex flex-col items-center justify-center p-4 w-full z-10">
                    <h2 class="text-3xl font-black ${stars === 0 ? 'text-red-500' : 'text-amber-500'} mb-2 animate-bounce-gentle">${title}</h2>
                    
                    <div class="w-full flex justify-center my-1">
                        ${stars >= 2 ? generateClappingCatMarkup("Koko menepuk tangan tanda adik sangat cemerlang!") : ''}
                    </div>

                    <div class="flex gap-2 text-5xl my-3">
                        ${[1, 2, 3].map(s => `
                            <span class="transition-transform duration-500 scale-110 ${s <= stars ? 'text-yellow-400' : 'text-gray-200'}">★</span>
                        `).join('')}
                    </div>

                    <div class="bg-white rounded-2xl p-4 border border-purple-100 shadow max-w-xs mb-4 w-full">
                        <p class="text-xs text-gray-500">Ketepatan Lakaran: <span class="font-bold ${stars === 0 ? 'text-red-500' : 'text-pastel-blue'}">${Math.round(matchingRate)}%</span></p>
                        <p class="text-sm font-semibold text-gray-700 mt-1">${message}</p>
                    </div>

                    <div class="flex gap-2 w-full max-w-xs">
                        <button onclick="setupTraceUI()" class="flex-1 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-2xl text-xs">Lakar Semula</button>
                        <button onclick="nextTraceAuto()" class="flex-1 py-3 bg-pastel-green hover:bg-green-600 text-white font-bold rounded-2xl shadow text-xs">Seterusnya</button>
                    </div>
                </div>
            `;
        }

        function nextTraceAuto() {
            if (isTraceLetterMode) {
                if (!isLowercaseActive) {
                    isLowercaseActive = true;
                    setupTraceUI();
                    tukarMesejMaskot("hai adik, sini kita akan belajar menulis huruf. Adik kena tulis mengikut bentuk huruf yang diberikan");
                } else {
                    isLowercaseActive = false;
                    currentTraceIndex++;
                    if (currentTraceIndex <= 25) {
                        setupTraceUI();
                        tukarMesejMaskot("hai adik, sini kita akan belajar menulis huruf. Adik kena tulis mengikut bentuk huruf yang diberikan");
                    } else {
                        showSuccessModulEnd("Hebatnya adik! Selesai menulis lakaran semua huruf besar & kecil!", 'Juara Trace');
                    }
                }
            } else {
                currentTraceIndex++;
                if (currentTraceIndex <= 9) {
                    setupTraceUI();
                    tukarMesejMaskot("hai adik, sini kita akan belajar menulis nombor. Adik kena tulis mengikut bentuk nombor yang diberikan");
                } else {
                    showSuccessModulEnd("Hebatnya adik! Selesai menulis lakaran nombor!", 'Pintar Nombor');
                }
            }
        }

        function nextTrace() {
            if (isTraceLetterMode) {
                if (!isLowercaseActive) {
                    isLowercaseActive = true;
                } else {
                    if (currentTraceIndex < 25) {
                        isLowercaseActive = false;
                        currentTraceIndex++;
                    }
                }
                tukarMesejMaskot("hai adik, sini kita akan belajar menulis huruf. Adik kena tulis mengikut bentuk huruf yang diberikan");
            } else {
                if (currentTraceIndex < 9) {
                    currentTraceIndex++;
                }
                tukarMesejMaskot("hai adik, sini kita akan belajar menulis nombor. Adik kena tulis mengikut bentuk nombor yang diberikan");
            }
            setupTraceUI();
        }

        function backTrace() {
            if (isTraceLetterMode) {
                if (isLowercaseActive) {
                    isLowercaseActive = false;
                } else {
                    if (currentTraceIndex > 0) {
                        isLowercaseActive = true;
                        currentTraceIndex--;
                    }
                }
                tukarMesejMaskot("hai adik, sini kita akan belajar menulis huruf. Adik kena tulis mengikut bentuk huruf yang diberikan");
            } else {
                if (currentTraceIndex > 0) {
                    currentTraceIndex--;
                }
                tukarMesejMaskot("hai adik, sini kita akan belajar menulis nombor. Adik kena tulis mengikut bentuk nombor yang diberikan");
            }
            setupTraceUI();
        }
    </script>

    <script>
        let kuizSasaranWarna = null;
        let kuizPilihanWarna = [];

        function renderWarna() {
            contentArea.innerHTML = `
                <div class="w-full flex flex-col items-center gap-4 text-center z-10">
                    <div class="text-center">
                        <h2 class="text-xl font-bold text-gray-700">Kenal Warna Ceria</h2>
                        <p class="text-xs text-gray-400">Sentuh kad warna untuk meneroka</p>
                    </div>

                    <div class="grid grid-cols-5 gap-2 w-full max-h-[220px] overflow-y-auto px-1">
                        ${DATA_WARNA.map(w => `
                            <button onclick="pilihWarnaKad('${w.n}')" class="h-14 rounded-2xl border-2 flex flex-col items-center justify-center relative shadow-sm hover:scale-95 transition-all" style="background-color: ${w.h}; border-color: ${w.border ? '#E0E0E0' : 'transparent'};">
                                <span class="text-xl">${w.e}</span>
                                <span class="text-[9px] font-bold absolute bottom-1 px-1 rounded bg-white/80">${w.n}</span>
                            </button>
                        `).join('')}
                    </div>

                    <div class="bg-blue-50/80 rounded-2xl p-4 border border-dashed border-blue-200 w-full max-w-xs mt-2">
                        <h4 class="font-bold text-xs text-blue-800 mb-2">Kuiz Warna Pintar:</h4>
                        <div id="kuiz-warna-box" class="space-y-3"></div>
                    </div>

                    <button onclick="navigate('home')" class="text-xs font-bold text-gray-400 hover:text-gray-600 flex items-center gap-1">
                        <i data-lucide="arrow-left" class="w-4 h-4"></i> Kembali
                    </button>
                </div>
            `;
            safeCreateIcons();
            janaKuizWarna();
        }

        function pilihWarnaKad(nama) {
            playSFX('pop');
            tukarMesejMaskot("hai adik, sini kita akan belajar mengenali warna asas");
            berikanBintang(1, "Kenal warna " + nama);
        }

        function janaKuizWarna() {
            let availableWarna = DATA_WARNA.filter(w => !quizHistory.warna.includes(w.n));
            if (availableWarna.length === 0) {
                quizHistory.warna = [];
                availableWarna = DATA_WARNA;
            }

            kuizSasaranWarna = availableWarna[Math.floor(Math.random() * availableWarna.length)];
            
            quizHistory.warna.push(kuizSasaranWarna.n);
            if (quizHistory.warna.length > 4) {
                quizHistory.warna.shift();
            }

            const pengacau = DATA_WARNA.filter(w => w.n !== kuizSasaranWarna.n);
            const rawakPengacau = pengacau.sort(() => 0.5 - Math.random()).slice(0, 3);
            
            kuizPilihanWarna = [kuizSasaranWarna, ...rawakPengacau].sort(() => 0.5 - Math.random());

            const box = document.getElementById('kuiz-warna-box');
            if (box) {
                box.innerHTML = `
                    <p class="text-xs font-semibold text-gray-700">"Sila pilih warna <span class="font-bold text-blue-600 underline">${kuizSasaranWarna.n}</span>"</p>
                    <div class="grid grid-cols-2 gap-2">
                        ${kuizPilihanWarna.map(p => `
                            <button onclick="jawabKuizWarna('${p.n}')" class="bubble-btn h-14 rounded-2xl border-3 border-white shadow-md active:scale-95 transition-all flex items-center justify-center text-3xl" style="background-color: ${p.h}; ${p.border ? 'border-gray-200' : ''}" title="${p.n}">
                                <span class="filter drop-shadow-sm">${p.e}</span>
                            </button>
                        `).join('')}
                    </div>
                `;
            }
        }

        function jawabKuizWarna(pilihan) {
            if (pilihan === kuizSasaranWarna.n) {
                safeConfetti({ particleCount: 50, spread: 60 });
                playSFX('success');
                tukarMesejMaskot("Betul! Hebatnya adik, bijak memilih warna.");
                berikanBintang(5, "Betul kuiz warna!");
                beriLencana('Pakar Warna');
                setTimeout(janaKuizWarna, 2500);
            } else {
                playSFX('fail');
                tukarMesejMaskot("Oops, cuba lagi sayang. Jom pilih sekali lagi!");
            }
        }
    </script>

    <script>
        /* MODUL 6: BENTUK */
        let kuizSasaranBentuk = null;
        function renderBentuk() {
            contentArea.innerHTML = `
                <div class="w-full flex flex-col items-center gap-4 text-center z-10 animate-pulse-soft">
                    <div class="text-center">
                        <h2 class="text-xl font-bold text-gray-700">Kenal Rupa Bentuk</h2>
                        <p class="text-xs text-gray-400">Pilih bentuk untuk meneroka</p>
                    </div>

                    <div class="grid grid-cols-3 gap-3 w-full max-w-xs">
                        ${DATA_BENTUK.map(b => `
                            <button onclick="pilihBentukKad('${b.n}')" class="bubble-btn p-4 bg-white border-2 border-yellow-200 rounded-2xl flex flex-col items-center justify-center gap-1 text-center hover:scale-105 transition-all">
                                <span class="text-3xl">${b.e}</span>
                                <span class="text-xs font-bold text-gray-600">${b.n}</span>
                            </button>
                        `).join('')}
                    </div>

                    <div class="bg-pink-50/80 rounded-2xl p-4 border border-dashed border-pink-200 w-full max-w-xs mt-1">
                        <h4 class="font-bold text-xs text-pink-800 mb-2">Kuiz Bentuk Bijak:</h4>
                        <div id="kuiz-bentuk-box" class="space-y-3"></div>
                    </div>

                    <button onclick="navigate('home')" class="text-xs font-bold text-gray-400 hover:text-gray-600 flex items-center gap-1">
                        <i data-lucide="arrow-left" class="w-4 h-4"></i> Kembali
                    </button>
                </div>
            `;
            safeCreateIcons();
            janaKuizBentuk();
        }

        function pilihBentukKad(nama) {
            playSFX('pop');
            tukarMesejMaskot("hai adik, sini kita akan belajar mengenali bentuk bentuk asas ");
            berikanBintang(1, "Kenal bentuk");
        }

        function janaKuizBentuk() {
            let availableBentuk = DATA_BENTUK.filter(b => !quizHistory.bentuk.includes(b.n));
            if (availableBentuk.length === 0) {
                quizHistory.bentuk = [];
                availableBentuk = DATA_BENTUK;
            }

            kuizSasaranBentuk = availableBentuk[Math.floor(Math.random() * availableBentuk.length)];
            
            quizHistory.bentuk.push(kuizSasaranBentuk.n);
            if (quizHistory.bentuk.length > 3) {
                quizHistory.bentuk.shift();
            }

            const pengacau = DATA_BENTUK.filter(b => b.n !== kuizSasaranBentuk.n);
            const rawakPengacau = pengacau.sort(() => 0.5 - Math.random()).slice(0, 3);
            const pilihan = [kuizSasaranBentuk, ...rawakPengacau].sort(() => 0.5 - Math.random());

            const box = document.getElementById('kuiz-bentuk-box');
            if (box) {
                box.innerHTML = `
                    <p class="text-xs font-semibold text-gray-700">"Pilih rupa bentuk <span class="font-bold text-pink-600 underline">${kuizSasaranBentuk.n}</span>"</p>
                    <div class="grid grid-cols-2 gap-2">
                        ${pilihan.map(p => `
                            <button onclick="jawabKuizBentuk('${p.n}')" class="bubble-btn py-2 px-3 bg-white hover:bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-xs text-gray-600 flex items-center justify-center gap-1">
                                ${p.e} ${p.n}
                            </button>
                        `).join('')}
                    </div>
                `;
            }
        }

        function jawabKuizBentuk(pilihan) {
            if (pilihan === kuizSasaranBentuk.n) {
                safeConfetti({ particleCount: 50, spread: 60 });
                playSFX('success');
                tukarMesejMaskot("Betul! Adik hebat mengenal bentuk.");
                berikanBintang(5, "Betul kuiz bentuk");
                setTimeout(janaKuizBentuk, 2500);
            } else {
                playSFX('fail');
                tukarMesejMaskot("Silap sikit, mari cuba cari lagi!");
            }
        }
    </script>

    <script>
        let kuizSasaranHaiwan = null;

        function renderHaiwan() {
            contentArea.innerHTML = `
                <div class="w-full flex flex-col items-center gap-4 text-center z-10 animate-pulse-soft">
                    <div class="text-center">
                        <h2 class="text-xl font-bold text-gray-700">Dunia Haiwan Comel</h2>
                        <p class="text-xs text-gray-400">Tekan gambar untuk meneroka</p>
                    </div>

                    <div class="grid grid-cols-5 gap-2 w-full max-h-[220px] overflow-y-auto px-1">
                        ${DATA_HAIWAN.map(h => `
                            <button onclick="bunyiHaiwan('${h.n}', '${h.s}')" class="bubble-btn h-14 bg-white border-2 border-green-200 rounded-2xl flex flex-col items-center justify-center relative shadow-sm hover:scale-95 transition-all">
                                <span class="text-3xl">${h.e}</span>
                                <span class="text-[9px] font-bold text-green-700 absolute bottom-0.5">${h.n}</span>
                            </button>
                        `).join('')}
                    </div>

                    <div class="bg-green-50/80 rounded-2xl p-4 border border-dashed border-green-200 w-full max-w-xs mt-1">
                        <h4 class="font-bold text-xs text-green-800 mb-2">Teka Nama Haiwan:</h4>
                        <div id="kuiz-haiwan-box" class="space-y-3"></div>
                    </div>

                    <button onclick="navigate('home')" class="text-xs font-bold text-gray-400 hover:text-gray-600 flex items-center gap-1">
                        <i data-lucide="arrow-left" class="w-4 h-4"></i> Kembali
                    </button>
                </div>
            `;
            safeCreateIcons();
            janaKuizHaiwan();
        }

        function bunyiHaiwan(nama, suaraText) {
            playSFX('pop');
            tukarMesejMaskot("hai adik, sini kita akan belajar mengenali haiwan asas");
            berikanBintang(1, "Kenal haiwan");
        }

        function janaKuizHaiwan() {
            let availableHaiwan = DATA_HAIWAN.filter(h => !quizHistory.haiwan.includes(h.n));
            if (availableHaiwan.length === 0) {
                quizHistory.haiwan = [];
                availableHaiwan = DATA_HAIWAN;
            }

            kuizSasaranHaiwan = availableHaiwan[Math.floor(Math.random() * availableHaiwan.length)];
            
            quizHistory.haiwan.push(kuizSasaranHaiwan.n);
            if (quizHistory.haiwan.length > 4) {
                quizHistory.haiwan.shift();
            }

            const pengacau = DATA_HAIWAN.filter(h => h.n !== kuizSasaranHaiwan.n);
            const rawakPengacau = pengacau.sort(() => 0.5 - Math.random()).slice(0, 3);
            const pilihan = [kuizSasaranHaiwan, ...rawakPengacau].sort(() => 0.5 - Math.random());

            const box = document.getElementById('kuiz-haiwan-box');
            if (box) {
                box.innerHTML = `
                    <p class="text-xs font-semibold text-gray-700">"Sila pilih haiwan bernama <span class="font-bold text-green-600 underline">${kuizSasaranHaiwan.n}</span>"</p>
                    <div class="grid grid-cols-2 gap-2">
                        ${pilihan.map(p => `
                            <button onclick="jawabKuizHaiwan('${p.n}')" class="bubble-btn py-2 px-3 bg-white hover:bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-xs text-gray-600 flex items-center justify-center gap-1.5">
                                <span class="text-xl">${p.e}</span> ${p.n}
                            </button>
                        `).join('')}
                    </div>
                `;
            }
        }

        function jawabKuizHaiwan(pilihan) {
            if (pilihan === kuizSasaranHaiwan.n) {
                safeConfetti({ particleCount: 50, spread: 60 });
                playSFX('success');
                tukarMesejMaskot("Pandainya adik! Betul!");
                berikanBintang(5, "Betul kuiz haiwan");
                beriLencana('Sahabat Haiwan');
                setTimeout(janaKuizHaiwan, 2500);
            } else {
                playSFX('fail');
                tukarMesejMaskot("Salah sedikit, jom gambar yang betul!");
            }
        }

        /* MODUL 8: KUIZ PINTAR (TEKA DAN PILIH) */
        let kuizJenis = "";
        let kuizObjJawapan = null;
        let kuizPilihanGabung = [];

        function renderDengarPilih() {
            tukarMesejMaskot("Sila baca soalan dan teka jawapan yang betul.");
            janaKuizDengarPilih();
        }

        function janaKuizDengarPilih() {
            let attempts = 0;
            let questionKey = "";

            // Menjana soalan secara rawak sehingga menemui jenis soalan yang tidak diulang baru-baru ini
            do {
                const kategori = ['huruf', 'nombor', 'warna', 'bentuk', 'haiwan'];
                kuizJenis = kategori[Math.floor(Math.random() * kategori.length)];
                
                let dataSasaran = [];
                let dataRawak = null;

                if (kuizJenis === 'huruf') {
                    dataSasaran = DATA_HURUF;
                    dataRawak = dataSasaran[Math.floor(Math.random() * dataSasaran.length)];
                    kuizObjJawapan = { nama: dataRawak.h, paparan: dataRawak.h, visual: dataRawak.e };
                } 
                else if (kuizJenis === 'nombor') {
                    const n = Math.floor(Math.random() * 11); 
                    kuizObjJawapan = { nama: n.toString(), paparan: n.toString(), visual: '🔟' };
                } 
                else if (kuizJenis === 'warna') {
                    dataSasaran = DATA_WARNA;
                    dataRawak = dataSasaran[Math.floor(Math.random() * dataSasaran.length)];
                    kuizObjJawapan = { nama: dataRawak.n, paparan: dataRawak.n, visual: '🎨' };
                } 
                else if (kuizJenis === 'bentuk') {
                    dataSasaran = DATA_BENTUK;
                    dataRawak = dataSasaran[Math.floor(Math.random() * dataSasaran.length)];
                    kuizObjJawapan = { nama: dataRawak.n, paparan: dataRawak.n, visual: dataRawak.e };
                } 
                else if (kuizJenis === 'haiwan') {
                    dataSasaran = DATA_HAIWAN;
                    dataRawak = dataSasaran[Math.floor(Math.random() * dataSasaran.length)];
                    kuizObjJawapan = { nama: dataRawak.n, paparan: dataRawak.n, visual: dataRawak.e };
                }

                questionKey = `${kuizJenis}-${kuizObjJawapan.nama}`;
                attempts++;
            } while (quizHistory.pintar.includes(questionKey) && attempts < 20);

            // Daftar soalan ke senarai sejarah pintar (Maksimum 5 rekod terakhir dipantau)
            quizHistory.pintar.push(questionKey);
            if (quizHistory.pintar.length > 5) {
                quizHistory.pintar.shift();
            }

            let teksArahan = "";
            if (kuizJenis === 'huruf') {
                teksArahan = `Sila pilih huruf ${kuizObjJawapan.nama}`;
            } else if (kuizJenis === 'nombor') {
                teksArahan = `Sila pilih nombor ${terjemahSebutNombor(parseInt(kuizObjJawapan.nama))}`;
            } else if (kuizJenis === 'warna') {
                teksArahan = `Sila pilih warna ${kuizObjJawapan.nama}`;
            } else if (kuizJenis === 'bentuk') {
                teksArahan = `Sila pilih bentuk ${kuizObjJawapan.nama}`;
            } else if (kuizJenis === 'haiwan') {
                teksArahan = `Sila pilih haiwan bernama ${kuizObjJawapan.nama}`;
            }

            let senaraiPilihan = [];
            if (kuizJenis === 'huruf') {
                const pengacau = DATA_HURUF.filter(h => h.h !== kuizObjJawapan.nama).sort(() => 0.5 - Math.random()).slice(0, 3);
                senaraiPilihan = [kuizObjJawapan, ...pengacau.map(p => ({ nama: p.h, paparan: p.h, visual: p.e }))];
            } else if (kuizJenis === 'nombor') {
                const pengacau = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(num => num.toString() !== kuizObjJawapan.nama).sort(() => 0.5 - Math.random()).slice(0, 3);
                senaraiPilihan = [kuizObjJawapan, ...pengacau.map(num => ({ nama: num.toString(), paparan: num.toString(), visual: '🔟' }))];
            } else if (kuizJenis === 'warna') {
                const pengacau = DATA_WARNA.filter(w => w.n !== kuizObjJawapan.nama).sort(() => 0.5 - Math.random()).slice(0, 3);
                senaraiPilihan = [kuizObjJawapan, ...pengacau.map(p => ({ nama: p.n, paparan: p.n, visual: '🎨' }))];
            } else if (kuizJenis === 'bentuk') {
                const pengacau = DATA_BENTUK.filter(b => b.n !== kuizObjJawapan.nama).sort(() => 0.5 - Math.random()).slice(0, 3);
                senaraiPilihan = [kuizObjJawapan, ...pengacau.map(p => ({ nama: p.n, paparan: p.n, visual: p.e }))];
            } else if (kuizJenis === 'haiwan') {
                const pengacau = DATA_HAIWAN.filter(h => h.n !== kuizObjJawapan.nama).sort(() => 0.5 - Math.random()).slice(0, 3);
                senaraiPilihan = [kuizObjJawapan, ...pengacau.map(p => ({ nama: p.n, paparan: p.n, visual: p.e }))];
            }

            kuizPilihanGabung = senaraiPilihan.sort(() => 0.5 - Math.random());

            contentArea.innerHTML = `
                <div class="w-full flex flex-col items-center gap-3 text-center z-10 animate-pulse-soft">
                    <div class="text-center">
                        <span class="text-xs font-bold text-orange-600 bg-orange-100 py-1 px-3 rounded-full uppercase">Kategori: ${kuizJenis}</span>
                        <h2 class="text-xl font-bold text-gray-700 mt-1">Kuiz Pintar</h2>
                    </div>

                    <div class="bg-white/95 rounded-3xl p-5 border-4 border-orange-300 shadow-lg w-full max-w-xs flex flex-col items-center justify-center gap-3">
                        <div class="w-full flex justify-center">
                            ${generateWavingBearMarkup("Jom jawab teka-teki kuiz ini!")}
                        </div>
                        <p class="text-sm font-semibold text-gray-700 mt-1">${teksArahan}</p>
                    </div>

                    <div class="grid grid-cols-2 gap-3 w-full max-w-xs">
                        ${kuizPilihanGabung.map(p => `
                            <button onclick="jawabKuizDengarPilih('${p.nama}')" class="bubble-btn py-3 bg-white/95 hover:bg-orange-50 border-2 border-gray-100 rounded-2xl font-bold text-sm text-gray-700 flex flex-col items-center justify-center gap-0.5 shadow-sm">
                                <span class="text-2xl">${p.visual}</span>
                                <span>${p.paparan}</span>
                            </button>
                        `).join('')}
                    </div>

                    <button onclick="navigate('home')" class="text-xs font-bold text-gray-400 hover:text-gray-600">
                        Kembali ke Menu Utama
                    </button>
                </div>
            `;
            safeCreateIcons();
            tukarMesejMaskot(teksArahan);
        }

        function jawabKuizDengarPilih(pilihan) {
            if (pilihan === kuizObjJawapan.nama) {
                safeConfetti({ particleCount: 60, spread: 80, origin: { y: 0.6 } });
                playSFX('success');
                tukarMesejMaskot("Bagus! Jawapan adik betul.");
                berikanBintang(6, "Menyelesaikan kuiz.");
                setTimeout(janaKuizDengarPilih, 2500);
            } else {
                playSFX('fail');
                tukarMesejMaskot("Bukan yang itu sayang. Sila cuba lagi!");
            }
        }
    </script>

    <script>
        function showSuccessModulEnd(titleText, lencanaToGive) {
            playSFX('success');
            safeConfetti({ particleCount: 150, spread: 80 });

            if (!player.lencana.includes(lencanaToGive)) {
                player.lencana.push(lencanaToGive);
            }
            player.bintang += 15; 
            simpanKemajuan();

            contentArea.innerHTML = `
                <div class="text-center flex flex-col items-center justify-center p-4 w-full z-10 animate-pulse-soft">
                    <h1 class="text-4xl font-extrabold text-amber-500 mb-2">Tahniah Ahli Pintar!</h1>
                    
                    <div class="my-3 w-full flex justify-center">
                        ${generateClappingCatMarkup("Koko menepuk tangan gembira untuk adik!")}
                    </div>

                    <div class="bg-white rounded-3xl p-5 border-4 border-yellow-300 shadow-lg w-full max-w-xs text-center">
                        <span class="text-5xl mb-2 block">🎖️</span>
                        <h3 class="font-bold text-lg text-yellow-700">Lencana Baharu Diperoleh:</h3>
                        <p class="font-extrabold text-xl text-yellow-800 bg-yellow-100 py-2 px-4 rounded-xl mt-2 mb-1">${lencanaToGive}</p>
                        <p class="text-[10px] text-gray-500 font-bold">Bonus +15 Bintang Berjaya Diperoleh!</p>
                    </div>

                    <button onclick="navigate('home')" class="bubble-btn mt-6 py-3 px-8 bg-pastel-green hover:bg-green-600 text-white font-extrabold text-lg rounded-2xl border-b-4 border-green-700 w-full max-w-xs shadow-lg">
                        Teruskan Belajar!
                    </button>
                </div>
            `;
        }

        function berikanBintang(jumlah, sebab) {
            player.bintang += jumlah;
            simpanKemajuan();
            kemasKiniHeader();
        }

        function beriLencana(namaLencana) {
            if (!player.lencana.includes(namaLencana)) {
                player.lencana.push(namaLencana);
                simpanKemajuan();
                
                playSFX('success');
                safeConfetti({ particleCount: 150, spread: 80 });
                showMessageModal('🎖️', 'Tahniah!', `Anda memperoleh Lencana Baharu: ${namaLencana}`);
            }
        }

        function renderGanjaran() {
            tukarMesejMaskot("Ini ialah peti harta karun yang menyimpan pelekat comel!");

            const pelekatSediaAda = [
                { id: 'p1', e: '🦄', cost: 10, n: 'Unicorn Sakti' },
                { id: 'p2', e: '🚀', cost: 25, n: 'Roket Galaxy Pro' },
                { id: 'p3', e: '🍦', cost: 40, n: 'Ais Krim Pelangi Mega' },
                { id: 'p4', e: '🦖', cost: 60, n: 'T-Rex Emas Purba' },
                { id: 'p5', e: '🧸', cost: 90, n: 'Beruang Angkasawan' },
                { id: 'p6', e: '🌈', cost: 130, n: 'Laluan Pelangi Magik' },
                { id: 'p7', e: '🏰', cost: 180, n: 'Istana Awan Mewah' },
                { id: 'p8', e: '🐉', cost: 250, n: 'Naga Berapi Nilam' },
                { id: 'p9', e: '🛸', cost: 350, n: 'Piring Terbang Alien' },
                { id: 'p10', e: '👑', cost: 500, n: 'Mahkota Raja Pintar' }
            ];

            contentArea.innerHTML = `
                <div class="w-full flex flex-col items-center gap-4 text-center z-10 animate-pulse-soft">
                    <div class="text-center">
                        <h2 class="text-xl font-bold text-yellow-600 flex items-center justify-center gap-1">🎁 Peti Harta & Pelekat</h2>
                        <p class="text-xs text-gray-400">Gunakan bintang untuk menebus pelekat comel</p>
                    </div>

                    <div class="bg-yellow-50 px-4 py-2 rounded-2xl border-2 border-yellow-200 inline-flex items-center gap-1.5 shadow-inner">
                        <span class="text-2xl">⭐</span>
                        <span class="font-black text-yellow-800 text-lg">${player.bintang}</span>
                        <span class="text-xs text-gray-400 font-bold">Bintang Sedia Ada</span>
                    </div>

                    <div class="grid grid-cols-2 gap-3 w-full max-h-[220px] overflow-y-auto px-1">
                        ${pelekatSediaAda.map(p => {
                            const dimiliki = player.stickers.includes(p.id);
                            return `
                                <div class="bg-white/95 border-2 ${dimiliki ? 'border-green-300 bg-green-50/20' : 'border-gray-200'} rounded-2xl p-3 flex flex-col items-center justify-between text-center gap-1">
                                    <span class="text-4xl ${dimiliki ? 'filter drop-shadow-md' : 'opacity-40 filter grayscale'}">${p.e}</span>
                                    <span class="text-[10px] font-bold text-gray-600 leading-tight">${p.n}</span>
                                    ${dimiliki ? `
                                        <span class="text-[9px] text-green-600 font-extrabold bg-green-100 px-2 py-0.5 rounded-full">Dimiliki</span>
                                    ` : `
                                        <button onclick="tebusPelekat('${p.id}', ${p.cost}, '${p.e}')" class="w-full py-1.5 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl text-[10px] font-bold flex items-center justify-center gap-1 shadow-sm">
                                            ⭐ ${p.cost}
                                        </button>
                                    `}
                                </div>
                            `;
                        }).join('')}
                    </div>

                    <button onclick="navigate('home')" class="text-xs font-bold text-gray-400 hover:text-gray-600">
                        Kembali ke Menu Utama
                    </button>
                </div>
            `;
        }

        function tebusPelekat(id, kos, emoji) {
            if (player.bintang >= kos) {
                player.bintang -= kos;
                player.stickers.push(id);
                simpanKemajuan();
                
                playSFX('success');
                safeConfetti({ particleCount: 80, spread: 60 });
                tukarMesejMaskot(`Yey! Adik berjaya tebus pelekat ${emoji}!`);
                renderGanjaran();
            } else {
                playSFX('fail');
                tukarMesejMaskot("Bintang adik tidak mencukupi untuk tebus pelekat ini. Jom bermain lagi!");
            }
        }

        function renderLencana() {
            tukarMesejMaskot("Lencana ialah bukti adik telah belajar dengan bersungguh-sungguh!");

            const lencanaSediaAda = [
                { nama: 'Juara ABC', icon: '🏆', desc: 'Membaca semua abjad A-Z' },
                { nama: 'Pintar Nombor', icon: '🔢', desc: 'Menamatkan cabaran asas nombor' },
                { nama: 'Pakar Warna', icon: '🎨', desc: 'Selesa menyelesaikan kuiz warna' },
                { nama: 'Sahabat Haiwan', icon: '🦁', desc: 'Menguasai teka bunyi haiwan' },
                { nama: 'Juara Trace', icon: '✍️', desc: 'Menjejaki huruf dengan ketepatan 100%' }
            ];

            contentArea.innerHTML = `
                <div class="w-full flex flex-col items-center gap-4 text-center z-10 animate-pulse-soft">
                    <div class="text-center">
                        <h2 class="text-xl font-bold text-purple-600 flex items-center justify-center gap-1">🎖️ Galeri Lencana</h2>
                        <p class="text-xs text-gray-400">Selesaikan tugasan untuk memperoleh lencana</p>
                    </div>

                    <div class="grid grid-cols-1 gap-2.5 w-full max-h-[260px] overflow-y-auto px-1">
                        ${lencanaSediaAda.map(l => {
                            const dimiliki = player.lencana.includes(l.nama);
                            return `
                                <div class="bg-white/95 border-2 ${dimiliki ? 'border-purple-300 bg-purple-50/20' : 'border-gray-100'} rounded-2xl p-3 flex items-center gap-3 text-left">
                                    <span class="text-3xl ${dimiliki ? '' : 'filter grayscale opacity-40'}">${l.icon}</span>
                                    <div class="flex-grow">
                                        <h4 class="font-bold text-xs text-gray-700">${l.nama}</h4>
                                        <p class="text-[9px] text-gray-400">${l.desc}</p>
                                    </div>
                                    <span class="text-[9px] font-bold px-2.5 py-1 rounded-full ${dimiliki ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-400'}">
                                        ${dimiliki ? 'Selesai' : 'Belum'}
                                    </span>
                                </div>
                            `;
                        }).join('')}
                    </div>

                    <button onclick="navigate('home')" class="text-xs font-bold text-gray-400 hover:text-gray-600">
                        Kembali
                    </button>
                </div>
            `;
        }

        function renderKedudukan() {
            tukarMesejMaskot("Lihat rakan-rakan sekelas lain! Adik pun boleh mendaki tangga teratas!");

            const rkan = [
                { pos: 1, nama: 'Muhammad', avatar: '👦', bintang: 185, badge: '🥇' },
                { pos: 2, nama: 'Sofia', avatar: '👧', bintang: 154, badge: '🥈' },
                { pos: 3, nama: 'Rayyan', avatar: '👦', bintang: 120, badge: '🥉' },
                { pos: 4, nama: player.nama || 'Pemain', avatar: player.avatar, bintang: player.bintang, badge: '👉', self: true },
                { pos: 5, nama: 'Mia Kucing', avatar: '🐱', bintang: 75, badge: '' }
            ].sort((a,b) => b.bintang - a.bintang);

            contentArea.innerHTML = `
                <div class="w-full flex flex-col items-center gap-4 text-center z-10 animate-pulse-soft">
                    <div class="text-center">
                        <h2 class="text-xl font-bold text-amber-500 flex items-center justify-center gap-1">🏆 Carta Kedudukan Bijak</h2>
                        <p class="text-xs text-gray-400">Papan mata murid paling tekun mengumpul bintang</p>
                    </div>

                    <div class="w-full bg-white rounded-2xl border border-yellow-200 shadow-sm p-3 max-w-xs space-y-2">
                        ${rkan.map((rk, idx) => `
                            <div class="flex items-center justify-between p-2 rounded-xl text-xs ${rk.self ? 'bg-yellow-100/60 border border-yellow-300 font-bold' : 'bg-gray-50' }">
                                <div class="flex items-center gap-2">
                                    <span class="w-5 text-center font-bold text-gray-500">${rk.badge || (idx + 1)}</span>
                                    <span>${rk.avatar}</span>
                                    <span class="text-gray-700 truncate max-w-[100px]">${rk.nama}</span>
                                </div>
                                <div class="flex items-center gap-1">
                                    <span class="text-yellow-500 font-bold">⭐</span>
                                    <span class="font-bold text-gray-700">${rk.bintang}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <button onclick="navigate('home')" class="text-xs font-bold text-gray-400 hover:text-gray-600">
                        Kembali ke Menu Utama
                    </button>
                </div>
            `;
        }
    </script>

    <script>
        /* ==========================================
           LOGIK MENU TERAPUNG & GERBANG KESELAMATAN
           ========================================== */
        let isFloatingMenuOpen = false;

        function toggleFloatingMenu() {
            playSFX('click');
            const options = document.getElementById('floating-menu-options');
            const icon = document.getElementById('menu-icon-lucide');
            
            isFloatingMenuOpen = !isFloatingMenuOpen;
            
            if (isFloatingMenuOpen) {
                if (options) {
                    options.classList.remove('scale-0');
                    options.classList.add('scale-100');
                }
                if (icon) icon.setAttribute('data-lucide', 'x');
            } else {
                if (options) {
                    options.classList.remove('scale-100');
                    options.classList.add('scale-0');
                }
                if (icon) icon.setAttribute('data-lucide', 'menu');
            }
            safeCreateIcons();
        }

        function closeFloatingMenu() {
            isFloatingMenuOpen = false;
            const options = document.getElementById('floating-menu-options');
            const icon = document.getElementById('menu-icon-lucide');
            if (options) {
                options.classList.remove('scale-100');
                options.classList.add('scale-0');
            }
            if (icon) {
                icon.setAttribute('data-lucide', 'menu');
                safeCreateIcons();
            }
        }

        let numA, numB, correctMathAns;
        function openParentsGate() {
            closeFloatingMenu();
            playSFX('click');
            
            numA = Math.floor(Math.random() * 8) + 2; 
            numB = Math.floor(Math.random() * 7) + 2;
            correctMathAns = numA + numB;
            parentsMathAns = numA + numB;
            parentsTypedAnswer = "";

            const errEl = document.getElementById('parents-error-msg');
            const questEl = document.getElementById('parents-math-question');
            const displayEl = document.getElementById('parents-keypad-display');
            const gateEl = document.getElementById('parents-gate-modal');

            if (errEl) errEl.classList.add('hidden');
            if (questEl) questEl.textContent = `${numA} + ${numB} = ?`;
            if (displayEl) displayEl.textContent = "";
            
            if (gateEl) {
                gateEl.classList.remove('hidden');
                gateEl.classList.add('flex');
            }
        }

        function closeParentsGate() {
            const gateEl = document.getElementById('parents-gate-modal');
            if (gateEl) {
                gateEl.classList.remove('flex');
                gateEl.classList.add('hidden');
            }
        }

        function verifyParentsGate() {
            const val = parseInt(parentsTypedAnswer);
            const errEl = document.getElementById('parents-error-msg');

            if (val === parentsMathAns) {
                playSFX('success');
                closeParentsGate();
                openSettings();
            } else {
                playSFX('fail');
                if (errEl) errEl.classList.remove('hidden');
                parentsTypedAnswer = "";
                const displayEl = document.getElementById('parents-keypad-display');
                if (displayEl) displayEl.textContent = "";
            }
        }

        function openSettings() {
            const sfxTog = document.getElementById('sfx-toggle');
            const bgmTog = document.getElementById('bgm-toggle');
            const setMod = document.getElementById('settings-modal');

            if (sfxTog) sfxTog.checked = sfxEnabled;
            if (bgmTog) bgmTog.checked = bgmEnabled;
            
            if (setMod) {
                setMod.classList.remove('hidden');
                setMod.classList.add('flex');
            }
        }

        function closeSettings() {
            const setMod = document.getElementById('settings-modal');
            if (setMod) {
                setMod.classList.remove('flex');
                setMod.classList.add('hidden');
            }
        }

        function toggleSFXSetting() {
            const sfxTog = document.getElementById('sfx-toggle');
            if (sfxTog) sfxEnabled = sfxTog.checked;
            playSFX('pop');
        }

        function toggleBGMSetting() {
            const bgmTog = document.getElementById('bgm-toggle');
            if (bgmTog) bgmEnabled = bgmTog.checked;
            if (bgmEnabled) {
                startBGM();
            } else {
                stopBGM();
            }
        }

        function openConfirmModal() {
            closeSettings();
            const confEl = document.getElementById('confirm-modal');
            if (confEl) {
                confEl.classList.remove('hidden');
                confEl.classList.add('flex');
            }
        }

        function closeConfirmModal() {
            const confEl = document.getElementById('confirm-modal');
            if (confEl) {
                confEl.classList.remove('flex');
                confEl.classList.add('hidden');
            }
        }

        function executeResetData() {
            try {
                localStorage.removeItem('latih_minda_player_v5');
            } catch (e) {}
            player = { nama: '', umur: null, avatar: '👦', bintang: 0, lencana: [], stickers: [], aktivitiSelesai: 0, cabaranSelesai: [], lastScreen: 'welcome', timerSeconds: null, timerActive: false };
            closeConfirmModal();
            stopBGM();
            if (countdownInterval) clearInterval(countdownInterval);
            navigate('welcome');
        }
    </script>

    <script>
        window.onload = function() {
            safeCreateIcons();
            
            // Tambah pemicu klik seluruh tetingkap untuk memastikan BGM mula berputar seawal mungkin
            window.addEventListener('click', () => {
                if (audioCtx && audioCtx.state === 'suspended') {
                    audioCtx.resume();
                }
                if (bgmEnabled && !bgmInterval && !isGameLocked) {
                    startBGM();
                }
            }, { once: true });

            const sediaAda = muatTurunKemajuan();
            
            if (sediaAda) {
                if (player.timerActive && player.timerSeconds !== null && player.timerSeconds > 0) {
                    mulakanPemasaSistem();
                } else if (player.timerSeconds !== null && player.timerSeconds <= 0) {
                    kunciSkrinPermainan();
                    return;
                }

                const targetPage = player.lastScreen || 'home';
                navigate(targetPage);
                startBGM(); 
            } else {
                navigate('welcome');
            }
        };
    </script>
</body>
</html>