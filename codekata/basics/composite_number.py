# print 'yes' if it is composite number else print 'no'
# get num input from user
num=int(input())
# define composite function
def composite():
# initialize c is equal to zero
  c=0
  for i in range(1, num + 1):
    if num % i == 0:
      d=i
      c=c+1
# if condition checks c is greater than 2
  if(c>2):
    print("yes")
  else:
    print("no")
composite()
        

