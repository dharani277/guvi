# calculate area of an equilateral triangle
# get the input a from user
a=int(input())
# define equilateral triangle function
def equilateral_triangle():
# area of an equilateral triangle formula
  c=3**0.5/4*a*a
# roundoff to 2nd decimal place
  d=round(c,2)
# return the value d
  return d
# call equilateral triangle and store it in res
res=equilateral_triangle()
# print the res value
print(res)
