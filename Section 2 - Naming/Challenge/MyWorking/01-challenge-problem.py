class Point:
    def __init__(self, coordX, coordY):
        self.coordX = coordX
        self.coordY = coordY


class Rectangle:
    def __init__(self, origin_point, width, height):
        self.origin_point = origin_point
        self.width = width
        self.height = height

    def get_area(self):
        return self.width * self.height

    def print_points(self):
        top_right_coordX = self.origin_point.coordX + self.width
        bottom_left_coordY = self.origin_point.coordY - self.height
        
        print('Starting Point (X)): ' + str(self.origin_point.coordX))
        print('Starting Point (Y)): ' + str(self.origin_point.coordY))
        print('End Point X-Axis (Top Right): ' + str(top_right_coordX))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left_coordY))


def create_rectange():
    origin_point = Point(50, 100)
    rectangle = Rectangle(origin_point, 90, 10)

    return rectangle


my_rectange = create_rectange()

print(my_rectange.get_area())
my_rectange.print_points()