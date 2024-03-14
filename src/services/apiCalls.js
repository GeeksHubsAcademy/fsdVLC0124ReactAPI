
const root = 'https://rickandmortyapi.com/api/'

export const GetCharacters = async () => {

    const response = await fetch(
        `${root}character/?page=2`
    )

    const data = await response.json()

    return data.results;

}