(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3],{291:function(e,t,n){"use strict";n(54),n(70);t.a={data:function(){return{title:"",description:""}},head:function(){return{title:this.title+" | Filari",meta:[{hid:"description",name:"description",content:this.description}]}}}},293:function(e,t,n){"use strict";n.r(t);var r={name:"HireUs"},o=n(42),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section section--dark mb-0",attrs:{id:"contact"}},[n("div",{staticClass:"container"},[n("h2",{staticClass:"section__heading"},[e._v("Hire us")]),e._v(" "),n("div",{staticClass:"section__content"},[n("p",[e._v("Have an interesting idea or project? Let us know.")]),e._v(" "),n("form",{staticClass:"contact-form",attrs:{id:"my-form",action:"#",method:"POST"}},[n("ul",[n("li",[n("label",{attrs:{for:"name"}},[e._v("Your name")]),e._v(" "),n("input",{attrs:{id:"name",name:"name",type:"text",required:""}})]),e._v(" "),n("li",[n("label",{attrs:{for:"email"}},[e._v("Your email")]),e._v(" "),n("input",{attrs:{id:"email",name:"email",type:"email",required:""}})]),e._v(" "),n("li",[n("label",[e._v("I'm interested in")]),e._v(" "),n("div",{staticClass:"checkbox-group"},[n("label",[n("input",{attrs:{name:"ui-ux-design",type:"checkbox"}}),e._v(" "),n("span",[e._v("UI & UX design ")])]),e._v(" "),n("label",[n("input",{attrs:{name:"branding",type:"checkbox"}}),e._v(" "),n("span",[e._v("Branding")])]),e._v(" "),n("label",[n("input",{attrs:{name:"website-design",type:"checkbox"}}),e._v(" "),n("span",[e._v("Website design")])]),e._v(" "),n("label",[n("input",{attrs:{name:"mobile-app",type:"checkbox"}}),e._v(" "),n("span",[e._v("Mobile app")])]),e._v(" "),n("label",[n("input",{attrs:{name:"custom-application",type:"checkbox"}}),e._v(" "),n("span",[e._v("Custom application")])]),e._v(" "),n("label",[n("input",{attrs:{name:"digital-marketing",type:"checkbox"}}),e._v(" "),n("span",[e._v("digital-marketing")])]),e._v(" "),n("label",[n("input",{attrs:{name:"content-creation",type:"checkbox"}}),e._v(" "),n("span",[e._v("Content-creation")])])])]),e._v(" "),n("li",[n("label",[e._v("My budget is (in USD)")]),e._v(" "),n("div",{staticClass:"checkbox-group"},[n("label",[n("input",{attrs:{name:"budget-less-2500",type:"checkbox"}}),e._v(" "),n("span",[e._v("Less than $2500 ")])]),e._v(" "),n("label",[n("input",{attrs:{name:"budget-2500-5000",type:"checkbox"}}),e._v(" "),n("span",[e._v("$2500 - $5000")])]),e._v(" "),n("label",[n("input",{attrs:{name:"budget-5000-10000",type:"checkbox"}}),e._v(" "),n("span",[e._v("$5000 - $10000")])]),e._v(" "),n("label",[n("input",{attrs:{name:"budget=10000-25000",type:"checkbox"}}),e._v(" "),n("span",[e._v("$10000 - $25000")])]),e._v(" "),n("label",[n("input",{attrs:{name:"budget-more-25000",type:"checkbox"}}),e._v(" "),n("span",[e._v("More than $25000")])])])]),e._v(" "),n("li",[n("label",[e._v("Project details")]),e._v(" "),n("textarea",{attrs:{name:"project-details",rows:"4",required:""}})]),e._v(" "),n("li",[n("button",{staticClass:"btn btn--white",attrs:{id:"my-form-button",type:"submit"}},[e._v("\n              Submit\n            ")])]),e._v(" "),n("div",{attrs:{id:"my-form-status"}})])]),e._v(" "),n("script",[e._v("\n        window.addEventListener('DOMContentLoaded', function () {\n          // get the form elements defined in your form HTML above\n\n          var form = document.getElementById('my-form')\n          var button = document.getElementById('my-form-button')\n          var status = document.getElementById('my-form-status')\n\n          // Success and Error functions for after the form is submitted\n\n          function success() {\n            form.reset()\n            button.style = 'display: none '\n            status.innerHTML =\n              '✅ &nbsp;Thanks! We will get back to you soon.'\n          }\n\n          function error() {\n            status.innerHTML = 'Oops! There was a problem.'\n          }\n\n          // handle the form submission event\n\n          form.addEventListener('submit', function (ev) {\n            ev.preventDefault()\n            var data = new FormData(form)\n            ajax(form.method, form.action, data, success, error)\n          })\n        })\n\n        // helper function for sending an AJAX request\n\n        function ajax(method, url, data, success, error) {\n          var xhr = new XMLHttpRequest()\n          xhr.open(method, url)\n          xhr.setRequestHeader('Accept', 'application/json')\n          xhr.onreadystatechange = function () {\n            if (xhr.readyState !== XMLHttpRequest.DONE) return\n            if (xhr.status === 200) {\n              success(xhr.response, xhr.responseType)\n            } else {\n              error(xhr.status, xhr.response, xhr.responseType)\n            }\n          }\n          xhr.send(data)\n        }\n      ")])])])])}],!1,null,null,null);t.default=component.exports},316:function(e,t,n){e.exports=n.p+"img/project-wpv.27b85f4.jpg"},317:function(e,t,n){e.exports=n.p+"img/project-hotelier.c3762cf.jpg"},340:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"header-banner py-5 d-flex align-items-center justify-content-center"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"header-banner__content mx-auto text-center"},[n("h1",{staticClass:"fw-bold display-5 mb-lg-5 mb-2 text-golden"},[e._v("\n            We create world-class websites and applications for your business\n          ")]),e._v(" "),n("div",{staticClass:"lead fw-normal"},[n("p",[e._v("\n              Filari is a full-service design and technology agency that helps\n              you build successful web, mobile and custom applications.\n              Whether you are a budding\n              "),n("strong",{staticClass:"text-golden"},[e._v("startup")]),e._v(" or a successful\n              "),n("strong",{staticClass:"text-golden"},[e._v("enterprise")]),e._v(", we craft\n              memorable and engaging digital products that your users love to\n              use.\n            ")]),e._v(" "),n("a",{staticClass:"btn btn--header",attrs:{href:"#contact"}},[e._v("Start a project")])])])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"section__heading"},[e._v("What we do")]),e._v(" "),n("div",{staticClass:"section__content"},[n("p",[e._v("\n          We partner with you to understand your customer and business better,\n          and then build the right product and experiences for them. We work\n          with you to define your product vision, design and develop it to\n          improve your business outcomes. Key services include:\n        ")]),e._v(" "),n("ul",{staticClass:"services-block"},[n("li",[n("h3",[e._v("Discovery")]),e._v(" "),n("ul",[n("li",[e._v("Defining product vision &a strategy")]),e._v(" "),n("li",[e._v("Experience strategy")]),e._v(" "),n("li",[e._v("Rapid prototyping")]),e._v(" "),n("li",[e._v("Scoping & project roadmap")])])]),e._v(" "),n("li",[n("h3",[e._v("Design")]),e._v(" "),n("ul",[n("li",[e._v("Brand identity & positioning")]),e._v(" "),n("li",[e._v("UI & UX design - website and mobile")]),e._v(" "),n("li",[e._v("Design Systems & Style Guides")]),e._v(" "),n("li",[e._v("Interaction Design")])])]),e._v(" "),n("li",[n("h3",[e._v("Development")]),e._v(" "),n("ul",[n("li",[e._v("Technology consulting")]),e._v(" "),n("li",[e._v("UI & Front-end development")]),e._v(" "),n("li",[e._v("Backend development")]),e._v(" "),n("li",[e._v("E-commerce & dynamic websites")]),e._v(" "),n("li",[e._v("Custom CMS & applications")]),e._v(" "),n("li",[e._v("WordPress & Drupal")]),e._v(" "),n("li",[e._v("Performance & speed optimization")])])]),e._v(" "),n("li",[n("h3",[e._v("Growth")]),e._v(" "),n("ul",[n("li",[e._v("Content creation")]),e._v(" "),n("li",[e._v("Digital marketing")]),e._v(" "),n("li",[e._v("Social media management")]),e._v(" "),n("li",[e._v("Search engine optimization (SEO)")]),e._v(" "),n("li",[e._v("Paid campaign marketing")])])])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"section"},[r("div",{staticClass:"container"},[r("h2",{staticClass:"section__heading"},[e._v("Recent work")]),e._v(" "),r("div",{staticClass:"section__content"},[r("p",[e._v("\n          Our team works across the full product lifecycle - discovery,\n          design, development, and marketing. Take a peek at some of our\n          latest projects that people love to use.\n        ")]),e._v(" "),r("div",{staticClass:"projects-block"},[r("img",{staticClass:"project-img",attrs:{src:n(316),alt:""}}),e._v(" "),r("div",[r("h3",[e._v("\n              World pace volunteer"),r("span",[e._v(" Travel website and web app")])]),e._v(" "),r("p",[e._v("\n              Branding development | Website design | Custom CMS | Back-end\n              development\n            ")]),e._v(" "),r("a",{staticClass:"btn",attrs:{href:"#"}},[e._v("View project")])])]),e._v(" "),r("div",{staticClass:"projects-block"},[r("img",{staticClass:"project-img",attrs:{src:n(317),alt:""}}),e._v(" "),r("div",[r("h3",[e._v("\n              Hotelier Mart"),r("span",[e._v("Travel website and CRM integration")])]),e._v(" "),r("p",[e._v("Website design | CRM integration")]),e._v(" "),r("a",{staticClass:"btn",attrs:{href:"#"}},[e._v("View project")])])])])])])}],o=(n(54),n(70),{mixins:[n(291).a],created:function(){this.title="Company that specialises in web, mobile app, and custom software development.",this.description="We are a leading online, mobile app, and software development firm in India and the United States, offering IT services and solutions to startups and businesses."}}),c=n(42),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),n("HireUs")],1)}),r,!1,null,null,null);t.default=component.exports;installComponents(component,{HireUs:n(293).default})}}]);