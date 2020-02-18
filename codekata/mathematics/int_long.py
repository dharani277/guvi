# print 'INT' if it is integer range or print 'LONG' if it is greater
# get input N from user
N=int(input())
# define great function
def great():
# if condition checks the range of int
 if(N<=100000):
  c="INT"
  return c
 else:
  c="LONG"
  return c
# call the great function and store it in res
res=great()
# print the res value
print(res)
