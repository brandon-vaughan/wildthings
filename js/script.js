
$(function() {
  $('#one h1').fitText(1.2);
  $('pre.css').snippet('css', {style: 'darkness'});
  $('pre.js').snippet('css', {style: 'darkness'});

});

/* ------------------- Main Presentation Class ------------------- */

var isTransition = Modernizr.csstransitions;

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
  // get movement type ( transition or callback )
  this.movement = isTransition ? 'transition' : 'animate';

  // Build simple deck and frame array for class injection
  this.slidesIndex = ['one','two','three','four', 'five'];
  this.propsIndex = ['','one','two','three','four'];

  this.setup();

}

Prez.defaults = {
  effect: 'slide',
  autoPlay: false,
  duration: 1000
};
  // inject state class
  this.slides.addClass('is-' + this.movement);

  // Queue key state changes
  this.bindings();



Prez.prototype.bindings = function() {

  var instance = this;

  $(document).keydown(function(e){

    // Move Slide
    if ( e.keyCode === 39 || e.keyCode === 37 ) {

      var direction = e.keyCode === 39 ? 'next' : 'prev';
      instance.move(direction);

    }

    // Move Props
    if ( e.keyCode === 38 || e.keyCode === 40 ) {

      var frame = e.keyCode === 40 ? 'next' : 'prev';
      instance.moveProps(frame);

    }

    return false;

  });

};

  // Animate move if no transition
  if ( !isTransition ) {
    this.animate( this.effect );
  }
