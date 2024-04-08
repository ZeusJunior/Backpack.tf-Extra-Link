// ==UserScript==
// @name         Backpack.tf Extra Link
// @namespace    https://steamcommunity.com/profiles/76561198144346135
// @version      1.2.0
// @description  Add a link on bptf to the stn page of that item
// @author       Zeus_Junior
// @match        https://backpack.tf/stats/*
// @grant        none

// @updateURL    https://github.com/ZeusJunior/Backpack.tf-Extra-Link/raw/master/backpacktf-extra-link.user.js
// @downloadURL  https://github.com/ZeusJunior/Backpack.tf-Extra-Link/raw/master/backpacktf-extra-link.user.js
// @supportURL   https://github.com/ZeusJunior/Backpack.tf-Extra-Link/issues
// ==/UserScript==


(function() {
    'use strict';

    let itemLinkSTN;
    var pathArray = window.location.pathname.split('/');
    var qualityLocation = pathArray[2]; // Quality
    var nameLocation = pathArray[3]; // item name
    if (qualityLocation === 'Haunted') {
        // nothing
    } else if (qualityLocation === 'Strange%20Unusual') {
        // nothing
    } else if (nameLocation.includes('Festivized%20')) {
        itemLinkSTN = pathArray[2] + ' ' + nameLocation.substr(13);
        $( ".price-boxes" ).append('<a class="price-box" href="https://stntrading.eu/item/tf2/' + itemLinkSTN + '" target="_blank""> <img src="https://stntrading.eu/assets/img/logos/icon.svg"> <div class="text"> <div class="value"> STN </div> </div> </a>');
    } else if (qualityLocation === 'Unusual') {
        itemLinkSTN = pathArray[2] + ' ' + $('.stats-header-title').text().trim();
        $( ".price-boxes" ).append('<a class="price-box" href="https://stntrading.eu/item/tf2/' + itemLinkSTN + '" target="_blank""> <img src="https://stntrading.eu/assets/img/logos/icon.svg"> <div class="text"> <div class="value"> STN </div> </div> </a>');
    } else if (qualityLocation != 'Unique') {
        itemLinkSTN = pathArray[2] + ' ' + nameLocation;
        $( ".price-boxes" ).append('<a class="price-box" href="https://stntrading.eu/item/tf2/' + itemLinkSTN + '" target="_blank""> <img src="https://stntrading.eu/assets/img/logos/icon.svg"> <div class="text"> <div class="value"> STN </div> </div> </a>');
    } else {
        itemLinkSTN = nameLocation;
        $( ".price-boxes" ).append('<a class="price-box" href="https://stntrading.eu/item/tf2/' + itemLinkSTN + '" target="_blank""> <img src="https://stntrading.eu/assets/img/logos/icon.svg"> <div class="text"> <div class="value"> STN </div> </div> </a>');
    }
})();
