# Given 2 strings,check whether they have any common characters.If found print 'yes' else print 'no'
# get input from user
N,K=list(map(str,input().split()))
# initialize c is equal to zero
c=0
for i in range(0,len(N)):
  for j in range(0,len(K)):
    if(N[i]==K[j]):
      c=c+1
# if condition checks c is greater than one and print yes else no
if(c>1):
  print("yes")
else:
  print("no")
  
