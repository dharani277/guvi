# print the bitwise or of the array element
# get input N from user
N=int(input())
# get array of elements in the list from user
l=list(map(int,input().split()))
# define logic or function
def logic_or():
  for i in range(0,N):
    c=l[i]|l[i+1]
    return c
# call the logic or function and store it in result
result=logic_or()
# print result value
print(result)
