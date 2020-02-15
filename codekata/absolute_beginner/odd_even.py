# odd or even
# get input number from user
number=float(input())
# roundoff number and store it in b
b=round(number)
# define odd even function
def odd_even():
# if condition check whether the input is zero
  if(b==0):
    c="Zero"
# return zero
    return c
# elif condition check whether the input is even
  elif(b%2==0):
    c="Even"
# return even
    return c
# else condition check whether the input is odd
  else:
    c="Odd"
# return odd
    return c
# call odd even function and store it in res
res=odd_even()
# print output as res
print(res)
