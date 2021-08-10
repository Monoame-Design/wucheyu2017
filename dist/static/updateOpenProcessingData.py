import urllib.request
import os
from datetime import datetime
now = datetime.now() # current date and time

urllib.request.urlretrieve('https://www.openprocessing.org/api/user/139364/sketchs.json', 'sketchs.json')

os.system("git add sketchs.json")
# os.system("git add 程式課程作業.json")
# os.system("git add 同學作品集.json")
os.system("git commit -m '" + now.strftime("%m/%d/%Y") +" Update sketchs Data'")
os.system("git push")

# os.system("sh ../deploy.sh")
