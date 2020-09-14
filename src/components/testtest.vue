<template>
  <div id="app">
    <p><strong>Add a new contact:</strong></p >
    <div>
      <label>First Name: <input type="text" placeholder ="Coder" v-model="form.firstName" class="userFirstname" /></label> <br />
      <label>Last Name: <input type="text" placeholder ="Byte" v-model="form.lastName" class="userLastname" /></label> <br />
      <label>Phone: <input type="number" placeholder ="8885559999" v-model="form.phone" class="userPhone" /></label> <br />
      <button @click="submitForm" class="submitButton">Add New Contact</button>
    </div>
    <table id="phoneBookItems" class="informationTable">
      <!-- items should go here -->
      <tr>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Phone</th>
      </tr>
      <tr v-for="item in items">
        <th>{{item.firstName}}</th>
        <th>{{item.lastName}}</th>
        <th>{{item.phone}}</th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [],
      form: {
        firstName: "",
        lastName: "",
        phone: ""
      }
    };
  },
  methods: {
    submitForm() {
      const newForm = {...this.form};
      this.items.push(newForm);
      this.sortByLastNameAscend(this.items);   
    },
    sortByLastNameAscend(users) {
      return users.sort((a, b) => {
        const surnameA = a.lastName.toUpperCase();
        const surnameB = b.lastName.toUpperCase();
        if (surnameA < surnameB) {
          return -1;
        }
        if (surnameA > surnameB) {
          return 1;
        }
        return 0; //name must be equal
      });
    }
  }
};
</script>