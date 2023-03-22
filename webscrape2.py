import requests
from bs4 import BeautifulSoup
import time

# open a file for writing
with open('chess.html', 'w') as file:
    file.write('<h1>Hello, world!</h1>\n')
    file.write('<p>This is a new line.</p>')

# Send a request to the URL
url = 'https://www.chess.com/today'
response = requests.get(url)

# Get the last time the script was run from the cookie
last_run = response.cookies.get('last_run')

with open("chess.txt", "w") as text_file:
    text_file.write("test")

# Check if the script was run in the last 30 minutes
if last_run is None or time.time() - float(last_run) > -1800:
    # Create a BeautifulSoup object
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find the div with the class 'layout-column-one'
    div = soup.find('a', {'class': 'chess-today-headline-post'})



    # Find the link tag that contains the stylesheet and get the href attribute value
    stylesheet_url = soup.find('link', rel='stylesheet')['href']

    # Make a GET request to the stylesheet URL and get the response
    stylesheet_response = requests.get("https://chess.com/" + stylesheet_url)

    # Save the div content to a file
    with open('Week02/Project/chess.html', 'w', encoding="UTF-8") as file:
        file.write("<style>\n")
        file.write(stylesheet_response.text)
        file.write("\n</style>\n")
        file.write(str(div))

    # Save the contents of the stylesheet response to a file
    #with open('Week02/Project/chesscomstylesheet.css', 'w', encoding="UTF-8") as f:
     #   f.write(stylesheet_response.text)

    # Set the cookie with the current timestamp
    response.cookies.set('last_run', str(time.time()))

# Insert the HTML code from the saved file
#with open('chess.html', 'r', encoding='utf-8') as file:
 #   chess_html = file.read()

# Insert the HTML code into your page