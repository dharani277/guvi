# factorial of N
# get input N from user
N=int(input())
# define factorial function 
def factorial():
# initialize fact is equal to one
  fact = 1
# for loop range from 1 to N+1
  for i in range(1,N+1):
    fact = fact*i
  return fact
# call the factorial function and store it in output
output=factorial()
# print output value
print(output)
