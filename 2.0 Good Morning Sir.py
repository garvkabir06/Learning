import time
hour = int(time.strftime("%H"))

if hour < 12:
    print("goodmorning")
elif hour < 18:
    print("good after noon")
elif hour < 19:
    print("good evening")
else:
    print("good night")
