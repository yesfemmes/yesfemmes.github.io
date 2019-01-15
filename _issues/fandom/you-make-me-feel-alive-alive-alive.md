---
layout: story-fandom
lastname: Walz
firstname: Marie
subtitle: 
title: You Make Me Feel Alive Alive Alive
issue: fandom
bio: |
  M. Milks is the author of Kill Marguerite and Other Stories, winner of the 2015 Devil’s Kitchen Reading Award in Fiction and a Lambda Literary Award finalist; as well as three chapbooks, most recently The Feels, an exploration of fan fiction and affect. They are editor of The &NOW Awards 3: The Best Innovative Writing, 2011-2013 and co-editor of Asexualities: Feminist and Queer Perspectives.
---

<style>


.section {
    height: 100vh;
}

.section-img {
    display: none;
}

.section-intro {
      height: 100vh;

}

#aliveintro img {
    position: absolute;
}

.story-title {
	position: relative;
    z-index: 10;
}

.section-img {
    background: #8553FB;
    width: 75%;
    position: absolute;
    height: 78vh;
    box-shadow: 0 0 2em #0affa8;
    top: 15%;
    left: 13%;
    z-index: 0;
}

.section img {
    position: absolute;
    bottom: 10%;
    right: 10%;
}

.section-intro .title-info {
   
    width: 55%;
    padding-top: 0;

}





.section-intro-text {

    background: white;

}



.section-essay p {
    font-size: 2rem;
}

p img {
  margin: 1.5em auto;
}
    

</style>

<div class="section-img item"><!--<img src="{{ site.baseurl }}/assets/images/issues/02_fandom/fruchter-temim-dead-rockstars_1.jpg">-->
            <img src="{{ site.baseurl }}/assets/images/issues/02_fandom/fruchter-temim-dead-rockstars_2.jpg">
        <!--<img src="{{ site.baseurl }}/assets/images/issues/02_fandom/fruchter-temim-dead-rockstars_3.jpg">--></div>

<div id="aliveintro" class="section-intro section">


			                 {% include _fandom/titles.html %}

            <img src="/assets/images/issues/02_fandom/nick-rhodes.jpg">
        </div>
</div><!-- /section-intro -->


<div class="section-story">

<div class="inner-section-wrapper">


    <div class="text-wrapper"><p>The defining moment was when the velvet unicorn poster was replaced by the enormous poster of the boys. My dad came into my room later and asked &quot;are those boys or girls?&quot;</p>  

    <p><img src="{{ site.baseurl }}/assets/images/issues/02_fandom/walz-marie-alive_1.jpg" /></p>

    <p>I knew they were the portal to everything I needed. I didn’t know who I was until I met them. I read everything about them I could, obsessed. My focus narrowed on the smartest, cleverest and prettiest one in the band. I hung on his every word in the teen mag interviews. I knew he liked prawns, strawberries, and Remy Martin. I would toast a drink to poster Nick with a crystal tumbler of Sunshine Punch Kool-Aid every night. I stayed up late and tape-recorded the audio from <i>Lifestyles of the Rich and Famous</i> and listened to it on my Walkman, memorizing the timbre of his voice. I read Andy Warhol’s <i>From A to B and Back Again</i> because he did. Bought and wore the Yves St. Laurent lipstick he wore. Limited my clothing color palette to black, white, grey and red. Bought myself a leather tie. I wanted to inhabit him in every way.</p>  
    <p>Twenty-something years later, I had a creative crisis and asked myself the question, &quot;Why the fuck was I bothering?&quot; It struck me that it was all his fault. It also struck me that my queerness was also all his fault. My attraction was to those who existed in liminal gender spaces, the femme-est men and the butchest women. My interest in Duran Duran’s music had sharply dropped after 1987, but I decided to catch up after years of not paying attention. I spied on various fan communities to learn the latest gossip. I collaborated with drag kings, models, musicians and performance artists on a wide variety of projects. Some fans found my work and called me &quot;a crazy stalker.&quot;</p>
        <p><img src="{{ site.baseurl }}/assets/images/issues/02_fandom/walz-marie-alive_2.jpg" /></p>

    <p>For the last seven years of artmaking, I’ve gotten very close to him. I had a back and forth with his publicist about my work when my all-girl Duran Duran cover band got some press. My work was in an art fair in London when he was visiting art fairs. I was lined up to assist in an interview which was cancelled last-minute. I stalked him outside concerts and clubs, but Nick eluded me, hiding in shadowy hotels bars with his Remy Martin, every single time.</p>

     <div class="video-wrapper" style="margin-bottom: 1em;"><div class="video" data-type="youtube" data-video-id="zJCM1NoMgjo"></div></div>

<p>But in recent years, the thrill has worn off, and I won’t be chasing him down next time he’s in town. As time has gone by, he’s gotten less queer as I’ve become more. He’s traded in his queeny heavy-makeup glam rock look for fuddy-duddy old hipster. He is beetle-browed, resembling the actor Dudley Moore, and his gorgeous hair has receded into a comb over. His latest girlfriend is an Italian fangirl, young enough to be his daughter. </p>
<p> He’s become just another dirty old man.</p>

</div><!-- /text-wrapper -->

</div><!-- /inner-section-wrapper -->
</div><!-- /section-story -->




<script>
    var imgSrc = '{{ site.baseurl }}/assets/images/issues/02_fandom/nick-rhodes.jpg';


  function generateImage() {
  var img = document.createElement('img')
  var container = document.getElementById("aliveintro");
    var availW = container.offsetWidth  - 60;
    var availH = container.offsetHeight  - 60;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px';

  img.src = imgSrc;
  img.setAttribute("height", "94");
img.setAttribute("width", "75");
img.style.left = randomX;
img.style.top = randomY;
  
  return img;
}

for (var i = 0; i < 20; i++ ) {
  document.getElementById("aliveintro").appendChild(generateImage());
}
</script>