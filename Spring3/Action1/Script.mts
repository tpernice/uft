
DataTable.Import ("errors.xls")

SystemUtil.Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe","","C:\Program Files (x86)\Google\Chrome\Application",""
'Browser("Browser").Navigate Parameter.Item("URL")
Browser("Browser").Navigate "http://pernix.northeurope.cloudapp.azure.com:8686/spring-mvc-showcase-1.0.0-BUILD-SNAPSHOT-55/#forms"

Browser("Browser").Page("spring-mvc-showcase_4").WebEdit("name").Set DataTable("name", dtLocalSheet) @@ hightlight id_;_Browser("Browser").Page("spring-mvc-showcase 4").WebEdit("name")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Page("spring-mvc-showcase_4").WebEdit("age").Set DataTable("age", dtLocalSheet) @@ hightlight id_;_Browser("Browser").Page("spring-mvc-showcase 4").WebEdit("age")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("spring-mvc-showcase_4").WebEdit("birthDate").Set DataTable("birthDate", dtLocalSheet) @@ hightlight id_;_Browser("Browser").Page("spring-mvc-showcase 4").WebEdit("birthDate")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Browser").Page("spring-mvc-showcase_4").WebEdit("currency").Set DataTable("currency", dtLocalSheet) @@ hightlight id_;_Browser("Browser").Page("spring-mvc-showcase 4").WebEdit("currency")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Browser").Page("spring-mvc-showcase_4").WebEdit("percent").Set DataTable("percent", dtLocalSheet) @@ hightlight id_;_Browser("Browser").Page("spring-mvc-showcase 4").WebEdit("percent")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Browser").Page("spring-mvc-showcase_4").WebEdit("inquiryDetails").Set DataTable("inquiryDetails", dtLocalSheet) @@ hightlight id_;_Browser("Browser").Page("spring-mvc-showcase 4").WebCheckBox("additionalInfo[mvc]")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("spring-mvc-showcase_4").WebButton("Submit").Click @@ hightlight id_;_Browser("Browser").Page("spring-mvc-showcase 4").WebButton("Submit")_;_script infofile_;_ZIP::ssf8.xml_;_

SystemUtil.CloseProcessByName("chrome.exe")
