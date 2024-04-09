<script>
    export let title;
    import {base} from '$app/paths';
</script>


<div class="navbar">
  <div class="logo">
    <a href="{base}/" class="title button">{title}</a>
  </div>
  <div class="nav-buttons">
    <a href='{base}/about' class="button">About</a>
  </div>
</div>



<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
    margin: 1rem 1rem 0 1rem;
  }

  .title {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .button {
    border: none;
    cursor: pointer;
    background-color: none;
    color:#333;
  }


</style>