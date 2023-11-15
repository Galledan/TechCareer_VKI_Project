# Proje Tanımı / Project Description
TechCareer'in "The Basics of Full-Stack Development Bootcamp" sonunda bitirme projesi olarak Vücut Kitle İndeksi hesaplayan bir Front-End, Back-End ya da Full-Stack bir proje geliştirilmesi istendi. Ben de Front-End kısmı için React, Back-End kısmı için Spring Boot kullanarak bir proje geliştirdim.

At the end of "The Basics of Full-Stack Development Bootcamp" by TechCareer we were given the task to develop a Body Mass Index calculator, it could be Front-End, Back-End or Full-Stack project. For the Front-End part I used React and for the Back-End part I used Spring Boot to develop my project.

## Nasıl geliştirildi / How it was developed

Öncelikle InteliJ IDEA'de yeni bir Spring projesi açtım ve Maven kullandım. Daha sonrasında pom.xml ve application.properties kısımlarını derste gördüklerimizi kullanarak doldurdum.(Tamamını kullanmadım). Daha sonra MySql'de vki Schema'mı oluşturup users tableını oluşturdum. users tableı 5 farklı değer tutuyor bunlar; ID, İsim, Soyisim, Kilo ve Boy. application.propertieste MySQL bağlantısını zaten halletmiştim. Daha sonra Modelimi, Repositorymi ve Controller'ı mı oluşturdum ardından 404 Not Found Exception'ını ekledim. Bütün bunların en sonunda 8080 portunda çalışan CRUD işlevli Api'mı yaratmış oldum. Api bittikten sonra create-react-app ile yeni bir React projesi açtım. Öncelikle formu oluşturdum daha sonra axios kullanarak API ile bağlantı kurdum ve form ile POST istediğini gerçekleştirdim. Form tamamlandıktan sonra bu sefer List componentini kurdum ve GET istediğini kullandım. Daha sonra List componentindeki listeye Delete ve Update butonlarını ekledim böylece PUT ve DELETE isteklerini de tamamlayarak CRUD'u Front-End kısmına entegre etmiş oldum. Bunları yaparken Bootstrap kullanarak Form ve List componentlerimi biraz stilize ettim. En sonunda ise i18n kullanarak İngilizce ve Türkçe dil desteği ekledim.

At the start I started a new Spring project with Maven by using Intellij IDEA. Then I filled pom.xml and application.properties files by using the material we used on the bootcamp.(Not all the material). After that on MySQL I created vki Schema and users table. users table holds 5 different value and those are: ID, Name, Surname, Weight and Height. I already done MySQL connection on application.properties. Then I created my Model, Repository and Controller and later added 404 Not Found Exception. After all of that I had an API with all CRUD functions on 8080 port. After API is finished I used create-react-app to start a new React project. Firstly, I created Form component then added axios to connect to the API and send POST request with my Form. After Form is done I created List component and send GET request to the API. Then I added Delete and Update buttons to the elements on list so I can perform PUT and DELETE request and complete the integration of CRUD to my Front-End side. While doing all of that I used Bootstrap to stylize my Form and List components. And at the and I used i18n to insert language options English and Turkish.

## Kullanılan Teknolojiler / Technology Used

React
Bootstrap
Axios
i18n

Spring Boot
MySQL



