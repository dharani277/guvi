# number of days in the month corresponding to that number
# get month as input from user
month=int(input())
# define the days function
def days():
# if condition check whether the month is equal to 2
  if(month==2):
    c=28
    return c
# elif condition check whether the following condition is true or not
  elif (month==1 or month==3 or month==5 or month==7 or month==8 or month==10 or month==12):
    c=31
    return c
# elif condition check whether the following condition is true or not
  elif (month==4 or month==6 or month==9 or month==11):
    c=30
    return c
# else condition check input is not in valid range
  else:
    c="Error"
    return c
# call the days function and store it in result
result=days()
# print the result
print(result)
