<template>
  <section class="relative py-16 bg-white overflow-hidden">
    <!-- Gradient Background Balls -->
    <div
      class="absolute top-0 left-0 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-50 mix-blend-multiply filter blur-xl animate-pulse"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full opacity-50 mix-blend-multiply filter blur-xl animate-pulse"
    ></div>

    <div class="container mx-auto px-8 relative z-10">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">
        Contact Me
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Form -->
        <form
          @submit.prevent="handleSubmit"
          class="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg border border-white border-opacity-30"
        >
          <div
            class="mb-4 animate__animated animate__fadeInUp animate__delay-1s"
          >
            <label for="name" class="block text-gray-700">Name</label>
            <input
              v-model="form.name"
              type="text"
              id="name"
              required
              class="w-full p-3 mt-1 border border-gray-300 rounded"
            />
          </div>

          <div
            class="mb-4 animate__animated animate__fadeInUp animate__delay-1s"
          >
            <label for="email" class="block text-gray-700">Email</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              required
              class="w-full p-3 mt-1 border border-gray-300 rounded"
            />
          </div>

          <div
            class="mb-4 animate__animated animate__fadeInUp animate__delay-1s"
          >
            <label for="subject" class="block text-gray-700">Subject</label>
            <input
              v-model="form.subject"
              type="text"
              id="subject"
              required
              class="w-full p-3 mt-1 border border-gray-300 rounded"
            />
          </div>

          <div
            class="mb-4 animate__animated animate__fadeInUp animate__delay-1s"
          >
            <label for="message" class="block text-gray-700">Message</label>
            <textarea
              v-model="form.message"
              id="message"
              rows="6"
              required
              class="w-full p-3 mt-1 border border-gray-300 rounded"
            ></textarea>
          </div>

          <button
            type="submit animate__animated animate__fadeInUp animate__delay-1s"
            class="w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

        <!-- Social Links -->
        <div class="flex items-center justify-center p-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">
              Connect with Me
            </h3>
            <div class="flex justify-center space-x-6">
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                class="text-blue-500 hover:text-blue-600 transition transform hover:scale-110"
              >
                <img src="/icons/twitter.png" alt="Twitter" class="w-8 h-8" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                class="text-blue-700 hover:text-blue-800 transition transform hover:scale-110"
              >
                <img src="/icons/linkedin.png" alt="LinkedIn" class="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                class="text-pink-500 hover:text-pink-600 transition transform hover:scale-110"
              >
                <img
                  src="/icons/instagram.png"
                  alt="Instagram"
                  class="w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  mounted() {
    // GSAP animations
    gsap.from("form", {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    });
    gsap.from(".animate__fadeInUp", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });

    gsap.from(".animate__fadeInDown", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  },
  methods: {
    handleSubmit() {
      const templateParams = {
        name: this.form.name,
        email: this.form.email,
        subject: this.form.subject,
        message: this.form.message,
      };

      emailjs
        .send("service_wyfyo6i", "template_5jq7fkj", templateParams, {
          publicKey: "xo53ToQFCEklDEf5f",
        })
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
            this.resetForm();
          },
          (err) => {
            console.log("FAILED...", err);
            alert("Failed to send the message. Please try again later.");
          }
        );
    },
    resetForm() {
      this.form = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
    },
  },
};
</script>
