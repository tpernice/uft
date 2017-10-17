

SystemUtil.Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe","","C:\Program Files (x86)\Google\Chrome\Application",""
Browser("Browser").Navigate Parameter.Item("URL")
'Browser("Browser").Navigate "http://pernix.northeurope.cloudapp.azure.com:8686/spring-mvc-showcase-1.0.0-BUILD-SNAPSHOT-36/"
Browser("Browser").Page("spring-mvc-showcase").Link("Request Mapping").Click
Browser("Browser").Page("spring-mvc-showcase_2").Link("By path pattern").Click
Browser("Browser").Page("spring-mvc-showcase_2").Link("Type Conversion").Click
Browser("Browser").Page("spring-mvc-showcase_3").Link("Date").Click
Browser("Browser").Page("spring-mvc-showcase_3").Link("Custom Value Object").Click
Browser("Browser").Page("spring-mvc-showcase_3").Link("Custom Converter").Click
Browser("Browser").Page("spring-mvc-showcase_3").Link("THIS RAISES ERROR").Click
SystemUtil.CloseProcessByName("chrome.exe") 
'Change
