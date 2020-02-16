# convert celcius to fahrenheit
# get celcius input from user
celcius=int(input())
# define fahrenheit function
def fahrenheit():
# fahrenheit formula
  f=celcius*1.8+32
# roundoff to two decimal place
  res=round(f,2)
# return res value
  return res
# call fahrenheit function and store it in out
out=fahrenheit()
# print out value
print(out)
