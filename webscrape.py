import requests, os
from bs4 import BeautifulSoup

# make a request to the webpage
response = requests.get("https://www.chess.com/today")

# parse the HTML content with Beautiful Soup
soup = BeautifulSoup(response.content, "html.parser")

# find all div elements with the class "v5-section"
v5_sections = soup.find_all("div", {"class": "v5-section"})

# combine the contents of all v5-section divs into a single string
all_contents = ""
for section in v5_sections:
    all_contents += str(section)

# save the combined contents to a file
with open("all_sections.html", "w") as f:
    f.write(all_contents)

os.startfile("all_sections.html")