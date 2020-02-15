# remove all the whitespaces and find it's length
# get the string as input from user
a=input()
# define space function
def space():
# replace the white space with no space
  return a.replace(" ","")
# call the space function and store it in r
r=space()
# print the length of the string
print(len(r),end="")
