const API_KEY = '4287ad07'

export const searchMovies = async ({inputVal}) => {
  if (inputVal === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputVal}`)
    const json = await response.json()

    const movies = json.Search

    return movies
  } catch (e) {
    throw new Error('Error searching movies')
  }
}