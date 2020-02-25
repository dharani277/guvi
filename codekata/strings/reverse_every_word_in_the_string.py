# Given a string S of length N, write a program that would reverse every word in the string
# get input from user
n=input()
a=n.split(" ")
for i in range(0,len(a)):
# reverse every string using slicing
  c=(a[i])[-1::-1]
  print(c,end="")
  if(i<(len(a)-1)):
    print(end=" ")


  
