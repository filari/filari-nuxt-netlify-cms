<template>
  <header class="position-sticky sticky-top bg-white shadow-sm">
    <nav class="navbar navbar-expand-lg navbar-light py-3">
      <div class="container">
        <NuxtLink
          to="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <svg
            width="100"
            height="32"
            fill="#030087"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="96" cy="26.5" rx="4" ry="4.5" fill="#030087"></ellipse>
            <path
              d="M13.148 15.846H9.804V30.97H2.318V15.846H0V9.652h2.318v-.19c0-2.736.798-4.826 2.394-6.27C6.333 1.722 8.652.988 11.666.988c.608 0 1.077.013 1.406.038v6.346a7.123 7.123 0 00-.836-.038c-.81 0-1.406.19-1.786.57-.38.355-.595.937-.646 1.748h3.344v6.194zM19.572 7.676c-1.318 0-2.382-.355-3.192-1.064-.786-.735-1.178-1.647-1.178-2.736 0-1.115.392-2.04 1.178-2.774C17.19.367 18.254 0 19.572 0c1.292 0 2.33.367 3.116 1.102.81.735 1.216 1.66 1.216 2.774 0 1.09-.406 2.001-1.216 2.736-.786.71-1.824 1.064-3.116 1.064zm3.686 1.976V30.97H15.81V9.652h7.448zM34.947 2.85v28.12H27.5V2.85h7.448zM37.973 20.292c0-2.204.392-4.13 1.178-5.776.81-1.647 1.9-2.913 3.268-3.8 1.393-.887 2.938-1.33 4.636-1.33 1.469 0 2.736.291 3.8.874 1.064.583 1.887 1.368 2.47 2.356V9.652h7.448V30.97h-7.448v-2.964c-.583.988-1.419 1.773-2.508 2.356-1.064.583-2.318.874-3.762.874-1.698 0-3.243-.443-4.636-1.33-1.368-.887-2.458-2.153-3.268-3.8-.786-1.672-1.178-3.61-1.178-5.814zm15.352 0c0-1.368-.38-2.445-1.14-3.23-9.766 18.938-1.647-1.178-2.736-1.178-1.115 0-2.04.393-2.774 1.178-.735.76-1.102 1.837-1.102 3.23 0 1.368.367 2.457 1.102 3.268.734.785 1.659 1.178 2.774 1.178 1.089 0 2.001-.393 2.736-1.178.76-.785 1.14-1.875 1.14-3.268zM72.465 13.414c.836-1.216 1.85-2.179 3.04-2.888a7.371 7.371 0 013.838-1.064v7.942h-2.09c-1.621 0-2.825.317-3.61.95-.785.633-1.178 1.735-1.178 3.306v9.31h-7.448V9.652h7.448v3.762zM85.775 7.676c-1.317 0-2.381-.355-3.192-1.064-.785-.735-1.178-1.647-1.178-2.736 0-1.115.393-2.04 1.178-2.774C83.393.367 84.458 0 85.775 0c1.292 0 2.33.367 3.116 1.102.81.735 1.216 1.66 1.216 2.774 0 1.09-.405 2.001-1.216 2.736-.785.71-1.824 1.064-3.116 1.064zm3.686 1.976V30.97h-7.448V9.652h7.448z"
              fill="#030087"
            ></path>
          </svg>
        </NuxtLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <NuxtLink
                to="/travel"
                class="nav-link ms-lg-3"
                aria-current="page"
                >Travel</NuxtLink
              >
            </li>
            <b-nav-item-dropdown text="Services" right>
              <b-dropdown-item to="/web-development"
                >Web Development</b-dropdown-item
              >
            </b-nav-item-dropdown>
            <!-- <li class="nav-item"><a  href="/travel.html" class="nav-link" aria-current="page">Travel</a></li> -->
            <li class="nav-item">
              <a
                href="#contact"
                class="nav-link text-white px-4 ms-lg-3 btn btn-primary"
                aria-current="page"
                >Contact us</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    }
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>

<style scoped></style>
