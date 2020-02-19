# area of the farm
# get two inputs from user in a single line
L,B=list(map(float,input().split()))
# define area farm function
def area_farm():
# perform area of the rectangle
  area=L*B
  n=round(area,5)
  return n
# call area farm function and store it in res
res=area_farm()
# print res value
print(res)
