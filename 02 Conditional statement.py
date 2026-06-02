num=18
# if statement useage 
if num<0:
    print("number is negative")
#elif statement usage
elif(num>0):
    # nested statement usage
    if(num<=0):
        print("number is between -10")
    elif(num >10 and num <=20):
        print("number is between 20")
    else:
        print("number is greater then 20")
#else statement usage
else:
    print("number is zero")

