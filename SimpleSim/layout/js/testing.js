/*
  The List of Currencies!

  Currently, this is done on the client side. Not a good thing! But, that will be fixed once a server side portion
  is created. For now, let's just pretend that the code is nice and cozy and where it should be.

  To create a list of currencies, you create a new object of type CurrencyList (Great naming, huh?). Now, the
  important thing is the name you give the variable. Because we aren't working with server config files yet, I had to
  make it use a very specific name. This will change later on..
*/

var currencyList = new CurrencyList();

/*
  What's going on (Ignore this if you don't care):

  Basically, I'm creating an object that will hold onto one thing:
    - The Currency object

  It holds onto this through it's own object
  (found in CurrencyList.list)

  It's an object because it makes it easy to grab a certain currency. So if I have three currencies:
  - USD
  - EURO
  - Colidollars (The ultimate currency)

  The currencyList.list would look like this:

  {
    usd: <USD Currency Object>,
    euro: <EURO Currency Object>,
    colidollars: <Colidollars Currency Object>
  }

  For developers, ignore the < >, it's not apart of the syntax, it's just because [object Object] isn't that descriptive.

  So, why this way versus a simple array of Currency objects? Well, this way I can easily target the
  right currency by saying currencyList.list['currencyIWant']!

  Moving on!
*/

/*
  Adding a currency!

  This is the fun part, and it's actually very convoluted (but a necessary convlution.. So maybe just slightly complicated).

  This is a two step process. First is defining the currency, then you have to add it through the CurrencyList
  object's addCurrency method.

  To *create* a currency, you use this syntax:

  var uniqueCurrencyName = new Currency('uniqueCurrencyName');

  There is no currency checking yet, so better be careful about not overriding an already existing currency.
  It might get weird then.

  To *add* a currency that can be used in the game, you use this syntax:

  currencyList.addCurrency(uniqueCurrencyName);

  This just basically adds a property to the currencyList.list with the name of the currency you are adding into the game.

  Note: Right now, you can only pass in one variable, which is the name of the currency, but there is actually a
  completely separate (but very crucial) part of the engine that is being called upon. It's called a handler.
  The handler is in charge of.. well.. Handling things. Instead of the Currency object doing any data processing for
  adding and subtracting, it calls upon a handler to do it.

  This allows me to keep all my base models (Player, Currency, Wallet, etc.) free from user preference code,
  and allows for an easier time building onto the system.
*/

var usd = new Currency('usd');
currencyList.addCurrency(usd);

/*
  What's going on:

  As with all two parters, there are are multiple roads being taken, so lets take it line by line.
  First is the creation of the currency. By calling new Currency and passing in a string, you are
  naming that currency whatever the string says. You could easily say:

  var dogdollars = new Currency('catdollars');

  But if your intentions were to make dogdollars, you're not going to be too happy, because you
  created catdollars.

  As I stated above there is actually a handler that is being assigned through a CurrencyHandler class.
  The CurrencyHandler class is supposed to be a fall back, but is not meant for actual gameplay purposes.

  When you add the currency, you are calling upon the variable name, and you are passing the Currency object.
  The Currency object has only two properties:
    - The currency name
    - The handler being used

  currencyList's addCurrency method extracts the name of the currency and uses it as the currencyList.list
  property name, and then assigns the property value to the Currency object. This is done for performance reasons.
  When we look at the player, we will discuss the Wallet. That's when I'll explain the performance reasons.
*/

/*
  THE CREATION OF PEOPLE

  I feel like this should be the most advanced piece of the code, but currently there is nothing to it.
  All you can do is add a player who has a name. Boring right? To do this, you simply type:

  var player = new Player("YourNameHere");

  The important thing is to make sure the currencyList and a currency is added before you create a player, otherwise
  you'll get a weird result in your wallet and potentially some errors that make things crash (Boo!)
*/

var player = new Player("Alice");

/*
  What's going on:

  The player object currently holds onto two main variables:
    - The player's name
    - The player's wallet

  The wallet is automagically created (var wallet = new Wallet(currencyList.listOfCurrencies)) on player creation.

  Instead of telling you about the wallet in a seperate thing, I'l just do it here, because we are about to make a call
  to the wallet.

  The Wallet object is very basic. It, just like the currencyList is primarily just going to have a JSON object that holds
  onto all the currencies. The difference is that while CurrencyList's list properties hold a Currency object, the Wallet's
  currencies (Wallet.currencies, which is the JSON object mentioned moments ago) properties hold onto the amount that you
  have of that currency.

  So why not just have it hold onto the Currency object? Well, that's a great question! Let me give you a scenario..
  If there are 5 currencies and 10 players playing a game, that means there are 50 Currency objects floating around..
  This means that we are dealing with a p*c situation. Where p is the amount of players and c is the amount of currencies.
  Though it isn't exponential, it is very easy to see where growth could cause issues:

    p  |  c  |  o
  ----------------
   10  |  5  | 50
   11  |  5  | 55
   10  |  6  | 60
   100 | 100 | 10,000

  So instead, the CurrencyList holds onto all Currency objects. In the same scenario, we would see something like this:

    p  |  c  |  o
  ----------------
   10  |  5  |  5
   11  |  5  |  5
   10  |  6  |  6
   100 | 100 | 100

   This has drastically cut down performance issues that might have beeng gained through a games increasing popularity.

   Enough chit chat, let's just view the wallet, right?! To view the player's wallet, you just say

   playerVariable.viewWallet();
*/

player.viewWallet();

/*
    Pretty nifty right!? You can see that Alice is broke.. So how about we give her a dollar?
*/

player.wallet.incrementCurrency('usd', 1);

/*
  This line of code will eventually be shorter, probably to player.incrementCurrency, but for now, let's go with it.

  So let's see how much money she has..
*/

player.viewWallet();

/*
  Boom! She has money! At least enough to buy a 1.5L soda at Walgreens (Sans tax).

  This concludes the tour of the code. I hope you enjoyed it.
*/
