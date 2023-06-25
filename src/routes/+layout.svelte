<script>
  import "../app.postcss";
  import "../app.postcss";
  import Navbar from "../lib/components/Navbar.svelte";
  import Footer from "../lib/components/Footer.svelte";
  import "../app.css";
</script>

<div class="flex bg-primary min-h-screen flex-col">
  <Navbar/>
	<main class="mt-[100px]">
    <slot />
  </main>
  <Footer/>
</div>

<style>
  /* main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  } */


</style>
