# count the number of digits
# get input N from user
N=int(input())
# defie digit1 function by passing parameter N
def digit1(N):
# initialize c is equal to zero
  c=0
  while N>0:
    c=c+1
    N=N//10
  return c
# call the digit1 function and store it in res
res=digit1(N)
# print the res value
print(res)
