<template>
  <div class="footer">
    <div id="contact">
      <div class="container">
        <h2>HOLLER AT US</h2>
        <p>holler@bluegrassbunkhouse.com</p>
      </div>
      <div class="container">
        <h2>WHERE WE’RE AT</h2>
        <p>Louisville, Kentucky</p>
      </div>
      <div class="container">
        <h2>OPENING HOURS</h2>
        <p>TBA</p>
      </div>
      <div id="social">
        <Social/>
      </div>
    </div>
    <div id="rights">
      <p>© 2019 Bluegrass Bunkhouse</p>
    </div>
  </div>
</template>

<script>
import Social from "@/components/Social.vue";

export default {
  name: "Footer",
  components: {
        Social
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Theme
@import "../stylesheets/theme";
#contact {
  background-image: url("../assets/bg2.jpg");
  background-size: cover;
  display: flex;
  flex-wrap: wrap;

  .container,
  #social {
    background-color: transparentize(color(pColor), 0.22);
  }

  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: wrap;
    padding: 30px 0;

    @include medium {
      width: 33.33%;
    }

    h2, p {
      width: 100%;
      text-align: center;
    }

    h2 {
      font-family: font(tFont);
      color: color(sColor);
      padding-bottom: 10px;
    }

    p {
      font-family: font(pFont);
      color: #FFF;
    }
  }

  #social {
    display: flex;
    justify-content: center;
    padding: 15px;
    width: 100%;
  }
}

#rights {
  background-color: color(sColor);
  display: flex;
  justify-content: center;
  height: 5vh;

  p {
    align-self: center;
    font-family: font(sFont);
    font-size: 13px;
  }
}
</style>
