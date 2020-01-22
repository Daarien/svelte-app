<script>
  import { navigateTo } from "yrv";

  function handleBtnClick() {
    navigateTo("/about");
  }
</script>

<style type="text/scss">
  .btn-container {
    margin-top: 30px;
    button {
      color: white;
      background-color: palevioletred;
      border: 2px solid mediumvioletred;
      border-radius: 4px;
      padding: 8px 15px;
      cursor: pointer;
      transition: box-shadow 300ms;
      &:hover {
        box-shadow: 0 0 10px 5px mediumvioletred;
      }
    }
  }
</style>

<main>
  <h1>Index page</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <p class="btn-container">
    <button type="button" on:click={handleBtnClick}>go to About</button>
  </p>
</main>
