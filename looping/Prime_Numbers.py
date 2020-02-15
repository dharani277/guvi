# Prime Number or Not

n=int(input("Enter the number of elements: "))
m=[]
l=[]
for i in range (1,n+1):
  s=int(input("enter the value :"))
  if(s>1):
    for j in range (2,s//2+1):
      if((s%j)==0):
        l.append(s)
        break
    else:
      m.append(s)
print("The list of Prime Numbers :",m)
print("The list of Non Prime Numbers :",l)      
