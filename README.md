# Web Scraper for MIT OpenCourseWare
This project is a web scraper that searches for free courses related to the topics that are hardcoded in the program from the MIT OpenCourseWare site. The MIT OpenCourseWare site offers over 2,400 courses across various disciplines, such as engineering, science, humanities, and more. By using this project, you can save time and effort in searching for the courses you want to learn.

## How to use
To use this project, you need to have Node.js installed on your system. You can download it from [here].

After downloading the project, you need to install the dependencies by running the following command in the terminal:
```bash
npm install
```
Then, you can run the main script by running the following command in the terminal:
```bash
node main.js
```
This will start the web scraping process and print a JSON output to the terminal. The JSON output will contain the information of the courses that match the topics that are hardcoded in the program. The information includes:

- Title: The name of the course.
- Image: The URL of the image associated with the course.
- Link: The URL of the course page on the MIT OpenCourseWare site.

## Future scope
This project has some limitations that could be improved in the future. Some of the possible improvements are:

- Allow the user to input the URL and topics they want to search as command-line arguments or through a simple graphical user interface (GUI). This way, the project can be more adaptable and customizable for different users and scenarios.
- Handle errors and exceptions that might occur during the web scraping process, such as network issues, invalid URLs, or changes in the site structure.
- Add some features to make the project more efficient and informative, such as caching the results, filtering the courses by criteria such as date or rating, or providing more details about the courses such as instructor name or syllabus.
