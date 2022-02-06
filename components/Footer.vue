<template>
  <div class="bg-light py-5">
    <div class="container small">
      <footer>
        <div class="row">
          <div class="col-lg-4 col-6">
            <h5>Company</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <NuxtLink class="nav-link p-0 text-muted" to="/about-us">
                  About Us
                </NuxtLink>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link p-0 text-muted" href="#"> Careers </a>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link p-0 text-muted" href="#"> Blog </a>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link p-0 text-muted" href="#"> Branding </a>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link p-0 text-muted" href="#"> How to Engage </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-6">
            <h5>Services</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <NuxtLink to="/web-development" class="nav-link p-0 text-muted"
                  >Web Development</NuxtLink
                >
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-12">
            <form class="p-3 bg-light">
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div class="d-flex w-100 gap-2">
                <label for="newsletter1" class="visually-hidden"
                  >Email address</label
                >
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex justify-content-between pt-4 mt-4 border-top">
          <p>© Filari agency 2022</p>
          <ul class="list-unstyled d-flex mb-0">
            <li class="ms-3">
              <a
                class="link-dark"
                href="https://twitter.com/filari_agency"
                target="_blank"
                rel="noopener noreferrer"
                >Twitter</a
              >
            </li>
            <li class="ms-3">
              <a
                class="link-dark"
                href="https://instagram.com/filari.agency"
                target="_blank"
                rel="noopener noreferrer"
                >Instagram</a
              >
            </li>
            <li class="ms-3">
              <a
                class="link-dark"
                href="https://facebook.com/filari.agency"
                target="_blank"
                rel="noopener noreferrer"
                >Facebook</a
              >
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
