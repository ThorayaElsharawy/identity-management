const users = [
    {
        username: "alice_johnson",
        email: "alice.johnson@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Alice Johnson"
    },
    {
        username: "bob_smith",
        email: "bob.smith@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Bob Smith"
    },
    {
        username: "carol_taylor",
        email: "carol.taylor@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Carol Taylor"
    },
    {
        username: "david_brown",
        email: "david.brown@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "David Brown"
    },
    {
        username: "eva_davis",
        email: "eva.davis@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Eva Davis"
    },
    {
        username: "frank_wilson",
        email: "frank.wilson@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Frank Wilson"
    },
    {
        username: "grace_clark",
        email: "grace.clark@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Grace Clark"
    },
    {
        username: "henry_martinez",
        email: "henry.martinez@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Henry Martinez"
    },
    {
        username: "isabella_lewis",
        email: "isabella.lewis@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Isabella Lewis"
    },
    {
        username: "jack_white",
        email: "jack.white@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Jack White"
    },
    {
        username: "karen_harris",
        email: "karen.harris@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Karen Harris"
    },
    {
        username: "larry_young",
        email: "larry.young@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Larry Young"
    },
    {
        username: "mona_king",
        email: "mona.king@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Mona King"
    },
    {
        username: "nina_scott",
        email: "nina.scott@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Nina Scott"
    },
    {
        username: "oscar_green",
        email: "oscar.green@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Oscar Green"
    },
    {
        username: "paula_adams",
        email: "paula.adams@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Paula Adams"
    },
    {
        username: "quincy_baker",
        email: "quincy.baker@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Quincy Baker"
    },
    {
        username: "rachel_hill",
        email: "rachel.hill@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Rachel Hill"
    },
    {
        username: "sam_campbell",
        email: "sam.campbell@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Sam Campbell"
    },
    {
        username: "tina_moore",
        email: "tina.moore@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Tina Moore"
    },
    {
        username: "ulysses_rivera",
        email: "ulysses.rivera@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Ulysses Rivera"
    },
    {
        username: "vera_perez",
        email: "vera.perez@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Vera Perez"
    },
    {
        username: "will_rogers",
        email: "will.rogers@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Will Rogers"
    },
    {
        username: "xena_patterson",
        email: "xena.patterson@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Xena Patterson"
    },
    {
        username: "yara_russell",
        email: "yara.russell@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Yara Russell"
    },
    {
        username: "zachary_torres",
        email: "zachary.torres@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Zachary Torres"
    },
    {
        username: "amber_evans",
        email: "amber.evans@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Amber Evans"
    },
    {
        username: "blake_walker",
        email: "blake.walker@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Blake Walker"
    },
    {
        username: "cathy_robinson",
        email: "cathy.robinson@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Cathy Robinson"
    },
    {
        username: "derek_morgan",
        email: "derek.morgan@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Derek Morgan"
    },
    {
        username: "eli_foster",
        email: "eli.foster@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Eli Foster"
    },
    {
        username: "fiona_cooper",
        email: "fiona.cooper@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Fiona Cooper"
    },
    {
        username: "gavin_gonzales",
        email: "gavin.gonzales@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Gavin Gonzales"
    },
    {
        username: "holly_stewart",
        email: "holly.stewart@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Holly Stewart"
    },
    {
        username: "ian_morris",
        email: "ian.morris@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Ian Morris"
    },
    {
        username: "jade_bell",
        email: "jade.bell@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Jade Bell"
    },
    {
        username: "kyle_edwards",
        email: "kyle.edwards@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Kyle Edwards"
    },
    {
        username: "lara_bennett",
        email: "lara.bennett@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Lara Bennett"
    },
    {
        username: "mike_hunter",
        email: "mike.hunter@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Mike Hunter"
    },
    {
        username: "nora_hughes",
        email: "nora.hughes@example.com",
        emailVisibility: true,
        password: "12345678",
        passwordConfirm: "12345678",
        name: "Nora Hughes"
    }
];


const url = "http://127.0.0.1:8090/api/collections/users/records"

for (let i = 0; i < 40; i++) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(users[i])
    })
}