<script>
    export let title;
</script>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid black;
  }

  .title {
    font-weight: bold;
  }

  .button {
    border: none;
    cursor: pointer;
    background-color: none;
  }


</style>

<div class="navbar">
  <div class="title">{title}</div>
  <div class="button" >About</div>
</div>
