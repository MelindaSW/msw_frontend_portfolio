<script lang="ts">
// using https://getform.io/

import axios from "axios"

export default {
  data() {
    return {
      loading: false,
      name: "",
      email: "",
      message: "",
      isSuccess: false,
    }
  },
  computed: {
    submitDisabled() {
      return this.name != "" && this.email != "" && this.message != ""
    },
  },
  methods: {
    onSubmit() {
      if (this.loading) return
      this.loading = true
      const formData = new FormData()
      formData.append("message", this.message)
      formData.append("name", this.name)
      formData.append("email", this.email)

      axios
        .post(
          "https://getform.io/f/8e9e79ac-a576-4591-a0ba-08352a5004ef",
          formData,
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then(
          (response: { data: { success: boolean } }) => {
            this.isSuccess = response.data.success
            this.name = ""
            this.email = ""
            this.message = ""
            this.loading = false
          },
          (response: any) => {
            console.log(response)
          }
        )
    },
  },
}
</script>

<template>
  <div id="contact">
    <h1>Contact</h1>
    <p class="info">
      Thank you for reading this far! <br />If you want to get in touch, you can
      reach me on
      <a href="https://www.linkedin.com/in/melinda-sandstr%C3%B6m-wagner/"
        >Linkedin</a
      >, <a href="mailto:sandstrommelinda@gmail.com">email me</a>, or send a
      quick message here.
    </p>
    <div class="form">
      <form
        enctype="multipart/form-data"
        method="POST"
        @submit.prevent="onSubmit"
      >
        <div class="form-group">
          <input
            v-model="name"
            type="text"
            name="name"
            placeholder="Your Name *"
          />
        </div>
        <div class="form-group">
          <input
            v-model="email"
            type="email"
            name="email"
            placeholder="Your Email *"
          />
        </div>
        <div class="form-group">
          <textarea
            v-model="message"
            type="text"
            name="message"
            id="message"
            rows="6"
            placeholder="Message *"
          />
        </div>
        <button type="submit" :disabled="!submitDisabled">Send</button>

        <p v-if="isSuccess">Message sent.</p>
      </form>
    </div>
  </div>
</template>

<style scoped>
#contact {
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2.3rem;
  padding-bottom: 2.7rem;
  margin: auto;
  margin-bottom: 5rem;
}

.info {
  font-size: 1.2em;
  width: 80%;
  margin-top: 1rem;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  background-color: #dfdfdf;
  border-radius: 10px;
  padding-top: 1rem;
  padding-bottom: 2rem;
  width: 80%;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.form-group {
  padding-top: 1rem;
  width: 50%;
}

input {
  font-size: 0.8rem;
  border-radius: 5px;
  border: none;
  margin: auto;
  color: #455889;
  padding: 10px;
  width: 100%;
}

#message {
  font-family: sans-serif;
  font-size: 0.8rem;
  margin: auto;
  color: #455889;
  border-radius: 5px;
  border: none;
  padding: 15px;
  resize: none;
  width: 100%;
}

button {
  background-color: #455889;
  color: white;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  padding: 7px 15px;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

input:focus,
textarea:focus {
  outline: none !important;
  border: 1px solid #455889;
  box-shadow: 0 0 10px #719ece;
}

a {
  text-decoration: none;
  color: #6380ca92;
  font-weight: bold;
}

@media (min-width: 1500px) {
  #contact {
    width: 60%;
  }
}
</style>
