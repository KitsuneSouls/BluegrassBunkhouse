<template>
  <ul class="social-media-links">
    <li>
      <a href="https://www.facebook.com/Bluegrass-Bunkhouse-1937641239638536/">
        <i class="fab fa-facebook"></i>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/BluegrassBunks">
        <i class="fab fa-twitter"></i>
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/channel/UCm0lG1i-roaTr68p1MI7Yhg">
        <i class="fab fa-youtube"></i>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/bluegrassbunkhouse/">
        <i class="fab fa-instagram"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Social"
};
</script>

<style lang="scss" scoped>
// Theme
@import "../stylesheets/theme";

.social-media-links {
  display: inline-flex;
  list-style: none;
  align-self: center;
  margin: 10px;

  li {
    margin: 0.5rem;

    a {
      padding: 0.5rem 0.65rem;

      i {
        color: #fff;
      }

      &:hover {
        color: color(pColor);

        i {
          color: color(pColor);
        }
      }
    }
  }
}
</style>

