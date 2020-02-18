# multiplication and mod operation
# get the three inputs from user in a single line using map
A,B,C=list(map(int,input().split()))
# define module function
def module():
# perform mul and mod operation
  c=A*B%C
  return c
# call the module function and store it in res
res=module()
# print the res value
print(res)
