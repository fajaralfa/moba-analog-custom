import { ref } from "vue";

export function useCrudPlayer() {
    const players = ref([])
    const teams = ref({ left: [], right: [] })
    const roles = ref([])

    function addPlayer(input) {
        if (players.value.length + 1 > roles.value.length * 2) {
            alert('Player is full')
        }
        else {
            players.value.push(input)
        }
    }

    function rand(a, b) {
        return a + (b - a + 1) * crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32 | 0
    }

    function get() {
        const index = rand(0, players.value.length - 1)
        const name = players.value[index]
        players.value.splice(index, 1)
        return name
    }

    function randomize() {
        const len = players.value.length

        if (len != roles.value.length * 2) {
            alert('jumlah pemain tidak sesuai!')
            return
        }
        
        const temp = [...players.value]
        const randomizedPlayers = []
        for (let i = 0; i < len; i++) {
            randomizedPlayers.push(get())
        }
        players.value = [...temp]

        teams.value.left = randomizedPlayers.slice(0, len / 2)
        teams.value.right = randomizedPlayers.slice(len / 2, len)
    }

    return { addPlayer, randomize, players, teams, roles }
}