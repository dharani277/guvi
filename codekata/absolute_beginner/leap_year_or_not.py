# leap year or not
# get input value from user
value=int(input())
# define leap year function
def leap_year():
# if condition check whether the value is leap year
  if(value%4==0):
    c="Y"
# reurn leap year
    return c
# else condition check whether the value is not a leap year
  else:
    c="N"
# return not leap year
    return c
# call the leap year function and store it in output
output=leap_year()
# print output 
print(output)
