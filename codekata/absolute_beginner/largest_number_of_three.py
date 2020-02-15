# largest number of three numbers
# get the three numbers from user
first=int(input())
second=int(input())
third=int(input())
# define largest number function
def largest_number(first,second,third):
# if condition check whether the first number is largest
  if(first>second and first>third):
# returns first number
    return first
# elif condition check whether the second number is largest
  elif(second>first and second>third):
# return second number
    return second
# else condition return the third number is largest
  else:
# return third number
    return third
# call the largest number and store it in n
n=largest_number(first,second,third)
# print the n value
print(n)
