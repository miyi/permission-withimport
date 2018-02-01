import csv
import json

csvfile = open('courses.csv', 'r')
jsonfile = open('1.json', 'w')

fieldnames = ("_typeName","code","title","subject","university","description","id")
reader = csv.DictReader( csvfile, fieldnames)

jsonfile.write('{"valueType":"relations","values":[')
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write(',')
jsonfile.write(']}')


# import csvmapper

# jsonfile = open('3.json', 'w')

# fields = ("_typeName","code","title","subject","university","description")
# parser = CSVParser('courses.csv', csvmapper.FieldMapper(fields))

# converter = csvmapper.JSONConverter(parser)

# jsondata = converter.doConvert(pretty=True)

# json.dump(jsondata, jsonfile)
