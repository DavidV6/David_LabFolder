# LabFolder

LabFolder is a Spring boot api with part of the front end implemented for managing Laboratories research notebooks.
<br>
The features included in the application are:
* search for a word from a notebook text.
* search for similar words from the notebook text with **Levenshtein** distance < 1.

This is a prebuild version of the application for showcasing purpose.<br>
For more detailed and internal use of each side (back & front) there are README files inside the specific projects.<br>
* **Notebook** - Back-End project
* **Notebook_front** - Front-End project

## Usage

To start the application run the file **RunApplication.bat** or **RunApplication.sh** based on the operating system available.
After the link below is available for the application:<br>
http://localhost:8080/index.html

## Explore

A basic documentation of the rest api is generated with swagger-2.<br>
To acces the rest api documentation the 2 following links are active:
* Whithout UI -> http://localhost:8080/v2/api-docs
* With UI     -> http://localhost:8080/swagger-ui.html#/
