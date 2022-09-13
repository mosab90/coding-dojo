class User:		
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
 
    def make_deposit(self, amount):	
    	self.account_balance += amount	

    def make_withdrawal(self, amount):
        self.account_balance -= amount
    def display_user_balance(self):
        print(self.account_balance)
    def  transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance +=amount

guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
Abdelfattah=User(email="aaaa.a@a",name="abboud")

Abdelfattah.make_deposit(5)

guido.transfer_money( Abdelfattah, 300)

guido.make_deposit(100)
guido.make_deposit(200)



guido.display_user_balance()	
Abdelfattah.display_user_balance()	
