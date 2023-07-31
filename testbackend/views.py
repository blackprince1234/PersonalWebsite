from bs4 import BeautifulSoup
from django.http import HttpResponse
from django.shortcuts import render
import requests

from selenium.webdriver.common.action_chains import ActionChains
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC 
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.chrome.options import Options
import csv
import json
from testbackend import urls


from django.shortcuts import render


def index(request):
    return render(request, 'index.html')

def files(request):
    url = 'https://github.com/pittcsc/Summer2024-Internships'
    response = requests.get(url)
    finalResults = []
    if response.status_code == 200:
        html = response.text
        soup = BeautifulSoup(html, 'html.parser')
        results = soup.find_all("tr")
        
        id = 0
        for r in results:
            containers = r.find_all("td")

            if containers:
                company_name = containers[0].string
                c_link = containers[0].find('a')
                p_link = containers[-1].find('a')
                
                company_link = ""
                company_apply_link  = ""
                
                
                if c_link and c_link.has_attr('href'):
                    company_link = c_link['href']

                
                if p_link and p_link.has_attr('href'):
                    company_apply_link = p_link['href']
                    # print(p_link['href'])
                    
                json_object = {
                    "id": id,
                    "name": company_name,
                    "company_link": company_link,
                    "apply_link": company_apply_link
                }
                id+=1
                finalResults.append(json_object)

            
    json_stuff = json.dumps(finalResults)

    return render(request,
        "files/files.html",
        {"data": json_stuff}
        
    )
        
def dates(request):
    param1 = request.GET.get('url')  # Access the value of 'param1' from query parameters
    param2 = request.GET.get('url2')
    print("Passed: " + str(param1))
    
    
    response = requests.get(param1)
    if response.status_code == 200:
        print("Found the website")
        
        html = response.text
        soup = BeautifulSoup(html, 'html.parser')
   
   
   
    else:
        print("Website not found")

    

    return render(request,
        "dates/dates.html",
        {"data": "json_stuff"}
    )
    






        
        
        
        
        
        
        

        

   

   
   

   
    
    
        

