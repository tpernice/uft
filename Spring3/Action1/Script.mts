

SystemUtil.Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe","","C:\Program Files (x86)\Google\Chrome\Application",""
Browser("Browser").Navigate Parameter.Item("URL")
Browser("Browser").Page("spring-mvc-showcase_2").Link("Type Conversion").Click
Browser("Browser").Page("spring-mvc-showcase_3").Link("Custom Value Object").Click
Browser("Browser").Page("spring-mvc-showcase_4").SetTOProperty "Prop", DataTable("A", dtGlobalSheet)
SystemUtil.CloseProcessByName("chrome.exe") 
'Change
