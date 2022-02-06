<template>
  <div>
    <section
      class="section py-5 d-flex align-items-center justify-content-center"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-100 mx-auto text-center">
            <h1 class="display-4 mb-lg-5 mb-2">About Us</h1>
            <div class="lead fw-normal">
              <h2>We are a Website Development & Digital Marketing Company</h2>
              <p>
                Filari is a Website Development & Digital Marketing Company
                based in New Delhi. We are a team of highly qualified,
                experienced, and passionate professionals, who strive to provide
                the customers cutting-edge digital technology solutions.
              </p>
            </div>

            <div class="lead fw-normal">
              <h4>Who We Are</h4>
              <p>
                A highly professional software development and digital marketing
                company with experience in handling large scale projects. Our
                expertise in several platforms has a well-established track
                record. We are a preferred IT solutions vendor for many national
                and international companies.
              </p>
            </div>

            <div class="lead fw-normal">
              <h4>What We Do</h4>
              <p>
                We give wings to your digital dreams. If you can think of a
                phenomenon that can be executed in a digital space, we are a
                company which will make it happen. From polyglot coding to
                formulating killer marketing campaigns, we have the expertise in
                everything we do.
              </p>
            </div>

            <div class="lead fw-normal">
              <h4>Why Choose Us</h4>
              <p>
                If discipline and ethics are what you expect from your IT
                solutions company, look no further. Timely delivery of projects
                is an extension of our professional expertise. We know how to
                code and we know how to meet high-pressure deadlines. With us,
                everything has to be in black & white.
              </p>
            </div>

            <div class="lead fw-normal">
              <h4>Get to know us better.</h4>
              <p>
                Established in the year 2017, the company prides itself in
                providing creative and flexible out of the box solutions. All
                the deliverables are high-end systems built using latest
                technologies and are available at very reasonable prices
                compared to other competitors in the market.
              </p>

              <p>
                Right from the pre-sales questions to deployment and
                maintenance, the company’s young and spirited professionals
                collaborate well with the client to offer an overall amazing
                experience.
              </p>
              <p>
                <strong> Need to know more about our services? </strong>
              </p>
              <p>
                Our customer service department is ready to assist you 24/7,
                every day of the year.
              </p>

              <strong>About Us</strong>
              <p>
                Filari is an IT Solutions Company providing website design &
                development, digital marketing, customized software development,
                mobile app development, graphic designing, and industrial
                training services to clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import pageCommon from '~/mixins/page-common'

export default {
  name: 'Aboutus',
  mixins: [pageCommon],
  created() {
    this.title = 'Top Web Development Company | Website Designing Services'
    this.description =
      "India's leading provider of offshore web application and website development services. Providers of enterprise, ecommerce, CMS, and custom web solutions."
  },
}
</script>
