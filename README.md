# Student Feedback Registration Form - DevOps CA2

## Overview
This project is developed as part of the DevOps Laboratory CA2 assignment.  
It demonstrates frontend development, automated testing using Selenium, and Continuous Integration using Jenkins.

---

## Features
- Student Feedback Registration Form
- Input validation using JavaScript
- Automated testing using Selenium (Python)
- Continuous Integration using Jenkins
- Version control using GitHub

---

## Technologies Used
- HTML
- CSS (Internal & External)
- JavaScript
- Python (Selenium, Pytest)
- Jenkins
- Git & GitHub

---

## Form Validation (JavaScript)
- Student Name cannot be empty  
- Email must be in valid format  
- Mobile number must contain 10 digits  
- Gender must be selected  
- Department must be selected  
- Feedback must contain at least 10 words  

---

## Selenium Test Cases
- Check if form page loads successfully  
- Submit form with valid data  
- Validate error handling for empty mandatory fields  
- Validate incorrect email format  
- Validate invalid mobile number  
- Check dropdown selection  
- Verify Submit and Reset buttons  

---

## Jenkins Setup
- Installed Jenkins locally  
- Created Freestyle Project  
- Configured build steps to:
  - Install dependencies  
  - Run Selenium test scripts  
- Build executed successfully  

---

## How to Run Locally

1. Install dependencies  
pip install -r requirements.txt  

2. Start server  
python -m http.server 8000  

3. Run tests  
pytest tests/test_form.py  

---

## Output
Jenkins build screenshots are included in the Screenshots folder showing:
- Successful build execution  
- Test case results  

---

## GitHub Repository
https://github.com/parthivabhani/DevOps_CA2

---

## Author
Parthiv Abhani
