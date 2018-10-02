var $svg = $('svg').drawsvg();
$svg.drawsvg('animate');

window.sr = ScrollReveal();

sr.reveal('.home', {
	origin: 'bottom',
	reset: true,
  delay: 1000
});
