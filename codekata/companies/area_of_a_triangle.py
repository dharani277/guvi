# area of a triangle
# get base and height as inputs from user in a single line
base,height=list(map(int,input().split()))
# define area triangle function
def area_triangle():
# area of a triangle formula
      area=(1/2*base*height)
# return area
      return area
# call area triangle function and store it in result
result=area_triangle()
# print result value
print(result)
