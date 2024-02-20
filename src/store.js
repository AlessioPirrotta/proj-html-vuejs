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
        
    ],
    arrExamples:[
        {
            photo: 'ina-soulis-227104-unsplash-1024x1024.jpg',
            name: 'The Basket of Flowers',
            text: 'MARKETING - BUSINESS'
        },
        {
            photo: 'sunisa-misa-531163-unsplash-1024x1024.jpg',
            name: 'A Famous Ferris Wheel',
            text: 'MARKETING'
        },
        {
            photo: '355H-1024x1024.jpg',
            name: 'Complementary Colors',
            text: 'MARKETING - BUSINESS'
        },
        {
            photo: 'photo-1448932252197-d19750584e56-1024x1024.jpg',
            name: 'Business Prestige',
            text: 'BRANDING'
        },
        {
            photo: 'business-competition-PB366D8-1024x1024.jpg',
            name: 'Colorful Origami Boats',
            text: 'BRANDING - MARKETING'
        },
        {
            photo: 'cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg',
            name: 'Modern Couch',
            text: 'MARKETING'
        },
        {
            photo: 'aa9a4539-PQGJ7HU-1024x1024.jpg',
            name: 'Hot Air Balloons',
            text: 'BRANDING - MARKETING'
        },
        {
            photo: 'cody-davis-253928-unsplash-1024x1024.jpg',
            name: 'Make Difference',
            text: 'BRANDING'
        },
        
    ]
})


