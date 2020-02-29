<script>
  import { Link } from "yrv";
  import { checkDonkey } from "../funx.js";
  export let to = "";
  const ie11 = checkDonkey();
</script>

{#if ie11}
  <a href="{to}">
    <slot />
  </a>
{:else}
  <Link href="{to}">
    <slot />
  </Link>
{/if}
