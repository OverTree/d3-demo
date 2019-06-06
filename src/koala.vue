<template>
  <div id="dots"></div>
</template>
<script>
import koala from './kolala';
import logo from '@/assets/plane.jpeg';
export default {
  mounted() {
    // See: https://developer.mozilla.org/en-US/docs/DOM/window.btoa#Unicode_Strings

    // Try you must. If there is an error report it to me.
    var img = new Image();
    img.onload = function() {
      var colorData;
      try {
        colorData = koala.loadImage(this);
      } catch (e) {
        colorData = null;
      }

      if (colorData) {
        koala.makeCircles('#dots', colorData);
      }
    };
    img.src = logo;

    // Local download functionality
  }
};
</script>
