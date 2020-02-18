# sum of square of its digits
# get input number from user
number=int(input())
# define sum square digits function
def sum_square_digits(number):
# initialize sum is equal to zero
  sum=0
# while loop condition checks the sum of square of the digits
  while(number>0):
    r=number%10
    s=r*r
    sum=sum+s
    number=number//10
  return sum
# calls the sum square digits and store it in out
out=sum_square_digits(number)
# print out value
print(out)
  
