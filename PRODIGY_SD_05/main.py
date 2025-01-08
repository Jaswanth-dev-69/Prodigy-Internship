from threading import main_thread

import requests,openpyxl
from bs4 import BeautifulSoup

ex=openpyxl.Workbook()
sheet=ex.active
sheet.title="Comic-Book"
sheet.append(['idx','Comic Book Name','Issued Year'])

url = 'https://comicvine.gamespot.com/issues/'

try:
    # Setting a timeout to prevent hanging indefinitely
    response = requests.get(url, timeout=10)  # 10-second timeout
    response.raise_for_status()  # Check for HTTP errors

    # Parsing the response with BeautifulSoup
    so = BeautifulSoup(response.text, 'html.parser')

    # Extracting the desired 'ul' element and its 'li' children
    fo = so.find('ul', class_='editorial cover-grid compact').find_all("li")

    # Using enumerate to add serial numbers
    for idx, i in enumerate(fo, start=1):
        # Extract the title
        ct = i.find('h3', class_='title').text.strip()
        id = i.find('p', class_='issue-date').text.strip()
        #print(idx, ct,  id)
        sheet.append([idx, ct, id])
except requests.exceptions.Timeout:
    print("The request timed out. Please try again later.")
except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")
except Exception as e:
    print(e)

ex.save("Comic-Book.xlsx")
