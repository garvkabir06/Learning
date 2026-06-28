Title="MY FIRST PROJECT"                #Title of project
print(Title.center(25,"*"))

#Taking input for first and second number and changing string into integer

num1=int(input("enter the first number"))
num2=int(input("enter the second number"))
operator=input("Enter the operator")

# Apllying conditions

if operator=="+":
    print("The total of",num1,"and",num2,"is",num1+num2)
elif operator=="-":
    print("The total of",num1,"and",num2,"is",num1-num2)
elif operator=="*":
    print("The total of",num1,"and",num2,"is",num1*num2)
elif operator=="/":
    if num2==0:
       print("cannot be divide by zero")
    else:
       print("The total of",num1,"and",num2,"is",num1/num2)
else:
    print("invalide operator")




