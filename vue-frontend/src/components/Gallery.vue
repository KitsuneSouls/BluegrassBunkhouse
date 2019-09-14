<template>
  <div class="instagram-gallery">
    <template v-if="grams.length > 0">
      <div class="post" v-for="gram in grams" v-bind:key="gram.id">
        <img :src="gram.images.standard_resolution.url" :alt="gram.text" />
        <div class="info">
          <p>{{ gram.caption.text }}</p>
          <a :href="gram.link" target="_blank">Check Post!</a>
        </div>
      </div>
    </template>
    <div v-else class="loading"></div>
    <div v-if="error" class="error">Sorry, the Instagrams couldn't be fetched.</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Gallery",

  data() {
    return {
      access_token: "9463831190.1c0b96f.51e67a4ba45e412a8a960cc3ded145af",
      url: "https://api.instagram.com/v1/users/self/media/recent/",
      username: "",
      grams: [],
      error: false
    };
  },
  methods: {
    getGrams() {
      axios
        .get(this.url + "?access_token=" + this.access_token)
        .then(({ data }) => {
          this.grams = data.data.slice(0, 4);
          this.username = data.data[0].user.username;
        })
        .catch(function(error) {
          // eslint-disable-next-line
          console.log(error);
          this.error = true;
        });
    }
  },
  created() {
    this.getGrams();
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/theme";

.instagram-gallery {
  display: flex;
  flex-wrap: wrap;

  .post {
    width: 100%;
    display: flex;
    position: relative;

    @include small {
      width: 50%;
    }

    @include medium {
      width: 25%;
    }

    img {
      width: -webkit-fill-available;
    }

    .info {
      width: 100%;
      height: 100%;
      position: absolute;
      display: none;
      z-index: 1;
      background-color: #000000a1;
      color: white;
      font-family: font(pFont);
      flex-direction: column;
      justify-content: center;

      p {
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 35px;
        max-height: 200px;
      }

      a {
        color: white;
        background: color(sColor);
        border-radius: 50px;
        padding: 15px 30px;
        margin-top: 30px;
        width: max-content;
        align-self: center;
        text-decoration: none;

        &:hover {
        background: darken(color(sColor), 5);
        }
      }
    }

    &:hover {
      .info {
        display: flex;
      }
    }
  }
}
</style>