import os
import shutil
import logging
import sys
import argparse
import time

parser = argparse.ArgumentParser(description="CLI Utility for reoccurring backup")


logging.basicConfig(format='%(asctime)s %(levelname)-8s %(message)s',
                    datefmt='%a, %d %b %Y %H:%M:%S',
                    filename='Example.log',
                    filemode='w',
                    encoding='utf-8',
                    level=logging.DEBUG)


def getFolderSize(folderPath):
    totalSize = 0
    for path, dirs, files in os.walk(folderPath):
        for file in files:
            filePath = os.path.join(path, file)
            totalSize += os.path.getsize(filePath)
    return totalSize


def rebaseFolder(srcFolder, syncFolder):
    # Overwrite the destination folder with the source folder in a destructive manner
    logging.warning(f'Removing destination folder')
    shutil.rmtree(syncFolder)
    logging.warning(f'Copying {getFolderSize(srcFolder)} bytes to destination folder')
    shutil.copytree(srcFolder, syncFolder)
    pass


def checkSum(srcFolder, syncFolder):
    srcFolderSize = getFolderSize(srcFolder)
    syncFolderSize = getFolderSize(syncFolder)
    logging.debug(f'Source folder bytes:\t{srcFolderSize}')
    logging.debug(f'Sync folder bytes:\t{syncFolderSize}')
    if srcFolderSize != syncFolderSize:
        logging.warning(f'Folders out of sync by {srcFolderSize-syncFolderSize} bytes')
        return 1
    else:
        logging.info(f'No changes between folders')
    return 0


def handleArguments():
    parser.add_argument('-src', type=str,
                        help='Filepath for the source folder')
    parser.add_argument('-dist', type=str,
                        help='Filepath for the destination folder')
    parser.add_argument('-dry', action='store_true',
                        help='Dry-Run, if supplied, don\'t make any changes')
    parser.add_argument('-interval', type=int,
                        help='Time (in seconds) to wait between checks')
    parser.add_argument('-log', type=str,
                        help='Filepath destination for the log file')


def main(srcFolder, syncFolder):
    if checkSum(srcFolder, syncFolder) and not args.dry:
        rebaseFolder(srcFolder, syncFolder)
    elif args.dry:
        logging.error('Dry run supplied, not making any changes')
        print('Dry run supplied, not making any changes')


if __name__ == '__main__':
    logging.info(f'---- RUNNING')
    handleArguments()
    args = parser.parse_args()

    # Check if an interval was provided, otherwise don't run.
    if args.interval is None:
        # ANSII escape sequence red bold underlined \033[31; 1; 4m
        # with the end of line                      \033[0m
        print('\033[31;1;4mInterval missing, please provide time interval\033[0m')
        sys.exit()
    while True:
        main(args.src, args.dist)
        time.sleep(args.interval)