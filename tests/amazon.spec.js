import{test} from "@playwright/test";

test("amazon",async({page})=>{

    await page.goto("https://www.amazon.com/");
   await page.locator("#twotabsearchtextbox");
   console.log("amazon_searchbar")
})