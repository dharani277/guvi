# Given a number N followed by N numbers.Find the smallest number and largest number and print both the indices
# get input n from user
n=int(input())
a = list(map(int,input().strip().split()))[:n]
# define indices function 
def indices():
 m=a.index(min(a))
 k=a.index(max(a))
#print the smallest and largest number based on indices
 print(m+1,k+1)
# call indices function 
indices()
