<template>
  <div class="contact-text text-xs-left">
    <h2 class="contact-text__caption light-green--text font-weight-regular" v-html="caption"></h2>
    <p class="contact-text__quote font-italic white--text" v-html="quote"></p>
    <p class="contact-text__author white--text" v-html="author"></p>
    <p class="contact-text__contact">
      <span class="light-green--text">P</span>
      <span class="white--text" v-html="contacts.phone"></span>
    </p>
    <p class="contact-text__contact">
      <span class="light-green--text">E</span>
      <span class="light-green--text" v-html="contacts.email"></span>
    </p>
    <p class="contact-text__contact">
      <span class="light-green--text">A</span>
      <span class="white--text" v-html="contacts.address"></span>
    </p>
    <p class="contact-text__contact">
      <span class="light-green--text font-weight-bold" v-html="contacts.web"></span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'contact-text',

    data: () => ({
      caption: 'Please contact the team via details below or the form to the right to check availability at AREA for your next event or meeting.',
      quote: 'I would like to thank Sage and Courtney for the tremendous work they did over the two days we were onsite.You are both very professional and I was very impressed, everything ran smoothly and anything we asked for was organised quickly.\n' +
      'Our Senior Leadership team thought the venue was great.',
      author: '– Helen Kincaid, Reserve Bank of New Zealand',
      contacts: {
        phone: ' 04 384 1070',
        email: 'events@areaevents.co.nz',
        address: '1 O’Reily Ave, Wellington',
        web: 'www.areaevents.co.nz'
      }
    })
  }
</script>

<style lang="scss" scoped>
  .contact-text {

    &__caption {
      margin-bottom: 50px;
      font-size: 30px;
      line-height: 40px;
    }

    &__quote,
    &__author,
    &__contact {
      font-size: 14px;
    }

    &__quote,
    &__author {
      margin-bottom: 25px;
    }

    &__contact {
      margin-bottom: 5px;

      span:first-of-type {
        margin-right: 5px;
      }
    }
  }
</style>