# convert kilometer into meter and centimeter
# get kilometer as input from user
a=int(input())
# define function for meter
def meter():
# convertion kilometer into meter 
  b=a*1000
# return meter value
  return b
# call the meter function and store it in result
result=meter()
# define function for centimeter
def centimeter():
# convertion kilometer into centimeter
  c=a*100000
# return centimeter value
  return c
# call the centimeter function and store it in result1
result1=centimeter()
# print the result and result1
print(result)
print(result1)
