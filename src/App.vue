<script setup>
import AddPlayer from './components/AddPlayer.vue';
import TextFieldReadonly from './components/TextFieldReadonly.vue';
import { useCrudPlayer } from './useCrudPlayer';
import SelectRoles from './components/SelectRoles.vue';

const { addPlayer, randomize, players, roles, teams } = useCrudPlayer()

</script>

<template>
    <SelectRoles v-model="roles" />
    <AddPlayer @add-player="addPlayer" />
    <ol>
        <li v-for="(, i) in players">
            <input type="text" v-model="players[i]">
            <button @click="players.splice(i, 1)">X</button>
        </li>
    </ol>
    <div>
        <button @click="randomize">Randomize</button>
        <button @click="players = []; teams = {left: [], right: []}">Clear</button>
    </div>
    <div class="container">
        <div>
            <TextFieldReadonly v-for="(role, index) in roles" :label="role" :value="teams.left[index]" />
        </div>
        <div>
            <TextFieldReadonly v-for="(role, index) in roles" :label="role" :value="teams.right[index]" />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    width: 600px;
}
</style>
