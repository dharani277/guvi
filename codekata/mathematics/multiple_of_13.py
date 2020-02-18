# multiple of 13
# get input N from user
N=int(input())
# define mul function
def mul():
# if condition checks multiple of 13
  if(N%13==0):
    c="yes"
    return c
  else:
    c="no"
    return c
# call the mul function and store it in res
res=mul()
# print the res value
print(res)
