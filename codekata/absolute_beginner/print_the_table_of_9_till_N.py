#print the table of 9 till N
# get input from user
N=int(input())
# define multiples function
def multiples():
# for loop is used to start the value from 1 to N
 for i in range(1,N+1):
  c=9*i
  print(c,end="")
  if(i<N):
   print(end=" ")
# call the multiples function
multiples()
