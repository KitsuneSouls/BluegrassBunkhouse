<template>
  <ul class="social-media-links">
    <li>
      <a href="https://www.facebook.com/Bluegrass-Bunkhouse-1937641239638536/">
        <i class="fab fa-facebook"></i>
      </a>
    </li>
    <!-- <li>
            <a href>
              <i class="fab fa-twitter"></i>
            </a>
    </li>-->
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
            border: 2px solid #fff;
            border-radius: 100px;

            i {
            color: #fff;
            }

            &:hover {
            color: color(highlight);
            border: 2px solid color(highlight);

            i {
                color: color(highlight);
            }
            }
        }
    }
}
</style>

