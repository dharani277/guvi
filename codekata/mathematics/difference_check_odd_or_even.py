# difference and check whether it is odd or even
# get two inputs from user in a single line 
N,M=list(map(int,input().split()))
# define even odd function
def even_odd():
# perform difference operation and store it in c
  c=N-M
# if condition check the difference of number is even or not
  if(c%2==0 or c==0):
    d="even"
    return d
  else:
    d="odd"
    return d
# call even odd function and store it in result
result=even_odd()
# print the result value
print(result)
