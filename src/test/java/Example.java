import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Playwright;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class Example {

    public static void main(String[] args) {

        var playwright = Playwright.create();

        var browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false).setSlowMo(500));

        var browserContext = browser.newContext();

        var page = browserContext.newPage();

        page.navigate("https://todomvc.com/examples/react/#/");

        assertEquals("React • TodoMVC",page.title());

        page.close();

    }

}