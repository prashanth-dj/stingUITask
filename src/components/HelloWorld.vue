<template>
  <div class="flex justify-center items-center">
    <div class="form-area">
      <form action="submit">
        <s-input
          class="input"
          label="First Name"
          placeholder="Enter Your First Name"
          invalidMessage="First name is required."
          required
          :isInvalid="firstnameValidation"
          @input="firstnameValidation = false"
          v-model="firstName"
        ></s-input>
        <s-input
          class="input"
          label="Last Name"
          placeholder="Enter Your Last Name"
          invalidMessage="Last name is required."
          required
          :isInvalid="lastnameValidation"
          @input="lastnameValidation = false"
          v-model="lastName"
        ></s-input>
        <s-input
          class="input"
          label="Email"
          icon="mail"
          type="email"
          :isInvalid="emailValidation"
          invalidMessage="Email is required."
          placeholder="Enter Your Email Address"
          @input="emailValidation = false"
          v-model="emailAddress"
        ></s-input>
        <s-input
          class="input"
          label="Phone"
          icon="device-mobile"
          type="number"
          :isInvalid="phoneValidation"
          invalidMessage="Phone number is required."
          placeholder="Enter Your Mobile Number"
          @input="phoneValidation = false"
          v-model="phoneNumber"
        ></s-input>
        <s-textarea
          v-model="userDescription"
          placeholder="Enter here"
          label="Tell about yourself"
          height="small"
          width="full"
          :isInvalid="descriptionValidation"
          invalidMessage="Description is required."
          @input="descriptionValidation = false"
        />
        <div class="dob">
          <h2 class="mt-2">Select your DOB</h2>
          <s-date-time-picker
            v-model="userDob"
            :zone="zone"
            :useTime="useTime"
            :useMilliseconds="useMilliseconds"
            @input="dobValidation = false"
          />
        </div>
        <s-inline-error v-if="dobValidation" :message="dobError" />

        <div class="button-group">
          <s-button
            class="submit-button"
            @click="validateInputs"
            style="cursor:pointer"
            styleType="outline"
            variant="primary"
          >
            Confirm
          </s-button>
          <s-modal v-model="showModal" :heading="heading">
            <template #body>
              <div style="display:flex; justify-content:center">
                <ModalView :details="Details" @check-confirm="receiveEmit" />
              </div>
            </template>
            <!-- <template #footer>
          <div style="display:flex; justify-content:center; margin-top: 1rem">
            <s-button variant="primary" @click="clearModal">Save</s-button>
          </div>
        </template> -->
          </s-modal>
          <s-button class="submit-button" variant="primary">Sign up</s-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ModalView from "@/components/ModalView.vue";

export default {
  components: {
    ModalView,
  },
  name: "HelloWorld",
  data() {
    return {
      showModal: false,
      heading: "Confirm your details",
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      userDescription: "",
      userDob: "",
      Details: {},
      firstnameValidation: false,
      lastnameValidation: false,
      emailValidation: false,
      phoneValidation: false,
      descriptionValidation: false,
      dobValidation: false,
      dobError: "Enter your date of birth",
    };
  },
  methods: {
    validateInputs() {
      this.firstnameValidation = !this.firstName;
      this.lastnameValidation = !this.lastName;
      this.emailValidation = !this.emailAddress;
      this.phoneValidation = !this.phoneNumber;
      this.descriptionValidation = !this.userDescription;
      this.dobValidation = !this.userDob;

      if (
        !this.firstnameValidation &&
        !this.lastnameValidation &&
        !this.emailValidation &&
        !this.phoneValidation &&
        !this.descriptionValidation &&
        !this.dobValidation
      ) {
        this.Details.name = this.firstName + " " + this.lastName;
        this.Details.email = this.emailAddress;
        this.Details.phone = this.phoneNumber;
        this.Details.dob = this.cleanDate(this.userDob);
        this.Details.description = this.userDescription;
        
        this.$store.commit("addItem",this.Details)
        this.openModal();
      }
    },
    openModal() {
      this.showModal = true;
    },
    cleanDate(d) {
      if (!d) {
        return;
      }
      return new Date(d).toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.form-area {
  background-color: #bbd8ef;
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
}
.input {
  width: 100%;
  margin-bottom: 15px;
}
.button-group {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}
.dob {
  margin-top: 20px;
  display: flex;
  gap: 20px;
  align-self: center;
}
</style>
