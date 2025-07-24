import os
os.environ["HTTP_PROXY"] = ""
os.environ["HTTPS_PROXY"] = ""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--no-proxy-server")     # Ignora proxy de sistema
options.add_argument('--proxy-server=')       # Zera explicitamente o proxy

driver = webdriver.Chrome(options=options)

driver.get("https://analista-teste.seatecnologia.com.br/")

driver.find_element(By.XPATH, '//button[contains(text(), "+ Adicionar Funcionário")]').click()

driver.find_element(By.CSS_SELECTOR, 'input[type="text"][name="name"]').send_keys("Paulo Henrique")

driver.find_element(By.CSS_SELECTOR, 'input[type="text"][name="cpf"]').send_keys("12345678901")

driver.find_element(By.CSS_SELECTOR, 'input[type="text"][name="rg"]').send_keys("123456789121212131313142312412312312313431513513123")

driver.find_element(By.CSS_SELECTOR, 'input[type="date"][name="birthDay"]').send_keys("2000-08-14")

driver.find_element(By.CSS_SELECTOR, 'input[type="radio"][value="feminino"]').click()

import time

time.sleep(2) 

time.sleep(20)