<template>
  <div>
    <div v-if="lang == 'en-us'" class="max-w-2xl mx-auto font-sans text-sm">
      <form
        id="form"
        action="https://submit-form.com/t4H4gM8m"
        data-botpoison-public-key="pk_58e35bd6-7c62-41a7-ba5e-365455524bcc"
        target="_blank"
        class="grid grid-cols-2 gap-2 mb-8"
      >
        <div class="col-span-2 select relative">
          <label for="enquiry-nature" hidden>Nature of Enquiry</label>
          <select
            id="enquiry-nature"
            name="enquiry-nature"
            required=""
            class="rounded-[3px]"
          >
            <option value="" disabled selected>Nature of Enquiry</option>
            <option value="feedback">Feedback</option>
            <option value="shop-enquiry">Shop Enquiry</option>
            <option value="collaborations">Collaborations</option>
            <option value="press-releases">Press Releases</option>
          </select>
        </div>

        <div class="col-span-2">
          <label for="name" hidden>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required=""
            class="rounded-[3px]"
          />
        </div>
        <div class="col-span-2 lg:col-span-1">
          <label for="phone" hidden>Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            required=""
            class="rounded-[3px]"
          />
        </div>
        <div class="col-span-2 lg:col-span-1">
          <label for="email" hidden>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required=""
            class="rounded-[3px]"
          />
        </div>
        <label for="message" hidden>Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required=""
          class="col-span-2 rounded-[3px]"
          rows="8"
        ></textarea>
        <button
          id="button"
          type="submit"
          class="col-span-2 btn text-xs uppercase mt-4"
        >
          Submit
        </button>
      </form>
      <div class="text-sm font-sans">
        <p class="mb-2 last:mb-0">
          We aim to respond to all inquiries within 24 hours, Monday to Friday,
          excluding holidays.
        </p>
        <p class="mb-2 last:mb-0">
          <a
            href="https://m.me/timecurated"
            target="_blank"
            class="underline decoration-1 underline-offset-2"
            >Live chat</a
          ><br /><a
            href="https://wa.me/6569624062"
            target="_blank"
            class="underline decoration-1 underline-offset-2"
            >Whatsapp Business</a
          ><br /><a
            href="tel:+6569624062"
            target="_blank"
            class="underline decoration-1 underline-offset-2"
            >Phone +65 6962 4062</a
          ><br />Monday to Friday 10am-6pm<br />Saturday to Sunday 1pm-6pm<br />(SGT
          ??? Singapore Time)
        </p>
      </div>
    </div>
    <div v-if="lang == 'zh-cn'" class="max-w-2xl mx-auto font-sans text-sm">
      <form
        id="form"
        action="https://submit-form.com/t4H4gM8m"
        data-botpoison-public-key="pk_58e35bd6-7c62-41a7-ba5e-365455524bcc"
        target="_blank"
        class="grid grid-cols-2 gap-2 mb-8"
      >
        <div class="col-span-2 select relative">
          <label for="enquiry-nature" hidden>??????</label>
          <select
            id="enquiry-nature"
            name="enquiry-nature"
            required=""
            class="rounded-[3px]"
          >
            <option value="" disabled selected>??????</option>
            <option value="feedback">??????</option>
            <option value="shop-enquiry">????????????</option>
            <option value="collaborations">????????????</option>
            <option value="press-releases">????????????</option>
          </select>
        </div>
        <div class="col-span-2">
          <label for="name" hidden>??????</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="??????"
            required=""
            class="rounded-[3px]"
          />
        </div>
        <div class="col-span-2 lg:col-span-1">
          <label for="phone" hidden>??????</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="??????"
            required=""
            class="rounded-[3px]"
          />
        </div>
        <div class="col-span-2 lg:col-span-1">
          <label for="email" hidden>??????</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="??????"
            required=""
            class="rounded-[3px]"
          />
        </div>
        <label for="message" hidden>??????</label>
        <textarea
          id="message"
          name="message"
          placeholder="??????"
          required=""
          class="col-span-2 rounded-[3px]"
          rows="8"
        ></textarea>
        <button
          id="button"
          type="submit"
          class="col-span-2 btn text-xs uppercase mt-4"
        >
          ??????
        </button>
      </form>
      <div class="text-sm font-sans">
        <p class="mb-2 last:mb-0">
          ?????????????????????24?????????????????????????????????????????????????????????????????????
        </p>
        <p class="mb-2 last:mb-0">
          <a
            href="https://m.me/timecurated"
            target="_blank"
            class="underline decoration-1 underline-offset-2"
            >??????????????????</a
          ><br /><a
            href="https://wa.me/6569624062"
            target="_blank"
            class="underline decoration-1 underline-offset-2"
            >Whatsapp Business</a
          ><br /><a
            href="tel:+6569624062"
            target="_blank"
            class="underline decoration-1 underline-offset-2"
            >?????? +65 6962 4062</a
          ><br />?????????????????????10????????????6???<br />?????????????????????1??????6???<br />???????????????
        </p>
      </div>
    </div>
  </div>
</template>
<script>
const FORMSPARK_ACTION_URL = "https://submit-form.com/t4H4gM8m";

export default {
  props: ["lang"],
  data() {
    return {
      message: "",
    };
  },
  head() {
    return {
      script: [
        {
          src: "https://unpkg.com/@botpoison/browser",
          async: true,
        },
      ],
    };
  },
  mounted() {
    var formElement = document.getElementById("form");
    var buttonElement = document.getElementById("button");
    formElement.addEventListener("botpoison-challenge-start", function () {
      buttonElement.setAttribute("disabled", "disabled");
    });
    formElement.addEventListener("botpoison-challenge-success", function () {
      buttonElement.removeAttribute("disabled");
    });
    formElement.addEventListener("botpoison-challenge-error", function () {
      buttonElement.removeAttribute("disabled");
    });
  },
  destroyed() {
    var formElement = document.getElementById("form");
    var buttonElement = document.getElementById("button");
    formElement.removeEventListener("botpoison-challenge-start", function () {
      buttonElement.setAttribute("disabled", "disabled");
    });
    formElement.removeEventListener("botpoison-challenge-success", function () {
      buttonElement.removeAttribute("disabled");
    });
    formElement.removeEventListener("botpoison-challenge-error", function () {
      buttonElement.removeAttribute("disabled");
    });
  },
  methods: {
    async submitForm() {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          message: this.message,
        }),
      });
      alert("Form submitted");
    },
  },
};
</script>
<style scoped>
#button {
  background: var(--color);
  color: var(--bg);
}
input,
textarea,
select {
  -webkit-appearance: none;
  background: var(--bg-secondary);
  padding: 0.5em;
  width: 100%;
}
.select:after {
  content: "";
  position: absolute;
  bottom: 1em;
  right: 0.5em;
  width: 0.6em;
  height: 0.3em;
  background-color: var(--color);
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
}
</style>