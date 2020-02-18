# N is a power of K
# get two input from user in a single line
N,K=list(map(int,input().split()))
# define power function
def power():
# if condition check whether the N is a power of K
 if(N==K*K):
  c="yes"
  return c
 else:
  c="no"
  return c
# call the power function and store it in output
output=power()
# print output value
print(output)
