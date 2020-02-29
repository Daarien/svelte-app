<script>
  import Link from "../components/Link.svelte";
  import { redirectTo } from "../funx.js";

  export let router = {};
  const { params } = router;
  let x;
  if (params && params.page) {
    x = Number(params.page);
    if (Number.isNaN(x)) {
      redirectTo("/page-not-found");
    }
  }
</script>

{#if params.page === undefined || !Number.isNaN(x)}
  <h1>About page</h1>
  <p>
    <Link to="/">back to main page</Link>
  </p>
  <p>
    <Link to="/about/1" open="{true}">go to page 1</Link>
  </p>
  <p>Page: {params.page}</p>
{/if}
