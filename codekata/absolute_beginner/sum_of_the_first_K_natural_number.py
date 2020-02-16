# sum of the first k natural number
# get input n from user
n=int(input())
# define natural function
def natural():
# initialize c is equal to zero
  sum=0
# range from 1 to n using for loop
  for i in range(1,n+1):
# sum of first k natural numbers
    sum=sum+i
# return sum value
  return sum
# call the natural function and store it in output
output=natural()
# print output value
print(output)
