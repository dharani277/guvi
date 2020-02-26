# Given a string S convert each characters of the string into ASCII values and print the sum of the numbers
# get input from user
N=input()
# initialize sum is equal to zero
sum=0
# for loop increases from zero to length of N
for i in range(0,len(N)):
  c=ord(N[i])
  sum=sum+c
# print sum value
print(sum)
