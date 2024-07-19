
<navbar>
  <div class="navbar-content">
      <a href="../" class="title button">
        <img src="/images/logo.svg" alt="studio logo" height="30px" width="auto">
      </a>
      <a href='../about' class="about button"><strong>About</strong></a>
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

  .button {
    cursor: pointer;
    color:#333;
    text-decoration: none;
  }

  a{
    display: flex;
    align-items: flex-end;
    vertical-align: bottom;
  }
</style>