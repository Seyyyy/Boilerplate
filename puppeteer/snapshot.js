const { percySnapshot } = require('@percy/puppeteer')
const puppeteer = require("puppeteer")
const url = "http://localhost:8080"

async function screenShot(page, pageName) {
    await percySnapshot(page, pageName);
}

!(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 })

    await page.goto(url);
    await screenShot(page, "home")

    // page.click('a[href="/About"]')
    // await screenShot(page, "about")

    // page.click('a[href="/Illustration"]')
    // await screenShot(page, "illustlation")

    // page.click('a[href="/Animation"]')
    // await screenShot(page, "animation")

    await browser.close();
})()
