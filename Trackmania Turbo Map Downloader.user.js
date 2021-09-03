// ==UserScript==
// @name         Trackmania Turbo Map Downloader
// @namespace    
// @version      1.6
// @description  Download PC TM Turbo maps on the fly!
// @author       Plambt
// @homepage     https://github.com/Plambt/Trackmania-Turbo-Map-Downloader
// @match        https://players.turbo.trackmania.com/*/maps/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var id1 = ((document.URL).split("/"))[3];
    var id2 = ((document.URL).split("/"))[5];
    $(".col-md-12").prepend(`<p><a href="https://s3-eu-west-1.amazonaws.com/tmturbo-prod-`+id1+`-maps/`+id2+`.Map.Gbx" data-toggle="modal" target="_blank" class="btn btn-primary btn-block"> Download Map</a></p>`);
})();