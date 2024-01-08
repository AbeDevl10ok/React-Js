// @ts-check
import { test, expect } from '@playwright/test';
import { SearchMovies } from './pageObjects/searchMovies.ts';
test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  test('search movie',async({page})=>{
    await page.goto('http://localhost:5173/');

    // await page.getByRole('textbox', { name: 'Avengers...' })
    // await page.getByRole('textbox', { name: 'Avengers...' }).fill('avengers')
    // await page.getByRole('textbox', { name: 'Avengers...' }).press('Enter');

    const searchMovie = new SearchMovies(page);

    await searchMovie.inputFill('matrix')

    //es innesesario ya que busca mientras escriba pero podemos porbarlo cuando busque solo con tecla enter
    await searchMovie.searchMovi()

    //se renderiza la lista
    await expect(page.locator('//main//ul[@class=\'movies\']')).toBeVisible()
    //contiene imagenes
    const movies = await page.getByRole('img').all()
    await expect(movies?.length).toBeGreaterThan(0)

    
    //se cargan correctamente las imagenes
    for(let movi of movies){
      let img = await movi.getAttribute('src')
      await expect(img?.startsWith('https://')).toBeTruthy()
    }
  },)
