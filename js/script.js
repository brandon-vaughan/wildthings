
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
  this.slides = this.deck.find('article');
  this.nav = this.prez.find('#nav');

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

Prez.prototype.setup = function() {


  this.onDisplay = 0;
  this.onStage = 0;

  // inject state class
  this.slides.addClass('is-' + this.movement);

  // Queue key state changes
  this.bindings();

};


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

Prez.prototype.move = function(direction) {

  this.curClass = this.slidesIndex[this.onDisplay];

  this.index = direction === 'next' ? (this.onDisplay + 1) : (this.onDisplay - 1);

  this.onDisplay = ( this.index + this.slidesIndex.length ) % this.slidesIndex.length;

  this.moveClass = this.slidesIndex[this.onDisplay];

  this.pastClass = this.slidesIndex[( ( this.onDisplay - 1 ) + this.slidesIndex.length ) % this.slidesIndex.length];
  this.comingClass = this.slidesIndex[( ( this.onDisplay + 1 ) + this.slidesIndex.length ) % this.slidesIndex.length];

  // Assign Classes
  this.deck.removeClass(this.curClass).addClass(this.moveClass);

  // Reset on display
  this.slides.removeClass('on-display').removeClass('just-past').removeClass('coming-up');

  // Select elements
  this.$onDisplay = $('#'+this.moveClass);
  this.$past = $('#'+this.pastClass);
  this.$coming = $('#'+this.comingClass);

  this.$onDisplay.addClass('on-display');
  this.$past.toggleClass('just-past');
  this.$coming.toggleClass('coming-up');

  // Animate move if no transition
  if ( !isTransition ) {
    this.animate( this.effect );
  }

  // Reset Stage for props
  this.onStage = 0;

};

Prez.prototype.moveProps = function(direction) {

  this.curpropClass = this.propsIndex[this.onStage];

  this.propIndex = direction === 'next' ? (this.onStage + 1) : (this.onStage - 1);

  this.onStage = ( this.propIndex + this.propsIndex.length ) % this.propsIndex.length;

  this.propClass = this.propsIndex[this.onStage];

  // Assign Classes
  this.$onDisplay.find('.scene').removeClass(this.curpropClass).addClass(this.propClass);

};

Prez.prototype.animate = function() {

  // queue up jquery objects and animate them via the effecttype object
  this.$onDisplay.animate(this[this.effect].onDisplay, this.duration );
  this.$past.animate(this[this.effect].past, this.duration );
  this.$coming.animate(this[this.effect].coming, this.duration );

};


var wildthings = new Prez($('#prez'));
