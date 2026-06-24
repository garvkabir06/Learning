# Apppend adds a number in end of list
l = [1,2,3,4,5,6,7,8,9]
l.append(10)
print(l)

# sort is to put list in ascending order
l1 = [1,2,3,4,20,6,7,8,9]
l1.sort()
print(l1)

# its a way to use reverse in list
l2 = [1,2,3,4,5,6,7]
l2.sort(reverse = True)
print(l2)

# insert is used to put a value in the list l.index(index,value)
l3 = [1,2,3,4,5]
l3.insert(5,10)
print(l3)

# index is used to find index of the value
l4 = [1,2,3,4,5]
print(l4.index(3))

# count is used to find how much time a value is present in the list
l5 = [1,2,3,4,5]
print(l5.count(4))

# extend is used to add two list
l6 = [1,2,3,4,5]
m = [800,900,200]
l6.extend(m)
print(l6)

# reverse is used to reverse the list
l7 = [1,2,3,4,5]
l7.reverse()
print(l7)

# copy() is used to copy the list
k = l7.copy()
print(k)

