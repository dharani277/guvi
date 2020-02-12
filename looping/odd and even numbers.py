# sum of even number and odd number

full=[]
even=[]
odd=[]
sumeven=0
sumodd=0
z=[]
y=[]
length=int(input("Enter the Number of Elements: "))
for i in range(0,length):
  a=int(input("Enter the values: "))
  full.append(a)
print("The list of Numbers are: ",full)
for j in full:
  if(j%2==0):
   even.append(j)
  else:
   odd.append(j)    
print("The list of Even numbers are: ",even)
print("The list of Odd numbers are: ",odd)
for k in even:
  sumeven+=k
z.append(sumeven)
print("The list of sum of even numbers are: ",z)
for l in odd:
  sumodd+=l
y.append(sumodd)
print("The list of sum of odd numbers are: ",y)
