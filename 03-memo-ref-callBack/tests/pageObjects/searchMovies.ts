import { Locator ,Page,expect} from "@playwright/test"

export class SearchMovies{
    private readonly inputSearch: Locator

    constructor(page:Page){
        this.inputSearch = page.getByRole('textbox', { name: 'Avengers...' })
    }

    async  inputFill (movie:string){
        await this.inputSearch.fill(movie)
    }

    async  searchMovi (){
        await this.inputSearch.press('Enter')
    }

}