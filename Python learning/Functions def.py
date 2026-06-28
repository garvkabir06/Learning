def size(a,b):

   if a > b:
      print(a,"is greter then",b,"and",b,"is less then",a)   

   elif a < b:
      print(a,"is less then",b,"and",b,"is greater then",a)
      
   else:
      print(a,"equal to",b)

a = int(input("enter the number: "))
b = int(input("enter the number: "))

size(a,b)    

c = int(input("enter the number: "))
d = int(input("enter the number: "))

size(c,d)

def islesser(a,b):
   pass         # i'll come back later to complete this code

while True:

    a = int(input("enter the number: "))
    b = int(input("enter the number: "))

    size(a,b)

    if a == 100:
        break
    