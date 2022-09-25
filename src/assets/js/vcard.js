// V-BS Card Effect
var vcard  = document.querySelector( '.vcard' );
vcard.onmousemove = function (act) {
	const x = act.pageX - vcard.offsetLeft;
	const y = act.pageY - vcard.offsetTop;
	vcard.style.setProperty( '--x', x + 'px' );
	vcard.style.setProperty( '--y', y + 'px' );
}