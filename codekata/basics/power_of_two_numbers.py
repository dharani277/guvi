# power of two numbers
# get A and B values as input from user in a single line with space
A,B=list(map(int,input().split()))
# define power function
def power():
# perform exponential operation
	c=A**B
# return c value
	return c
# call power function and store it in out
out=power()
# print out value
print(out)
