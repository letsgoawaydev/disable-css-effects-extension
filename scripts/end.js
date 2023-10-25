chrome.storage.sync.get(
	{ disableCSSGPUIntensiveEffects: true, disableCSSAnims: true },
	(items) => {
		var disableText = '{';
		var disableAnims = "-moz-transition-property:none!important;-ms-transition-property:none!important;-o-transition-property:none!important;-webkit-transition-property:none!important;transition-property:none!important;-moz-transition-delay:0s!important;-ms-transition-delay:0s!important;-o-transition-delay:0s!important;-webkit-transition-delay:0s!important;transition-delay:0s!important;-moz-transition-duration:0s!important;-ms-transition-duration:0s!important;-o-transition-duration:0s!important;-webkit-transition-duration:0s!important;transition-duration:0s!important;-moz-transform:none!important;-ms-transform:none!important;-o-transform:none!important;-webkit-transform:none!important;transform:none!important;-moz-animation:0!important;-ms-animation:none!important;-o-animation:0!important;-webkit-animation:0!important;animation:0!important;-ms-animation-delay:0s!important;-ms-animation-duration:0s!important;-ms-animation-iteration-count:0!important;";
		var cpuIntensiveEffects = "box-shadow:none!important;filter:unset!important;backdrop-filter:unset!important;background-blend-mode:unset!important;image-rendering:pixelated!important;";
		if (items.disableCSSAnims) {
			disableText += disableAnims;
		}
		if (items.disableCSSGPUIntensiveEffects) {
			disableText += cpuIntensiveEffects;
		}
		disableText += "}"
		var elements = ["*", "*:before", "*:after"];
		var style = document.createElement('style');
		style.id = "disableCSSEffectsExtensionStyles";
		for (let i = 0; i < elements.length; i++) {
			style.innerHTML += elements[i] + disableText;
		}
		style.type = 'text/css';
		document.getElementsByTagName('head')[0].appendChild(style);
	}
);
