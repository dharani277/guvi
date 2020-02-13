# Sum of Odd Numbers from 1 to n

n=int(input("Enter the number: "))
def odd():
  sum=0
  c=[]
  for i in range(1,n+1):
    if(i%2!=0):
     c.append(i)
  for j in c:
    sum+=j
  print("Sum of Odd Numbers :",sum)
odd()
