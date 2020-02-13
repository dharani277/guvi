# Calculator

n=int(input("Enter the Number 1: "))
m=int(input("Enter the Number 2: "))
print("add=1, sub=2, mul=3, div=4, mod=5, square=6")
s=int(input("Enter the Choice: "))
if(s==1):
 print("Addtion Value is: ",n+m)
elif(s==2):
  print("Subtraction Value is: ",n-m)
elif(s==3):
  print("Multiplication Value is: ",n*m)
elif(s==4):
  print("Division Value is: ",n/m);
elif(s==5):
  print("Modulo Value is: ",n%m)
elif(s==6):
  print("Square of Number 1: ",n**2)
  print("Square of Number 2: ",m**2)
