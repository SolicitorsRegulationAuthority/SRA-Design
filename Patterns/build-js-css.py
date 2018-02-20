# This needs to be run from the atom folder
import os
import string
directory = os.getcwd()
file_object = open('main.js', 'w')
for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.js'):
            print(file)
            with open(os.path.join(root,file),'r') as f:
                lines = f.readlines()
                with open("main.js", "a")as f1:
                    f1.writelines(lines)
                    f1.writelines('\n\n')

file_object.close()

file_object = open('styles.css', 'w')
for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.css'):
            print(file)
            with open(os.path.join(root,file),'r') as f:
                lines = f.readlines()
                with open("styles.css", "a")as f1:
                    f1.writelines(lines)
                    f1.writelines('\n\n')

file_object.close()