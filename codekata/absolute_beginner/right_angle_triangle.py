# right angle triangle
# get three inputs from user in a single line
A,B,C=list(map(int,input().split()))
# define right function
def right():
# if condition check whether the given inputs are right angle triangle or not
  if(((A*A)+(B*B))**0.5==C):
    c="yes"
    return c
  else:
    c="no"
    return c
# call right function and store it in out
out=right()
# print out value
print(out)
