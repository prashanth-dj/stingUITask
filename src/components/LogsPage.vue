<template>
  <div class="flex flex-col h-screen relative">
    <!-- Header -->
    <div class="absolute top-0 left-0 mt-2 p-8 w-full bg-white shadow-lg border border-gray-100">
      <s-header v-bind="$props" />
    </div>

    <!-- Main Content -->
    <div class="flex-1 mt-32 h-full mb-2 overflow-auto m-0">
      <s-table class="w-full bg-white shadow-lg border border-gray-200 m-0 p-0">
        <s-thead class="sticky top-0">
          <s-th class=" font-bold" v-for="header in headers" :key="header.title">
            {{ header.title }}
          </s-th>
        </s-thead>
        
        <s-tbody>
          <s-tr v-for="(item, index) in logData" :key="index">
            <s-td v-for="header in headers" :key="header.value">
              {{ item[header.value] }}
            </s-td>
          </s-tr>
        </s-tbody>
      </s-table>
    </div>
  </div>
</template>

<script>
export default {
    computed:{
       logData(){
        return this.$store.getters.allItems;
       } 
    },
  data() {
    return {
      headers: [
        // { title: "" },
        { title: "First Name", value: "name" },
        // { title: "Last Name", value: "lastName" },
        { title: "Email", value: "email" },
        { title: "Phone", value: "phone" },
        { title: "Description", value: "description" },
        { title: "DOB", value: "dob" },
      ],
    //   tableData: [
        
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //     // {
    //     //   firstName: "Prashanth",
    //     //   lastName: "DJ",
    //     //   emailAddress: "prashanth@gmail.com",
    //     //   phoneNumber: "8247237999",
    //     //   userDescription: "I'm at Chargebee",
    //     //   userDob: "1995-05-10",
    //     // },
    //   ],
    }
  },
};
</script>

<style scoped>
/* Add styles to ensure proper layout */
.fixed {
  position: fixed;
}

.mt-16 {
  margin-top: 4rem; /* Adjust to match the height of the header */
}

.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.z-10 {
  z-index: 10; /* Ensures the header stays above other elements */
}
</style>
