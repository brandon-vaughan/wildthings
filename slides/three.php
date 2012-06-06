
<article id="three">

  <div class="backdrop">

    <!-- Trees -->

    <span class="tree large two"></span>
    

  </div>

  <div class="copy">
    <h1><span>Till jQuery Said</span> Be Still and Tamed Them</h1>
    <p>It's time to transfer the work away from jQuery first to CSS3 first and use jQuery as the fallback for basic effects and UI embelishments.</p>


  </div>

  <div class="scene">
    <pre class="css">
      .is-transition {
           transition-duration: 0.8s;
           transition-timing-function: ease;
      }
      .slider article {
          left: 0;
          position: absolute;
          visibility: visible;
          transition-property: left, visibility;
      }
        .slider article.is-transition.past,
        .slider article.is-transition.future {
          visibility: hidden;
        }
        .slider article.is-transition.future {
            left: -3000px;
        }
        .slider article.is-transition.past {
            left: 3000px;
        }
    </pre>
    <pre class="js">
      function Slider( elem, options ) {
        // get movement type ( transition or callback )
        this.movement = isTransition ? 'transition' : 'animate';
        // default slide animations
        this.slide = {
          past: { left: 3000, opacity: 0 },
          future: { left: -3000, opacity: 0 },
          current: { left: 0, opacity: 1 }
        };
      }
      Slider.prototype.move = function() {
        // Animate move if no transition
        if ( !isTransition ) { this.animate( this.effect ); }
        this.assignments();
      }
      Slider.prototype.animate = function() {
        // queue up jquery objects and animate them via the effecttype object
        this.curSlide.animate(this[this.effect][this.moveOutClass], this.duration );
        this.nextSlide.animate(this[this.effect].current, this.duration );
        this.pastSlide.animate(this[this.effect].past, this.duration );
        this.futureSlide.animate(this[this.effect].future, this.duration );
      };

    </pre>

  </div>

</article>