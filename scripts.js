function applyItemQualities() {
	var qualityFour = [12, 52, 68, 108, 114, 118, 149, 152, 168, 169, 182];
	var qualityOne = [9, 19, 36, 40, 41, 49, 56, 60, 65, 66, 84, 85, 102, 111, 123, 124, 126, 127, 130, 135, 136, 137, 140, 141, 144, 147, 155, 158, 160, 164, 171, 175, 177, 180, 186, 192, 195];
	var qualityTwo = [33, 35, 37, 38, 39, 42, 45, 47, 58, 77, 78, 83, 86, 93, 94, 95, 96, 97, 98, 105, 107, 113, 116, 119, 128, 129, 133, 134, 139, 142, 146, 148, 166, 167, 170, 172, 173, 174, 176, 178, 181, 183, 188, 194, 198];

	document.querySelectorAll('#items .textbox').forEach(function(item) {
		var itemId = parseInt(item.getAttribute('data-sid'), 10);
		var quality = qualityFour.indexOf(itemId) !== -1 ? 4 : qualityOne.indexOf(itemId) !== -1 ? 1 : qualityTwo.indexOf(itemId) !== -1 ? 2 : 3;
		var itemIdText = item.querySelector('.itemid');
		if (!itemIdText || item.querySelector('.quality')) {
			return;
		}
		item.setAttribute('data-quality', String(quality));
		var qualityText = document.createElement('p');
		qualityText.className = 'quality';
		qualityText.textContent = 'Quality: ' + quality;
		itemIdText.insertAdjacentElement('afterend', qualityText);
	});
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', applyItemQualities);
} else {
	applyItemQualities();
}
