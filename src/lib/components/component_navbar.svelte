
<nav class="navbar">
  <div class="navbar-content">
      <a href="../" class="title button">
        <img src="/images/logo.svg" alt="studio logo">
      </a>
      <a href='../about' class="about button"><strong>About</strong></a>
  </div>
</nav>


<style>

  .navbar {
    padding: 0 1.5625rem;
  }

  .navbar-content{
    height: 3.4375rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--text-color);
    padding-bottom: 0.25rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .title img {
    height: 1.875rem;
    width: auto;
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