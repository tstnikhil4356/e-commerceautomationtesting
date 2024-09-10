// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('test001', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('test001', async function() {
    await driver.get("http://127.0.0.1:5500/index.html")
    await driver.manage().window().setRect({ width: 1440, height: 900 })
    await driver.findElement(By.css(".header-social-container > li:nth-child(1) .md")).click()
    await driver.findElement(By.css(".header-social-container > li:nth-child(2) .md")).click()
    await driver.findElement(By.css(".header-social-container > li:nth-child(3) .md")).click()
    await driver.findElement(By.css(".header-social-container > li:nth-child(4) .md")).click()
    await driver.findElement(By.css(".desktop-menu-category-list > .menu-category:nth-child(1) > .menu-title")).click()
    await driver.findElement(By.css(".menu-category:nth-child(2) > .menu-title")).click()
    await driver.findElement(By.css(".menu-category:nth-child(5) > .menu-title")).click()
    await driver.findElement(By.css(".header-user-actions > .action-btn:nth-child(1) > .md")).click()
    await driver.findElement(By.css(".header-user-actions > .action-btn:nth-child(2) > .md")).click()
  })
})