# sum of arithmetic series 
# get three inputs from user in a single line
a,d,n=list(map(int,input().split()))
# define arithmetic function
def arithmetic():
# to perform arithmetic operation
  ap=n/2*(2*a+(n-1)*d)
  r=round(ap)
  return r
# call arithmetic function and store it in result
result=arithmetic()
# print the result value
print(result)
