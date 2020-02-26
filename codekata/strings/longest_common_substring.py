# Given 2 strings S and A find the longest common substring.If no common substring is found print '-1'
# get input from user
N,K=list(map(str,input().split()))
# initialize c is equal to zero
c=0
for i in range(0,round((len(N)+1)/2)):
  for j in range(0,len(K)):
    if(N[i]==K[j]):
      c=c+1
# if condition checks c is equal to zero and print -1
if(c==0):
  print("-1")
else:
  print(K)
