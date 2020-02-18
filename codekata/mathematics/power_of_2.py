# given a number N, check whether it is a power of 2
# get input N from user
N=int(input())
# define power function
def power():
# if condition checks the power of 2
 if(N%2==0):
   c="yes"
   return c
 else:
   c="no"
   return c
# call the power function and store it in result
result=power()
# print the result value
print(result)
