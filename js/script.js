
/* ------------------- Main Presentation Class ------------------- */

function Prez(elem, options) {

  if ( !elem ) {
    return;
  }

  // Setup Variables
  this.prez = elem;
  this.deck = this.prez.find('#deck');
  this.nav = this.prez.find('#nav');

  this.options = options;

  this.setup();

}

