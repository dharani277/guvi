# factorial of a number
# get input as number from user
number=int(input())
# define factorial function
def factorial():
# initialize fact is equal to one
    fact=1
# range from 1 to number using for loop
    for i in range(1,number+1):
# factorial operation
      fact=fact*i
# return fact value
    return fact
# call factorial funtion and store it in output
output=factorial()
# print output value
print(output)
