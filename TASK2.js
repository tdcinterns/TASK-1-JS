let Users = [
    {
        username : 'Usman',
        password : 'Usman@2002'
    },
    {
        username : 'Ali',
        password : 'Ali@2003'
    },
    {
        username : 'Ahmed',
        password : 'Ahmed@2004'
    },
    {
        username : 'Haider',
        password : 'Haider@2005'
    },
    {
        username : 'Abu Baqr',
        password : 'AbuBaqr@2006'
    }
];

let authenticateFunc = (name,password) => {
    let user = Users.find((user) => user.username === name);
    if (user && user.password === password)
    {
        console.log("Valid Person");
    }
    else
    {
        console.log("Invalid Person");
    }
};

authenticateFunc('Usman','Usman@2002');
authenticateFunc('Ali','Ali@2003');
authenticateFunc('Usm','Usman@2002');