// ==UserScript==
// @name         Sudoku.com Solver
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Automatically clicks the solve button on Sudoku.com after the page fully loads
// @author       You
// @match        https://sudoku.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sudoku.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Disable ads and limitations
    window.eb.settings.ima_ads = false;
    window.eb.settings.banner_show_main_leaderboard = false;
    window.eb.settings.banner_show_main_square = false;
    window.eb.settings.banner_show_articles_leaderboard = false;
    window.eb.settings.banner_show_awards_leaderboard = false;
    window.eb.settings.banner_show_awards_square = false;
    window.eb.settings.disable_banner_ads = true;
    window.eb.settings.disable_interstitital_ads = true;
    window.eb.settings.count_mistakes = 123456;
    window.eb.settings.video_ads_enabled = false;
    window.useLimitationHintsAndMistakes = false;

    function solveSudoku() {
        let hint = document.querySelector('.game-controls-item[data-action="hint"]');
        if (hint) {
            for (let i = 0; i < 70; i++) {
                hint.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true }));
                document.querySelector(".sh-nav-submit")?.click();
                console.log("Hint button mousedown triggered.");
            }
        }
    }
    function addSolveButton() {
        const button = document.createElement("button");
        button.innerText = "Solve Sudoku.com";
        button.style.position = "fixed";
        button.style.top = "10px";
        button.style.right = "10px";
        button.style.zIndex = "9999";
        button.style.padding = "15px 20px";
        button.style.background = "#ff5733";
        button.style.color = "white";
        button.style.border = "none";
        button.style.borderRadius = "10px";
        button.style.cursor = "pointer";
        button.style.fontSize = "16px";
        button.style.fontWeight = "bold";
        button.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.3)";
        button.style.display = "flex";
        button.style.alignItems = "center";
        button.style.gap = "10px";

        // Add logo image
        const img = document.createElement("img");
        img.src = "https://cdn.shopify.com/s/files/1/0416/8083/0620/files/01132022_soc_pinterestboardcoverupdate_KU_1200x1200_1_1024x1024.png?v=1664470975";
        img.style.width = "30px";
        img.style.height = "30px";
        img.style.borderRadius = "5px";

        button.prepend(img);
        button.addEventListener("click", solveSudoku);
        document.body.appendChild(button);
    }

    addSolveButton();
    solveSudoku();
})();
