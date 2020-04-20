#python 2.7.25
# -*- coding: utf-8 -*- 
  
bool = True

#조건문
if bool:
  print("1")
else:
  print("2")

if "1" in ["1","2","3"]:
  print(True)
else:
  print(False)


s1 = set([1, 2, 3, 4, 5, 6])
s2 = set([4, 5, 6, 7, 8, 9])

#교집합
print(s1 & s2)
print("-other-")
print(s1.intersection(s2))

#합집합
print(s1 | s2)
print("-other-")
print(s1.union(s2))

#차집합
print(s1 - s2)
print(s2 - s1)
print("-other-")
print(s1.difference(s2))
print(s2.difference(s1))

