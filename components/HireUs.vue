<template>
  <section id="contact" class="section section--dark mb-0">
    <div class="container">
      <h2 class="section__heading">Hire us</h2>
      <div class="section__content">
        <p>Have an interesting idea or project? Let us know.</p>

        <form id="my-form" class="contact-form" action="#" method="POST">
          <ul>
            <li>
              <label for="name">Your name</label>
              <input id="name" name="name" type="text" required="" />
            </li>
            <li>
              <label for="email">Your email</label>
              <input id="email" name="email" type="email" required="" />
            </li>
            <li>
              <label>I'm interested in</label>
              <div class="checkbox-group">
                <label>
                  <input name="ui-ux-design" type="checkbox" />
                  <span>UI &amp; UX design </span>
                </label>
                <label>
                  <input name="branding" type="checkbox" />
                  <span>Branding</span>
                </label>
                <label>
                  <input name="website-design" type="checkbox" />
                  <span>Website design</span>
                </label>
                <label>
                  <input name="mobile-app" type="checkbox" />
                  <span>Mobile app</span>
                </label>
                <label>
                  <input name="custom-application" type="checkbox" />
                  <span>Custom application</span>
                </label>
                <label>
                  <input name="digital-marketing" type="checkbox" />
                  <span>digital-marketing</span>
                </label>
                <label>
                  <input name="content-creation" type="checkbox" />
                  <span>Content-creation</span>
                </label>
              </div>
            </li>

            <li>
              <label>My budget is (in USD)</label>
              <div class="checkbox-group">
                <label>
                  <input name="budget-less-2500" type="checkbox" />
                  <span>Less than $2500 </span>
                </label>
                <label>
                  <input name="budget-2500-5000" type="checkbox" />
                  <span>$2500 - $5000</span>
                </label>
                <label>
                  <input name="budget-5000-10000" type="checkbox" />
                  <span>$5000 - $10000</span>
                </label>
                <label>
                  <input name="budget=10000-25000" type="checkbox" />
                  <span>$10000 - $25000</span>
                </label>
                <label>
                  <input name="budget-more-25000" type="checkbox" />
                  <span>More than $25000</span>
                </label>
              </div>
            </li>

            <li>
              <label>Project details</label>
              <textarea name="project-details" rows="4" required=""></textarea>
            </li>

            <li>
              <button id="my-form-button" type="submit" class="btn btn--white">
                Submit
              </button>
            </li>

            <div id="my-form-status"></div>
          </ul>
        </form>
        <!-- Place this script at the end of the body tag -->
        <script>
          window.addEventListener('DOMContentLoaded', function () {
            // get the form elements defined in your form HTML above

            var form = document.getElementById('my-form')
            var button = document.getElementById('my-form-button')
            var status = document.getElementById('my-form-status')

            // Success and Error functions for after the form is submitted

            function success() {
              form.reset()
              button.style = 'display: none '
              status.innerHTML =
                '✅ &nbsp;Thanks! We will get back to you soon.'
            }

            function error() {
              status.innerHTML = 'Oops! There was a problem.'
            }

            // handle the form submission event

            form.addEventListener('submit', function (ev) {
              ev.preventDefault()
              var data = new FormData(form)
              ajax(form.method, form.action, data, success, error)
            })
          })

          // helper function for sending an AJAX request

          function ajax(method, url, data, success, error) {
            var xhr = new XMLHttpRequest()
            xhr.open(method, url)
            xhr.setRequestHeader('Accept', 'application/json')
            xhr.onreadystatechange = function () {
              if (xhr.readyState !== XMLHttpRequest.DONE) return
              if (xhr.status === 200) {
                success(xhr.response, xhr.responseType)
              } else {
                error(xhr.status, xhr.response, xhr.responseType)
              }
            }
            xhr.send(data)
          }
        </script>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HireUs',
}
</script>
