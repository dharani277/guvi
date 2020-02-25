# bitwise AND of the array element
# get input N from user
N=int(input())
# get array of elements in the list form
l=list(map(int,input().split()))
# define logic and function
def logic_and():
  for i in range(0,N):
    c=l[i]&l[i+1]
    return c
# call the logic and and store it in result
result=logic_and()
# print result value
print(result)
