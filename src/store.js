import { reactive } from 'vue'

export const store = reactive ({
    searchText: "",
    loading: true,
    movieList: [],
    arrServices:[
        {
            service: 'Speed Optimization',
            icon: 'fa-solid fa-gauge-high',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia Separated...'
        },
        {
            service: 'Cloud Solutions',
            icon: 'fa-solid fa-cloud',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia Separated...'
        },
        {
            service: 'Website Design',
            icon: 'fa-solid fa-tablet-button',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia Separated...'
        },
        {
            service: 'Online Marketing',
            icon: 'fa-solid fa-stopwatch',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia Separated...'
        },
    ]
})
