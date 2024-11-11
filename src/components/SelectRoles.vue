<script setup>
const avaliableRoles = ['Exp', 'Mid', 'Gold', 'Jungler', 'Roam']

const model = defineModel()

function allRolesToggle(e) {
    model.value = e.currentTarget.checked ? avaliableRoles : []
}

</script>

<template>
    <h4>Select Roles</h4>
    <div v-for="r in avaliableRoles">
        <label for="roles">
            <input type="checkbox" name="roles" :value="r" v-model="model">
            {{ r }}
        </label>
    </div>
    <div>
        <label>
            <input type="checkbox" @click="allRolesToggle">
            All Role
        </label>
    </div>
</template>