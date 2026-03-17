from classes import Vehicle, Car, Bike

def main():
    # Creating objects
    vehicle1 = Vehicle("Toyota", "Corolla", 2020)
    car1 = Car("BMW", "X5", 2022, "Petrol")
    bike1 = Bike("Trek", "Marlin 7", 2021, "Mountain")

    # Storing in a list
    vehicles = [vehicle1, car1, bike1]

    # Iterating through the list (Polymorphism)
    for v in vehicles:
        print(v)
        print(v.start_engine())
        print(v.move())  # Shows different behavior for Car and Bike
        print()          # Empty line for spacing

    # Calling specific methods
    print(car1.honk())
    print(bike1.ring_bell())

if __name__ == "__main__":
    main()