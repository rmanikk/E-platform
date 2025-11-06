function renderHeader() {
  const headerHTML = `
    <nav class="navbar">
      <div class="navbar-left">
        <a href="index.html">
          <img src="/Images/logo.png" alt="Logo" />
        </a>
      </div>

      <div class="navbar-center">
        <a href="index.html" class="active">Home</a>
        <a href="/course-detail.html">Our Courses</a>
        <a href="/blog.html">Blogs</a>
        <a href="/team.html"> Our Team </a>
        <a href="/books.html">Books</a>
        <a href="/contact.html">Contact Us</a>
        <div class="buttons">
          <button class="btn-signup">Sign Up</button>
          <button class="btn-login">Login</button>
        </div>
      </div>

      <div class="navbar-toggle">
        <i class="fa fa-bars"></i>
      </div>

      <div class="navbar-right">
        <button class="btn-signup">Sign Up</button>
        <button class="btn-login">Login</button>
      </div>
    </nav>`;

  document.querySelector(".header-container").innerHTML = headerHTML;

  document.querySelector(".navbar-toggle").addEventListener("click", () => {
    document.querySelector(".navbar-center").classList.toggle("active");
  });
}

renderHeader();
