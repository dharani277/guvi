# Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'
# get input N from user
N=int(input())
L,K=list(map(int,input().split()))
# define func function
def func(N):
 c=0
 for i in range(L,K+1):
  if(N==i):
    c=c+1
    return c
# call the func function and store it in res
res=func(N)
# if condition checks the res is equal to one it print yes else no
if(res==1):
 print("yes")
else:
 print("no")
