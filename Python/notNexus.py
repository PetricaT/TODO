from pathlib import Path
import configparser
import os

# SCRIPT FOR MO2 USERS ONLY
#
# Place this inside the instance folder (or wherever you set your 'mods' folder to be).
#
# Outputs the path of all the mods that don't have nexus metadata in their meta.ini files.

def main():
	output = open('./output.txt', 'w')
	folders = Path('./mods').iterdir()
	for folder in folders:
		inifile = Path(str(folder) + '\meta.ini')
		if os.path.isfile(inifile):
			config = configparser.ConfigParser()
			config.read(inifile)
			modid = config['General']['modid']
			category = config['General']['category']
			if (modid == '0' or category == '-1,') and '_separator' not in str(folder):
				print(folder)
				output.write(str(folder) + '\n')


if __name__ == '__main__':
	if os.path.isdir('./mods'):
		main()
	else:
		print('Mods folder not found. Is the script running from the instance folder?')