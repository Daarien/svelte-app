<script>
  import { navigateTo } from "yrv";
  import { checkDonkey } from "../funx.js";

  function handleNavigate() {
    const ie11 = checkDonkey();
    if (ie11) {
      window.location.replace("/");
    } else {
      navigateTo("/");
    }
  }
</script>

<style type="text/scss">
  h1 {
    color: darkred;
  }
  p {
    cursor: pointer;
  }
</style>

<header>
  <h1>404 Not Found</h1>
  <p on:click={handleNavigate}>Back to main page</p>
</header>
