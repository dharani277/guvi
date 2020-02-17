# sum of two numbers and find odd or even
# get two inputs from user in a single line
n,m=list(map(int,input().split()))
# define odd even function
def odd_even():
# perform add operation
  sum=n+m
# if condition is used to check even 
  if(sum%2==0):
    r="even"
# return even
    return r
# else condition is used to check odd
  else:
    r="odd"
# return odd
    return r
# call odd even function and store it in result
result=odd_even()
# print result 
print(result)
