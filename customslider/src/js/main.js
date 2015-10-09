var slider = {
  slides: [],
  element: undefined,
  interval: undefined,
  previousSlide: undefined,
  currentSlide: undefined,
  nextSlide: undefined,
  next: function(){
    if(typeof this.nextSlide == 'undefined'){
      this.nextSlide = this.findNextSlide()
    }
    this.toggleSlides(this.currentSlide, this.nextSlide)
    this.previousSlide = this.currentSlide
    this.currentSlide = this.nextSlide
    this.nextSlide = this.findNextSlide()
  },
  previous: function(){
    console.warn("Previous not implemented!")
  },
  toggleSlides: function(curr, next){
    $(curr).toggleClass('hidden-slide current-slide')
    $(next).toggleClass('hidden-slide current-slide')
  },
  findNextSlide: function(){
    var currentIndex = this.slides.indexOf(this.currentSlide)
    if(this.slides.indexOf(this.slides[currentIndex+1]) == -1){
      return this.slides[0]
    }
    else{
      return this.slides[currentIndex+1]
    }

    console.log('Set next slide to ' + $(this.nextSlide).attr('alt'))
  }
}

$(document).ready(function() {
  // Set Slider element
  slider.element = $('#content-slider')

  $(slider.element).children('div').each(function(){
    // Populate slider elements
    slider.slides.push($(this))

    // Add base classes
    $(this).addClass('slide').addClass('hidden-slide')
  })

  // Show first slide
  $(slider.slides[0]).toggleClass('hidden-slide').addClass('current-slide')

  // Set currentSlide
  slider.currentSlide = slider.slides[0]

  function startAutoPlay(){
    slider.interval = setInterval(function(){
      slider.next()
    }, 3000)
  }

  function pauseAutoPlay(){
    clearInterval(slider.interval)
  }

  $(slider.element).hover(function() {
    console.log("Hovered!")
    pauseAutoPlay()
  }, function() {
    console.log("Good bye :(")
    startAutoPlay()
  });

  $('.next-slide').click(function(){
    slider.next()
    clearInterval(slider.interval)
  })

  $('.next-slide').hover(null, function() {
    startAutoPlay()
  });

  startAutoPlay()
});
