<template>
  <div id="home">
    <div id="main-banner">
      <div id="background" v-rellax="{
      // Rellax Options
      // See: https://github.com/dixonandmoe/rellax#features
      speed: -2,
    }"></div>
      <img id="logo" src="@/assets/logo_vertical.png" alt="iso" />
      <img id="skyline" src="@/assets/SDFskyline.png" alt="Louisville skyline" />
    </div>
    <div id="divider">
      <Social/>
    </div>
    <div id="content">
      <div class="info">
        <div class="container">
          <div>
            <h2>A kick-ass</h2>
            <h2>Bluegrass</h2>
            <h2>Local Life</h2>
            <h2>Experience</h2>
          </div>
        </div>
        <div class="container">
          <div>
            <p>
              Welcome to the Bluegrass Bunkhouse y’all! We’re
              your modern hostel home in the touristic heart of
              Louisville, Kentucky. Experience the unbridaled
              spirit and culture of our Derby city through all its
              sites, sounds and flavors & connect with other doers
              and dreamers while living the local life.
            </p>
            <p>
              The world may know of our Colonel’s finger lickin’
              good Kentucky Fried Chicken, 3 time world heavy
              weight boxing champion Muhammad Ali, and that
              between Indiana and Kentucky lies a beautiful
              river of Bourbon (okay, wishful thinking!), but our
              city truly has a bit of sumthin’ for everyone—the
              great outdoors, a nationally ranked food scene,
              sporting events, music festivals, and last call is 4am!
            </p>
            <p class="btn" v-on:click="mission = !mission">OUR MISSION</p>
          </div>
        </div>
        <div id="mission" class="container" v-show="mission">
          <h3>WHY BLUEGRASS BUNKHOUSE?</h3>
          <p>Bluegrass Bunkhouse works in synergy with the local community to provide visitors an inclusive and immersive opportunity to maximize their Louisville experience. As local ambassadors, our forward-thinking approach to hospitality and short-term accommodations, in addition to our goals of cross-cultural understanding, environmental awareness, and social outreach, are vital to the health and vitality of our community. </p>
          <h3>OUR GOAL</h3>
          <p>Our goal is to be Louisville’s premier modern hostel and solution to the demands and desires of socially conscious, young professionals on the move. Our flexible accommodations successfully fuse a reasonable room rate with prime location and well considered design and community experiences, that foster a fresh, smart way to travel and live. Locals and travelers are invited to join our curated workshops, city tours and bar crawls, or meet, mingle and make new friends in our cafe/bar--a hub for multicultural exchanges, connections, and memories to be made in the heart of Kentucky.</p>
        </div>
      </div>
      <div class="our-story">
        <div class="container">
          <div>
            <h3>Our Story</h3>
            <p>
              Co-Founders Hayley Smith and Brittney Ridge met
              through a network of international expats & local
              young professionals, looking to make new friends
              and positively contribute to the city of Louisville.
              As travel hungry millennials determined to see as
              much of the world as possible & while on a very
              tight budget, hosteling afforded them the most
              authentic and memorable experiences. We are
              thrilled and proud to say that other adventurers
              and travelers will soon have the same amazing
              opportunity to explore and experience our city at
              the Bluegrass Bunkhouse. Welcome to our home!
            </p>
          </div>
        </div>
        <div class="container">
          <img src="@/assets/stamp.png" alt="Bluegrass Bunkhouse Stamp" />
        </div>
      </div>
      <div id="founders">
        <div class="founder">
          <img src="@/assets/cf1.jpg" alt="Hayley Smith" />
          <div class="details">
            <h4>Hayley Smith</h4>
            <h5>Co-Founder | Designer |Travel Ambassador | Not Your Average Gringa</h5>
            <p>
              Favorite local restaurant: <span>Con Huevos & Mayan Cafe.</span>
              <br />Where you’ll most likely find her: <span>Salsa dancing or hiking at the Red River Gorge.</span>
              <br />Number of countries visited: <span>30 and forever counting!</span>
              <br />Most memorable travel experience: <span>4 day hike to the Choquequirao ruins in Peru.</span>
              <br />Spoken Languages: <span>English & Spanglish.</span>
            </p>
          </div>
        </div>
        <div class="founder">
          <img src="@/assets/cf2.jpeg" alt="Brittney Ridge" />
          <div class="details">
            <h4>Brittney Ridge</h4>
            <h5>Co-Founder | Community Developer | Bad Ass</h5>
            <p>
              Favorite local restaurants: <span>Havana Rumba & Kashmir.</span>
              <br />Dream gig: <span>Comedian.</span>
              <br />Favorite adventure: <span>Waterfalling, wake surfing, cliff jumping & sailing.</span>
              <br />Places she’s lived: <span>Belize, Botswana, & Mauritius.</span>
              <br />Spoken languages: <span>English | Lost languages: French.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Social from "@/components/Social.vue";

export default {
  data() {
    return {
      mission: false
    };
  },
  components: {
        Footer,
        Social
    },
  methods: {}
};
</script>


<style lang="scss" scoped>
// Theme
@import "../stylesheets/theme";

#main-banner {
  height: 100vh;
  overflow: hidden;

  #background {
    background-image: url("../assets/bg1.jpg");
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 0;

  #logo {
    height: 45vh;
    position: absolute;
    align-self: center;

    @include large {
      top: 15vh;
    }
  }

  #skyline {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}

#divider {
  height: 9vh;
  min-height: 60px;
  background-color: color(sColor);
  display: flex;
  justify-content: center;

  #temp-btn {
    display: flex;
    flex-flow: column;
    align-self: center;
    padding: 1.2rem 0.65rem;
    margin: 0 1.5rem;
    background-color: color(pColor);
    color: #fff;
    cursor: pointer;
    position: relative;
    z-index: 1;
    font-family: font(pFont);

    &:hover {
      background-color: color(sGray);
    }
  }
}

#content {
  .info,
  .our-story {
    min-height: 45vh;
    display: flex;
    flex-wrap: wrap;

    .container {
      display: flex;
      justify-content: center;
      width: 100%;

      @include medium {
        width: 50%;
      }

      div {
        padding: 20px;
        align-self: center;
        display: flex;
        flex-flow: column;

        h2,
        h3 {
          font-family: font(tFont);
          text-transform: uppercase;
          padding: 4px;
          text-align: center;
        }

        p {
          font-family: font(pFont);
          padding: 10px;
        }
      }
    }
  }

  .info {
    background-image: url("../assets/bg2.jpg");
    background-size: cover;

    .container {
      background-color: transparentize(color(pColor), 0.22);
      padding-top: 7vh;

      @include medium {
        padding-top: 0;
      }

      h2 {
        font-size: 40px;
        color: color(accent);
      }

      h2:nth-child(2) {
        color: color(highlight);
      }

      h2:nth-child(3) {
        color: color(sColor);
      }

      p {
        color: #fff;
      }

      .btn{
        border: 1.5px solid color(sColor);
        color: color(sColor);
        width: fit-content;
        align-self: center;
        margin: 20px 0;
        padding: 0px 40px;
        cursor: pointer;
      }

      &:nth-child(2) {
        padding-top: 0;
        padding-bottom: 7vh;
        text-align: center;

        @include medium {
          text-align: left;
          padding-bottom: 0;
        }
      }
    }

    #mission {
      width: 100%;
      flex-flow: column;
      padding: 30px;
      padding-top: 0;
      text-align: center;

      h3 {
        font-family: font(tFont);
        padding: 20px;
        font-size: 25px;
        color: color(highlight);

        &:nth-child(1) {
          color: color(accent);
        }
      }

      p {
        font-family: font(pFont);
      }
    }
  }

  .our-story {
    background-color: color(sColor);

    .container {

      h3 {
        font-size: 25px;
      }

      p {
        text-align: center;
      }

      &:nth-child(2) {
        background-image: url("../assets/founders.jpg");
        background-size: cover;
        background-position: center;
        min-height: 300px;

        img {
          height: 6rem;
          background-color: color(pColor);
          border-radius: 50px;
          position: relative;
          top: 6vh;
        }
      }
    }
  }

  #founders {
    background-image: linear-gradient(white, transparent), url("../assets/bg3.jpg");
    background-size: cover;
    padding: 15px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .founder {
      height: 50%;
      display: flex;
      padding: 15px;
      width: 100%;

      @include extralarge {
        width: 45%;
      }

      img {
        margin-right: 20px;
        height: 9rem;
        border-radius: 100px;
        border: 4px solid #fff;
      }

      .details {
        h4 {
            font-family: font(tFont);
            font-size: 20px;
        }

        h5 {
            font-family: font(pFont);
            letter-spacing: .2px;
            font-size: 16px;
            padding-bottom: 15px;
        }

        p {
            font-family: font(pFont);
            font-size: 16px;

            span {
              font-style: italic;
            }
        }
      }
    }
  }
}
</style>

