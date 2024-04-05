<script>
    export let title;
</script>

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

<div class="navbar">
  <div class="logo">
    <a href="/" class="title button">{title}</a>
  </div>
  <div class="nav-buttons">
    <a href='/about' class="button">About</a>
  </div>
</div>
