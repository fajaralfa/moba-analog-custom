<script setup>
import { ref } from 'vue';


const emit = defineEmits(['add-player'])

const player = ref('')

function submit() {
    if (player.value == '') {
        alert('invalid player name!')
    } else {
        emit('add-player', player.value)
        player.value = ''
    }
}

</script>

<template>
    <form @submit.prevent="submit">
        <h4>Add Players</h4>
        <label>Player Name</label>
        <input type="text" v-model="player">
        <button type="submit">Add</button>
    </form>
</template>