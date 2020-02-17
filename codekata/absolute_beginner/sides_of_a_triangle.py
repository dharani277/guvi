# sides of a triangle
# get three sides from user in a single line with space
a,b,c=list(map(int,input().split()))
# define triangle function
def triangle():
# if condition check the triangle formation
  if(a+b<=c or a+c<=b or b+c<=a):
    d="no"
    return d
  else:
    d="yes"
    return d
# call the triangle function and store it in res
res=triangle()
# print res value
print(res)
