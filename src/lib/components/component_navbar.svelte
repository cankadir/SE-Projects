<script>
    import {base} from '$app/paths';
</script>


<navbar>


  <!-- <div class="navbar-content">
    <div class="logo">
      <a href="{base}/" class="title button"><span id="title-bold">studio&ensp;</span><span >2263</span></a>
    </div>
    <div class="nav-buttons">
      <a href='{base}/about' class="about button"><strong>About</strong></a>
    </div>
  </div> -->

  <div class="navbar-content">

      <a href="{base}/" class="title button"><span id="title-bold">studio&ensp;</span><span >2263</span></a>

      <a href='{base}/about' class="about button"><strong>About</strong></a>

  </div>


</navbar>



<style>

  navbar{
    padding: 0 25px;
  }

  .navbar-content{
    height: 55px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--text-color);
    padding-bottom: 4px;
  }

  .title {
    font-size: 1.5rem;
  }

  .about{
    color: var(--text-color);
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
    cursor: pointer;
    color:#333;
    text-decoration: none;
  }

  a{
    /* height: 100%; */
    display: flex;
    align-items: flex-end;

    /* justify text to bottom */
    vertical-align: bottom;
  }


</style>