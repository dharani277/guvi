# find A^B%C
# get three inputs from user in a single line
A,B,C=list(map(int,input().split()))
# define equation function
def equation():
# perform exponential and mod operation
  d=A**B%C
  return d
# call the equation and store it in output
output=equation()
# print the output value
print(output)
