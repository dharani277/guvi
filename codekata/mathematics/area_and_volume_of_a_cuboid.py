# total surface area and volume of a cuboid
# get length breadth and height from user in a single line
L,B,H=list(map(int,input().split()))
# define area function
def area():
# perform area of a cuboid operation
  area=2*(L*B+B*H+H*L)
  return area
# define volume function
def volume(): 
# perform volume of a cuboid operation
  volume=L*B*H
  return volume
# result1 calls the area function and store it in result1
result1=area()
# result2 calls the volume function and store it in result2
result2=volume()
# print the result1 and result 2 value
print(result1,result2)
