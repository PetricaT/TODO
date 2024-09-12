import csv
import colorama
import requests
import json
import time
import os

links = []
api_key = ''
accept = 'application/json'

with open('activemods.csv') as csv_file:
	csv_reader = csv.reader(csv_file, delimiter=',')
	# read G column
	for row in csv_reader:
		if row[6] != '':
			links.append(row[6])

links.pop(0)
print(f"Found {len(links)} links")

if os.path.exists("modcheck.csv"):
	print(f"{colorama.Fore.BLUE}modcheck.csv append mode{colorama.Style.RESET_ALL}")
	textf = open("modcheck.csv", "a")
		
else:
	print(f"{colorama.Fore.PURPLE}modcheck.csv write mode{colorama.Style.RESET_ALL}")
	textf = open("modcheck.csv", "w")

def writeFile(modname:str, link: str, status: str):
	modname = modname.replace(",", " ")
	if status == "OK":
		print(f"{colorama.Fore.GREEN}{modname}{colorama.Style.RESET_ALL}")
		print(f"{colorama.Fore.GREEN}{link} - Is available{colorama.Style.RESET_ALL}")
		# csv.writer(textf).writerow([modname, link])
		textf.write(f"{modname} - {link} - ✓ OK\n")
	if status == "HIDDEN":
		print(f"{colorama.Fore.YELLOW}{modname}{colorama.Style.RESET_ALL}")
		print(f"{colorama.Fore.YELLOW}{link} - Is not available{colorama.Style.RESET_ALL}")
		textf.write(f"{modname} - {link} - X HIDDEN\n")
	if status == "UNAVAILABLE":
		print(f"{colorama.Fore.RED}{modname}{colorama.Style.RESET_ALL}")
		print(f"{colorama.Fore.RED}{link} - Is not available{colorama.Style.RESET_ALL}")
		textf.write(f"{modname} - {link} - X UNAVAILABLE\n")

i = 1
for link in links:
	# if the link has already been checked (so exists in modcheck.csv) skip it
	if os.path.exists("modcheck.csv"):
		if link not in open("modcheck.csv").read():
			modid = link.split('/')[-1]

			pagerequest = requests.get(f'https://api.nexusmods.com/v1/games/skyrimspecialedition/mods/{modid}.json', headers={'apikey': api_key, 'accept': accept})
			jsondata = json.loads(pagerequest.text)
			
			try:
				modname = jsondata['name']
			except:
				modname = "MOD HIDDEN"
			
			modstatus = jsondata['status']
			modavalability = jsondata['available']
			print(f"{i} / {len(links)}")
			
			if modstatus == "hidden":
				writeFile(modname, link, "HIDDEN")
			elif modstatus == 'removed':
				writeFile(modname, link, "REMOVED")
			elif modstatus == "published":
				writeFile(modname, link, "PUBLIC")
			i += 1
			time.sleep(5)
		
		else:
			print(f"{i} / {len(links)}")
			print(f"{colorama.Fore.YELLOW}{link} - Already checked{colorama.Style.RESET_ALL}")
			i += 1