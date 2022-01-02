file = open("READMEpy.md", "w")
file.write("# TODO\n")
file.write("A collection of projects I made (and probably am making) in JS/TS. \n")
file.write("Currently in this repo are: \n")
apps = ["Calculator", "Converter", "Calendar"]
i = 0
while i < len(apps):
    stringe = f'[![{apps[i]} Banner](https://b.catgirlsare.sexy/YdDggbsGmDVi.png \"{apps[i] Banner}\")](https://ozzymand.github.io/TODO/{apps[i]}/) \n'
    file.write(str(stringe))
    i += 1
    pass
