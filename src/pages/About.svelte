<script>
  import { Router, Route, Link, navigateTo } from "yrv";
  import { redirectTo } from "../funx.js";

  function handleClick() {
    navigateTo("/about");
  }
</script>

<h1 on:click="{handleClick}" style="cursor:pointer;">About page</h1>
<p>
  <Link href="/">back to main page</Link>
</p>
<p>
  <Link href="/about/1">go to 1</Link>
</p>

<Router>
  <Route path="/">About page content</Route>
  <Route path="/:n" let:router>{router.params.n}</Route>
</Router>
