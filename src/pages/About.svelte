<script>
  import { Link } from "yrv";
  import { checkDonkey } from "../funx.js";

  const ie11 = checkDonkey();

  export let router = {};
  const { params } = router;
  console.log("params", params);
</script>

<h1>About page</h1>
<p>
  {#if ie11}
    <a href="/">back to main page</a>
  {:else}
    <Link href="/">back to main page</Link>
  {/if}
</p>
<p>Page: {params.page}</p>
