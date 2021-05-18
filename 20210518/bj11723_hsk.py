import sys
N = int(sys.stdin.readline())
bit = 0

for i in range(N):
    calculate = sys.stdin.readline().split()
    command = calculate[0]

    if command == 'all':
        bit = (1 << 20) - 1
    elif command == 'empty':
        bit = 0
    else:
        command = calculate[0]
        num = int(calculate[1]) - 1

        if command == 'add':
            bit |= (1 << num)
        elif command == 'remove':
            bit &= ~ (1 << num)
        elif command == 'check':
            if bit & (1 << num) == 0:
                print(0)
            else:
                print(1)
        elif command == 'toggle':
            bit = bit ^ (1 << num)
