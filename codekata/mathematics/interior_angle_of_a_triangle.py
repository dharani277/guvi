# interior angle of a triangle
# get three sides of a triangle from user in a single line
A,B,C=list(map(int,input().split()))
# define interior function
def interior():
# to perform interior angle of a triangle operation
 if(B+C==180-A):
  d="yes"
  return d
 else:
  d="no"
  return d
# call interior function and store it in result
result=interior()
# print the result value
print(result)
