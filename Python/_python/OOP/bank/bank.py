class Bank_Account():
    def __init__(self,int_rate, balance = 0): 
      self.int_rate = int_rate
      self.balance = balance
   
    
    def deposit(self, amount):
      self.balance += amount
      return self
    
    def withdraw(self, amount):
        self.balance -= amount
        if self.balance<0:
            print("Insufficient funds")
        return self
    def display_account_info(self):
      print(f"Balance: {self.balance}")
      return self
    
    def yield_interest(self):
      if self.balance > 0:
        self.balance += self.balance *(1+self.int_rate)
      return self


mohammad = Bank_Account(.2, 100)
ahmad = Bank_Account(0.5, 200)

mohammad.display_account_info()


mohammad.deposit(300).deposit(900).deposit(500).withdraw(200).yield_interest().display_account_info()
ahmad.deposit(500).deposit(600).withdraw(90).withdraw(90).withdraw(150).withdraw(20).yield_interest().display_account_info()