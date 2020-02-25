# print the first 3 multiples of the given number N
# get the input N from user
N=int(input())
# define series function
def series():
# for loop is used to print first 3 multiples
  for i in range(1,4):
    c=i*N
    print(c,end="")
    if(i<3):
      print(end=" ")
# call the series function
series()
