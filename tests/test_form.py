from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()

def test_form():
    driver.get("http://127.0.0.1:8000/index.html")
    time.sleep(2)

    driver.find_element(By.ID, "name").send_keys("Parthiv")
    driver.find_element(By.ID, "email").send_keys("test@gmail.com")
    driver.find_element(By.ID, "mobile").send_keys("9876543210")

    driver.find_element(By.ID, "department").send_keys("CSE")
    driver.find_element(By.XPATH, "//input[@value='Male']").click()

    driver.find_element(By.ID, "feedback").send_keys(
        "This is a very good form and I really liked using it a lot"
    )

    driver.find_element(By.XPATH, "//button[text()='Submit']").click()
    time.sleep(2)

    msg = driver.find_element(By.ID, "message").text
    assert "successfully" in msg

    driver.quit()