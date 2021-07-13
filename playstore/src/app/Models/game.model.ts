export interface gameattributes {
    id: string,
    title: string,
    thumbnail: string,
    status: string,
    short_description: string,
    description: string,
    game_url: string,
    genre: string,
    platform: string,
    publisher: string,
    developer: string,
    release_date: string,
    freetogame_profile_url: string,
    minimum_system_requirements: {
        os: string,
        processor: string,
        memory: string,
        graphics: string,
        storage: string,
    }
    screenshots: {
        image1: {
            id: string,
            image: string
        },
        image2: {
            id: string,
            image: string
        },

        image3: {
            id: string,
            image: string
        },
        image4: {
            id: string,
            image: string
        }
    }
}