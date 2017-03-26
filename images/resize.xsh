import sys

def resize(args, size=250):
    convert @(args) -resize @('x{}'.format(size)) @('m{}'.format(args))


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: \nresize.xsh fname")
        sys.exit()
    resize(sys.argv[1])
