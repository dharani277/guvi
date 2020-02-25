# Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'
# get input from user in a single line
N,K=list(map(int,input().split()))
l=list(map(int,input().strip().split()))[:N]
# define element function
def element():
 for i in range(0,N):
   m=0
   if(K==l[i]):
    m=m+1
    return m
# call the element function and store it in result
result=element()
# if condition checks the result is equal to one it print yes or else no
if(result==1):
 print("yes")
else:
 print("no")
  
