# scalene triangle
# get three values as input from user in a single line
A,B,C=list(map(int,input().split()))
# define scalene function
def scalene():
# if condition check whether the given values are scalene triangle or not
  if(A!=B and B!=C and C!=A):
    c="yes"
    return c
  else:
    c="no"
    return c
# call scalene function and store it in result
result=scalene()
# print result value
print(result)
