# Nth term of the series
# get input from the user
n=int(input())
# define series function
def series():
# if condition check whether the given number is positive integer
    if(n>0):
# it generates series
     c=n*n
# return the c value
     return c
# elif condition check whether the given number is equal to zero
    elif(n==0):
# zero is stored in c
     c="0"
# return c value
     return c
# else condition check whether the given number is negative integer
    else:
# Error is stored in c
     c="Error"
# return c value
     return c
# call the series function and store the output in res
res=series()
# print the res
print(res)
