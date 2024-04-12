<script>
    import {base} from '$app/paths';
</script>


<navbar>


  <div class="navbar-content">
    <div class="logo">
      <a href="{base}/" class="title button"><span id="title-bold">studio&ensp;</span><span >2263</span></a>
    </div>
    <div class="nav-buttons">
      <a href='{base}/about' class="about button"><strong>About</strong></a>
    </div>
  </div>


</navbar>



<style>

  navbar{
    padding: 0 25px;
  }

  .navbar-content{

    height: 50px;

    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--text-color);
  }

  .title {
    font-size: 1.5rem;
    text-decoration: none;
  }

  .about{
    /* on hover color is orange */
    color: var(--text-color);
    text-decoration: none;
  }
  .about:hover{
    color: var(--orange);
  }

  #title-bold {
    font-family: 'Alright Sans Bold', sans-serif;
    font-weight: bold;
    color: var(--orange)!important;
  }

  .button {
    height: 100%;
    border: none;
    cursor: pointer;
    background-color: none;
    color:#333;
  }

  a{
    height: 100%;
    /* alight at bottom */
    display: flex;
    align-items: flex-end;
  }


</style>