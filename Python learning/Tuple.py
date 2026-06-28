tup = (1,2,3)
print(type(tup), tup)

# if i dont put comma after value it will show data type integer
tup = (1)
print(type(tup), tup)

#if i put comma then tuple
tup = (1,)
print(type(tup), tup)

#list can be changed 
tup = [1,2,3]
tup[0] = 12
print(tup)

# But tuple cant because these are immutable
# tup = (1,2,3,4)
# tup[0] = 12
# print(tup)
 
tup1 = (1,2,3,4,5,6,7,)
if 1 in tup1:
    print("yes, 1 is in tup")
    