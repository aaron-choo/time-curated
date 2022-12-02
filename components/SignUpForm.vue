<template>
  <div class="subscription-form">
    <div id="mc_embed_signup" class="grid w-full grid-cols-1 gap-4 font-sans">
      <PrismicRichText
        v-if="$prismic.asText(settings.data.newsletterDescription)"
        :field="settings.data.newsletterDescription"
        :html-serializer="htmlSerializer"
        wrapper="div"
        class="text-xl font-serif"
      />
      <form
        action="https://time-curated.us19.list-manage.com/subscribe/post?u=454cf16c68e14bfa5f1839d2d&amp;id=3072a80b6d&amp;f_id=005ba0e4f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate flex"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll" class="relative w-full">
          <div class="mc-field-group">
            <label for="mce-EMAIL" class="sr-only"
              >Email Address <span class="asterisk">*</span>
            </label>
            <input
              type="email"
              value=""
              name="EMAIL"
              class="
                required
                email
                w-full
                rounded-[3px]
                py-2
                pl-4
                pr-12
                relative
              "
              id="mce-EMAIL"
              placeholder="email@address.com"
              required
            />
            <!-- <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span> -->
          </div>
          <div class="mc-field-group hidden">
            <label for="mce-MMERGE6">Language </label>
            <select name="MMERGE6" class="" id="mce-MMERGE6">
              <option value=""></option>
              <option value="English" :selected="settings.lang == 'en-us'">
                English
              </option>
              <option value="简体中文" :selected="settings.lang == 'zh-cn'">
                简体中文
              </option>
            </select>
            <span id="mce-MMERGE6-HELPERTEXT" class="helper_text"></span>
          </div>
          <div id="mce-responses" class="clear foot hidden">
            <div
              class="response"
              id="mce-error-response"
              style="display: none"
            ></div>
            <div
              class="response"
              id="mce-success-response"
              style="display: none"
            ></div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input
              type="text"
              name="b_454cf16c68e14bfa5f1839d2d_3072a80b6d"
              tabindex="-1"
              value=""
            />
          </div>
          <!-- <div class="optionalParent">
            <div class="clear foot">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </div> -->
        </div>
        <button
          type="submit"
          class="h-10 flex items-center justify-center px-3 text-2xl"
        >
          <span class="sr-only">Submit</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            height="14"
            width="14"
            class="h-3 w-3"
          >
            <g>
              <path
                d="M.5,9.5h9a4,4,0,0,0,0-8h-3"
                fill="none"
                stroke="var(--color-accent)"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <polyline
                points="3.5 6.5 0.5 9.5 3.5 12.5"
                fill="none"
                stroke="var(--color-accent)"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </button>
      </form>
    </div>
    <script
      type="text/javascript"
      src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
    ></script>
    <script type="text/javascript">
      (function ($) {
        window.fnames = new Array();
        window.ftypes = new Array();
        fnames[0] = "EMAIL";
        ftypes[0] = "email";
        fnames[1] = "FNAME";
        ftypes[1] = "text";
        fnames[2] = "LNAME";
        ftypes[2] = "text";
        fnames[3] = "ADDRESS";
        ftypes[3] = "address";
        fnames[4] = "PHONE";
        ftypes[4] = "phone";
        fnames[5] = "BIRTHDAY";
        ftypes[5] = "birthday";
        fnames[6] = "MMERGE6";
        ftypes[6] = "dropdown";
      })(jQuery);
      var $mcj = jQuery.noConflict(true);
      $mcj.extend($mcj.validator.messages, {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        accept: "Please enter a value with a valid extension.",
        maxlength: $mcj.validator.format(
          "Please enter no more than {0} characters."
        ),
        minlength: $mcj.validator.format(
          "Please enter at least {0} characters."
        ),
        rangelength: $mcj.validator.format(
          "Please enter a value between {0} and {1} characters long."
        ),
        range: $mcj.validator.format(
          "Please enter a value between {0} and {1}."
        ),
        max: $mcj.validator.format(
          "Please enter a value less than or equal to {0}."
        ),
        min: $mcj.validator.format(
          "Please enter a value greater than or equal to {0}."
        ),
        mc_birthday: "Please enter a valid month and day.",
        mc_date: "Please enter a valid date.",
        mc_phone: "Please enter a valid phone number.",
      });
    </script>
    <!--End mc_embed_signup-->

    <!-- <form
      action="https://time-curated.us19.list-manage.com/subscribe/post?u=454cf16c68e14bfa5f1839d2d&amp;id=3072a80b6d&amp;f_id=005ba0e4f0"
      method="post"
      class="grid w-full grid-cols-1 gap-4"
    >
      <PrismicRichText
        v-if="$prismic.asText(settings.data.newsletterDescription)"
        :field="settings.data.newsletterDescription"
        :html-serializer="htmlSerializer"
        wrapper="div"
        class="text-xl"
      />
      <div class="grid grid-cols-1 gap-2">
        <div class="relative">
          <label>
            <span class="sr-only">Email address</span>
            <input
              name="email"
              type="email"
              placeholder="email@address.com"
              required="true"
              class="w-full rounded-[3px] py-2 pl-4 pr-12 font-sans"
            />
          </label>
          <button
            type="submit"
            class="
              absolute
              top-0
              right-0
              bottom-0
              flex
              items-center
              justify-center
              px-3
              text-2xl
            "
          >
            <span class="sr-only">Submit</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              height="14"
              width="14"
              class="h-3 w-3"
            >
              <g>
                <path
                  d="M.5,9.5h9a4,4,0,0,0,0-8h-3"
                  fill="none"
                  stroke="var(--color-accent)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <polyline
                  points="3.5 6.5 0.5 9.5 3.5 12.5"
                  fill="none"
                  stroke="var(--color-accent)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </form> -->
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
  methods: {
    htmlSerializer(type, element, content, children) {
      switch (type) {
        case "heading1":
          return /* html */ `<h2 class="font-semibold tracking-tighter text-4xl md:text-6xl mb-4 text-white last:mb-0">${children.join(
            ""
          )}</h2>`;

        case "paragraph":
          return /* html */ `<p class="mb-4 last:mb-0">${children.join(
            ""
          )}</p>`;

        default:
          return (
            this.$prismic?.htmlSerializer(type, element, content, children) ??
            null
          );
      }
    },
  },
};
</script>
<style scoped>
input {
  color: var(--color-accent);
  background-color: var(--border-accent);
}
input::placeholder {
  color: var(--color-accent);
  opacity: 0.8;
}
</style>
<style>
#mc_embed_signup div.mce_inline_error {
  margin: 0.5rem 0;
  padding: 0;
  background-color: transparent;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--bg-error);
}
</style>