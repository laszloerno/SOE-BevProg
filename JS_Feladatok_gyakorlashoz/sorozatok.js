const sorozatok = [
    {
        "cim": "Stranger Things",
        "epizodokSzama": 34,
        "megjelenesEve": 2016,
        "fontosabbSzereplok": ["Winona Ryder", "David Harbour", "Millie Bobby Brown"],
        "kategoria": "Sci-Fi, Horror"
    },
    {
        "cim": "The Crown",
        "epizodokSzama": 60,
        "megjelenesEve": 2016,
        "fontosabbSzereplok": ["Claire Foy", "Olivia Colman", "Imelda Staunton"],
        "kategoria": "Dráma, Történelmi"
    },
    {
        "cim": "The Mandalorian",
        "epizodokSzama": 24,
        "megjelenesEve": 2019,
        "fontosabbSzereplok": ["Pedro Pascal", "Gina Carano", "Carl Weathers"],
        "kategoria": "Sci-Fi, Akció"
    },
    {
        "cim": "Breaking Bad",
        "epizodokSzama": 62,
        "megjelenesEve": 2008,
        "fontosabbSzereplok": ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
        "kategoria": "Dráma, Krimi"
    },
    {
        "cim": "Game of Thrones",
        "epizodokSzama": 73,
        "megjelenesEve": 2011,
        "fontosabbSzereplok": ["Emilia Clarke", "Kit Harington", "Peter Dinklage"],
        "kategoria": "Fantasy, Dráma"
    },
    {
        "cim": "The Witcher",
        "epizodokSzama": 16,
        "megjelenesEve": 2019,
        "fontosabbSzereplok": ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
        "kategoria": "Fantasy, Akció"
    },
    {
        "cim": "The Office",
        "epizodokSzama": 201,
        "megjelenesEve": 2005,
        "fontosabbSzereplok": ["Steve Carell", "Rainn Wilson", "John Krasinski"],
        "kategoria": "Vígjáték"
    },
    {
        "cim": "Friends",
        "epizodokSzama": 236,
        "megjelenesEve": 1994,
        "fontosabbSzereplok": ["Jennifer Aniston", "Courteney Cox", "Matthew Perry"],
        "kategoria": "Vígjáték, Romantikus"
    },
    {
        "cim": "The Boys",
        "epizodokSzama": 24,
        "megjelenesEve": 2019,
        "fontosabbSzereplok": ["Karl Urban", "Jack Quaid", "Antony Starr"],
        "kategoria": "Akció, Dráma"
    },
    {
        "cim": "Money Heist",
        "epizodokSzama": 41,
        "megjelenesEve": 2017,
        "fontosabbSzereplok": ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"],
        "kategoria": "Krimi, Dráma"
    },
    {
        "cim": "The Umbrella Academy",
        "epizodokSzama": 30,
        "megjelenesEve": 2019,
        "fontosabbSzereplok": ["Elliot Page", "Tom Hopper", "David Castañeda"],
        "kategoria": "Sci-Fi, Akció"
    },
    {
        "cim": "Ozark",
        "epizodokSzama": 44,
        "megjelenesEve": 2017,
        "fontosabbSzereplok": ["Jason Bateman", "Laura Linney", "Julia Garner"],
        "kategoria": "Dráma, Krimi"
    },
    {
        "cim": "The Good Place",
        "epizodokSzama": 53,
        "megjelenesEve": 2016,
        "fontosabbSzereplok": ["Kristen Bell", "Ted Danson", "William Jackson Harper"],
        "kategoria": "Vígjáték, Fantasy"
    },
    {
        "cim": "Narcos",
        "epizodokSzama": 30,
        "megjelenesEve": 2015,
        "fontosabbSzereplok": ["Wagner Moura", "Pedro Pascal", "Boyd Holbrook"],
        "kategoria": "Krimi, Dráma"
    },
    {
        "cim": "Black Mirror",
        "epizodokSzama": 22,
        "megjelenesEve": 2011,
        "fontosabbSzereplok": ["Daniel Kaluuya", "Bryce Dallas Howard", "Jodie Comer"],
        "kategoria": "Sci-Fi, Dráma"
    },
    {
        "cim": "The Haunting of Hill House",
        "epizodokSzama": 10,
        "megjelenesEve": 2018,
        "fontosabbSzereplok": ["Victoria Pedretti", "Mckenna Grace", "Henry Thomas"],
        "kategoria": "Horror, Dráma"
    },
    {
        "cim": "The Marvelous Mrs. Maisel",
        "epizodokSzama": 43,
        "megjelenesEve": 2017,
        "fontosabbSzereplok": ["Rachel Brosnahan", "Tony Shalhoub", "Alex Borstein"],
        "kategoria": "Vígjáték, Dráma"
    },
    {
        "cim": "Peaky Blinders",
        "epizodokSzama": 36,
        "megjelenesEve": 2013,
        "fontosabbSzereplok": ["Cillian Murphy", "Paul Anderson", "Helen McCrory"],
        "kategoria": "Dráma, Krimi"
    },
    {
        "cim": "The Walking Dead",
        "epizodokSzama": 177,
        "megjelenesEve": 2010,
        "fontosabbSzereplok": ["Andrew Lincoln", "Norman Reedus", "Danai Gurira"],
        "kategoria": "Horror, Dráma"
    },
    {
        "cim": "Supernatural",
        "epizodokSzama": 327,
        "megjelenesEve": 2005,
        "fontosabbSzereplok": ["Jared Padalecki", "Jensen Ackles"],
        "kategoria": "Fantasy, Horror"
    },
    {
        "cim": "The Flash",
        "epizodokSzama": 184,
        "megjelenesEve": 2014,
        "fontosabbSzereplok": ["Grant Gustin", "Candice Patton", "Tom Cavanagh"],
        "kategoria": "Sci-Fi, Akció"
    },
    {
        "cim": "Arrow",
        "epizodokSzama": 170,
        "megjelenesEve": 2012,
        "fontosabbSzereplok": ["Stephen Amell", "Katie Cassidy", "David Ramsey"],
        "kategoria": "Akció, Dráma"
    },
    {
        "cim": "The Simpsons",
        "epizodokSzama": 750,
        "megjelenesEve": 1989,
        "fontosabbSzereplok": ["Dan Castellaneta", "Julie Kavner", "Nancy Cartwright"],
        "kategoria": "Animáció, Vígjáték"
    },
    {
        "cim": "Brooklyn Nine-Nine",
        "epizodokSzama": 153,
        "megjelenesEve": 2013,
        "fontosabbSzereplok": ["Andy Samberg", "Terry Crews", "Andre Braugher"],
        "kategoria": "Vígjáték, Krimi"
    },
    {
        "cim": "The Big Bang Theory",
        "epizodokSzama": 279,
        "megjelenesEve": 2007,
        "fontosabbSzereplok": ["Johnny Galecki", "Jim Parsons", "Kaley Cuoco"],
        "kategoria": "Vígjáték, Romantikus"
    },
    {
        "cim": "The Expanse",
        "epizodokSzama": 62,
        "megjelenesEve": 2015,
        "fontosabbSzereplok": ["Steven Strait", "Dominique Tipper", "Cas Anvar"],
        "kategoria": "Sci-Fi, Dráma"
    }
]