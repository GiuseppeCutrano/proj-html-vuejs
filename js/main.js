const myapp = new Vue({
  el: '#root',
  data:{
    boxImg: "img/about-4.jpg",
    socialMedia: [
      {
        icon: 'fa-facebook-f'
      },
      {
        icon: 'fa-twitter'
      },
      {
        icon: 'fa-linkedin-in'
      }
    ],
    navList: [
      {
        navElem: 'HOME'
      },
      {
        navElem: 'SERVICES'
      },
      {
        navElem: 'ABOUT'
      },
      {
        navElem: 'PROJECTS'
      },
      {
        navElem: 'RESULTS'
      }
    ],
    numList: [
      {
        numElem: '128'
      },
      {
        numElem: '230'
      },
      {
        numElem: '517'
      },
      {
        numElem: '94'
      }

    ],
    listBot: [
      {
        bottomEle: 'ALL'
      },
      {
        bottomEle: 'ISTITUTIONAL'
      },
      {
        bottomEle: 'SOCIAL'
      },
      {
        bottomEle: 'EVENTS'
      },
      {
        bottomEle: 'INNOVATIONS'

      },
      {
        bottomEle: 'ENVIROMENT'

      },
      {
        bottomEle: 'TECHNOLOGY'

      }
    ],
    footerList: [
      {
        icon: 'fa-phone-alt',
        item: '+1 (305) 1234-5678'
      },
      {
        icon: 'fa-envelope',
        item: 'hello@example.com'
      },
      {
        icon: 'fa-map-marker-alt',
        item: 'Main Avenue, 987'
      }
    ],
    // FIRST LIST FOOTER
    footerListFirst: [
      {
        icon: 'fa-chevron-right',
        item: 'The Company'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Institutional'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Social & Events'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Innovation'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Environment'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Techonology'
      }
    ],
    // SECOND LIST FOOTER
    footerListSecond: [
      {
        icon: 'fa-chevron-right',
        item: 'Audit & Assurance'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Financial Advisory'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Analytics M&A'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Middle Marketing'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Legal Consulting'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Regulatory Risk'
      }
    ],
    // THIRD LIST FOOTER
    footerListThird: [
      {
        icon: 'fa-chevron-right',
        item: 'Responsibility'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Terms of Use'
      },
      {
        icon: 'fa-chevron-right',
        item: 'About Cookies'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Privacy Policy'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Accessibility'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Information'
      }
    ],







  },

});
