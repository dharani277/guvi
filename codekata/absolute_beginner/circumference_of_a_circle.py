# circumference of a circle
# get the input radius from user
radius=float(input())
# define the function as circumference
def circumference():
# circumference of a circle formula
  c=2*22/7*radius
# roundoff to 2nd decimal place
  d=round(c,2)
# return the value of d
  return d
# call the circumference function and store the output
output=circumference()
# print the output
print(output)
