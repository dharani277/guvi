# Sum of Natural Numbers from 1 to n

n=int(input("Enter the number: "))
def natural():
  sum=0
  for i in range(1,n+1):
    sum+=i
  print("Sum of Natural Numbers :",sum)
natural()
