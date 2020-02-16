# multiple of two number is perfect square or not
# get two numbers from user in a single line
num1,num2=list(map(int,input().split()))
# define perfect square
def perfect_square():
# if condition check whether the multiples of two number is perfect square or not
  if(num1**2==num1*num2):
    c="yes"
    return c
  else:
    c="no"
    return c
# call perfect square function and store it in res
res=perfect_square()
# print res
print(res)
