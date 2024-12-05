<template>
  <div>
    <section
      class="header-banner py-5 d-flex align-items-center justify-content-center"
    >
      <div class="container">
        <div class="row">
          <div class="header-banner__content mx-auto text-center">
            <h1 class="fw-bold display-5 mb-lg-5 mb-2 text-golden">
              We create world-class websites and applications for your business
            </h1>
            <div class="lead fw-normal">
              <p>
                Filari is a full-service design and technology agency that helps
                you build successful web, mobile and custom applications.
                Whether you are a budding
                <strong class="text-golden">startup</strong> or a successful
                <strong class="text-golden">enterprise</strong>, we craft
                memorable and engaging digital products that your users love to
                use.
              </p>
              <a href="#contact" class="btn btn--header">Start a project</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section__heading">What we do</h2>
        <div class="section__content">
          <p>
            We partner with you to understand your customer and business better,
            and then build the right product and experiences for them. We work
            with you to define your product vision, design and develop it to
            improve your business outcomes. Key services include:
          </p>
          <ul class="services-block">
            <li>
              <h3>Discovery</h3>
              <ul>
                <li>Defining product vision &amp; strategy</li>
                <li>Experience strategy</li>
                <li>Rapid prototyping</li>
                <li>Scoping &amp; project roadmap</li>
              </ul>
            </li>
            <li>
              <h3>Design</h3>

              <ul>
                <li>Brand identity &amp; positioning</li>
                <li>UI &amp; UX design - website and mobile</li>
                <li>Design Systems &amp; Style Guides</li>
                <li>Interaction Design</li>
              </ul>
            </li>
            <li>
              <h3>Development</h3>

              <ul>
                <li>Technology consulting</li>
                <li>UI &amp; Front-end development</li>
                <li>Backend development</li>
                <li>E-commerce &amp; dynamic websites</li>
                <li>Custom CMS &amp; applications</li>
                <li>WordPress &amp; Drupal</li>
                <li>Performance &amp; speed optimization</li>
              </ul>
            </li>
            <li>
              <h3>Growth</h3>
              <ul>
                <li>Content creation</li>
                <li>Digital marketing</li>
                <li>Social media management</li>
                <li>Search engine optimization (SEO)</li>
                <li>Paid campaign marketing</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section__heading">Recent work</h2>
        <div class="section__content">
          <p>
            Our team works across the full product lifecycle - discovery,
            design, development, and marketing. Take a peek at some of our
            latest projects that people love to use.
          </p>

          <div class="projects-block">
            <img
              src="@/assets/img/project-wpv.jpg"
              class="project-img"
              alt=""
            />
            <div>
              <h3>
                World pace volunteer<span> Travel website and web app</span>
              </h3>
              <p>
                Branding development | Website design | Custom CMS | Back-end
                development
              </p>
              <a href="#" class="btn">View project</a>
            </div>
          </div>

          <div class="projects-block">
            <img
              src="@/assets/img/project-hotelier.jpg"
              class="project-img"
              alt=""
            />
            <div>
              <h3>
                Hotelier Mart<span>Travel website and CRM integration</span>
              </h3>
              <p>Website design | CRM integration</p>
              <a href="#" class="btn">View project</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HireUs></HireUs>
  </div>
</template>

<script>
import pageCommon from '~/mixins/page-common'
export default {
  mixins: [pageCommon],
  created() {
    this.title =
      'Company that specialises in web, mobile app, and custom software development.'
    this.description =
      'We are a leading online, mobile app, and software development firm in India and the United States, offering IT services and solutions to startups and businesses.'
  },
}
</script>
