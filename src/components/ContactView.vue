<script lang="ts">
// https://getform.io/

import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      name: "",
      email: "",
      message: "",
      isSuccess: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.loading) return;
      this.loading = true;
      const formData = new FormData();
      formData.append("message", this.message);
      formData.append("name", this.name);
      formData.append("email", this.email);

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
            this.isSuccess = response.data.success;
            this.name = "";
            this.email = "";
            this.message = "";
            this.loading = false;
          },
          (response: any) => {
            // Error
            console.log(response);
          }
        );
    },
  },
};
</script>

<template>
  <div id="contactcontainer">
    <h1>Contact</h1>

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
            placeholder="Your name"
          />
        </div>
        <div class="form-group">
          <input
            v-model="email"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <textarea
            v-model="message"
            type="text"
            name="message"
            id="message"
            rows="6"
            placeholder="Message"
          />
        </div>
        <button type="submit">Send</button>

        <p v-if="isSuccess">Message sent.</p>
      </form>
    </div>
  </div>
</template>

<style scoped>
#contactcontainer {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
}

input {
  border-radius: 5px;
  border: none;
  margin: auto;
  color: #455889;
  padding: 10px;
}

#message {
  margin: auto;
  color: #455889;
  border-radius: 5px;
  border: none;
  padding: 15px;
}

button {
  background-color: white;
  color: #455889;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  padding: 5px 10px;
}

input:focus,
textarea:focus {
  outline: none !important;
  border: 1px solid #455889;
  box-shadow: 0 0 10px #719ece;
}
</style>
