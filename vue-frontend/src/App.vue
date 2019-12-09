<template>
  <div id="app">
    <!-- Modal -->
    <modal name="holler" class="modal" :adaptive="true" :height="360">
      <div class="subscribe" v-show="!success && !error">
        <h1>STAY IN THE KNOW</h1>
        <p>Subscribe and get the scoop on our progress!</p>
        <form @submit.prevent="subscribeToMailerLite">
          <input type="text" name="name" v-model="name" placeholder="Name" required>
          <input type="email" name="email" v-model="email" placeholder="Email" required>
          <input type="text" name="zip" v-model="zip" placeholder="ZIP Code" pattern="[0-9]{5}" required>
          <button class="btn" type="submit">Send</button>
        </form>
      </div>
      <div class="success" v-show="success">
        <h1>Thanks for subscribing!</h1>
        <p>You should be hearing back from us soon</p>
      </div>
      <div class="error" v-show="error">
        <h1>Ops!</h1>
        <h1>Something went wrong!</h1>
        <p>We couldn't subscribe you at this time.</p>
        <p>Please send us and email at: holler@bluegrassbunkhouse.com</p>
      </div>
    </modal>
    <!-- Navigation Bar -->
    <nav id="navbar">
      <router-link to="/" id="home-logo">
        <img src="@/assets/logo.png" alt="iso" />
      </router-link>
      <div id="temp-btn" v-on:click="holler()">Subscribe for Updates</div>
      <!-- <div
        id="menuicon"
        v-bind:class="{ active: displayMenu }"
        v-on:click="displayMenu = !displayMenu"
      >
        <div id="bar1" class="bar"></div>
        <div id="bar2" class="bar"></div>
        <div id="bar3" class="bar"></div>
      </div>-->
    </nav>

    <!-- Menu -->
    <!-- <nav id="menu" v-if="displayMenu" v-on:click="displayMenu = !displayMenu">
			<div class="links-container">
				<ul class="links">
					<li><router-link to="/">Home</router-link></li>
					<li><router-link to="/us">Our Team</router-link></li>
				</ul>
			</div>
			<div class="actions-container">
				<ul class="actions">
					<li><router-link id="demobtn" to="/contact">Request a Demo</router-link></li>
					<li><router-link id="contactbtn" to="/contact">Contact Us</router-link></li>
				</ul>
			</div>
    </nav>-->

    <!-- View -->
    <transition name="router-anim">
      <router-view />
    </transition>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      displayMenu: false,
      name: null,
      email: null,
      zip: null,
      success: false,
      error: false
    };
  },
  beforeCreate() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  },
  methods: {
    holler() {
      this.$modal.show('holler');
    },
    subscribeToMailerLite(){
      let key = "31a6bf6a404c8c17d50e39675b4f8e46";
      axios.post(`https://api.mailerlite.com/api/v2/subscribers/?apiKey=${key}`, {
        "name": this.name,
        "email": this.email,
        "fields": [
          {
            "key": "email",
            "value": this.email,
            "type": "TEXT"
          },
          {
            "key": "zip",
            "value": this.zip,
            "type": "TEXT"
          }
        ],
        "autoresponders": 1
      },{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        this.success = true;
      })
      .catch(() => {
        this.error = true;
      })
    }
  }
};
</script>

<style lang="scss">
// Reset CSS
@import "./stylesheets/reset";
// Theme
@import "./stylesheets/theme";
// Fonts
@font-face {
  font-family: "Century Gothic";
  src: url("./assets/fonts/CenturyGothic.ttf") format("truetype");
}
@font-face {
  font-family: "SouvenirBold";
  src: url("./assets/fonts/SouvenirBold.ttf") format("truetype");
}
@font-face {
  font-family: "SouvenirLightBold";
  src: url("./assets/fonts/SouvenirLightBold.ttf") format("truetype");
}
@font-face {
  font-family: "Calibre Regular";
  src: url("./assets/fonts/CalibreRegular.otf") format("opentype");
}

#app {
  font-family: fonts(pFont), cursive;
  font-family: fonts(sFont), sans-serif;

  p {
    line-height: 25.2px;
  }
}

#navbar {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: transparentize(color(pColor), 0.22);
  height: 16vh;
  z-index: 1;

  @include large {
    height: 10vh;
  }

  #home-logo {
    margin: 0 1.5rem;
    padding: 0 1rem;
    align-self: center;

    img {
      height: 5rem;
      filter: brightness(0) invert(1);
    }
  }

  #temp-btn {
    display: flex;
    flex-flow: column;
    align-self: center;
    padding: 1.2rem 0.65rem;
    margin: 0 1.5rem;
    background-color: color(accent);
    color: color(pColor);
    cursor: pointer;
    position: relative;
    z-index: 1;
    font-family: font(pFont);
    text-align: center;

    &:hover {
      background-color: darken($color: color(accent), $amount: 5)
    }
  }

  #menuicon {
    display: flex;
    flex-flow: column;
    width: 2rem;
    align-self: center;
    padding: 1.2rem 0.65rem;
    margin: 0 1.5rem;
    border-radius: 100px;
    background-color: color(tColor);
    cursor: pointer;
    position: relative;
    z-index: 1;

    &::before {
      background-color: transparent;
      border: 5px solid color(tColor);
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 100px;
      animation: pulse 900ms ease-out infinite forwards;

      @keyframes pulse {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        50% {
          transform: scale(0.83);
          opacity: 0.5;
        }
        100% {
          transform: scale(1.7);
          opacity: 0;
        }
      }
    }

    .bar {
      height: 1px;
      margin: 2px;
      background-color: color(pColor);
      transition: all 350ms;
      z-index: 1;
    }

    &.active {
      .bar {
        transform: rotate(360deg);
      }
      #bar1 {
        transform: rotate(225deg) translateX(-4px) translateY(-4px);
      }
      #bar2 {
        opacity: 0;
      }
      #bar3 {
        transform: rotate(-225deg) translateX(-3px) translateY(3px);
      }
    }
  }
}

#menu {
  position: fixed;
  top: 16vh;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  text-align: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;

  @include large {
    top: 12vh;
  }

  div {
    display: flex;
    justify-content: center;

    ul {
      align-self: center;
      li {
        margin: 4vh 0;
        animation: fade-in 500ms ease 350ms 1 both;

        @keyframes fade-in {
          0% {
            transform: translateY(200%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
      @for $i from 1 through 6 {
        li {
          &:nth-child(#{$i}) {
            // Delay the animation. Delay increases as items loop.
            animation-delay: $i * (200ms);
          }
        }
      }
    }
  }

  .links-container {
    height: 70%;
    background-color: transparentize(color(sColor), 0.025);
    animation: slide-left 300ms ease 1 both;

    @keyframes slide-left {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  .actions-container {
    height: 30%;
    background-color: opacify(color(pColor), 0.5);
    animation: slide-up 300ms ease 1 both;

    @keyframes slide-up {
      0% {
        transform: translateY(100%);
      }
      100% {
        transform: translateY(0);
      }
    }

    .actions {
      li {
        margin: 6vh 0;
      }

      a {
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        cursor: pointer;
        border: 1px solid color(tColor);
        border-radius: 100px;
        font-size: 1.3vh;
        letter-spacing: 3px;
        text-transform: uppercase;
        padding: 1rem;
      }

      #demobtn {
        color: color(tColor);
        background-color: transparentize(color(pColor), 0.5);
      }

      #contactbtn {
        color: color(pColor);
        background-color: transparentize(color(tColor), 0.01);
      }
    }
  }

  a {
    color: color(tColor);
    text-decoration: none;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    letter-spacing: 3px;
    text-transform: capitalize;
    font-size: 20px;

    &.router-link-exact-active.router-link-active {
      color: color(pColor);
    }

    &:hover {
      color: color(pGray);
    }
  }
}

.modal {
  display: flex;

  .v--modal-background-click {
    background-color: #00000063;
  }

  .v--modal {
    border-radius: 10px;
    background-color: color(pColor);
  }
  
}

.subscribe, .success, .error {
  display: flex;
  justify-content: center;
  flex-flow: column;
  height: 100%;

  h1, p, form {
    align-self: center;
    text-align: center;
  }

  h1 {
    font-family: font(tFont);
    font-size: 40px;
    color: #FFF;
  }

  p {
    font-family: font(pFont);
    color: color(pGray);
  }

  form {
    padding-top: 20px;
    display: flex;
    flex-flow: column;
    width: 70%;

    input, button {
      border-radius: 50px;
      border: none;
      align-self: center;
      margin: 5px 0;
      padding: 10px 15px; 
      width: 100%;
      height: auto;
      font-family: font(pFont);

      &.btn {
        font-family: font(tFont);
        font-size: 25px;
        margin-top: 20px;
        background-color: color(sColor);
        color: #fff;
        cursor: pointer;

        &:hover {
          background-color: darken($color: color(sColor), $amount: 5)
        }
      }

      &:focus {
        outline: none;
      }
    }
  }
}

//ONSCROLL TRANSITIONS
/* v-vpshow classes */
.before-enter {
  opacity: 0;
}

.enter {
  transition: opacity 2s ease;
}
/* ---------------- */

//SCROLLBAR
/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
/* Track */
::-webkit-scrollbar-track {
  border-radius: 100px;
  background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background: #ccc;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>