# simple interest convertion
# get principle, rate and time from user in single line
principle,rate,time=list(map(float,input().split()))
# define simple function
def simple():
# simple interest formula
  interest=principle*rate*time/100
# roundoff upto two decimal place and store it in s
  s=round(interest,2)
# return s value
  return s
# call the simple function and store it in result 
result=simple()
# print result value
print(result)
