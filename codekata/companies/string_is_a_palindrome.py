# given string is a palindrome using stack or linked list and print 'yes' otherwise print 'no'.
# get input S from user
S=input()
# reverse the string value and store it in a
a=S[-1::-1]
# if condition checks the S value is equal to reversed string value print yes else no
if(S==a):
  print("yes")
else:
  print("no")
