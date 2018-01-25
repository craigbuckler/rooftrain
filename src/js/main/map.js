/*
	Google map

  // requires: lib.js
*/
/* global ow google */
(function() {

  'use strict';

  if (!window.addEventListener || !document.body.classList) return;

  var
    cfg = {
      id: 'map',
      active: 'active',
      center: { lat: 50.729546, lng: -3.571548 },
      zoom: 12,
      type: 'roadmap',
      api: 'AIzaSyB2emCghMov49xIACkCEO285BwWwN_xK4w'
    },
    map;

  // load maps API after delay
  map = ow.lib.id(cfg.id);
  if (map) {

    setTimeout(function() {
      window.addEventListener('scrollresize', mapInView, false);
      mapInView();
    }, 2000);

  }

  // load map when in view
  function mapInView() {

    var
      wT = window.pageYOffset,
      wB = wT + window.innerHeight,
      cRect = map.getBoundingClientRect(),
      pT = wT + cRect.top,
      pB = pT + cRect.height;

    if (wT < pB && wB > pT) {

      // cancel event
      window.removeEventListener('scrollresize', mapInView, false);

      // load map API
      var scr = document.createElement('script');
      scr.src = 'https://maps.googleapis.com/maps/api/js?key=' + cfg.api + '&callback=ow.mapStart';
      scr.async = 1;
      document.head.appendChild(scr);

    }

  }

  // show map
  ow.mapStart = function() {

  // activate map element
    map.classList.add(cfg.active);

    // show map
    var mapControl = new google.maps.Map(map, {
      center: cfg.center,
      zoom: cfg.zoom,
      mapTypeId: cfg.type
    });

    // show marker
    new google.maps.Marker({
      position: cfg.center,
      map: mapControl
    });

  };


})();
