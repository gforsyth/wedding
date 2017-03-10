import sys

def resize(args):
    convert @(args) -resize x250 @('m{}'.format(args))


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: \nresize.xsh fname")
        sys.exit()
    resize(sys.argv[1])
