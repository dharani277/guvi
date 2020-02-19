# ax+b=y equation and find the value of y
# get three inputs from user in a single line
a,b,x=list(map(int,input().split()))
# define equation function
def equation():
  y=a*x+b
  return y
# call the equation function and store it in output
output=equation()
# print output value
print(output)
