const { AltUnityClient } = require("appium-altunity-plugin");
const { join } = require("node:path");
const { remote, $ } = require("webdriverio");
describe("test sample", () => {
  it("sample", async () => {
    const capabilities = {
      // capabilities for local Appium web tests on an Android Emulator
      platformName: "Android",
      "appium:deviceName": "Pixel_3a_API_34_extension_level_7_arm64-v8a",
      "appium:platformVersion": "14",
      "appium:automationName": "UiAutomator2",
      "appium:orientation": "PORTRAIT",
      "appium:app": join(process.cwd(), "./apps/build.apk"),
    };
    // const testDriver = await new AltUnityClient({
    //   host: "localhost",
    //   port: 4723,
    //   log: "silent",
    // });
    // console.log("unity", await testDriver.findAllObjects());
    const driver = await remote({
      host: "localhost",
      port: 4723,
      logLevel: "silent",
      path: "/",
      connectionRetryCount: 0,
      capabilities,
      isAndroid: true,
    });
    const unityContext = await driver.getContexts();
    const unity = await driver.switchContext(unityContext[0]);
    // console.log(await driver.switchContext("UNITY"));
    console.log("driver", unity);
    // console.log("test unity", await driver.getPageSource());
    console.log("android Element: ", await driver.getActiveElement());
  });
});
