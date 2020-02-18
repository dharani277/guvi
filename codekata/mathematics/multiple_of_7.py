# mltiple of 7
# get input N from user
N=int(input())
# define multiple function
def multiple():
# if condition checks multiple of 7 
  if(N%7==0):
    c="yes"
    return c
  else:
    c="no"
    return c
# call the multiple function and store it in output
output=multiple()
# print the output value
print(output)
