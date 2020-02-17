# stone,paper and rock which one wins
# get input str1 and str2 from user
str1,str2=input().split()
# define paper rock scissors function
def paper_rock_scissors():
# if condition check the possibilities of rock and paper
  if(str1=="R" and str2=="P"):
    c="P"
    return c
# elif condition check the possibilities of scissors and paper
  elif(str1=="S" and str2=="P"):
    c="S"
    return c
# elif condition check the possibilities of rock and scissors
  elif(str1=="R" and str2=="S"):
    c="R"
    return c
# else condition check the possibilities of draw
  else:
    c="D"
    return c
# call the paper rock scissors function and store it in res
res=paper_rock_scissors()
# print res value
print(res)
