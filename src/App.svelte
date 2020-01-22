<script>
  import { Router, Route, Link } from "yrv";
  import Index from "./pages/Index.svelte";
  import About from "./pages/About.svelte";
</script>

<style>
  .root {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  :global(h1) {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    .root {
      max-width: none;
    }
  }
</style>

<div class="root">
  <Router>
    <Route exact path="/" component={Index} />
    <Route path="/about" component={About} />
    <Route fallback>
      <h1>404 Not Found</h1>
    </Route>
  </Router>
</div>
