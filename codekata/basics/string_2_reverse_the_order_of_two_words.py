# Given a string S consisting of 2 words reverse the order of two words 
# get input N from user
N=input()
c=(N.split())
# reverse the order and join extra space
output=' '.join(c[-1:-3:-1])
# print output value
print(output)
