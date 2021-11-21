
import { Builder, Capabilities, By, until } from "selenium-webdriver"
import { isAwaitExpression } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2200)
    
})

test('Check that Draw shows up when page loads', async () => {
    const draw= await driver.findElement(By.id('draw'))
    const display = await draw.isDisplayed()
    expect(display).toBe(true)
    await driver.sleep(2000)
})


test('Draw button diplays choices', async () => {
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})



test('Add to Duo button displays player-duo', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(2000)
    const playerId = await driver.findElement(By.id('player-duo'))
    const displayed= await playerId.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})