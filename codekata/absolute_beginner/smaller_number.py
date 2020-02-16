# find the smaller number
# get two inputs from user in a single line
x,y=list(map(int,input().split()))
# define small function
def small():
# if condition check whether x is smaller or not
  if(x<y):
    c=x
# return c value
    return c
# else condition check whether y is smaller or not
  else:
    c=y
# return c value
    return c
# call small function and store it in result
result=small()
# print result value
print(result)
  
