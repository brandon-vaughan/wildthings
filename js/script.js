
$(function() {
  $('#one h1').fitText(1.2);
  $('pre.css').snippet('css', {style: 'darkness'});
  $('pre.js').snippet('css', {style: 'darkness'});

});

/* ------------------- Main Presentation Class ------------------- */

function Prez(elem, options) {

  if ( !elem ) {
    return;
  }

  // Define Options
  this.options = {};

  // setup defaults
  for( var prop in Prez.defaults ) {
    this.options[prop] = Prez.defaults[prop];
  }

  // get user options
  for( prop in options ) {
    this.options[prop] = options[prop];
  }

  // get slide effect ( fade or slide )
  this.effect = this.options.effect;
  this.duration = this.options.duration;

  // default slide animations
  this.slide = {
    onDisplay: { left: 0, opacity: 1 },
    past: { left: '-100%', opacity: 0 },
    coming: { left: '100%', opacity: 0 }
  };

  // Setup Variables
  this.prez = elem;
  this.deck = this.prez.find('#deck');
  this.nav = this.prez.find('#nav');

  this.options = options;

  this.setup();

}

Prez.defaults = {
  effect: 'slide',
  autoPlay: false,
  duration: 1000
};
