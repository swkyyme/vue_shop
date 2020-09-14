<template>
  <div id="app">
    <p><strong>Add a new contact:</strong></p >
    <div>
      <label>First Name: <input v-model="form.firstName" type="text" class="userFirstname" /></label> <br />
      <label>Last Name: <input v-model="form.lastName" type="text" class="userLastname" /></label> <br />
      <label>Phone: <input v-model="form.number" type="number" class="userPhone" /></label> <br />
      <button class="submitButton" @click="submitForm">Add New Contact</button>
    </div>
    <table id="phoneBookItems" class="informationTable">
      <!-- items should go here -->
      <tr></tr>
      <div v-for="item in items" :key="item.index">
          {{`${item.firstName} ${item.lastName} ${item.phone}`}}
      </div>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      items: [],
      form: {
        firstName: '',
        lastName: '',
        phone: ''
      }
    }
  },
  methods: {
    submitForm () {
      this.items.push(this.form)
    }
  }
}
</script>
