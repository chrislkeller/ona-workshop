#!/usr/bin/python

def main():
    text = open("index.html", "r").read()

    infile = open("index.pipe", "r")

    for line in infile:
        template, replacement = line.split(":", 1)

        template = template.strip()
        replacement = replacement.strip()

        if not replacement:
            continue

        text = text.replace("||%s||" % template, replacement)

    outfile = file("index.html", "w")
    outfile.write(text)

main()

        

