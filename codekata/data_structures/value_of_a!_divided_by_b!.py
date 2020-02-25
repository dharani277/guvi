# Given 2 numbers a and B.Print the value of a!/b!
# get input from user in a single line
n=list(map(int,input().split()))
# initialize fact1 is equal to one
fact1=1
# initialize fact2 is equal to one
fact2=1
for i in range(1,n[0]+1):
 fact1=fact1*i
for j in range(1,n[1]+1):
 fact2=fact2*j
# print fact1/fact2 using int datatype
print(int(fact1/fact2))
