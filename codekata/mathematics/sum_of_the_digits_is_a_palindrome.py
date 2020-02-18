# sum of the digits is a palindrome or not
# get input number from user
number=int(input())
# define palindrome function
def palindrome(number):
# initialize sum is equal to zero
  sum=0
# while loop checks condition for sum of the digits
  while(number>0):
    r=number%10
    sum=sum+r
    number=number//10
  return sum
# calls the palindrome function and store it in o
o=palindrome(number)
# define pal function
def pal(o):
# initialize rev is equal to zero
  rev=0
  temp=o
# while loop checks condition for reverse sum of the digits
  while(temp>0):
    Rem=temp%10
    rev=(rev*10)+Rem
    temp=temp//10
 # if condition checks the sum od the digits is equal to reverse sum of the digits
  if(o==rev):
    c="yes"
    return c
  else:
    c="no"
    return c
 # calls the pal function and store it in out
out=pal(o)
# print out value
print(out)
  
